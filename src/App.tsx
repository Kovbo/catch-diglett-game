import { useEffect, useState } from "react";
import "./App.css";
import emptyHole from "../src/assets/img1.png";
import nonEmptyHole from "../src/assets/img3.png";

function App() {
  const [count, setCount] = useState(0);
  const [currentHole, setCurrentHole] = useState(0);
  const [speed, setSpeed] = useState(800);
  const [randimizer] = useState(20);

  useEffect(() => {
    let loop = setInterval(() => {
      setCurrentHole(Math.floor(Math.random() * randimizer));
    }, speed);

    return () => {
      clearInterval(loop);
    };
  }, [speed, randimizer]);

  function handleCatch(number: number) {
    if (number === currentHole) {
      setCount((count) => count + 1);
      setCurrentHole(-1);
    }
  }

  return (
    <>
      <div className="flex">
        <button onClick={() => setSpeed(2000)}>Easy</button>
        <button onClick={() => setSpeed(750)}>Medium</button>
        <button onClick={() => setSpeed(600)}>Hard</button>
      </div>
      <p className="score">Score - {count}</p>

      <div className="grid">
        {[...Array(9).keys()].map((number) => {
          return (
            <img
              onClick={() => handleCatch(number)}
              key={number}
              src={number === currentHole ? nonEmptyHole : emptyHole}
              className="hole"
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
