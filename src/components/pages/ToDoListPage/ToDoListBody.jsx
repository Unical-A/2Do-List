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
  const { list, isOpenModal, isDel, isEdit, currentInfo, isChecked } = state;

  const delModalFunc = (payload) => {
    dispatch(openModal(payload));
    dispatch(deleteList());
  };
  const editModalFunc = (payload) => {
    dispatch(openModal(payload));
    dispatch(editList());
  };

  const func444 = (payload) => {
    dispatch(checkedItem(payload));
  };

  return (
    <div>
      {list.map((item, index) => (
        <Styled.Root key={index}>
          <div>
            <span>{index + 1}</span>

            <input type="checkbox" onChange={() => func444({ index, item })} />
          </div>

          {!isChecked ? (
            <p>{item}</p>
          ) : (
            <del>
              <p>{item}</p>
            </del>
          )}
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
