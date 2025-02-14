import React from "react";

const StateLifting = (prop) => {

  return (
    <>
      <div>
        {/* {prop.value} */}

       
        <input type="text" className="text-black justify-center mt-60" onChange={(e)=>prop.setName(e.target.value)} />
        <p>The value of name:{prop.name}</p>
      </div>
    </>
  );
};

export default StateLifting;
