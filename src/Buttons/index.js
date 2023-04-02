import "./style.css";

const Buttons = (props) => {

    if (props.tasks.some(({ done }) => done)) {
        return (
            <span className="form--buttons">
                <>
                    <button onClick={props.toggleTaskHide}
                        className="form__fieldset--button">
                        {props.taskHide ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </button>
                    <button
                        onClick={props.setAllDone}
                        className="form__fieldset--button"
                        disabled={props.tasks.every(({ done }) => done)}
                    >Ukończ wszystkie</button>

                </>
            </span>)
    }
}








export default Buttons;