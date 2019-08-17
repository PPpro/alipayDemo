export default  {
    createShader(gl, type, source) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success) {
          return shader;
        }
      
        console.log('create shader failed' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    },

    createProgram(gl, vertex_shader_source, fragment_shader_source) {
        var vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertex_shader_source);
        var fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragment_shader_source);

        if (vertexShader == null || fragmentShader == null) {
            return null;
        }

        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        var success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success) {
            return program;
        }

        console.log('create program failed' + gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    }
}