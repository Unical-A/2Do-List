import { createStore } from "redux";
import { ReducerToDo } from "./reducer/reducerToDo";

export const Store = createStore(ReducerToDo);
