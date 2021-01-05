import React from 'react';
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';

class SearchForm extends React.Component {

  render() {

    return (
      <div className>"Search Form"
      <h1>HEADING</h1>
      <hr />

      <SearchForm onSearch={ this.performSearch} />

      </div>
    );

  } // render()

} // class SearchForm

export default SearchForm
