import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export const Header = () => {
  return (
    <div
      id="home"
      className="px-8 min-h-screen flex flex-col items-center justify-center bg-gray-500"
    >
      <div className="text-center">
        <h1 className="text-[2rem] leading-10 md:leading-tight font-bold pb-6 md:text-5xl">
          Estúdio de design e desenvolvimento{" "}
          <br className={`hidden md:block`} /> de marcas e produtos digitais
        </h1>
        <p className="text-xs font-bold text-gray-200 uppercase">
          trabalhamos com marcas para definir e expressar suas experiências
          online.
        </p>
      </div>
      <div className="mt-8 px-6 py-4 border-2 border-gray-200 rounded-[5.625rem]">
        <a
          href="#"
          className="flex items-center uppercase justify-center gap-3 text-base font-bold"
        >
          Vamos trabalhar juntos
          <MdArrowForwardIos size={20} />
        </a>
      </div>
    </div>
  );
};
