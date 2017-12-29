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
    var floatLeft = {
      display: "inline-block",
      float: "right",
    }
		return (
      <div>
        <h3>Lista zadań</h3>
        <GoalItem />
        <div> 
        {
          this.props.goal.map((goal,index) => {
            return(
              <div key={index} ><span>{goal.title}</span>
              
              {
                (() => {
                  switch (goal.data) {
                    case undefined: return (<span style={floatLeft}> brak daty utworzenia</span>);
                      default: return (<span style={floatLeft}> data utworzenia: {goal.data}</span>);
                  }
                })()
              }
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
    goal: state.goal,
    user: state.user
  }
}

export default connect(mapStateToProps,{ setGoal })(GoalList);