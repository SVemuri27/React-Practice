import React from "react";
import { useState } from "react";
function State(){
const[count, setCount]= useState(0)
function updatedCount(){
    setCount(count+1)
}
return(
    <>
    
    <h1>{count}</h1>
    <button type="button" onClick={updatedCount}>count</button>
    </>
)
}
export default State