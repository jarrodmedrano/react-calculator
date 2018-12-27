import * as types from "../actions/types";
import math from "mathjs";

const initialState = {
  display: [0],
  pointer: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_DISPLAY:
      return Object.assign({}, state, {
        display: state.display.concat(action.payload)
      });
    case types.UPDATE_POINTER:
      return {
        ...state,
        pointer: state.display[state.display.length - 1]
      };
    case types.REPLACE_LAST_OPERATOR:
      return {
        ...state,
        display: [...state.display.slice(0, -1)]
      };
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
        ...state,
        display: [math.eval(state.display.join(""))]
      };
    case types.INPUT_DECIMAL:
      return {
        ...state
      };
    case types.INPUT_ZERO:
      return {
        ...state
      };
    case types.INPUT_OPERATOR:
      return {
        ...state
      };
    case types.REPLACE_FIRST_ZERO:
      return {
        ...state,
        display: [action.payload]
      };
    case types.CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;
