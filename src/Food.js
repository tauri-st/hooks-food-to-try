import React from "react";

//C. Accept food as a prop from App.js and use it in the JSX
const Food = (props) => {

    const onDelete = () => {
        props.deleteFood(props.food)
    };

    return <li>{props.food}
    {/*H. Add a span element with a class of delete.*/}
    {/*I. Add an onClick event handler to the span which will 
    fire (AKA call) the deleteFood function when passed as a 
    prop to the Food component from App.js. Remember that the 
    deleteFood function needs a food item which you also have 
    access to via props. You can either do this by creating a 
    separate handleClick function that will call the deleteFood 
    function and have your onClick event fire that separate 
    function. Or, you can pass a callback function to the 
    onClick event directly that will call the deleteFood function. */}
    <span className="delete" onClick={onDelete}>X</span></li>
    
};

export default Food;