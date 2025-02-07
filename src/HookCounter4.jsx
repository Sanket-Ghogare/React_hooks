import React, { useState } from "react";

const HookCounter4 = () => {
  const [items, setItems] = useState([]);

  const additem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <>
      <div>
        <h1>Hello Array handling in the UseState hook</h1>
        <button onClick={additem}>add the items</button>
        <ul>
          {items.map((items) => (
            <li value={items.id}> {items.value}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default HookCounter4;
