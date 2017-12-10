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
    console.log('component has new state or something ', this.state)
  }

  saveSound = (sound) => {
    this.nodes.push(sound)
  }

  handleTitleClick = () => {
    this.setState({title: false});
  }

  handleAssetsLoaded = () => {
    console.log('handleAssetsLoaded')
    this.setState({ assetsLoaded: true });
  }

  playAllSounds = () => {
    console.log('playing sounds on this # nodes: ', this.nodes.length)
    this.nodes.length && this.nodes.forEach(node => {
      console.log('playing the node: ', node)
      node.components.sound.playSound()
    })
  }

  renderFish = () => (
    this.state.sounds.map(sound => (
      <Fish
        obj={'#fish-obj'}
        mtl={'#fish-mtl'}
        scale='0.1 0.1 0.1'
        sound={sound}
        isSoundLoaded={this.state.assetsLoaded}
        key={sound}
        save={this.saveSound}
      />
    ))
  )

  renderTitle = () => (
    this.state.title && <Title handleClick={this.handleTitleClick} />
  )

  render () {
    console.log('all the audio nodes', this.nodes)
    this.playAllSounds()
    return (
      <Scene events={{ loaded: this.handleAssetsLoaded }}>
        <Assets />
        {this.renderTitle()}
        <Camera/>
        <Light/>
        <Floor/>
        <Sea/>
        {this.state.assetsLoaded && this.renderFish()}
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
