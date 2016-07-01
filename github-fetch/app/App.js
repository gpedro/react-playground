import React, {Component} from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';

class Report extends Component {
	render() {
		if (!this.props.data) return (<div></div>)

		return (
			<div>
			{
				Object.keys(this.props.data).map(item => {
					return <p><strong>{ item }</strong>: { this.props.data[item] }</p>
				})
			}
			</div>
		)
	}
}

class DevSafadao extends Component {
	constructor(props) {
		super(props)
		this.state = {
			report: undefined
		}
	}

	fetch(event) {
		var username = event.target.value
		var that = this
		fetch('https://api.github.com/users/' + username)
			.then(res => {
				if (res.status === 404) {
					alert('Usuário não encontrado')
					return false
				}

				return res.json()
			}).then(report => {
				this.setState({
					report: report
				})
			})

	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Github Username" onChange={this.fetch.bind(this)}/>
				<Report data={this.state.report}/>
			</div>
		)
	}
}

class App extends Component {
	render() {
		return (
			<DevSafadao />
		)
	}
}

render(<App />, document.getElementById('root'))
