import { CHANGE_INPUT_VALUE, OPEN_MODAL, VALUE_ADD } from "../action";

const initialState = {
  list: [],
  inputValue: "",
  isOpenModal: false,
  currentIndex: "",
};

export const Reducer = (state = initialState, action) => {
  const { list, inputValue, isOpenModal, currentIndex } = state;

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
      return { ...state, isOpenModal: true, currentIndex: action.payload };

    default:
      return state;
  }
};
