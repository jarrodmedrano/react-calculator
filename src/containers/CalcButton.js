import React, { Component } from "react";
import { connect } from "react-redux";
import { clear, updateDisplay, buttonPress } from "../actions";

class CalcButton extends Component {
  handleClear = () => {
    this.props.clear();
  };

  handleClick = (inputValue, inputType, buttonType) => {
    if (inputType === "clear") {
      this.handleClear();
    } else if (inputValue === "0") {
      //dont allow multiple zeroes
      //do nothing
    } else if (
      (buttonType =
        "num" && this.props.pointer === 0 && this.props.display.length <= 1)
    ) {
      this.props.buttonPress(inputValue);
    } else if (buttonType === "num") {
      this.props.updateDisplay(inputValue);
    }
  };

  render() {
    const { inputType, value, buttonType } = this.props;

    return (
      <div>
        <button
          id={inputType}
          onClick={() => this.handleClick(value, inputType, buttonType)}
        >
          {value}
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    pointer: state.pointer,
    display: state.display
  }),
  { updateDisplay, clear, buttonPress }
)(CalcButton);
