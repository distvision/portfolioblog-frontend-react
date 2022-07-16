import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
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
      className="pt-24 px-24 min-h-screen w-full max-w-[1200px] mx-auto"
    >
      <h2 className="text-5xl leading-tight font-bold text-center pb-8">
        Serviços
      </h2>
      <div className=" flex flex-wrap justify-center items-start mx-auto">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            className="w-[300px] flex justify-start items-start flex-col m-8"
            key={about.title + index}
          >
            <img
              src={urlFor(about.imgUrl)}
              alt={about.title}
              className="w-full h-[170px] object-cover"
            />
            <h3 className="text-2xl font-bold mt-5">{about.title}</h3>
            <p className="text-lg font-normal mt-2">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
