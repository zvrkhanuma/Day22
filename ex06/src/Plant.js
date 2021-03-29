import React, { Component } from  'react';
const PlantComponent = () => {
    return (
        <h2>This is a Plant Component!</h2>
    )
}
class Plant extends Component {
    render () {
        return (
            <PlantComponent />
        )
    }
}
export default Plant;