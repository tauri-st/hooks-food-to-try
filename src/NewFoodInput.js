import React from "react";
import React, { useState } from "react";

const NewFoodInput = () => {
  /*create a variable to keep track of the state of the food 
  item the user types in the input. Set the initial value of 
  the useState() to an empty string: ("").*/
  const [ food, setFood ] = useState("");
  return (
    <form className="food-form">
      <input type="text" />
      <button>Add to the list!</button>
    </form>
  );
};

export default NewFoodInput;
