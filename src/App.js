import React, { useState } from "react";
import NewFoodInput from "./NewFoodInput";
import "./styles.css";

export default function App() {
  //5.Create state with an initial value of an empty array
  const [ foodsToTry, setFoodsToTry ] = useState([]);
  /*6. Update state by adding a function to accept a food and 
  call the setFoodsToTry function to add it to the foodsToTry 
  array*/
  const addFoodItem = (food) => {
    setFoodsToTry(foodsToTry.concat(food));
  }
  return (
    <div className="App">
      <h1>New Foods to Try</h1>
      {/*8. Pass the addFoodItem function as a prop to the NewFoodInput component*/}
      <NewFoodInput addFoodItem={addFoodItem} />
      {/*7. Render an Array Data Model: Map over the foodstoTry 
      array and output a list item for each food*/}
      <ul className="food-list">
        {foodsToTry.map((food, index) => (
          <li key={index}>{food}</li>
        ))};
      </ul>
    </div>
  );
}
