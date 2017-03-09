import React from 'react';
import MemberCard from './MemberCard.js';

export default class MemberTable extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {
			selectedMember: {
				firstName: "Select",
				surname: "Member",
				portrait: "",
				quote: ""
			}
		}
		
		this.selectMember = this.selectMember.bind(this)
	}

	selectMember(idx, e) {
		let member = this.props.members[idx]
		console.log(member)
		this.setState({selectedMember: member})
		console.log(this.state.selectedMember)
	}

	render() {
		var rows = []
		this.props.members.map((member, idx) => {
			rows.push(			
				<tr onClick={this.selectMember.bind(this, idx)} key={idx}>
					<td>{member.firstName} {member.surname}</td>
					<td>{member.occupation}</td>
					<td>{member.company}</td>
				</tr>
			)
		})
		
		
		return (
			<div>
				<div className="col-md-8">
					<table className="table table-striped table-fixed">
						<thead>
							<tr>
								<th>Name</th>
								<th>Occupation</th>
								<th>Company</th>
							</tr>
						</thead>
						<tbody>
							{rows}
						</tbody>
					</table>
				</div>
				<MemberCard member={this.state.selectedMember}/>
			</div>
		);
	}

}