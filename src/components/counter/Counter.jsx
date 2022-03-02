import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNum } from "../../store/actions/actionsCounter";

export const Counter = () => {
  const dispatch = useDispatch();
  const { ReducerCounter } = useSelector((state) => state);
  const { counter } = ReducerCounter;

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
