import { useState } from "react";
import useInput from "../use-input";

export default function SimpleInput(props) {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput((value) => value.trim() !== "");
  const [enteredEmail, setEnteredEmail] = useState("");
  const isValidEmail = enteredEmail.indexOf("@") > -1;
  let formIsValid = false;
  if (enteredNameIsValid && isValidEmail) {
    formIsValid = true;
  }

  function emailInputChangeHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetName();
  }

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className="error-text">Name can not be empty</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className="error-text">E-mail can not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}
