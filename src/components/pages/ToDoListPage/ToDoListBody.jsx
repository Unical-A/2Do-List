import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Styled } from "./TodolistStyled";
import { openModal } from "../../../store/action";

export const ToDoListBody = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { list, isOpenModal } = state;

  const openModalFunc = (payload) => {
    dispatch(openModal(payload));
  };

  return (
    <div>
      {list.map((item, index) => (
        <Styled.Root>
          <input type="checkbox" />
          <p>{item}</p>
          <div>
            <span onClick={() => openModalFunc(index)}>del </span>
            <span> edit</span>
          </div>
        </Styled.Root>
      ))}
    </div>
  );
};

export default ToDoListBody;
