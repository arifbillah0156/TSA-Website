import Link from "next/link";
import React from "react";

const NavLinksDesktop = ({ href, text, icon }) => {
  return (
    <div className="m-2 mt-3">
      <Link href={href} className="p-5 py-3 bg-lc text-white rounded-md text-md hover:underline hover:underline-offset-4">
        <i className={`${icon} mr-1`}></i>
        <span className="tracking-widest ">
          {text}
        </span>
      </Link>
    </div>
  );
};

export default NavLinksDesktop;
