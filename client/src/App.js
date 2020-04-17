import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import {WithRouter} from 'react-router'
import Nav from './components/nav'
import Pic from './photos/learn-to-meditate.png'
import Start from './components/GettingStarted'
import Home from './components/home'
import Clients from './components/Clients'
import Button from './components/Button'
import Form from './components/GettingStartedForm'
import './App.css';

class App extends Component {
	constructor(){
		super()
			this.state={
				name:''
			}
	}



	render() {
  return (
    <div className="App">
			<Nav />
			<img className="image" src="https://i.imgur.com/rbnbA5n.png" title="source: imgur.com" />
			<hr />
			<Clients />
			<hr />
			<Button />
			<br />
			<Start />
		<Switch>
		<Route exact path="/start" render={(props) => (
			<Start

			/>
				)}/>

		</Switch>
		<Form />
    </div>
  );
	
}}

export default App;
