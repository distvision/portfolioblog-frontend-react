import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";

import { MdArrowForwardIos } from "react-icons/md";
import { client, urlFor } from "../client";

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

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div
      id="work"
      className="px-8 flex flex-col justify-center min-h-screen mx-auto bg-gray-500 pb-8"
    >
      <div className="md:flex md:items-center my-8">
        <h2 className="md:text-[2.5rem] text-[2rem] leading-tight font-bold ">
          Projetos
        </h2>
        <div className="flex w-full md:justify-end justify-center space-x-5 md:mt-0 mt-8">
          {["All", "UI/UX", "Web App", "Mobile App"].map((item, index) => (
            <button
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`border-2 py-2 px-4 md:px-5 rounded-3xl`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        animete={animeteCard}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, delayChildren: 0.8 }}
        className="flex justify-center md:flex-row flex-col md:gap-8 gap-5"
      >
        {filterWork.map((work, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ translateY: -5 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="w-[419px] flex justify-start items-start flex-col mt-5 bg-gray-400  rounded-2xl shadow-3xl"
            key={index}
          >
            <img
              src={urlFor(work.imgUrl)}
              alt={work.name}
              className="w-full h-[303px] object-cover rounded-2xl"
            />

            <div className="w-full mt-5 text-gray-100 px-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{work.title}</h3>
                <h4 className="text-xs font-bold p-1 border-2 border-gray-100 rounded-md">
                  {work.tags[0]}
                </h4>
              </div>
              <p className="text-base font-medium text-gray-100 my-2">
                {work.description}
              </p>
              <div className="flex justify-between pb-2">
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
