import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
npm; install; react-jinke-music-player; --save



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
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
