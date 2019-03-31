import React, { Component } from 'react';
import Todo from './Components/List/Todo';
import Done from './Components/List/Done';
import Header from './Components/Header/Header';
import Add from './Components/Add/Add';

import './App.css';

class App extends Component {
	state = {
		data: [
			{ id: 1, status: false, name: 'lwin' },
			{ id: 2, status: false, name: 'Moe' },
			{ id: 3, status: false, name: 'Paing' },
			{ id: 4, status: true, name: 'Z' }
		]
	};

	autoId = 4;

	input = React.createRef();

	remove = (id) => {
		this.setState({
			data: this.state.data.filter((task) => task.id !== id)
		});
	};

	done = (id) => {
		this.setState({
			data: this.state.data.map((task) => {
				if (task.id === id) task.status = true;
				return task;
			})
		});
	};

	undo = (id) => {
		this.setState({
			data: this.state.data.map((task) => {
				if (task.id === id) task.status = false;
				return task;
			})
		});
	};

	clearAll = () => {
		this.setState({
			data: this.state.data.filter((task) => task.status === false)
		});
	};

	checkAll = () => {
		if (this.state.data.filter((task) => task.status === false).length === 0) {
			this.setState({
				data: this.state.data.map((task) => {
					task.status = false;
					return task;
				})
			});
		} else {
			this.setState({
				data: this.state.data.map((task) => {
					task.status = true;
					return task;
				})
			});
		}
	};

	add = (name) => {
		this.setState({
			data: [
				...this.state.data,
				{
					id: ++this.autoId,
					name,
					status: false
				}
			]
		});
	};

	render() {
		return (
			<div>
				<Header
					todoList={this.state.data.filter((tasks) => tasks.status === false).length}
					clearAll={this.clearAll}
					checkAll={this.checkAll}
				/>

				<div className={'PowerRanger'}>
					<Add add={this.add} />

					<Todo
						data={this.state.data.filter((tasks) => tasks.status === false)}
						done={this.done}
						undo={this.undo}
						remove={this.remove}
					/>

					<hr />

					<Done
						data={this.state.data.filter((tasks) => tasks.status === true)}
						done={this.done}
						undo={this.undo}
						remove={this.remove}
					/>
				</div>
			</div>
		);
	}
}

export default App;
