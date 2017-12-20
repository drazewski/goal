import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { firebaseApp } from './firebase';
import App from './components/App'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed in or up', user);
    // const { email } = user;
    // store.dispatch(logUser(email));
    // browserHistory.push('/app');
  } else {
    console.log('user has signed out or still needs to sign in.')
    // browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Router>
    <div className="container">
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  </Router>, document.getElementById('root')
);
