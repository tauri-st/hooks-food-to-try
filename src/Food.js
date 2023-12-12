import React from "react";

//C. Accept food as a prop from App.js and use it in the JSX
const Food = (props) => {
    return <li>{props.food}
    <span class="delete" onClick={deleteFood}>X</span></li>
    
};

export default Food;