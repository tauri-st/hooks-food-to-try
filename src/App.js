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

  const deleteFood = (foodToDelete) => {
    const updatedFoods = foodsToTry.filter(function (item) {
      return item.!includes(foodToDelete);
    })
    setFoodsToTry(updatedFoods);

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
      <ul className="food-list">
        {foodsToTry.map((food, index) => (
          <Food key={index} food={food}/>
        ))};
      </ul>
    </div>
  );
}
