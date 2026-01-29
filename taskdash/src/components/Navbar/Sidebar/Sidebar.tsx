import "./Sidebar.css";
import {
  FiChevronDown,
  FiPlus,
  FiSettings,
  FiFolder,
  FiCheckSquare,
  FiTarget,
  FiAward,
  FiChevronLeft,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="sidebar">
              
      <div className="workspace">
        <div className="avatar">K</div>
        <span className="workspace-name">KDesign Workspace</span>
      </div>

      <div className="section">
        <div className="section-title">
          <FiChevronDown />
          <span>FAVORITE</span>
        </div>

        <div className="item active">
          <span className="emoji">👋</span>
          My Task
        </div>

        <div className="item">
          <span className="emoji">🎯</span>
          Ultimate Goals
        </div>
      </div>

      <div className="section">
        <div className="section-title">
          <FiChevronDown />
          <span>MY DASHBOARD</span>
        </div>

        <div className="item">
          <FiCheckSquare />
          Monthly OKRs
        </div>

        <div className="item">
          <FiAward />
          Product Key Drivers
        </div>

        <div className="item">
          <FiTarget />
          Design Team OKRs
        </div>

        <div className="item muted">
          <FiPlus />
          New dashboard
        </div>
      </div>

     
      <div className="sidebar-footer">
        <div className="item">
          <FiSettings />
          Config Layout
        </div>

        <div className="item link">
          <FiFolder />
          All Dashboards
        </div>

        <FiChevronLeft className="collapse-icon" />
      </div>
    </aside>
  );
};

export default Sidebar;
