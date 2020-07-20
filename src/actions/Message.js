import {
  CREATE_MESSAGE,
  CREATE_ERROR,
  CLEAR_ERROR,
} from "../actions/ActionTypes";

export const createMessage = (message, type = "info") => (dispatch) => {
  const payload = {
    text: message,
    type: type,
  };
  dispatch({ type: CREATE_MESSAGE, payload: payload });
};

export const createError = (err) => (dispatch) => {
  dispatch({ type: CREATE_ERROR, payload: err });
};

export const clearError = () => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
