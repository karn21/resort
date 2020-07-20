import { CREATE_MESSAGE } from "../actions/ActionTypes";

export const createMessage = (message) => (dispatch) => {
  dispatch({ type: CREATE_MESSAGE, payload: message });
};
