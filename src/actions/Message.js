import { CREATE_MESSAGE } from "../actions/ActionTypes";

export const createMessage = (message, type = "info") => (dispatch) => {
  const payload = {
    text: message,
    type: type,
  };
  dispatch({ type: CREATE_MESSAGE, payload: payload });
};
