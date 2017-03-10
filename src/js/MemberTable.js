import React from 'react'
import MemberCard from './MemberCard.js'

export default class MemberTable extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {
			selectedMember: {
				firstName: "Select",
				surname: "Member",
				occupation: "",
				company: "",
				portrait: "http://s1.postimg.org/j5mytq3iz/profile.jpg",
				quote: "Select Member to see their motto!"
			}
		}
		
		this.selectMember = this.selectMember.bind(this)
	}

	selectMember(idx, e) {
		let member = this.props.members[idx]
		this.setState({selectedMember: member})
	}

	render() {
		var rows = []
		this.props.members.map((member, idx) => {
			rows.push(			
				<tr onClick={this.selectMember.bind(this, idx)} key={idx}>
					<td className="col-md-4">{member.firstName} {member.surname}</td>
					<td className="col-md-4">{member.occupation}</td>
					<td className="col-md-4">{member.company}</td>
				</tr>
			)
		})
		
		
		return (
			<div>
				<div className="col-md-8" style={{height: "300px", overflow: "scroll"}}>
					<table className="table table-striped table-hover">
						<thead>
							<tr className="info">
								<th className="col-md-4">Name</th>
								<th className="col-md-4">Occupation</th>
								<th className="col-md-4">Company</th>
							</tr>
						</thead>
						<tbody>
							{rows}
						</tbody>
					</table>
				</div>
				<MemberCard member={this.state.selectedMember}/>
			</div>
		)
	}

}