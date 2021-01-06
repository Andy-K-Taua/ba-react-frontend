import React from 'react';
import axios from 'axios';

const RAILS_PLANES_BASE_URL = 'http://localhost:3000/flights';

class SearchResults extends React.Component {

  state = {
    search: []
  }

  getSearchResults = () => {
    axios.get( RAILS_PLANES_BASE_URL )
    .then( ( res ) => {
      console.log('response:', res.data );
      this.setState({search: res.data })
    })
    .catch(console.warn);
  }//getSearchResults



  componentDidMount(){
    console.log('Mounted');
    this.getSearchResults();

  }// componentDidMount

  saveSearch = (search) => {
    console.log('saveSearch()', {search});
    axios.post(RAILS_PLANES_BASE_URL, {search: search })
    .then( (res) => {
      console.log('response from POST:', res.data);
      this.setState({ search: [res.data, ...this.state.search ]})
    })
    .catch(console.warn);
  }//saveSearch


  render() {

    return (
      <div>
        <table className="table">
              <thead>
                <tr>
                  <th scope="col">Flight Number</th>
                  <th scope="col">Origin</th>
                  <th scope="col">Destination</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.state.search.map( r => <tr key={r.id}>
                  <td>{r.number}</td>
                  <td>{r.origin}</td>
                  <td>{r.destination}</td>
                  <td></td>
                  </tr>
                )}
              </tbody>
            </table>
      </div>
    );
  }
} // SearchResults

export default SearchResults;
