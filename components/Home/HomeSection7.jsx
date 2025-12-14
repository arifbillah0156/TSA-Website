import SplitText from "../Others/SplitText";

export default function WhyChooseUs() {
  const features = [
    {
      id: "1",
      title: "দ্বীনি ও জেনারেল শিক্ষার সমন্বিত ব্যবস্থা",
      description: "আমরা মাদরাসা ও স্কুল—উভয় ধারার পাঠ্যক্রমকে সমন্বয় করে শিশুর পূর্ণাঙ্গ মানসিক ও নৈতিক বিকাশ নিশ্চিত করি।"
    },
    {
      id: "2",
      title: "শিশুমনোবিজ্ঞান ভিত্তিক পাঠদান",
      description: "শিশুশিক্ষা গবেষকের তত্ত্বাবধানে পরিচালিত হওয়ায় প্রতিটি শিশুর বয়স, মেধা ও মানসিক গঠনের প্রতি সর্বোচ্চ গুরুত্ব দেওয়া হয়।"
    },
    {
      id: "3",
      title: "হিফজ ও জেনারেল—উভয় বিষয়ে সমান গুরুত্ব",
      description: "হিফজ, আরবি ও জেনারেল শিক্ষাকে ১০০% গুরুত্ব দিয়ে পড়ালেখার মান বজায় রাখা হয়।"
    },
    {
      id: "4",
      title: "নিয়মিত মূল্যায়ন ও জবাবদিহিতা",
      description: "হোমওয়ার্ক, সি.টি., এম.টি. ও টিউটোরিয়াল পরীক্ষার মাধ্যমে শিক্ষার্থীর অগ্রগতি নিয়মিত যাচাই করা হয়।"
    },
    {
      id: "5",
      title: "বয়স ও যোগ্যতাভিত্তিক শ্রেণি নির্ধারণ",
      description: "ভর্তির সময় পরীক্ষার মাধ্যমে শিক্ষার্থীর প্রকৃত যোগ্যতা অনুযায়ী শ্রেণি ও বিভাগ নির্ধারণ করা হয়—অভিভাবকের চাপ ছাড়াই।"
    },
    {
      id: "6",
      title: "আবাসিক ও অনাবাসিক—উভয় সুবিধা",
      description: "হিফজ বিভাগের শিক্ষার্থীদের জন্য নিরাপদ ও শৃঙ্খলাপূর্ণ আবাসিক এবং অনাবাসিক ব্যবস্থাপনা রয়েছে।"
    },
    {
      id: "7",
      title: "নির্ভরযোগ্য বোর্ড ও পরীক্ষা ব্যবস্থা",
      description: "বেফাক বোর্ড, আঞ্চলিক বোর্ড ও হুফ্ফাজে পরীক্ষার মাধ্যমে শিক্ষার্থীদের সাফল্যের স্বীকৃতি নিশ্চিত করা হয়।"
    },
    {
      id: "8",
      title: "আদর্শ ইসলামী পরিবেশ",
      description: "শিক্ষার্থী ও অভিভাবক—উভয়ের জন্যই নামাজ, পর্দা ও হালাল জীবনব্যবস্থার প্রতি কঠোর গুরুত্ব দেওয়া হয়।"
    },
    {
      id: "9",
      title: "শৃঙ্খলা ও চরিত্র গঠনে আপসহীনতা",
      description: "অশালীন আচরণ, গালমন্দ ও ঝগড়ার বিরুদ্ধে আমরা জিরো টলারেন্স নীতি অনুসরণ করি।"
    },
    {
      id: "10",
      title: "সংশোধনের সুযোগসহ দায়িত্বশীল ভর্তি নীতি",
      description: "অভিভাবকের কোনো ত্রুটি থাকলে তা সংশোধনের শর্তে ভর্তির বিষয়ে মানবিকভাবে বিবেচনা করা হয়।"
    },
    {
      id: "11",
      title: "নির্ধারিত রুটিনে অভ্যস্ত করে তোলা",
      description: "ভর্তির পর থেকেই শিক্ষার্থীদের ২৪ ঘণ্টার নির্ধারিত রুটিন শতভাগ অনুসরণে অভ্যস্ত করা হয়, যাতে শৃঙ্খলাবোধ ও সময়ানুবর্তিতা গড়ে ওঠে।"
    },
    {
      id: "12",
      title: "পরিবার ও প্রতিষ্ঠানের সমন্বিত দায়িত্ববোধ",
      description: "শিক্ষার্থী গঠনে আমরা পরিবার ও প্রতিষ্ঠানের যৌথ দায়িত্বে বিশ্বাস করি—অভিভাবক ও প্রতিষ্ঠানের একই লক্ষ্য, একই আদর্শ।"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl  font-bold text-center text-lc abril-fatface-regular">
          <SplitText
            text="What Makes Us Unique"
            className="text-2xl sm:text-4xl font-bold text-lc abril-fatface-regular"
          />

        </h2>
        {/* Divider */}
        <div className="w-full h-1 bg-lc mx-auto my-3"></div>
        {/*  */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              {/* Card top accent */}
              <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 w-full"></div>

              <div className="p-6">
                {/* Icon container with enhanced styling */}
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl text-blue-600 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={`/gif/${feature.id}.gif`}
                    alt="AnimatedIcon"
                    className="w-10 h-10 rounded-md"
                  />
                </div>

                {/* Title with hover effect */}
                <h3 className="text-lg font-semibold text-center text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description with improved readability */}
                <p className="mt-3 text-gray-600 text-sm text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

