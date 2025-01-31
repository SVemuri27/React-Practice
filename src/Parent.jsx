import React, { useContext } from 'react';
import ChildE, { userContent } from './Child';

const Parent = () => {
    const newContent = useContext(userContent);

    return (
        <div style={{ border: "1px solid black" }}>
           
            <h2>Received from ChildE: {newContent}</h2>
            {/* <ChildE /> */}
        </div>
    );
}

export default Parent;
