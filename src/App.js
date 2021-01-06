import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import ShowFlight from './components/ShowFlight';
import CreatePlane from './components/CreatePlane';
import CreateFlight from './components/CreateFlight';
import axios from 'axios';
import bootstrap from 'bootstrap';
import {Route, Link, HashRouter as Router} from 'react-router-dom';

const RAILS_PLANES_BASE_URL = 'http://localhost:3000/flights';

class App extends React.Component {

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
      <div className="App">

        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Find Your Flight</a>
          </div>
        </nav>


        <Router>

          <Route exact path="/" component={SearchForm} />
          <Route exact path="/results" component={SearchResults} />
          <Route exact path="/flight/:id" component={ShowFlight} />
          <Route exact path="/addplane" component={CreatePlane} />
          <Route exact path="/addflight" component={CreateFlight} />

        </Router></div>
    );

  } // render()

} // class App

export default App;
