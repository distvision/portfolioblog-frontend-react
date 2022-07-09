import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="flex justify-end items-center flex-col p-4">
      {[
        <BsInstagram size={15} />,
        <BsTwitter size={15} />,
        <FaFacebookF size={15} />
      ].map((comp, index) => (
        <div
          key={comp + index}
          className="w-10 h-10 rounded-full my-1 border border-gray-100 flex justify-center items-center"
        >
          {comp}
        </div>
      ))}
    </div>
  );
};
