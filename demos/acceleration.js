let canvas = window.canvas;
let ctx = canvas.getContext('2d');
ctx.font= "20px Arial";
ctx.fillStyle = 'red';
let text = '(0, 0)';

let width = canvas.width;
let height = canvas.height;

my.onAccelerometerChange(res => {
    console.error(res.x, res.y);
    text = `(${res.x}, ${res.y})`;
});

function updateText () {
    ctx.clearRect(0, 0, width, height);
    ctx.fillText(text, width/2, height/2);
    window.requestAnimationFrame(updateText);
}

window.requestAnimationFrame(updateText);

