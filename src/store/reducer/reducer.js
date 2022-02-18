import {
  CHANGE_INPUT_VALUE,
  CLOSE_MODAL,
  DELETE_ITEM,
  DELETE_LIST,
  EDIT_LIST,
  OPEN_MODAL,
  TEXT_INPUT,
  VALUE_ADD,
} from "../action";

const initialState = {
  list: [],
  inputValue: "",
  isOpenModal: false,
  currentInfo: "",
  textInput: "",
  isDel: false,
  isEdit: false,
};

export const Reducer = (state = initialState, action) => {
  const {
    list,
    inputValue,
    isOpenModal,
    currentInfo,
    isEdit,
    isDel,
    currentItem,
  } = state;

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case VALUE_ADD:
      if (inputValue === "") {
        alert("Please Write Text");
        return { ...state };
      } else {
        const listClone = JSON.parse(JSON.stringify(list));
        listClone.push(inputValue);
        return { ...state, list: listClone, inputValue: "" };
      }
    case OPEN_MODAL:
      return { ...state, isOpenModal: true, currentInfo: action.payload };
    case CLOSE_MODAL:
      return { ...state, isOpenModal: false };
    case DELETE_LIST:
      return { ...state, isDel: true, isEdit: false };
    case EDIT_LIST:
      return { ...state, isEdit: true, isDel: false };
    case DELETE_ITEM:
      const delClone = JSON.parse(JSON.stringify(list));
      delClone.splice(action.payload, 1);
      return { ...state, list: delClone };
    case TEXT_INPUT:
      return { ...state, textInput: action.payload };

    default:
      return state;
  }
};
