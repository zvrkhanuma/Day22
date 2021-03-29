// src/App.js
import React, { Component } from  'react';
import Plant from './Plant'; // Add this line inside the src/App.js file
class App extends Component {
    render() {
        return (
            <div className="container">
                <Plant />
                
            </div>
        )
    }
}
export default App;