import { useState } from "react";

export default function SimpleInput(props) {
  const [enteredName, setEnteredName] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const isValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !isValid && inputIsTouched;
  let formIsValid = false;

    if(isValid){
      formIsValid = true;
    }

  function nameInputChangeHandler(event) {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
    }
  }

  function inputBlurHandler(event){
    setInputIsTouched(true);
  }

  function submitHandler(event) {
    event.preventDefault();
    setInputIsTouched(true);

    if (!isValid) {
      return;
    }

    setEnteredName("");
    setInputIsTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={inputBlurHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Name can not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}
