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
	console.log(this.state.name)
	return(
		<div className="form">
		<h1>Get Started</h1>
		<p> Complete this form to learn more about bringing meditation to your company</p>
		<br />
		<p>or</p>
		<button>
		skip this step and book now
		</button>
		<br />
		<form>
			<input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
			<hr />
			<input placeholder="Company" name="company" value={this.state.company} onChange={this.handleChange}/>
			<hr />
			<input placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
			<hr />
			<input placeholder="Phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
			<hr />
			<input placeholder="Address" name="address" value={this.state.address} onChange={this.handleChange}/>
			<hr />
			<input placeholder="Message" name="message" value={this.state.message} onChange={this.handleChange}/>
			</form>
			<br />
			<button>Submit</button>
		</div>
			)
	
}}

export default withRouter(GettingStartedForm)
