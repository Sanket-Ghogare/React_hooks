import React, { useState, useMemo } from "react";

function Counter() {
  const [counterone, setCountone] = useState(0);
  const [countertwo, setCounttwo] = useState(0);

  const Countone = () => {
    setCountone(counterone + 1);
  };

  const Counttwo = () => {
    setCounttwo(countertwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++; // Simulating a heavy calculation
    return counterone % 2 === 0;
  }, [counterone]);

  return (
    <div className="text-center text-white">
      <button onClick={Countone} className="px-4 py-2 bg-blue-500 rounded m-2">
        COUNT ONE {counterone}
      </button>
      <span className="text-xl font-bold">{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={Counttwo} className="px-4 py-2 bg-green-500 rounded m-2">
        COUNT TWO {countertwo}
      </button>
    </div>
  );
}

export default Counter;
