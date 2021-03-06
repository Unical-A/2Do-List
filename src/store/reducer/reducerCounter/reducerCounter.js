import { CHANGE_NUM_A } from "../../actions/actionsCounter";

const initialState = {
  counter: 0,
};

export const ReducerCounter = (state = initialState, action) => {
  const { counter } = state;

  switch (action.type) {
    case CHANGE_NUM_A:
      if (action.payload.payload === "+") {
        return { ...state, counter: counter + 1 };
      } else if (action.payload.payload === "-") {
        return { ...state, counter: counter - 1 };
      }

    default:
      return state;
  }
};
