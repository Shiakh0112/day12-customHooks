// src/hooks/useToggleItems.js
import { useState } from "react";

const useToggleItems = (initialValue = [], initialPosition = 0) => {
  const [index, setIndex] = useState(initialPosition); // Index of the current item in the array

  // Toggle the current state to the next item in the array
  const toggleState = () => {
    setIndex((prevIndex) => (prevIndex + 1) % initialValue.length); // Cycle through the array
  };

  return [initialValue[index], toggleState]; // Return the current item and the toggle function
};

export default useToggleItems;
