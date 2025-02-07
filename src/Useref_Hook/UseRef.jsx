import React, { useEffect, useState, useRef } from "react";

const useRefs = () => {
  const [count, setCount] = useState(0);
  //  let val= 1;
  let val = useRef(1);

  let btnRef = useRef();

  const handleIncrment = () => {
    // val = val + 1 ;
    val.current = val.current + 1;
    console.log("value of val", val.current);
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("render repeted value");
  });

  const handleColurchnage = () => {
    btnRef.current.style.backgroundColor = "red";
  };

  return (
    <>
      <h1>hello</h1>
      <div className=" ">
        <button ref={btnRef} className="" onClick={handleIncrment}>
          Increment
        </button>
      </div>
      <div className="text-red">Count:{count}</div>
      <button className="" onClick={handleColurchnage}>
        chnage the colour of another button
      </button>
      <br /><br /><br />
    </>
  );
};

export default useRefs;
