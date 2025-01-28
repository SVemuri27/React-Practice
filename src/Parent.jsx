import React, { createContext } from "react";
import { useState } from "react";
import ChildE from "./Child";
export const Content  = createContext("");//
const Parent = () => {
    const data= "sucharitha"
    // const [data, setData] = useState("hello");//
    // const [num, setNum] = useState(25);
  
    return (
      <div style={{border: "1px solid black"}}>
        <h1 >Parent Component</h1>
        <Content.Provider value = {data}>
        <ChildE />
        </Content.Provider>  
        {/* <ChildE /> */}
     
      </div>
    );

  };
  
export default Parent;