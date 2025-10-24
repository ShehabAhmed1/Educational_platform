import React from "react";
import { Title } from "../../../components/_reusable/Title";
import { topStudents } from "../../../assets/helper/data";
import { HonorCard } from "../../../components/_homepage/HonorCard";
function HonorWall() {
  return (
    <section id="students" className="HonorWall py-20 bg-bg-main">
      <div className="main_container">
        <div className="content">
          <Title title="حائط الشرف" subtitle="نفتخر بطلابنا الاوائل " />
          <div className="flex flex-wrap items-center gap-10 justify-center">
            {topStudents.map((student) => (
              <HonorCard key={student.id} student={student} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HonorWall;
