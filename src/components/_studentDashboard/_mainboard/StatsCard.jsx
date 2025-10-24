import React from "react";

function StatsCard({ title, value, icon: Icon, trend, trendUp }) {
  return (
    <div className="bg-bg-secondary rounded-2xl shadow-sm hover:shadow-md transition-all p-6 w-full">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-text-muted">{title}</p>
          <p className="text-2xl font-bold text-text-main">{value}</p>
          {trend && (
            <p className={`text-xs ${trendUp ? "text-success" : "text-error"}`}>
              {trend}
            </p>
          )}
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-decorate2">
          {Icon && <Icon className="h-6 w-6 text-icon3" />}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
