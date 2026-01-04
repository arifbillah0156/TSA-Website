"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Principal from "@/public/Images/SmallBanner1.jpeg"

const AboutSection = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const cardHover = {
        rest: { scale: 1, y: 0 },
        hover: {
            scale: 1.03,
            y: -10,
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 pt-10 pb-16 md:pb-24 overflow-hidden relative roboto-slab-regular">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative ">
                {/* Section Header - UNCHANGED */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 mb-4 tiro-bangla-bold pt-5"
                        initial={{ backgroundPosition: "0% 50%" }}
                        animate={isMounted ? { backgroundPosition: "100% 50%" } : { backgroundPosition: "0% 50%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                        প্রতিষ্ঠান ও পরিচালক পরিচিতি
                    </motion.h2>
                    <motion.div
                        className="w-36 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={isMounted ? { width: "8rem" } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isMounted ? "visible" : "hidden"}
                >
                    {/* Director Profile Card */}
                    <motion.div
                        className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-8 border border-purple-100"
                        variants={itemVariants}
                        whileHover="hover"
                        initial="rest"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Director Image */}
                            <motion.div
                                className="md:col-span-1 flex justify-center"
                                variants={itemVariants}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-40"></div>
                                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <Image src={Principal} quality={100} placeholder='blur' alt="Director"
                                            className="w-full h-full object-cover" />

                                    </div>
                                </div>
                            </motion.div>

                            {/* Director Info */}
                            <motion.div
                                className="md:col-span-2"
                                variants={itemVariants}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-lc tiro-bangla-bold mb-2">মুফতি আব্দুল্লাহ আল হাদী</h3>
                                <p className="font-medium mb-4">প্রতিষ্ঠাতা ও পরিচালক, তাকওয়া শিশু একাডেমি</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">শিক্ষাগত যোগ্যতা</h4>
                                            <p className="text-gray-600 text-sm">দাওরায়ে হাদীস, আরবি সাহিত্য, ইফতা</p>
                                            <p className="text-gray-600 text-sm">ফাজিল, কামিল, এম.এ (ঢাকা বিশ্ববিদ্যালয়)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">বিশেষজ্ঞতা</h4>
                                            <p className="text-gray-600 text-sm">শিশু শিক্ষা ও মনোবিজ্ঞান</p>
                                            <p className="text-gray-600 text-sm">পেরেনটিং ও শিক্ষা ব্যবস্থাপনা</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    মুফতি আব্দুল্লাহ আল হাদী কওমি মাদরাসা থেকে দাওরায়ে হাদীস, আরবি সাহিত্য ও ইফতা সম্পূর্ণ করার সাথে সাথে মাদরাসা-ই-আলিয়া ঢাকা থেকে ফাজিল, কামিল এবং ঢাকা বিশ্ববিদ্যালয় থেকে এম, এ সার্টিফিকেট অর্জন করেন।
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Career Journey Timeline - UNIFIED DESIGN */}
                    <motion.div
                        className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-8 border border-purple-100 mt-8"
                        variants={itemVariants}
                        whileHover="hover"
                        initial="rest"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center tiro-bangla-bold text-lc">কর্মজীবন</h3>

                        <div className="relative">
                            {/* Timeline line - Left aligned for both desktop and mobile */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-200"></div>

                            {/* Timeline items - Unified layout for both desktop and mobile */}
                            <div className="space-y-8">
                                {/* Item 1 */}
                                <motion.div
                                    className="flex items-center"
                                    variants={itemVariants}
                                >
                                    <div className="w-12 flex justify-center pt-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-md z-10"></div>
                                    </div>
                                    <div className="flex-1 pl-6">
                                        <h4 className="font-semibold text-gray-800 mb-1">প্রাথমিক কর্মজীবন</h4>
                                        <p className="text-gray-600 text-sm mb-2">শিক্ষকতা ও গবেষণা</p>
                                        <p className="text-gray-700">কর্মজীবনের শুরুতেই শিক্ষকতা পেশায় যুক্ত হন এবং শিশু শিক্ষা, মনোবিজ্ঞান ও পেরেনটিং বিষয়ে গভীর অধ্যয়ন শুরু করেন।</p>
                                    </div>
                                </motion.div>

                                {/* Item 2 */}
                                <motion.div
                                    className="flex items-center"
                                    variants={itemVariants}
                                >
                                    <div className="w-12 flex justify-center pt-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-md z-10"></div>
                                    </div>
                                    <div className="flex-1 pl-6">
                                        <h4 className="font-semibold text-gray-800 mb-1">তাকওয়া মাদরাসা প্রতিষ্ঠা</h4>
                                        <p className="text-gray-600 text-sm mb-2">শিক্ষা প্রতিষ্ঠান পরিচালনা</p>
                                        <p className="text-gray-700">বন্ধুদের সাথে রাজধানী ঢাকার, উত্তরা উত্তরখানে প্রতিষ্ঠা করেন সুনামধন্য প্রতিষ্ঠান তাকওয়া মাদরাসা।</p>
                                    </div>
                                </motion.div>

                                {/* Item 3 */}
                                <motion.div
                                    className="flex items-center"
                                    variants={itemVariants}
                                >
                                    <div className="w-12 flex justify-center pt-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-md z-10"></div>
                                    </div>
                                    <div className="flex-1 pl-6">
                                        <h4 className="font-semibold text-gray-800 mb-1">তাকওয়া শিশু একাডেমি</h4>
                                        <p className="text-gray-600 text-sm mb-2">এক দশকের পরিচালনা</p>
                                        <p className="text-gray-700">গত এক দশকেরও বেশি সময় ধরে তাকওয়া শিশু একাডেমি পরিচালনা করছেন। শিশুদের জন্য আধুনিক ও ইসলামিক শিক্ষার সমন্বয় ঘটাচ্ছেন।</p>
                                    </div>
                                </motion.div>

                                {/* Item 4 */}
                                <motion.div
                                    className="flex items-center"
                                    variants={itemVariants}
                                >
                                    <div className="w-12 flex justify-center pt-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-md z-10"></div>
                                    </div>
                                    <div className="flex-1 pl-6">
                                        <h4 className="font-semibold text-gray-800 mb-1">মাদরাসাতুল ঈমান</h4>
                                        <p className="text-gray-600 text-sm mb-2">উচ্চতর ইসলামিক শিক্ষা</p>
                                        <p className="text-gray-700">মাদরাসা শিক্ষার মাধ্যমিক ও উচ্চ-মাধ্যমিক লেভেলের জন্য প্রতিষ্ঠা করেছেন মাদরাসাতুল ঈমান ঢাকা।</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Achievements and Vision */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isMounted ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-purple-100"
                            variants={itemVariants}
                            whileHover="hover"
                            initial="rest"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-lc tiro-bangla-bold">অর্জন ও সাফল্য</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    <span className="text-gray-700">শিক্ষা ক্ষেত্রে এক দশকের অভিজ্ঞতা</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    <span className="text-gray-700">শতাধিক শিক্ষক প্রশিক্ষণ প্রদান</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    <span className="text-gray-700">শিশু মনোবিজ্ঞানে গবেষণা প্রবন্ধ প্রকাশ</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    <span className="text-gray-700">ইসলামিক ও আধুনিক শিক্ষার সফল সমন্বয়</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-purple-100"
                            variants={itemVariants}
                            whileHover="hover"
                            initial="rest"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-lc tiro-bangla-bold">দৃষ্টিভঙ্গি</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                ইসলামিক মূল্যবোধের সাথে আধুনিক শিক্ষার সমন্বয় ঘটিয়ে এমন একটি শিক্ষা ব্যবস্থা গড়ে তোলা যা শিশুদের বিশ্বমানের নাগরিক হিসেবে গড়ে তুলতে সহায়তা করবে।
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                প্রতিটি শিশুর সুপ্ত প্রতিভা বিকাশের জন্য পরিবেশ তৈরি করা এবং তাদেরকে নৈতিকভাবে শক্তিশালী করে গড়ে তোলা।
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </section>
    );
};

export default AboutSection;