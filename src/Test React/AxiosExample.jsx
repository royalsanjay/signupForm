import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idButtonclick, setIdButtonclick] = useState(1);

  const handleClick = () => {
    setIdButtonclick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButtonclick}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idButtonclick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Data
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {post.map((poster) => (
          <li key={poster.id}>{poster.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default AxiosExample;
