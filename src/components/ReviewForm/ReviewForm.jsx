import {useForm} from "./useForm.js";
import {Counter} from "../Counter/Counter.jsx";

export const ReviewForm = () => {
  const {
    form,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clearForm
  } = useForm();

  const {name, text, rating} = form;

  return (
    <form
      className="form"
      onSubmit={e => e.preventDefault()}
    >
      <label>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        <span>Text</span>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      <label>
        <span>Rating</span>
        <Counter
          count={rating}
          increment={incrementRating}
          decrement={decrementRating}
        />
      </label>

      <button onClick={clearForm}>Clear</button>
    </form>
  )
}