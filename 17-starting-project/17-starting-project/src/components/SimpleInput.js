import {useState, useRef} from "react";

export default function SimpleInput(props) {
  const [enteredName, setEnteredName] = useState("");

  function nameInputChangeHandler(event){
    setEnteredName(event.target.value);
  }

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

