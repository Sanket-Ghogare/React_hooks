import React, { useState, useEffect } from "react";
import axios from "axios";
const UseEffect3fetchdata = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <>
      <div>
        <ul>
          {post.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseEffect3fetchdata;
