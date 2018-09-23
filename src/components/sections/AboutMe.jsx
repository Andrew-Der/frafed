import React, { Component } from 'react';

//import style from "../../styles/basic.css.js"

import { Image } from 'react-bootstrap';

const a = {
	//backgroundImage : `url(${logoUrl})`,
	// borderStyle : 'solid',
	// borderWidth : '2px',
	//borderTop: 'solid 2px',
	backgroundColor : 'black',
	height : '500px',
	//paddingBottom : '1px',
	overflow : 'auto',
}

const bb = {
	color : 'white',
	//margin : '20%',
	marginBottom : '20px',
}

const textStyle = {
	//marginTop : '2px',
	//marginBottom : '1px',
	//ackgroundColor : 'black',
	//height : '500px',
	color : 'white',
	//marginTop : '10%',
	//fontStyle : 'underline',
	//overflow : 'auto',
	//float : 'right',
	display : 'block',
	//marginTop : '20px',
	marginBottom : '20px',
}

const imageDiv = {
	float : 'left',
	margin : '0% 1% 0% 10%',
}

const e = {
	//lineHeight : '150%',
	margin : '8% 0% 8% 0%',
}

const photo = require('../../images/ader.jpg');

class AboutMe extends Component {

	constructor(props) {
		super(props);	
	}



	render() {
		return (
		<div style={a}>
		{/*}
			<div style={mainHeader}>
			<h1 style={a}>Welcome!</h1>
			<h3 style={a}> My name is Andrew and this is my website/DIY Project/resume. </h3>
			<h3 style={a}> Scroll down to find out more!</h3>
			</div>
		*/}
			<h1 style={bb}>About Me</h1>
			<div style={imageDiv}>
			<Image src={photo} circle responsive/>
			</div>
			<div style={e}>
				<h4 style={textStyle}>Software engineer who loves to create</h4>
				<h4 style={textStyle}>Passions are developing stable frontend websites and learning the full stack</h4>
				<h4 style={textStyle}>Learn best by doing so created this website to hone my skills</h4>
				<h4 style={textStyle}>Love to hike, get outside, snowboard, build stable & beautiful frontends</h4>
				<h4 style={textStyle}>Hopefully you enjoy my website as much as I did creating it!</h4>
			</div>	

		</div>
		)
	}
}

export default AboutMe;