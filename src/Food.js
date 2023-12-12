import React from "react";

//C. Accept food as a prop from App.js and use it in the JSX
const Food = (props) => {

    const onDelete = () => {
        props.deleteFood(props.food)
    };

    return <li>{props.food}
    <span className="delete" onClick={onDelete}>X</span></li>
    
};

export default Food;