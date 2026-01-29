import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  status: "upcoming" | "overdue" | "completed";
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTaskStatus: (
      state,
      action: PayloadAction<{ id: string; status: Task["status"] }>,
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) task.status = action.payload.status;
    },
  },
});

export const { addTask, removeTask, updateTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
