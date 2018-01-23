import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'; 
import reducer from './reducers'
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import App from './components/App'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { createHashHistory } from 'history'

const history = createHashHistory();
const store = createStore(reducer, /* preloadedState, */
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    //console.log('user has signed in or up', user.email);
    const { email } = user;
    store.dispatch(logUser(email));
    history.push('/app')
  } else {
    //console.log('user has signed out or still needs to sign in.')
    history.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <div className="container">
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  </Router>
  </Provider>, document.getElementById('root')
);
