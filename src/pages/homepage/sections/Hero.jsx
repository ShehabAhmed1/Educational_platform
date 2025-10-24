import React from "react";
import heroImage from "../../../assets/imgs/hero_bg2.jpeg";
import { zoomout } from "../../../assets/helper/functions";
import { motion } from "framer-motion";
import { Mainlink1 } from "../../../components/_reusable/Mainlink1";
import seperator from "../../../assets/imgs/seperator.svg";
function Hero() {
  return (
    <section
      id="hero"
      className="Hero relative bg-cover bg-center bg-no-repeat h-screen overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-bg-main/50 dark:bg-bg-main/75"></div>
      <div className="main_container h-full">
        <div className="content absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-5  md:flex-row  items-center justify-center">
          <motion.div
            variants={zoomout({ duration: 0.4, delay: 0 })}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center flex flex-col gap-4 items-center justify-center w-full"
          >
            <h1 className="text-4xl tajawal-bold text-text-main">
              اهلا بكم في منصة
              <span className="text-primary tajawal-bold">
                {" "}
                الزتونه التعليميه
              </span>
            </h1>
            <p className="text-xl tajawal-medium text-text-muted">
              كل ما يحتاجه طالب الثانويه العامة في مكان واحد
            </p>
            <Mainlink1
              path="/signup"
              className="hover:scale-110 shadow-xl shadow-primary-hover/50"
            >
              انضم لعيلتنا
            </Mainlink1>
          </motion.div>
        </div>
      </div>
      {/* <img
        src={seperator}
        alt=""
        className="absolute bottom-0 left-0 right-0 w-full"
      /> */}
    </section>
  );
}

export default Hero;
