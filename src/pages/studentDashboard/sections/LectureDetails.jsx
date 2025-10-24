import React from "react";
import Pageheader from "../../../components/_studentDashboard/_lectureDetails/Pageheader";
import LectureAction from "../../../components/_studentDashboard/_lectureDetails/LectureAction";
import { lecturesData } from "../../../assets/helper/data";
import { useParams } from "react-router-dom";
import { ToTop } from "../../../assets/helper/component";
function LectureDetails() {
  const { id } = useParams();
  const lecture = lecturesData.find((lecture) => lecture.id === Number(id));

  return (
    <section id="lectureDetails" className="bg-bg-main min-h-screen">
      <ToTop />
      <Pageheader title={lecture.title} />
      <div className="main_container">
        <div className="content py-8 flex flex-col lg:flex-row justify-center gap-16">
          <LectureAction lecture={lecture} />
          {/* <LectureContent /> */}
        </div>
      </div>
    </section>
  );
}

export default LectureDetails;
