import React, { useState, useCallback } from "react";
import Child from "./Child";
import Test from "./Test";
import Expensive from "./Expensive";

const Parentcall = () => {
  const [count, setCount] = useState(0);
  const[money, setMoney] = useState(0);

  //   const handleClick=()=> {
  //     setCount(count + 1);
  //   }

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleMoney = useCallback(() => {
    setMoney(money + 1);
  },[money]);

// const handleMoney = ()=>{
//     setMoney(money + 1);
// }
  return (
    <>
      <div>
        <h1>UseCallBack Hook</h1>
        <Child buttonName="click me" handleClick={handleClick} />

        <button onClick={handleClick}> Count: {count}</button>
        <br /><br /><br />
        <Test handleMoney={handleMoney} />
        <br /><br />
        <button onClick={handleMoney}>Money:{money}</button>

        <br /><br /><br />
        <Expensive/>
      </div>
    </>
  );
};

export default Parentcall;
