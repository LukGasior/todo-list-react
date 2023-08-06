import { useDispatch, useSelector } from "react-redux";
import { List, Item, Content, Button } from "./style"
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const Tasks = () => {
    const { taskHide, tasks } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
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
                        {task.content}
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
    )
}

export default Tasks;