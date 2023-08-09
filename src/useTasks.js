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



    return {
        tasks,
    };

};