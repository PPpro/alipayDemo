require('./my-adapter');

// downloadFile 之后，readFile 失败，复现平台：IDE，华为荣耀9 【已修复】
// require('./demos/fs_readFile');

// performance_now 返回的时间错误 【已修复】
// require('./demos/performance_now');

// image onload 回调问题，复现平台：安卓机 【已修复】
// require('./demos/loadImage');

// webGlRenderingContext.canvas 引用错误，复现平台：安卓机 【已修复】
// require('./demos/canvas');

// access 接口问题访问本地文件，复现平台：IDE
// require('./demos/fs_access');

// 陀螺仪没有立即开启，开启有一段时间延时, 在华为荣耀9 上没有执行回调
// require('./demos/acceleration');

// webgl stencil 遮罩无效，复现平台：华为荣耀9
// require('./demos/gl_stencil');

// 音频：使用拷贝后的路径，播放失败，复现平台：安卓机
// require('./demos/audio');

// keyboard 软键盘上没有出现输入框， 复现平台：小米5
// require('./demos/keyboard');

// touch 事件：屏幕上边缘不能触发 touch 事件，复现平台：安卓机
// 这里应该不需要 demo 了