
var gl;
var canvas = window.canvas;
var glProgram = null;

let vertexShader, fragmentShader;

var vertex_shader_source = `
  attribute vec3 aPos;
  attribute vec4 aColor;
  varying vec4 vColor;
  void main(void){
      gl_Position = vec4(aPos, 1);
      vColor = aColor;
  }
`;

var fragment_shader_source = `
  precision highp float;
  varying vec4 vColor;
  void main(void) {
      gl_FragColor = vColor;
  }
`;

function getGLContext() {
      gl = canvas.getContext('webgl', {
          stencil: true
      });
      if (gl) {
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
          // gl.viewport(0, 0, canvas.width, canvas.height);
          gl.enable(gl.STENCIL_TEST);
      }
}

function initShaders() {
    //get shader source
    var vs_source = vertex_shader_source,
        fs_source = fragment_shader_source;
        
    //compile shaders   
    vertexShader = makeShader(vs_source, gl.VERTEX_SHADER);
    fragmentShader = makeShader(fs_source, gl.FRAGMENT_SHADER);
    
    //create program
    glProgram = gl.createProgram();
    
    //attach and link shaders to the program
    gl.attachShader(glProgram, vertexShader);
    gl.attachShader(glProgram, fragmentShader);
    gl.linkProgram(glProgram);

    if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) {
        alert("Unable to initialize the shader program.");
    }
    
    //use program
    gl.useProgram(glProgram);
}

function makeShader(src, type) {
    //compile the vertex shader
    var shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("Error compiling shader: " + gl.getShaderInfoLog(shader));
    }
    return shader;
}
// vertex representing the triangle
var vertex = [
    -.5, -.2,  0,
    .5,  -.2,  0,
    0,   .6,   0
];
var stencilVertex = [
    -.2, -.5,  0,
    .4,  0,  0,
    .3,   .6,   0
];
function setupBufferAndDraw(){
    // draw the first triangle as stencil
    var color = [
         1, 1, 1, 1,
         1, 1, 1, 1,
         1, 1, 1, 1
    ];
    var colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color), gl.STATIC_DRAW);

    var aColorPosition = gl.getAttribLocation(glProgram, 'aColor');
    gl.vertexAttribPointer(aColorPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aColorPosition);
    
    // Always pass test
    gl.stencilFunc(gl.ALWAYS, 1, 0xff);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
    gl.stencilMask(0xff);
    gl.clear(gl.STENCIL_BUFFER_BIT);
    // No need to display the triangle
    gl.colorMask(1, 0, 0, 1);

    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(stencilVertex), gl.STATIC_DRAW);

    var aVertexPosition = gl.getAttribLocation(glProgram, 'aPos');
    gl.vertexAttribPointer(aVertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aVertexPosition);

    gl.drawArrays(gl.TRIANGLES, 0, stencilVertex.length / 3);

    // Pass test if stencil value is 1
    gl.stencilFunc(gl.EQUAL, 1, 0xFF);
    gl.stencilMask(0x00);
    gl.colorMask(1, 1, 1, 1);
    // draw the clipped triangle
    color = [
        1, 0, 0, 1,
        0, 1, 0, 1,
        0, 0, 1, 1
    ];
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW);
    gl.drawArrays(gl.TRIANGLES, 0, vertex.length / 3);

    // window.requestAnimationFrame(setupBufferAndDraw);
}

getGLContext();
initShaders();
setupBufferAndDraw();