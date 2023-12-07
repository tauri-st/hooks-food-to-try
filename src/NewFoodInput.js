import React from "react";
import React, { useState } from "react";

const NewFoodInput = () => {
  /*create a variable to keep track of the state of the food 
  item the user types in the input. Set the initial value of 
  the useState() to an empty string: ("").*/
  const [ food, setFood ] = useState("");
  return (
    <form className="food-form">
      {/*Add the value and attribute that is equal to the food state value*/}
      <input type="text" value={food} />
      <button>Add to the list!</button>
    </form>
  );
};

export default NewFoodInput;
