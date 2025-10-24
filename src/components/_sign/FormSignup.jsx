import React from "react";
import ProgressForm from "./ProgressForm";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";

function Form({
  progress,
  step,
  handleNext,
  handleBack,
  formData,
  setFormData,
}) {
  return (
    <div className="flex items-center justify-center w-full lg:w-[50%]">
      <div className="form w-full lg:w-[500px]  bg-bg-secondary p-4 rounded-lg">
        <img src="./logo.png" alt="logo" className="w-20 h-20 m-auto" />
        <h2 className="tajawal-bold text-text-main text-center mt-5 mb-2 ">
          انضم لعيلتنا
        </h2>
        <ProgressForm progress={progress} step={step} totalSteps={3} />
        <div className="flex-container overflow-hidden">
          <div
            className="steps flex flex-row-reverse transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
          >
            <FormStep1
              handleNext={handleNext}
              formData={formData}
              setFormData={setFormData}
            />
            <FormStep2
              handleNext={handleNext}
              handleBack={handleBack}
              formData={formData}
              setFormData={setFormData}
            />
            <FormStep3
              handleNext={handleNext}
              handleBack={handleBack}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
