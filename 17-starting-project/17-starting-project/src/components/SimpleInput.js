import { useEffect, useState } from "react";

export default function SimpleInput(props) {
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  useEffect(() => {
    if(isValid){
      console.log("Name is valid:)");
    }
  }, [isValid]);

  function nameInputChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    setInputIsTouched(true);

    if (enteredName.trim() === "") {
      setIsValid(false);
      return;
    }

    setIsValid(true);

    console.log(enteredName);
    setEnteredName("");
  }

  const nameInputIsInvalid = !isValid && inputIsTouched;

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
        />
        {nameInputIsInvalid && <p className="error-text">Name can not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
}
