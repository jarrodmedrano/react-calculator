import React, { Component } from "react";
import { connect } from "react-redux";
import { clear, updateDisplay, inputOperator } from "../actions";

class ClearButton extends Component {
  handleClick = () => {
    this.props.clear();
  };

  render() {
    const { inputType, value } = this.props;

    return (
      <div>
        <button id={inputType} onClick={() => this.handleClick()}>
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
  { updateDisplay, clear, buttonPress: inputOperator }
)(ClearButton);
