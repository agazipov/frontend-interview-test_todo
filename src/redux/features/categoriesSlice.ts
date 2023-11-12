/* VENDOR */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

/* APPLICATION */
import { RootState } from "../../app/store";
import { ITask } from "../../types/types";
import { initialStateCategories } from "../../moks";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialStateCategories,
  reducers: {
    categoriesAdded: (
      state: Array<ITask>,
      action: PayloadAction<ITask>
    ) => {
      return [...state, { id: uuidv4(), ...action.payload, }]
    },
    categoriesUpdated: (
      state: Array<ITask>,
      action: PayloadAction<ITask>
    ) => {
      const { id, name, description } = action.payload;
      
      return state.forEach((category) => {
        if (category.id === id) {
          category.name = name;
          category.description = description;
        }
      })
    },
    categoriesRemoved: (
      state: Array<ITask>,
      action: PayloadAction<string>
    ) => {
      if (action.payload === "") {
        return;
      }
      return state.filter((category) => category.id !== action.payload)
    },
  },
});

export const { categoriesAdded, categoriesUpdated, categoriesRemoved } =
  categoriesSlice.actions;

export const selectAllCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
