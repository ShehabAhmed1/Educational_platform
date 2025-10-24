import { useState } from "react";
import { Mainbtn1 } from "../_reusable/Mainbtn1";
import { isPhoneNumber } from "../../assets/helper/functions";
import { Error } from "../../assets/helper/component";
function FormLogin({ formData, setFormData }) {
  //send data to backend and check if the user is realy logged in

  //states
  const [error, setError] = useState("");

  //function to handle errors and login
  //the data should send to backend and check if the user is realy logged in
  // then reject or accept
  const handleErrorsLogin = (event) => {
    event.preventDefault();
    setError("هذاالرقم غير موجود في النظام");

    // if (!isPhoneNumber(formData.phone)) {
    //   setError("هذاالرقم غير موجود في النظام");
    //   return;
    // } else if (formData.password.length < 6) {
    //   setError("كلمه المرور غير صحيحة");
    //   return;
    // } else {
    //   setError("");
    // }
  };

  return (
    <div className="flex items-center justify-center w-full lg:w-[50%]">
      <div className="form w-full lg:w-[500px]  bg-bg-secondary p-4 rounded-lg">
        <img src="./logo.png" alt="logo" className="w-20 h-20 m-auto" />
        <h2 className="tajawal-bold text-text-main text-center mt-5 mb-2 ">
          تسجيل الدخول
        </h2>
        {error && <Error error={error} />}
        <form
          action=""
          className="flex flex-col gap-3"
          onSubmit={handleErrorsLogin}
        >
          <input
            type="tel"
            placeholder="رقم الهاتف"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="p-2 border border-border rounded-lg text-right text-text-main tajawal-regular focus:outline-0 focus:border-primary mt-4"
          />
          <input
            type="password"
            placeholder="كلمه المرور"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="p-2 border border-border rounded-lg text-right text-text-main tajawal-regular focus:outline-0 focus:border-primary"
          />
          <Mainbtn1
            type="submit"
            className="w-full my-3 hover:bg-transparent border-2 border-primary"
          >
            تسجيل الدخول
          </Mainbtn1>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
