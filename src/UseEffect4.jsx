// fetch indivial post data with the useeffect

import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffect4() {
  const [post, setPost] = useState({});
  const [id, setid] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log("resdata", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      <div className="text-black">
        <input type="text" value={id} onChange={(e) => setid(e.target.value)} />
        <h2 className="text-white">{post.title}</h2>
      </div>
    </>
  );
}

export default UseEffect4;
