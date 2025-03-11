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
                    {item.menu.map(({id, name, price, ingredients}) => (
                        <li key={id}>
                            <p>
                                {name} - ${price}
                            </p>
                            <i>
                                {ingredients.join(', ')}
                            </i>
                        </li>
                    ))}
                </ul>
                <h3>Reviews</h3>
                <ul className="reviews-list">
                    {item.reviews.map(({id, user, text}) => (
                        <li key={id} className="review">
                            <h5 className="review-user">
                                {user}
                            </h5>
                            <i>
                                {text}
                            </i>
                        </li>
                    ))}
                </ul>
            </div>
        ))
        }
    </div>
)