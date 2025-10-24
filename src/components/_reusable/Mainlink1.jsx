import React from "react";
import { Link } from "react-router-dom";

/**
 * @param {sentence that show in button} children
 * @param {Style of button} className
 * @param {link to another page} path
 */

function Mainlink1({ children, className, path }) {
  return (
    <Link
      className={`tajawal-regular px-5 py-2  bg-primary text-white rounded-lg hover:bg-primary-hover transition-all duration-300 ease-in-out cursor-pointer ${className} `}
      to={path}
    >
      {children}
    </Link>
  );
}

export { Mainlink1 };
