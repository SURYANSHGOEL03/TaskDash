import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Navbar/Sidebar/Sidebar";

import TodayTasks from "../components/TodayTasks/TodayTask";
import UpcomingTasks from "../components/UpcomingTasks/UpcomingTask";
import ProjectOverview from "../components/ProjectOverview/ProjectOverview";

import "./Dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const addTask = () => {
    if (!title || !date) return;

    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        title,
        date,
        assignee: "You",
      },
    ]);

    setTitle("");
    setDate("");
  };
  return (
    <>
      <Navbar />

      <div className="dashboard-grid">
        
        <Sidebar />

       
        <div className="dashboard-main">
          <TodayTasks />
          <UpcomingTasks />
        </div>

       
        <div className="dashboard-side">
          <ProjectOverview />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
