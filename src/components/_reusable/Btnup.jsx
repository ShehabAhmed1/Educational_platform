import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { motion } from "framer-motion";
import { zoomout } from "../../assets/helper/functions";
function Btnup() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fixed bottom-5 right-5 z-50 ">
      <motion.button
        className="bg-primary text-white p-2 rounded-full shadow-lg shadow-primary-hover/50 hover:scale-110 transition-all duration-300 cursor-pointer w-10 h-10 flex items-center justify-center text-xl"
        variants={zoomout({ duration: 0.3, delay: 0.3 })}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ amount: 0.1, once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScrollTop}
      >
        <MdKeyboardDoubleArrowUp />
      </motion.button>
    </div>
  );
}

export default Btnup;
