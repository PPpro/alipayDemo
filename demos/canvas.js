let canvas = window.canvas;
let ctx = canvas.getContext('webgl');

console.error('isEqual', canvas === ctx.canvas);
console.error('compare', canvas, ctx.canvas);
