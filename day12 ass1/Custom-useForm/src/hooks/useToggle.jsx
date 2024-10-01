import { useState } from "react";

// Custom hook to toggle boolean values (e.g., show/hide elements)
export const useToggle = (initialValue = false) => {
  const [isToggled, setIsToggled] = useState(initialValue);

  const toggle = () => {
    setIsToggled((prev) => !prev);
  };

  return [isToggled, toggle];
};
