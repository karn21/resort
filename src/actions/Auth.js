import {
  AUTH_START,
  AUTH_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
} from "../actions/ActionTypes";
import axios from "axios";
import { createMessage, createError } from "./Message";

// helper method to get request config
const getConfig = (getState = null) => {
  const headers = {
    "Content-Type": "application/json",
  };
  if (getState) {
    const token = getState().auth.token;
    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }
  }
  return { headers };
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: AUTH_START });
  const config = getConfig(getState);
  axios
    .get("/api/accounts/user/", config)
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: AUTH_FAIL });
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
      dispatch(createMessage("You are now logged in!", "success"));
    })
    .catch((err) => {
      dispatch({ type: AUTH_FAIL });
      dispatch(createError(err.response.data.message));
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch({ type: AUTH_START });
  const config = getConfig(getState);
  axios
    .get("/api/accounts/logout", config)
    .then((res) => {
      dispatch({ type: LOGOUT });
      dispatch(createMessage("Logged out successfully", "success"));
    })
    .catch((err) => console.log(err));
};

export const register = (email, firstname, lastname, password) => (
  dispatch
) => {
  dispatch({ type: AUTH_START });
  const config = getConfig();
  const data = JSON.stringify({ email, firstname, lastname, password });
  axios
    .post("/api/accounts/register/", data, config)
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS });
      setTimeout(() => {
        window.location.href = "/login/";
      }, 1000);
      dispatch(
        createMessage(
          "Your account has been created. You can now log in",
          "success"
        )
      );
    })
    .catch((err) => {
      dispatch(createError(err.response.data.message));
    });
};
