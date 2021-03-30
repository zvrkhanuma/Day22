import React, { Component } from  'react';
const BoxSize = (props) => {
    return (
        <h2>This is a {props.size}px Box!</h2>
    )
}
class Box extends Component {
    render() {
        return (
            <BoxSize />
        )
    }
}

export default Box;