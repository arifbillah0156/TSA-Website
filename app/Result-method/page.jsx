"use client"
import { useState, useEffect } from 'react';

export default function ExamPolicy() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const [darkMode, setDarkMode] = useState(false);

    const gradeData = [
        { grade: "A+", range: "80% বা তার বেশি", percentage: 100, color: "bg-gradient-to-r from-purple-500 to-pink-500", emoji: "🌟" },
        { grade: "A", range: "70% - 79%", percentage: 75, color: "bg-gradient-to-r from-purple-400 to-pink-400", emoji: "🌈" },
        { grade: "A-", range: "60% - 69%", percentage: 65, color: "bg-gradient-to-r from-purple-400 to-pink-300", emoji: "⭐" },
        { grade: "B+", range: "55% - 59%", percentage: 57, color: "bg-gradient-to-r from-purple-300 to-pink-300", emoji: "✨" },
        { grade: "B", range: "50% - 54%", percentage: 52, color: "bg-gradient-to-r from-purple-300 to-pink-200", emoji: "🌸" },
        { grade: "C", range: "45% - 49%", percentage: 47, color: "bg-gradient-to-r from-purple-200 to-pink-200", emoji: "🌺" },
        { grade: "D", range: "40% - 44%", percentage: 42, color: "bg-gradient-to-r from-purple-200 to-pink-100", emoji: "🌼" },
        { grade: "F", range: "40% এর নিচে (ব্যর্থ)", percentage: 30, color: "bg-gradient-to-r from-gray-400 to-gray-300", emoji: "💔" },
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const examSystem = [
        { title: "অর্ধবার্ষিক/বার্ষিক পরীক্ষা", desc: "প্রতি শিক্ষাবর্ষের বিষয়ভিত্তিক ১০০ নম্বরের দুইটি অর্ধবার্ষিক/ বার্ষিক পরীক্ষা অনুষ্ঠিত হবে।", icon: "📝" },
        { title: "টিউটোরিয়াল পরীক্ষা", desc: "প্রতিটি অর্ধবার্ষিক/বার্ষিক পরীক্ষার পূর্বে ৫০ নম্বরের টিউটোরিয়াল পরীক্ষা অনুষ্ঠিত হবে।", icon: "📚" },
        { title: "ক্লাস টেস্ট", desc: "শিক্ষাবর্ষ ব্যাপী বিষয় ভিত্তিক ক্লাস টেস্ট (সি.টি) পরীক্ষা অনুষ্ঠিত হবে।", icon: "📋" },
        { title: "মোট নম্বর", desc: "প্রতি অর্ধবার্ষিক/বার্ষিক ফলাফল (১০০+৫০) = ১৫০ নম্বরের মধ্যে অনুষ্ঠিত হবে।", icon: "💯" },
        { title: "ফলাফল প্রকাশ", desc: "পরীক্ষা গ্রহণের ২০ দিনের মধ্যে ফলাফল প্রকাশ করা হবে, ইনশা-আল্লাহ।", icon: "📊" }
    ];

    const gradingRules = [
        { title: "মেধা তালিকা", desc: "দুই পরীক্ষার নম্বর গড় করে বার্ষিক মেধা তালিকা প্রস্তুত করা হবে।", icon: "🏆" },
        { title: "প্রশ্ন উৎস", desc: "সকল পরীক্ষার প্রশ্ন বই, সিলেবাস ও শীট থেকে হবে।", icon: "📖" }
    ];

    const importantRules = [
        { title: "অকৃতকার্য নীতি", desc: "বার্ষিক পরীক্ষার ফলাফলে কোন বিষয়ে অকৃতকার্য হলে পরবর্তী ক্লাসে পাঠোন্নতি দেয়া হবে না।", icon: "❌" },
        { title: "অনুপস্থিতি নীতি", desc: "কোন অবস্থাতেই টিউটোরিয়াল ও সাময়িক পরীক্ষায় অনুপস্থিত শিক্ষার্থীদের পুনরায় পরীক্ষা গ্রহণের বিষয়ে বিবেচনা করা হবে না।", icon: "⚠️" },
        { title: "উত্তরপত্র", desc: "টিউটোরিয়াল ও সাময়িক পরীক্ষার উত্তরপত্র তাকওয়া শিশু একাডেমি সরবরাহ করবে।", icon: "📄" }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800'}`}>
            {/* Dark Mode Toggle */}
            {/* <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={toggleDarkMode}
                    className={`p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-pink-500 text-gray-900' : 'bg-purple-800 text-pink-300'}`}
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? '🌞' : '🌙'}
                </button>
            </div> */}

            <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
                {/* Animated Header */}
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block relative">
                        <div className="flex items-center justify-center mb-4">
                            <span className="text-4xl mr-3 mt-5">🎓</span>
                            <h1 className={`text-3xl md:text-4xl font-extrabold transition-all duration-700 ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'} galada-regular pt-6`}>
                                পরীক্ষা ও ফলাফল পদ্ধতি
                            </h1>
                            <span className="text-4xl ml-3 mt-5">🏆</span>
                        </div>
                        <div className={`absolute -bottom-2 left-0 right-0 h-1 ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gradient-to-r from-purple-400 to-pink-400'} rounded-full transform scale-x-0 transition-transform duration-1000 delay-300 ${isVisible ? 'scale-x-100' : ''}`}></div>
                    </div>
                    <p className={`text-sm md:text-[16px] max-w-3xl mx-auto mt-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        তাকওয়া শিশু একাডেমির পরীক্ষা নীতিমালা ও ফলাফল প্রকাশের পদ্ধতি ✨
                    </p>
                </div>

                {/* Navigation Tabs */}
                {/* <div className="flex flex-wrap justify-center mb-10 gap-2">
                    {['all', 'system', 'grading', 'rules'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeTab === tab
                                ? `${darkMode ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white' : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'} shadow-lg`
                                : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-purple-50'} shadow`
                                }`}
                        >
                            {tab === 'all' && '📋 সব দেখুন'}
                            {tab === 'system' && '📝 পরীক্ষা ব্যবস্থা'}
                            {tab === 'grading' && '📊 মূল্যায়ন পদ্ধতি'}
                            {tab === 'rules' && '⚖️ গুরুত্বপূর্ণ নিয়মাবলী'}
                        </button>
                    ))}
                </div> */}

                {/* Two equal height sections container */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Section: পরীক্ষা ব্যবস্থা */}
                    {(activeTab === 'all' || activeTab === 'system') && (
                        <div className={`flex-1 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                        >
                            <div className={`p-1 h-full flex flex-col ${darkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}>
                                <div className={`p-6 rounded-xl flex-1 flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <div className="flex items-center mb-4">
                                        <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
                                            <span className="text-2xl">📘</span>
                                        </div>
                                        <h2 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                                            পরীক্ষা ব্যবস্থা 📚
                                        </h2>
                                    </div>
                                    <div className="space-y-4 flex-1 flex flex-col">
                                        <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            তাকওয়া শিশু একাডেমিতে বছরে দুইটি অর্ধবার্ষিক/বার্ষিক পরীক্ষা অনুষ্ঠিত হয়। প্রতিটি পরীক্ষার পূর্বে টিউটোরিয়াল পরীক্ষা এবং শিক্ষাবর্ষ জুড়ে ক্লাস টেস্ট নেওয়া হয়। 📆
                                        </p>

                                        <div className="mt-6 space-y-3 flex-1">
                                            {examSystem.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`flex items-start p-4 rounded-lg transition-all duration-300 hover:shadow-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-purple-50 hover:bg-purple-100'
                                                        }`}
                                                >
                                                    <span className="text-xl mr-3">{item.icon}</span>
                                                    <div>
                                                        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                                                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section: মূল্যায়ন পদ্ধতি */}
                    {(activeTab === 'all' || activeTab === 'grading') && (
                        <div className={`flex-1 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 transform hover:-translate-y-1 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                        >
                            <div className={`p-1 h-full flex flex-col ${darkMode ? 'bg-gradient-to-r from-pink-600 to-purple-600' : 'bg-gradient-to-r from-pink-500 to-purple-500'}`}>
                                <div className={`p-6 rounded-xl flex-1 flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <div className="flex items-center mb-4">
                                        <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-pink-900' : 'bg-pink-100'}`}>
                                            <span className="text-2xl">📊</span>
                                        </div>
                                        <h2 className={`text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-700'}`}>
                                            মূল্যায়ন পদ্ধতি 💯
                                        </h2>
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <div className="space-y-5">
                                            {[
                                                { title: "টিউটোরিয়াল পরীক্ষা", value: "৫০ নম্বর", percent: 33, emoji: "📝" },
                                                { title: "অর্ধবার্ষিক/বার্ষিক পরীক্ষা", value: "১০০ নম্বর", percent: 67, emoji: "📋" },
                                                { title: "মোট", value: "১৫০ নম্বর", percent: 100, emoji: "🏆" }
                                            ].map((item, index) => (
                                                <div key={index} className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <div className="flex items-center">
                                                            <span className="mr-2">{item.emoji}</span>
                                                            <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</span>
                                                        </div>
                                                        <span className={`font-semibold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{item.value}</span>
                                                    </div>
                                                    <div className={`w-full h-3 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                                        <div
                                                            className={`h-full rounded-full ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gradient-to-r from-pink-500 to-purple-500'} transition-all duration-1000 ease-out`}
                                                            style={{ width: isVisible ? `${item.percent}%` : '0%' }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className={`mt-9 p-5 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-pink-50'} border-l-4 border-pink-500`}>
                                            <h3 className={`font-bold mb-2 flex items-center ${darkMode ? 'text-pink-400' : 'text-pink-800'}`}>
                                                <span className="mr-2">💡</span> মূল্যায়নের গুরুত্ব
                                            </h3>
                                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                শিক্ষার্থীদের মূল্যায়ন শুধুমাত্র অর্ধবার্ষিক/বার্ষিক পরীক্ষার উপর নির্ভর করে না। টিউটোরিয়াল পরীক্ষা এবং ক্লাস টেস্টও সমান গুরুত্বপূর্ণ। 🎯
                                            </p>
                                        </div>

                                        <div className="mt-6 space-y-3 flex-1">
                                            {gradingRules.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`flex items-start p-4 rounded-lg transition-all duration-300 hover:shadow-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-pink-50 hover:bg-pink-100'
                                                        }`}
                                                >
                                                    <span className="text-xl mr-3">{item.icon}</span>
                                                    <div>
                                                        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                                                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                {/* grading system */}

                {(activeTab === 'all' || activeTab === 'grading') && (
                    <div
                        className={`mt-8 lg:col-span-2 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 transform hover:-translate-y-1 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    >
                        <div className={`p-1 ${darkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}>
                            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                    <div className="flex items-center mb-4 md:mb-0">
                                        <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
                                            <span className="text-2xl">🏅</span>
                                        </div>
                                        <h2 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                                            ফলাফল গ্রেডিং পদ্ধতি 🎖️
                                        </h2>
                                    </div>
                                    <div className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'}`}>
                                        <span className="mr-2">🌟</span> সর্বোচ্চ গ্রেড: A+ (৮০% বা তার বেশি)
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Table View */}
                                    <div className={`overflow-hidden rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} p-1`}>
                                        <div className={`overflow-x-auto rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                            <table className="w-full">
                                                <thead>
                                                    <tr className={`${darkMode ? 'bg-gray-600' : 'bg-purple-100'}`}>
                                                        <th className={`py-3 px-4 text-left font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>গ্রেড</th>
                                                        <th className={`py-3 px-4 text-left font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>প্রাপ্ত নম্বর</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {gradeData.map((item, index) => (
                                                        <tr
                                                            key={index}
                                                            className={`border-t ${darkMode ? 'border-gray-600 hover:bg-gray-600' : 'border-purple-100 hover:bg-purple-50'} transition-colors duration-200`}
                                                        >
                                                            <td className={`py-3 px-4 font-medium flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                                                <span className="mr-2">{item.emoji}</span>
                                                                {item.grade}
                                                            </td>
                                                            <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.range}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Visual Representation */}
                                    <div className="space-y-4">
                                        <h3 className={`text-lg font-semibold flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                            <span className="mr-2">📊</span> গ্রেড বিতরণ (ভিজ্যুয়াল)
                                        </h3>
                                        <div className="space-y-3">
                                            {gradeData.map((item, index) => (
                                                <div key={index} className="space-y-1">
                                                    <div className="flex justify-between">
                                                        <div className="flex items-center">
                                                            <span className="mr-2">{item.emoji}</span>
                                                            <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.grade}</span>
                                                        </div>
                                                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.range}</span>
                                                    </div>
                                                    <div className={`w-full h-2.5 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                                        <div
                                                            className={`h-full rounded-full ${item.color} transition-all duration-1000 ease-out`}
                                                            style={{ width: isVisible ? `${item.percentage}%` : '0%' }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} border-l-4 border-purple-500`}>
                                            <h3 className={`font-bold mb-2 flex items-center ${darkMode ? 'text-purple-400' : 'text-purple-800'}`}>
                                                <span className="mr-2">📝</span> গ্রেডিং নীতি
                                            </h3>
                                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                গ্রেডিং সিস্টেমটি শিক্ষার্থীদের পারফরম্যান্সের একটি সুষম মূল্যায়ন প্রদান করে। ৪০% এর নিচে প্রাপ্ত নম্বরকে ফেল (F) গ্রেড হিসেবে বিবেচনা করা হয়। 📚
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Section: গুরুত্বপূর্ণ নিয়মাবলী */}
                {(activeTab === 'all' || activeTab === 'rules') && (
                    <div
                        className={`mt-8 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 transform hover:-translate-y-1 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                    >
                        <div className={`p-1 ${darkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}>
                            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                    <div className="flex items-center mb-4 md:mb-0">
                                        <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
                                            <span className="text-2xl">⚖️</span>
                                        </div>
                                        <h2 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                                            গুরুত্বপূর্ণ নিয়মাবলী 📜
                                        </h2>
                                    </div>
                                    <div className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'}`}>
                                        <span className="mr-2">⚠️</span> সকল নিয়ম মেনে চলুন
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {importantRules.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`p-5 rounded-xl transition-all duration-300 hover:shadow-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-purple-50 hover:bg-purple-100'
                                                }`}
                                        >
                                            <div className="text-3xl mb-3">{item.icon}</div>
                                            <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className={`mt-8 p-5 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-pink-50'} border-l-4 border-pink-500`}>
                                    <h3 className={`font-bold mb-2 flex items-center ${darkMode ? 'text-pink-400' : 'text-pink-800'}`}>
                                        <span className="mr-2">📝</span> ফলাফল প্রকাশের নীতিমালা
                                    </h3>
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        পরীক্ষা গ্রহণের ২০ দিনের মধ্যে ফলাফল প্রকাশ করা হবে, ইনশা-আল্লাহ। শিক্ষার্থীদের উন্নতির জন্য ফলাফলের পাশাপাশি বিস্তারিত মূল্যায়ন প্রতিবেদন প্রদান করা হবে। 📊
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Additional Information Section */}
                <div className={`mt-12 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className={`p-1 ${darkMode ? 'bg-gradient-to-r from-pink-600 to-purple-600' : 'bg-gradient-to-r from-pink-500 to-purple-500'}`}>
                        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className="flex items-center mb-6">
                                <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-pink-900' : 'bg-pink-100'}`}>
                                    <span className="text-2xl">💡</span>
                                </div>
                                <h2 className={`text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-700'}`}>
                                    গুরুত্বপূর্ণ তথ্য ✨
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    {
                                        title: "নিয়মিত উপস্থিতি",
                                        desc: "সকল পরীক্ষায় অংশগ্রহণ করা বাধ্যতামূলক। অনুপস্থিতির ক্ষেত্রে কোন ছাড় দেওয়া হবে না।",
                                        icon: "📅"
                                    },
                                    {
                                        title: "উত্তরপত্র সরবরাহ",
                                        desc: "টিউটোরিয়াল ও সাময়িক পরীক্ষার উত্তরপত্র তাকওয়া শিশু একাডেমি সরবরাহ করবে।",
                                        icon: "📄"
                                    },
                                    {
                                        title: "প্রস্তুতি",
                                        desc: "সকল পরীক্ষার প্রশ্ন বই, সিলেবাস ও শীট থেকে হবে। নিয়মিত পড়াশোনা করুন।",
                                        icon: "📚"
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`p-5 rounded-xl transition-all duration-300 hover:shadow-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-pink-50 hover:bg-pink-100'
                                            }`}
                                    >
                                        <div className="text-3xl mb-3">{item.icon}</div>
                                        <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}