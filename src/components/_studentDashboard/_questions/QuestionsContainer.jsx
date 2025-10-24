import React from "react";
import QuestionsList from "./QuestionsList";
import AnswerQs from "./AnswerQs";

function QuestionsContainer() {
  const [Q, setQ] = React.useState({});
  return (
    <div className="QuestionsContainer flex flex-col gap-4 lg:flex-row py-4">
      <AnswerQs Q={Q} />
      <QuestionsList setQ={setQ} />
    </div>
  );
}

export default QuestionsContainer;
