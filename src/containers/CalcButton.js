import React, {Component} from 'react';
import {connect} from "react-redux";
import {updateDisplay} from "../actions";

class CalcButton extends Component {

  render() {
    const { inputType, value } = this.props;

    return (
      <div>
        <button id={inputType} onClick={() => this.props.updateDisplay(inputType)} >{value}</button>
      </div>
    );
  }
}



export default connect(null, {updateDisplay})(CalcButton);
