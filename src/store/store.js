import { rootReducer } from "./reducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(
  rootReducer,

  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
