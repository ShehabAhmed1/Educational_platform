import React from "react";
import { Mainbtn1 } from "../_reusable/Mainbtn1";
import { useState } from "react";
import { MdError } from "react-icons/md";
import { motion } from "framer-motion";
import {
  zoomout,
  isHumanName,
  isPhoneNumber,
} from "../../assets/helper/functions";
import { Error } from "../../assets/helper/component";

function FormStep1({ handleNext, formData, setFormData }) {
  //states
  const [error, setError] = useState("");

  //function to handle errors
  const handleErrorsNext = (event) => {
    event.preventDefault();
    if (!isHumanName(formData.studentName)) {
      setError("  الرجاء ادخال اسمك بشكل صحيح");
      return;
    } else if (!isPhoneNumber(formData.studentPhone)) {
      setError("  الرجاء ادخال رقم الهاتف بشكل صحيح");
      return;
    } else {
      setError("");
      handleNext(event);
    }
  };
  return (
    <div className="w-full shrink-0 p-4 ">
      <div className="step1_title">
        <p className="tajawal-regular text-text-muted text-center  mb-5 ">
          المعلومات الشخصية
        </p>
      </div>
      {error && <Error error={error} />}
      <form action="" onSubmit={handleErrorsNext}>
        <input
          type="text"
          placeholder="اسمك ثلاثي"
          value={formData.studentName}
          required
          onChange={(e) =>
            setFormData({ ...formData, studentName: e.target.value })
          }
          className={`w-full p-2 border-b-1 border-border mb-3 text-text-main tajawal-regular focus:outline-0 focus:border-primary `}
        />
        <input
          type="tel"
          placeholder="رقم الهاتف"
          value={formData.studentPhone}
          required
          onChange={(e) =>
            setFormData({ ...formData, studentPhone: e.target.value })
          }
          className="w-full p-2 border-b-1 border-border mb-3 text-text-main tajawal-regular focus:outline-0 focus:border-primary text-right "
        />
        <select
          value={formData.studentstage}
          required
          onChange={(e) =>
            setFormData({ ...formData, studentstage: e.target.value })
          }
          className="w-full p-2 border border-border rounded-lg mb-3 text-text-main tajawal-regular bg-bg-secondary  "
        >
          <option value="">اختر المرحلة الدراسية</option>
          <option value="الصف الاول الثانوي">الصف الاول الثانوي</option>
          <option value="الصف الثاني الثانوي">الصف الثاني الثانوي</option>
          <option value="الصف الثالث الثانوي">الصف الثالث الثانوي</option>
        </select>
        <select
          value={formData.studentsection}
          required
          onChange={(e) =>
            setFormData({ ...formData, studentsection: e.target.value })
          }
          className="w-full p-2 border border-border rounded-lg mb-3 text-text-main tajawal-regular bg-bg-secondary  "
        >
          <option value="">اختر الشعبه</option>
          <option value="عام">عام</option>
          <option value="علمي علوم">علمي علوم</option>
          <option value="علمي رياضه">علمي رياضه</option>
          <option value="ادبي">ادبي</option>
        </select>

        <Mainbtn1
          type="submit"
          className="w-full my-3 hover:bg-transparent border-2 border-primary"
        >
          التالي
        </Mainbtn1>
      </form>
    </div>
  );
}

export default FormStep1;
