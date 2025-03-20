import {Counter} from "../Counter/Counter.jsx";
import {useCount} from "./useCount.js";

export const DishCounter = () => {
    const {count, increment, decrement} = useCount();

    return (
        <Counter count={count} decrement={decrement} increment={increment}/>
    )
}