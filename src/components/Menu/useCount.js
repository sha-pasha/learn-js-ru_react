import {useState} from "react";

const MIN_COUNTER = 0;
const MAX_COUNTER = 5

export function useCount() {
    const [count, setCount] = useState(MIN_COUNTER);
    const increment = () => setCount(Math.min(count + 1, MAX_COUNTER));
    const decrement = () => setCount(Math.max(count - 1, MIN_COUNTER));
    return {count, increment, decrement};
}