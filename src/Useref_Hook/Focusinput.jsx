import React, { useEffect, useRef } from "react";

const Focusinput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="mt-5 text-black">
        <input ref={inputRef} type="text" />
      </div>
    </>
  );
};

export default Focusinput;
