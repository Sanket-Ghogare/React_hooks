import React, { useState, useReducer, createContext } from "react";
import "./App.css";
import HookCounter from "./HookCounter";
import HookCounter3 from "./HookCounter3";
import HookCounter4 from "./HookCounter4";
import UseEffect1 from "./UseEffect1";
import UseEffect2 from "./useEffect2";
import UseEffect3fetchdata from "./UseEffect3fetchdata";
import UseEffect4 from "./UseEffect4";
import UseEffect5 from "./UseEffect5";
import ComponentA from "./contexthook/ComponentA";
import Counterone from "./UseReducer/Counterone";
import ComplexCounter from "./UseReducer/ComplexCounter";
import MultipleReducers from "./UseReducer/MultipleReducers";
import Usereducer from "./UseReducer/Usereducer";
import Usereducer1 from "./UseReducer/Usereducer1";
import Parentcomponents from "./Usecallback/Parentcomponenet";
import Counter from "./Usememohook/Counter";
import Focusinput from "./Useref_Hook/Focusinput";
import UseRefs from "./Useref_Hook/UseRef";
import StopWatch from "./Useref_Hook/Stopwatch";
import Memo1 from "./UseMemo_hook/Memo1";
import Parentcall from "./Usecallback_hook-2/Parentcall";
import Context1 from "./Context_hook-2/Context1";
import TimerComp from "./UseEffect_hook/TimerCompo";
export const userContext = React.createContext();
export const ChannelContext = React.createContext();

export const CounterContext = React.createContext();
 const ThemeContext = createContext();
function App() {
  const [add, SetAdd] = useState(0);
  const [count, setCount] = useState(10);

  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [count1, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState("light");


  return (
    <>
      <div className="text-white h-screen bg-black text-center items-center justify-center">
        {/* below code is for the usestate  */}

        {/* <button  onClick={()=>{SetAdd(add + 1)}}>Count {add}</button>
      <div className='flex text-center items-center justify-center mt-10'>
      <button onClick={()=>{setCount(count - 1)}}>count {count}</button>
      </div>
      <div className='flex text-center items-center justify-center mt-10' >
     <HookCounter/>
     </div>
     <HookCounter3/>
     <div className='flex text-center items-center justify-center mt-10' >
     <HookCounter4/>
     </div> */}

        {/* <UseEffect1/> */}
        {/* <UseEffect2/> */}

        {/* <UseEffect3fetchdata/> */}
        {/* <UseEffect4/> */}
        {/* <UseEffect5/> */}

        {/* <userContext.Provider value={"sanket"}>
          <ChannelContext.Provider value={"ghogare"}>
            <ComponentA />
          </ChannelContext.Provider>
        </userContext.Provider> */}

        {/* <Counterone/> */}
        {/* <ComplexCounter/>
         */}
        {/* <MultipleReducers /> */}

        {/* use reducer with the contexthook with the global componenets*/}
        {/* <CounterContext.Provider value={{countState:count1, countDispatch:dispatch }}>
          count - {count1}
          <Usereducer />
          <Usereducer1 />
        </CounterContext.Provider> */}

        {/* usecallback hook */}
        {/* <div className="text-white  bg-black text-center items-center justify-center">
     <Parentcomponents/>
     </div> */}

        {/* usememo hook */}
        {/* <div className="text-white">
     <Counter/>
     </div> */}

        {/* useref hook
         */}

        {/* <div className="">
    <Focusinput/>
     </div> */}
        {/* <div className=''>
     <UseRefs/>
     <StopWatch/>
     </div> */}

        {/* UseMemo Hook */}

        {/* <Memo1 /> */}

        {/* UseCall back Hook  */}

        {/* <Parentcall/> */}

        {/* USeCOntext_Hook2 */}
        {/* <ThemeContext.Provider value={{theme,setTheme}}>
          <div id ='container' style={{background:theme==='light'?"beige":"black"}}>
          <Context1 />
          </div>
        
        </ThemeContext.Provider> */}



      {/* useEffectHook */}
      <TimerComp/>
      </div>
    </>
  );
}

export default App
export {ThemeContext}
