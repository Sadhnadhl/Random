import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,incrementByAmount } from "../../redux/slice/counterSlice";
const Count = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  function handleChange(e){
    setAmount(parseInt(e.target.value));
  }
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input type="number" value={amount} onChange={handleChange}></input>
      <button onClick={() => dispatch(incrementByAmount(amount))}>incrementByAmount</button>
    </div>
  );
};

export default Count;
