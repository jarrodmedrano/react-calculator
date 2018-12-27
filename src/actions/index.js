import {
  ADD,
  INPUT_OPERATOR,
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
  UPDATE_POINTER,
  REPLACE_LAST_OPERATOR
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
    type: CLEAR
  };
}

export function equals() {
  return dispatch => {
    dispatch({
      type: EQUALS
    });
    dispatch(updatePointer());
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

export function inputDecimal(input) {
  return dispatch => {
    dispatch({
      type: INPUT_DECIMAL,
      payload: input
    });
    dispatch(updateDisplay(input));
    dispatch(updatePointer(input));
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

export function inputOperator(input) {
  return dispatch => {
    dispatch({
      type: INPUT_OPERATOR,
      payload: input
    });
    dispatch(updateDisplay(input));
  };
}

export function replaceLastOperator(input) {
  return dispatch => {
    dispatch({
      type: REPLACE_LAST_OPERATOR,
      payload: input
    });
    dispatch(inputOperator(input));
  };
}
