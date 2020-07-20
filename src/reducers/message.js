import { CREATE_MESSAGE, CREATE_ERROR } from "../actions/ActionTypes";

const initialState = {
  message: { text: "", type: "" },
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return {
        ...initialState,
        message: action.payload,
      };
    case CREATE_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
