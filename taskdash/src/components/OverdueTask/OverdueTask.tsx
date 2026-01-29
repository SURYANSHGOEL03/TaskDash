// import "./OverdueTasks.css";
import "./OverdueTask.css"
interface OverdueTask {
  id: number;
  title: string;
  date: string;
  assignee: string;
}

const overdueTasks: OverdueTask[] = [
  {
    id: 1,
    title:
      "Sprint 26 planning - Creat local database for mobile app user and support export to xlsx",
    date: "12/04/2022",
    assignee: "Katie Pham",
  },
  {
    id: 2,
    title: "Send monthly report to Product Director",
    date: "12/04/2022",
    assignee: "Me",
  },
  {
    id: 3,
    title:
      "Create a Data studio Dashboard to tracking mobile app events",
    date: "30/03/2022",
    assignee: "Me",
  },
  {
    id: 4,
    title:
      "Wireframing the [Customer Service] Export customer feedback tickets function",
    date: "12/04/2022",
    assignee: "Katie Pham",
  },
];

const OverdueTasks = () => {
  return (
    <div className="overdue-card">
     
      <h3 className="overdue-title">OVERDUE TASK</h3>

    
      {overdueTasks.map((task) => (
        <div key={task.id} className="overdue-row">
          <div className="left">
            <input type="checkbox" />
            <span className="title">{task.title}</span>
            <span className="badge">Overdue</span>
          </div>

          <div className="right">
            <span className="date">{task.date}</span>

            <div className="assignee">
              <img
                src={`https://ui-avatars.com/api/?name=${task.assignee}&background=random`}
                alt={task.assignee}
              />
              <span>{task.assignee}</span>
            </div>

            <span className="star">⭐</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverdueTasks;
