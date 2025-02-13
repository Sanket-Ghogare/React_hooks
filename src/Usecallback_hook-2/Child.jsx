import React from "react";

const Child = (props) => {
  console.log("child componenet is rerender");
  return (
    <>
      <div>
        <button onClick={props.handleClick}>{props.buttonName}</button>
      </div>
    </>
  );
};

export default React.memo(Child);
