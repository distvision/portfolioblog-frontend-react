import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap } from "../wrapper";
import { urlFor, client } from "../client";
import { MdArrowForwardIos } from "react-icons/md";

export const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="flex w-full max-w-[1200px] flex-col justify-center items-center min-h-screen px-24 mx-auto border-b border-gray-100">
      <h2 className="capitalize text-5xl leading-tight font-bold text-center pb-8">
        Skills & expiriences
      </h2>

      <div className="w-full flex flex-row ">
        <motion.div className="flex flex-1 flex-wrap justify-center items-center">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex flex-col text-center m-4 transition-all duration-[0.3s] ease-in-out"
              key={skill.name}
            >
              <div
                style={{ backgroundColor: skill.bgColor }}
                className="w-24 h-24 rounded-full border-2 border-gray-100 flex items-center justify-center hover:border-accents-100 duration-[0.3s] ease-in-out"
              >
                <img
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                  className="w-[80%] h-[80%] object-cover"
                />
              </div>
              <p className="text-base font-medium uppercase">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col justify-start items-start flex-1">
          {experiences.map((experience) => (
            <motion.div
              className="flex flex-row justify-start items-start my-4 mx-0 w-full"
              key={experience.year}
            >
              <div className="mr-12">
                <p className="font-bold text-accents-100">{experience.year}</p>
              </div>
              <motion.div className="flex-1">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className=" flex flex-col justify-start items-start mb-4 cursor-pointer"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="font-bold">{work.name}</h4>
                      <p className="font-normal">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="max-w-[300px] bg-gray-100 p-4 text-gray-400 text-center leading-6 opacity-100"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
