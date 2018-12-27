import React, { Component } from "react";
import { connect } from "react-redux";
import { clear, updateDisplay, inputOperator, inputNumber } from "../actions";

class ZeroButton extends Component {
  handleClick = inputValue => {
    if (this.props.pointer !== 0 && this.props.display.length >= 1) {
      this.props.inputNumber(inputValue);
    }
  };

  render() {
    const { inputType, value } = this.props;

    return (
      <div>
        <button id={inputType} onClick={() => this.handleClick(value)}>
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
  { updateDisplay, clear, buttonPress: inputOperator, inputNumber }
)(ZeroButton);
