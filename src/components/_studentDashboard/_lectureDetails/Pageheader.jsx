import React from "react";
import { Mainlink1 } from "../../_reusable/Mainlink1";
function Pageheader({ title }) {
  return (
    <nav className="bg-bg-secondary shadow  border-b-1 border-border">
      <div className="main_container">
        <div className="content flex flex-col lg:flex-row gap-4 items-center justify-between p-4">
          <h2 className="text-text-main flex-1 text-center"> {title}</h2>
          <div className="flex items-center gap-2">
            <Mainlink1 path="/studentDashboard" className="!p-1">
              العودة للصفحة الرئيسية
            </Mainlink1>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Pageheader;
