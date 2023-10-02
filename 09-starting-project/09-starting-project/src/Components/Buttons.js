import "../index.css";

export default function Buttons(props){

  function cancelHandler(){
    props.onReset();
  }
  function pushHandler(event){
    event.preventDefault();
    props.onSubmit();
  }
    return(
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={cancelHandler}>
            Reset
          </button>
          <button type="submit" className="button" onClick={pushHandler}>
            Calculate
          </button>
        </p>
    )
}