// Code ClickityClick Component Here


import React, { Component } from 'react';

class ClickityClick extends Component {

  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    if (this.state){
      this.setState((prevState) => ({
        hasBeenClicked: !prevState.hasBeenClicked
      }))
    } 
  }

  render() {

    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
    <button onClick={this.handleClick}>{this.state.hasBeenClicked ? "Thanks for Clicking me!" : "Click me!"}</button>
      </div>
    );
  }
}


export default ClickityClick;