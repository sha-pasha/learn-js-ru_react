export function Counter({count, increment, decrement}) {

  return (
    <div className="counter">
      <div onClick={decrement}>-</div>
      {count}
      <div onClick={increment}>+</div>
    </div>
  )
}