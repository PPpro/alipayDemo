const shaderSource = {
    vert: `
        precision mediump float;
        
        attribute vec3 a_pos;
        attribute vec2 a_texCoord;
        varying vec2 v_texCoord;
        
        void main () {
            gl_Position = vec4(a_pos, 1.0);
            v_texCoord = a_texCoord;
        }
    `,
    frag: `
        precision mediump float;
        varying vec2 v_texCoord;
        uniform sampler2D sampler;

        void main () {
            gl_FragColor = texture2D(sampler, v_texCoord);
            // gl_FragColor = vec4(1, 0, 0, 1);
        }    
    `,
};

function initWebgl() {
    let canvas = my.createCanvas();
    let label = my.createCanvas();
    label.width = 300;
    label.height = 150;
    let gl = canvas.getContext('webgl');
    // init shader
    let vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, shaderSource.vert);
    gl.compileShader(vertShader);
    if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
        console.error(`compile vertex shader failed: ${gl.getShaderInfoLog(vertShader)}`);
        return;
    }
    let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, shaderSource.frag);
    gl.compileShader(fragShader);
    if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
        console.error(`compile fragment shader failed: ${gl.getShaderInfoLog(fragShader)}`);
        return;
    }
    let program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(`link program failed: ${gl.getProgramInfoLog(program)}`);
        return;
    }
    gl.useProgram(program);
    // init texutre
    
    // create image
    let ctx = label.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.font = '60pt Arial';
    // // 描边
    // ctx.lineWidth = 10;
    // ctx.strokeStyle = 'red';
    // ctx.strokeText('Hello!', 20, 100);
    // // 阴影
    // ctx.shadowColor = 'rgba(0, 0, 0, 1)';
    // ctx.shadowBlur = 10;
    // ctx.shadowOffsetX = 10;
    // ctx.shadowOffsetY = 10;
    ctx.fillText('Hello!', 20, 100);

    //  确保不会颠倒过来渲染
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    let texutre = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texutre);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, label);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    // gl.activeTexture(gl.TEXTURE0);
    // init buffer
    let vertexArr = [
        // vertex       // texture coord
        -0.5, 0.5,      0.0, 1.0,
        0.5, 0.5,       1.0, 1.0,
        0.5, -0.5,      1.0, 0.0,
        -0.5, -0.5,     0.0, 0.0,
    ];
    let vertexBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexArr), gl.STATIC_DRAW);
    let indexArr = [
        0, 1, 2,
        0, 2, 3,
    ];
    let indexBuf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexArr), gl.STATIC_DRAW);
    let vertexLoc = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(vertexLoc);
    gl.vertexAttribPointer(vertexLoc, 2, gl.FLOAT, false, 4 * Float32Array.BYTES_PER_ELEMENT, 0);
    let texCoordLoc = gl.getAttribLocation(program, 'a_texCoord');
    gl.enableVertexAttribArray(texCoordLoc);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 4 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);

    function drawLoop () {
      gl.clearColor(1, 1, 1, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      // gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.drawElements(gl.TRIANGLES, indexArr.length, gl.UNSIGNED_SHORT, 0);
      window.requestAnimationFrame(drawLoop);
    }
    drawLoop();
}

initWebgl();
