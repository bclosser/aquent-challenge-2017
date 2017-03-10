import React from 'react'
import ReactDOM from 'react-dom'
import FilterableMemberTable from './FilterableMemberTable.js'


class App extends React.Component {
	constructor(props){
		super(props)
		
		this.state = {
			members: '',
			isLoading: true,
		}

	}

	componentDidMount() {
		this.getMembers()
	}


	getMembers() {
		console.log('Fetching Members')
		fetch('http://private-a73e-aquentuxsociety.apiary-mock.com/members')
			.then(response => response.json())
			.then(json => {
				this.setState({members: json, isLoading: false})
				console.log("Got Members")
			})
	}

	render() {
		if (this.state.isLoading) {
			return (
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h1>UX Society Membership</h1>
							<h3><i className="fa fa-spinner fa-pulse fa-fw"></i>Loading</h3>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="container">
					<h1>UX Society Membership</h1>
					<FilterableMemberTable members={this.state.members}/>
				</div>
			)
		}
	}
}

const app = document.getElementById('app')
ReactDOM.render(<App />, app)