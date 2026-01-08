"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaCommentAlt, FaSearch, FaFilter, FaTrash, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { ref, onValue, remove } from "firebase/database";
import { database } from "@/lib/firebase";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const [filteredMessages, setFilteredMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [dateFilter, setDateFilter] = useState('');
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [messageDetailOpen, setMessageDetailOpen] = useState(false);

    // Fetch messages from Firebase
    useEffect(() => {
        const messagesRef = ref(database, 'Messages');

        const unsubscribe = onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const messageList = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                // Sort by timestamp (newest first)
                messageList.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                setMessages(messageList);
                setFilteredMessages(messageList);
            } else {
                setMessages([]);
                setFilteredMessages([]);
            }
            setLoading(false);
        }, (error) => {
            console.error("Error fetching messages: ", error);
            toast.error("মেসেজ লোড করতে সমস্যা হয়েছে।");
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    // Apply filters when search term or date filter changes
    useEffect(() => {
        let filtered = [...messages];

        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(msg =>
                msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                msg.phone.includes(searchTerm) ||
                msg.message.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply date filter
        if (dateFilter) {
            filtered = filtered.filter(msg => {
                const msgDate = new Date(msg.timestamp).toISOString().split('T')[0];
                return msgDate === dateFilter;
            });
        }

        setFilteredMessages(filtered);
    }, [searchTerm, dateFilter, messages]);

    // Delete message
    const handleDeleteMessage = async (messageId) => {
        if (window.confirm("আপনি কি নিশ্চিত যে আপনি এই মেসেজটি মুছে ফেলতে চান?")) {
            try {
                await remove(ref(database, `Messages/${messageId}`));
                toast.success("মেসেজ সফলভাবে মুছে ফেলা হয়েছে!");
                if (selectedMessage && selectedMessage.id === messageId) {
                    setMessageDetailOpen(false);
                    setSelectedMessage(null);
                }
            } catch (error) {
                console.error("Error deleting message: ", error);
                toast.error("মেসেজ মুছে ফেলতে সমস্যা হয়েছে।");
            }
        }
    };

    // Format timestamp for display
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString('bn-BD', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Open message detail
    const openMessageDetail = (message) => {
        setSelectedMessage(message);
        setMessageDetailOpen(true);
    };

    // Close message detail
    const closeMessageDetail = () => {
        setMessageDetailOpen(false);
        setSelectedMessage(null);
    };

    return (
        <div className="bg-lc p-[2px] rounded-xl h-[400px] overflow-hidden">
            <motion.div
                className="bg-white rounded-[10px] p-6 md:p-8 h-full overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center mb-8">
                    <h2 className="pt-1 text-2xl md:text-3xl tiro-bangla-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                        প্রাপ্ত মেসেজসমূহ
                    </h2>
                    <p className="text-gray-600">সকল মেসেজ দেখুন এবং ব্যবস্থাপনা করুন</p>
                </div>

                {/* Search and Filter Bar */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="নাম, ফোন বা মেসেজ দিয়ে খুঁজুন..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => setFilterOpen(!filterOpen)}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition"
                    >
                        <FaFilter />
                        <span>ফিল্টার</span>
                    </button>
                </div>

                {/* Filter Options */}
                {filterOpen && (
                    <motion.div
                        className="mb-6 p-4 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-purple-500" />
                                <label htmlFor="date-filter" className="text-gray-700">তারিখ:</label>
                                <input
                                    id="date-filter"
                                    type="date"
                                    className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    value={dateFilter}
                                    onChange={(e) => setDateFilter(e.target.value)}
                                />
                            </div>
                            {dateFilter && (
                                <button
                                    onClick={() => setDateFilter('')}
                                    className="text-sm text-red-500 hover:text-red-700"
                                >
                                    তারিখ ফিল্টার মুছুন
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Message Count */}
                <div className="mb-4 text-sm text-gray-600">
                    {filteredMessages.length > 0 ? (
                        <span>মোট {filteredMessages.length} টি মেসেজ পাওয়া গেছে</span>
                    ) : (
                        <span>কোন মেসেজ পাওয়া যায়নি</span>
                    )}
                </div>

                {/* Messages List */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredMessages.length > 0 ? (
                            filteredMessages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => openMessageDetail(message)}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-2 mb-1">
                                                <FaUser className="mt-[-4px] text-purple-500" />
                                                <span className="font-medium">{message.name}</span>
                                                <span className="text-gray-500">|</span>
                                                <FaPhone className="text-pink-500" />
                                                <span className="text-gray-700">{message.phone}</span>
                                            </div>
                                            <p className="text-gray-600 truncate">{message.message}</p>
                                            <p className="text-xs text-gray-400 mt-2">
                                                {formatTimestamp(message.timestamp)}
                                            </p>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteMessage(message.id);
                                            }}
                                            className="ml-2 p-2 text-red-500 hover:bg-red-50 rounded transition"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-12 text-gray-500">
                                <FaCommentAlt className="mx-auto text-4xl mb-4 text-gray-300" />
                                <p>কোন মেসেজ পাওয়া যায়নি</p>
                            </div>
                        )}
                    </div>
                )}
            </motion.div>

            {/* Message Detail Modal */}
            {messageDetailOpen && selectedMessage && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={closeMessageDetail}
                >
                    <motion.div
                        className="bg-white rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-purple-600">মেসেজ বিস্তারিত</h3>
                            <button
                                onClick={closeMessageDetail}
                                className="p-1 rounded-full hover:bg-gray-100"
                            >
                                <FaTimes className="text-gray-500" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">নাম</p>
                                <p className="font-medium flex items-center gap-2">
                                    <FaUser className="text-purple-500" />
                                    {selectedMessage.name}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">ফোন নম্বর</p>
                                <p className="font-medium flex items-center gap-2">
                                    <FaPhone className="text-pink-500" />
                                    {selectedMessage.phone}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">মেসেজ</p>
                                <p className="bg-gray-50 p-3 rounded-lg">{selectedMessage.message}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">পাঠানোর সময়</p>
                                <p className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-purple-500" />
                                    {formatTimestamp(selectedMessage.timestamp)}
                                </p>
                            </div>

                            <div className="pt-4 flex gap-2">
                                <button
                                    onClick={() => handleDeleteMessage(selectedMessage.id)}
                                    className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2"
                                >
                                    <FaTrash />
                                    মুছে ফেলুন
                                </button>
                                <button
                                    onClick={closeMessageDetail}
                                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
                                >
                                    বন্ধ করুন
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default MessageList;