import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import ShowFlight from './components/ShowFlight'
import CreatePlane from './components/CreatePlane'
import CreateFlight from './components/CreateFlight'

import {Route, Link, HashRouter as Router} from 'react-router-dom';

class App extends React.Component {

  render() {

    return (
      <div>

        <Router>

          <Route exact path="/" component={SearchForm} />
          <Route exact path="/results" component={SearchResults} />
          <Route exact path="/flight/:id" component={ShowFlight} />
          <Route exact path="/addplane" component={CreatePlane} />
          <Route exact path="/addflight" component={CreateFlight} />

        </Router>

      </div>
    );

  } // render()

} // class App

export default App;
