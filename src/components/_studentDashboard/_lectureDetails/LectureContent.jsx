import React from "react";
import { FiClock } from "react-icons/fi";

function LectureContent() {
  return (
    <div className="border-1 border-border  bg-bg-secondary rounded-lg overflow-hidden w-full lg:w-[380px] h-fit">
      <header className="bg-bg-Fourth p-4">
        <h2 className="text-text-main text-xl text-center"> محتوي الحصه</h2>
      </header>
      <div className="content p-4 flex flex-col gap-4">
        <div className="unit bg-icon3 rounded-lg flex justify-between items-center text-text-main p-4 hover:bg-decorate2 ">
          <p>شرح الدعامة</p>
          <div className="flex justify-between items-center gap-2">
            <span>15:30</span>
            <FiClock />
          </div>
        </div>
        <div className="unit bg-bg-main rounded-lg flex justify-between items-center text-text-main p-4 hover:bg-icon3 ">
          <p>شرح الدعامة</p>
          <div className="flex justify-between items-center gap-2">
            <span>15:30</span>
            <FiClock />
          </div>
        </div>
        <div className="unit bg-bg-main rounded-lg flex justify-between items-center text-text-main p-4 hover:bg-decorate2 ">
          <p>شرح الدعامة</p>
          <div className="flex justify-between items-center gap-2">
            <span>15:30</span>
            <FiClock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LectureContent;
