import React, { Component } from "react";
import { connect } from "react-redux";
import { equals } from "../actions";

class EqualsButton extends Component {
  handleClick = () => {
    this.props.equals();
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
  { equals }
)(EqualsButton);
