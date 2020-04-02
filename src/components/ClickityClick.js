import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    this.setState( previousState => {
        return {hasBeenClicked: !previousState.hasBeenClicked}
    })
  }
   
 
  render() {
    return (
      <div>
        <p>I'm {this.state.hasBeenClicked ? 'ON' : 'OFF'} </p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
 