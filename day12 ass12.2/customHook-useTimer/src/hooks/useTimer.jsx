// src/hooks/useTimer.js
import { useState, useRef } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0); // Holds the timer value in seconds
  const [isRunning, setIsRunning] = useState(false); // Holds the running state of the timer
  const intervalRef = useRef(null); // Keeps reference to the setInterval ID

  // Start the timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime + 1); // Increment timer by 1 every second
      }, 1000);
    }
  };

  // Stop the timer
  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimer(0);
  };

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
};

export default useTimer;
