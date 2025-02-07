import React from "react";

const Title = () => {
    console.log("in these title render")
  return (
    <>
      <div>
        <h1> UseCallback Hook</h1>
      </div>
    </>
  );
};

export default React.memo(Title);
