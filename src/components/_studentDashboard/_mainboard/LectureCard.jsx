import React from "react";
import { FiBookOpen, FiClock } from "react-icons/fi";
import { Mainbtn1 } from "../../_reusable/Mainbtn1";
import { Mainlink1 } from "../../_reusable/Mainlink1";
function LectureCard({ id, title, teacher, image, category, time, level }) {
  return (
    <div
      id={id}
      data-teacher={teacher}
      data-level={level}
      className="group overflow-hidden rounded-xl bg-bg-secondary border border-border transition-all shadow-lg w-full md:w-[calc(50%-1rem)] xl:w-[calc(33%-1rem)] hover:border-primary-hover hover:shadow-lg "
    >
      {/* Course Image */}
      <div className="relative h-72 overflow-hidden ">
        <img
          src={image}
          alt={title}
          className=" h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <span
          className={`absolute top-3 right-3  text-xs font-medium px-2 py-1 rounded-md shadow-sm ${
            category === "مجانا"
              ? "bg-green-500 text-white"
              : "bg-white/90 text-gray-800"
          }`}
        >
          {category}
        </span>
      </div>

      {/* Header */}
      <div className="p-4 pb-2">
        <h3 className="text-lg text-text-main tajawal-bold mb-2">{title}</h3>
        <p className="text-sm text-text-main tajawal-bold">
          المدرس : {teacher}
        </p>
      </div>

      {/* Content */}
      <div className="px-4 pb-3 space-y-3">
        {/* time of Lesson */}
        <div className="flex items-center gap-2 text-sm text-text-main tajawal-bold">
          <FiClock className="h-4 w-4" />
          <span className="truncate">{time} ساعات</span>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 pt-2">
        <Mainlink1
          path={`/lectureDetails/${id}`}
          className="w-full flex items-center  justify-center gap-2 bg-primary-hover border border-primary-hover hover:bg-transparent hover:text-text-main tajawal-bold"
        >
          <FiBookOpen className="h-4 w-4" />
          تفاصيل الحصه{" "}
        </Mainlink1>
      </div>
    </div>
  );
}

export default LectureCard;
