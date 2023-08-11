import { useState } from "react";
import * as React from "react"

export default function Question({question}){
    const [isOpen, setOpen] = useState(false);
    return(
        <section>
            <div className={isOpen ? "open" : "closed"}>
                <h4 className="questionheading">{question.text}</h4>
                <button className="questionbutton" onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
            </div>
            {isOpen && <p>{question.info}</p>}
        </section>
    );
}