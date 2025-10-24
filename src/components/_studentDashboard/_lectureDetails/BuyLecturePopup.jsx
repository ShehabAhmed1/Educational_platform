import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Mainbtn1 } from "../../_reusable/Mainbtn1";
import { motion } from "framer-motion";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Mainlink1 } from "../../_reusable/Mainlink1";
import { zoomout } from "../../../assets/helper/functions";
import { useState } from "react";

function BuyLecturePopup({ phone, setBuyLectureOpen }) {
  const [done, setDone] = useState(false);
  const [Lecturerequestopen, setLecturerequestopen] = useState(true);

  const handleClose = () => setBuyLectureOpen(false);
  const handleSendRequest = () => {
    setLecturerequestopen(false);
    setDone(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {Lecturerequestopen && (
        <Lecturerequest
          phone={phone}
          handleClose={handleClose}
          handleSendRequest={handleSendRequest}
        />
      )}
      {done && <Done />}
    </div>
  );
}

function Lecturerequest({ phone, handleClose, handleSendRequest }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* خلفية شفافة */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose}></div>

      {/* البوب أب */}
      <div className="relative bg-bg-Fourth text-text-main shadow-xl rounded-2xl px-6 py-8 w-[300px] max-w-sm z-10 space-y-4">
        {/* زر الإغلاق */}
        <button
          className="absolute top-3 right-3 text-error hover:text-error/80 transition cursor-pointer"
          onClick={handleClose}
        >
          <IoCloseCircle className="w-6 h-6" />
        </button>

        {/* العنوان */}
        <h2 className="text-center text-lg font-semibold">طلب شراء المحاضرة</h2>

        {/* النص */}
        <p className="text-center text-sm leading-relaxed">
          أرسل طلب فتح المحاضرة ثم قم بدفع مبلغ <strong>75</strong> جنيه على
          الرقم التالي:
        </p>

        {/* رقم الهاتف */}
        <span className="text-text-main font-bold block text-center text-xl tracking-wide">
          {phone}
        </span>

        <p className="text-center text-sm leading-relaxed">
          بعد إرسال إيصال الدفع على الواتساب سيتم فتح المحاضرة خلال 12 ساعة،
          وستظهر الحصة عندك في الصفحة الرئيسية.
        </p>

        {/* زر الإرسال */}
        <div className="flex justify-center pt-2">
          <Mainbtn1 onClick={handleSendRequest}>إرسال الطلب</Mainbtn1>
        </div>
      </div>
    </div>
  );
}

//رسالة تأكيد الطلب
function Done() {
  return (
    <motion.div
      className="done flex flex-col items-center justify-center bg-text-main text-bg-main p-5 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] max-w-sm z-10 space-y-4"
      variants={zoomout({ duration: 0.4, delay: 0 })}
      initial="initial"
      whileInView="animate"
      exit="exit"
    >
      <IoCheckmarkDoneCircle className="text-4xl text-success" />
      <p className="tajawal-bold text-xl">تم ارسال الطلب بنجاح</p>
      <Mainlink1
        path="/studentDashboard"
        className="tajawal-regular text-text-muted mt-5"
      >
        انتقل للصفحة الرئيسيه
      </Mainlink1>
    </motion.div>
  );
}

export default BuyLecturePopup;
