import React, { Component } from "react";
import { connect } from 'react-redux';
import { firebaseApp } from "../firebase";
import AddGoal from "./AddGoal";
import GoalList from "./GoalList";


class App extends Component{

  signOut() {
    firebaseApp.auth().signOut();
  }

	render() {
		return (
			<div>
        <h2>App</h2>
        <AddGoal />
        <GoalList />
        <button className="btn btn-danger" onClick={() => this.signOut()}> Sign Out </button>
      </div>
		)
  }
}


export default App