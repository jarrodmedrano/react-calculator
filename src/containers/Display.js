import React, {Component} from 'react';

class Display extends Component {
  render() {
    const {inputs} = this.props;
    return (
      <div id="display">
        {inputs}
      </div>
    );
  }
}

export default Display;