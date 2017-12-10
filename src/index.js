import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Scene} from 'aframe-react';
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
    this.state = {
      title: true,
      sounds: [
        '#vox',
        '#bass',
        '#guitar',
        '#back-vox',
        '#bass-drum',
        '#drum',
        '#hi-hat'
      ],
      assetsLoaded: false,
    };
  }

  nodes = []

  componentDidUpdate () {
    setTimeout(() => this.playAllSounds(), 5000)
  }

  saveSound = (sound) => {
    this.nodes.push(sound)
  }

  handleTitleClick = () => {
    this.setState({title: false});
  }

  handleAssetsLoaded = () => {
    this.setState({ assetsLoaded: true });
  }

  playAllSounds = () => {
    this.nodes.length && this.nodes.forEach(node => {
      node.components.sound.playSound();
    })
  }

  renderFish = () => (
    this.state.sounds.map(sound => (
      <Fish
        obj={'#fish-obj'}
        mtl={'#fish-mtl'}
        scale='0.1 0.1 0.1'
        sound={sound}
        key={sound}
        save={this.saveSound}
      />
    ))
  )

  renderTitle = () => (
    this.state.title && <Title handleClick={this.handleTitleClick} />
  )

  render () {
    return (
      <Scene events={{ loaded: this.handleAssetsLoaded }}>
        <Assets />
        {this.renderTitle()}
        <Camera/>
        <Light/>
        <Floor/>
        <Sea/>
        {this.renderFish()}
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
