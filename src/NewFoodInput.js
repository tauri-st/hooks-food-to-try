import React, { useState } from "react";

//9. Make sure the component accepts props as a parameter
const NewFoodInput = (props) => {
  /*1. create a variable to keep track of the state of the food 
  item the user types in the input. Set the initial value of 
  the useState() to an empty string: ("").*/
  const [ food, setFood ] = useState("");
  {/*4. Create an updateFood function to call the setFood 
updater function by passing it the onChange event below*/}
  const updateFood = (e) => {
    setFood(e.target.value);
  };
  /*10. Create a handleSubmit function which will fire
  whenever the user clicks on the "Add to the list" button*/
const handleSubmit = (e) => {
    e.preventDefault();
    // 12. Check if food is blank so blank food items can't
    // be added
    // 13. Use the addFoodItem function from the App component 
    // and give it the food you’ve kept in state
    if (food !== "") {
      props.addFoodItem(food);
    }
    //14. Reset state to food to blank
    setFood("");
  };

  return (
    //11. Add an onSubmit handler with handleSubmit as a value
    <form className="food-form" onSubmit={handleSubmit}>
      {/*2. Add the value and attribute that is equal to the food state value*/}
      {/*3. Add on onChange handler*/}
      <input type="text" value={food} onChange={updateFood}/>
      <button>Add to the list!</button>
    </form>
  );
};

export default NewFoodInput;
