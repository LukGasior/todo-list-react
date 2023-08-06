import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
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
        setAllDone: (state, action) => {
            state.tasks.forEach(tasks => {
                tasks.done = true;
            })
        },



    },
});

export const { addTask, toggleTaskHide, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;