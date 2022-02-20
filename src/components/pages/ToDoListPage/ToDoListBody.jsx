import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Styled } from "./TodolistStyled";
import {
  deleteList,
  editList,
  openModal,
  funcFunc,
  saveedittext,
} from "../../../store/action";

import { log } from "react-modal/lib/helpers/bodyTrap";

export const ToDoListBody = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { list, isOpenModal, isDel, isEdit, currentInfo, isChecked } = state;

  const delModalFunc = (payload) => {
    dispatch(openModal(payload));
    dispatch(deleteList());
  };
  const editModalFunc = (payload) => {
    dispatch(openModal(payload));
    dispatch(editList());
  };
  // const value = {event.target.checked};

  const func444 = () => {
    console.log();
  };
  return (
    <div>
      {list.map((item, index, isChecked) => (
        <Styled.Root key={index}>
          {" "}
          <input
            value={isChecked}
            type="checkbox"
            onChange={(e) => func444(e.target.value)}
          />
          <p>{item}</p>
          <div>
            <span onClick={() => delModalFunc({ index })}>del </span>
            <span onClick={() => editModalFunc({ item, index })}> edit</span>
          </div>
        </Styled.Root>
      ))}
    </div>
  );
};

export default ToDoListBody;
