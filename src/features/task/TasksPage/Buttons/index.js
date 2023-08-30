import { Wrapper, Button } from "./style";
import { selectTasks, toggleTaskHide, setAllDone, selectTaskHide } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const Buttons = () => {
    const tasks  = useSelector(selectTasks);
    const taskHide  = useSelector(selectTaskHide);
    const dispatch = useDispatch();

    if (tasks.some(({ done }) => done)) {
        return (
            <Wrapper>
                <>
                    <Button
                        onClick={() => dispatch(toggleTaskHide())}
                    >
                        {taskHide ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >Ukończ wszystkie</Button>

                </>
            </Wrapper>)
    }
}








export default Buttons;