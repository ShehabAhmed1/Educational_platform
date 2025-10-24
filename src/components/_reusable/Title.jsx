import React from "react";

function Title({ title, subtitle }) {
  return (
    <div className="flex flex-col w-fit m-auto items-center justify-center mb-10 ">
      <h2 className="tajawal-bold mb-2 text-4xl text-text-main text-center">
        {title}
      </h2>
      <p className="text-text-muted ">{subtitle}</p>

      <svg
        className="w-full h-full"
        viewBox="0 0 420 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Z shaped connected upward curves"
      >
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>

        <g
          stroke="url(#grad1)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 100 C100 40 300 40 406 100" />
          <path d="M406 100 C300 60 100 60 1 100" />
          <path d="M1 100 C80 40 240 40 380 90" />
          <path d="M380 90 C320 70 200 70 120 100" />
        </g>
      </svg>
    </div>
  );
}

export { Title };
