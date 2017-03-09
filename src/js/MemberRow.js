import React from 'react';

export default class MemberRow extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<tr>
				<td>Name</td>
				<td>Occupation</td>
				<td>Company</td>
			</tr>
		);
	}

}