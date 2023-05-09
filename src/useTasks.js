import { useEffect, useState } from "react";

const getInitialTasks = () => {
    const getTasks = localStorage.getItem("tasks");

    return getTasks ? JSON.parse(getTasks) : []
}


export const useTasks = () => {
    const [tasks, setTasks] = useState(getInitialTasks);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }));
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));

    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]);


    }

    return {
        tasks,
        toggleTaskDone,
        removeTask,
        setAllDone,
        addNewTask,
    };

};