import React, { useState } from "react";
import FormLogin from "../../components/_sign/FormLogin";
import loginImage from "../../assets/imgs/signup_bg2.png";
function Login() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  return (
    <section>
      <div className="content relative min-h-screen  flex lg:flex-row flex-col-reverse items-center justify-center gap-8 lg:gap-4 p-4 bg-bg-main">
        <FormLogin formData={formData} setFormData={setFormData} />
        <figure className="h-full md:h-[300px] lg:h-full  w-full lg:w-[50%] ">
          <img
            src={loginImage}
            alt="loginImage"
            className="object-cover rounded-lg h-full w-full"
          />
        </figure>
      </div>
    </section>
  );
}

export default Login;
