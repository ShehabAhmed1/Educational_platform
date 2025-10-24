import React, { useState } from "react";
import { Mainbtn1 } from "../_reusable/Mainbtn1";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { zoomout } from "../../assets/helper/functions";
import { Mainlink1 } from "../_reusable/Mainlink1";
import { isPhoneNumber } from "../../assets/helper/functions";
import { Error } from "../../assets/helper/component.jsx";
function FormStep3({ handleNext, handleBack, formData, setFormData }) {
  //هنا المفروض ابعت الداتا للباك اند
  //ولو استلم تمام ارجع للمستخدم رسالة التاكيد

  //states
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  //function to handle errors
  const handleErrorsNext = (event) => {
    event.preventDefault();
    if (!isPhoneNumber(formData.EmailPhone)) {
      setError("الرجاء ادخال رقم الهاتف بشكل صحيح");
      return;
    } else if (formData.password !== formData.confirmPassword) {
      setError("كلمه السر غير مطابقه");
      return;
    } else {
      setError("");
      handleNext(event);
      setDone(true);
    }
  };

  return (
    <div className="step3 relative w-full shrink-0 p-4">
      <div className="step3_title">
        <h2 className="tajawal-bold text-text-main text-center mt-5 mb-2 ">
          انضم لعيلتنا
        </h2>
        <p className="tajawal-regular text-text-muted text-center  mb-5 ">
          المرحلة الاخيرة
        </p>
      </div>
      {error && <Error error={error} />}
      {done && <Done />}
      <form action="" onSubmit={handleErrorsNext}>
        <input
          type="tel"
          placeholder="رقم الهاتف بديل الايميل "
          value={formData.EmailPhone}
          onChange={(e) =>
            setFormData({ ...formData, EmailPhone: e.target.value })
          }
          className="w-full p-2 border-b-1 border-border mb-3 text-text-main tajawal-regular focus:outline-0 focus:border-primary text-right "
        />
        <input
          type="password"
          placeholder="كلمه السر"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full p-2 border-b-1 border-border mb-3 text-text-main tajawal-regular focus:outline-0 focus:border-primary text-right "
        />
        <input
          type="password"
          placeholder="تأكيد كلمه السر"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          className="w-full p-2 border-b-1 border-border mb-3 text-text-main tajawal-regular focus:outline-0 focus:border-primary text-right "
        />

        <div className="actions flex items-center justify-center gap-3">
          <Mainbtn1
            type="submit"
            className="w-full my-3 !bg-success hover:scale-105 "
          >
            انشاء حساب
          </Mainbtn1>
          <Mainbtn1
            onClick={handleBack}
            className=" my-3  !bg-icon1 w-fit hover:scale-105 hover:!bg-icon1/90"
          >
            السابق
          </Mainbtn1>
        </div>
      </form>
    </div>
  );
}

function Done() {
  return (
    <motion.div
      className="done flex flex-col items-center justify-center bg-text-main text-bg-main p-5 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
      variants={zoomout({ duration: 0.4, delay: 0 })}
      initial="initial"
      whileInView="animate"
      exit="exit"
    >
      <IoCheckmarkDoneCircle className="text-4xl text-success" />
      <p className="tajawal-bold text-xl">
        تم انشاء حسابك بنجاح ,مرحبا بك في العيلة
      </p>
      <Mainlink1
        path="/studentDashboard"
        className="tajawal-regular text-text-muted mt-5"
      >
        انتقل للصفحة الرئيسيه
      </Mainlink1>
    </motion.div>
  );
}

export default FormStep3;
