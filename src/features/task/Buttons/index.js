import { Wrapper, Button } from "./style";
import { selectTasks, toggleTaskHide } from "../tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const Buttons = ({ setAllDone }) => {
    const { tasks, taskHide } = useSelector(selectTasks);
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
                        onClick={setAllDone}
                        disabled={tasks.every(({ done }) => done)}
                    >Ukończ wszystkie</Button>

                </>
            </Wrapper>)
    }
}








export default Buttons;