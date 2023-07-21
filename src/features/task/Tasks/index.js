import { List, Item, Content, Button } from "./style"

const Tasks = (props) => (
    <List>
        {props.tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && props.taskHide}
            >
                <Button
                    taskdone={"true"}
                    onClick={() => props.toggleTaskDone(task.id)}
                >
                    ✔
                </Button>

                <Content
                    done={task.done ? "false" : undefined} >
                    {task.content}
                </Content>

                <Button
                    taskremove={"true"}
                    onClick={() => props.removeTask(task.id)}

                >
                    🗑
                </Button>


            </Item>
        ))}
    </List>
)

export default Tasks;