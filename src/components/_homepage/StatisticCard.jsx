import React from "react";
import { motion } from "framer-motion";
import { zoomout } from "../../assets/helper/functions.js";
import { Counter } from "../../assets/helper/component.jsx";

function StatisticCard({ statistic }) {
  return (
    <motion.div
      variants={zoomout({ duration: 0.3, delay: 0.3 })}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.1, once: true }}
      className={`flex flex-col items-center justify-center relative p-2 rounded-2xl  `}
    >
      <span className="w-12 h-12 flex items-center justify-center text-2xl text-white bg-text-main/10  rounded-full ">
        <statistic.icon />
      </span>
      <Counter target={statistic.value} duration={1500} />
      <h3 className={`text-lg md:text-xl font-semibold text-white`}>
        {statistic.title}
      </h3>
    </motion.div>
  );
}

export { StatisticCard };
