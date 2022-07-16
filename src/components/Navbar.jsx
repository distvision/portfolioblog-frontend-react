import React from "react";
import Logo from "./Logo";
import { SocialMedia } from "./SocialMedia";

export const Navbar = () => {
  return (
    <div className="w-full mx-auto px-8 py-5 fixed z-50 backdrop-blur-sm bg-gray-400 bg-opacity-70 border-b border-gray-300">
      <nav className="flex justify-between items-center">
        <Logo />
        <ul className="flex space-x-4 capitalize text-lg font-medium">
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <SocialMedia />
      </nav>
    </div>
  );
};
