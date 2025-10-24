import React from "react";

function ProgressForm({ progress, step, totalSteps }) {
  return (
    <div className="progress rounded-lg">
      <div className="progress-circle flex items-center justify-between mb-3 ">
        <span className="tajawal-regular text-text-muted">
          خلصنا {progress}%
        </span>
        <span className="tajawal-regular text-text-muted">
          خطوة {step} من {totalSteps}
        </span>
      </div>
      <div className="progress-bar bg-bg-main h-1 w-full rounded-full overflow-hidden">
        <span
          className={`progress-fill h-1 rounded-full block ${
            progress <= 34
              ? "bg-error"
              : progress <= 67
              ? "bg-warning"
              : progress <= 100
              ? "bg-success"
              : "bg-success"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressForm;
