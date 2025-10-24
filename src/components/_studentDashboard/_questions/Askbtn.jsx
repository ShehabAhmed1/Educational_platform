import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Mainbtn1 } from "../../_reusable/Mainbtn1";
function Askbtn({ setAskQuestion }) {
  const onAskQuestion = () => {
    setAskQuestion(true);
  };
  return (
    <Mainbtn1
      onClick={onAskQuestion}
      className="gap-2 flex items-center border-2 border-primary hover:bg-transparent hover:text-text-main"
    >
      <FaPlus className="h-5 w-5" />
      طلب سؤال
    </Mainbtn1>
  );
}

export default Askbtn;
