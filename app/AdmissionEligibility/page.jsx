import React from 'react';

export default function AdmissionEligibility() {
    return (
        <section className="w-full  py-12 px-4 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-6xl mx-auto relative">
                {/* Main container with enhanced styling */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-pink-100">
                    {/* Header with gradient background */}
                    <div className="bg-gradient-to-r from-pink-500 to-fuchsia-500 p-6 md:p-8 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                        <h2 className="text-white text-2xl md:text-3xl font-bold relative flex items-center justify-center tiro-bangla-bold">
                            <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                            </svg>
                            ভর্তি উপযুক্ততা
                        </h2>
                    </div>

                    <div className="p-6 md:p-8 lg:p-10">
                        {/* Intro section with enhanced styling */}
                        <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-5 border-l-4 border-red-500">
                            <h3 className="text-red-600 font-bold text-lg mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                                </svg>
                                ভর্তির জন্য জরুরি:
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                                    <span className="text-gray-800">শিক্ষার্থীর উপযুক্ততা।</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                                    <span className="text-gray-800">অভিভাবকের উপযুক্ততা।</span>
                                </li>
                            </ul>
                        </div>

                        {/* Student Eligibility with enhanced styling */}
                        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border-l-4 border-blue-500">
                            <h3 className="text-blue-600 font-bold text-lg mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                </svg>
                                শিক্ষার্থীর উপযুক্ততা:
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                                    <p className="text-gray-800 leading-relaxed">
                                        শিক্ষার্থীর বয়স, স্বাস্থ্য ও মেধা বিবেচনা করে প্রতিষ্ঠান পরীক্ষার মাধ্যমে শ্রেণি ও বিভাগ নির্ধারণ করবে। এক্ষেত্রে অভিভাবকের কোনো হস্তক্ষেপ গ্রহণযোগ্য হবে না।
                                    </p>
                                </li>
                                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                                    <p className="text-gray-800 leading-relaxed">
                                        ভর্তির পর ২৪ ঘন্টা প্রতিষ্ঠান নির্ধারিত রুটিন শতভাগ মেনে চলতে হবে।
                                    </p>
                                </li>
                                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                                    <p className="text-gray-800 leading-relaxed">
                                        গানবাজনা, ঝগড়া ইত্যাদিসহ যাবতীয় অশালীন আচরণ ভর্তি অযোগ্য বলে বিবেচিত হবে।
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* Guardian Eligibility with enhanced styling */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border-l-4 border-green-500">
                            <h3 className="text-green-600 font-bold text-lg mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                </svg>
                                অভিভাবকের উপযুক্ততা:
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                                    <span className="flex-shrink-0 w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                                    <p className="text-gray-800 leading-relaxed">
                                        অভিভাবককে অবশ্যই নামাজি হতে হবে।
                                    </p>
                                </li>
                                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                                    <span className="flex-shrink-0 w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                                    <p className="text-gray-800 leading-relaxed">
                                        বাবা-মাসহ পরিবারের প্রাপ্তবয়স্ক সবাইকে শরঈ পর্দা মেনে চলতে হবে।
                                    </p>
                                </li>
                                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                                    <span className="flex-shrink-0 w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                                    <p className="text-gray-800 leading-relaxed">
                                        বাসার পরিবেশ ও অভিভাবকদের কোনো অনৈসলামিক অভ্যাস চর্চায় অভ্যস্ত হওয়া যাবে না। যেমন: গান-বাজনা, নাটক-সিনেমা, নেশা-ধূমপান ইত্যাদি।
                                    </p>
                                </li>
                                <li className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                                    <span className="flex-shrink-0 w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                                    <p className="text-gray-800 leading-relaxed">
                                        অভিভাবকের উপার্জন শতভাগ হালাল হতে হবে।
                                    </p>
                                </li>
                            </ul>

                            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-green-100">
                                <p className="text-gray-800 mb-3">
                                    উপরোক্ত শর্তগুলোর ব্যাপারে শতভাগ একমত হয়ে ভর্তির সিদ্ধান্ত নিন।
                                </p>

                                <p className="text-gray-800 flex items-start">
                                    <span className="font-semibold mr-2">বি. দ্র:</span>
                                    <span>
                                        অভিভাবকের কোনো একটি বিষয়ে ত্রুটি থাকলে উক্ত ত্রুটি সংশোধনের শর্তে ভর্তি বিষয়ে বিবেচনা করা হবে।
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </section>
    );
}