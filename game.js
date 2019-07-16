require('./my-adapter');


// access 接口问题访问本地文件，复现平台：IDE
// require('./demos/fs_access');

// downloadFile 之后，readFile 失败，复现平台：IDE，华为荣耀9
// require('./demos/fs_readFile');

// 没办法提供简单 demo：
// touch 事件：屏幕边缘不能触发 touch 事件，复现平台：安卓机
// timeout 回调缺失 【已修复】

// performance_now 返回的时间错误 【已修复】
// require('./demos/performance_now.js');

// image onload 回调问题，复现平台：安卓机 【已修复】
// require('./demos/loadImage');

// webGlRenderingContext.canvas 引用错误，复现平台：安卓机
// require('./demos/canvas');

// webgl stencil 遮罩无效，复现平台：华为荣耀9
// require('./demos/gl_stencil');

// 音频：使用拷贝后的路径，播放失败，复现平台：安卓机
require('./demos/audio');