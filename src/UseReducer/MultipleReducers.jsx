import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function MultipleReducers() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2,dispatch2] = useReducer(reducer,initialState);


  return (
    <>
      <div>
        <div>Count: {count.firstCounter}</div>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <div>Count: {count2.firstCounter}</div>
        <button onClick={() => dispatch2({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch2({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatch2({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
}

export default  MultipleReducers;
