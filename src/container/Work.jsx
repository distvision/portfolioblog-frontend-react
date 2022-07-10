import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../wrapper";
import { urlFor, client } from "../client";
import { MdArrowForwardIos } from "react-icons/md";

export const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animeteCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {};

  return (
    <div className="pt-24 pb-8 px-24 min-h-screen w-full max-w-[1200px] mx-auto border-b border-gray-100">
      <h2 className="text-5xl leading-tight font-bold text-center mb-8">
        Criando soluções digitais
      </h2>
      <div className="flex items-center justify-center space-x-4">
        {["UI/UX", "Web App", "Mobile App", "React Js", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`text-base font-medium py-2 px-4 bg-gray-100 text-gray-400 cursor-pointer ${
                activeFilter === item ? "bg-accents-100 text-gray-100" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animete={animeteCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center pt-8"
      >
        {filterWork.map((work, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="flex flex-col justify-center items-center bg-neutral-800 p-1"
            key={index}
          >
            <img
              src={urlFor(work.imgUrl)}
              alt={work.name}
              className="w-[300px] h-[170px] bg-gray-200 "
            />

            <div className="w-[300px]">
              <h4 className="text-base font-normal text-gray-100">
                {work.tags[0]}
              </h4>
              <h3 className="text-lg font-bold text-gray-100 mt-2">
                {work.title}
              </h3>
              <p className="text-base font-normal text-gray-200 my-2">
                {work.description}
              </p>
              <div className="flex flex-col">
                <a
                  href={work.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-base font-medium gap-2 "
                >
                  Ver Projecto
                  <MdArrowForwardIos size={15} />
                </a>
                <a
                  href={work.codeLink}
                  className="flex items-center text-base font-medium gap-2"
                >
                  Ver Codigo do Projecto
                  <AiFillGithub size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
