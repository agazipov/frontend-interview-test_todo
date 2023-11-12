/* VENDOR */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

/* APPLICATION */
import { RootState } from "../store";
import { ITask } from "../../types/types";
import { initialStateTasks } from "../../moks";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialStateTasks,
  reducers: {
    tasksAdded: (
      state: Array<ITask>,
      action: PayloadAction<ITask>
    ) => {
      return [...state, { id: uuidv4(), ...action.payload, }]
    },
    tasksUpdated: (
      state: Array<ITask>,
      action: PayloadAction<ITask>
    ) => {

      const { id, name, description, category } = action.payload;

      return state.forEach((element) => {
        if (element.id === id) {
          element.name = name;
          element.description = description;
          element.category = category;
        }
      })
    },
    tasksRemoved: (
      state: Array<ITask>,
      action: PayloadAction<string>
    ) => {

      return state.filter((category) => category.id !== action.payload)
    },
    tasksClearedCategories: (
      state: Array<ITask>,
      action: PayloadAction<string>
    ) => {
      return state.forEach((element) => {
        if (element.category === action.payload) {
          element.category = "";
        }
      })
    },
  },
});

export const {
  tasksAdded,
  tasksUpdated,
  tasksRemoved,
  tasksClearedCategories,
} = tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
