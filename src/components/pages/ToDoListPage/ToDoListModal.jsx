import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

const customStyles = {
  content: {
    top: "40%",
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
  const { isOpenModal, currentIndex, isDel, isEdit, isTextarea, list } = state;

  return (
    <div>
      <Modal isOpen={isOpenModal} style={customStyles}>
        <button>X</button>

        <div>Hello{currentIndex}</div>

        <button>Yes</button>

        <button>close</button>
      </Modal>
    </div>
  );
};
