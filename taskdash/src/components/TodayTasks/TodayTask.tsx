// import "./TodayTasks.css";
import "./TodayTask.css"
interface Task {
  id: number;
  title: string;
  status?: "Overdue" | "Due Today";
  date?: string;
  assignee: string;
  completed?: boolean;
}

const tasks: Task[] = [
  {
    id: 1,
    title:
      "Wireframing the [Customer Service] Export customer feedback tickets function",
    status: "Overdue",
    date: "12/04/2022",
    assignee: "Katie Pham",
  },
  {
    id: 2,
    title:
      "Create a Data studio Dashboard to tracking mobile app events",
    status: "Due Today",
    date: "27/03/2022",
    assignee: "Me",
  },
  {
    id: 3,
    title: "Send monthly report to Product Director",
    assignee: "Katie Pham",
  },
  {
    id: 4,
    title:
      "Create a Data studio Dashboard to tracking mobile app events",
    status: "Due Today",
    completed: true,
    assignee: "Katie Pham",
  },
  {
    id: 5,
    title:
      "Sprint 26 planning – Creat local database for mobile app user and support export to xlsx",
    status: "Overdue",
    date: "28/03/2022",
    completed: true,
    assignee: "Katie Pham",
  },
];

const TodayTasks = () => {
  return (
    <div className="today-card">
      
      <div className="today-header">
        <h3>TODAY TASK</h3>
        <button className="add-task">＋ Add a task</button>
      </div>

     
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-row">
            <div className="task-left">
              <input type="checkbox" checked={task.completed} readOnly />

              <span
                className={`task-title ${
                  task.completed ? "completed" : ""
                }`}
              >
                {task.title}
              </span>

              {task.status && (
                <span
                  className={`badge ${
                    task.status === "Overdue"
                      ? "badge-red"
                      : "badge-yellow"
                  }`}
                >
                  {task.status}
                </span>
              )}
            </div>

            <div className="task-right">
              <span
                className={`date ${
                  task.status === "Overdue" ? "date-red" : ""
                }`}
              >
                {task.date || "-"}
              </span>

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
    </div>
  );
};

export default TodayTasks;
