import { useContext } from "react";
import MainContext from "../../context/MainContext";
function Footer() {
  const { theme } = useContext(MainContext);
  return (
    <section className="py-10 bg-bg-main ">
      <div className="main_container">
        <div className="content">
          {/* logo */}
          <div className="flex flex-col items-center gap-2  justify-center">
            <img
              src={theme === "light" ? "./logo.png" : "./logo_dark.png"}
              alt=""
              className="w-10 h-10 md:w-14 md:h-14 object-contain cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out rounded-full"
            />
            <p className="text-text-main">منصة الزتونه التعليمية</p>
          </div>
          {/* links */}
          <div className="flex flex-col items-center gap-2  justify-center">
            <p className="text-text-main">
              تم صنع هذه المنصة بكل حب بهدف تهيئة الطالب ومساعدته للوصول لهدفه
            </p>
          </div>
          {/* developer */}
          <div className="flex flex-col items-center gap-2  justify-center">
            <p className="text-text-main">تم تصميم وتطوير المنصة بواسطة</p>
            <p className="text-text-main">
              <a
                href="https://shehabahmed1.github.io/My-portfolio/"
                target="_blank"
                className="text-decorate1 hover:text-primary transition-all duration-300 ease-in-out cursor-pointer mr-2"
              >
                shehab Ahmed
              </a>
              |
              <a
                href="https://wa.me/+201272073227?"
                target="_blank"
                className="text-decorate1 hover:text-primary transition-all duration-300 ease-in-out cursor-pointer ml-2"
              >
                01272073227
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
