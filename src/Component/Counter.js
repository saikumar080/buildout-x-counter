import React, { useState } from "react";
const  Counter=()=>{
    const[count, setCounter]=useState(0);
    const handleIncrement=()=>{
        setCounter(prevCount=> prevCount+1)
    }
    const handleDecrement=()=>{
        setCounter(prevCount=> prevCount-1)
    }
    return(
        <div>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button style={{margin:10}} onClick={handleIncrement}>Increment</button>
            <button style={{margin:10}} onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
export default Counter;