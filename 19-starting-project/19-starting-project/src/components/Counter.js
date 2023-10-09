import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  function incrementHandler(){
    dispatch({type: "increment"});
  }

  function decrementHandler(){
    dispatch({type: "decrement"});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
