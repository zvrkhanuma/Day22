import React, { Component } from  'react';
const BoxComp = () => {
    return (
        <h2>This is a Box Component!</h2>
    )
}
class Box extends Component {
    render () {
        return (
            <BoxComp />
        )
    }
}
export default Box;