import { useEffect, useState } from "react";
import "./UpcomingTask.css";

interface Task {
  id: number;
  title: string;
  date: string;
  assignee: string;
}

const STORAGE_KEY = "upcoming_tasks";

const UpcomingTasks = () => {
  const [upcomingTasks, setUpcomingTasks] = useState<Task[]>([]);

  const loadTasks = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setUpcomingTasks(stored ? JSON.parse(stored) : []);
  };

  useEffect(() => {
    loadTasks();

    
    window.addEventListener("upcomingTasksUpdated", loadTasks);

    return () => {
      window.removeEventListener("upcomingTasksUpdated", loadTasks);
    };
  }, []);

  return (
    <div className="upcoming-card">
      <div className="upcoming-header">
        <h3>UPCOMING TASKS</h3>
      </div>

      <div className="task-list">
        {upcomingTasks.length === 0 && (
          <p className="empty">No upcoming tasks</p>
        )}

        {upcomingTasks.map((task) => (
          <div key={task.id} className="task-row1">
            <div className="task-left">
              <input type="checkbox" disabled />
              <span className="task-title">{task.title}</span>
            </div>

            <div className="task-right">
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
    </div>
  );
};

export default UpcomingTasks;
