import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function haldleChange() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>You Clicked {count}</h1>
      <button onClick={haldleChange}>Click me</button>
    </>
  );
}
export default Counter;
