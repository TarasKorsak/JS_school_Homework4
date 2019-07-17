import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			buttonDisabled: true
		}
	}
	handleChange(e) {
		this.setState({inputValue: e.target.value});
		console.log(this.state.inputValue);
		
	}
	render() {
		return (
			<div className="App">
					<h1>
						Alerts App
					</h1>
					<input value={this.state.inputValue} onChange={this.handleChange.bind(this)}></input>
				<button disabled={this.state.buttonDisabled}>
					Add alert
				</button>
			</div>
		);
	}
}

export default App;
