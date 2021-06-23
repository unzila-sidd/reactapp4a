import React, { useContext } from 'react';
import counterContext from './CounterContext';
const Child = () => {
    let counterValue = useContext(counterContext) 
    // console.log(counterValue)
    return(
        <div>
        <h1>this is first child </h1>
        <h2>counter value is {counterValue[0]}</h2>
        <button onClick={() => {counterValue[1](++counterValue[0])}}>Increament</button>
        </div>
    )
}
export default Child;