import {useState} from "react";

export default function SimpleInput(props) {
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(true);

  function nameInputChangeHandler(event){
    setEnteredName(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();

    if(enteredName.trim() === ""){
      setIsValid(false);
      return;
    }

    setIsValid(true);

    console.log(enteredName);
    setEnteredName("");
  }

  const nameInputClasses = isValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
        {!isValid && <p className="error-text">Name can not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

