let last = performance.now();
let delta = 0;

function cb () {
  let now = performance.now();
  delta = now - last;
  last = now;
  console.error(delta);
  window.requestAnimationFrame(cb);
}

window.requestAnimationFrame(cb);