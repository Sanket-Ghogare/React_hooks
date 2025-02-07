import React,{useState, useEffect} from "react";

const UseEffect1 = ()=>{
    const[count,setCount]= useState(0);
    const[name,setName] = useState('');
    useEffect(()=>{
        console.log("updated the useeffect it render the components")
        document.title = ` ${count} times`
    },[count, name])
    return(
        <>
        <h1>Hello</h1>
        <div className="text-white">
            <button onClick={()=>setCount(count + 1)}> increased</button>
            <h1>count{count}</h1>
        </div>
        <input className="text-black" type="text" onChange={e=>setName(e.target.value)}/>
        </>
    )
}

export default UseEffect1;