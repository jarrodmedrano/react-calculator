import {UPDATE_DISPLAY} from "../actions/types";

const initialState = {

};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_DISPLAY:
      return Object.assign({}, state, {
        display: action.payload
      });
    default:
      return state
  }
};

export default rootReducer;