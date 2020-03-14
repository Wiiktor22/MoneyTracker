import React from 'react';
import Home from './components/layout/Home/Home';
import StartPage from './components/layout/StartPage/StartPage';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './components/layout/Profile/Profile';

function App({ auth }) {
  return (
    <Router>
      {(!auth.uid) && <Redirect to='/login' />}
      <div className="app">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={StartPage} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
