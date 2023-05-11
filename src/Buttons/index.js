import { Wrapper, Button } from "./style";

const Buttons = (props) => {

    if (props.tasks.some(({ done }) => done)) {
        return (
            <Wrapper>
                <>
                    <Button
                        onClick={props.toggleTaskHide}
                    >
                        {props.taskHide ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </Button>
                    <Button
                        onClick={props.setAllDone}
                        disabled={props.tasks.every(({ done }) => done)}
                    >Ukończ wszystkie</Button>

                </>
            </Wrapper>)
    }
}








export default Buttons;