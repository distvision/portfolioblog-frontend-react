import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { client, urlFor } from "../client";

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
    <div
      id="skills"
      className="flex w-full max-w-[1200px] min-h-screen flex-col justify-center items-center py-24 px-24 mx-auto"
    >
      <h2 className="capitalize text-5xl leading-tight font-bold text-center pb-8">
        Habilidades
      </h2>

      <div className="w-full flex flex-row ">
        <motion.div className="flex flex-1 flex-wrap justify-center items-center">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.3 }}
              whileHover={{ translateY: -5 }}
              className="flex flex-col text-center m-4"
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
      </div>
    </div>
  );
};
