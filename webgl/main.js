import WebGLUtils from './webgl_utils';
var canvas = my.createCanvas();
var gl = canvas.getContext('webgl');

var vertex_shader_source = `
    attribute vec4 a_Position;
    void main() {
       gl_Position = a_Position;
    }
`;

var fragment_shader_source = `
    void main() {
        gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);;
    }
`;

function initVertexBuffers(gl, program, vertices) {
   var vertexBuffer = gl.createBuffer();

   if(!vertexBuffer) {
       console.log('failed to create buffer object');
   }
   gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
   gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

   var BYTES_PER_ELEMENT = vertices.BYTES_PER_ELEMENT;
   var a_Position = gl.getAttribLocation(program, 'a_Position');

   gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
   gl.enableVertexAttribArray(a_Position);
}

var vertices = new Float32Array([
     0.0, 0.5, 
     -0.5, -0.5, 
     0.5, -0.5,
]);

var program = WebGLUtils.createProgram(gl, vertex_shader_source, fragment_shader_source);

function main() {
    gl.useProgram(program);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    initVertexBuffers(gl, program, vertices);
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    requestAnimationFrame(main);
}

if (program) {
    requestAnimationFrame(main);
} else {
    console.log('program create failed');
}

