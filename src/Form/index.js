
import { useState, useEffect, useRef } from "react";
import { Wrapper, Input, Button } from "./style"

const Form = ({ addNewTask }) => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])



    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (e) => {
        e.preventDefault();

        if (newTaskContent === "") {
            return
        }
        else {
            addNewTask(newTaskContent.trim());
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


