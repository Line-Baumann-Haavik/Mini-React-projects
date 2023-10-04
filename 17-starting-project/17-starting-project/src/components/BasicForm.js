import useInput from "../use-input";

export default function BasicForm(props) {
  const {
    vaule: firstNameValue,
    isValid: firstNameIsValid,
    harError: firstNameHasError,
    inputBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangeHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    vaule: lastNameValue,
    isValid: lastNameIsValid,
    harError: lastNameHasError,
    inputBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    vaule: emailValue,
    isValid: emailIsValid,
    harError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let validSubmission = false;

  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    validSubmission = true;
  }

  function submitHandler(event){
    event.preventDefault();

    firstNameReset();
    lastNameReset();
    emailReset();

  }

  let firstNameClasses = firstNameHasError ? "form-control invalid" : "form-control ";
  let lastNameClasses = lastNameHasError ? "form-control invalid" : "form-control ";
  let emailClasses = emailHasError ? "form-control invalid" : "form-control ";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="firstname" onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstNameValue} />
          {firstNameHasError && <p className="error-text">First name can not be empty!</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="lastname" onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastNameValue} />
          {lastNameHasError && <p className="error-text">Last name can not be empty!</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailValue} />
        {emailHasError && <p className="error-text">Plese write a valid e-mail adress!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!validSubmission}>Submit</button>
      </div>
    </form>
  );
}
