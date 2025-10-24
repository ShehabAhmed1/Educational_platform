import { useState } from "react";
import Overview from "./Overview";
import { Mainbtn1 } from "../../_reusable/Mainbtn1";
import MainContent from "./MainContent";

const tabs = ["نظرة عامة", "المحتوي", "التمارين"];

function LectureAction({ lecture }) {
  // ده هيجي من الباك اند عشان نأكد انه دفع
  const [active, setActive] = useState("نظرة عامة");
  const [userHasPaid, setUserHasPaid] = useState(
    lecture.id === 1 || lecture.id === 2 ? true : false
  );

  const contentMap = {
    "نظرة عامة": (
      <Overview
        userHasPaid={userHasPaid}
        thumbnail={lecture.thumbnail}
        description={lecture.description}
        lessonsCount={lecture.lessonsCount}
        duration={lecture.duration}
        lastUpdated={lecture.lastUpdated}
        items={lecture.items}
      />
    ),
    المحتوي: userHasPaid ? (
      <MainContent />
    ) : (
      <Mainbtn1 className="w-full !bg-error/50 !text-error !border-error">
        عذرًا، يجب شراء الحصة قبل الاطلاع على المحتوى
      </Mainbtn1>
    ),
    التمارين: userHasPaid ? (
      <Mainbtn1>قريبا</Mainbtn1>
    ) : (
      <Mainbtn1 className="w-full !bg-error/50 !text-error !border-error">
        عذرًا، يجب شراء الحصة قبل الاطلاع على التمارين
      </Mainbtn1>
    ),
  };

  return (
    <div className="lectureAction flex flex-col gap-4 flex-1">
      <Actionbar active={active} setActive={setActive} />
      <div className="transition-all duration-300">{contentMap[active]}</div>
    </div>
  );
}

function Actionbar({ active, setActive }) {
  return (
    <div className="actionbar flex justify-center items-center gap-2 p-2 bg-bg-Fourth rounded-full text-text-main tajawal-medium">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`py-1 md:px-5 px-2 rounded-full transition-all ${
            active === tab
              ? "text-text-main bg-bg-main shadow-md"
              : "opacity-70 hover:opacity-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default LectureAction;
