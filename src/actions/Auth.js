import {
  AUTH_START,
  AUTH_FAIL,
  AUTH_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
} from "../actions/ActionTypes";
import axios from "axios";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: AUTH_START });
  const token = getState().auth.token;
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Token ${token}`;
  }
  const config = { headers };
  axios
    .get("/api/accounts/user/", config)
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: AUTH_FAIL });
      console.log(err);
    });
};

export const login = (email, password) => (dispatch) => {
  dispatch({ type: AUTH_START });
  const headers = {
    "Content-Type": "application/json",
  };
  const config = { headers };
  const body = JSON.stringify({ email, password });
  axios
    .post("/api/accounts/login/", body, config)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: AUTH_FAIL });
      console.log(err.response.data);
    });
};
