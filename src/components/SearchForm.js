import React from 'react';
import '../App.css';



class SearchForm extends React.Component {

  state = {
    query: ''
  };

  handleChange = (ev) => {
    console.log('handleChange():', ev.target.value);
    this.setState({ query: ev.target.value });
  }//handleChange

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('submit!');
    // Send search query to parent component
    // this.props.onSearch( this.state.query );
    this.props.history.push(`/results/${this.state.query}`);
  }// handleSubmit


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
