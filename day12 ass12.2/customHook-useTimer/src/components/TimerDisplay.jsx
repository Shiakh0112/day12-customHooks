// src/components/TimerDisplay.js
import React from "react";
import useTimer from "../hooks/useTimer";

const TimerDisplay = () => {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer: {timer} seconds</h1>
      <p>{isRunning ? "Running" : "Stopped"}</p>

      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerDisplay;
