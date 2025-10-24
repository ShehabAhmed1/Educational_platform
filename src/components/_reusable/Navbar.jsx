import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { toggleTheme } from "../../assets/helper/functions.js";
import { fromTop } from "../../assets/helper/functions.js";
import { Mainlink1 } from "./Mainlink1";
import { useContext } from "react";
import MainContext from "../../context/MainContext";
const NavbarData = [
  {
    name: "الرئيسية",
    link: "#hero",
  },
  {
    name: "لماذا نحن",
    link: "#features",
  },
  {
    name: "الكورسات",
    link: "#courses",
  },
  {
    name: "المدرسين",
    link: "#teachers",
  },
  {
    name: "طلابنا",
    link: "#students",
  },
];

function Navbar() {
  const { theme, setTheme } = useContext(MainContext);
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      variants={fromTop({ duration: 0.4, delay: 0 })}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-bg-main fixed top-0 left-0 right-0 z-50 shadow-lg"
    >
      <div className="main_container">
        <div className="content py-2 flex justify-between items-center gap-5">
          <div className="flex items-center justify-center gap-5 w-[120px] border-l-2 border-border">
            {/* logo */}
            <div>
              <img
                src={theme === "light" ? "./logo.png" : "./logo_dark.png"}
                alt=""
                className="w-10 h-10 md:w-14 md:h-14 object-contain cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out rounded-full"
              />
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

          {/* menu */}
          <ul className="hidden lg:flex gap-5  flex-1 justify-start items-center">
            {NavbarData.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="tajawal-regular text-text-main w-full block tajawal-bold hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* buttons sign in and sign up */}
          <div className="hidden lg:flex gap-5 w-[300px] justify-center items-center">
            <Mainlink1 path="/login">تسجيل الدخول</Mainlink1>
            <Mainlink1 path="/signup">انشاء حساب</Mainlink1>
          </div>
          <div
            className="lg:hidden cursor-pointer flex items-center justify-center "
            onClick={() => setOpen(true)}
          >
            <FaBarsStaggered className="w-6 h-6 text-text-main" />
          </div>
          <AnimatePresence>
            {open && <MobileNavbar setOpen={setOpen} theme={theme} />}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}

function MobileNavbar({ setOpen, theme }) {
  const variant = {
    initial: { x: "-100%" },
    animate: { x: "0%", transition: { duration: 0.25 } },
    exit: { x: "-100%", transition: { duration: 0.25 } },
  };

  return (
    <motion.aside
      variants={variant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-0 left-0 h-screen w-[80%] z-50 bg-bg-main flex flex-col gap-5 items-center  p-5 "
    >
      <div className="flex items-center justify-between w-full p-5 border-b-1 border-border ">
        <img
          src={theme === "light" ? "./logo.png" : "./logo_dark.png"}
          alt=""
          className="w-10 h-10 md:w-14 md:h-14 object-contain cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out rounded-full"
        />
        <IoClose
          className="w-6 h-6 text-text-main cursor-pointer"
          onClick={() => setOpen(false)}
        />
      </div>
      <div className="flex flex-col gap-5">
        <ul className="flex flex-col gap-5 mt-5 items-center">
          {NavbarData.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="tajawal-regular text-text-main">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* buttons sign in and sign up */}
        <div className="flex flex-col gap-5">
          <Mainlink1 path="/login">تسجيل الدخول</Mainlink1>
          <Mainlink1 path="/signup">انشاء حساب</Mainlink1>
        </div>
      </div>
    </motion.aside>
  );
}

export default Navbar;
