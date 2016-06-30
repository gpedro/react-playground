import React, {Component} from 'react';
import {render} from 'react-dom';

class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	incrementCount() {
		this.setState({
			count: this.state.count + 1
		})
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button type="button" onClick={this.incrementCount.bind(this)}>+</button>
			</div>
		)
	}
}

class App extends Component {
	render() {
		return (
			<Counter/>
		)
	}
}

render(<App />, document.getElementById('root'))
