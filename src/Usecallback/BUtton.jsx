import React from "react";

function BUtton({ handleCLick,  children }) {
console.log('rendering the',children);
  return (
    <>
      <div className="text-red">
        <button className="text-white bg-red" onClick={handleCLick}>
          {children}
        </button>
      </div>
    </>
  );
}

export default React.memo(BUtton);
