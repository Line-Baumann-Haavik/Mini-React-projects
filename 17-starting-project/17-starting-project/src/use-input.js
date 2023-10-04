import { useState } from "react";

export default function useInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [IsTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const harError = !valueIsValid && IsTouched;

  function valueChangeHandler(event) {
    setEnteredValue(event.target.value);
  }

  function inputBlurHandler(event) {
    setIsTouched(true);
  }

  function reset(){
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    vaule: enteredValue,
    isValid: valueIsValid,
    harError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
}
