import * as React from "react"
import "./styles.css"
import { useState, useEffect } from "react"

function getRandomQuote(quotes){
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App(){
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("http://type.fit/api/quotes")
    .then((res) => res.json())
    .then((json) => {
      setQuotes(json);
      setQuote(json[0]);
    });
  }, []);

  function getNewQuote(){
    setQuote(getRandomQuote(quotes));
  }

  return(
    <div className="outer">
      <h2>Welcome!</h2>
      <section className="inner">
        <button onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>"</span>
          {quote?.text}
          <span>"</span>
        </h3>
        <i>- {quote?.author}</i>
      </section>
    </div>
  )
}
