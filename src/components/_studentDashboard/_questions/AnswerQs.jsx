import React from "react";

function AnswerQs({ Q }) {
  return (
    <div
      id="answerQs"
      className="w-full lg:w-2/3 bg-bg-secondary rounded-md flex flex-col gap-4"
    >
      <AnswerQsHeader
        title={Q.title}
        chapter={Q.chapter}
        teacherName={Q.teacherName}
      />
      <AnswerQsBody question={Q.question} answer={Q.answer} />
    </div>
  );
}

function AnswerQsHeader({ title, chapter, teacherName }) {
  return (
    <div
      id="answerQsHeader"
      className="flex flex-col gap-2 border-b border-border p-4"
    >
      <h2 className="tajawal-bold text-text-main text-2xl py-4 text-center">
        {title}
      </h2>
      <div className="answerQsHeaderBody">
        <p className="tajawal-regular text-text-muted text-sm py-2 flex gap-2">
          <span>{chapter} .</span> <span>مستر {teacherName}</span>
        </p>
      </div>
    </div>
  );
}
function AnswerQsBody({ question, answer }) {
  return (
    <div id="answerQsBody">
      <div className="questionBody">
        <span className="tajawal-bold text-white bg-primary-hover px-2 py-1 w-fit flex items-center justify-center rounded-xl">
          السؤال
        </span>
        <p className="tajwal-regular text-white py-2 bg-primary-hover px-2 rounded-xl my-2 mx-4">
          {question}
        </p>
      </div>
      <div className="answerBody">
        <span className="tajawal-bold text-white bg-success px-2 py-1 w-fit flex items-center justify-center rounded-xl ">
          الجواب
        </span>
        <p className="tajwal-regular text-white py-2 bg-success px-2 rounded-xl my-2 mx-4">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default AnswerQs;
