import React from 'react';

class SearchResults extends React.Component {

  state = {
    query: ''
  };
  
  handleChange = (ev) => {
    this.setState({ query: ev.target.value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('submit!');
    // Send search query to parent component
    this.props.onSearch( this.state.query );
  }

  render(){
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" onChange={ this.handleChange } />
        <button>Search</button>
        <br />{ this.state.query }
      </form>
    );

  } // render()

} // class SearchResults

export default SearchResults
