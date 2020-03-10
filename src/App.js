import React from 'react';
import Home from './components/layout/Home/Home';
import StartPage from './components/layout/StartPage/StartPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={StartPage} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps)(App);
