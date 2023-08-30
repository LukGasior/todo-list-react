
import { useState, useEffect, useRef } from "react";
import { Wrapper, Input, Button } from "./style"
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";

const Form = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const dispatch = useDispatch();

    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (e) => {
        e.preventDefault();

        if (newTaskContent === "") {
            return
        }
        else {
            dispatch(addTask({
                content: newTaskContent,
                done: false,
                id: nanoid(),
            }));
            setNewTaskContent("");
        }
    };


    return (
        (
            <Wrapper
                onSubmit={onFormSubmit}
            >
                <Input
                    placeholder="Co jest do zrobienia?"
                    ref={inputRef}
                    value={newTaskContent}
                    onChange={(e) => setNewTaskContent(e.target.value)}
                />
                <Button>Dodaj zadanie</Button>
            </Wrapper>
        )
    )
}
export default Form;


