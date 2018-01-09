import React, { Component } from "react";
import { completeGoalRef,goalRef } from "../firebase";
import { connect } from 'react-redux';

class GoalItem extends Component {

	deleteGoal() {
		// remove this goal from the goals reference
		const { email } = this.props.user;
		const { title, serverKey } = this.props.goal;
		goalRef.child(serverKey).remove();
	}

	render() {
		var floatLeft = {
			display: "inline-block",
			float: "right",
			padding: "0 10px"
		}

		var block = {
			lineHeight: "3.5em"
		}
		return (
		<div style={block}>
			<span>{this.props.goal.title}</span>
				<span style={floatLeft}>
					<button
						className="btn btn-sm btn-primary"
						onClick={() => this.deleteGoal()}
					>
						Delete
					</button>
				</span>
			{
				(() => {
          switch (this.props.goal.data) {
              case undefined: return (<span style={floatLeft}> brak daty utworzenia</span>);
              default: return (<span style={floatLeft}> data utworzenia: {this.props.goal.data}</span>);
          }
				})()
				}	
		</div>
    )
	}
}
		

function mapStateToProps(state) {
	return {
		user: state.user,
	//	goal: state.goal
	}
}

export default connect(mapStateToProps, null)(GoalItem);
