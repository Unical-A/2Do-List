import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, deleteItem, textInput } from "../../../store/action";

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
  const state = useSelector((state) => state);
  const { isOpenModal, currentInfo, isDel, isEdit } = state;

  const closeModalFunc = () => {
    dispatch(closeModal());
  };
  const delItemFunc = (payload) => {
    dispatch(deleteItem(payload));
    dispatch(closeModal());
  };
  const editItemFunc = () => {
    //dispatch(editItem());
  };
  const textChangeFunc = (value) => {
    dispatch(textInput(value));
    console.log(value);
  };

  return (
    <div>
      <Modal ariaHideApp={false} isOpen={isOpenModal} style={customStyles}>
        <button onClick={() => closeModalFunc()}>X</button>

        {isDel ? <p>Du You Want To Delete? {currentInfo}</p> : null}
        {isEdit ? <p>Du You Want To Edit?</p> : null}
        {isEdit ? (
          <textarea onChange={(e) => textChangeFunc(e.target.value)}>
            {currentInfo}
          </textarea>
        ) : null}

        {isDel ? (
          <button onClick={() => delItemFunc(currentInfo)}>Yes</button>
        ) : null}
        {isEdit ? (
          <button onClick={() => editItemFunc(currentInfo)}>Yes</button>
        ) : null}

        <button onClick={() => closeModalFunc()}>close</button>
      </Modal>
    </div>
  );
};
