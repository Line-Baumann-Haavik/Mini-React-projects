import Header from "./Components/Header";
import InputField from "./Components/InputField";
import Buttons from "./Components/Buttons";
import { useState } from "react";
import Tabell from "./Components/Tabell";

function App() {
  const [savings, setSavings] = useState(0);
  const [yearly, setYearly] = useState(0);
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState(0); 
  const[output, setOutput]  = useState(null);
  let initialinvestment = 0;

  function calculateHandler(userInput) {

    initialinvestment = userInput["current-savings"];

    const yearlyData = []; 

    let currentSavings = +userInput["current-savings"]; 
    const yearlyContribution = +userInput["yearly-contribution"]; 
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
      
    }
    setOutput(yearlyData);
  
  }

  function changeHandler(id, text) {
    if (id === 0) {
      
    } else {
      if (id === "current-savings") {
        setSavings(text);
      } else if (id === "yearly-contribution") {
        setYearly(text);
      } else if (id === "expected-return") {
        setInterest(text);
      } else {
        setDuration(text);
      }
    }
  }
  function resetHandler() {
    setSavings(0);
    setYearly(0);
    setInterest(0);
    setDuration(0);
    setOutput(null);
  }

  function submitHandler(){
    calculateHandler({
      "current-savings": savings,
      "yearly-contribution": yearly,
      "expected-return": interest,
      "duration": duration
    })
  }

  return (
    <div>
      <Header />
      <form className="form">
        <div className="input-group">
          <InputField
            label={"Current Savings ($)"}
            id={"current-savings"}
            changes={changeHandler}
            value={savings}
          />
          <InputField
            label={"Yearly Savings ($)"}
            id={"yearly-contribution"}
            changes={changeHandler}
            value={yearly}
          />
        </div>
        <div className="input-group">
          <InputField
            label={"Expected Interest (%, per year)"}
            id={"expected-return"}
            changes={changeHandler}
            value={interest}
          />
          <InputField
            label={"Investment Duration (years)"}
            id={"duration"}
            changes={changeHandler}
            value={duration}
          />
        </div>
        <Buttons onReset={resetHandler} onSubmit={submitHandler} />
      </form>

      {!output && <p className="table-negative">No data</p>}
      {output && <Tabell data={output} initial={initialinvestment} />}
    </div>
  );
}

export default App;
