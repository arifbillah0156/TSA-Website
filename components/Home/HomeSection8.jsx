import CountUp from 'react-countup';
import CountUpNumber from '../Others/CountUp';
import SplitText from '../Others/SplitText';



const HomeSection8 = () => {
  const tabs = [{
    id: "1",
    icon: "teacher",
    text: "Teachers",
    number: "30",
    className: "group relative bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-emerald-100 pt-4 pb-4"
  }, {
    id: "2",
    icon: "students",
    text: "Students",
    number: "500",
    className: "group relative bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-emerald-100 pt-4 pb-4"
  }, {
    id: "3",
    icon: "teamwork",
    text: "Staff",
    number: "20",
    className: "group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-emerald-100 pt-4 pb-4"
  }]

  return (
    <section className="bg-gray-50 py-6 pb-16">
      <div className="container mx-auto px-6 text-center  max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-green-600 abril-fatface-regular">
          <SplitText
            text="Over many years of dedication, We have"
            className="text-2xl sm:text-4xl font-bold text-lc abril-fatface-regular"
          />
        </h2>
        {/* Divider */}
        <div className="w-full h-1 bg-lc mx-auto my-6"></div>
        {/*  */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tabs.map(({ id, icon, text, number, className }) => (

            <div className={className} key={id}>
              {/* Icon container with hover effect */}
              <div className="flex justify-center mb-4">
                <div className="shadow-sm rounded-full">
                  <img width={65} src={`/gif/${icon}.gif`} alt={icon} className="group-hover:scale-110 transition-transform duration-300 rounded-full" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-3 abril-fatface-regular text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                {text}
              </h3>

              {/* Counter number with gradient effect */}
              <div className="text-5xl font-bold mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                  <CountUpNumber num={number} />
                </span>
                <span className="text-emerald-500 text-4xl">+</span>
              </div>

              {/* Decorative bottom element */}
              <div className="mt-4 flex justify-center">
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-700 to-lc"></div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
};

export default HomeSection8;
