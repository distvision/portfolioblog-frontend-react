import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="flex items-center p-4 space-x-4">
      {[
        <a href="https://www.instagram.com/user_fred_/">
          <BsInstagram size={18} />
        </a>,
        <a href="https://twitter.com/distor_things">
          <BsTwitter size={18} />
        </a>,
        <a
          href="https://www.facebook.com/fred.bernardo.7758/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={18} />
        </a>
      ].map((comp, index) => (
        <div
          key={comp + index}
          className="flex justify-between items-center cursor-pointer"
        >
          {comp}
        </div>
      ))}
    </div>
  );
};
