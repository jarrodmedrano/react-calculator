import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";

class Display extends Component {
  render() {
    return (
      <div id="display">
        <div>{this.props.display}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    display: state.display
  };
};

export default connect(mapStateToProps)(Display);
