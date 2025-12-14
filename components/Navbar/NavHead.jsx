import Link from "next/link";
import React from "react";

const NavHead = () => {
  return (
    <div className="bg-[#92279e] text-white text-md md:text-lg p-1 md:p-2 md:py-0 tracking-wider text-center md:flex md:justify-center md:gap-10">
      <div className="md:py-1">
        <Link
          href={"tel:+8801627449269"}
          className="font-mono tracking-normal flex justify-center items-center gap-2"
        >
          <i className="fa-solid fa-phone"></i>{" "}
          <span>+88 01627-449269</span>
        </Link>
      </div>
      <div className="md:py-1">
        <Link
          href={"mailto:ksua1980@gmail.com"}
          className="font-mono tracking-normal flex justify-center items-center gap-2"
        >
          <i className="fa-solid fa-envelope"></i>{" "}
          <span>ksua1980@gmail.com</span>
        </Link>
      </div>
      <div className="md:py-1">
        <Link
          href={"https://www.facebook.com/taqwashishuacademy"}
          className="font-mono tracking-normal flex justify-center items-center gap-2"
          target="_blank"
        >
          <i className="fa-brands fa-facebook"></i>{" "}
          <span>Taqwa Shishu Academy</span>
        </Link>
      </div>

    </div >
  );
};
export default NavHead;
