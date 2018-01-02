import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {


	render() {
	//const { email, title } = this.props.goal;
		var floatLeft = {
			display: "inline-block",
			float: "right",
		}
		return (
			<div className={{ floatLeft }}>
			{console.log(this.props.title)}
				<strong>{this.props.title}</strong>
				<span style={{ marginRight: '5px' }}> submitted by <em></em></span>
				<button
					className="btn btn-sm btn-danger"
				
				>
					Delete
        </button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { user } = state;
	return {
		goal: state.goal,
		user: state.user
	}
}

export default connect(mapStateToProps, null)(GoalItem);

