import {
  ADD,
  BUTTON_PRESS,
  CLEAR,
  DIVIDE,
  EQUALS,
  INPUT_DECIMAL,
  INPUT_NUMBER,
  INPUT_ZERO,
  MULTIPLY,
  SUBTRACT,
  UPDATE_DISPLAY
} from "./types";

export function updateDisplay(input) {
  return {
    type: UPDATE_DISPLAY,
    payload: input
  };
}

export function clear() {
  return {
    type: CLEAR,
    payload: []
  };
}

export function equals() {
  return {
    type: EQUALS
  };
}

export function subtract() {
  return {
    type: SUBTRACT
  };
}

export function divide() {
  return {
    type: DIVIDE
  };
}

export function multiply() {
  return {
    type: MULTIPLY
  };
}

export function inputDecimal() {
  return {
    type: INPUT_DECIMAL
  };
}

export function inputZero() {
  return {
    type: INPUT_ZERO
  };
}

export function add() {
  return {
    type: ADD
  };
}

export function inputNumber(input) {
  return dispatch => {
    dispatch(updateDisplay(input));
    return {
      type: INPUT_NUMBER,
      payload: input
    };
  };
}

export function buttonPress(input) {
  return {
    type: BUTTON_PRESS,
    payload: input
  };
}
