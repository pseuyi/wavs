import React from 'react';
import {Entity} from 'aframe-react';

const Title = () => (
  <Entity>
    <Entity text={{value: 'w/a/v/s/w/a/v/s', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
    <Entity position={{x:0, y:1, z: -1}} text-geometry={{
      value: 'underwater wa wa wa',
      style: 'italic',
      size: 0.8,
      weight: 'bold',
      height: 0,
      bevelEnabled: true,
      bevelSize: 0.04,
      bevelThickness: 0.04,
      curveSegments: 1,
    }}
      material={{ shader: 'flat', color: 'purple' }} />
  </Entity>
)

export default Title;
