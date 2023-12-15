import React from "react";

//C. Accept food as a prop from App.js and use it in the JSX
const Food = ({name}) => {

    return <li>{name}</li>
    
};

export default Food;