import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Asset from './Asset';
import Slider1 from './Slider1';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',assetName:"asset name"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} age="22" />
        <Asset name={this.state.assetName} />
        <p>
         Index
        </p>
        <Slider1 name="slider"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
