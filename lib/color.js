import { rgb } from './rgb.js';
import { invert } from './invert.js';

export function colorAnalysis(hex,mainh,mainr,mainc,invh,invr,invc,redint,greenint,blueint) {
  // Info about color
  const main = hex;
  mainh.innerText = main;
  mainr.innerText = `(${rgb(main)})`;
  mainc.style.backgroundColor = main;

  // Info about inverted color
  const inv = invert(hex);
  invh.innerText = inv;
  invr.innerText = `(${rgb(inv)})`;
  invc.style.backgroundColor = inv;

  // Info about color intensity
  const rgbint = rgb(main).replace(/\s/g, '').split(',');
  redint.style.backgroundColor=`rgb(${rgbint[0]},${0},${0})`;
  greenint.style.backgroundColor=`rgb(${0},${rgbint[1]},${0})`;
  blueint.style.backgroundColor=`rgb(${0},${0},${rgbint[2]})`;
} 


