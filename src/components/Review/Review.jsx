export function Review({review}) {
  const {user, text} = review;

  return (
    <li className="review">
      <h5 className="review-user">
        {user}
      </h5>
      <i>
        {text}
      </i>
    </li>
  )
}