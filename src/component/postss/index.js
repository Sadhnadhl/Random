import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [post, setPost] = useState([]);

  const createPost = async () => {
    await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    });
  };
  const updatePost = async () => {
    await axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
      title: "Hookha bar",
      body: "bar",
      userId: 1,
    });
  };

  const delatePost = async () => {
    await axios.delete("https://jsonplaceholder.typicode.com/posts/1",{
      
    })


  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        setPost(response.data); // Save the response data to state
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        Hello sancahi
        <div className="button">
          <button onClick={createPost}>Create</button>
          <button onClick={updatePost}>Update</button>
          <button onClick={delatePost}>Delate</button>
        </div>
        {post.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
