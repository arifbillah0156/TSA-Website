'use client'
import { BookCheckIcon, PersonStanding } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DressCodeSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className={`min-h-screen pt-8 pb-16 px-4 md:px-8 lg:px-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-6xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg transform transition-all duration-500 hover:scale-110">
                            <PersonStanding className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h1 className="tiro-bangla-bold pt-4 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
                        ড্রেস কোড
                    </h1>
                    <p className="tiro-bangla-regular text-gray-700 max-w-2xl mx-auto text-md md:text-lg">
                        আমাদের শিক্ষার্থীদের জন্য নির্ধারিত পোশাক বিধি যা শৃঙ্খলা ও ঐক্য বজায় রাখে।
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center mb-8 md:mb-12 gap-3">
                    {['all', 'boys', 'girls'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeTab === tab
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-purple-50 shadow'
                                }`}
                        >
                            {tab === 'all' && '👔 সব দেখুন'}
                            {tab === 'boys' && '👦 ছাত্রদের ইউনিফর্ম'}
                            {tab === 'girls' && '👧 ছাত্রীদের ইউনিফর্ম'}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Left Content */}
                    <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'translate-x-0' : '-translate-x-10'}`}>

                        {/* Boys Uniform */}
                        {(activeTab === 'all' || activeTab === 'boys') && (
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-transparent bg-clip-padding">
                                <div className="p-1 bg-gradient-to-r from-purple-400 to-pink-400">
                                    <div className="bg-white p-6 rounded-xl">
                                        <div className="flex items-center mb-4">
                                            <div className="p-3 rounded-lg bg-purple-100 mr-4">
                                                <span className="text-2xl">👔</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-purple-700">
                                                ছাত্রদের ইউনিফর্ম
                                            </h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <span className="bg-[#004141] text-white px-4 py-2 rounded-lg font-mono text-sm shadow">
                                                    004141
                                                </span>
                                                <span className="text-gray-700 font-medium">ডার্ক ভিরিডিয়ান</span>
                                            </div>

                                            <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500">
                                                <p className="font-semibold text-purple-800 mb-2">
                                                    সকল ছাত্রদের জন্য = সাদা টুপি ও ডার্ক ভিরিডিয়ান কালারের পাঞ্জাবী
                                                </p>
                                            </div>

                                            <ul className="space-y-3">
                                                {[
                                                    "পাঞ্জাবীর কালার অফিস থেকে নিয়ে নিতে হবে।",
                                                    "পাঞ্জাবীর প্লেইটে গোল্ডেন এমব্রয়ডারি করা থাকবে।"
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-purple-500 mr-2 mt-1">✓</span>
                                                        <span className="text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Girls Uniform */}
                        {(activeTab === 'all' || activeTab === 'girls') && (
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-transparent bg-clip-padding">
                                <div className="p-1 bg-gradient-to-r from-pink-400 to-purple-400">
                                    <div className="bg-white p-6 rounded-xl">
                                        <div className="flex items-center mb-4">
                                            <div className="p-3 rounded-lg bg-pink-100 mr-4">
                                                <span className="text-2xl">👗</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-pink-700">
                                                ছাত্রীদের ইউনিফর্ম
                                            </h3>
                                        </div>

                                        <ul className="space-y-4">
                                            {[
                                                {
                                                    age: "৪–৭ বছর পর্যন্ত",
                                                    uniform: "ফ্রক ও স্কার্ফ",
                                                    icon: "👧"
                                                },
                                                {
                                                    age: "৭ থেকে ১০ বছর পর্যন্ত",
                                                    uniform: "হিজাব ও বোরকা (প্রতিষ্ঠান নির্ধারিত কালার)",
                                                    icon: "🧕"
                                                },
                                                {
                                                    age: "১০ বছরের ঊর্ধ্বে",
                                                    uniform: "হিজাব, নিকাব ও বোরকা (কাল রঙের)",
                                                    icon: "👳‍♀️"
                                                }
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start p-4 bg-pink-50 rounded-xl transition-all duration-300 hover:bg-pink-100">
                                                    <span className="text-2xl mr-3">{item.icon}</span>
                                                    <div>
                                                        <span className="font-semibold text-pink-700">{item.age}:</span>
                                                        <span className="text-gray-700 ml-2">{item.uniform}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Images */}
                    <div className={`flex flex-col md:flex-row gap-6 lg:gap-8 justify-center items-center transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0' : 'translate-x-10'}`}>

                        {/* Boy Image */}
                        <div className="w-full max-w-[250px] md:max-w-[200px] lg:max-w-[250px] group">
                            <div className="absolute -inset-4  rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white transform transition duration-500">
                                <div className="w-full h-[500px] md:h-[450px] lg:h-[500px]">
                                    <Image
                                        src="/Images/BoyDress.png"
                                        alt="Student Dress Code Boy"
                                        width={250}
                                        height={400}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-white font-bold text-center">ছাত্রদের ইউনিফর্ম</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Girl Image */}
                        <div className="w-full max-w-[250px] md:max-w-[200px] lg:max-w-[250px] group">
                            <div className="absolute -inset-4  rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white transform transition duration-500">
                                <div className="w-full h-[500px] md:h-[450px] lg:h-[500px]">
                                    <Image
                                        src="/Images/GirlDress.png"
                                        alt="Student Dress Code Girl"
                                        width={250}
                                        height={400}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-white font-bold text-center">ছাত্রীদের ইউনিফর্ম</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className={`mt-16 bg-white rounded-2xl shadow-xl transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                    <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                        <div className="bg-white p-6 rounded-2xl">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-lg bg-purple-100 mr-4">
                                    <span className="text-2xl">ℹ️</span>
                                </div>
                                <h3 className="text-xl font-bold text-purple-700">গুরুত্বপূর্ণ তথ্য</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    {
                                        title: "পোশাকের মান",
                                        desc: "সকল ইউনিফর্ম অবশ্যই ভালো মানের কাপড়ে তৈরি হতে হবে",
                                        icon: "🧵"
                                    },
                                    {
                                        title: "পরিচ্ছদ",
                                        desc: "ইউনিফর্ম সবসময় পরিষ্কার ও ভালো অবস্থায় রাখতে হবে",
                                        icon: "👕"
                                    },
                                    {
                                        title: "শৃঙ্খলা",
                                        desc: "পোশাক বিধি মেনে চলা শৃঙ্খলা শেখার অংশ",
                                        icon: "📏"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="p-4 bg-purple-50 rounded-xl transition-all duration-300 hover:bg-purple-100">
                                        <div className="text-3xl mb-2">{item.icon}</div>
                                        <h4 className="font-bold text-purple-800 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-700">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>

            <style jsx global>{`
                @keyframes tilt {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(1deg); }
                    50% { transform: rotate(0deg); }
                    75% { transform: rotate(-1deg); }
                    100% { transform: rotate(0deg); }
                }
                .animate-tilt {
                    animation: tilt 4s infinite ease-in-out;
                }
            `}</style>
        </section>
    );
}