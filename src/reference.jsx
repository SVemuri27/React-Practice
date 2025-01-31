
  
import { useRef } from "react";

// import React from 'react'

function Counter() {
  const inputref= useRef(null)

  function handleClick(){
    inputref.current.focus();
    inputref.current.checked = true;
  }
  
  return (
    <form>
    <div style={{border:"1px solid black"}}>
      <h1>useref example</h1>
      <input  type="text" placeholder="Enter your name"/>
      <input type="radio" ref={inputref}  />
      <p>Click the button </p>
      <button type="button"  onClick={handleClick}>Click Me !!!!!</button>
          </div>
          </form>
  )
}

export default Counter
