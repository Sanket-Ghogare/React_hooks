import React, { useContext } from "react";
import { CounterContext } from "../App";

const Usereducer1 = () => {
  const CountContext = useContext(CounterContext);
  return (
    <>
      <div >
        
        <button onClick={() =>CountContext.countDispatch("increment" )}>
          Increment
        </button>
        <button onClick={() =>CountContext.countDispatch("decrement" )}>
          Decrement
        </button>
        <button onClick={() => CountContext.countDispatch("reset" )}>Reset</button>
      </div>
    </>
  );
};
export default Usereducer1;
