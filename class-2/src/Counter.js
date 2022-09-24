import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("Initial Value");
  const [finalValue, setFinalValue] = useState("");
  return (
    <>
      <h2>Input Value: {value}</h2>
      <input
        type={"text"}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <hr />
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <hr />
      <h2>Final Value: {finalValue}</h2>
      <button
        onClick={() => {
          setFinalValue(value);
          setValue("");
        }}
      >
        Submit
      </button>
    </>
  );
}

export default Counter;
