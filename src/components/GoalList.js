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
        const serverKey = goal.key;
        goals.push({email, title, data, serverKey})
      })
      this.props.setGoal(goals)
      
    })
  }

	render() {
    var floatLeft = {
      display: "inline-block",
      float: "right",
    }
		return (
      <div>
        <h3>Lista zadań</h3>
        <div> 
          <ol>
        {
          this.props.goal.map((goal,index) => {
            return(
                <li>
                <GoalItem goal={goal} key={index}/>
                </li>
            )
          })
        }
        </ol>
        </div>
      </div>
		)
	}
}

function mapStateToProps(state) {
  return {
    goal: state.goal,
    // user: state.user
  }
}

export default connect(mapStateToProps,{ setGoal })(GoalList);