import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from "react-router";
import App from './components/App'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

// I need react-router v.3

ReactDOM.render(
	<Router path="/" history={browserHistory}>
		<Route path="/app" component={App} />
    <Route path="/app" component={App} />
    <Route path="/app" component={App} />
	</Router>, document.getElementById('root')
);
