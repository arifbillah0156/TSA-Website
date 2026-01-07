// import DirectorSection from "./Director";
// import InstitutionSection from "./Institution";

// export default function About() {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
//             {/* Decorative background elements */}

//             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//                 <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//                 <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//             </div>
//             <DirectorSection />
//             <InstitutionSection />
//         </div>
//     )
// }

// About.js
"use client"
import { useState, useEffect } from 'react';
import DirectorSection from "./Director";
import InstitutionSection from "./Institution";
import Navigation from "./Navigation";

export default function About() {
    const [activeTab, setActiveTab] = useState('director');

    useEffect(() => {
        // 设置默认标签为"পরিচালক পরিচিতি"
        setActiveTab('director');
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="relative z-10">
                {activeTab === 'director' && <DirectorSection />}
                {activeTab === 'institution' && <InstitutionSection />}
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
        </div>
    );
}