import {
  CHANGE_INPUT_VALUE,
  CLOSE_MODAL,
  DELETE_ITEM,
  DELETE_LIST,
  EDIT_LIST,
  OPEN_MODAL,
  EDIT_TEXT_INPUT,
  VALUE_ADD,
  SAVE_EDIT_TEXT,
  CHECKED_ITEM,
  CHANGE_NUM,
} from "../../actions/actionsToDo";

const initialState = {
  list: [],
  text: "",
  isOpenModal: false,
  currentInfo: "",
  textInput: "",
  isDel: false,
  isEdit: false,
  editCurrentIndex: null,
  checkItem: "",
  inputValue: "",
  isCompleted: false,
  counter: 0,
};

export const ReducerToDo = (state = initialState, action) => {
  const {
    list,
    inputValue,
    isOpenModal,
    currentInfo,
    isEdit,
    isDel,
    currentItem,
    editCurrentIndex,
    textInput,
    checkItem,
    text,
    counter,
  } = state;

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, text: action.payload };
    case VALUE_ADD:
      return { ...state, list: action.payload, text: "" };

    case OPEN_MODAL:
      return {
        ...state,
        isOpenModal: true,
        currentInfo: action.payload.item.text,
        editCurrentIndex: action.payload.index,
      };

    case CLOSE_MODAL:
      return { ...state, isOpenModal: false };
    case DELETE_LIST:
      return { ...state, isDel: true, isEdit: false };
    case EDIT_LIST:
      return {
        ...state,
        isEdit: true,
        isDel: false,
      };
    case DELETE_ITEM:
      const delClone = JSON.parse(JSON.stringify(state));

      delClone.list.splice(action.payload, 1);

      return { ...state, list: delClone.list };
    case EDIT_TEXT_INPUT:
      return { ...state, textInput: action.payload };

    case CHECKED_ITEM:
      return { ...state, list: action.payload };

    case SAVE_EDIT_TEXT:
      const cloneState = JSON.parse(JSON.stringify(state));
      const { list, editCurrentIndex, textInput } = cloneState;
      if (textInput === "") {
        return { ...cloneState, isOpenModal: false };
      } else {
        list[editCurrentIndex].text = textInput;
      }

      return { ...cloneState, textInput: "", isOpenModal: false };

    default:
      return state;
  }
};
