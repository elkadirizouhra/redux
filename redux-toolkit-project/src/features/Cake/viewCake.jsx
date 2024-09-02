import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restoked } from "./cakeSlice";
function cake() {
  const numsOfCakes = useSelector((state) => state.cake.numsOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Number of Cakes : {numsOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order a cake</button>
      <button onClick={() => dispatch(restoked(3))}>Restoke cake</button>
    </>
  );
}

export default cake;
