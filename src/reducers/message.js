import {
  CREATE_MESSAGE,
  CREATE_ERROR,
  CLEAR_ERROR,
} from "../actions/ActionTypes";

const initialState = {
  message: { text: "", type: "" },
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case CREATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return {
        ...state,
      };
  }
}
