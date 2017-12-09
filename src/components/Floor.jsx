import React from 'react';
import {Entity} from 'aframe-react';

const Floor = () => (
  <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
)

export default Floor;
