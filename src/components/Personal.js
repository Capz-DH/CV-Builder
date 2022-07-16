import React from "react";

const Personal = (props) => {
    const { firstNameI, lastNameI } = props;
    return (
        <>
         <h1>First Name:</h1>
        <p>{firstNameI}</p>
    
        <h1>Last Name:</h1>
        <p>{lastNameI}</p>
        </>
    );
};

export default Personal