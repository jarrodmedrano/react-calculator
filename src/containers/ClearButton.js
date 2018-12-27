import React, { Component } from "react";
import { connect } from "react-redux";
import { clear, updateDisplay, buttonPress } from "../actions";

class ClearButton extends Component {
  handleClick = () => {
    this.props.clear();
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
)(ClearButton);
