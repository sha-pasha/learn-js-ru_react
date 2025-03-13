import {restaurants} from "../../mock.js";
import {Restaurant} from "../Restaurant/Restaurant.jsx";
import {useState} from "react";
import cn from "classnames";

export function RestaurantPage() {
  const [activeRestaurant, setActiveRestaurants] = useState(restaurants[0].id);

  const findRestaurant = (id) => restaurants.find(item => item.id === id);

  return (
    <div className="container">
      <div className="tabs">
        {restaurants.map(({name, id}) => (
          <div
            key={id}
            onClick={() => setActiveRestaurants(id)}
            className={cn(
              "tab",
              {["active-tab"]: activeRestaurant === id}
            )}
          >
            {name}
          </div>
        ))}
      </div>

      {!!activeRestaurant
        && <Restaurant restaurant={findRestaurant(activeRestaurant)}/>
      }
    </div>
  )
}