import React from 'react';
import '../App.css';
import axios from 'axios';



class SearchForm extends React.Component {

  state = {
    query: ''
  };

  handleChange = (ev) => {
    console.log('handleChange():', ev.target.value);
    this.setState({ query: ev.target.value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('submit!');
  }


  render() {

    return (

      <div className="searchForm">
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange={ this.handleChange } />
          <button>Search</button>
          <br />{ this.state.query }
        </form>

      </div>
    );

  } // render()

} // class SearchForm

export default SearchForm;
