import React, { Component } from "react";
import "./App.css";
import Display from "./containers/Display";
import CalcButton from "./containers/CalcButton";
import NumberButton from "./containers/NumberButton";
import ClearButton from "./containers/ClearButton";
import ZeroButton from "./containers/ZeroButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <div className="grid">
          <ClearButton inputType="clear" value="AC" />
          <CalcButton inputType="divide" value="/" />
          <CalcButton inputType="multiply" value="x" />
          <NumberButton inputType="seven" value="7" buttonType="num" />
          <NumberButton inputType="eight" value="8" buttonType="num" />
          <NumberButton inputType="nine" value="9" buttonType="num" />
          <CalcButton inputType="subtract" value="-" />
          <NumberButton inputType="four" value="4" buttonType="num" />
          <NumberButton inputType="five" value="5" buttonType="num" />
          <NumberButton inputType="six" value="6" buttonType="num" />
          <CalcButton inputType="add" value="+" />
          <NumberButton inputType="one" value="1" buttonType="num" />
          <NumberButton inputType="two" value="2" buttonType="num" />
          <NumberButton inputType="three" value="3" buttonType="num" />
          <ZeroButton inputType="zero" value="0" />
          <CalcButton inputType="decimal" value="." />
          <CalcButton inputType="equals" value="=" />
        </div>
      </div>
    );
  }
}

export default App;
