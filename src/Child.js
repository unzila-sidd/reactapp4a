import React, { useContext } from 'react';
import counterContext from './CounterContext';
const Child = () => {
    let counterValue = useContext(counterContext) 
    // console.log(counterValue)
    return(
        <div>
        <h1>this is first child </h1>
        <h2>counter value is {counterValue}</h2>
        </div>
    )
}
export default Child;