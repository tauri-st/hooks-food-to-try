import React, { useState } from "react";
import NewFoodInput from "./NewFoodInput";
import Food from "./Food";
import "./styles.css";

//This file owns the state that updates the food list
export default function App() {
  //5.Create state with an initial value of an empty array
  const [ foodsToTry, setFoodsToTry ] = useState([]);
  /*6. Update state by adding a function to accept a food and 
  call the setFoodsToTry function to add it to the foodsToTry 
  array*/
  const addFoodItem = (food) => {
    setFoodsToTry(foodsToTry.concat(food));
  }

  // D. Create a function to delete a food and accept 
  // foodToDelete as a parameter
  // E. Filter through the foodsToTry array and return only 
  // the items that aren’t the foodToDelete item.
  // F. Save this new filtered array to a variable named 
  // updatedFoods and pass it to the setFoodsToTry updater 
  // function.
  const deleteFood = (foodToDelete) => {
    const updatedFoods = foodsToTry.filter(function (food) {
      return !food.includes(foodToDelete);
    })
    setFoodsToTry(updatedFoods);
    //Pass deleteFood as a prop to the Food Component in the return statement below
  }
  return (
    <div className="App">
      <h1>New Foods to Try</h1>
      {/*8. Pass the addFoodItem function as a prop to the NewFoodInput component*/}
      <NewFoodInput addFoodItem={addFoodItem} />
      {/*7. Render an Array Data Model: Map over the foodstoTry 
      array and output a list item for each food*/}
      {/*A. Use the Food component instead of outputting a list item
      B. Pass food as a prop*/}
      {/* G. You’ll need to pass deleteFoods to the Food 
      component. Pass deleteFood as a prop */}
      <ul className="food-list">
        {foodsToTry.map((food, index) => (
          <Food key={index} food={food} deleteFood={deleteFood}/>
        ))};
      </ul>
    </div>
  );
}
