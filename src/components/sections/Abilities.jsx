import React, { Component } from 'react';

//import style from "../../styles/basic.css.js"

import { Image } from 'react-bootstrap';
import { Grid, Row, Col} from 'react-bootstrap';
import { Table } from 'react-bootstrap';

import Ability from "./Ability";


const borderWidth = '1px';
const boxWidth = '300px';

const width = {
	width : boxWidth,
	height : '50px',
	outlineStyle : 'solid',
	outlineWidth : borderWidth,
}

const abilityBox = (text, rating) => {
	return (
		<div style={width}>
			<Ability skill={text} stars={rating}/>
		</div>
	)
}

const mainDivStyle = {
	height : '500px',
	overflow : 'auto',
	//textAlign : 'center',

}

const textStyle = {
	//marginTop : '20%',
	lineHeight : '2.5',
	fontWeight : '200',
	fontSize : '16px',
}

const headerText = {
	fontWeight : '200',
	textDecoration : 'underline',
}

const gridStyle = {
	margin : '0px auto',
	//below is hardcoded af with boxWidth
	//width = boxWidth * 2 + 15 + 15
	width : '631px',
	display : 'inline-block',
}

const leftCol = {
	width : boxWidth,
	padding : '0px',
	marginRight : borderWidth,
}
const rightCol = {
	width : boxWidth,
	padding : '0px',
}
const rowWidth = {
	width : boxWidth,
	padding : '0px',
	margin : '0px',
	marginTop : borderWidth,
}

class Abilities extends Component {

	constructor(props) {
		super(props);	
	}

	render() {
		return (
		<div style={mainDivStyle}>
		<h1 style={headerText}>Abilities</h1>
		<Grid style={gridStyle}>
			<Col  sm={1} className="show-grid"  style={leftCol} >
				<Row style={rowWidth} >
					{abilityBox('Javascript','5')}
				</Row>	
				<Row style={rowWidth} >
					{abilityBox('Java','5')}
				</Row>			
			</Col> 

			<Col  sm={1} className="show-grid"  style={rightCol} >
				<Row style={rowWidth} >
					{abilityBox('React & Redux','4')}
				</Row>	
				<Row style={rowWidth} >
					{abilityBox('C','4')}
				</Row>
			</Col> 
		</Grid>
		</div>
		)
	}
}

export default Abilities;