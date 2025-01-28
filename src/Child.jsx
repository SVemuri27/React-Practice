import React from 'react';
import { useContext } from "react";
import { Content } from './Parent';
const ChildB = () => {
  return (
    <div>
      componentb
      <ChildC />
    </div>
  )
}

export default ChildB;

const ChildC = () =>{
    return (
        <div>
    Componentc
    <ChildD/>
        </div>
    )
}
export { ChildC};

const ChildD = () =>{
    return(
        <div>
            componentd
            <ChildE/>
        </div>
    )
}
export { ChildD};

const ChildE = () =>{
    const newContent = useContext(Content);
    return(
        <div>
<h1>The new content is {newContent}</h1>
{/* <h2>The square for {newContent} is {newContent**2}</h2> */}
        </div>
    )
}
export { ChildE};