import './App.css';
import { useState } from "react";


const reviews = ["https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
"https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
 "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"];



export default function MyApp(){
  const [current, setCurrent] = useState(0);

  function next(){
    setCurrent(current === reviews.length - 1? 0 : current + 1);
  }
  
  function previous(){
    setCurrent(current === 0 ? reviews.length - 1 : current - 1);
  }

    return(
        <div className='test'> 
          <h1>Welcomes!</h1>
          <div className='tekstbolk'>
            <button className='backbutton' onClick={previous}>Forrige</button>
            <button className='forwardbutton' onClick={next}>Neste</button>
          {reviews.map(
            (review, index) =>
            current === index && (
              <div key={review} className='tekstbolk'>
                <img src={review} alt="review" />
              </div>
            )
          )}
          </div>
        </div>
    );
}


