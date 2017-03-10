import React from 'react'
import MemberTable from './MemberTable.js'

export default class FilterableMemberTable extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			searchTerm: '',
			filteredMembers: this.props.members
		}

		this.filterMembers = this.filterMembers.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	filterMembers(members, term) {
		let filtered = members.filter( (member) => {
			if(member.firstName.toLowerCase().match(term.toLowerCase()) || 
				 member.surname.toLowerCase().match(term.toLowerCase()) ||
			 	 member.occupation.toLowerCase().match(term.toLowerCase()) ||
			 	 member.company.toLowerCase().match(term.toLowerCase())) {
					return member
				}
		})
		this.setState({filteredMembers: filtered})
	}

	handleChange(event) {
		this.setState({searchTerm: event.target.value})
		this.filterMembers(this.props.members, event.target.value)
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<div className="input-group" style={{paddingBottom: "15px"}}>
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
				<div className="row">
					<MemberTable members={this.state.filteredMembers} />
				</div>				
			</div>
		)
	}

}