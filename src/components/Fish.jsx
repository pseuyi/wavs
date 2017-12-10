import React from 'react';
import {Entity} from 'aframe-react';

class Fish extends React.Component {
  constructor(props) {
    super(props)
    this.fromPosition = this.generateRandomPosition();
    this.toPosition = this.generateRandomPosition();
    this.rotation = this.generateRandomRotation();
    this.duration = this.generateRandomDuration();
  }

  generateRandomPosition = () => {
    return `${Math.random() * 100 - 50} ${Math.random() * 10} ${Math.random() * 100 - 50}`;
  }

  generateRandomRotation = () => {
    return `0 ${Math.random() * 180} 0`;
  }

  generateRandomDuration = () => {
    return `${Math.floor((Math.random() * 10 + 1) * 10000)}`;
  }

  render() {

    return (
      <Entity
        obj-model={{ obj: this.props.obj, mtl: this.props.mtl }}
        position={this.fromPosition}
        rotation={this.rotation}
        scale={this.props.scale}
        sound={`src: ${this.props.sound};`}
        _ref={this.props.save}
      >
       <a-animation
          attribute='position'
          from={this.fromPosition}
          to={this.toPosition}
          dur={this.duration}
          repeat='indefinite'
          direction='alternate'
        >
        </a-animation>
      </Entity>
    )
  }
}

export default Fish;
