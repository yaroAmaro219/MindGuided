import React from 'react'
import {Link} from 'react-router-dom'

function Nav () {
	return(
					<div className="nav">
						<button className="mind">
							<h1> MIND <span id=".">.</span></h1>
						</button>
						<button className="start">
							Getting Started
						</button>
						<button className="events">
							Upcoming Events
						</button>
					</div>
			)
}

export default Nav
