import React from 'react';
import { useReducer } from "react"
import counterReducer from "./CounterReducer";

const Child2 = () => {
    let [state,dispatch] = useReducer(counterReducer, 10);
    console.log(state)
    return(
        <div>
            <h2>the value is :{state}</h2>
            <button onClick={() => dispatch('Decreament') }>Increament value</button>
        </div>
    )
}
export default Child2;