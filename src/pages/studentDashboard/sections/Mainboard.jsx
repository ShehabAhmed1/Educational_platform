import React from "react";
import StatsCard from "../../../components/_studentDashboard/_mainboard/StatsCard";
import { FaUsers, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import LectureCard from "../../../components/_studentDashboard/_mainboard/LectureCard";
import { statisticsData } from "../../../assets/helper/data";
import { lecturesData } from "../../../assets/helper/data";
function Mainboard() {
  return (
    <section id="mainboard">
      <Hello />
      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <div className="tajawal-bold relative text-text-main text-right text-xl pb-2 before:content-[''] before:block before:w-full before:h-1 before:bg-decorate1 before:rounded-full before:absolute before:-bottom-1 ">
          احصائياتك
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 p-2 mt-4 w-full">
          {statisticsData.map((item) => (
            <StatsCard
              key={item.title}
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center  justify-center gap-2 mt-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="tajawal-bold relative text-text-main text-right text-xl pb-2 before:content-[''] before:block before:w-full before:h-1 before:bg-decorate1 before:rounded-full before:absolute before:-bottom-1 ">
            حصصك{" "}
          </h2>
          <p className="tajawal-regular text-sm text-text-main">
            هنا هتظهر الحصص اللي انت اشتريتها
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-start gap-2 p-2 mt-4 w-full">
          {lecturesData.slice(0, 2).map((lecture) => (
            <LectureCard
              key={lecture.id}
              id={lecture.id}
              title={lecture.title}
              teacher={lecture.teacherName}
              image={lecture.thumbnail}
              category={lecture.category}
              time={lecture.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Hello() {
  return (
    <div className="Hello flex flex-col items-center justify-center text-center gap-2 p-5 rounded-lg bg-blue-700">
      <h2 className="tajawal-bold text-white text-2xl">👋 اهلا بيك يا بطل</h2>
      <p className="tajawal-regular text-sm text-white">
        جهز قهوتك واشحن همتك عشان عندنا شغل
      </p>
    </div>
  );
}

export default Mainboard;
