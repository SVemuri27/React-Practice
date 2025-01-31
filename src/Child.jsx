import React, { createContext, useContext } from 'react';
import Parent from './Parent';

export const userContent = createContext("");

const ChildE = () => {
    const userData = "John"; 

    return (
        <userContent.Provider value={userData}>
           <Parent />
        </userContent.Provider>
    );
}

export default ChildE;
