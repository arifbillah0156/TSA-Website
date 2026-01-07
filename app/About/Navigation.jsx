// Navigation.js
"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaBuilding, FaChevronDown } from 'react-icons/fa';

const Navigation = ({ activeTab, setActiveTab }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const tabVariants = {
        inactive: {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            color: "#6b7280",
            scale: 1,
            y: 0
        },
        active: {
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            color: "#7c3aed",
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        },
        hover: {
            scale: 1.05,
            y: -2,
            transition: { duration: 0.2 }
        }
    };

    const dropdownVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        closed: {
            opacity: 0,
            y: -10,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setIsDropdownOpen(false);
    };

    const DesktopNavigation = () => (
        <div className="hidden md:flex justify-center md:mt-8">
            <div className="inline-flex rounded-full gap-6 bg-purple-100/50 p-1 backdrop-blur-sm">
                <motion.button
                    className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'director' ? 'text-purple-700' : 'text-gray-600'}`}
                    variants={tabVariants}
                    animate={activeTab === 'director' ? 'active' : 'inactive'}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTabChange('director')}
                >
                    <FaUserTie className="text-sm mt-[-4px]" />
                    <span>পরিচালক পরিচিতি</span>
                </motion.button>

                <motion.button
                    className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'institution' ? 'text-purple-700' : 'text-gray-600'}`}
                    variants={tabVariants}
                    animate={activeTab === 'institution' ? 'active' : 'inactive'}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTabChange('institution')}
                >
                    <FaBuilding className="text-sm mt-[-4px]" />
                    <span>প্রতিষ্ঠান পরিচিতি</span>
                </motion.button>
            </div>
        </div>
    );

    const MobileNavigation = () => (
        <div className="md:hidden flex justify-center">
            <div className="relative">
                <motion.button
                    className="flex items-center gap-2 px-6 py-2 rounded-full font-medium bg-white/80 backdrop-blur-sm text-purple-700 shadow-md"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {activeTab === 'director' ? (
                        <>
                            <FaUserTie className="text-sm mt-[-4px]" />
                            <span>পরিচালক পরিচিতি</span>
                        </>
                    ) : (
                        <>
                            <FaBuilding className="text-sm mt-[-4px]" />
                            <span>প্রতিষ্ঠান পরিচিতি</span>
                        </>
                    )}
                    <motion.div
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaChevronDown className="text-sm" />
                    </motion.div>
                </motion.button>

                <motion.div
                    className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden z-50"
                    variants={dropdownVariants}
                    initial="closed"
                    animate={isDropdownOpen ? "open" : "closed"}
                    style={{ pointerEvents: isDropdownOpen ? "auto" : "none" }}
                >
                    <button
                        className={`flex items-center gap-3 w-full px-4 py-3 text-left ${activeTab === 'director' ? 'bg-purple-100 text-purple-700' : 'text-gray-700'}`}
                        onClick={() => handleTabChange('director')}
                    >
                        <FaUserTie className="text-lg mt-[-4px]" />
                        <span>পরিচালক পরিচিতি</span>
                    </button>
                    <button
                        className={`flex items-center gap-3 w-full px-4 py-3 text-left ${activeTab === 'institution' ? 'bg-purple-100 text-purple-700' : 'text-gray-700'}`}
                        onClick={() => handleTabChange('institution')}
                    >
                        <FaBuilding className="text-lg" />
                        <span>প্রতিষ্ঠান পরিচিতি</span>
                    </button>
                </motion.div>
            </div>
        </div>
    );

    return (
        <motion.div
            className=""
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="max-w-6xl mx-auto px-4 py-4 pt-10">
                <motion.h1
                    className="text-3xl md:text-5xl font-bold text-center mb-4 pt-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tiro-bangla-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    পরিচালক ও প্রতিষ্ঠান পরিচিতি
                </motion.h1>

                {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
            </div>
        </motion.div>
    );
};

export default Navigation;