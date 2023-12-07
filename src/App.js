import React, { useState } from "react";
import NewFoodInput from "./NewFoodInput";
import "./styles.css";

export default function App() {
  //1.Create state with an initial value of an empty array
  const [ foodsToTry, setFoodsToTry ] = useState[];
  //2. Add a function to accept a food and add it to the foodsToTry array"
  function addFoodItem (food) {
    foodsToTry.concat(food);
  }
  return (
    <div className="App">
      <h1>New Foods to Try</h1>
      <NewFoodInput />
      {/*3. Map over the foodstoTry array and output a list item
      for each food*/}
      <ul className="food-list">
        const addFoodToList = foodsToTry.map(function (item) {
          return <li>${item}</li>
        });
      </ul>
    </div>
  );
}
