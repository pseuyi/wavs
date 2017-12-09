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
      color: 'red',
      title: true,
    };
  }

  handleTitleClick = () => {
    this.setState({...this.state, title: false});
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  generateFish = () => {
    const fish = [];
    for (let i = 0; i < 10; i++) {
      fish.push(
        <Fish
          obj={'#fish-obj'}
          mtl={'#fish-mtl'}
          scale='0.1 0.1 0.1'
        />
      )
    }
    return fish;
  }

  render () {
    const fish = this.generateFish();

    return (
      <Scene>
        <Assets/>
        {
          this.state.title && <Title
            handleClick={this.handleTitleClick}
          />
        }
        <Camera/>
        <Light/>
        <Floor/>
        <Sea/>
        { fish }
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
