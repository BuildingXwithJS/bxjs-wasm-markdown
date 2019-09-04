import {Remarkable} from 'remarkable';
import * as wasm from '../pkg';

// js markdown stuff
const md = new Remarkable();
const remarkableDiv = document.getElementById('js-markdown');
const renderRemarkable = text => {
  const html = md.render(text);
  remarkableDiv.innerHTML = html;
};

// wasm markdown stuff
const wasmDiv = document.getElementById('wasm-markdown');
const renderWasm = text => {
  const html = wasm.render(text);
  wasmDiv.innerHTML = html;
};

// handle user input
const textarea = document.getElementById('input-text');
textarea.addEventListener('keyup', e => {
  const text = e.target.value;
  // render with remarkable
  console.time('remarkable');
  renderRemarkable(text);
  console.timeEnd('remarkable');
  // render with wasm
  console.time('wasm');
  renderWasm(text);
  console.timeEnd('wasm');
});
