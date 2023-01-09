import { put, debounce, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { message } from "antd";

import { REQUEST, SUCCESS, FAIL, PRODUCT_ACTION } from "../constants";

function* getProductListSaga(action) {
  try {
    const  keyword  = action.payload;
    console.log("🚀 ~ file: product.saga.js:10 ~ function*getProductListSaga ~ keyword", keyword)
    const result = yield axios.get(`http://localhost:4000/products`, {
      params: {
        ...(keyword && {
          q: keyword,
        }),
      },
    });
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        errors: error,
      },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { productId } = action.payload;
    const result = yield axios.get(
      `http://localhost:4000/products/${productId}`
    );
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        data: result.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        errors: error,
      },
    });
  }
}

function* createProductSaga(action) {
  try {
    const { values, callback } = action.payload;
    console.log(
      "🚀 ~ file: product.saga.js:51 ~ function*createProductSaga ~ callback",
      callback
    );
    const result = yield axios.post(`http://localhost:4000/products`, values);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: {
        data: result.data,
      },
    });
    message.success("Tạo sản phẩm thành công!");
    yield callback.resetFieldsCreateForm();
  } catch (error) {
    yield put({
      type: FAIL(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: {
        errors: error,
      },
    });
  }
}

function* clearProductListSaga(action) {
  try {
    yield put({
      type: SUCCESS(PRODUCT_ACTION.CLEAR_PRODUCT_LIST),
    });
  } catch (error) {
    yield put({
      type: FAIL(PRODUCT_ACTION.CLEAR_PRODUCT_LIST),
      payload: {
        errors: error,
      },
    });
  }
}

export default function* productSaga() {
  yield debounce(
    100,
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST),
    getProductListSaga
  );
  yield takeEvery(
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
    getProductDetailSaga
  );
  yield takeEvery(REQUEST(PRODUCT_ACTION.CREATE_PRODUCT), createProductSaga);
  yield takeEvery(
    REQUEST(PRODUCT_ACTION.CLEAR_PRODUCT_LIST),
    clearProductListSaga
  );
}
