import { useState } from "react";
import React from "react";
function Updated(){
    const[profile, setprofile]=useState({
        name:"sucharitha",
        year:"2001",
        place:"hyd",   
    });
    const updateYear= ()=>{
setprofile(previousState =>{
return{previousState, year:"2002"}
});
    }
    return(
        <>
        <p>my name is {profile.name} and year {profile. year} form{profile.place}</p>
        <button type="button" onClick={updateYear}>updated</button>
        </>
    )
}
export default Updated;