import React from "react";
import Logo from "./Logo";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-8 py-6">
      <Logo />
      <ul className="flex space-x-4 capitalize text-base font-medium">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
