import React, { Component } from "react";
import { connect } from "react-redux";
import { clear, updateDisplay, inputOperator } from "../actions";

class OperatorButton extends Component {
  handleClick = (inputValue, inputType) => {
    const reg = new RegExp("^([+\\-x/])$");

    if (!reg.test(this.props.pointer)) {
      this.props.inputOperator(inputValue);
    }
  };

  render() {
    const { inputType, value } = this.props;

    return (
      <div>
        <button
          id={inputType}
          onClick={() => this.handleClick(value, inputType)}
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
  { updateDisplay, clear, inputOperator }
)(OperatorButton);
