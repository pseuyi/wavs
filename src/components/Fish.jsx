import React from 'react';
import {Entity} from 'aframe-react';

const Fish = (props) => {

  const generateRandomPosition = () => {
    return `${Math.random() * 100 - 50} ${Math.random() * 10} ${Math.random() * 100 - 50}`;
  }

  const generateRandomRotation = () => {
    return `0 ${Math.random() * 180} 0`;
  }

  const generateRandomDuration = () => {
    return `${Math.floor((Math.random() * 10 + 1) * 10000)}`;
  }

  const fromPosition = generateRandomPosition();
  const toPosition = generateRandomPosition();
  const rotation = generateRandomRotation();
  const duration = generateRandomDuration();

  return (
    <Entity
      obj-model={{ obj: props.obj, mtl: props.mtl }}
      position={fromPosition}
      rotation={rotation}
      scale={props.scale}
      sound={props.sound}
      >
      <a-animation
          attribute='position'
          from={fromPosition}
          to={toPosition}
          dur={duration}
          repeat='indefinite'
          direction='alternate'
          >
      </a-animation>
    </Entity>
  )
}

export default Fish;
