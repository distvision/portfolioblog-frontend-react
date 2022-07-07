import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export const Header = () => {
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
      <div className="text-center">
        <h1 className="text-7xl font-bold leading-tight px-24 pt-20">
          Oi! Eu sou Fred. <br />
          Desenvolvedor e Designer
        </h1>
        <p className="pt-6">
          Sou Desenvolvedor Full Stack e UI/UX Designer baseado em Moçambique,
          Beira.
        </p>
      </div>
      <div className="flex justify-center items-center text-lg font-medium mt-12 gap-7 ">
        <a
          href="#"
          className="flex items-center justify-evenly gap-2 py-4 px-8 bg-gray-100 text-gray-400"
        >
          Vamos Conversar
          <MdArrowForwardIos />
        </a>
        <a href="#" className="underline">
          Ver Portfólio
        </a>
      </div>
    </div>
  );
};
