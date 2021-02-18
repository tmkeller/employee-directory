import React from "react";
import "./style.css";

function Form( props ) {
  return (
    <form>
      <div className="form-group">      
        <input 
          onChange={ props.handleInputChange } 
          name="search" 
          className="form-control" 
          type="text" 
        />
      </div>
      <br/>
      <div className="form-group">
        <label>Sort by:</label>
        <select 
          onChange={ props.handleInputChange } 
          className="browser-default custom-select" 
          name="sortBy"
          defaultValue="disabled"
        >
          <option value="disabled" disabled>Sort by:</option>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
          <option value="age">Age</option>
        </select>
      </div>
      <div className="form-group">  
        <button onClick={ props.handleFormSubmit } className="btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
