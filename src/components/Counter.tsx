import {useState} from "react";
import * as classes from "./Counter.module.scss";


export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div >
            <h1>Counter</h1>
            <p>{count}</p>
            <button className={classes.button} onClick={increment}>Increment</button>
        </div>
    )
}
