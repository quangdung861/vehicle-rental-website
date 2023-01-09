import { createReducer } from "@reduxjs/toolkit";
import { FAIL, REQUEST, SUCCESS, ORDER_ACTION } from "../constants";

const initialState = {
  orderList: {
    data: [],
    loading: false,
    errors: null,
  },
  addOrder: {
    data: [],
    loading: false,
    errors: null,
  },
};

const orderReducer = createReducer(initialState, {
  [REQUEST(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: true,
      },
    };
  },

  [SUCCESS(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: false,
        data,
      },
    };
  },

  [FAIL(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    const { errors } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: false,
        errors,
      },
    };
  },

  //

  [REQUEST(ORDER_ACTION.ADD_ORDER)]: (state, action) => {
    return {
      ...state,
      addOrder: {
        ...state.addOrder,
        loading: true,
      },
    };
  },

  [SUCCESS(ORDER_ACTION.ADD_ORDER)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      addOrder: {
        ...state.addOrder,
        loading: false,
        data,
      },
    };
  },

  [FAIL(ORDER_ACTION.ADD_ORDER)]: (state, action) => {
    const { errors } = action.payload;
    return {
      ...state,
      addOrder: {
        ...state.addOrder,
        loading: false,
        errors,
      },
    };
  },
});

export default orderReducer;
