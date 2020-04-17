import React, {Component} from 'react'
import {withRouter} from 'react-router'

class GettingStartedForm extends Component {
	constructor(){
		super()
	this.state={
		name: '',
		company: '',
		email: '',
		phone: '',
		address: '',
		message: ''
	}
	this.handleChange = this.handleChange.bind(this)
	}

	handleChange = (e) => {
		const value = e.target.value;
		this.setState({
			...this.state,
			[e.target.name]: value
				})
	}

	form = () => {
		return(
		<>
			</>
	)
	}
render(){
	return(
		<div className="form">
		<h1>Get Started</h1>
		<p> Complete this form to learn more about bringing meditation to your company</p>
		<br />
		<p>or</p>
		<button>
		skip this step and book now
		</button>
		<form>
			<input placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
			<input placeholder="Company" value={this.state.company} onChange={this.handleChange}/>
			<input placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
			<input placeholder="Phone" value={this.state.phone} onChange={this.handleChange}/>
			<input placeholder="Address" value={this.state.address} onChange={this.handleChange}/>
			<input placeholder="Message" value={this.state.message} onChange={this.handleChange}/>
			</form>
			<button>Submit</button>
		</div>
			)
	
}}

export default withRouter(GettingStartedForm)
