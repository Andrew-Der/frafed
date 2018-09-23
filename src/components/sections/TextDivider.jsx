import React, { Component } from 'react';

//import style from "../../styles/basic.css.js"

import logoUrl from '../../images/fancyLine.png'; 
import { Image } from 'react-bootstrap';

var a = {
	//height : '100px',
	minWidth : '1050px',
}

var x = {
	float : 'left',
	display : 'inline-block',
	marginLeft : '1%',
}
var y = {
	float : 'center',
	display: 'inline-block',
	fontWeight : '200',
	//margin : '20px 0px 20px 0px',
}
var z = {
	float : 'right',
	display : 'inline-block',
	marginRight : '1%',
}


const fancyLine = require('../../images/fancyLine.png');

class TextDivider extends Component {

	constructor(props) {
		super(props);	
	}


	render() {
		return (
		<div style={a}>
			<div>
				<Image style={x} responsive src={fancyLine}/>
				<h1 style={y} >{this.props.text}</h1>
				<Image style={z} responsive src={fancyLine}/>

			</div>
		</div>
		)
	}
}

export default TextDivider;