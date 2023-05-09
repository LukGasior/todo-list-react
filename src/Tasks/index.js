import "./style.css";
import { List } from "./style"

const Tasks = (props) => (
    <List>
        {props.tasks.map(task => (
            <li
                key={task.id}
                className={`form__list--bottom ${task.done && props.taskHide ?
                    " form__list--decorationHidden" : ""}`}

            >
                <button
                    onClick={() => props.toggleTaskDone(task.id)}
                    className="form___buttonDone">✔
                </button>

                <span className={`${task.done ? " form__list--decoration" : ""}`}>
                    {task.content}</span>

                <button
                    onClick={() => props.removeTask(task.id)}
                    className="form__buttonRemove">🗑
                </button>


            </li>
        ))}
    </List>
)

export default Tasks;