// useEffect with incorrect dependency

import React, { useState, useEffect } from "react";

function UseEffect2() {
  const [count, setCount] = useState(0);

  const tick = () => {
    // setCount(count + 1);
    setCount(prevCount => prevCount +1)
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="text-white h-screen">
        <h1>the count is{count}</h1>
      </div>
    </>
  );
}

export default UseEffect2;
