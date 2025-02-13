import React from "react";

const Test = (props) => {
    console.log("test is render");
  return (
    <>
      <button onClick={props.handleMoney}>Money</button>
    </>
  );
};

export default React.memo(Test);
