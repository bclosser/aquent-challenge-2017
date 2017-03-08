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
				console.log("members loaded");
			});
	}

	render() {
    return (
      <div>
        <h1>UX Society Members</h1>
        <input type="text" className="form-control" placeholder="search"></input>
        <table className="table table-striped">
        	<thead>
        		<tr>
	        		<th>Name</th>
	        		<th>Occupation</th>
	        		<th>Company</th>
        		</tr>
        	</thead>
        	<tbody>
        		<tr>
	        		<td>Name</td>
	        		<td>Occupation</td>
	        		<td>Company</td>
        		</tr>
        		<tr>
	        		<td>Name</td>
	        		<td>Occupation</td>
	        		<td>Company</td>
        		</tr>
        	</tbody>
        </table>
        <div id="memberDetails">
        	<h2>NAME</h2>
        	<img />
        	<p>QUOTE</p>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);