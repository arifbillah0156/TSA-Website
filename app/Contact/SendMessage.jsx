"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaCommentAlt } from 'react-icons/fa';
import { push, ref, set } from "firebase/database";
import { database } from "@/lib/firebase";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MessageForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const messagesRef = ref(database, 'Messages');
            const newMessageRef = push(messagesRef);

            const messageData = {
                ...formData,
                timestamp: new Date().toISOString()
            };

            await set(newMessageRef, messageData);

            console.log("Message sent successfully with ID: ", newMessageRef.key);
            toast.success("আপনার মেসেজ সফলভাবে পাঠানো হয়েছে!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setFormData({
                name: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error("Error sending message: ", error);
            toast.error("মেসেজ পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Send Message Section */}
            <motion.div
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 md:py-12 ring-2 ring-lc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center mb-8">
                    <h2 className="pt-1 text-2xl md:text-3xl tiro-bangla-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                        আমাদের মেসেজ পাঠান
                    </h2>
                    <p className="text-gray-600">যেকোনো প্রশ্ন বা মতামত থাকলে আমাদের জানান</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                <FaUser className="inline mr-2 text-purple-500" />
                                আপনার নাম
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                placeholder="আপনার নাম লিখুন"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                <FaPhone className="inline mr-2 text-pink-500" />
                                ফোন নম্বর
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                placeholder="আপনার ফোন নম্বর লিখুন"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            <FaCommentAlt className="inline mr-2 text-purple-500" />
                            আপনার মেসেজ
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                            placeholder="আপনার মেসেজ লিখুন..."
                            required
                        ></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "পাঠানো হচ্ছে..." : "মেসেজ পাঠান"}
                    </motion.button>
                </form>
            </motion.div>

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
        </>
    );
};

export default MessageForm;