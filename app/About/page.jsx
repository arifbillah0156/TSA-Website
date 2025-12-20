"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 mb-4 tiro-bangla-bold pt-4"
                        initial={{ backgroundPosition: "0% 50%" }}
                        animate={isMounted ? { backgroundPosition: "100% 50%" } : { backgroundPosition: "0% 50%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                        প্রতিষ্ঠান পরিচিতি
                    </motion.h2>
                    <motion.div
                        className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={isMounted ? { width: "8rem" } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isMounted ? "visible" : "hidden"}
                >
                    {/* Taqwa Shishu Academy Card */}
                    <motion.div
                        className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-8 border border-purple-100"
                        variants={itemVariants}
                        whileHover="hover"
                        initial="rest"
                    >
                        <motion.div
                            className="flex items-center mb-6"
                            variants={cardHover}
                        >
                            <div className="min-w-12 min-h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent pt-1 tiro-bangla-bold">
                                তাকওয়া শিশু একাডেমি
                                <span className="text-sm text-gray-500 ml-2 font-normal">(একাডেমি শাখা)</span>
                            </h3>
                        </motion.div>

                        <motion.p
                            className="text-gray-700 leading-relaxed mb-4"
                            variants={itemVariants}
                        >
                            তাকওয়া শিক্ষা পরিবার প্রতিষ্ঠিত এবং শিশুমনোবিজ্ঞান ও শিশুশিক্ষা গবেষক <span className='font-semibold text-lc'>মুফতি আব্দুল্লাহ আল হাদী</span> পরিচালিত একটি শিশু শিক্ষা কেন্দ্র। যেখানে মাদরাসা ও স্কুলের পাঠ্য বিষয়কে সমন্বয় করে শিশু-বান্ধব কিন্ডারগার্টেনের আদলে (মক্তব + স্কুল) পরিচালনা করা হয়।
                        </motion.p>

                        <motion.p
                            className="text-gray-700 leading-relaxed mb-6"
                            variants={itemVariants}
                        >
                            হিফজসহ আরবি ও জেনারেল উভয় বিষয়কে ১০০% গুরুত্বের সাথে বিবেচনা করে নিয়মিত হোমওয়ার্ক, সি টি - এম টি ও টিউটোরিয়াল পরীক্ষার মাধ্যমে পড়ালেখার মান যাচাই ও জবাবদিহিতা নিশ্চিত করা হয়।
                        </motion.p>

                        <motion.div
                            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100"
                            variants={itemVariants}
                        >
                            <ul className="text-gray-700 space-y-3">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mt-0.5 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span><span className="font-medium text-purple-700">প্রাথমিক ভর্তির বয়স:</span> ৩.৫ / ৪ বছর</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mt-0.5 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span><span className="font-medium text-purple-700">ক্লাস সময়:</span> শ্রেণিভেদে দৈনিক ২ ঘন্টা থেকে ৫–৭ ঘন্টা</span>
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Madrasatul Iman Dhaka Card */}
                    <motion.div
                        className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-8 border border-pink-100"
                        variants={itemVariants}
                        whileHover="hover"
                        initial="rest"
                    >
                        <motion.div
                            className="flex items-center mb-6"
                            variants={cardHover}
                        >
                            <div className="min-w-12 min-h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent pt-1 tiro-bangla-bold">
                                মাদরাসাতুল ঈমান ঢাকা
                                <span className="text-sm text-gray-500 ml-2 font-normal">(মাদরাসা শাখা)</span>
                            </h3>
                        </motion.div>

                        <motion.p
                            className="text-gray-700 leading-relaxed mb-6"
                            variants={itemVariants}
                        >
                            ২য় শ্রেণি এবং নাজেরা উত্তীর্ণ শিক্ষার্থীদের জন্য হিফজ ও কিতাব—এই দুই বিভাগে বেফাক বোর্ডের রেজিস্ট্রেশনকৃত একটি মাদানি নিসাব কওমি মাদরাসা।
                        </motion.p>

                        <motion.div
                            className="space-y-6"
                            variants={itemVariants}
                        >
                            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-5 border border-pink-100">
                                <h4 className="font-bold text-lg text-pink-700 mb-3 flex items-center">
                                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    হিফজ বিভাগ
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                    আন্তর্জাতিক মানের হিফজ বিভাগের পাশাপাশি দৈনিক ১ ঘন্টা জেনারেল শিক্ষা
                                    (৩য়–৫ম শ্রেণি) এবং ফরজে আইন বিষয়ক পাঠদান করানো হয়।
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100">
                                <h4 className="font-bold text-lg text-purple-700 mb-3 flex items-center">
                                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    কিতাব বিভাগ
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                    কিতাব বিভাগে মাদানি নিসাবের সিলেবাসের পাশাপাশি ৬ষ্ঠ থেকে ১০ম শ্রেণি
                                    পর্যন্ত সরকারি মাদরাসার সিলেবাস অনুযায়ী শিক্ষা ও পরীক্ষার ব্যবস্থা রয়েছে।
                                </p>
                            </div>
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