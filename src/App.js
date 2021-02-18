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
    sortBy: "",
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
        this.setState({ results: res.data.results, filtered: res.data.results })
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
    // Filter by the search term. Complicated chain of 'equals' and 'or' that tests each property in 
    // an array object to check if it contains the string put into the input.
    let filtered = this.state.results;
    if ( this.state.search ) { 
      filtered = this.state.results.filter( person => 
        ( person.name.title ) === this.state.search || 
        ( person.name.first ) === this.state.search || 
        ( person.name.last ) === this.state.search || 
        ( person.email ) === this.state.search || 
        ( person.phone ) === this.state.search || 
        ( person.id.value ) === this.state.search );
    }
    console.log( "Filtered", filtered );
    // TODO: Implement the sort method on the filtered array in a unique way depending on the selected option.
    let sortBy = this.state.sortBy;
    console.log( "sortBy", sortBy);
    if ( sortBy ) {
      switch ( sortBy ) {
        case "id":
          filtered.sort(( a, b ) => a.id.value < b.id.value ? -1 : 1 );
          break
        case "name":
          filtered.sort(( a, b ) => a.name.last < b.name.last ? -1 : 1 );
          break
        case "phone":
          filtered.sort(( a, b ) => a.phone < b.phone ? -1 : 1 );
          break
        case "email":
          filtered.sort(( a, b ) => a.email < b.email ? -1 : 1 );
          break
        case "age": 
          filtered.sort(( a, b ) => a.dob.age < b.dob.age ? -1 : 1 );
          break
      }
    }
    this.setState({
      filtered: filtered
    })
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
            <select 
              onChange={ this.handleInputChange } 
              className="browser-default custom-select" 
              name="sortBy"
            >
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
            { this.state.filtered.map( ( elem, index ) => <EmployeeRow
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
