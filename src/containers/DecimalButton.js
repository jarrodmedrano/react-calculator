import React, { Component } from "react";
import { connect } from "react-redux";
import { inputDecimal } from "../actions";

class DecimalButton extends Component {
  filterDecimals = input => {
    return input.filter(item => {
      return item === ".";
    });
  };

  handleClick = inputValue => {
    if (!this.filterDecimals(this.props.display).length) {
      this.props.inputDecimal(inputValue);
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
  { inputDecimal }
)(DecimalButton);
