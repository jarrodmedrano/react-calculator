import React, { Component } from 'react';
import './App.css';
import Display from "./containers/Display";
import CalcButton from "./containers/CalcButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display/>
        <div className="grid">
          <CalcButton inputType="clear" value="AC" />
          <CalcButton inputType="divide" value="/" />
          <CalcButton inputType="multiply" value="x" />
          <CalcButton inputType="seven" value="7" />
          <CalcButton inputType="eight" value="8" />
          <CalcButton inputType="nine" value="9" />
          <CalcButton inputType="subtract" value="-" />
          <CalcButton inputType="four" value="4" />
          <CalcButton inputType="five" value="5" />
          <CalcButton inputType="six" value="6" />
          <CalcButton inputType="add" value="+" />
          <CalcButton inputType="one" value="1" />
          <CalcButton inputType="two" value="2" />
          <CalcButton inputType="three" value="3" />
          <CalcButton inputType="zero" value="0" />
          <CalcButton inputType="decimal" value="." />
          <CalcButton inputType="equals" value="=" />
        </div>
      </div>
    );
  }
}

export default App;
