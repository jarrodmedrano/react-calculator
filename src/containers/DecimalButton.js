import React, { Component } from "react";
import { connect } from "react-redux";
import { inputDecimal } from "../actions";
const reg = new RegExp("^([+\\-*/])$");
class DecimalButton extends Component {
  //map backwards from pointer until you find an operator
  //split that chunk into an array
  //filter that array and if there is a decimal don't put a new one in.

  mapBackwards = input => {
    const mapped = [...input].reverse().map((item, index) => {
      if (reg.test(item)) {
        return "operator";
      } else if (item === ".") {
        return true;
      }
      return false;
    });

    const operatorIndex = mapped.indexOf("operator");

    const sliced = mapped.slice(0, operatorIndex);
    if (sliced.length) {
      return sliced.reduce((prev, curr) => {
        if (prev === true) {
          return true;
        } else if (curr === true) {
          return true;
        }
        return false;
      });
    }
    return false;
  };

  handleClick = inputValue => {
    const { display, pointer } = this.props;

    if (pointer !== ".") {
      if (this.mapBackwards(display) === true) {
      } else {
        this.props.inputDecimal(inputValue);
      }
    }
  };

  render() {
    const { inputType, value } = this.props;

    return (
      <div className="decimal">
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
