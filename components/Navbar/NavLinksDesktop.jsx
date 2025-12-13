import Link from "next/link";
import React from "react";

const NavLinksDesktop = ({ href, text, icon }) => {
  return (
    <div className="m-2 mt-3">
      <Link href={href} className="p-5 py-3 border border-lc  bg-white text-lc rounded-md text-md hover:bg-lc hover:text-white hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out">
        <i className={`${icon} mr-1`}></i>
        <span className="tracking-widest ">
          {text}
        </span>
      </Link>
    </div>
  );
};

export default NavLinksDesktop;
