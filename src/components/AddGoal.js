import React, { Component } from "react";
import { connect } from 'react-redux';
import { goalRef } from "../firebase"

class AddGoal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			data: ''
		}
  }

	addGoal() {
    const { email } = this.props.user
		const { title } = this.state
		const { data } = this.state
    goalRef.push({email, title, data})
    document.getElementById("newGoal").value = ''
  }

	render() {
		return (
			<div className="form-inline">
				<div className="form-group">
					<input id="newGoal" type="text" onChange={(event) => this.setState({title: event.target.value, data: Date() })} placeholder="Wpisz nazwę zadania"></input>
					<button className="btn btn-success" onClick={ this.addGoal.bind(this)}> Add </button>
					{
						console.log(this)
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { user } = state
  console.log(state)
  return {
    user
  }
}

export default connect(mapStateToProps)(AddGoal);