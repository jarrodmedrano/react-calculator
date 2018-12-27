import React, { Component } from "react";
import { connect } from "react-redux";
import { inputNumber } from "../actions";

class NumberButton extends Component {
  handleClick = inputValue => {
    this.props.inputNumber(inputValue);
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
  { inputNumber }
)(NumberButton);
