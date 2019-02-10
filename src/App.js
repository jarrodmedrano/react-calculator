import React, { Component } from "react";
import "./App.css";
import Display from "./components/Display";
import OperatorButton from "./components/OperatorButton";
import NumberButton from "./components/NumberButton";
import ClearButton from "./components/ClearButton";
import ZeroButton from "./components/ZeroButton";
import DecimalButton from "./components/DecimalButton";
import EqualsButton from "./components/EqualsButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Calculator</h1>

        <Display />
        <div className="grid">
          <div className="grid-2">
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
          </div>
          <div>
            <ClearButton inputType="clear" value="AC" />
            <OperatorButton inputType="divide" value="/" />
            <OperatorButton inputType="multiply" value="*" />
            <EqualsButton inputType="equals" value="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
