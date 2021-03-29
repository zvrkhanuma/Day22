// src/App.js
import React, { Component } from  'react';
import Box from './Box'; // Add this line inside the src/App.js file
class App extends Component {
    render() {
        return (
            <div className="container">
                <Box />
                
            </div>
        )
    }
}
export default App;
