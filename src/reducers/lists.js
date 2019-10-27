import { ADD_LISTS } from "../actions/actionTypes";

const listsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LISTS:
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
};

export default listsReducer;
