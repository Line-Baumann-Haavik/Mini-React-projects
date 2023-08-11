import * as React from "react"
import Question from "./Question";

export default function App(){
  return(
    <div className="outer">
      <h2 className="heading">FAQ Project</h2>
      <div className="inner">
        <h3>Frequently asked Questions</h3>
        <div className="questionsconatiner">
          {questions.map((question) =>
            (<Question key={question.id} question={question}/>)
          )}
        </div>
      </div>
    </div>
  )
}

const questions = [
  {
    id: 1,
    text: "How much does shipping cost",
    info: "Shipping will cost between 50NOK and 100NOK depending on what shipping option you choose."
  },
  {
    id: 2,
    text: "How fast will I get my package",
    info: "Shipping times are usually 5-7 days unless there is a shopping holiday"
  },
  {
    id: 3,
    text: "Washing instructions",
    info: "Wash at 40 degress Celcius with other clothes of similar colours."
  }
];
