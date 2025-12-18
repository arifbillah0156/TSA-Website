"use client";
import { useState } from "react";
import NavHead from "./NavHead";
// import NavLogo from "./NavLogo";
import TSA from "@/public/TSA Logo.svg";
import NavDropdownDesktop from "./NavDropdownDesktop";
import NavDropdownDesktop2 from "./NavDropdownDesktop2";
import NavDropdownMobile from "./NavDropdownMobile";
import NavDropdownMobile2 from "./NavDropdownMobile2";
import NavLinksDesktop from "./NavLinksDesktop";
import NavLinksMobile from "./NavLinksMobile";
import NavDropdownDesktop3 from "./NavDropdownDesktop3";
import Link from "next/link";
import Image from "next/image";

const NavbarWithDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  return (
    <div className="pb-3 merriweather-regular border-b">
      <NavHead />
      {/* Nav Links bg-[#0072BC] */}
      <nav className="text-lc py-2">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="lg:ml-[4%] 2xl:ml-[10%] mt-2 flex items-center">
              <Image
                src={TSA}
                width={90}
                height={90}
                alt="TSA Logo"
                quality={100}
              />
              <p className="galada-regular mt-1">
                <span className="text-2xl sm:text-4xl">Taqwa</span>
                <br />
                <span className="text-xl sm:text-2xl">Shishu Academy</span>
              </p>
            </Link>
            {/* Blank Div */}
            {/* <div className="w-[50%] h-2 bg-red-700"></div> */}
            {/* Desktop Menu */}
            <div className="hidden xl:flex  font-bold tracking-wider">
              <NavLinksDesktop href="/" text="Home" icon="fa-solid fa-house" />
              {/* <NavLinksDesktop href="/Notices" text="Notices" /> */}
              {/* Dropdown Menu */}
              <div
                className="relative z-10"
                onMouseEnter={() => setIsDropdownOpen3(true)}
                onMouseLeave={() => setIsDropdownOpen3(false)}
                onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}
              >
                <button id="NavAcademic" className="p-5 py-[10px] bg-white text-lc border border-lc hover:bg-lc hover:text-white transition-all duration-300 ease-in-out  text-md hover:underline hover:underline-offset-4 mt-[2px] border-l-0 border-r-0 border-t-0 rounded-none hover:rounded-md">
                  <i className="fa-regular fa-rectangle-list mr-1"></i>
                  <span className="tracking-widest">Notices</span> <i className="fa-solid fa-chevron-down"></i>
                </button>
                {isDropdownOpen3 && (
                  <div className="pt-2 absolute ml-1">
                    <div className=" bg-white text-lc ring-2 ring-lc ring-offset-2 rounded-[3px] shadow-lg">
                      <NavDropdownDesktop3 href="/Notices" text="↪ Official Notices" />
                      <NavDropdownDesktop3 href="/Notices/TeachersGuidelines" text="↪ Teachers' Guidelines" />

                    </div>
                  </div>
                )}
              </div>

              {/* Dropdown Menu */}
              <div
                className="relative z-10"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <button className="ml-2 p-5 py-[10px] bg-white text-lc  text-md hover:underline hover:underline-offset-4 mt-[2px] border border-lc hover:bg-lc hover:text-white transition-all duration-300 ease-in-out border-l-0 border-r-0 border-t-0 rounded-none hover:rounded-md" id="NavAcademic">
                  <i className="fa-solid fa-graduation-cap mr-1"></i>
                  Academic <i className="fa-solid fa-chevron-down"></i>
                </button>
                {isDropdownOpen && (
                  <div className="absolute ml-3 pt-2">
                    <div className=" bg-white text-lc ring-2 ring-lc ring-offset-2 rounded-[3px] shadow-lg">
                      <NavDropdownDesktop href="/AdmissionFee" text="↪ Admission Fee" />
                      <NavDropdownDesktop href="/AdmissionEligibility" text="↪ Admission Eligibility" />
                      <NavDropdownDesktop href="/Education-system" text="↪ Education System" />
                      <NavDropdownDesktop href="/DressCode" text="↪ Dress Code" />
                      <NavDropdownDesktop href="/Result-method" text="↪ Result Method" />
                      {/* <NavDropdownDesktop href="/Co-curriculum" text="↪ Co-curriculum" /> */}
                      {/* <NavDropdownDesktop href="/Hostel-rules" text="↪ Hostel Rules" /> */}
                      <NavDropdownDesktop href="/Information-for-parents" text="↪ Information for parents" />
                    </div>
                  </div>
                )}
              </div>
              {/* Dropdown Menu Gallery*/}
              {/* <div
                className="relative z-10"
                onMouseEnter={() => setIsDropdownOpen2(true)}
                onMouseLeave={() => setIsDropdownOpen2(false)}
                onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
              >
                <button className="ml-2 p-5 py-[10px] bg-white text-lc  text-md hover:underline hover:underline-offset-4 mt-[2px] border border-lc hover:bg-lc hover:text-white transition-all duration-300 ease-in-out border-l-0 border-r-0 border-t-0 rounded-none hover:rounded-md" id="Gallery">
                  <i className="fa-solid fa-photo-film mr-1"></i>
                  Gallery <i className="fa-solid fa-chevron-down"></i>
                </button>
                {isDropdownOpen2 && (
                  <div className="absolute ml-3 pt-2">
                    <div className=" bg-white text-lc ring-2 ring-lc ring-offset-2 rounded-[3px] shadow-lg w-[130px]">
                      <NavDropdownDesktop2 href="/Photos" text="↪ Photos" />
                      <NavDropdownDesktop2 href="/Videos" text="↪ Videos" />
                    </div>
                  </div>
                )}
              </div> */}
              <NavLinksDesktop href="/Photos" text="Gallery" icon="fa-solid fa-photo-film" />
              <NavLinksDesktop href="/About/PrincipalMessage" text="About" icon="fa-solid fa-circle-info" />
              <div className="ml-[-8px]">
                <NavLinksDesktop href="/Contact" text="Contact" icon="fa-regular fa-address-book" />
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white bg-lc border border-lc p-2 py-1 mr-3 rounded-md hover:bg-white hover:text-lc"
              >
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden mt-4 md:mt-4 font-bold tracking-wider">
            <div className="space-y-3 py-4 px-6 mobileNavMenubar">
              <div className="" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/" text="Home" icon="fa-solid fa-house" />
              </div>
              {/* <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/Notices" text="Notices" />
              </div> */}

              {/* Mobile Dropdown Menu Gallery */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}
                  className="block w-full p-2 bg-white text-lc rounded-md text-lg underline underline-offset-4"
                  id="Gallery"
                >
                  <i className="fa-regular fa-rectangle-list mr-1"></i>
                  Notices <i className="fa-solid fa-chevron-down"></i>
                </button>
                {isDropdownOpen3 && (
                  <div className="pl-4 underline underline-offset-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <NavDropdownMobile2 href="/Notices" text="↪ Official Notices" />
                    <NavDropdownMobile2 href="/Notices/TeachersGuidelines" text="↪ Teachers' Guidelines" />
                  </div>
                )}
              </div>

              {/* Mobile Dropdown Menu */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="block w-full p-2 bg-white text-lc rounded-md text-lg underline underline-offset-4"
                  id="NavAcademic"
                >
                  <i className="fa-solid fa-graduation-cap mr-1"></i>
                  Academic <i className="fa-solid fa-chevron-down"></i>
                </button>
                {isDropdownOpen && (
                  <div className="pl-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <NavDropdownMobile href="/AdmissionFee" text="↪ Admission Fee" />
                    <NavDropdownMobile href="/AdmissionEligibility" text="↪ Admission Eligibility" />
                    <NavDropdownMobile href="/Education-system" text="↪ Education System" />
                    <NavDropdownMobile href="/DressCode" text="↪ Dress Code" />
                    <NavDropdownMobile href="/Result-method" text="↪ Result Method" />
                    {/* <NavDropdownMobile href="/Co-curriculum" text="↪ Co-curriculum" /> */}
                    {/* <NavDropdownMobile href="/Hostel-rules" text="↪ Hostel Rules" /> */}
                    <NavDropdownMobile href="/Information-for-parents" text="↪ Information for parents" />
                  </div>
                )}
              </div>
              {/* Mobile Dropdown Menu Gallery */}
              {/* <div>
                <button
                  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                  className="block w-full p-2 bg-white text-lc rounded-md text-lg underline underline-offset-4"
                  id="Gallery"
                >
                  <i className="fa-solid fa-photo-film mr-1"></i>
                  Gallery <i className="fa-solid fa-chevron-down"></i>
                </button>
                {isDropdownOpen2 && (
                  <div className="pl-4 underline underline-offset-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <NavDropdownMobile2 href="/Photos" text="↪ Photos" />
                    <NavDropdownMobile2 href="/Videos" text="↪ Videos" />
                  </div>
                )}
              </div> */}
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/Photos" text="Gallery" icon="fa-solid fa-photo-film" />
              </div>
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/About/PrincipalMessage" text="About" icon="fa-solid fa-circle-info" />
              </div>
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/Contact" text="Contact" icon="fa-regular fa-address-book" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarWithDropdown;
