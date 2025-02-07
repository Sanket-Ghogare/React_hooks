import React from "react";
import { useState } from "react";

function HookCounter() {
  const initalvalue = 0;
  const [count, setCount] = useState(initalvalue);

  const incrementten = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevcount) => prevcount + 1);
    }
  };
  return (
    <>
      <div>
        <h1>The Hook UseState Practise</h1>
        <div className="mt-10">
          <button className="ml-5" onClick={() => setCount(initalvalue)}>
            Reset
          </button>
          <button className="ml-5" onClick={() => setCount(count - 1)}>
            {" "}
            Decrease
          </button>
          <button className="ml-5" onClick={() => setCount(count + 1)}>
            {" "}
            increased
          </button>
          <button className="ml-5" onClick={incrementten}>increment by 10</button>
        </div>
        <h2 className="mt-5">Count{count}</h2>
      </div>
    </>
  );
}

export default HookCounter;
