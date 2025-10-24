import React from "react";
import { Title } from "../../../components/_reusable/Title";
import { topStudents } from "../../../assets/helper/data";
import { HonorCard } from "../../../components/_homepage/HonorCard";
import { Mainlink1 } from "../../../components/_reusable/Mainlink1";
function HonorWall() {
  return (
    <section id="students" className="HonorWall py-20 bg-bg-main">
      <div className="main_container">
        <div className="content flex flex-col gap-10 items-center justify-center">
          <Title title="حائط الشرف" subtitle="نفتخر بطلابنا الاوائل " />
          <div className="flex flex-wrap items-center gap-10 justify-center">
            {topStudents.map((student) => (
              <HonorCard key={student.id} student={student} />
            ))}
          </div>
          <Mainlink1
            path="/signup"
            className="hover:scale-110 shadow-xl shadow-primary-hover/50"
          >
            سجل دلوقتي و انضم لعيلتنا
          </Mainlink1>
        </div>
      </div>
    </section>
  );
}

export default HonorWall;
