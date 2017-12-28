import React, { Component } from "react";

class AddGoal extends Component {

	constructor(props) {
		super(props);
		this.state = {
      title: '',
     // nextTitle: ''
		}
  }
  
  componentDidUpdate() {
    //this.state.nextTitle = 
  }

	addGoal() {
    var newTitle = document.getElementById('newGoal').value
    this.setState({
      title: newTitle
    })
	}


	render() {
		return (
				<div className="form-inline">
					<div className="form-group">
						<input id="newGoal" type="text" onChange={(event) => this.setState({title: event.target.value})} placeholder="Wpisz nazwę zadania"></input>
						<button className="btn btn-success" onClick={this.addGoal.bind(this)}> Add </button>
					</div>
				</div>
		)
	}
}

export default AddGoal;