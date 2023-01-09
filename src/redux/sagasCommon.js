import { fork } from "redux-saga/effects";

// USER
import productSaga from "./user/sagas/product.saga";
import orderSaga from "./user/sagas/order.saga";

// ADMIN

export default function* rootSaga() {
  // USER
  yield fork(productSaga);
  yield fork(orderSaga);
  // ADMIN
}
