import React, {useState,useEffect} from'react';
import axios from 'axios';


const UseEffect5 = () => {
    const[post,setPost]=useState({});
    const[buttonclick,setButtoclick]=useState(1);
    const [id, setid] = useState(1);

    const handleclick=()=>{
        setButtoclick(id);
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonclick}`).then((res)=>{
        setPost(res.data);
        console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[buttonclick])
  return <>
  <div>
  <div className="text-black">
        <input type="text" value={id} onChange={(e) => setid(e.target.value)} />
        <button className="text-white bg-pink" type='button' onClick={handleclick}> fetch post</button>
        <h2 className="text-white">{post.title}</h2>
      </div>
  </div>
  </>;
};

export default UseEffect5;
