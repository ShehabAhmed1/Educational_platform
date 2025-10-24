import React from "react";
import { motion } from "framer-motion";
import { fromTop } from "../../assets/helper/functions";
import { Mainlink1 } from "../_reusable/Mainlink1";

function CourseCard({ course }) {
  return (
    <motion.div
      variants={fromTop({ duration: 0.3, delay: 0 })}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.2, once: true }}
      className="course_card relative w-[300px] rounded-xl overflow-hidden transition-all bg-bg-main shadow-lg shadow-primary/50 "
    >
      <span className="price absolute top-2 right-2 bg-decorate1 text-white px-2 py-1 rounded-full">
        {course.price} جنيه
      </span>
      <img
        src={course.thumbnail}
        alt=""
        className="w-full h-[200px] object-cover rounded-tl-xl rounded-tr-xl"
      />
      <div className="info p-4">
        <h3 className="text-xl text-text-main mb-4 tajawal-bold ">
          {course.title}
        </h3>
        <p className="text-md text-text-muted border-b border-primary pb-2 mb-4">
          {course.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="teacher_info flex items-center gap-2">
            <img
              src={course.teacherImage}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <p className="text-text-muted">{course.teacherName}</p>
          </div>
        </div>

        <Mainlink1
          className="mt-4 w-full border-2 border-primary hover:!bg-transparent block text-center"
          path="/signup"
        >
          اشتري الحصه
        </Mainlink1>
      </div>
    </motion.div>
  );
}

export { CourseCard };
