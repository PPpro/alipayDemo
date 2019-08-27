let ws = new WebSocket("wss://echo.websocket.org");
ws.binaryType = "arraybuffer";
ws.onopen = function(evt) {
    let buf = "Hello WebSocket中文,\0 I'm\0 a\0 binary\0 message\0.";
    console.error('发送的消息: ' + buf);
    
    let arrData = new Uint16Array(buf.length);
    for (var i = 0; i < buf.length; i++) {
        arrData[i] = buf.charCodeAt(i);
    }
    ws.send(arrData.buffer);
};

ws.onmessage = function(evt) {
    let binary = new Uint16Array(evt.data);

    let str = '';
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === 0)
        {
            str += "\'\\0\'";
        }
        else
        {
            var hexChar = '0x' + binary[i].toString('16').toUpperCase();
            str += String.fromCharCode(hexChar);
        }
    }

    console.error('接收到的消息:' + str);
};