"use client"
import Image from "next/image";
import Link from "next/link";
import TSA from "@/public/TSA Logo.svg";
import { useState } from "react";
import BackToTopButton from "../Others/BackToTop";

const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-tr from-purple-900  to-lc text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 xl:px-6 pt-8 pb-2 relative z-10">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-6 border-b border-purple-600">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative">
                <Image
                  src={TSA}
                  alt="Studio Architect"
                  className="w-24 h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg blur opacity-75"></div>
              </div>
              <div className="ml-4">
                <h2 className="galada-regular text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-50">
                  Taqwa Shishu Academy
                </h2>
                <p className="text-purple-200 text-sm">Excellence in Education</p>
              </div>
            </div>
            <p className="text-sm text-purple-100 text-justify merriweather leading-relaxed max-w-xl">
              Taqwa Shishu Academy has emerged as a promising educational institution,
              dedicated to nurturing young minds through inclusive, value-based, and quality
              education in a caring and supportive environment.
            </p>

            {/* Opening Hours */}
            <div className="mt-6 p-4 w-max bg-purple-800/30 rounded-lg border border-purple-700">
              <h4 className="font-bold mb-2 flex items-center">
                <i className="fas fa-clock mr-2 mt-[-4px] text-purple-400"></i> Office Opening Hours
              </h4>
              <p className="text-sm text-purple-100">
                Saturday - Thursday: 8:00 AM - 9:00 PM
              </p>
              <p className="text-sm text-purple-100">
                Friday: 9:00 AM - 8:00 PM
              </p>
            </div>

          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-purple-600 inline-block">Follow Us</h3>
            <div className="space-y-4">
              <Link
                href="https://www.youtube.com/"
                className="flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 mt-[-4px] rounded-full  flex items-center justify-center bg-red-600 transition-all duration-300">
                  <i className="fa-brands fa-youtube text-white text-lg"></i>
                </div>
                <span className="ml-3 group-hover:text-purple-200 transition-colors duration-300">YouTube Channel </span>
              </Link>

              <Link
                href="https://www.facebook.com/taqwashishuacademy"
                className="flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 mt-[-4px] rounded-full  flex items-center justify-center bg-blue-600 transition-all duration-300">
                  <i className="fa-brands fa-facebook-f text-white text-lg"></i>
                </div>
                <span className="ml-3 group-hover:text-purple-200 transition-colors duration-300">Facebook Page</span>
              </Link>

              <Link
                href="https://www.facebook.com/taqwashishuacademy"
                className="flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 mt-[-4px] rounded-full flex items-center justify-center bg-blue-600 transition-all duration-300">
                  <i className="fa-brands fa-facebook-f  text-white text-lg"></i>
                </div>
                <span className="ml-3 group-hover:text-purple-200 transition-colors duration-300">Principal FB ID</span>
              </Link>
            </div>


          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-purple-600 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone-alt text-green-400"></i>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Principal</p>
                  <a
                    href="tel:+8801865065125"
                    className="text-purple-200 hover:text-white transition-colors duration-300"
                  >
                    +88 01865-065125
                  </a>
                </div>
              </li>


              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-blue-400"></i>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:taqwamadrasa082@gmail.com"
                    className="text-purple-200 hover:text-white transition-colors duration-300"
                  >
                    taqwamadrasa082@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-yellow-600/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-yellow-400"></i>
                </div>
                <div className="ml-3">
                  <p className="text-purple-200">
                    ২৪০, শাহীন মঞ্জিল, জামতলা, বালুরমাঠ, উত্তরখান, ঢাকা-১২৩০
                  </p>
                </div>
              </li>
            </ul>

          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-2 pt-0 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-sm text-purple-200 merriweather text-center flex gap-1 flex-col md:flex-row justify-center items-center">
              <p>© All Rights Reserved {currentYear} -</p>
              <Link href="https://www.facebook.com/taqwashishuacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group underline">
                Taqwa Shishu Academy
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <p className="text-sm text-purple-300 mr-2 mb-2 md:mb-0">
              The website was developed by:
            </p>
            <Link
              href="https://www.facebook.com/arifbillah64"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group"
            >
              <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">
                <i className="fas fa-user text-purple-200 group-hover:text-white text-sm"></i>
              </div>
              <span className="ml-2 text-purple-200 group-hover:text-white transition-colors duration-300">
                Arif Billah</span>
            </Link>
          </div>
        </div>

        {/* Back to top button */}
        <BackToTopButton />
      </div>
    </footer>
  );
};

export default Footer;