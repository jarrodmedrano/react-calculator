import * as types from "../actions/types";

const initialState = {
  display: [0],
  pointer: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_DISPLAY:
      return Object.assign({}, state, {
        display: state.display.concat(action.payload),
        pointer: state.display[state.display.length - 1]
      });

    case types.ADD:
      return {
        ...state
      };
    case types.DIVIDE:
      return {
        ...state
      };
    case types.MULTIPLY:
      return {
        ...state
      };
    case types.EQUALS:
      return {
        ...state
      };
    case types.INPUT_DECIMAL:
      return {
        ...state
      };
    case types.INPUT_ZERO:
      return {
        ...state
      };
    case types.BUTTON_PRESS:
      return {
        ...state,
        display: [...state.display.splice(0, 1, action.payload)],
        pointer: state.display[state.display.length - 1]
      };
    case types.CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;
