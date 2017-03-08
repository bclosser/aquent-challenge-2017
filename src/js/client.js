import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			members: '',
			isLoading: true
		};
	}

	componentDidMount() {
		this.getMembers();
	}

	getMembers() {
		fetch('http://private-a73e-aquentuxsociety.apiary-mock.com/members')
			.then(response => response.json())
			.then(json => {
				this.setState({members: json, isLoading: false});
			});
	}

	render() {
    return (
      <div>
        <h1>UX Members</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);