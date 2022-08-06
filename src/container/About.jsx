import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../client";

export const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div
      id="about"
      className="px-8 flex flex-col justify-center min-h-screen mx-auto"
    >
      <h2 className="md:text-[2.5rem] text-[2rem] leading-tight font-bold mb-8">
        Serviços
      </h2>
      <motion.div className="flex justify-center">
        <motion.div className="flex justify-center md:flex-row flex-col">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "tween" }}
              className="w-[419px] flex justify-start items-start flex-col mx-2"
              key={index}
            >
              <img
                src={urlFor(about.imgUrl)}
                alt={about.title}
                className="w-full h-[303px] object-cover rounded-2xl"
              />
              <div className="py-5 flex flex-col w-full justify-center items-center text-center">
                <h3 className="text-2xl font-bold">{about.title}</h3>
                <p className="text-lg leading-5 font-normal mt-2">
                  {about.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
