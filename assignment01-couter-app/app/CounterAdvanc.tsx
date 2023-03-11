"use client";

import { useState } from "react";


export default function counterAdvace(){

    const [counter, setCounter] = useState(0);

    const decr = (youWantToDecBy = 1)=>{
        setCounter(counter-youWantToDecBy);
    };
    const incer = (youWantToIncBy = 1)=>{
        setCounter(counter+youWantToIncBy);
    }
    
    return (
        <>
        <button onClick={()=>decr(1)}>Decrement by 1</button>
        <button onClick={()=>decr(2)}>Decrement by 2</button>
        <button onClick={()=>decr(3)}>Decrement by 3</button>
        {counter}
        <button onClick = {()=>incer(1)}>Increment by 1</button>
        <button onClick={()=>incer(2)}>Increment by 2</button>
        <button onClick={()=>incer(3)}>Increment by 3</button>

        </>
    )
    
}

