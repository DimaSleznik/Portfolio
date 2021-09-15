import { profileActionsTypes } from "./actions";
const intialState = {
  value: null,
};
export const profileReducer = (state = intialState, action) => {
  switch (action.type) {
    case profileActionsTypes.SOME_ACTION:
      return { ...state };
    case profileActionsTypes.ANOTHER_ACTION:
      return { ...state };
    default:
      return state;
  }
};
