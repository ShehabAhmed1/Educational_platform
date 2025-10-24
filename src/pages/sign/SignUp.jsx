import React, { useState } from "react";
import signupImage from "../../assets/imgs/signup_bg2.png";
import FormSignup from "../../components/_sign/FormSignup";
function Signup() {
  //states
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(1);
  const [formData, setFormData] = useState({
    studentName: "",
    studentPhone: "",
    studentstage: "",
    studentsection: "",
    parentPhone: "",
    parentPhone2: "",
    parentAddress: "",
    EmailPhone: "",
    password: "",
    confirmPassword: "",
  });

  //go to next step in form
  const handleNext = (event) => {
    event.preventDefault();
    const newStep = step + 1 > 3 ? 3 : step + 1;
    setStep(newStep);
    const newProgress =
      parseInt(progress + 100 / 3) > 100 ? 100 : parseInt(progress + 100 / 3);
    setProgress(newProgress);
  };

  //go to previous step in form
  const handleBack = (event) => {
    event.preventDefault();
    const newStep = step - 1 < 1 ? 1 : step - 1;
    setStep(newStep);
    const newProgress =
      parseInt(progress - 100 / 3) < 1 ? 1 : parseInt(progress - 100 / 3);
    setProgress(newProgress);
  };
  return (
    <section id="Signup" className="bg-bg-main ">
      <div className="content relative min-h-screen  flex lg:flex-row flex-col-reverse items-center justify-center gap-8 lg:gap-4 p-4">
        <FormSignup
          progress={progress}
          step={step}
          handleNext={handleNext}
          handleBack={handleBack}
          formData={formData}
          setFormData={setFormData}
        />
        <figure className="h-full  w-full lg:w-[50%] ">
          <img
            src={signupImage}
            alt="signupImage"
            className="object-cover rounded-lg h-full w-full"
          />
        </figure>
      </div>
    </section>
  );
}

export default Signup;
