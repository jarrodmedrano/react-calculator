import React, { Component } from "react";
import "./App.css";
import Display from "./containers/Display";
import OperatorButton from "./containers/OperatorButton";
import NumberButton from "./containers/NumberButton";
import ClearButton from "./containers/ClearButton";
import ZeroButton from "./containers/ZeroButton";
import DecimalButton from "./containers/DecimalButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <div className="grid">
          <ClearButton inputType="clear" value="AC" />
          <OperatorButton inputType="divide" value="/" />
          <OperatorButton inputType="multiply" value="x" />
          <NumberButton inputType="seven" value="7" />
          <NumberButton inputType="eight" value="8" />
          <NumberButton inputType="nine" value="9" />
          <OperatorButton inputType="subtract" value="-" />
          <NumberButton inputType="four" value="4" />
          <NumberButton inputType="five" value="5" />
          <NumberButton inputType="six" value="6" />
          <OperatorButton inputType="add" value="+" />
          <NumberButton inputType="one" value="1" />
          <NumberButton inputType="two" value="2" />
          <NumberButton inputType="three" value="3" />
          <ZeroButton inputType="zero" value="0" />
          <DecimalButton inputType="decimal" value="." />
          <OperatorButton inputType="equals" value="=" />
        </div>
      </div>
    );
  }
}

export default App;
