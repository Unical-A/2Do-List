import { put, takeEvery } from "redux-saga/effects";
import { CHANGE_NUM } from "../actions/actionsSagas";
import { changeNumA } from "../actions/actionsCounter";

function* changeNum(payload) {
  yield put(changeNumA(payload));
}
function* watchChangeNum() {
  yield takeEvery(CHANGE_NUM, changeNum);
}

export function* rootSaga() {
  yield watchChangeNum();
}
