"use client"
import { useState } from "react";
import { AdmissionFees } from "./AdmissionFees.jsx";
import {
    FiDollarSign,
    FiCalendar,
    FiCreditCard,
    FiPackage,
    FiClock,
    FiFileText,
    FiX
} from "react-icons/fi";
import Link from "next/link";

export default function FeeTable2026() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const [showMobileDetails, setShowMobileDetails] = useState(null);

    // Filter data based on search and selection
    const filteredData = AdmissionFees.filter(item => {
        const matchesSearch = item.class.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesClass = selectedClass ? item.class === selectedClass : true;
        return matchesSearch && matchesClass;
    });

    // Format currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('bn-BD').format(amount);
    };

    // Handle export
    const handleExport = () => {
        alert("Export functionality would be implemented here");
    };

    // Get unique classes for filter dropdown
    const uniqueClasses = [...new Set(AdmissionFees.map(item => item.class))];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="tiro-bangla-bold pt-8 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
                        ২০২৬ শিক্ষাবর্ষের নির্ধারিত ফি
                    </h1>
                    <p className="tiro-bangla-regular text-gray-700 max-w-2xl mx-auto text-sm md:text-md">
                        নিচের টেবিলে ২০২৬ শিক্ষাবর্ষের জন্য নির্ধারিত সকল প্রকার ফি এর বিবরণ দেওয়া হলো।
                    </p>
                </div>

                {/* Search and Filter Section */}
                {/* <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="শ্রেণি অনুযায়ী খুঁজুন..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="relative">
                            <select
                                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)}
                            >
                                <option value="">সব শ্রেণি</option>
                                {uniqueClasses.map(cls => (
                                    <option key={cls} value={cls}>{cls}</option>
                                ))}
                            </select>
                            <FiFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>

                        <button
                            onClick={handleExport}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <FiDownload />
                            <span>রপ্তানি করুন</span>
                        </button>
                    </div>
                </div> */}

                {/* Desktop Table View */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hidden md:block">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            {/* Table Header */}
                            <thead>
                                <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                    <th className="px-6 py-4 text-left font-semibold">শ্রেণি</th>
                                    <th className="px-6 py-4 text-center font-semibold">
                                        <div className="flex flex-col items-center">
                                            <FiFileText className="mb-1" />
                                            <span>ভর্তি ফরম</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-center font-semibold">
                                        <div className="flex flex-col items-center">
                                            <FiDollarSign className="mb-1" />
                                            <span>ভর্তি ফি</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-center font-semibold">
                                        <div className="flex flex-col items-center">
                                            <FiCalendar className="mb-1" />
                                            <span>সেশন ফি</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-center font-semibold">
                                        <div className="flex flex-col items-center">
                                            <FiCreditCard className="mb-1" />
                                            <span>বেতন</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-center font-semibold">
                                        <div className="flex flex-col items-center">
                                            <FiCreditCard className="mb-1" />
                                            <span>আইডি কার্ড</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-center font-semibold">
                                        <div className="flex flex-col items-center">
                                            <FiPackage className="mb-1" />
                                            <span>স্টেশনারি</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-center font-semibold">
                                        <div className="flex flex-col items-center">
                                            <FiFileText className="mb-1" />
                                            <span>বেতন কার্ড</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-center font-semibold">
                                        <div className="flex flex-col items-center">
                                            <FiClock className="mb-1" />
                                            <span>ডে-কেয়ার</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-center font-semibold">মোট</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b hover:bg-purple-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                                    >
                                        <td className="px-6 py-4 font-medium text-purple-700">{item.class}</td>
                                        <td className="px-6 py-4 text-center">{formatCurrency(item.admission)}৳</td>
                                        <td className="px-6 py-4 text-center">{formatCurrency(item.admissionFee)}৳</td>
                                        <td className="px-6 py-4 text-center">{formatCurrency(item.sessionFee)}৳</td>
                                        <td className="px-6 py-4 text-center">{formatCurrency(item.salary)}৳</td>
                                        <td className="px-6 py-4 text-center">{formatCurrency(item.idCard)}৳</td>
                                        <td className="px-6 py-4 text-center">
                                            {item.stationary == 0 ? (
                                                <span>নেই</span>
                                            ) : (
                                                <>
                                                    {formatCurrency(item.stationary)}৳
                                                </>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">{formatCurrency(item.salaryCard)}৳</td>
                                        <td className="px-6 py-4 text-center">
                                            {item.dayCare == 0 ? (
                                                <span>নেই</span>
                                            ) : (
                                                <>
                                                    {formatCurrency(item.dayCare)}৳
                                                </>
                                            )}
                                        </td>

                                        {
                                            item.total ? (<td className="px-6 py-4 text-center font-bold text-lg text-pink-600">{formatCurrency(item.total)}৳</td>) : (<td className="px-6 py-4 text-center font-bold text-lg text-pink-600">{formatCurrency(item.admission + item.admissionFee + item.sessionFee + item.salary + item.idCard + item.stationary + item.salaryCard + item.dayCare)}৳</td>)
                                        }
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-4">
                    {filteredData.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div
                                className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex justify-between items-center"
                                onClick={() => setShowMobileDetails(showMobileDetails === index ? null : index)}
                            >
                                <h3 className="text-lg font-bold">{item.class}</h3>
                                <div className="flex items-center gap-2">
                                    {
                                        item.total ? (<span className="text-center font-bold text-lg text-white">{formatCurrency(item.total)}৳</span>) : (<span className="text-center font-bold text-lg text-white">{formatCurrency(item.admission + item.admissionFee + item.sessionFee + item.salary + item.idCard + item.stationary + item.salaryCard + item.dayCare)}৳</span>)
                                    }
                                    {showMobileDetails === index ? <FiX /> : <span><i className="fa-solid fa-chevron-down"></i></span>}
                                </div>
                            </div>

                            {showMobileDetails === index && (
                                <div className="px-6 py-4 space-y-3">
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <FiFileText className="text-purple-600" />
                                            <span>ভর্তি ফরম</span>
                                        </div>
                                        <span className="font-medium">{formatCurrency(item.admission)}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <FiDollarSign className="text-purple-600" />
                                            <span>ভর্তি ফি</span>
                                        </div>
                                        <span className="font-medium">{formatCurrency(item.admissionFee)}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <FiCalendar className="text-purple-600" />
                                            <span>সেশন ফি</span>
                                        </div>
                                        <span className="font-medium">{formatCurrency(item.sessionFee)}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <FiCreditCard className="text-purple-600" />
                                            <span>বেতন</span>
                                        </div>
                                        <span className="font-medium">{formatCurrency(item.salary)}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <FiCreditCard className="text-purple-600" />
                                            <span>আইডি কার্ড</span>
                                        </div>
                                        <span className="font-medium">{formatCurrency(item.idCard)}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <FiPackage className="text-purple-600" />
                                            <span>স্টেশনারি</span>
                                        </div>
                                        <span className="font-medium">

                                            {item.stationary == 0 ? (
                                                <span>নেই</span>
                                            ) : (
                                                <>
                                                    {formatCurrency(item.stationary)}৳
                                                </>
                                            )}

                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <FiFileText className="text-purple-600" />
                                            <span>বেতন কার্ড</span>
                                        </div>
                                        <span className="font-medium">{formatCurrency(item.salaryCard)}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <div className="flex items-center gap-2">
                                            <FiClock className="text-purple-600" />
                                            <span>ডে-কেয়ার</span>
                                        </div>
                                        <span className="font-medium">
                                            {item.dayCare == 0 ? (
                                                <span>নেই</span>
                                            ) : (
                                                <>
                                                    {formatCurrency(item.dayCare)}৳
                                                </>
                                            )}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="font-bold text-pink-600">মোট</span>
                                        {
                                            item.total ? (<span className=" text-center font-bold text-lg text-pink-600">{formatCurrency(item.total)}৳</span>) : (<span className=" text-center font-bold text-lg text-pink-600">{formatCurrency(item.admission + item.admissionFee + item.sessionFee + item.salary + item.idCard + item.stationary + item.salaryCard + item.dayCare)}৳</span>)
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}


                </div>

                {/* Footer Note */}
                <div
                    className="mt-10 text-center text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <p>ফি সংক্রান্ত যেকোনো প্রশ্নের জন্য অফিসে যোগাযোগ করুন</p>
                    <div className="mt-2 flex justify-center space-x-4">
                        <Link href={"tel:+8801865065125"} className="px-4 py-2 bg-gradient-to-r from-lc to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md">
                            <i className="fas fa-phone mr-2"></i> ফোন করুন
                        </Link>
                        <Link href={"mailto:taqwamadrasa082@gmail.com"} className="px-4 py-2 bg-gradient-to-r from-pink-600 to-lc text-white rounded-lg hover:opacity-90 transition-opacity shadow-md">
                            <i className="fas fa-envelope mr-2"></i> ইমেল করুন
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}