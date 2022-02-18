import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInputValue, valueADD } from "../../../store/action";

export const ToDoListHeader = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { inputValue } = state;

  const inputFunc = (value) => {
    dispatch(changeInputValue(value));
  };
  const addFunc = () => {
    dispatch(valueADD());
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => inputFunc(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addFunc()}
      />
      <button onClick={() => addFunc()}>ADD</button>
    </div>
  );
};

export default ToDoListHeader;
