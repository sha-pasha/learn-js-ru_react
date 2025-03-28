import {Menu} from "../Menu/Menu.jsx";
import {Review} from "../Review/Review.jsx";
import {ReviewForm} from "../ReviewForm/ReviewForm.jsx";


export function Restaurant({restaurant}) {

  return (
    <div className="restaurant-card">
      <h2 style={{textAlign: 'center'}}>{restaurant.name}</h2>

      <Menu restaurant={restaurant}/>

      <h3>Reviews</h3>
      <ul className="reviews-list">
        {restaurant.reviews.map((review) => (
          <Review key={review.id} review={review}/>
        ))}
      </ul>
      <ReviewForm />
    </div>
  )
}