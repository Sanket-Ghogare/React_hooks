import React, { useState } from "react";

const HookCounter3 = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <>
      <div>
        <h1>these is object with the useState</h1>
      </div>
      <form>
        <input
        className="text-black"
          type="text"
          value={name.firstname}
          onChange={e => setName({...name, firstname: e.target.value })}
        />
         <input
        className="text-black"
          type="text"
          value={name.lastname}
          onChange={e => setName({...name, lastname: e.target.value })}
        />
        <h1 className="mt-10">Firstname= {name.firstname}</h1>
        <h1 className="mt-10">Lastname= {name.lastname}</h1>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </>
  );
};

export default HookCounter3;
