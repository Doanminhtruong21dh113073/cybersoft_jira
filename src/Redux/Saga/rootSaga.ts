import { all } from "redux-saga/effects";
import * as UserSaga from "./UserSaga/UserSaga";
export function* rootSaga() {
  yield all([UserSaga.actionLoginSaga()]);
}
