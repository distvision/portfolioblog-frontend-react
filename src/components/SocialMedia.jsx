import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="md:flex md:items-center md:space-x-5 flex space-x-5">
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
        <div key={comp + index}>{comp}</div>
      ))}
    </div>
  );
};
