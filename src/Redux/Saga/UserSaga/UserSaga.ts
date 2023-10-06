import { PayloadAction } from "@reduxjs/toolkit";
import { SagaIterator } from "redux-saga";
import { takeLatest, put, call } from "redux-saga/effects";
import { http, history } from "../../../Utils/setting";
import { UserRegister, UserLogin } from "../../types/UserType";
import {
  USER_SIGNIN_SAGA,
  USER_SIGNUP_SAGA,
} from "./../../Constants/UserConstant";
import { LoadingSagaAction } from "../../Reducer/LoadingReducer";
import { toast } from "react-toastify";
import { UserSagaAction } from "../../Reducer/UserSagaReducer";

export function* RegisterSaga(
  action: PayloadAction<UserRegister>
): SagaIterator {
  try {
    yield put(LoadingSagaAction.setLoading(true));

    const { payload } = action; // Lấy thông tin đăng kí từ action

    const response = yield call(() => {
      return http.post(`/api/Users/signup`, payload);
    });
    if (response.status === 200) {
      toast.success("Register Success");
      history.push("/login");
    } else {
      console.log("Registration failed:", response.data);
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingSagaAction.setLoading(false));
  }
}

export function* actionRegisterSaga() {
  yield takeLatest(USER_SIGNUP_SAGA, RegisterSaga);
}

export function* loginSaga(action: PayloadAction<UserLogin>): SagaIterator {
  try {
    yield put(LoadingSagaAction.setLoading(true));

    const { payload } = action; // lấy thông tin đăng nhập từ action

    const { data, status } = yield call(() => {
      return http.post(`/Users/signin`, payload);
    });

    if (status === 200) {
      toast.success("Login Success");
      yield put(UserSagaAction.setUserInfo(data.content));
      history.push("/"); // Truy cập trang chủ nếu đăng nhập thành công
    } else {
      console.log("Login failed:", data.content);
      history.push("/login"); // Quay lại trang đăng nhập nếu đăng nhập thất bại
    }
  } catch (error) {
    console.log(error);
    history.push("/login"); // Quay lại trang đăng nhập nếu có lỗi
  } finally {
    yield put(LoadingSagaAction.setLoading(false));
  }
}

export function* actionLoginSaga() {
  yield takeLatest(USER_SIGNIN_SAGA, loginSaga);
}
