import React from 'react';
import MemberTable from './MemberTable.js';

export default class FilterableMemberTable extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			filteredMembers: []
		}

		this.filterMembers = this.filterMembers.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	filterMembers(members, term) {
		let filtered = members;
		this.setState({filteredMembers: filtered})
	}

	handleChange(event) {
		this.setState({searchTerm: event.target.value})
		this.filterMembers(this.props.members, this.state.searchTerm)
	}

	render() {
		var rows = []
		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-addon" id="searchIcon">
								<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
						  	</span>
						  	<input type="text"
						  		className="form-control"
						  		placeholder="Search Members" 
						  		aria-describedby="searchIcon"
						  		value={this.state.searchTerm} 
						  		onChange={this.handleChange} />
						</div>
					</div>					
				</div>				
				<MemberTable filteredMembers={this.state.filteredMembers}/>
			</div>
		);
	}

}