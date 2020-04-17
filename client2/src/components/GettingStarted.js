import React, {Component} from 'react'

class Start extends Component {
	constructor(){
		super()

			this.state={
				name: ''
			}
			this.handleChange = this.handleChange.bind(this)
			this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event){
		this.setState({name: event.target.value})
	}

	handleSubmit(event){
		alert ('A Getting Started Form was submitted by ' +this.state.name)
		event.preventDefault();
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Name: 
					<input
					type="text"
					onChange={this.handleChange}
					value={this.state.name} />
					</label>
					<input type="submit" value="Submit" />
					</form>
				)
	}
}

export default Start
