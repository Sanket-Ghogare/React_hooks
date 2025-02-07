import React, { useContext } from "react";
import { CounterContext } from "../App";

const Usereducer = () => {
  const CountContext = useContext(CounterContext);
  return (
    <>
      <div className="text-white h-screen bg-black text-center items-center justify-center">
        userreducer {CountContext.countState} <br />
        <button onClick={() => CountContext.countDispatch("increment")}>
          Increment
        </button>
        <button onClick={() => CountContext.countDispatch("decrement")}>
          Decrement
        </button>
        <button onClick={() => CountContext.countDispatch("reset")}>
          Reset
        </button>
      </div>
    </>
  );
};
export default Usereducer;
