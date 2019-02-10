import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";

class Display extends Component {
  render() {
    return <div id="display">{this.props.display}</div>;
  }
}

const mapStateToProps = state => {
  return {
    display: state.display
  };
};

export default connect(mapStateToProps)(Display);
