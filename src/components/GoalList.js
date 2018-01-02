import React, { Component } from "react";
import { goalRef } from "../firebase";
import { connect } from 'react-redux';
import { setGoal } from '../actions'; 
import GoalItem from './GoalItem';

class GoalList extends Component {

	componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        const {email, title, data} = goal.val();
        goals.push({email, title, data})
      })
      this.props.setGoal(goals)
    })
  }

	render() {
		return (
      <div>
        <h3>Lista zadań</h3>
        <GoalItem />
        <div> 
        {
          this.props.goal.map((goal,index) => {
            return(
              <div>
              {console.log(goal.title)}
              <GoalItem key={index} title={goal.title} />
              </div>
            )
          })
        }
        </div>
      </div>
		)
	}
}

function mapStateToProps(state) {
  return {
    goal: state.goal
  }
}

export default connect(mapStateToProps,{ setGoal })(GoalList);