import {createRoot} from 'react-dom/client';
import {restaurants} from './mock';

const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render(
    <div className='container'>
        {restaurants.map(item => (
            <div key={item.id} className="restaurant-card">
                <h2 style={{textAlign: 'center'}}>{item.name}</h2>
                <h3>Menu</h3>
                <ul className="menu">
                    {item.menu.map(dish => (
                        <li key={dish.id}>
                            <p>
                                {dish.name} - ${dish.price}
                            </p>
                            <i>
                                {dish.ingredients.join(', ')}
                            </i>
                        </li>
                    ))}
                </ul>
                <h3>Reviews</h3>
                <ul className="reviews-list">
                    {item.reviews.map(review => (
                        <li key={review.id} className="review">
                            <h5 className="review-user">
                                {review.user}
                            </h5>
                            <i>
                                {review.text}
                            </i>
                        </li>
                    ))}
                </ul>
            </div>
        ))
        }
    </div>
)