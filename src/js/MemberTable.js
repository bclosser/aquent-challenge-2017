import React from 'react';
import MemberCard from './MemberCard.js';
import MemberRow from './MemberRow.js';

export default class MemberTable extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div className="col-md-8">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>Name</th>
								<th>Occupation</th>
								<th>Company</th>
							</tr>
						</thead>
						<tbody>
							<MemberRow />
							<MemberRow />
							<MemberRow />
						</tbody>
					</table>
				</div>
				<MemberCard />
			</div>
		);
	}

}