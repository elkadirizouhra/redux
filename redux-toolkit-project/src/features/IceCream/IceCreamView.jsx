import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered , restoked } from "./IceCreamSlice";
function IceCream() {
  const numsOfIceCream = useSelector((state) => state.iceCream.numsOfIceCream);
  const dispatch = useDispatch();
  const [value,setValue]=useState(1);
  return (
    <>
      <h2>Number of IceCream: {numsOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order an IceCream</button>
      <input
      type="number"
      value={value}
      onChange={(e)=>setValue(parseInt(e.target.value))}
      />
    
      <button onClick={() => dispatch(restoked(value))}>Restoke IceCream</button>
    </>
  );
}

export default IceCream;
