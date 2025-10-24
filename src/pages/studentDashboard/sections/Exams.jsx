import React from "react";

function Exams() {
  return (
    <section>
      <div className="content min-h-screen">
        <EmptyExams />
      </div>
    </section>
  );
}

function EmptyExams() {
  return (
    <div className="flex items-center justify-center h-[100px] w-[250px] md:w-1/2 border-2 shadow-lg shadow-success/50 border-success rounded-lg p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p className="tajawal-regular text-text-main text-sm text-center">
        متقلقش مفيش امتحانات النهاردة 😂✨
      </p>
    </div>
  );
}
export default Exams;
