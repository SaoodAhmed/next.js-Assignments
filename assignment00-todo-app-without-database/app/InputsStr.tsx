"use client";

import { useState } from "react"; // useState; is used to maintain variable state or any change occur in the variable


export default function todoApp(){
  const [val, Setval] = useState('value1'); // it's hook that, use to maintain variable state(dynamically) any change occur in the value of variable it maitians
  const [val2, setVal2] = useState('value2')
  return <>
      <input type="text" value={val} onChange={ (e:any)=>{
        console.log(e.target.value)
        Setval(e.target.value);

}}/><br/><br/>

  <input type = {"text"} value = {val2} onChange={(e:any)=>{
    console.log(e.target.value)
    setVal2(e.target.value)
  }}/><b/><p>string length 1: {val.length}</p> <b/> <p>string lenth 2: {val2.length}</p>

  </> // fragments
}