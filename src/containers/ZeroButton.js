import React, { Component } from "react";
import { connect } from "react-redux";
import { clear, updateDisplay, buttonPress } from "../actions";

class ZeroButton extends Component {
  handleClear = () => {
    this.props.clear();
  };

  handleClick = (inputValue, inputType, buttonType) => {};

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
)(ZeroButton);
