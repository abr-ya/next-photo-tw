import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface ILinkItem {
  title: string;
  href: string;
}

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const Links: ILinkItem[] = [
    { title: "Home", href: "/" },
    { title: "Gallery", href: "/#gallery" },
    { title: "Work", href: "/#work" },
    { title: "Contact", href: "/#contact" },
  ];

  const IconComponent = !showMobileMenu ? AiOutlineMenu : AiOutlineClose;

  return (
    <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            LogoPhoto
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          {Links.map(({ href, title }) => (
            <li key={href} className="p-4">
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Button */}
      <div onClick={toggleMobileMenu} className="absolute block sm:hidden z-10 right-6 top-6">
        <IconComponent size={20} style={{ color: `${textColor}` }} />
      </div>
      {/* Mobile Menu */}
      <div
        className={
          showMobileMenu
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300"
        }
      >
        <ul>
          {Links.map(({ href, title }) => (
            <li key={href} onClick={toggleMobileMenu} className="p-4 text-4xl hover:text-gray-500">
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /Mobile Menu */}
    </div>
  );
};

export default Navbar;
