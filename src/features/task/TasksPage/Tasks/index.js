import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom"
import { List, Item, Content, Button } from "./style"
import { selectByQuery, toggleTaskDone, removeTask, selectTaskHide } from "../../tasksSlice";

const Tasks = () => {

    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const tasks = useSelector(state => selectByQuery(state, query));
    const taskHide = useSelector(selectTaskHide);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map((task) => (
                <Item
                    key={task.id}
                    hidden={task.done && taskHide}
                >
                    <Button
                        taskdone={"true"}
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        ✔
                    </Button>

                    <Content
                        done={task.done ? "false" : undefined} >
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </Content>

                    <Button
                        taskremove={"true"}
                        onClick={() => dispatch(removeTask(task.id))}

                    >
                        🗑
                    </Button>


                </Item>
            ))}
        </List>
    );
};
export default Tasks;