import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContext from "./context/MainContext";
//homepage
import Homepage from "./pages/homepage/Homepage";
import SignUp from "./pages/sign/SignUp";
import Login from "./pages/sign/Login";
//studentDashboard
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import Mainboard from "./pages/studentDashboard/sections/Mainboard";
import Lectures from "./pages/studentDashboard/sections/Lectures";
import Questions from "./pages/studentDashboard/sections/Questions";
import Exams from "./pages/studentDashboard/sections/Exams";
import LectureDetails from "./pages/studentDashboard/sections/LectureDetails";

import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/studentDashboard",
    element: <StudentDashboard />,
    children: [
      {
        path: "",
        element: <Mainboard />,
      },
      {
        path: "lectures",
        element: <Lectures />,
      },
      {
        path: "questions",
        element: <Questions />,
      },
      {
        path: "exams",
        element: <Exams />,
      },
    ],
  },
  {
    path: "/lectureDetails/:id",
    element: <LectureDetails />,
  },
]);

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <MainContext.Provider value={{ theme, setTheme }}>
      <main>
        <RouterProvider router={router} />
      </main>
    </MainContext.Provider>
  );
}

export default App;
