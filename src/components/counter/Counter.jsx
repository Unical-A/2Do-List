import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNum } from "../../store/action";

export const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { counter } = state;

  const Func = (payload) => {
    dispatch(changeNum(payload));
  };

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => Func("+")}>+</button>
        <button onClick={() => Func("-")}>-</button>
      </div>
    </div>
  );
};
