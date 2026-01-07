"use client"
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, ChevronDown, ChevronUp, Search, X, Filter, Download, Bell } from "lucide-react";

const AcademicCalendar = () => {
    const [activeSection, setActiveSection] = useState("all");
    const [expandedSections, setExpandedSections] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("all");

    // Toggle section expansion
    const toggleSection = (sectionTitle) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionTitle]: !prev[sectionTitle]
        }));
    };

    // Filter events based on search and selected filter
    const filteredEvents = useMemo(() => {
        const allEvents = [
            ...getEventsFromSection("জানুয়ারি ও ফেব্রুয়ারি", [
                { date: "১০ জানুয়ারি", title: "অরিয়েন্টেশন", type: "academic" },
                { date: "২৪–৩০ জানুয়ারি", title: "বার্ষিক ক্রীড়া প্রতিযোগিতা", type: "sports" },
                { date: "০৫ ফেব্রুয়ারি", title: "শিক্ষা সফর", type: "academic" },
                { date: "০৮ ফেব্রুয়ারি", title: "শব-ই-বরাত", type: "religious" },
                { date: "১২ ফেব্রুয়ারি", title: "পিঠা উৎসব", type: "cultural" },
                { date: "১৬ ফেব্রুয়ারি", title: "রোজার প্রস্তুতি কর্মসূচি", type: "religious" },
                { date: "২১ ফেব্রুয়ারি", title: "শহীদ দিবস", type: "national" }
            ]),
            ...getEventsFromSection("মার্চ ও এপ্রিল", [
                { date: "০৭–১২ মার্চ", title: "১ম টিউটোরিয়াল", type: "academic" },
                { date: "১৭ই মার্চ", title: "শব-ই-কদর", type: "religious" },
                { date: "২৬ই মার্চ", title: "স্বাধীনতা দিবস", type: "national" },
                { date: "৮ই এপ্রিল", title: "খাতা দেখানো", type: "academic" }
            ]),
            ...getEventsFromSection("মে, জুন, জুলাই ও আগস্ট", [
                { date: "১লা মে", title: "মে দিবস", type: "national" },
                { date: "১লা মে", title: "বার্ষিক সমাবেশ", type: "academic" },
                { date: "১৭ই জুন", title: "অর্ধবার্ষিক পরীক্ষা", type: "academic" },
                { date: "২৫ জুন", title: "আশুরা", type: "religious" },
                { date: "১১ জুলাই", title: "মা সমাবেশ", type: "cultural" },
                { date: "১৩ জুলাই", title: "ফলাফল প্রকাশ", type: "academic" },
                { date: "২৫ই আগস্ট", title: "ঈদে মিলাদুন্নবি", type: "religious" }
            ]),
            ...getEventsFromSection("সেপ্টেম্বর, অক্টোবর, নভেম্বর ও ডিসেম্বর", [
                { date: "১লা সেপ্টেম্বর", title: "বিজ্ঞান মেলা", type: "academic" },
                { date: "১০ সেপ্টেম্বর", title: "মা সমাবেশ", type: "cultural" },
                { date: "১২–১৭ সেপ্টেম্বর", title: "দ্বিতীয় টিউটোরিয়াল", type: "academic" },
                { date: "২৫ সেপ্টেম্বর", title: "খাতা দেখানো", type: "academic" },
                { date: "৫ই নভেম্বর", title: "মাহফিল", type: "religious" },
                { date: "৩রা ডিসেম্বর", title: "বার্ষিক পরীক্ষা", type: "academic" },
                { date: "১৭ই ডিসেম্বর", title: "ফল প্রকাশ ও পুরস্কার বিতরণ", type: "academic" }
            ]),
            ...getEventsFromSection("২০২৫ সালের ছুটির তালিকা", [
                { date: "৪ই ফেব্রুয়ারি", title: "শব-ই-বরাত", type: "holiday", days: "০১" },
                { date: "২১ই ফেব্রুয়ারি", title: "শহীদ দিবস ও মাতৃভাষা দিবস", type: "holiday", days: "০১" },
                { date: "২৬ই মার্চ", title: "স্বাধীনতা দিবস", type: "holiday", days: "০১" },
                { date: "১৭ই মার্চ", title: "শব-ই-কদর", type: "holiday", days: "০১" },
                { date: "২২ই মার্চ", title: "জুমাতুল বিদা", type: "holiday", days: "০১" },
                { date: "১লা মে", title: "মে দিবস", type: "holiday", days: "০১" },
                { date: "২৫ জুলাই", title: "আশুরা", type: "holiday", days: "০১" },
                { date: "২৫ই আগস্ট", title: "ঈদে মিলাদুন্নবি", type: "holiday", days: "০১" },
                { date: "১৬ই ডিসেম্বর", title: "বিজয় দিবস", type: "holiday", days: "০১" },
                { date: "চাঁদ দেখার উপর নির্ভরশীল", title: "ঈদুল ফিতর", type: "holiday", days: "১৮" },
                { date: "চাঁদ দেখার উপর নির্ভরশীল", title: "ঈদুল আযহা", type: "holiday", days: "১৩" }
            ])
        ];

        return allEvents.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.date.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = selectedFilter === "all" || event.type === selectedFilter;
            return matchesSearch && matchesFilter;
        });
    }, [searchTerm, selectedFilter]);

    // Helper function to convert section data to event objects
    function getEventsFromSection(sectionTitle, events) {
        return events.map(event => ({
            ...event,
            section: sectionTitle
        }));
    }

    // Get event type color
    const getEventTypeColor = (type) => {
        switch (type) {
            case "academic": return "bg-blue-100 text-blue-800 border-blue-200";
            case "sports": return "bg-green-100 text-green-800 border-green-200";
            case "cultural": return "bg-purple-100 text-purple-800 border-purple-200";
            case "religious": return "bg-orange-100 text-orange-800 border-orange-200";
            case "national": return "bg-red-100 text-red-800 border-red-200";
            case "holiday": return "bg-yellow-100 text-yellow-800 border-yellow-200";
            default: return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    // Group events by section
    const eventsBySection = useMemo(() => {
        const grouped = {};
        filteredEvents.forEach(event => {
            if (!grouped[event.section]) {
                grouped[event.section] = [];
            }
            grouped[event.section].push(event);
        });
        return grouped;
    }, [filteredEvents]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-pink-100 sticky top-0 z-40">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg text-white">
                                <Calendar size={24} />
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                একাডেমিক ক্যালেন্ডার ২০২৫
                            </h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                                <Download size={18} />
                            </button>
                            <button className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                                <Bell size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Search and Filter Bar */}
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="অনুষ্ঠান খুঁজুন..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    onClick={() => setSearchTerm("")}
                                >
                                    <X size={18} />
                                </button>
                            )}
                        </div>
                        <button
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <Filter size={18} />
                            <span>ফিল্টার</span>
                            {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                    </div>

                    {/* Filter Options */}
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 pt-4 border-t border-gray-100"
                            >
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { value: "all", label: "সব" },
                                        { value: "academic", label: "একাডেমিক" },
                                        { value: "sports", label: "খেলাধুলা" },
                                        { value: "cultural", label: "সাংস্কৃতিক" },
                                        { value: "religious", label: "ধর্মীয়" },
                                        { value: "national", label: "জাতীয়" },
                                        { value: "holiday", label: "ছুটি" }
                                    ].map(filter => (
                                        <button
                                            key={filter.value}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedFilter === filter.value
                                                    ? "bg-pink-500 text-white"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                }`}
                                            onClick={() => setSelectedFilter(filter.value)}
                                        >
                                            {filter.label}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Calendar Sections */}
                <div className="space-y-6">
                    {Object.entries(eventsBySection).map(([sectionTitle, events], index) => (
                        <motion.div
                            key={sectionTitle}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm overflow-hidden"
                        >
                            <div
                                className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 cursor-pointer"
                                onClick={() => toggleSection(sectionTitle)}
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl md:text-2xl font-bold text-white">
                                        {sectionTitle}
                                    </h2>
                                    <div className="text-white">
                                        {expandedSections[sectionTitle] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence>
                                {expandedSections[sectionTitle] !== false && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-4 md:p-6 space-y-3">
                                            {events.map((event, eventIndex) => (
                                                <motion.div
                                                    key={`${event.date}-${event.title}`}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: eventIndex * 0.05 }}
                                                    className={`p-4 rounded-xl border ${getEventTypeColor(event.type)} hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
                                                >
                                                    <div className="flex justify-between items-start gap-4">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <Clock size={16} className="opacity-70" />
                                                                <span className="font-medium">{event.date}</span>
                                                            </div>
                                                            <h3 className="text-lg font-semibold">{event.title}</h3>
                                                            {event.days && (
                                                                <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-white bg-opacity-60 rounded-full text-sm">
                                                                    <span>{event.days} দিন</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <MapPin size={16} className="opacity-70" />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-10 bg-white rounded-2xl shadow-sm p-6"
                >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">ভর্তি তথ্য</h3>
                    <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <p className="text-gray-800">
                                <span className="font-semibold text-blue-800">২০২৫ শিক্ষাবর্ষ (পুরাতন):</span>{" "}
                                শিক্ষার্থীদের ভর্তি শেষ তারিখ ৩১শে ডিসেম্বর।
                            </p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                            <p className="text-gray-800">
                                <span className="font-semibold text-purple-800">২০২৬ শিক্ষাবর্ষ (নতুন):</span>{" "}
                                শিক্ষার্থীদের ভর্তি শেষ তারিখ ৫ই জানুয়ারি ২০২৬।
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AcademicCalendar;