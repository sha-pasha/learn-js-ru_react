import {MenuListItem} from "./MenuListItem.jsx";


export function Menu({restaurant}) {
  const {menu} = restaurant;

  return (
    <>
      <h3>Menu</h3>
      <ul className="menu">
        {menu.map((dish) => (
          <MenuListItem dish={dish} key={dish.id}/>
        ))}
      </ul>
    </>
  )
}