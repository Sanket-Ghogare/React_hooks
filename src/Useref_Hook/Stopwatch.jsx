import { useRef, useState } from "react";

function StopWatch() {
  const [time, SetTime] = useState(0);

  let timeRef = useRef(null);

  function startTime() {

    timeRef.current = setInterval(() => {
      SetTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  function stopTime() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  function ResetTime() {
    stopTime();
    SetTime(0);
  }
  return (
    <>
      <div>
        <h1>Stopwatch: {time} seconds</h1>
        <button onClick={startTime}>Start</button>

        <br />
        <br />
        <button onClick={stopTime}>Stop</button>

        <br />
        <br />

        <button onClick={ResetTime}>Reset</button>
      </div>
    </>
  );
}

export default StopWatch;
