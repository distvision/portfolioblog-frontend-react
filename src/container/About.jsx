import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";

export const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="text-5xl leading-tight font-bold text-center mb-16">
        Transformar ideias em produtos <br /> é minha Especialidade
      </h2>
      <div className="w-full max-w-[1200] flex flex-wrap justify-center items-start mx-auto mb-24">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="w-[300px] flex justify-start items-start flex-col m-8"
            key={about.title + index}
          >
            <img
              src={urlFor(about.imgUrl)}
              alt={about.title}
              className="w-full h-[170px] rounded-2xl object-cover"
            />
            <h3 className="text-2xl font-bold mt-5">{about.title}</h3>
            <p className="text-lg font-normal mt-2">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};