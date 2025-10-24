import React from "react";
import { questions } from "../../../assets/helper/data";

function QuestionsList({ setQ }) {
  const [search, setSearch] = React.useState("");
  return (
    <div className="questionsList w-full lg:w-1/3 bg-bg-secondary p-2 rounded-md flex flex-col gap-4 overflow-hidden h-[calc(100vh-12rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-text-muted scrollbar-track-bg-secondary">
      <QuestionListHeader setSearch={setSearch} />
      {questions
        .filter((question) =>
          question.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((question) => (
          <QuestionUnit key={question.id} question={question} setQ={setQ} />
        ))}
    </div>
  );
}
function QuestionListHeader({ setSearch }) {
  return (
    <div className="questionListHeader">
      <h2 className="tajawal-bold text-text-main text-2xl py-4 text-center">
        قسم الاسئلة{" "}
      </h2>
      <input
        type="search"
        placeholder="ابحث بعنوان سؤالك"
        className="w-full tajawal-regular text-text-muted border border-text-muted rounded-md p-2 focus:outline-none focus:border-text-main"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

function QuestionUnit({ question, setQ }) {
  return (
    <div
      onClick={() => setQ(question)}
      className="questionUnit p-2 rounded-md border border-primary shadow-lg cursor-pointer hover:border-success-hover hover:scale-102 transition-all"
    >
      <div className="questionheader flex justify-between items-center">
        <h2 className="tajawal-bold text-text-main text-xl overflow-hidden whitespace-nowrap text-ellipsis ">
          {question.title}
        </h2>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="tajawal-regular text-xs bg-success-hover px-1.5 py-1 text-success rounded-md text-center">
            تم الاجابة
          </p>
          <p className="tajawal-regular text-xs bg-primary px-1.5 py-1 text-white/80 rounded-md text-center">
            {question.studentName}
          </p>
        </div>
      </div>
      <div className="questionbody">
        <p className="tajawal-regular text-text-muted text-sm py-2">
          <span>{question.chapter} .</span>{" "}
          <span>مستر {question.teacherName}</span>
        </p>
        <p className="tajawal-regular text-text-muted text-sm">
          {question.question}
        </p>
      </div>
      <div className="questionfooter flex justify-between items-center py-2">
        <p className="tajawal-regular text-text-muted text-sm">
          {question.date}
        </p>
        <p className="tajawal-regular text-text-muted text-sm">
          {question.time}
        </p>
      </div>
    </div>
  );
}
export default QuestionsList;
