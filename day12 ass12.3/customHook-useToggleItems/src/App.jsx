// src/components/App.js
import React from "react";
import useToggleItems from "./hooks/useToggleItems";

const App = () => {
  const items = ["A", "B", "C"];
  const [currentItem, toggleItem] = useToggleItems(items, 1); // Starting with item "B"

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current Item: {currentItem}</h1>
      <button onClick={toggleItem}>Toggle Item</button>
    </div>
  );
};

export default App;
