import React, { Component } from "react";
import { connect } from "react-redux";
import { inputOperator, replaceLastOperator } from "../actions";

class OperatorButton extends Component {
  handleClick = (inputValue, inputType) => {
    const reg = new RegExp("^([+\\-*/])$");

    if (!reg.test(this.props.pointer)) {
      this.props.inputOperator(inputValue);
    } else {
      this.props.replaceLastOperator(inputValue);
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
  { inputOperator, replaceLastOperator }
)(OperatorButton);
