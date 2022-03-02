import { combineReducers } from "redux";
import { ReducerCounter } from "./reducerCounter";
import { ReducerToDo } from "./reducerToDo";

export const rootReducer = combineReducers({
  ReducerCounter,
  ReducerToDo,
});
