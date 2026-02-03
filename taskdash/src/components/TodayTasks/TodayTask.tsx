import { useState, useEffect } from "react";
import { Button, Modal, Input, DatePicker } from "antd";
import dayjs from "dayjs";
import "./TodayTask.css";

interface Task {
  id: number;
  title: string;
  status?: "Overdue" | "Due Today";
  date?: string;
  assignee: string;
  completed?: boolean;
}

const TODAY_KEY = "today_tasks";
const UPCOMING_KEY = "upcoming_tasks";

const TodayTasks = () => {
  const [addedTasks, setAddedTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // 🔁 Load today tasks once
  useEffect(() => {
    const saved = localStorage.getItem(TODAY_KEY);
    if (saved) {
      setAddedTasks(JSON.parse(saved));
    }
  }, []);

  // ➕ Add task
  const addTask = () => {
    if (!title || !date) return;

    const today = new Date().toISOString().split("T")[0];

    const newTask: Task = {
      id: Date.now(),
      title,
      date,
      assignee: "Me",
      completed: false,
    };

    // 🔮 FUTURE → UPCOMING
    if (date > today) {
      const upcoming =
        JSON.parse(localStorage.getItem(UPCOMING_KEY) || "[]");

      localStorage.setItem(
        UPCOMING_KEY,
        JSON.stringify([newTask, ...upcoming])
      );

      window.dispatchEvent(new Event("upcomingTasksUpdated"));
      resetForm();
      return;
    }

    // ⏰ TODAY / PAST → TODAY TASKS
    const status: "Overdue" | "Due Today" =
      date < today ? "Overdue" : "Due Today";

    const updatedTodayTasks: Task[] = [
      { ...newTask, status },
      ...addedTasks,
    ];

    setAddedTasks(updatedTodayTasks);
    localStorage.setItem(
      TODAY_KEY,
      JSON.stringify(updatedTodayTasks)
    );

    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDate("");
    setShowModal(false);
  };

  const toggleCompleted = (id: number) => {
    const updated = addedTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setAddedTasks(updated);
    localStorage.setItem(TODAY_KEY, JSON.stringify(updated));
  };

  return (
    <>
      <div className="today-card">
        <div className="today-header">
          <h3>TODAY TASK</h3>
          <Button type="primary" onClick={() => setShowModal(true)}>
            ＋ Add a task
          </Button>
        </div>

        <div className="task-list">
          {addedTasks.map((task) => (
            <div key={task.id} className="task-row">
              <div className="task-left">
                <input
                  type="checkbox"
                  checked={!!task.completed}
                  onChange={() => toggleCompleted(task.id)}
                />

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
                  {task.date}
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

      <Modal
        title="Add Task"
        open={showModal}
        onOk={addTask}
        onCancel={() => setShowModal(false)}
        okText="Add"
        destroyOnHidden
      >
        <Input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: 12 }}
        />

        <DatePicker
          style={{ width: "100%" }}
          value={date ? dayjs(date) : null}
          onChange={(value) =>
            setDate(value ? value.format("YYYY-MM-DD") : "")
          }
        />
      </Modal>
    </>
  );
};

export default TodayTasks;
