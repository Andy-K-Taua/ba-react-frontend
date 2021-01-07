import React from 'react';
import axios from 'axios';
import {/*Route,*/ Link, HashRouter as Router} from 'react-router-dom';

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
            <Router>


        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-brand">Find Your Flight</div>
          </div>
        </nav>
            <table className="table">
              <thead>
                <th scope="col">Flight Number</th>
                <th scope="col">Origin</th>
                <th scope="col">Destination</th>
                <th scope="col">Date</th>
              </thead>
            </table>
                <ul className="list-group">
                { this.state.search.map( r => <Link to={`/flight/${r.id}`} key={r.id}>
                  <td>{r.number}</td>
                  <td>{r.origin}</td>
                  <td>{r.destination}</td>
                  <td>{r.date}</td>
                  <td></td>
                </Link>
                )}
              </ul>

          </Router>

      </div>
    );
  }
} // SearchResults

export default SearchResults;
