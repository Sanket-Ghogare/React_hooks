import React, { useMemo, useState } from "react";

const Memo1 = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensive(num) {
    console.log("inside the Expensive Life");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }
  //   let value = expensive(input);
  
  let value = useMemo(() => expensive(input), [input]);
  return (
    <>
      <div className="">
        <button onClick={() => setCount(count + 1)}> Increment</button>

        <div>count: {count}</div>

        <input
          className="text-black"
          type="number"
          placeholder="Enter the no"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div>Expensive: {value}</div>
      </div>
    </>
  );
};
export default Memo1;
