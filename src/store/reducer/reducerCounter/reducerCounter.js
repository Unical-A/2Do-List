import { CHANGE_NUM } from "../actions";

const initialState = {
  counter: 0,
};

export const ReducerCounter = (state = initialState, action) => {
  const { counter } = state;

  switch (action.type) {
    case CHANGE_NUM:
      if (action.payload === "+") {
        return { ...state, counter: counter + 1 };
      } else if (action.payload === "-") {
        return { ...state, counter: counter - 1 };
      }

    default:
      return state;
  }
};
