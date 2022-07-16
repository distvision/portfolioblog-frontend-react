import React from "react";
import Logo from "./Logo";
import { SocialMedia } from "./SocialMedia";

export const Navbar = () => {
  return (
    <div className="w-full mx-auto px-8 py-5 fixed z-50 backdrop-blur-sm bg-gray-400 bg-opacity-70 border-b border-gray-300">
      <nav className="flex justify-between items-center">
        <Logo />
        <ul className="flex space-x-10 capitalize text-lg font-medium">
          {["home", "about", "work", "skills"].map((item) => (
            <li key={`link-${item}`}>
              <a
                href={`#${item}`}
                className="py-[35px] hover:border-b border-accents-100 transition-all duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <SocialMedia />
      </nav>
    </div>
  );
};
