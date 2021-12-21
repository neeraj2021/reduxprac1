import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello World</h1>
      <h1>Increment And Decrement</h1>

      <div>
        <h1>
          <span onClick={() => dispatch(decNumber())}>-</span>
        </h1>
        <input type="text" value={myState} />
        <h1>
          <span onClick={() => dispatch(incNumber())}>+</span>
        </h1>
      </div>
    </div>
  );
}
