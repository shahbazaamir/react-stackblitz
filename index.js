import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Asset from './Asset';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Asset/>
        <p>
         Hello
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
