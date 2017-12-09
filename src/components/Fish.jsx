import React from 'react';
import {Entity} from 'aframe-react';

const Fish = (props) => {

  const generateRandomPosition = () => {
    return `${Math.random() * 10} ${Math.random() * 10} ${Math.random() * 10}`;
  }

  const position = generateRandomPosition();

  return (
    <Entity
      obj-model={{ obj: props.obj, mtl: props.mtl }}
      position={position}
      scale={props.scale}>
    </Entity>
  )
}

export default Fish;
