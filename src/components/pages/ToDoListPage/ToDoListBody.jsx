import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Styled } from "./TodolistStyled";
import { deleteList, editList, openModal } from "../../../store/action";

export const ToDoListBody = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { list, isOpenModal, isDel, isEdit, currentInfo } = state;

  const delModalFunc = (payload) => {
    dispatch(openModal(payload));
    dispatch(deleteList());
  };
  const editModalFunc = (payload) => {
    dispatch(openModal(payload));
    dispatch(editList());
  };

  return (
    <div>
      {list.map((item, index) => (
        <Styled.Root key={index}>
          <input type="checkbox" />
          <p>{item}</p>
          <div>
            <span onClick={() => delModalFunc(index)}>del </span>
            <span onClick={() => editModalFunc(item)}> edit</span>
          </div>
        </Styled.Root>
      ))}
    </div>
  );
};

export default ToDoListBody;
