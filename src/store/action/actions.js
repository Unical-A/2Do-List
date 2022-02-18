export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const VALUE_ADD = "VALUE_ADD";
export const OPEN_MODAL = "OPEN_MODAL";

export const changeInputValue = (payload) => {
  return { type: CHANGE_INPUT_VALUE, payload };
};
export const valueADD = (payload) => {
  return { type: VALUE_ADD, payload };
};
export const openModal = (payload) => {
  return { type: OPEN_MODAL, payload };
};
