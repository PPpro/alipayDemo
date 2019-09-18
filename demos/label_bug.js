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
  let sys = my.getSystemInfoSync();
    let canvas = my.createCanvas();
    canvas.width = sys.windowWidth * sys.pixelRatio;
    canvas.height = sys.windowHeight * sys.pixelRatio;
    let label = my.createCanvas();
    label.width = canvas.width;
    label.height = canvas.height;
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
    ctx.fillStyle = 'black';
    ctx.font = '22px Arial';
    ctx.fillText('TiledSprite', 20, 20);
    ctx.fillText('05_scripting/09_singleton', 140, 20);
    ctx.fillText('downloader-native', 420, 20);

    ctx.fillText('05_scripting/09_loadingBar', 20, 45);
    ctx.fillText('停止', 330, 45);
    ctx.fillText('走', 390, 45);
    ctx.fillText('跑', 430, 45);
    ctx.fillText('跳', 470, 45);
    ctx.fillText('射击', 510, 45);

    ctx.fillText('调试关节', 20, 75);
    ctx.fillText('时间缩放', 120, 75);
    ctx.fillText('Layout_None_Basic', 230, 75);
    ctx.fillText('La是不错的小game。', 440, 75);

    ctx.fillText('Layout_ResizeChildren_NormalGrid', 20, 100);
    ctx.fillText('ListView', 390, 100);
    ctx.fillText('ScrollView', 510, 100);


    ctx.font = '22px Arial';
    ctx.fillText('TiledSprite', 20, 130);
    ctx.fillText('05_scripting/09_singleton', 140, 130);
    ctx.fillText('downloader-native', 420, 130);

    ctx.fillText('05_scripting/09_loadingBar', 20, 155);
    ctx.fillText('停止', 330, 155);
    ctx.fillText('走', 390, 155);
    ctx.fillText('跑', 430, 155);
    ctx.fillText('跳', 470, 155);
    ctx.fillText('射击', 510, 155);

    ctx.fillText('调试关节', 20, 185);
    ctx.fillText('时间缩放', 120, 185);
    ctx.fillText('Layout_None_Basic', 230, 185);
    ctx.fillText('La是不错的小game。', 440, 185);

    ctx.fillText('Layout_ResizeChildren_NormalGrid', 20, 210);
    ctx.fillText('ListView', 390, 210);
    ctx.fillText('ScrollView', 510, 210);

    
    ctx.font = '16px Arial';
    ctx.fillText('TiledSprite', 20, 240);
    ctx.fillText('05_scripting/09_singleton', 140, 240);
    ctx.fillText('downloader-native', 420, 240);

    ctx.fillText('05_scripting/09_loadingBar', 20, 260);
    ctx.fillText('停止', 330, 260);
    ctx.fillText('走', 390, 260);
    ctx.fillText('跑', 430, 260);
    ctx.fillText('跳', 470, 260);
    ctx.fillText('射击', 510, 260);

    ctx.fillText('调试关节', 20, 280);
    ctx.fillText('时间缩放', 120, 280);
    ctx.fillText('Layout_None_Basic', 230, 280);
    ctx.fillText('La是不错的小game。', 440, 280);

    ctx.fillText('Layout_ResizeChildren_NormalGrid', 20, 300);
    ctx.fillText('ListView', 390, 300);
    ctx.fillText('ScrollView', 510, 300);
   
    ctx.font = '14px Arial';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 650, 20);
    ctx.font = '14px Arial';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 650, 40);

    ctx.font = '18px Arial';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 650, 70);
    ctx.font = '18px Arial';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 650, 105);

    ctx.font = '22px Arial';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 650, 135);

    ctx.font = '22px Arial';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 650, 165);

    ctx.font = '30px Arial';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 650, 205);
    ctx.font = '30px Arial';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 650, 245);

    ctx.font = '40px Arial';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 650, 295);
    ctx.font = '40px Arial';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 650, 345);



    ctx.font = '14px fortestfont';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 350);
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 380);

    ctx.font = '18px fortestfont';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 410);
    ctx.font = '18px Arial';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 440);

    ctx.font = '22px fortestfont';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 480);

    ctx.font = '22px fortestfont';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 520);

    ctx.font = '26px fortestfont';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 560);
    ctx.font = '26px fortestfont';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 600);

    ctx.font = '32px fortestfont';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 650);
    ctx.font = '32px fortestfont';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 700);

    ctx.font = '37px fortestfont';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 750);
    ctx.font = '37px fortestfont';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 800);

    ctx.font = '43px fortestfont';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 850);
    ctx.font = '43px fortestfont';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 900);


    ctx.font = '18px sans-serif';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 930);
    ctx.font = '18px sans-serif';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 950);

    ctx.font = '22px sans-serif';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 980);

    ctx.font = '22px sans-serif';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 1010);

    ctx.font = '30px sans-serif';
    ctx.fillText('05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 1040);
    ctx.font = '30px sans-serif';
    ctx.fillText('我测试05_scripting/09_loadingBar停止走跑跳射击调试关节时间缩放Layout_None_Basic', 20, 1070);


    //  确保不会颠倒过来渲染
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    let texutre = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texutre);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, label);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    // gl.activeTexture(gl.TEXTURE0);
    // init buffer
    // let vertexArr = [
    //     // vertex       // texture coord
    //     -0.5, 0.5,      0.0, 1.0,
    //     0.5, 0.5,       1.0, 1.0,
    //     0.5, -0.5,      1.0, 0.0,
    //     -0.5, -0.5,     0.0, 0.0,
    // ];
    let vertexArr = [
        // vertex       // texture coord
        -1, 1,      0.0, 0.0, 
        1, 1,       1.0, 0.0,
        1, -1,      1.0, 1.0,
        -1, -1,     0.0, 1.0,
    ];
    let vertexBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexArr), gl.STATIC_DRAW);
    let indexArr = [
        0, 1, 3,
        1, 2, 3,
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

    gl.viewport(0, 0, canvas.width, canvas.height);
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
