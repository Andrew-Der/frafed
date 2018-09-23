import React, { Component } from 'react';

//import style from "../../styles/basic.css.js"

import { Image } from 'react-bootstrap';
import { Grid, Row, Col} from 'react-bootstrap';

const dummySentences = [
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  'Donec hendrerit tempor tellus.',
  'Donec pretium posuere tellus.',
  'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  'Nulla posuere.',
  'Donec vitae dolor.',
  'Nullam tristique diam non turpis.',
  'Cras placerat accumsan nulla.',
  'Nullam rutrum.',
  'Nam vestibulum accumsan nisl.',
   'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  'Donec hendrerit tempor tellus.',
  'Donec pretium posuere tellus.',
  'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  'Nulla posuere.',
  'Donec vitae dolor.',
  'Nullam tristique diam non turpis.',
  'Cras placerat accumsan nulla.',
  'Nullam rutrum.',
  'Nam vestibulum accumsan nisl.'
];

const a = {
	//height : '700px',
	overflow : 'auto',
}

const textStyle = {
	//marginTop : '20%',
	lineHeight : '2.5',
	fontWeight : '200',
	fontSize : '16px',
}

const imageCol = {
	float : 'left',
	margin : '7% 1% 10% 10%',
}

const e = {
	//lineHeight : '150%',
	margin : '8% 0% 8% 0%',
}

const headerText = {
	//marginBottom : '20px',
	//float : 'right',
	//marginTop : '75px',
	//marginRight : '10%',
	fontWeight : '200',
	marginTop : '0px',
	paddingTop : '0px',
	horizontalAlign : 'center',

}

const textCol = {
	float : 'right',
	//marginTop : '25px',
	//display : 'inline',
	margin : '7% 5% 10% 1%',
}

const column = {
	float : 'right',
}

const photo = require('../../images/TiLogo.png');

class TexasInstrumentsIntern extends Component {

	constructor(props) {
		super(props);	
	}

	render() {
		return (
		<div style={a}>
{/*}
*/}
		<Grid>
		<Row>
			<Col style={imageCol}>
				<Image src={photo} responsive/>
			</Col>
			<Col style={textCol} sm={10} md={6} lg={6}>

				<h2 style={headerText}>Applications Software Intern - 2015</h2>

				<p style={textStyle}>
       			{dummySentences.slice(0, 22).join(' ')}
       			</p>
			</Col>
		</Row>
		</Grid>

		</div>
		)
	}
}

export default TexasInstrumentsIntern;