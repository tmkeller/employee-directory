import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = { 
    employees: [
      {
        name: "John Johnson",
        occupation: "Blacksmith",
        location: "New York, NY",
        id: 1,
      },
      {
        name: "Susan Smith",
        occupation: "Tailor",
        location: "Seattle, WA",
        id: 2,
      },
      {
        name: "Rex McCrexler",
        occupation: "Doctor",
        location: "Grabbitland, PA",
        id: 3,
      },
      {
        name: "Sammy Squiggles",
        occupation: "Lawyer",
        location: "Los Angeles, CA",
        id: 4,
      },
    ]
  }

  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
