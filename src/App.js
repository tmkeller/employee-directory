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
      <Wrapper>
        <Title>Employees</Title>
        { this.state.employees.map( elem => <EmployeeCard name={ elem.name }
          image={ elem.image }
          occupation={ elem.occupation }
          location={ elem.location } 
          id={ elem.id }
          delete={ this.deleteFunction } />)}
      </Wrapper>
    );
  }
}

export default App;
