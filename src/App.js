import React from 'react';
import EmployeeRow from './components/EmployeeRow';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import API from "./utils/API";
import './App.css';

require('dotenv').config()

class App extends React.Component {

  state = { 
    search: "",
    results: []
    // id, picture,name,phone,email,dob
  }

  deleteFunction = ( id ) => {
    this.setState({ friends: this.state.friends.filter( elem => id != elem.id ) });
  }

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchRandomAPI();
  }

  searchRandomAPI = query => {
    API.search(query)
      .then( ( res ) => {
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

  handleFormSubmit = event => {
    event.preventDefault();
    // TODO: Get the results state.
    // TODO: Sort the array.
    // TODO: Filter the array by the element you want to filter it by.
    // TODO: Set the state to the new array.
    // TODO: Celebrate.
  }

  render() {  
    return (
      <Wrapper>
        <Title>Employees</Title>
        <form>
          <div className="form-group">      
            <input className="form-control" type="text"></input>
          </div>
          <br/>
          <div className="form-group">
            <label>Sort by:</label>
            <select className="browser-default custom-select">
              <option value="ID">ID</option>
              <option value="Name">Name</option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
              <option value="Age">Age</option>
            </select>
          </div>
          <div className="form-group">  
            <button onClick={ this.handleFormSubmit } className="btn-primary">
              Search
            </button>
          </div>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            { this.state.results.map( ( elem, index ) => <EmployeeRow
              key={ index }
              SSN={ elem.id.value }
              name={ elem.name }
              picture={ elem.picture }
              phone={ elem.phone }
              email={ elem.email } 
              dob={ elem.dob } 
            />)}
          </tbody>
        </table>
      </Wrapper>
    );
  }
}

export default App;
