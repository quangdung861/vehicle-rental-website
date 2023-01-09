import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { notification } from "antd";

import { REQUEST, SUCCESS, FAIL, ORDER_ACTION } from "../constants";

function* addOrderSaga(action) {
  try {
    const result = yield axios.post(
      `http://localhost:4000/orders`,
      action.payload
    );
    yield put({
      type: SUCCESS(ORDER_ACTION.ADD_ORDER),
      payload: {
        data: result.data,
      },
    });
    notification.success({
      message: "Đặt xe thành công",
    });
  } catch (error) {
    yield put({
      type: FAIL(ORDER_ACTION.ADD_ORDER),
      payload: {
        errors: error,
      },
    });
  }
}

function* getOrderListSaga(action) {
  try {
    const result = yield axios.get(`http://localhost:4000/orders`, {
      params: {
        _expand: "product",
        _sort: "id",
        _order: "desc",
      },
    });
    yield put({
      type: SUCCESS(ORDER_ACTION.GET_ORDER_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(ORDER_ACTION.GET_ORDER_LIST),
      payload: {
        errors: error,
      },
    });
  }
}

export default function* orderSaga() {
  yield takeEvery(REQUEST(ORDER_ACTION.ADD_ORDER), addOrderSaga);
  yield takeEvery(REQUEST(ORDER_ACTION.GET_ORDER_LIST), getOrderListSaga);
}
