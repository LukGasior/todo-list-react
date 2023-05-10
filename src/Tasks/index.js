import { List, Item, Content, Button } from "./style"

const Tasks = (props) => (
    <List>
        {props.tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && props.taskHide}
            >
                <Button
                    onClick={() => props.toggleTaskDone(task.id)}
                    buttonDone
                >
                    ✔
                </Button>

                <Content
                    done={task.done} >
                    {task.content}
                </Content>

                <Button
                    onClick={() => props.removeTask(task.id)}
                    buttonRemove
                >
                    🗑
                </Button>


            </Item>
        ))}
    </List>
)

export default Tasks;