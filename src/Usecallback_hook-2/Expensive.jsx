import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const Expensive = () => {
  const [count, setCount] = useState(0);
  const [text, settext] = useState("");

  const previousFunction = useRef(null);

//   function expensive() {
//     console.log("inside the Expensive calculations");
//     let result = 0
//     for (let i = 0; i < 1000000000; i++) {
//         result +=i;
//     }
//     return result;
//   }

  const expensivecal = useCallback(()=>{
    console.log("inside the Expensive calculations");
    let result = 0
    for (let i = 0; i < 1000000000; i++) {
        result +=i;
    }
    return result;
  },[count]);

  useEffect(()=>{
    if(previousFunction.current){
        if(previousFunction.current === expensivecal){
            console.log("the func is not recreted");
        }
        else{
            console.log("fun is recreated")
        }
    }
    else{
        previousFunction.current = expensivecal;
    }
  },[expensivecal]);


  //   let value = expensive(input);
  
  return (
    <>
      <div className="">
      <input
          className="text-black"
          type="text"
          placeholder="Type something"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />

        <div>Expensive cal result: {expensivecal()}</div>
        <button onClick={() => setCount(count + 1)}> Increment</button>

        <div>count: {count}</div>

     
      </div>
    </>
  );
};
export default Expensive ;
