"use client"
import { useState } from "react";

export default function CounterApp(){

    const [counter, setCounter] = useState(0);
    return (
        <>

        <button style={{margin:"0 8px"}} onClick={()=>{
            setCounter(counter-1);
        }}>Decrement</button><b/>
        {counter}
        <button style={{margin:"0 8px"}} onClick={()=>{
            setCounter(counter+1)
        }}>Increment</button>



        </>
    );
}