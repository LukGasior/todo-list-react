import "./style.css";

const Tasks = (props) => (
    <ul className="section__list">
        {props.tasks.map(task => (
            <li className={`form__list--bottom ${task.done && props.taskHide ?
                " form__list--decorationHidden" : ""}`}
                key={task.id}
            >
                <button className="form___buttonDone">✔</button>
                <span className={`${task.done ? " form__list--decoration" : ""}`}>
                    {task.content}</span>
                <button className="form__buttonRemove">🗑</button>


            </li>
        ))}
    </ul>
)

export default Tasks;