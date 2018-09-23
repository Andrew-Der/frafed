import React, { Component } from 'react';


const skillStyle = {
	float : 'left',
	fontSize : '16px',
	fontWeight : '200',
	margin : '10px 0px 10px 10px',
}

const gradeStyle = {
	float : 'right',
}

class Ability extends Component {

	constructor(props) {
		super(props);	
		//console.log(this.props);
	}


	render() {
		return (
		<div>
			<p style={skillStyle}>{this.props.skill}</p>
			<p style={gradeStyle}>{this.props.stars}</p>
		</div>
		)
	}
}

export default Ability;