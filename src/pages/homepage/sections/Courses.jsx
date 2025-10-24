import React from "react";
import { CourseCard } from "../../../components/_homepage/CourseCard";
import { Title } from "../../../components/_reusable/Title";
import { Mainbtn1 } from "../../../components/_reusable/Mainbtn1";
import { lecturesData } from "../../../assets/helper/data";

function Courses() {
  const [courseslimet, setCourseslimet] = React.useState(4);
  function handlecourseslimet() {
    if (courseslimet === 4) {
      setCourseslimet(lecturesData.length);
    } else {
      setCourseslimet(4);
    }
  }

  return (
    <section id="courses" className="Courses bg-bg-secondary py-20">
      <div className="main_container">
        <div className="content">
          <Title title="الحصص المقترحه" subtitle="اختار حصتك وابد مذاكرتك" />
          <div className="flex flex-wrap items-center gap-10 justify-center">
            {lecturesData.slice(0, courseslimet).map((lecture) => (
              <CourseCard key={lecture.id} course={lecture} />
            ))}
          </div>
          <Mainbtn1
            className="mt-10 block mx-auto"
            onClick={handlecourseslimet}
          >
            {courseslimet === 4 ? "عرض المزيد" : "عرض أقل"}
          </Mainbtn1>
        </div>
      </div>
    </section>
  );
}

export default Courses;
