import React from "react";

/**
 * @param {sentence that show in button} children
 * @param {Style of button} className
 * @param {function handler like in "<courses/>"} onClick
 */

function Mainbtn1({ children, className, onClick }) {
  return (
    <button
      className={`tajawal-regular px-5 py-2  bg-primary text-white rounded-lg  hover:bg-transparent transition-all duration-300 ease-in-out cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export { Mainbtn1 };
