import Link from "next/link";

const NavLinksMobile = ({ href, text, icon }) => {
  return (
    <div className="text-center rounded-md">
      <Link href={href} className="block w-full p-2 bg-white text-lc rounded-md text-md underline underline-offset-4">
        <i className={`${icon} mr-2`}></i>
        <span className="tracking-widest">
          {text}
        </span>
      </Link>
    </div>
  );
};

export default NavLinksMobile;
