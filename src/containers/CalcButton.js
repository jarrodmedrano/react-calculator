import React, {Component} from 'react';
import {connect} from "react-redux";
import {updateDisplay} from "../actions";

class CalcButton extends Component {

  render() {
    const { inputType, value, updateDisplay } = this.props;

    return (
      <div>
        <button id={inputType} onClick={() => updateDisplay(value)} >{value}</button>
      </div>
    );
  }
}



export default connect(null, {updateDisplay})(CalcButton);
