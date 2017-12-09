import React from 'react';
import {Entity} from 'aframe-react';

const Title = ({handleClick}) => (
  <Entity events={{
      click: handleClick
    }}>
    <Entity
      geometry={{primitive: 'plane'}}
      position={{x:0, y:8, z: 0}}
      text={{
        value: '~ ~',
        font: 'https://cdn.aframe.io/fonts/Roboto-msdf.json',
        align: 'center',
        color: 'green',
        width: 44,
      }}
      material={{transparent: true, opacity: 0}}
    />
    <Entity
      geometry={{primitive: 'plane'}}
      position={{x:0, y:6, z: 0}}
      text={{
        value: 'wavs',
        font: 'https://cdn.aframe.io/fonts/Roboto-msdf.json',
        align: 'center',
        color: 'blue',
        width: 44,
      }}
      material={{transparent: true, opacity: 0}}
    />
    <Entity
      geometry={{primitive: 'plane'}}
      position={{x:0, y:4, z: 0}}
      text={{
        value: '~',
        font: 'https://cdn.aframe.io/fonts/Roboto-msdf.json',
        align: 'center',
        color: 'red',
        width: 44,
      }}
      material={{transparent: true, opacity: 0}}
    />
  </Entity>
)

export default Title;
