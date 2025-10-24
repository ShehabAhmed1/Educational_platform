import React, { useState } from "react";
import Askbtn from "../../../components/_studentDashboard/_questions/Askbtn";
import QuestionsContainer from "../../../components/_studentDashboard/_questions/QuestionsContainer";
import QuestionForm from "../../../components/_studentDashboard/_questions/QuestionForm";
import { ToTop } from "../../../assets/helper/component";
function Questions() {
  const [askQuestion, setAskQuestion] = useState(false);
  return (
    <section id="questions" className="questions">
      <ToTop />
      <div className="content">
        <Askbtn setAskQuestion={setAskQuestion} />
        <QuestionsContainer />
        {askQuestion && (
          <QuestionForm
            onClose={() => setAskQuestion(false)}
            onSubmit={() => {}}
          />
        )}
      </div>
    </section>
  );
}

export default Questions;
