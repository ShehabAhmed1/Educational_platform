import { FaBookOpen, FaClock, FaCalendarAlt, FaCheck } from "react-icons/fa";
import ImageWithFallback from "../../../assets/imgs/course1.jpg";
import { Mainbtn1 } from "../../_reusable/Mainbtn1";
import { useState } from "react";
import BuyLecturePopup from "./BuyLecturePopup";
function Overview({
  userHasPaid,
  thumbnail,
  description,
  lessonsCount,
  duration,
  lastUpdated,
  items,
}) {
  const [BuyLectureOpen, setBuyLectureOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 lg:px-40 ">
      <LectureView
        coverImage={thumbnail}
        description={description}
        lessonsCount={lessonsCount}
        duration={duration}
        lastUpdated={lastUpdated}
      />
      <LectureLearnList items={items} />
      {!userHasPaid && (
        <Mainbtn1
          onClick={() => {
            setBuyLectureOpen(true);
          }}
          className="border border-primary"
        >
          {" "}
          اشتري الحصه
        </Mainbtn1>
      )}
      {BuyLectureOpen && (
        <BuyLecturePopup
          phone="01272073227"
          setBuyLectureOpen={setBuyLectureOpen}
        />
      )}
    </div>
  );
}

//مكون عرض المحاضرة
function LectureView({
  coverImage,
  description,
  lessonsCount,
  duration,
  lastUpdated,
}) {
  return (
    <div className="bg-bg-secondary rounded-lg overflow-hidden shadow-sm border border-border">
      <div className="aspect-video w-full bg-decorate2 overflow-hidden">
        <img
          src={coverImage}
          alt="Course cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <p className="text-text-main mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-1.5 text-sm px-2 py-1 rounded-md border text-text-muted ">
            <FaBookOpen className="w-3.5 h-3.5" />
            <span>{lessonsCount} محاضرات</span>
          </div>

          <div className="flex items-center gap-1.5 text-sm px-2 py-1 rounded-md border text-text-muted ">
            <FaClock className="w-3.5 h-3.5" />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-1.5 text-sm px-2 py-1 rounded-md border text-text-muted ">
            <FaCalendarAlt className="w-3.5 h-3.5" />
            <span>آخر تحديث: {lastUpdated}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

//مكون ما الذي ستتعلم في هذا الكورس؟
function LectureLearnList({ items }) {
  return (
    <div className="bg-bg-secondary rounded-lg shadow-sm border border-border p-6">
      <h3 className="mb-4 text-text-main font-semibold">
        ما الذي ستتعلم في هذا الكورس؟
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
              <FaCheck className="text-success text-sm" />
            </div>
            <span className="text-text-main">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Overview;
