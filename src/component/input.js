import React, { useState } from "react";

const Input = () => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted name: " + username);
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input
          id="username" 
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Input;
