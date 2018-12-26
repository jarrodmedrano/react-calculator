import {UPDATE_DISPLAY} from "./types";

export function updateDisplay(input) {
  return {
    type: UPDATE_DISPLAY,
    input
  }
}