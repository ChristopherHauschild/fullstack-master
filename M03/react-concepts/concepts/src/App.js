import React, { useState, useEffect } from "react";
import "./App.css";

import Counter from "./components/Counter";
import Timer from "./components/Timer";

function App() {
  const [counter, setCounter] = useState(10);
  const [timer, setTimer] = useState(counter);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((old) => {
        if (old > 0) {
          return old - 1;
        }
        return old;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  const changeValues = () => {
    setCounter(counter + 1);
    setTimer(counter + 1);
  };

  return (
    <div className="App">
      <h1 onClick={changeValues}>Hello React!</h1>
      <Counter counter={counter} />
      <Timer timer={timer} />
    </div>
  );
}

export default App;
