import React, { useEffect, useState } from "react";

function TimerComp() {
    const[second,setSecond]=useState(0);

    useEffect(()=>{
        const interValId = setInterval(()=>{
            setSecond(prevsecond =>prevsecond + 1);
            console.log("second interval executed");
        },1000);
        return()=>{
            console.log("time to stop");
            clearInterval(interValId);
        }
    },[]);
    // it will run on only first render
  return (
    <>
      <div>

        <div>Second:{second}</div>
    

      </div>
    </>
  );
}

export default TimerComp;
