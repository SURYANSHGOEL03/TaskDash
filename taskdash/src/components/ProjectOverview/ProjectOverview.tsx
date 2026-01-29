import "./ProjectOverview.css";

const ProjectOverview = () => {
  return (
    <div className="project-card">
    
      <h2 className="title">Project Overview</h2>

     
      <div className="info-row">
        <span>🕒 Duration</span>
        <span>12/03/2022 - 12/03/2023</span>
      </div>

      <div className="info-row">
        <span>ℹ️ Status</span>
        <span className="status-pill">On going</span>
      </div>

     
      <div className="section">
        <p className="section-title">MEMBER</p>
        <div className="members">
          
          <div className="more">+5</div>
        </div>
      </div>

      
      <div className="section">
        <p className="section-title">WORK PROCESS</p>

        <div className="stats">
          <div>
            <h3>32</h3>
            <span>TASK</span>
          </div>
          <div>
            <h3>25.66%</h3>
            <span>COMPLETED</span>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" />
        </div>
      </div>

      
      <div className="section">
        <p className="section-title">STATUS</p>

        <div className="chart-wrapper">
          <svg viewBox="0 0 32 32" className="pie">
            <circle r="16" cx="16" cy="16" className="slice active" />
            <circle r="16" cx="16" cy="16" className="slice done-late" />
            <circle r="16" cx="16" cy="16" className="slice done-time" />
            <circle r="16" cx="16" cy="16" className="slice overdue" />
          </svg>
        </div>

        <div className="legend">
          <span className="dot active">Active: 6</span>
          <span className="dot late">Done late: 3</span>
          <span className="dot ontime">Done on-time: 3</span>
          <span className="dot overdue">Overdue: 1</span>
        </div>
      </div>

      
      <div className="section">
        <p className="section-title">MY TASK</p>

        <div className="stats">
          <div>
            <h3>18</h3>
            <span>MY TASK</span>
          </div>
          <div>
            <h3>28</h3>
            <span>ASSIGN TO MEMBER</span>
          </div>
        </div>

        <div className="task-bar">
          <div className="task-my" />
          <div className="task-member" />
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
