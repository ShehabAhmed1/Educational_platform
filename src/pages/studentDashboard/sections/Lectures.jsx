import { useEffect, useState } from "react";
import LectureCard from "../../../components/_studentDashboard/_mainboard/LectureCard";
import { lecturesData } from "../../../assets/helper/data";
import { ToTop } from "../../../assets/helper/component";

function Lectures() {
  //states
  const [filter, setFilter] = useState({
    level: "all",
    teacher: "all",
  });
  const [filteredData, setFilteredData] = useState(lecturesData);

  //filter
  useEffect(() => {
    const filtered = lecturesData.filter((lecture) => {
      return (
        (filter.level === "all" && filter.teacher === "all") ||
        (filter.level === lecture.level &&
          filter.teacher === lecture.teacherName) ||
        (filter.teacher === "all" && filter.level === lecture.level) ||
        (filter.level === "all" && filter.teacher === lecture.teacherName)
      );
    });
    setFilteredData(filtered);
  }, [filter]);

  return (
    <section>
      <ToTop />
      <div className="content">
        <div className="flex flex-col items-center  justify-center gap-2 mt-4">
          <h2 className="tajawal-bold relative text-text-main text-right text-xl pb-2 before:content-[''] before:block before:w-full before:h-1 before:bg-decorate1 before:rounded-full before:absolute before:-bottom-1 ">
            مخزن الحصص
          </h2>
          <Filter setFilter={setFilter} filter={filter} />
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-start gap-2 p-2 mt-4 w-full">
            {filteredData.map((lecture) => (
              <LectureCard
                key={lecture.id}
                id={lecture.id}
                title={lecture.title}
                teacher={lecture.teacherName}
                image={lecture.thumbnail}
                category={lecture.category}
                time={lecture.time}
                level={lecture.level}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

//filter component
function Filter({ setFilter, filter }) {
  return (
    <div className="filter flex items-center gap-2 bg-bg-secondary p-2 rounded-lg shadow-lg border border-primary-hover w-full md:w-[50%]">
      <select
        name=""
        id=""
        className="filter-select text-text-main bg-bg-secondary  tajawal-bold w-[50%] "
        onChange={(e) => setFilter({ ...filter, level: e.target.value })}
      >
        <option value="all">المرحلة</option>
        <option value="الصف الاول الثانوي">الصف الاول الثانوي</option>
        <option value="الصف الثاني الثانوي">الصف الثاني الثانوي</option>
        <option value="الصف الثالث الثانوي">الصف الثالث الثانوي</option>
      </select>
      <select
        name=""
        id=""
        className="filter-select text-text-main bg-bg-secondary  tajawal-bold w-[50%] "
        onChange={(e) => setFilter({ ...filter, teacher: e.target.value })}
      >
        <option value="all">المدرس</option>
        <option value="محمد صلاح">محمد صلاح</option>
        <option value="محمد ايمن">محمد ايمن</option>
        <option value="محمد محمد">محمد محمد</option>
        <option value="مني فيصل">مني فيصل</option>
      </select>
    </div>
  );
}

export default Lectures;
