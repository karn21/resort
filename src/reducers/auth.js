import {
  AUTH_START,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_FAIL,
} from "../actions/ActionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isLoading: false,
  isAuthenticated: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case AUTH_FAIL:
      return {
        ...initialState,
        isLoading: false,
      };
    case USER_LOADED:
      return {
        ...initialState,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...initialState,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
}
