import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Scene, Entity} from 'aframe-react';
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

  handleTitleClick = () => {
    this.setState({...this.state, title: false});
  }

  handleAssetsLoaded = () => {
    console.log('handleAssetsLoaded')
    this.setState({ assetsLoaded: true });
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
