import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  deleteItem,
  editTextInput,
  saveEditText,
} from "../../../store/actions/actionsToDo";

const customStyles = {
  content: {
    top: "40%",
    width: "250px",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ToDoListModal = () => {
  const dispatch = useDispatch();
  const { ReducerToDo } = useSelector((state) => state);
  const {
    isOpenModal,
    currentInfo,
    isDel,
    isEdit,
    textInput,
    editCurrentIndex,
  } = ReducerToDo;

  const closeModalFunc = () => {
    dispatch(closeModal());
  };
  const delItemFunc = (payload) => {
    dispatch(closeModal());
    dispatch(deleteItem(payload));
  };
  const editItemFunc = () => {
    dispatch(saveEditText());
  };
  const textChangeFunc = (payload) => {
    dispatch(editTextInput(payload));
  };

  return (
    <div>
      <Modal ariaHideApp={false} isOpen={isOpenModal} style={customStyles}>
        <button onClick={() => closeModalFunc()}>X</button>

        {isDel ? <p>Du You Want To Delete? {editCurrentIndex}</p> : null}
        {isEdit ? <p>Du You Want To Edit? {currentInfo}</p> : null}
        {isEdit ? (
          <textarea
            defaultValue={currentInfo}
            onChange={(e) => textChangeFunc(e.target.value)}
          />
        ) : null}

        {isDel ? (
          <button onClick={() => delItemFunc(editCurrentIndex)}>Yes</button>
        ) : null}
        {isEdit ? (
          <button onClick={() => editItemFunc(editCurrentIndex)}>Save</button>
        ) : null}

        <button onClick={() => closeModalFunc()}>close</button>
      </Modal>
    </div>
  );
};
