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
      className="px-8 flex flex-col justify-center min-h-screen mx-auto"
    >
      <h2 className="md:text-[2.5rem] text-[2rem] leading-tight font-bold mb-8">
        Habilidades
      </h2>

      <div className="w-full flex">
        <motion.div className="flex flex-1 flex-wrap justify-center items-center">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.3 }}
              whileHover={{ translateY: -5 }}
              className="flex m-2"
              key={skill.name}
            >
              <div
                style={{ backgroundColor: skill.bgColor }}
                className="bg-gray-100 w-[192px] h-[200px] rounded-2xl flex flex-col justify-center items-center"
              >
                <img
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                  className="w-[70%] h-[70%] object-cover rounded-full p-5"
                />
                <p className="text-base text-gray-400 font-bold uppercase">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
