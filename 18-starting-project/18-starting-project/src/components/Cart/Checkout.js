import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

function isEmpty(value){
  return(value.trim() === "");
}

function correctLength(number){
  return(number.trim().length === 4);
}

export default function Checkout(props){

  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true
  });
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();


  function confirmHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = correctLength(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalCodeIsValid,
      city: enteredCityIsValid
    });

    if(enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid){
      props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity
      });
    }else{
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formValidity.name ? "" : classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formValidity.name && <p className={classes.errormessage}>Please enter a valid name!</p>}
      </div>
      <div className={`${classes.control} ${formValidity.street ? "" : classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formValidity.street && <p className={classes.errormessage}>Please enter a valid street!</p>}
      </div>
      <div className={`${classes.control} ${formValidity.postal ? "" : classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!formValidity.postal && <p className={classes.errormessage}>Please enter a valid postal code(4characters long)!</p>}
      </div>
      <div className={`${classes.control} ${formValidity.city ? "" : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formValidity.city && <p className={classes.errormessage}>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
