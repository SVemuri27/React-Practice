
import './App.css';
import Example from './Example';
import { useState } from "react";
// import MyButton ,{Hello} from './MyButton';
import Name from './Name';
import Updated from './Updated';
import Effect from './Effect';
// import React, { useState, useEffect } from 'react';
import Fetch from './fetch';
import State  from './State';
import Titles from './Useeffectexp';
// import Parent from './Parent';
import ChildE from './Child';
import Counter from './reference';
// import Test from './Test'
  function App() {
  const [color, setColor] = useState("red");
  let nums = [1,2,3,4,5,6,7,8]
  let fruits = ["apple","banana","cherry " ,"guava"];
  let filterednums = [2,1,3,4,5,66,77,88,98,67,91,18,49,84,78]
  let data = [{
    firstName: "Chidi",
    lastName: "Anagonye",
    phone: "555-366-8987",
    address: "St. John's University, Sydney, Australia"
  },
  {
    firstName: "Chidi",
    lastName: "Anagonye",
    phone: "555-366-8987",
    address: "St. John's University, Sydney, Australia"
  },
  {
    firstName: "Chidi",
    lastName: "Anagonye",
    phone: "555-366-8987",
    address: "St. John's University, Sydney, Australia"
  },
  {
    firstName: "Chidi",
    lastName: "Anagonye",
    phone: "555-366-8987",
    address: "St. John's University, Sydney, Australia"
  },
  {
    firstName: "Chidi",
    lastName: "Anagonye",
    phone: "555-366-8987",
    address: "St. John's University, Sydney, Australia"
  },
]


  return (
    <>
      <h1>My favorite {color} </h1>
      <button  type="button" onClick={() => setColor("blue")} >Blue</button>
      <Name />
      <Updated />
      <Example number = {nums}  iteam={fruits} evennums = {filterednums}  details = {data}/>
      <Fetch />
      <State />
      <Effect />
      {/* <Test /> */}
      {/* <Parent /> */}
      <ChildE />
  <Titles />
  <Counter />
     
     
    </>
  )
}
  
export default App
