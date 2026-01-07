import Link from "next/link";
import React from "react";
import contact from "@/public/gif/contact.gif"
import email from "@/public/gif/email.gif"
import fb from "@/public/gif/follow-us.gif"
import Image from "next/image";

const NavHead = () => {
  return (
    <div className="bg-[#92279e] text-white text-md md:text-lg p-1 md:p-2 md:py-0 tracking-wider text-center md:flex md:justify-center md:gap-10">
      <div className="md:py-1">
        <Link
          href={"tel:+8801865065125"}
          className="font-mono tracking-normal flex justify-center items-center gap-2"
        >
          <div className="p-[2px] bg-white rounded-full"><Image src={contact} width={25} height={25} alt="Contact" className="rounded-full" /></div>
          <span>+88 01865-065125</span>
        </Link>
      </div>
      <div className="md:py-1 hidden lg:block">
        <Link
          href={"mailto:taqwamadrasa082@gmail.com"}
          className="font-mono tracking-normal flex justify-center items-center gap-2"
        >
          <div className="p-[2px] bg-white rounded-full">

            <Image src={email} width={25} height={25} alt="Email" className="rounded-full" />
          </div>
          <span>taqwamadrasa082@gmail.com</span>
        </Link>
      </div>
      <div className="md:py-1">
        <Link
          href={"https://www.facebook.com/taqwashishuacademy"}
          className="font-mono tracking-normal flex justify-center items-center gap-2"
          target="_blank"
        >
          <div className="p-[2px] bg-white rounded-full">

            <Image src={fb} width={25} height={25} alt="Facebook" className="rounded-full" />
          </div>
          <span>Taqwa Shishu Academy</span>
        </Link>
      </div>

    </div >
  );
};
export default NavHead;
