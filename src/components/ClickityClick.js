// Code ClickityClick Component Here
import React, { Component } from 'react'

class ClickityClick extends Component {
    constructor() {
        super();

        // Define the initial state:
        this.state = {
            hasBeenClicked: false
        };
    }

    // Different ways to write the this.setState 

    // handleClick = () => {
    //     // Update our state here...
    //     this.setState({ hasBeenClicked: !this.state.hasBeenClicked })
    // };

    // handleClick = () => {
    //     const prevState = this.state.hasBeenClicked
    //     this.setState({ hasBeenClicked: !prevState })
    // };

    // handleClick = () => {
    //     this.setState(function(prevState, props) {
    //         return {hasBeenClicked: !prevState.hasBeenClicked}
    //     })
    // }

    handleClick = () => {
        this.setState(state => ({hasBeenClicked: !state.hasBeenClicked}))
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick