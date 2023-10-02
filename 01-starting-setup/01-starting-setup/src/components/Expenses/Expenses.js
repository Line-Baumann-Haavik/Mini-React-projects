
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const newArray = props.item.filter((object) => {
    return object.date.getFullYear().toString() === filteredYear;
  });

  function filterYear(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <div className="expenses">
      <ExpensesFilter onChangeFilter={filterYear} selected={filteredYear} />
      <ExpensesChart expenses={newArray} />
      <ExpensesList items={newArray} />
    </div>
  );
}
