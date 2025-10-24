import React from "react";

function HonorCard({ student }) {
  return (
    <div
      className={`w-[300px] relative overflow-hidden bg-bg-secondary transition-all duration-300 rounded-xl shadow-lg shadow-primary/50 `}
    >
      {/* Rank Badge */}
      {/* <div className="absolute top-4 right-4 z-10">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${getRankBadgeColor(
            student.rank
          )} shadow-lg`}
        >
          {getRankIcon(student.rank)}
        </div>
      </div> */}

      <div className="p-2 text-center">
        <img
          className="w-[300px] h-[300px] object-cover object-end rounded-xl mb-4"
          src={student.image}
          alt={student.name}
        />

        <h3 className="text-3xl tajawal-bold text-text-main  text-foreground mb-2">
          {student.name}
        </h3>
        <div className="flex items-center justify-center gap-2 text-text-main text-xl mb-2">
          <span>{student.ranktitle} |</span>
          <span className="font-semibold text-foreground">
            {student.Score}%
          </span>
        </div>
        <div className="mb-3 text-xl text-text-main">{student.specialty}</div>
      </div>
    </div>
  );
}

export { HonorCard };
