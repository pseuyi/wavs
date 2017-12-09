import 'aframe';
import 'aframe-text-geometry-component';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Assets from './components/Assets';
import Camera from './components/Camera';
import Title from './components/Title';
import Light from './components/Light';
import Floor from './components/Floor';
import Sea from './components/Sea';
import Fish from './components/Fish';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <Assets/>
        <Camera/>
        <Title/>
        <Light/>
        <Floor/>
        <Sea/>
        <Fish
          obj={'#fish-obj'}
          mtl={'#fish-mtl'}
          scale='0.1 0.1 0.1'
        />
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
