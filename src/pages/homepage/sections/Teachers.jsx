import React from "react";
import { Title } from "../../../components/_reusable/Title";
import { TeacherCard } from "../../../components/_homepage/TeacherCard";
import { teachersData } from "../../../assets/helper/data";
import { Mainbtn1 } from "../../../components/_reusable/Mainbtn1";

function Teachers() {
  //محتاج  من الباك اند معلومات المدرس زي صورة واسمه ووصفه
  const [teacherslimet, setTeacherslimet] = React.useState(4);
  function handleteacherslimet() {
    if (teacherslimet === 4) {
      setTeacherslimet(teachersData.length);
    } else {
      setTeacherslimet(4);
    }
  }

  return (
    <section id="teachers" className="Teachers bg-bg-main py-20">
      <div className="main_container">
        <div className="content">
          <Title title="مدرسونا" subtitle="اختار المدرس اللي  تحبه" />
          <div className="flex flex-wrap items-center gap-10 justify-center">
            {teachersData.slice(0, teacherslimet).map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
          <Mainbtn1
            className="mt-10 block mx-auto "
            onClick={handleteacherslimet}
          >
            {teacherslimet === 4 ? "عرض المزيد" : "عرض أقل"}
          </Mainbtn1>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
