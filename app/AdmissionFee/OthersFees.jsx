"use client";

import { CheckCircle, Bus, Home, Star, Clock, DollarSign } from "lucide-react";

export default function OthersFees() {
    return (
        <section className="w-full  py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-lc mb-4">অন্যান্য সেবা ও খরচ</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto text-sm">আমরা মানসম্মত শিক্ষা ও সুবিধাসমূহ নিশ্চিত করি যাতে শিক্ষার্থীরা একটি আদর্শ পরিবেশে পড়াশোনা করতে পারে</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* আবাসিক খরচ */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="bg-gradient-to-r from-lc to-purple-600 p-4 text-white">
                            <div className="flex items-center gap-3">
                                <Home size={24} />
                                <h2 className="text-xl font-bold">আবাসিক খরচ</h2>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="overflow-x-auto">
                                <table className="w-full text-center border-collapse">
                                    <thead>
                                        <tr className="bg-indigo-50 text-gray-800">
                                            <th className="border border-gray-200 px-3 py-3 text-sm font-semibold">ধরণ</th>
                                            <th className="border border-gray-200 px-3 py-3 text-sm font-semibold">খাবার</th>
                                            <th className="border border-gray-200 px-3 py-3 text-sm font-semibold">আবাসন</th>
                                            <th className="border border-gray-200 px-3 py-3 text-sm font-semibold">কোচিং</th>
                                            <th className="border border-gray-200 px-3 py-3 text-sm font-semibold">নাস্তা</th>
                                            <th className="border border-gray-200 px-3 py-3 text-sm font-semibold">খাদেম</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="border border-gray-200 px-3 py-3 font-medium">স্পেশাল</td>
                                            <td className="border border-gray-200 px-3 py-3">৬০০০</td>
                                            <td className="border border-gray-200 px-3 py-3">৩০০০</td>
                                            <td className="border border-gray-200 px-3 py-3">২০০০</td>
                                            <td className="border border-gray-200 px-3 py-3">২০০০</td>
                                            <td className="border border-gray-200 px-3 py-3">১০০০</td>
                                        </tr>
                                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <td className="border border-gray-200 px-3 py-3 font-medium">সাধারণ</td>
                                            <td className="border border-gray-200 px-3 py-3">৩৫০০</td>
                                            <td className="border border-gray-200 px-3 py-3">১০০০</td>
                                            <td className="border border-gray-200 px-3 py-3">১০০০</td>
                                            <td className="border border-gray-200 px-3 py-3">২০০০</td>
                                            <td className="border border-gray-200 px-3 py-3">—</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 bg-indigo-50 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                    <DollarSign size={18} />
                                    এককালীন খরচ
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex justify-between">
                                        <span>বাৎসরিক ডাইনিং খরচ</span>
                                        <span className="font-medium">৫০০</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>লকার বাবদ</span>
                                        <span className="font-medium">৫০০</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>পরীক্ষার ফি</span>
                                        <span className="font-medium">৫০০+৩০০+৩০০+৫০০</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>স্পোর্টস</span>
                                        <span className="font-medium">৫০০</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>মাহফিল ফি</span>
                                        <span className="font-medium">৫০০</span>
                                    </li>
                                </ul>

                                <div className="mt-4 p-3 bg-yellow-100 rounded-md ">

                                    <p className="text-sm text-gray-800 font-medium text-justify">
                                        <span>বি.দ্র.: চলতি মাসের ১০ তারিখের মধ্যে অবশ্যই বেতন পরিশোধ করতে হবে।</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* আমরা কেন অনন্য */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="bg-gradient-to-r from-lc to-pink-600 p-4 text-white">
                            <div className="flex items-center gap-3">
                                <Star size={24} />
                                <h2 className="text-xl font-bold">আমরা কেন অনন্য</h2>
                            </div>
                        </div>

                        <div className="p-6">
                            <ul className="space-y-3">
                                {[
                                    "তৃতীয় শ্রেণি পর্যন্ত ইংলিশ ভার্সন।",
                                    "স্কুল ও মাদ্রাসা শিক্ষার সমন্বয়।",
                                    "প্রজেক্টর ও মনিটরের মাধ্যমে পাঠদান।",
                                    "প্রতিভা বিকাশে প্রতিযোগিতা ও কালচারাল প্রোগ্রাম।",
                                    "দুর্বল ও মেধাবী শিক্ষার্থীর প্রতি বিশেষ গুরুত্ব।",
                                    "চাইল্ড সাইকোলজির আলোকে পাঠক্রম ও পাঠদান।",
                                    "জীবন ঘনিষ্ঠ ও বাস্তবমুখী শিক্ষার প্রতি গুরুত্ব।",
                                    "ঢাকা বিশ্ববিদ্যালয়সহ বিভিন্ন ইসলামী বিশ্ববিদ্যালয়ে পড়ুয়া উলামায়ে কিরামের তত্ত্বাবধান।",
                                    "শাসনের পরিবর্তে এডুকেশন উইথ এন্টারটেইনমেন্ট ও মোটিভেশনের মাধ্যমে শিক্ষা দান।"
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-3 items-start group">
                                        <div className="bg-purple-100 rounded-full p-1 mt-0.5 group-hover:bg-purple-200 transition-colors">
                                            <CheckCircle className="text-purple-600 w-5 h-5" />
                                        </div>
                                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors noto-serif-bengali-regular  mt-[3px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* পরিবহন খরচ */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="bg-gradient-to-r from-lc to-purple-600 p-4 text-white">
                            <div className="flex items-center gap-3">
                                <Bus size={24} />
                                <h2 className="text-xl font-bold">পরিবহন খরচ</h2>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-lc">
                                    <h3 className="font-semibold text-gray-800 mb-2">নিকটবর্তী এলাকা</h3>
                                    <p className="text-gray-700">মাজার, হেলাল মার্কেট, মাস্টার পাড়া</p>
                                    <p className="text-2xl font-bold text-teal-600 mt-2">১৬০০৳</p>
                                </div>

                                <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-lc">
                                    <h3 className="font-semibold text-gray-800 mb-2">মধ্যম দূরত্বের এলাকা</h3>
                                    <p className="text-gray-700">দোবাদিয়া, চামুরখান, আটিপাড়া, চৈতি, চানপাড়া</p>
                                    <p className="text-2xl font-bold text-cyan-600 mt-2">২০০০৳</p>
                                </div>

                                <div className="bg-gray-100 rounded-lg p-4 border-l-4 border-gray-400">
                                    <h3 className="font-semibold text-gray-800 mb-2">দূরবর্তী এলাকা</h3>
                                    <p className="text-gray-700">এর থেকে দূরবর্তী এলাকা</p>
                                    <p className="text-xl font-bold text-gray-600 mt-2">আলোচনা সাপেক্ষে</p>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                <p className="text-sm text-gray-800">
                                    <span className="font-semibold">নোট:</span> পরিবহন খরচ মাসিকভিত্তিতে পরিশোধ করতে হবে।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}