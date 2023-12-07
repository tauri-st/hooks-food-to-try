import React, { useState } from "react";

const NewFoodInput = () => {
  /*1. create a variable to keep track of the state of the food 
  item the user types in the input. Set the initial value of 
  the useState() to an empty string: ("").*/
  const [ food, setFood ] = useState("");
  {/*4. Create an updateFood function to call the setFood 
updater function by passing it the onChange event below*/}
  function updateFood (e) {
    setFood(e.target.value);
  };
  return (
    <form className="food-form">
      {/*2. Add the value and attribute that is equal to the food state value*/}
      {/*3. Add on onChange handler*/}
      <input type="text" value={food} onChange={updateFood}/>
      <button>Add to the list!</button>
    </form>
  );
};

export default NewFoodInput;
