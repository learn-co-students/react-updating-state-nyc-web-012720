import React from 'react'

export default class LightSwitch extends React.Component {
    state = {
        toggled: false
    }

    handleClick = () => {
        this.setState(prevState => {
            return {toggled: !prevState.toggled}
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
            </div>
        )
    }
}