import React, { Component } from 'react';

class Shared extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: props.message
        }
    }

    render() {
        return(<p>
            I have a message for you: {this.props.message}.
        </p>);
    }

}

export default Shared;