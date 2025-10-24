import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { motion } from "framer-motion";
import { toggleTheme } from "../../assets/helper/functions.js";
import { fromTop } from "../../assets/helper/functions.js";

import studentphoto from "../../assets/imgs/t3.png";

function Navbar({ setOpen, theme, setTheme }) {
  return (
    <motion.nav
      variants={fromTop({ duration: 0.4, delay: 0 })}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-bg-secondary fixed top-0 left-0 right-0 z-50 shadow-sm border-b-1 border-border "
    >
      <div className="main_container">
        <div className="content py-2 lg:py-1 flex justify-between lg:justify-end items-center gap-5">
          <div
            className="lg:hidden cursor-pointer flex items-center justify-center "
            onClick={() => setOpen(true)}
          >
            <FaBarsStaggered className="w-6 h-6 text-text-main" />
          </div>
          <div className="flex flex-row-reverse items-center justify-start gap-5 w-[130px] border-r-2 lg:border-r-0 border-border">
            {/* student photo */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={studentphoto}
                alt=""
                className="w-10 h-10  object-contain cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out rounded-full"
              />
              <p className="tajawal-regular text-text-main">محمد ايمن</p>
            </div>

            {/* theme toggle */}
            <button
              onClick={() => setTheme(toggleTheme())}
              className="cursor-pointer flex items-center justify-center"
            >
              {theme === "light" ? (
                <FaMoon className="w-6 h-6 text-text-main" />
              ) : (
                <MdSunny className="w-6 h-6 text-icon1" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
