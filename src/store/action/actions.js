export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const VALUE_ADD = "VALUE_ADD";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const DELETE_LIST = "DELETE_LIST";
export const EDIT_LIST = "EDIT_LIST";
export const DELETE_ITEM = "DELETE_ITEM";
export const TEXT_INPUT = "TEXT_INPUT";
export const FUNC_FUNC = "FUNC_FUNC";
export const SAVE_EDIT_TEXT = "SAVE_EDIT_TEXT";

export const changeInputValue = (payload) => {
  return { type: CHANGE_INPUT_VALUE, payload };
};
export const valueADD = (payload) => {
  return { type: VALUE_ADD, payload };
};
export const openModal = (payload) => {
  return { type: OPEN_MODAL, payload };
};
export const closeModal = (payload) => {
  return { type: CLOSE_MODAL, payload };
};
export const deleteList = (payload) => {
  return { type: DELETE_LIST, payload };
};
export const editList = (payload) => {
  return { type: EDIT_LIST, payload };
};
export const deleteItem = (payload) => {
  return { type: DELETE_ITEM, payload };
};
export const textInput = (payload) => {
  return { type: TEXT_INPUT, payload };
};
export const funcFunc = (payload) => {
  return { type: FUNC_FUNC, payload };
};
export const saveedittext = (payload) => {
  return { type: SAVE_EDIT_TEXT, payload };
};
