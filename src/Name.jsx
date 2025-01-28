import { useState } from "react";
import React from 'react';
function Details(){
    const[name, setName]= useState("sucharitha")

return(
    <>
    <h1>My name is {name}</h1>
    <button type="button" onClick={()=> setName ("jyothi")}>click</button>
    </>
)
}
export default Details;