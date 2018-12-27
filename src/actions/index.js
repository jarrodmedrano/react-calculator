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
  UPDATE_DISPLAY,
  REPLACE_FIRST_ZERO,
  UPDATE_POINTER
} from "./types";

export function updateDisplay(input) {
  return dispatch => {
    dispatch({
      type: UPDATE_DISPLAY,
      payload: input
    });
    dispatch(updatePointer(input));
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
    dispatch({
      type: INPUT_NUMBER,
      payload: input
    });
    dispatch(updateDisplay(input));
  };
}

export function updatePointer(input) {
  return {
    type: UPDATE_POINTER,
    payload: input
  };
}

export function replaceFirstZero(input) {
  return dispatch => {
    dispatch({
      type: REPLACE_FIRST_ZERO,
      payload: input
    });
    dispatch(updatePointer(input));
  };
}

export function buttonPress(input) {
  return {
    type: BUTTON_PRESS,
    payload: input
  };
}
