import React, { Component } from 'react';
import style from "../../styles/basic.css.js"

class VerticalSection extends Component {

	constructor(props) {
		super(props);	
	}

	render() {
		return (
		<div style={style.forestBorder}>
			<p>This is a vertical section</p>
			<h1>This is my hot website</h1>
		</div>
		)
	}
}

export default VerticalSection;