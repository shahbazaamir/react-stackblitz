
import React from 'react';
import ReactDOM from 'react-dom';


  class Slider1 extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a Class! My name is {this.props.name}</h2>;
  }
};

 export default Slider1;