import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Introduction from "./components/sections/Introduction";
import AboutMe from "./components/sections/AboutMe";
import VerticalSection from "./components/sections/VerticalSection";
import TextDivider from "./components/sections/TextDivider";
import AppleFullTime from "./components/sections/AppleFullTime";
import AppleIntern from "./components/sections/AppleIntern";
import Quotes from "./components/sections/Quotes";
import TexasInstrumentsIntern from "./components/sections/TexasInstrumentsIntern";
import Abilities from "./components/sections/Abilities";

var a = {
  //minWidth : '1050px',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div className="App" style={a}>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
        {/*}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <Introduction/>
        <AboutMe/>
        <TextDivider text="Experience"/>
        <AppleFullTime/>
        <AppleIntern/>
        <TexasInstrumentsIntern/>
        <Quotes/>
        <Abilities/>
        
        <VerticalSection/>
        <VerticalSection/>
        <VerticalSection/>
        <VerticalSection/>
        <VerticalSection/>

      </div>
    );
  }
}

export default App;
