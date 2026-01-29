import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Navbar/Sidebar/Sidebar";

import TodayTasks from "../components/TodayTasks/TodayTask";
// import OverdueTasks from "../components/OverdueTasks/OverdueTask";
import OverdueTasks from "../components/OverdueTask/OverdueTask";
import ProjectOverview from "../components/ProjectOverview/ProjectOverview";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
     {/* <div className="dashboard-page"> */}
      
      {/* <Sidebar /> */}

      
      {/* <div className="dashboard-body"> */}
      
        <Navbar />

         {/* <Sidebar /> */}

        {/* <div className="dashboard-content"> */}
          <div className="dashboard-grid">

            <Sidebar />
            
            <div className="dashboard-main">
              <TodayTasks />
              <OverdueTasks />
            </div>

            <div className="dashboard-side">
              <ProjectOverview />
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
     {/* </div> */}
    </>
  );
};

export default Dashboard;
