import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInputValue, valueADD } from "../../../store/actions/actionsToDo";

export const ToDoListHeader = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { text, list, inputValue } = state;

  const inputFunc = (value) => {
    dispatch(changeInputValue(value));
  };

  const addFunc = () => {
    const inputValue = {
      text,
      isChecked: false,
      id: Math.random(),
    };
    if (text === "") {
      alert("Please Write Text");
      return { ...state };
    } else {
      const listClone = JSON.parse(JSON.stringify(list));
      listClone.push(inputValue);
      dispatch(valueADD(listClone));
    }
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => inputFunc(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addFunc()}
      />
      <button onClick={() => addFunc()}>ADD</button>
    </div>
  );
};

export default ToDoListHeader;
