import {UPDATE_DISPLAY} from "../actions/types";

const initialState = {
  display: []
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_DISPLAY:
      return Object.assign({}, state, {
        display: state.display.concat(action.payload)
      });
    default:
      return state
  }
};

export default rootReducer;