
import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {

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
            <form
                className="form__body"
                onSubmit={onFormSubmit}
            >
                <input className="form__input"
                    placeholder="Co jest do zrobienia?"
                    value={newTaskContent}
                    onChange={(e) => setNewTaskContent(e.target.value)}
                />
                <button className="form__button">Dodaj zadanie</button>
            </form>
        )
    )
}
export default Form;


