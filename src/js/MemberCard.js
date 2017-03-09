import React from 'react';

export default class MemberCard extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
				<div className="col-md-4">
					<div className="well well-lg">
						<h2>{this.props.member.firstName} {this.props.member.surname}</h2>
						<img src={this.props.member.portrait} />
						<p>{this.props.member.motto}</p>
					</div>
				</div>
			</div>
		);
	}

}