import { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("updated");
  }

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}NOK</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </li>
  );
}

export default ExpenseItem;
