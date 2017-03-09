import React from 'react';
import ReactDOM from 'react-dom';
import FilterableMemberTable from './FilterableMemberTable.js'


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			members: '',
			isLoading: true,
			SearchTerm: '',

		};

		this.printMembers = this.printMembers.bind(this);
	}

	componentDidMount() {
		this.getMembers();
		this.printMembers();
	}


	getMembers() {
		fetch('http://private-a73e-aquentuxsociety.apiary-mock.com/members')
			.then(response => response.json())
			.then(json => {
				this.setState({members: json, isLoading: false});
				console.log("Got Members");
				this.printMembers();
			})
	}

	printMembers() {
		if(!this.state.isLoading) {
			console.log("members: " + this.state.members);
		}
	}

	render() {
		return (
			<div className="container-fluid">
				<h1>UX Society Members</h1>
				<FilterableMemberTable members={this.state.members}/>
			</div>
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);