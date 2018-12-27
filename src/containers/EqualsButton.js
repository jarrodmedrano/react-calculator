import React, { Component } from "react";
import { connect } from "react-redux";
import { inputOperator, replaceLastOperator } from "../actions";

class EqualsButton extends Component {
  handleClick = inputValue => {};

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
  { inputOperator, replaceLastOperator }
)(EqualsButton);
