import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signIn() {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    return (
      <div className="form-inline">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="email" onChange={event => this.setState({ email: event.target.value })} />
          <input className="form-control" type="password" placeholder="password" onChange={event => this.setState({ password: event.target.value })} />
          <div>
            <button className="btn btn-primary" type="button" onClick={() => this.signIn()} >Sign In</button>
          </div>
        </div>
        <h5>{this.state.error.message}</h5>
        <h4><Link to={'/signup'}>Zarejestruj się</Link></h4>
      </div>
    )
  }
}
export default SignIn