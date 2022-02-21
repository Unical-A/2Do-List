import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Styled } from "./TodolistStyled";
import {
  deleteList,
  editList,
  openModal,
  checkedItem,
} from "../../../store/action";

import { log } from "react-modal/lib/helpers/bodyTrap";

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

  const func444 = (payload) => {
    //dispatch(checkedItem(payload));
  };

  return (
    <div>
      {list.map((item, index, isChecked) => (
        <Styled.Root key={index}>
          <input
            type="checkbox"
            onClick={(e) => func444(e.target.checked, index)}
          />
          <p>{item}</p>
          {/*{value ? <p>{item}</p> : null}*/}
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
