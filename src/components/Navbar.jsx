import React from "react";
import Logo from "./Logo";

export const Navbar = () => {
  return (
    <div className="w-full mx-auto px-8 py-5 fixed z-50 backdrop-blur-sm bg-gray-400 bg-opacity-70">
      <nav className="flex justify-between items-center ">
        <Logo />
        <ul className="flex space-x-4 capitalize text-base font-medium">
          {["home", "about", "work", "skills", "testimonials", "contact"].map(
            (item) => (
              <li key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};
