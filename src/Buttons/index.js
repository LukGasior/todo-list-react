import "./style.css";

const Buttons = (props) => {

    if(props.tasks.some(({done}) => done)) {
       return ( 
       <span className="form--buttons">
    <>
       <button className="form__fieldset--button">
           {props.taskHide ? "Pokaż ukończone" : "Ukryj ukończone"}
       </button>
       <button 
       className="form__fieldset--button"
       disabled={props.tasks.every(({done}) => done)}
       >Ukryj Wszystkie</button>
       
   </>
   </span> )
    }
}








export default Buttons;