import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { Report } from '../Pages/Report/Report'
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute'

export class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path = '/' component = {Home} />
				<Route path = '/report' component = {Report} />
				<Route render = { () => {
					return <p>You're lost.  This is how new Router Switch is suppose to work!</p>
				}} />
			</Switch>
			)
	}
}	