import React, { Component } from 'react';

//import style from "../../styles/basic.css.js"

import logoUrl from '../../images/zions.jpeg'; 

const image = {
	//backgroundImage : `url(${logoUrl})`,
}

var height = {
	height : '500px'
}

var intro = {
	//borderStyle : 'solid',
	//borderWidth : '2px',
	//margin : '2px',
	height : height.height,
	backgroundImage : image.backgroundImage,
	backgroundRepeat : 'no-repeat',
}

var mainHeader = {
	paddingTop : '10%',
}

var a = {
	textAlign : 'left',
	paddingLeft : '10%',
	fontWeight : '200',
}

class Introduction extends Component {

	constructor(props) {
		super(props);	
	}



	render() {
		return (
		<div style={intro}>
			<div style={mainHeader}>
			<h1 style={a}>Welcome!</h1>
			<h3 style={a}> My name is Andrew and this is my website/DIY Project/resume. </h3>
			<h3 style={a}> Scroll down to find out more!</h3>
			</div>
		</div>
		)
	}
}

export default Introduction;