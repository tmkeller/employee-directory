import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import API from "./utils/API";
import './App.css';

require('dotenv').config()

class App extends React.Component {

  state = { 
    search: "",
    results: [],
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

  deleteFunction = ( id ) => {
    this.setState({ friends: this.state.friends.filter( elem => id != elem.id ) });
  }

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchRandomAPI("&");
  }

  searchRandomAPI = query => {
    API.search(query)
      .then( ( res ) => {
        console.log( "API data", res.data.results )
        this.setState({ results: res.data.results })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };


  render() {  
    return (
      <Wrapper>
        <Title>Employees</Title>
        { this.state.results.map( elem => <EmployeeCard 
          key={ elem.id }
          name={ elem.name }
          image={ elem.image }
          occupation={ elem.occupation }
          location={ elem.location } 
          delete={ this.deleteFunction } />)}
      </Wrapper>
    );
  }
}

export default App;
