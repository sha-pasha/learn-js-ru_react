import {Counter} from "../Counter/Counter.jsx";

export function MenuListItem({dish}) {
  const {name, price, ingredients} = dish;

  return (
    <li>
      <p>
        {name} - ${price}
      </p>
      <i>
        {ingredients.join(', ')}
      </i>
      <Counter />
    </li>
  )
}