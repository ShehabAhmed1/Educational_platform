import React from "react";
import { motion } from "framer-motion";
import { fromTop } from "../../assets/helper/functions";

function TeacherCard({ teacher }) {
  return (
    <motion.div
      variants={fromTop({ duration: 0.3, delay: 0 })}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.2, once: true }}
      className="flex flex-col items-center w-[300px] justify-center border border-primary-hover shadow-lg shadow-primary-hover/30 p-4 rounded-tl-2xl rounded-br-2xl  gap-2 cursor-pointer hover:scale-105 transition-all "
    >
      <img
        src={teacher.image}
        alt=""
        className="w-[200px] h-[200px] rounded-tl-2xl rounded-br-2xl object-cover"
      />
      <h3 className="text-2xl tajawal-bold text-text-main ">{teacher.name}</h3>
      <p className="text-lg tajawal-regular text-text-muted">
        {teacher.description}
      </p>
    </motion.div>
  );
}

export { TeacherCard };
