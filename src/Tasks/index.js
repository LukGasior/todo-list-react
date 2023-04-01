import "./style.css";

const Tasks = (props) => (
    <ul className="section__list">
        {props.tasks.map(task => (
            <li
                key={task.id}
                className={`form__list--bottom ${task.done && props.taskHide ?
                    " form__list--decorationHidden" : ""}`}

            >
                <button
                onClick
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
    </ul>
)

export default Tasks;