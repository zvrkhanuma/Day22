import React, { Component } from  'react';
const FlowerColor = (props) => {
    return (
        <h2>This is a {this.props.color} Flower!</h2>
    )
}
class Flower extends Component {
    render() {
        return (
            <FlowerColor />
        )
    }
}

export default Flower;
