import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        taskHide: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },

        toggleTaskHide: (state) => {
            state.taskHide = !state.taskHide;
        },
        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },



    },
});

const selectTasksState = state => state.tasks;
export const { addTask, toggleTaskHide, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectTaskHide = state => selectTasksState(state).taskHide;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if(!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({content}) => content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksSlice.reducer;   