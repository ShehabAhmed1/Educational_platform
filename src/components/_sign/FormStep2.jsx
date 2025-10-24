import React from "react";
import { Mainbtn1 } from "../_reusable/Mainbtn1";
import { useState } from "react";
import { isPhoneNumber } from "../../assets/helper/functions";
import { Error } from "../../assets/helper/component.jsx";
function FormStep2({ handleNext, handleBack, formData, setFormData }) {
  //states
  const [error, setError] = useState("");

  //function to handle errors
  const handleErrorsNext = (event) => {
    event.preventDefault();
    if (
      !isPhoneNumber(formData.parentPhone) ||
      !isPhoneNumber(formData.parentPhone2)
    ) {
      setError("  الرجاء ادخال رقم الهاتف بشكل صحيح");
      return;
    } else {
      setError("");
      handleNext(event);
    }
  };
  return (
    <div className="w-full shrink-0 p-4">
      <div className="step2_title">
        <h2 className="tajawal-bold text-text-main text-center mt-5 mb-2 ">
          انضم لعيلتنا
        </h2>
        <p className="tajawal-regular text-text-muted text-center  mb-5 ">
          المعلومات الخاصه بالاهل
        </p>
      </div>
      {error && <Error error={error} />}
      <form action="" onSubmit={handleErrorsNext}>
        <input
          type="tel"
          placeholder="رقم هاتف الاب"
          required
          value={formData.parentPhone}
          onChange={(e) =>
            setFormData({ ...formData, parentPhone: e.target.value })
          }
          className="w-full p-2 border-b-1 border-border mb-3 text-text-main tajawal-regular focus:outline-0 focus:border-primary text-right "
        />
        <input
          type="tel"
          placeholder="رقم هاتف الام"
          required
          value={formData.parentPhone2}
          onChange={(e) =>
            setFormData({ ...formData, parentPhone2: e.target.value })
          }
          className="w-full p-2 border-b-1 border-border mb-3 text-text-main tajawal-regular focus:outline-0 focus:border-primary text-right "
        />
        <input
          type="text"
          placeholder="عنوان البيت (لتوصيل الكتب و الملازم)"
          required
          value={formData.parentAddress}
          onChange={(e) =>
            setFormData({ ...formData, parentAddress: e.target.value })
          }
          className="w-full p-2 border-b-1 border-border mb-3 text-text-main tajawal-regular focus:outline-0 focus:border-primary text-right "
        />
        <div className="actions flex items-center justify-center gap-3">
          <Mainbtn1
            type="submit"
            className="w-full my-3 hover:bg-transparent border-2 border-primary"
          >
            التالي
          </Mainbtn1>
          <Mainbtn1
            onClick={handleBack}
            className="my-3 w-fit !bg-icon1 hover:scale-105 hover:!bg-icon1/90"
          >
            السابق
          </Mainbtn1>
        </div>
      </form>
    </div>
  );
}

export default FormStep2;
