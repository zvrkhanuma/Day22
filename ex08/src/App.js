// src/App.js
import React, { Component } from  'react';
import Table from './Table'; // Add this line inside the src/App.js file
class App extends Component {
    render() {
        const characters = [
            {
                firstName: 'Lary',
                lastName: 'Page',
            },
            {
                firstName: 'Ada',
                lastName: 'Lovelace',   
            },
            {
                firstName: 'Alan',
                lastName: 'Turing',    
            },
        ]
return (
    <div className="container">
        <Table characters={characters}/>
    </div>
)
}
}

export default App;