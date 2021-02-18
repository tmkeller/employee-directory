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
    filtered: [],
    results: []
    // id, picture,name,phone,email,dob
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
    // Filter by the search term
    let filtered = this.state.results.filter( person => person.name.title === this.state.search || person.name.first === this.state.search || person.name.last === this.state.search || person.email === this.state.search || person.phone === this.state.search || person.id.value === this.state.search );
    console.log( "Filtered", filtered );
  }

  render() {  
    return (
      <Wrapper>
        <Title>Employees</Title>
        <form>
          <div className="form-group">      
            <input 
              onChange={ this.handleInputChange } 
              name="search" 
              className="form-control" 
              type="text" 
            />
          </div>
          <br/>
          <div className="form-group">
            <label>Sort by:</label>
            <select className="browser-default custom-select" name="sort_col">
              <option value="id">ID</option>
              <option value="name">Name</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="age">Age</option>
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
