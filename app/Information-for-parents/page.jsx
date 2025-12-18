"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun, FiUserCheck, FiCalendar, FiDollarSign, FiHome, FiShield, FiAlertCircle, FiInfo, FiChevronDown, FiChevronUp, FiUsers } from 'react-icons/fi';

const points = [
    "প্রত্যেক অভিভাবকের মাসে ১ বার হলেও কর্তৃপক্ষের সাথে সাক্ষাৎ জরুরি।",
    "প্রত্যেক অভিভাবককে মাসিক বেতন প্রতি ইংরেজি মাসের ১০ তারিখের মধ্যে অবশ্যই প্রদান করতে হবে।",
    "কোনো ছাত্র কোনো মাসের কিছুদিন বা অধিকাংশ দিন অনুপস্থিত থাকলে এর জন্য মাসিক বেতন থেকে কোনো টাকা ফেরত দেয়া হয় না।",
    "উল্লেখিত মাসিক বেতন খাবার, আবাসিক চার্জ ও বেতন বাবদ নেয়া অর্থের বাইরের যে কোনো খরচ অভিভাবককে বহন করতে হবে।",
    "বিশেষ কোনো সমস্যা না থাকলে আর্থিক লেনদেন অভিভাবককেই করতে হবে।",
    "ভর্তির পর তা বাতিল করতে চাইলে ভর্তিসংক্রান্ত কোনো টাকা ফেরত দেয়া হবে না।",
    "মাদরাসা কর্তৃপক্ষ ছাত্রের সার্বিক নিরাপত্তা ব্যবস্থা গ্রহণ করে, তা সত্ত্বেও কোনো ছাত্র পালালে কিংবা কোনো দুর্ঘটনায় পড়লে কর্তৃপক্ষকে দায়ী করা যাবে না।",
];

const iconMap = [
    <FiUserCheck className="text-xl" />,
    <FiCalendar className="text-xl" />,
    <FiDollarSign className="text-xl" />,
    <FiHome className="text-xl" />,
    <FiDollarSign className="text-xl" />,
    <FiAlertCircle className="text-xl" />,
    <FiShield className="text-xl" />,
    <FiInfo className="text-xl" />,
];

const colorMap = [
    'from-blue-500 to-indigo-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-rose-500 to-pink-600',
    'from-violet-500 to-purple-600',
    'from-cyan-500 to-sky-600',
    'from-fuchsia-500 to-rose-600',
    'from-lime-500 to-green-600',
];

export default function GuardianInfo() {
    const [darkMode, setDarkMode] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`min-h-screen py-8 px-4 sm:px-6 transition-colors duration-300 `}>
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={``}
                >
                    {/* Header */}
                    <div className="text-center mb-4 md:mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg transform transition-all duration-500 hover:scale-110">
                                <FiUsers className="h-10 w-10 text-white" />
                            </div>
                        </div>
                        <h1 className="tiro-bangla-bold pt-4 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
                            অভিভাবকের জ্ঞাতব্য
                        </h1>
                        <p className="tiro-bangla-regular text-gray-700 max-w-2xl mx-auto text-md md:text-lg">
                            মাদরাসার নিয়মাবলী ও গুরুত্বপূর্ণ তথ্য
                        </p>
                    </div>

                </motion.div>

                {/* Points List */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-5"
                >
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'}`}
                        >
                            <div
                                className={`p-5 cursor-pointer flex items-center ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
                                onClick={() => toggleExpand(index)}
                            >
                                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-r ${colorMap[index]}`}>
                                    <div className="text-white">
                                        {iconMap[index]}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-medium text-lg leading-relaxed">{point}</h3>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <br />
            <br />
        </div>
    );
}