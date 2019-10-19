import axios from "axios";
import { CART_START, CART_SUCCESS, CART_FAIL } from "./actionTypes";
import { authAxios } from "../../utils";
import { orderSummaryURL } from "../../constants";

export const cartStart = () => {
  return {
    type: CART_START
  };
};

export const cartSuccess = data => {
  console.log(data);
  return {
    type: CART_SUCCESS
  };
};

export const cartFail = error => {
  return {
    type: CART_FAIL,
    error: error
  };
};

export const cartFetch = () => {
  return dispatch => {
    dispatch(cartStart());
    authAxios
      .post(orderSummaryURL)
      .then(res => {
        dispatch(cartSuccess(res.data));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};
