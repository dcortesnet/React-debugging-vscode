import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("Activate increment");
    setCount(count + 1);
  };

  const decrement = () => {
    console.log("Activate decrement");
    setCount(count - 1);
  };

  return (
    <>
      <h1>Vite + React + Debugger</h1>
      <h2>The count is: {count}</h2>
      <div className="card">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
      </div>
    </>
  );
}

export default App;
