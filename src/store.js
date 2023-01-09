import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagasCommon";

import productReducer from "./redux/user/reducers/product.reducer";
import orderReducer from "./redux/user/reducers/order.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    // USER
    productReducer,
    orderReducer,
    // ADMIN
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
