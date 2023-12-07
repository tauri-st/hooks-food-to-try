import React, { useState } from "react";
import NewFoodInput from "./NewFoodInput";
import "./styles.css";

export default function App() {
  //1.Create state with an initial value of an empty array
  const [ foodsToTry, setFoodsToTry ] = useState[];
  return (
    <div className="App">
      <h1>New Foods to Try</h1>
      <NewFoodInput />
      <ul className="food-list"></ul>
    </div>
  );
}
