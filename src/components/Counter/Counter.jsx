import {useCount} from "./useCount.js";


export function Counter() {
  const {count, increment, decrement} = useCount();

  return (
    <div className="counter">
      <div onClick={() => decrement()}>-</div>
      {count}
      <div onClick={() => increment()}>+</div>
    </div>
  )
}