import React from 'react';

const Assets = () => (
  <a-assets>

    <img id="groundTexture" src="/images/floor.jpg"/>
    <img id="seaTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>

    <audio id="vox" src="/audio/Acapella (Multitracks pt 1 of 7).mp3" autoPlay="true"></audio>
    <audio id="bass" src="/audio/Bass Stems (Multitracks pt 2 of 7).mp3" autoPlay="true"></audio>
    <audio id="guitar" src="/audio/Guitar Stems (Multitracks pt 3 of 7).mp3" autoPlay="true"></audio>
    <audio id="back-vox" src="/audio/FX-Backing Vocal Stems (Multitracks pt 4 of 7).mp3" autoPlay="true"></audio>
    <audio id="bass-drum" src="/audio/Bass Drum Stems (Multitracks pt 5 of 7).mp3" autoPlay="true"></audio>
    <audio id="drum" src="/audio/Drum Machine Stems (Multitracks pt 6 of 7).mp3" autoPlay="true"></audio>
    <audio id="hi-hat" src="/audio/Hi Hat Stems (Multitracks pt 7 of 7).mp3" autoPlay="true"></audio>

    <a-asset-item id="fish-obj" src="/models/fish-obj/fish.obj"></a-asset-item>
    <a-asset-item id="fish-mtl" src="/models/fish-obj/fish.mtl"></a-asset-item>
  </a-assets>
)

export default Assets;
