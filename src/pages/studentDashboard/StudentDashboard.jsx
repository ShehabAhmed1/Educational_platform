import { useState } from "react";
import Navbar from "../../components/_studentDashboard/Navbar";
import { useContext } from "react";
import MainContext from "../../context/MainContext";
import Sidebar from "../../components/_studentDashboard/Sidebar";
import { Outlet } from "react-router-dom";
function StudentDashboard() {
  const { theme, setTheme } = useContext(MainContext);
  const [open, setOpen] = useState(false);
  return (
    <main id="studentDashboard" className="bg-bg-main min-h-screen">
      <Navbar setOpen={setOpen} theme={theme} setTheme={setTheme} open={open} />
      <Sidebar setOpen={setOpen} theme={theme} open={open} />
      <div className="content pt-24 px-4 lg:pr-72">
        <Outlet />
      </div>
    </main>
  );
}

export default StudentDashboard;
