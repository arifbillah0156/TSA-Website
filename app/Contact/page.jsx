"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaUser, FaCommentAlt, FaSchool, FaFemale, FaBook, FaMosque, FaStar, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';
import { Contact } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const contacts = [
        { title: "প্রাক-প্রাথমিক (প্লে-কেজি)", phone: "01617-390171", icon: <FaSchool className="text-purple-500" /> },
        { title: "প্রাথমিক (১ম-৫ম)", phone: "01617-390172", icon: <FaBook className="text-pink-500" /> },
        { title: "বালিকা শাখা (১ম-৫ম)", phone: "01617-390173", icon: <FaFemale className="text-purple-500" /> },
        { title: "মক্তব ও নাজেরা", phone: "01617-390174", icon: <FaMosque className="text-pink-500" /> },
        { title: "হিফজ বিভাগ", phone: "01617-390175", icon: <FaBook className="text-purple-500" /> },
        { title: "কিতাব বিভাগ", phone: "01617-390176", icon: <FaBook className="text-pink-500" /> },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('আপনার বার্তা পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
        setFormData({ name: '', phone: '', message: '' });
    };

    return (
        <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-6 w-full flex justify-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-3 rounded-full text-2xl lg:text-3xl font-bold shadow-lg flex w-max gap-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Contact className='mt-[2px] lg:mt-1' />
                        <span>যোগাযোগ</span>
                    </motion.h1>

                </motion.div>
                <p className="mb-12 text-gray-700 max-w-3xl mx-auto text-lg">
                    শিক্ষার্থীদের লেখাপড়া উন্নয়ন সংক্রান্ত যে কোনো তথ্য জানতে
                    বিভাগীয় নম্বরে যোগাযোগ করতে হবে।
                </p>

                {/* বিভাগীয় যোগাযোগ */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {contacts.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-5 flex items-center justify-between border-l-4 border-purple-500"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <div className="flex items-center">
                                <div className="mr-4 text-2xl">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-purple-600 font-bold mt-1 flex items-center">
                                        <FaPhone className="mr-2" />
                                        {item.phone}
                                    </p>
                                </div>
                            </div>

                            <motion.a
                                href={`tel:${item.phone}`}
                                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaPhone className="mr-2" />
                                <span className='hidden sm:block'>কল করুন</span>
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                {/* প্রশাসনিক সেকশন */}
                <div className="space-y-5 mb-16">
                    <motion.div
                        className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex items-center mb-3">
                            <FaUserTie className="text-purple-600 text-xl mr-3" />
                            <h3 className="font-bold text-lg text-gray-800">
                                প্রশাসনিক / নন একাডেমিক ও একাউন্ট সেকশন
                            </h3>
                        </div>
                        <p className="text-purple-600 font-semibold flex items-center">
                            <FaPhone className="mr-2" />
                            একাউন্ট ও অফিস: 01865-065125
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <div className="flex items-center mb-3">
                            <FaChalkboardTeacher className="text-pink-600 text-xl mr-3" />
                            <h3 className="font-bold text-lg text-gray-800">
                                রুটিন, সিলেবাস, পড়াশোনার মান বিষয়ে যাবতীয় তথ্যের জন্য যোগাযোগ:
                            </h3>
                        </div>
                        <p className="text-pink-600 font-semibold flex items-center">
                            <FaPhone className="mr-2" />
                            প্রধান শিক্ষক: 01865-065120
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <div className="flex items-center mb-3">
                            <FaStar className="text-red-600 text-xl mr-3" />
                            <h3 className="font-bold text-lg text-red-600">
                                বিশেষ প্রয়োজনে
                            </h3>
                        </div>
                        <p className="text-gray-700 mb-1">
                            উপরোক্ত নম্বরে যোগাযোগ করে সমাধান না পেলে বিশেষ প্রয়োজনে যোগাযোগ:
                        </p>
                        <p className="font-semibold text-red-600 flex items-center">
                            <FaPhone className="mr-2" />
                            পরিচালক: 01865-065114
                        </p>
                    </motion.div>
                </div>

                {/* Send Message Section */}
                <motion.div
                    className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lc to-purple-600 mb-2">
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
                        >
                            মেসেজ পাঠান
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}