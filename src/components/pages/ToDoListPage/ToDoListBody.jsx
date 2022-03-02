import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Styled } from "./TodolistStyled";
import {
  deleteList,
  editList,
  openModal,
  checkedItem,
} from "../../../store/actions/actionsToDo";

import { log } from "react-modal/lib/helpers/bodyTrap";

export const ToDoListBody = () => {
  const dispatch = useDispatch();
  const { ReducerToDo } = useSelector((state) => state);
  const { list, text, isCompleted } = ReducerToDo;

  const delModalFunc = (payload) => {
    dispatch(openModal(payload));
    dispatch(deleteList());
  };
  const editModalFunc = (payload) => {
    dispatch(openModal(payload));
    dispatch(editList());
  };

  const func444 = (value, index) => {
    const item = list[index];
    item.isCompleted = value;
    dispatch(checkedItem(list));
    console.log();
  };

  return (
    <div>
      {list.map((item, index) => (
        <Styled.Root key={index}>
          <div>
            <span>{index + 1}</span>

            <input
              type="checkbox"
              onClick={(e) => func444(e.target.checked, index)}
            />
          </div>
          {item.isCompleted ? (
            <del>
              <p>{item.text}</p>
            </del>
          ) : (
            <p>{item.text}</p>
          )}
          <div>
            <span onClick={() => delModalFunc({ item, index })}>del </span>
            <span onClick={() => editModalFunc({ item, index })}> edit</span>
          </div>
        </Styled.Root>
      ))}
    </div>
  );
};

export default ToDoListBody;
