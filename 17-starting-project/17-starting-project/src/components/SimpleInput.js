import {useState} from "react";

export default function SimpleInput(props) {
  const [enteredName, setEnteredName] = useState("");

  function nameInputChangeHandler(event){
    setEnteredName(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();

    if(enteredName.trim() === ""){
      return;
    }

    console.log(enteredName);
    setEnteredName("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

