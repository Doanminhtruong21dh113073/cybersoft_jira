import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./Saga/rootSaga";
import UserSagaReducer from "./Reducer/UserSagaReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    UserSaga: UserSagaReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;