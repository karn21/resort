import { CREATE_MESSAGE } from "../actions/ActionTypes";

const initialState = {
  message: { text: "", type: "" },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return {
        ...initialState,
        message: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
