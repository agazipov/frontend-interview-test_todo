import { ITask } from "../types/types";

export const initialStateCategories: Array<ITask> = [
    {
        id: "d485a644-5a24-4f55-b3f7-a083338be879",
        name: "Категория",
        description: "Описание может быть длинным",
    },
    {
        id: "52f7451a-0f06-4ddc-affa-b1d8ed24aee3",
        name: "Категория2",
        description: "Описание может быть длинным",
    },
    {
        id: "36704c57-4575-4112-b962-948b04a20506",
        name: "Категория3",
        description: "Описание может быть длинным",
    },
];

export const initialStateTasks: Array<ITask> = [
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