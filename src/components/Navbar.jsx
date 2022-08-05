import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "./Logo";
import { SocialMedia } from "./SocialMedia";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-full mx-auto px-8 py-5 fixed z-50 backdrop-blur-sm bg-gray-400 bg-opacity-70 border-b border-gray-300 transition duration-150 ease-in ${
        open ? "md:h-min h-screen" : "md:h-min h-20"
      }`}
    >
      <nav
        className={`md:flex md:justify-between md:items-center md:flex-row flex-col`}
      >
        <Logo />
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-7 top-6 md:hidden"
        >
          {open ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
        {/* menu */}
        <ul
          className={`md:flex md:space-x-10 capitalize md:text-lg font-medium text-2xl md:space-y-0 space-y-5 md:py-0 py-5
          transition ease-in ${
            open
              ? "opacity-100 duration-150 md:-translate-y-0 -translate-y-1"
              : "md:opacity-100 opacity-0 "
          } 
            `}
        >
          {["home", "about", "work", "skills"].map((item) => (
            <li key={`link-${item}`}>
              <a href={`#${item}`} className="">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`transition ease-in ${
            open
              ? "opacity-100 duration-500 md:-translate-y-0 -translate-y-1"
              : "md:opacity-100 opacity-0"
          }`}
        >
          <SocialMedia />
        </div>
      </nav>
    </div>
  );
};
