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
    };
  }

  handleTitleClick = () => {
    this.setState({...this.state, title: false});
  }

  renderFish = () => (
    this.state.sounds.map(sound => (
      <Fish
        obj={'#fish-obj'}
        mtl={'#fish-mtl'}
        scale='0.1 0.1 0.1'
        sound={{src: sound, rolloffFactor: 0.3}}
        key={sound}
      />
    ))
  )

  renderTitle = () => (
    this.state.title && <Title handleClick={this.handleTitleClick} />
  )

  render () {
    return (
      <Scene>
        <Assets/>
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
