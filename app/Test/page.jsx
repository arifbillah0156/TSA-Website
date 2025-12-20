import {
    Clock,
    ShieldCheck,
    Handshake,
    MessageSquare,
    Heart,
    Shirt,
    ThumbsDown,
    BookOpen,
    Apple,
    Home,
    CreditCard,
    User,
    VolumeX,
    FileText,
    Shield,
    Info
} from 'lucide-react';
import { FiUsers } from 'react-icons/fi';

export default function InformationForParents() {
    const points = [
        {
            text: "প্রতিদিন সন্তানকে সাথে নিয়ে পাঁচ ওয়াক্ত নামাজ সময়মত আদায় করার চেষ্টা করতে হবে। কখনো বাচ্চার সামনে নামাজ ছাড়া যাবে না।",
            icon: Clock
        },
        {
            text: "বাচ্চার সামনে কখনো মিথ্যা কথা বলা যাবে না ও কাউকে ধোঁকা দেয়া যাবে না।",
            icon: ShieldCheck
        },
        {
            text: "সন্তানের সাথে কেবল এমন ওয়াদা করতে হবে, যা রক্ষা করতে পারবেন। ওয়াদা করে ওয়াদা ভঙ্গ করা যাবে না।",
            icon: Handshake
        },
        {
            text: "শেখানোর নিয়তে নিজে বার বার আগে সালাম দিতে হবে।",
            icon: MessageSquare
        },
        {
            text: "সন্তানের সামনে স্বামী-স্ত্রী বা পরিবারের বড়রা কখনো ঝগড়া করা যাবে না।",
            icon: Heart
        },
        {
            text: "ভর্তির পর শিক্ষার্থীকে প্রতিষ্ঠান কর্তৃক নির্ধারিত পোশাক পরিধানে সচেষ্ট হতে হবে এবং চুল, নখসহ সামগ্রিক পরিষ্কার ও পরিপাটির দিকে বিশেষ খেয়াল রাখতে হবে।",
            icon: Shirt
        },
        {
            text: "সন্তানের সামনে কাউকে গালি দেয়া যাবে না এবং খারাপ আচরণ করা যাবে না। মনে রাখতে হবে বাচ্চা সবকিছু দেখে দেখে শিখছে।",
            icon: ThumbsDown
        },
        {
            text: "প্রতিষ্ঠান থেকে যে আমল ও আখলাক শেখানো হবে, বাসার বড়রা সেই আমলগুলো তার সামনে বার বার করে তাকে শিখতে সহযোগিতা করতে হবে।",
            icon: BookOpen
        },
        {
            text: "১০০% হালাল রিজিক ভক্ষণ করার চেষ্টা করতে হবে এবং সন্তানকে খাওয়ানোর চেষ্টা করতে হবে। কখনো সন্তানকে একটুও হারাম খাওয়ানো যাবে না।",
            icon: Apple
        },
        {
            text: "শিক্ষার্থীর প্রতিষ্ঠান ও বাসার পরিবেশ একরকম রাখার চেষ্টা করতে হবে। কোনোভাবেই বাসায় গান-বাজনা ও টেলিভিশনের ব্যবস্থা রাখা যাবে না।",
            icon: Home
        },
        {
            text: "মাসিক প্রদেয় প্রতি চলতি মাসের ১–৭ তারিখের মধ্যে অবশ্যই পরিশোধ করে প্রতিষ্ঠান পরিচালনায় সহযোগিতা করতে হবে।",
            icon: CreditCard
        },
        {
            text: "অভিভাবিকাগণ শরিয়তসম্মত পর্দা ছাড়া প্রতিষ্ঠানের ভেতরে প্রবেশ করতে পারবেন না।",
            icon: User
        },
        {
            text: "মাদরাসার ভেতরে ধূমপান ও জোরে কথা বলা নিষিদ্ধ। মোবাইলে গানজাতীয় রিংটোন ব্যবহার করলে মাদরাসায় প্রবেশের পূর্বেই তা বন্ধ করতে হবে।",
            icon: VolumeX
        },
        {
            text: "আমরা সম্পূর্ণ নিজস্ব সিলেবাসে পাঠদান করে থাকি। তাই প্রচলিত অন্যান্য প্রতিষ্ঠানের সিলেবাসের সাথে আমাদের প্রভেদ থাকাই স্বাভাবিক।",
            icon: FileText
        },
        {
            text: "সন্তান আল্লাহর পক্ষ থেকে আপনার কাছে আমানত। তার সঠিক পরিচর্যার জন্য অবশ্যই সময় দিতে হবে। অবহেলার কারণে সন্তানের আখলাক, চরিত্র বা পড়াশোনায় ক্ষতি হলে এর জবাবদিহি আল্লাহর কাছে আপনাকেই করতে হবে।",
            icon: Shield
        }
    ];

    return (
        <section className="max-w-5xl mx-auto px-4 py-10 rounded-3xl">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">
                {/* Header */}
                <div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={``}
                >
                    {/* Header */}
                    <div className="text-center mb-4 md:mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg transform transition-all duration-500 hover:scale-110">
                                <FiUsers className="h-10 w-10 text-white" />
                            </div>
                        </div>
                        <h1 className="tiro-bangla-bold pt-4 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
                            অভিভাবকের জ্ঞাতব্য
                        </h1>
                        <p className="tiro-bangla-regular text-gray-700 max-w-2xl mx-auto text-md md:text-lg">
                            ভর্তি সম্পন্ন করতে নিচের বিষয়গুলোর ব্যাপারে অভিভাবকের একমত হওয়া আবশ্যক।
                        </p>
                    </div>

                </div>

                <ul className="space-y-5">
                    {points.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <li
                                key={index}
                                className="flex gap-4 items-start border border-purple-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-lc to-purple-600 text-white flex items-center justify-center shadow-md">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-800 leading-relaxed text-lg">{item.text}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-10 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-[1.02] text-lc">
                    <p className="font-medium">
                        <i className="fa-solid fa-circle-info mr-2"></i>
                        <span>উপরোক্ত বিষয়গুলো পালন করার ব্যাপারে একমত হয়েই কেবল সন্তান ভর্তির চিন্তা করার জন্য বিশেষভাবে অনুরোধ জানানো হচ্ছে।</span>
                    </p>
                </div>
            </div>
        </section>
    );
}