import React from "react";

function Eventhandle1() {
  function handleClick() {
    alert("I am CLick");
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
}

export default Eventhandle1;
