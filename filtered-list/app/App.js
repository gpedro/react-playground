import React, {Component} from 'react';
import {render} from 'react-dom';

class List extends Component {
	render() {
		return (
			<ul>
			{
				this.props.items.map(function(item) {
					return <li key={item}>{item}</li>
				})
			}
			</ul>
		)
	}
}

class FilteredList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			initialItems: [
				"Sorcerer",
				"Druid",
				"Knight",
				"Paladin",
				"Master Sorcerer",
				"Elder Druid",
				"Elite Knight",
				"Royal Paladin"
			],
			items: []
		}
	}

	filterList(event) {
		var filteredItems = this.state.initialItems
		filteredItems = filteredItems.filter(function (item) {
			return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		})

		this.setState({
			items: filteredItems
		})
	}

	componentWillMount() {
		this.setState({
			items: this.state.initialItems
		})
	}
	render() {
		return (
			<div>
				<input type="text" placeholder="Vocations" onChange={this.filterList.bind(this)} />
				<List items={this.state.items} />
			</div>
		)
	}
}

class App extends Component {
	render() {
		return (
			<FilteredList />
		)
	}
}

render(<App />, document.getElementById('root'))
