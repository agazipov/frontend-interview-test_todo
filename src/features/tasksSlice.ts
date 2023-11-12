/* VENDOR */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

/* APPLICATION */
import { RootState } from "../app/store";

export interface CategoriesState {
  id: string;
  name: string;
  description: string;
  category: string;
}

const initialState: CategoriesState[] = [
  {
    id: "dcf6c7ea-56fe-4e36-960b-686ebf86d651",
    name: "Задача_1",
    description: "Описание первой задачи",
    category: "d485a644-5a24-4f55-b3f7-a083338be879",
  },
  {
    id: "8c90d466-4d2b-4813-a5b4-110b014bf7f2",
    name: "Задача_2",
    description: "Описание второй задачи",
    category: "52f7451a-0f06-4ddc-affa-b1d8ed24aee3",
  },
  {
    id: "5a034ea1-6159-4805-a4be-e8c160d8ef10",
    name: "Задача_3",
    description: "Описание третьей задачи",
    category: "",
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    tasksAdded: (state, action) => {   
      state.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    tasksUpdated: (state, action) => {
      console.log(`test`, action);
      
      const { id, name, description, category } = action.payload,
        existingTask = state.find((task) => task.id === id);

      if (existingTask) {
        existingTask.name = name;
        existingTask.description = description;
        existingTask.category = category;
      }
    },
    tasksRemoved: (state, action) => {
      // let rm = (el: CategoriesState, i: number, arr: CategoriesState[]): boolean =>
      //   el.id === action.payload;
        function rm(el: CategoriesState): boolean {
          return el.id === action.payload;
        }

      let rmTaskIndex = state.findIndex(rm);

      state.splice(rmTaskIndex, 1);
    },
    tasksClearedCategories: (state, action) => {
      state.map((task) => {
        if (task.category === action.payload) 
        {return task.category = ""}
        else return null;
      });
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
