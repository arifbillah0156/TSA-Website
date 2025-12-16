"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon, BookOpenIcon, AcademicCapIcon, SparklesIcon, UserGroupIcon, StarIcon, TagIcon, DocumentTextIcon, BookIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const EducationCurriculumTable = () => {
    // State to track screen size
    const [isDesktop, setIsDesktop] = useState(false);
    const [isClient, setIsClient] = useState(false);

    // State for mobile view
    const [expandedSection, setExpandedSection] = useState(null);

    // Check if we're on desktop
    useEffect(() => {
        setIsClient(true);
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Curriculum data
    const curriculumDataForDesktop = [
        {
            id: 'play',
            className: 'প্লে',
            section: '',
            general: 'বাংলা ও ইংরেজি বর্ণ পরিচয়, গণিত ১ থেকে ৩০ ও ১ থেকে ৩০ সংখ্যা, সাধারণ জ্ঞান ও ড্রইং।',
            islamic: 'আরবি বর্ণ পরিচয়, হাদীস- ৪টি, আকিদা- শীট (প্লে), সংক্ষিপ্ত দোয়া ৩০টি, মাসআলা ১০ টি, ইসলামি শিষ্টাচার শীট (প্লে)'
        },
        {
            id: 'nursery',
            className: 'নার্সারি',
            section: 'মক্তব',
            general: 'বাংলা ও ইংরেজি শব্দ তৈরী, গণিত ১ থেকে ১০০ ও ১ থেকে ১০০ সংখ্যা ও কথায় (১–২০), যোগ ও বিয়োগের প্রাথমিক ধারণা, সাধারণ জ্ঞান ও ড্রইং।',
            islamic: 'মক্তব বোর্ড গ্রুপ: হাদীস- ১০টি, আকিদা- শীট (নার্সারী) দোয়া ৪০টি, মাসআলা ১০টি, ইসলামি শিষ্টাচার শীট (নার্সারী)'
        },
        {
            id: 'kg',
            className: 'কেজি',
            section: 'মক্তব',
            general: 'বাংলা ও ইংরেজি বাক্য তৈরী, গণিত ১ থেকে ৫০ ও ১ থেকে ৫০ সংখ্যা ও কথায়, সাধারণ জ্ঞান ও ড্রইং।',
            islamic: 'আম্মা পারা ও তাজভীদ (নির্বাচিত), হাদীস- ১০টি, আকিদা-শীট (কে.জি.) দোয়া ১০টি, মাসআলা ১০টি, ইসলামি শিষ্টাচার শীট (কে.জি)।'
        },
        {
            id: 'first',
            className: 'প্রথম শ্রেণি',
            section: 'নাযেরা',
            general: 'বাংলা, ইংরেজি ও গণিত বোর্ড বই, সাধারণ জ্ঞান, ড্রইং, আরবি ভাষা।',
            islamic: 'নাযেরা পড়া ও তাজভীদ (নির্বাচিত), হাদীস, দোয়া, আকিদা-শীট, মাসআলা (রিভিশন), ইসলামি শিষ্টাচার শীট আদাবুল মুআশারাহ।'
        },
        {
            id: 'second',
            className: 'দ্বিতীয় শ্রেণি',
            section: 'নাযেরা',
            general: 'বাংলা, ইংরেজি ও গণিত বোর্ড বই, সাধারণ জ্ঞান, আরবি ভাষা।',
            islamic: 'নাযেরা পড়া সমগ্র কুরআন ও তাজভীদ (নির্বাচিত), হাদীস, দোয়া, আকিদা-শীট, মাসআলা (রিভিশন), ইসলামি শিষ্টাচার শীট আদাবুল মুআশারাহ।'
        }
    ];
    // Curriculum data
    const curriculumDataForMobile = [
        {
            id: 'play',
            className: 'প্লে',
            section: '',
            general: 'বাংলা ও ইংরেজি বর্ণ পরিচয়, গণিত ১ থেকে ৩০ ও ১ থেকে ৩০ সংখ্যা, সাধারণ জ্ঞান ও ড্রইং।',
            islamic: 'আরবি বর্ণ পরিচয়, হাদীস- ৪টি, আকিদা- শীট (প্লে), সংক্ষিপ্ত দোয়া ৩০টি, মাসআলা ১০ টি, ইসলামি শিষ্টাচার শীট (প্লে)'
        },
        {
            id: 'nursery',
            className: 'নার্সারি',
            section: 'মক্তব',
            general: 'বাংলা ও ইংরেজি শব্দ তৈরী, গণিত ১ থেকে ১০০ ও ১ থেকে ১০০ সংখ্যা ও কথায় (১–২০), যোগ ও বিয়োগের প্রাথমিক ধারণা, সাধারণ জ্ঞান ও ড্রইং।',
            islamic: 'মক্তব বোর্ড গ্রুপ: হাদীস- ১০টি, আকিদা- শীট (নার্সারী) দোয়া ৪০টি, মাসআলা ১০টি, ইসলামি শিষ্টাচার শীট (নার্সারী)'
        },
        {
            id: 'kg',
            className: 'কেজি',
            section: 'মক্তব',
            general: 'বাংলা ও ইংরেজি বাক্য তৈরী, গণিত ১ থেকে ৫০ ও ১ থেকে ৫০ সংখ্যা ও কথায়, সাধারণ জ্ঞান ও ড্রইং।',
            islamic: 'আম্মা পারা ও তাজভীদ (নির্বাচিত), হাদীস- ১০টি, আকিদা-শীট (কে.জি.) দোয়া ১০টি, মাসআলা ১০টি, ইসলামি শিষ্টাচার শীট (কে.জি)।'
        },
        {
            id: 'first',
            className: 'প্রথম শ্রেণি',
            section: 'নাযেরা',
            general: 'বাংলা, ইংরেজি ও গণিত বোর্ড বই, সাধারণ জ্ঞান, ড্রইং, আরবি ভাষা।',
            islamic: 'নাযেরা পড়া ও তাজভীদ (নির্বাচিত), হাদীস, দোয়া, আকিদা-শীট, মাসআলা (রিভিশন), ইসলামি শিষ্টাচার শীট আদাবুল মুআশারাহ।'
        },
        {
            id: 'second',
            className: 'দ্বিতীয় শ্রেণি',
            section: 'নাযেরা',
            general: 'বাংলা, ইংরেজি ও গণিত বোর্ড বই, সাধারণ জ্ঞান, আরবি ভাষা।',
            islamic: 'নাযেরা পড়া সমগ্র কুরআন ও তাজভীদ (নির্বাচিত), হাদীস, দোয়া, আকিদা-শীট, মাসআলা (রিভিশন), ইসলামি শিষ্টাচার শীট আদাবুল মুআশারাহ।'
        },
        {
            id: 'third-fifth',
            className: 'তৃতীয়, চতুর্থ ও পঞ্চম শ্রেণি',
            section: '',
            general: 'বাংলা, ইংরেজি, গণিত ও সমাজ বিজ্ঞান বোর্ড বই, সাধারণ জ্ঞান ও দ্বীনিয়াত শিক্ষা।',
            islamic: 'হিফজুল কুরআন এবং দৈনিক এক ঘণ্টা জেনারেল ও ফরজে আইন পাঠ দান।'
        }
    ];

    // Toggle section for mobile view
    const toggleSection = (id) => {
        setExpandedSection(expandedSection === id ? null : id);
    };

    // Animation variants
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
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };

    // Return loading state if not client
    if (!isClient) {
        return (
            <div className="w-screen h-[90vh] flex items-center justify-center bg-white text-lc z-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-lc"></div>
            </div>
        );
    }

    // Desktop view - Animated table
    if (isDesktop) {
        return (
            <div className="tiro-bangla-regular min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-6 pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                                <AcademicCapIcon className="h-10 w-10 text-white" />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-lc mb-4 tiro-bangla-bold">
                            শিক্ষা কারিকুলাম ও সিলেবাস
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            প্লে থেকে তৃতীয় শ্রেণি পর্যন্ত বাধ্যতামূলক ইংলিশ ভার্সন
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <motion.tr
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <th className="text-lg px-6 py-4 text-center tiro-bangla-regular border-r border-white/30">
                                            <div className="flex items-center justify-center">
                                                <AcademicCapIcon className="h-5 w-5 mr-2" />
                                                শ্রেণি
                                            </div>
                                        </th>
                                        <th className="text-lg px-2 py-4 text-center tiro-bangla-regular border-r border-white/30">
                                            <div className="flex items-center justify-center">
                                                <UserGroupIcon className="h-5 w-5 mr-2" />
                                                বিভাগ
                                            </div>
                                        </th>
                                        <th className="text-lg px-6 py-4 text-center tiro-bangla-regular border-r border-white/30">
                                            <div className="flex items-center justify-center">
                                                <BookOpenIcon className="h-5 w-5 mr-2" />
                                                সাধারণ সিলেবাস
                                            </div>
                                        </th>
                                        <th className="text-lg px-6 py-4 text-center tiro-bangla-regular">
                                            <div className="flex items-center justify-center">
                                                <StarIcon className="h-5 w-5 mr-2" />
                                                ইসলামি সিলেবাস
                                            </div>
                                        </th>
                                    </motion.tr>
                                </thead>
                                <tbody>
                                    {curriculumDataForDesktop.map((item, index) => (
                                        <motion.tr
                                            key={item.id}
                                            className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}

                                        >
                                            <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-100">{item.className}</td>
                                            <td className="text-center text-gray-700 border-r border-gray-100">{item.section}</td>
                                            <td className="px-6 py-4 text-gray-700 border-r border-gray-100">{item.general}</td>
                                            <td className="px-6 py-4 text-gray-700">{item.islamic}</td>
                                        </motion.tr>
                                    ))}

                                    {/* Special rows */}
                                    <motion.tr
                                        className="bg-gradient-to-r from-purple-50 to-indigo-50 text-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 1.0 }}
                                    >
                                        <td colSpan={2} className="border-r border-gray-100"></td>
                                        <td colSpan={1} className="px-6 py-4 font-semibold text-purple-700 border-r border-gray-100">
                                            <div className="flex items-center justify-center">
                                                <BookOpenIcon className="h-5 w-5 mr-2 text-purple-500" />
                                                জেনারেলসহ হিফজ
                                            </div>
                                        </td>
                                        <td colSpan={1} className="px-6 py-4 font-semibold text-purple-700">
                                            <div className="flex items-center justify-center">
                                                <StarIcon className="h-5 w-5 mr-2 text-purple-500" />
                                                হিফজ
                                            </div>
                                        </td>
                                    </motion.tr>

                                    <motion.tr
                                        className="border-b border-gray-100 hover:bg-blue-50 transition-colors bg-white"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.4 }}

                                    >
                                        <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-100">তৃতীয়, চতুর্থ ও পঞ্চম শ্রেণি</td>
                                        <td className="px-6 py-4 text-gray-700 border-r border-gray-100"></td>
                                        <td className="px-6 py-4 text-gray-700 border-r border-gray-100">বাংলা, ইংরেজি, গণিত ও সমাজ বিজ্ঞান বোর্ড বই, সাধারণ জ্ঞান ও দ্বীনিয়াত শিক্ষা।</td>
                                        <td className="px-6 py-4 text-gray-700">হিফজুল কুরআন এবং দৈনিক এক ঘণ্টা জেনারেল ও ফরজে আইন পাঠ দান।</td>
                                    </motion.tr>

                                    <motion.tr
                                        className="bg-gradient-to-r from-purple-50 to-indigo-50  text-purple-700"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 1.1 }}
                                    >
                                        <td colSpan={4} className="px-6 py-4 font-bold text-center">
                                            <div className="flex items-center justify-center">
                                                <SparklesIcon className="h-5 w-5 mr-2 " />
                                                কিতাব বিভাগ
                                                <SparklesIcon className="h-5 w-5 ml-2" />
                                            </div>
                                        </td>
                                    </motion.tr>

                                    <motion.tr
                                        className=" hover:bg-purple-100 transition-colors"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 1.2 }}
                                    >
                                        <td colSpan={1} className="px-6 py-4 font-medium text-gray-900 border-r border-gray-100">
                                            <div className="flex items-center">
                                                <BookOpenIcon className="h-5 w-5 mr-2 text-purple-500" />
                                                জেনারেল
                                            </div>
                                        </td>
                                        <td colSpan={3} className="px-6 py-4 text-gray-700">ষষ্ঠ থেকে দশম শ্রেণির বোর্ড বই।</td>
                                    </motion.tr>

                                    <motion.tr
                                        className=" hover:bg-purple-100 transition-colors"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 1.3 }}
                                    >
                                        <td colSpan={1} className="px-6 py-4 font-medium text-gray-900 border-r border-gray-100">
                                            <div className="flex items-center">
                                                <StarIcon className="h-5 w-5 mr-2 text-purple-500" />
                                                আরবি
                                            </div>
                                        </td>
                                        <td colSpan={3} className="px-6 py-4 text-gray-700">মাদানি নিসাবের সিলেবাস ও পাঠ্য বই।</td>
                                    </motion.tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Table footer with additional info */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-t border-gray-200">
                            <div className="flex items-center justify-center text-sm text-gray-600">
                                <InformationCircleIcon className="h-5 w-5 mr-2 text-purple-500" />
                                <span>আরও তথ্যের জন্য অফিসে যোগাযোগ করুন।</span>
                            </div>
                        </div>
                    </motion.div>


                </div>
            </div>
        );
    }

    // Mobile view - Expandable cards
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-6 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                            <AcademicCapIcon className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-lc mb-4 tiro-bangla-bold">
                        শিক্ষা কারিকুলাম ও সিলেবাস
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        প্লে থেকে তৃতীয় শ্রেণি পর্যন্ত বাধ্যতামূলক ইংলিশ ভার্সন
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="p-4 md:p-6">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-4"
                        >
                            {curriculumDataForMobile.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    className="border border-lc rounded-xl overflow-hidden transition-all hover:shadow-md"
                                >
                                    <div
                                        className="p-4 rounded-xl md:p-5 cursor-pointer hover:bg-purple-50  transition-colors"
                                        onClick={() => toggleSection(item.id)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                                    <BookOpenIcon className="h-6 w-6 text-indigo-600" />
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-800">{item.className}</h4>
                                                    {item.section && (
                                                        <p className="text-sm text-gray-500">{item.section}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                {expandedSection === item.id ? (
                                                    <ChevronUpIcon className="h-6 w-6  text-lc" />
                                                ) : (
                                                    <ChevronDownIcon className="h-6 w-6 text-lc" />
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {expandedSection === item.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-4 md:p-5 bg-white">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="bg-blue-50 rounded-lg p-4">
                                                            <h5 className="font-semibold text-blue-800 mb-2 flex items-center">
                                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                                সাধারণ সিলেবাস
                                                            </h5>
                                                            <p className="text-gray-700 text-sm">{item.general}</p>
                                                        </div>
                                                        <div className="bg-green-50 rounded-lg p-4">
                                                            <h5 className="font-semibold text-green-800 mb-2 flex items-center">
                                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                                ইসলামি সিলেবাস
                                                            </h5>
                                                            <p className="text-gray-700 text-sm">{item.islamic}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-8 border-t border-gray-200 pt-6"
                        >
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-4 flex justify-center items-center">
                                    <BookOpenIcon className="h-6 w-6 mr-2" />
                                    কিতাব বিভাগ
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">জেনারেল</h4>
                                        <p>ষষ্ঠ থেকে দশম শ্রেণির বোর্ড বই।</p>
                                    </div>
                                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2">আরবি</h4>
                                        <p>মাদানি নেসাবের সিলেবাস ও পাঠ্য বই।</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {/* Table footer with additional info */}
                        <div className="px-6 pt-6 border-t border-gray-200">
                            <div className="flex items-center justify-center text-sm text-gray-600">
                                <InformationCircleIcon className="h-5 w-5 mr-2 text-purple-500 mt-[-2px]" />
                                <span>আরও তথ্যের জন্য অফিসে যোগাযোগ করুন।</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default EducationCurriculumTable;