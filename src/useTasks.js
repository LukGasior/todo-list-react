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
        addNewTask,
    };

};