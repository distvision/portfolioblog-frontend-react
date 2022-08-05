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
      className="px-8 flex flex-col justify-center min-h-screen mx-auto"
    >
      <div className="">
        <h2 className="text-[2.5rem] leading-tight font-bold mb-8 mt-8">
          Projetos
        </h2>
        <div className="flex w-full justify-between">
          {["All", "UI/UX", "Web App", "Mobile App"].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`border-2 p-2 rounded-3xl`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        animete={animeteCard}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, delayChildren: 0.8 }}
        className=""
      >
        {filterWork.map((work, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ translateY: -5 }}
            transition={{ duration: 0.3, type: "tween" }}
            className=""
            key={index}
          >
            <img src={urlFor(work.imgUrl)} alt={work.name} className="" />

            <div className="">
              <h4 className="">{work.tags[0]}</h4>
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
