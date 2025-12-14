"use client"
import SplitText from "../Others/SplitText";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function HomeSection5() {
  // const [activeSection, setActiveSection] = useState("our-words");
  const sectionRefs = {
    "our-words": useRef(null),
    "why-this-event": useRef(null),
    "our-uniqueness": useRef(null),
    "our-specialty": useRef(null),
  };

  return (
    <section className="h-max w-[100%] relative mt-12 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(/Images/HomeS5BG.jpg)`,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <section className="relative z-10">
        <div className="container mx-auto px-6 py-12 relative z-10">
          {/* Heading */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SplitText
                text="A Unique Academy In Bangladesh"
                className="text-2xl sm:text-4xl font-bold text-lc mb-6 abril-fatface-regular"
              />
              <div className="w-full mx-auto border-b-4 border-lc mb-6"></div>

            </motion.div>
          </div>



          {/* Content Cards */}
          <div className="mt-12 space-y-8">
            {/* Our Words */}
            <motion.div
              ref={sectionRefs["our-words"]}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20"
              id="our-words"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl mr-4">
                  <i className="fa-solid fa-book-open"></i>
                </div>
                <h3 className="text-2xl font-bold text-lc ">আমাদের কথা</h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-justify">
                ২০১৪ সালে প্রতিষ্ঠিত এই প্রতিষ্ঠানটি মক্তব ও স্কুল শিক্ষার সমন্বয়ে শিশুবান্ধব কিন্ডারগার্টেন মডেলে পরিচালিত হয়। এখানে হিফজসহ আরবি ও জেনারেল শিক্ষাকে সমান গুরুত্ব দিয়ে নিয়মিত হোমওয়ার্ক, সিটি–মাসিক পরীক্ষা ও টিউটোরিয়ালের মাধ্যমে শিক্ষার মান ও জবাবদিহিতা নিশ্চিত করা হয়। ৩.৫/৪ বছর বয়স থেকেই ভর্তি কার্যক্রম শুরু হয়। হিফজ বিভাগে নাজেরা উত্তীর্ণ ও দ্বিতীয় শ্রেণি সমমানের শিক্ষার্থীদের জন্য জেনারেলসহ হিফজ এবং জেনারেল ছাড়া হিফজ—উভয় ব্যবস্থায় আবাসিক ও অনাবাসিক সুযোগ রয়েছে। পাশাপাশি বেফাক বোর্ডের রেজিস্ট্রেশনকৃত কিতাব বিভাগে মাদানি নিসাবের সঙ্গে ৬ষ্ঠ থেকে ১০ম শ্রেণি পর্যন্ত সরকারি মাদরাসা সিলেবাসে পাঠদান ও বোর্ড পরীক্ষার ব্যবস্থা রাখা হয়েছে। আমাদের লক্ষ্য একটাই—শিশু থেকে উচ্চশিক্ষা পর্যন্ত এমন একটি আদর্শ শিক্ষাপরিবেশ গড়ে তোলা, যেখানে কুরআন-সুন্নাহভিত্তিক নৈতিকতা, আধুনিক জ্ঞান ও মানবিক মূল্যবোধ একসাথে বিকশিত হবে। আমরা বিশ্বাস করি, এই সমন্বিত শিক্ষাধারাই আগামী প্রজন্মকে আলোকিত মানুষ হিসেবে গড়ে তুলবে।
              </p>
            </motion.div>

            {/* Why This Event */}
            <motion.div
              ref={sectionRefs["why-this-event"]}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20"
              id="why-this-event"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl mr-4">
                  <i className="fa-solid fa-question"></i>
                </div>
                <h3 className="text-2xl font-bold text-lc">কেন এ আয়োজন</h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-justify">
                বর্তমান সময়ে শিক্ষা শুধু পাঠ্যবইয়ে সীমাবদ্ধ নয়; বরং নৈতিকতা, মানসিক পরিপক্বতা ও বাস্তব জীবনের উপযোগী দক্ষতা অর্জনই একটি পূর্ণাঙ্গ শিক্ষার মূল লক্ষ্য। কিন্তু প্রচলিত শিক্ষাব্যবস্থায় অনেক ক্ষেত্রেই ধর্মীয় মূল্যবোধ, চরিত্র গঠন ও শিশুমনোবিজ্ঞানের সমন্বিত প্রয়োগ অনুপস্থিত। এই শূন্যতা পূরণ এবং একটি ভারসাম্যপূর্ণ প্রজন্ম গড়ে তোলার প্রয়োজন থেকেই আমাদের এই আয়োজন। শিশুকাল থেকেই যেন কুরআন ও সুন্নাহভিত্তিক আদর্শ, শুদ্ধ আকিদা, সুন্দর আখলাকের পাশাপাশি আধুনিক জ্ঞান ও সাধারণ শিক্ষায় সমানভাবে দক্ষ হয়ে উঠতে পারে—সে লক্ষ্যেই তাকওয়া শিক্ষা পরিবার–এর উদ্যোগ। এখানে মাদরাসা ও স্কুল শিক্ষাকে সমন্বয় করে শিশুবান্ধব পরিবেশে পাঠদান করা হয়, যেখানে প্রতিটি শিশুর মানসিক গঠন, শেখার সক্ষমতা ও আগ্রহকে গুরুত্ব দেওয়া হয়।
              </p>
            </motion.div>

            {/* Our Uniqueness */}
            <motion.div
              ref={sectionRefs["our-uniqueness"]}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20"
              id="our-uniqueness"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-xl mr-4">
                  <i className="fa-solid fa-star"></i>
                </div>
                <h3 className="text-2xl font-bold text-lc">আমাদের স্বাতন্ত্র্য</h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-justify">
                আমাদের শিক্ষাব্যবস্থার মূল স্বাতন্ত্র্য হলো—দ্বীনি আদর্শ ও আধুনিক জ্ঞানের ভারসাম্যপূর্ণ সমন্বয়। আমরা বিশ্বাস করি, একপাক্ষিক শিক্ষা নয়; বরং কুরআন–সুন্নাহভিত্তিক নৈতিকতা, সুস্থ মানসিক বিকাশ এবং যুগোপযোগী সাধারণ শিক্ষার সম্মিলনেই গড়ে ওঠে একটি পরিপূর্ণ মানুষ।

                আমাদের প্রতিষ্ঠানে শিশুশিক্ষা ও শিশুমনোবিজ্ঞানের আলোকে পাঠদান করা হয়। প্রতিটি শিশুর বয়স, মানসিক সক্ষমতা ও শেখার গতি বিবেচনায় নিয়ে পাঠপরিকল্পনা প্রণয়ন করা হয়, যাতে পড়ালেখা শিশুর জন্য চাপ নয়, বরং আনন্দময় ও ফলপ্রসূ হয়।

                হিফজ, আরবি ও দীনি শিক্ষার পাশাপাশি জেনারেল শিক্ষাকে আমরা ১০০% গুরুত্ব দিই। কোনো বিষয়ই অবহেলিত নয়। নিয়মিত হোমওয়ার্ক, ক্লাস টেস্ট, মাসিক ও টিউটোরিয়াল পরীক্ষার মাধ্যমে শিক্ষার্থীদের অগ্রগতি মূল্যায়ন করা হয় এবং জবাবদিহিতার একটি সুস্পষ্ট কাঠামো বজায় রাখা হয়।

                আমাদের আরেকটি বিশেষত্ব হলো—শিশুবান্ধব পরিবেশ ও অভিভাবক-কেন্দ্রিক ব্যবস্থাপনা। শিক্ষার্থী, শিক্ষক ও অভিভাবকের মধ্যে নিয়মিত যোগাযোগের মাধ্যমে একটি সমন্বিত শিক্ষাবলয় তৈরি করা হয়, যা শিশুর নৈতিক ও একাডেমিক উন্নয়নে কার্যকর ভূমিকা রাখে।

                সবচেয়ে বড় কথা, আমরা শুধু পরীক্ষায় ভালো ফল নয়; বরং ঈমানদার, আদর্শবান, আত্মবিশ্বাসী ও দায়িত্বশীল মানুষ গড়ে তুলতে চাই। এই লক্ষ্য, এই দৃষ্টিভঙ্গি এবং এই সমন্বিত প্রয়াসই আমাদের স্বাতন্ত্র্য।
              </p>
            </motion.div>

            {/* Our Specialty */}
            <motion.div
              ref={sectionRefs["our-specialty"]}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20"
              id="our-specialty"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-600 flex items-center justify-center text-white text-xl mr-4">
                  <i className="fa-solid fa-handshake"></i>                </div>
                <h3 className="text-2xl font-bold text-lc">আমাদের বৈশিষ্ঠ্য</h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-justify">
                আমাদের শিক্ষা কার্যক্রমের প্রধান বৈশিষ্ট্য হলো দ্বীনি আদর্শ ও আধুনিক শিক্ষার সুসমন্বিত প্রয়োগ। এখানে হিফজ, আরবি ও দীনি শিক্ষার পাশাপাশি জেনারেল শিক্ষাকে সমান গুরুত্ব দিয়ে পাঠদান করা হয়, যাতে কোনো শিক্ষাধারাই অবহেলিত না থাকে। শিশুশিক্ষা ও শিশুমনোবিজ্ঞানের আলোকে গড়ে তোলা শিশুবান্ধব পরিবেশে শিক্ষার্থীরা আনন্দের সঙ্গে শেখার সুযোগ পায়। যোগ্য ও অভিজ্ঞ শিক্ষকবৃন্দের নিবিড় তত্ত্বাবধানে নিয়মিত হোমওয়ার্ক, ক্লাস টেস্ট, মাসিক ও টিউটোরিয়াল পরীক্ষার মাধ্যমে শিক্ষার মান যাচাই এবং জবাবদিহিতা নিশ্চিত করা হয়। আবাসিক ও অনাবাসিক ব্যবস্থাসহ সুসংগঠিত হিফজ বিভাগ, বেফাক ও সরকারি বোর্ড পরীক্ষার উপযোগী পাঠদান, শৃঙ্খলাপূর্ণ ও নিরাপদ পরিবেশ এবং অভিভাবকদের সঙ্গে নিয়মিত যোগাযোগ—সব মিলিয়ে আমরা এমন একটি শিক্ষাব্যবস্থা উপহার দিতে চাই, যা শিক্ষার্থীদের ঈমান, জ্ঞান ও চরিত্রে পরিপূর্ণ মানুষ হিসেবে গড়ে তুলতে কার্যকর ভূমিকা রাখে।
              </p>
            </motion.div>
          </div>


        </div>
      </section>
    </section>
  );
}