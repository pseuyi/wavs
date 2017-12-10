import AFRAME from 'aframe';

AFRAME.registerComponent('loaded', {
  schema: {
    callback: {type: 'function'}
  },

  init: () => {
    this.el.addEventListener('loaded', () => this.data.callback() )
  }
});
