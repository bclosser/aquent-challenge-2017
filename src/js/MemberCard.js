import React from 'react'

export default class MemberCard extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div className="col-md-4">
					<div className="panel panel-info" style={{height: "300px"}}>
						<div className="panel-heading">
							<h3 className="panel-title"><strong>{this.props.member.firstName} {this.props.member.surname}</strong></h3>
						</div>
						<div className="panel-body">
							<img src={this.props.member.portrait} className="thumbnail center-block" style={{height: "100px", width: "100px"}}/>
							<p><strong>Occuptation: </strong>{this.props.member.occupation}</p>
							<p><strong>Company: </strong>{this.props.member.company}</p>
							<p><strong>Motto: </strong>{this.props.member.motto}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

}