import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [switchText, setSwitchText] = useState(false);

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setSwitchText(false);
  }

  function addNewExpenseHandler() {
    setSwitchText(true);
  }

  function cancelNewExpenseHandler() {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setSwitchText(false);
  }

  if (switchText) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelNewExpenseHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  } else {
    return (
      <div className="new-expense__controls">
        <button className="new-expense__addnew" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      </div>
    );
  }
}
