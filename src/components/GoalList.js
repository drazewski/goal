import React, { Component } from "react";
import { goalRef } from "../firebase";
import { connect } from 'react-redux';
import { setGoal } from '../actions'; 
import GoalItem from './GoalItem';
import PropTypes from 'prop-types';

class GoalList extends Component {

  static propTypes = {
    setGoal: PropTypes.func.isRequired,
  };

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
      <React.Fragment>
        <h3>Lista zadań</h3>
        
        {
          this.props.goal.map((goal,index) => {
            return(
                
                <GoalItem goal={goal} key={index}/>
              
            )
          })
        }
        
      </React.Fragment>
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