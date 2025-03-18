import {useState} from "react";
import {Counter} from "../Counter/Counter.jsx";

const MIN_COUNTER = 0;
const MAX_COUNTER = 5

export const DishCounter = () => {
  const [count, setCount] = useState(MIN_COUNTER);
  const increment = () => setCount( Math.min(count + 1, MAX_COUNTER) );
  const decrement = () => setCount(Math.max(count - 1, MIN_COUNTER) );

  return (
    <Counter count={count} decrement={decrement} increment={increment}/>
  )
}