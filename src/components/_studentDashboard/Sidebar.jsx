import { IoClose } from "react-icons/io5";
import { fromRight } from "../../assets/helper/functions";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { SiGooglesheets } from "react-icons/si";
import { RiQuestionnaireFill } from "react-icons/ri";
import { IoLogInOutline } from "react-icons/io5";
import { Mainlink1 } from "../_reusable/Mainlink1";
import { Link } from "react-router-dom";
import { useState } from "react";
const SidebarData = [
  {
    title: "الرئيسية",
    link: "/studentDashboard",
    icon: <FaHome />,
  },
  {
    title: "الحصص",
    link: "/studentDashboard/lectures",
    icon: <IoBookOutline />,
  },
  {
    title: "الامتحانات",
    link: "/studentDashboard/exams",
    icon: <SiGooglesheets />,
  },
  {
    title: "الاسئلة",
    link: "/studentDashboard/questions",
    icon: <RiQuestionnaireFill />,
  },
];

function Sidebar({ setOpen, theme, open }) {
  const [active, setActive] = useState("الرئيسية");
  return (
    <motion.aside
      variants={fromRight({ duration: 0.4, delay: 0 })}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`fixed  top-0 right-0 bottom-0 h-screen w-[250px] z-50 bg-bg-secondary flex-col gap-5 items-center  border-l-1 border-border transition-all duration-500 ease-in-out ${
        open ? "right-0 " : "right-[-250px] lg:right-0"
      }`}
    >
      <div className="flex items-center justify-between lg:justify-center w-full p-2 border-b-1 border-border ">
        <img
          src={theme === "light" ? "/logo.png" : "/logo_dark.png"}
          alt=""
          className="w-10 h-10 md:w-14 md:h-14 object-contain cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out rounded-full"
        />
        <IoClose
          className="w-6  block  lg:hidden h-6 text-text-main cursor-pointer"
          onClick={() => setOpen(false)}
        />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <ul className="flex flex-col gap-5 mt-5 items-center w-full p-5">
          {SidebarData.map((item) => (
            <li key={item.title} className="w-full">
              <Link
                to={item.link}
                className={`tajawal-bold text-text-muted w-full p-2 flex items-center justify-center rounded-lg hover:bg-primary hover:text-white  ${
                  active === item.title ? "bg-primary text-white" : ""
                }`}
                onClick={() => setActive(item.title)}
              >
                <div className="flex items-center justify-center gap-2">
                  {item.icon}
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center w-full absolute bottom-0 right-0 ">
          <Mainlink1
            path="/"
            className="bg-transparent border-t-2 border-border rounded-none  flex items-center justify-center gap-2 w-full  py-5 !text-text-muted hover:bg-transparent hover:!text-error hover:gap-4 "
          >
            <IoLogInOutline className="w-6 h-6" />
            تسجيل الخروج
          </Mainlink1>
        </div>
      </div>
    </motion.aside>
  );
}

export default Sidebar;
