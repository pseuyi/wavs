import React from 'react';
import {Entity} from 'aframe-react';

const Light = () => (
  <Entity>
    <Entity primitive="a-light" type="ambient" color="#00ffcb" intensity="0.8"/>
  </Entity>
)

export default Light;
