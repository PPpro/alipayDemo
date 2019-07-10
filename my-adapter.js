/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Audio.js":
/*!**********************!*\
  !*** ./src/Audio.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _HTMLAudioElement2 = __webpack_require__(/*! ./HTMLAudioElement */ \"./src/HTMLAudioElement.js\");\n\nvar _HTMLAudioElement3 = _interopRequireDefault(_HTMLAudioElement2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _innerAudioContextMap = new WeakMap();\n\nvar HAVE_NOTHING = 0;\nvar HAVE_METADATA = 1;\nvar HAVE_CURRENT_DATA = 2;\nvar HAVE_FUTURE_DATA = 3;\nvar HAVE_ENOUGH_DATA = 4;\n\nvar Audio = function (_HTMLAudioElement) {\n    _inherits(Audio, _HTMLAudioElement);\n\n    function Audio(url) {\n        _classCallCheck(this, Audio);\n\n        var _this = _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));\n\n        _this.readyState = HAVE_NOTHING;\n\n        var innerAudioContext = my.createInnerAudioContext();\n        _innerAudioContextMap.set(_this, innerAudioContext);\n\n        _this._canplayEvents = ['load', 'loadend', 'canplay', 'canplaythrough', 'loadedmetadata'];\n\n        innerAudioContext.onCanPlay(function () {\n            _this._loaded = true;\n            _this.readyState = HAVE_CURRENT_DATA;\n\n            _this._canplayEvents.forEach(function (type) {\n                _this.dispatchEvent({ type: type });\n            });\n\n            if (typeof _this.oncanplay === \"function\") {\n                _this.oncanplay();\n            }\n        });\n\n        innerAudioContext.onPlay(function () {\n            _this._paused = _innerAudioContextMap.get(_this).paused;\n            _this.dispatchEvent({ type: 'play' });\n            if (typeof _this.onplay === \"function\") {\n                _this.onplay();\n            }\n        });\n\n        innerAudioContext.onPause(function () {\n            _this._paused = _innerAudioContextMap.get(_this).paused;\n            _this.dispatchEvent({ type: 'pause' });\n            if (typeof _this.onpause === \"function\") {\n                _this.onpause();\n            }\n        });\n\n        innerAudioContext.onEnded(function () {\n            _this._paused = _innerAudioContextMap.get(_this).paused;\n            if (_innerAudioContextMap.get(_this).loop === false) {\n                _this.dispatchEvent({ type: 'ended' });\n            }\n            _this.readyState = HAVE_ENOUGH_DATA;\n\n            if (typeof _this.onended === \"function\") {\n                _this.onended();\n            }\n        });\n\n        innerAudioContext.onError(function () {\n            _this._paused = _innerAudioContextMap.get(_this).paused;\n            _this.dispatchEvent({ type: 'error' });\n            if (typeof _this.onerror === \"function\") {\n                _this.onerror();\n            }\n        });\n\n        if (url) {\n            _this.src = url;\n        } else {\n            _this._src = '';\n        }\n\n        _this._loop = innerAudioContext.loop;\n        _this._autoplay = innerAudioContext.autoplay;\n        _this._paused = innerAudioContext.paused;\n        _this._volume = innerAudioContext.volume;\n        _this._muted = false;\n        return _this;\n    }\n\n    _createClass(Audio, [{\n        key: 'addEventListener',\n        value: function addEventListener(type, listener) {\n            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n            type = String(type).toLowerCase();\n\n            _get(Audio.prototype.__proto__ || Object.getPrototypeOf(Audio.prototype), 'addEventListener', this).call(this, type, listener, options);\n\n            if (this._loaded && this._canplayEvents.indexOf(type) !== -1) {\n                this.dispatchEvent({ type: type });\n            }\n        }\n    }, {\n        key: 'load',\n        value: function load() {\n            // console.warn('HTMLAudioElement.load() is not implemented.')\n            // weixin doesn't need call load() manually\n        }\n    }, {\n        key: 'play',\n        value: function play() {\n            _innerAudioContextMap.get(this).play();\n        }\n    }, {\n        key: 'resume',\n        value: function resume() {\n            _innerAudioContextMap.get(this).play();\n        }\n    }, {\n        key: 'pause',\n        value: function pause() {\n            _innerAudioContextMap.get(this).pause();\n        }\n    }, {\n        key: 'destroy',\n        value: function destroy() {\n            console.log(\"destory: \" + _typeof(_innerAudioContextMap.get(this).destroy));\n            _innerAudioContextMap.get(this).destroy();\n        }\n    }, {\n        key: 'canPlayType',\n        value: function canPlayType() {\n            var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n            if (typeof mediaType !== 'string') {\n                return '';\n            }\n\n            if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {\n                return 'probably';\n            }\n            return '';\n        }\n    }, {\n        key: 'cloneNode',\n        value: function cloneNode() {\n            var newAudio = new Audio();\n            newAudio.loop = this.loop;\n            newAudio.autoplay = this.autoplay;\n            newAudio.src = this.src;\n            return newAudio;\n        }\n    }, {\n        key: 'currentTime',\n        get: function get() {\n            return _innerAudioContextMap.get(this).currentTime;\n        },\n        set: function set(value) {\n            _innerAudioContextMap.get(this).seek(value);\n        }\n    }, {\n        key: 'duration',\n        get: function get() {\n            return _innerAudioContextMap.get(this).duration;\n        }\n    }, {\n        key: 'src',\n        get: function get() {\n            return this._src;\n        },\n        set: function set(value) {\n            this._src = value;\n            this._loaded = false;\n            this.readyState = HAVE_NOTHING;\n\n            var innerAudioContext = _innerAudioContextMap.get(this);\n\n            innerAudioContext.src = value;\n        }\n    }, {\n        key: 'loop',\n        get: function get() {\n            return this._loop;\n        },\n        set: function set(value) {\n            this._loop = value;\n            _innerAudioContextMap.get(this).loop = value;\n        }\n    }, {\n        key: 'autoplay',\n        get: function get() {\n            return this._autoplay;\n        },\n        set: function set(value) {\n            this._autoplay = value;\n            _innerAudioContextMap.get(this).autoplay = value;\n        }\n    }, {\n        key: 'paused',\n        get: function get() {\n            return this._paused;\n        }\n    }, {\n        key: 'volume',\n        get: function get() {\n            return this._volume;\n        },\n        set: function set(value) {\n            this._volume = value;\n            if (!this._muted) {\n                _innerAudioContextMap.get(this).volume = value;\n            }\n        }\n    }, {\n        key: 'muted',\n        get: function get() {\n            return this._muted;\n        },\n        set: function set(value) {\n            this._muted = value;\n            if (value) {\n                _innerAudioContextMap.get(this).volume = 0;\n            } else {\n                _innerAudioContextMap.get(this).volume = this._volume;\n            }\n        }\n    }]);\n\n    return Audio;\n}(_HTMLAudioElement3.default);\n\nexports.default = Audio;\n\n//# sourceURL=webpack:///./src/Audio.js?");

/***/ }),

/***/ "./src/Base64.js":
/*!***********************!*\
  !*** ./src/Base64.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\nfunction InvalidCharacterError(message) {\n    this.message = message;\n}\nInvalidCharacterError.prototype = new Error();\nInvalidCharacterError.prototype.name = 'InvalidCharacterError';\n\n// encoder\n// [https://gist.github.com/999166] by [https://github.com/nignag]\n\nfunction btoa(input) {\n    var str = String(input);\n    var output = '';\n    for (\n    // initialize result and counter\n    var block, charCode, idx = 0, map = chars;\n    // if the next str index does not exist:\n    //   change the mapping table to \"=\"\n    //   check if d has no fractional digits\n    str.charAt(idx | 0) || (map = '=', idx % 1);\n    // \"8 - idx % 1 * 8\" generates the sequence 2, 4, 6, 8\n    output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {\n        charCode = str.charCodeAt(idx += 3 / 4);\n        if (charCode > 0xFF) {\n            throw new InvalidCharacterError(\"'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.\");\n        }\n        block = block << 8 | charCode;\n    }\n    return output;\n}\n\n// decoder\n// [https://gist.github.com/1020396] by [https://github.com/atk]\nfunction atob(input) {\n    var str = String(input).replace(/=+$/, '');\n    if (str.length % 4 === 1) {\n        throw new InvalidCharacterError(\"'atob' failed: The string to be decoded is not correctly encoded.\");\n    }\n    var output = '';\n    for (\n    // initialize result and counters\n    var bc = 0, bs, buffer, idx = 0;\n    // get next character\n    buffer = str.charAt(idx++);\n    // character found in table? initialize bit storage and add its ascii value;\n    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,\n    // and if not first of each 4 characters,\n    // convert the first 8 bits to one ascii character\n    bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {\n        // try to find character in table (0-63, not found => -1)\n        buffer = chars.indexOf(buffer);\n    }\n    return output;\n}\n\nexports.btoa = btoa;\nexports.atob = atob;\n\n//# sourceURL=webpack:///./src/Base64.js?");

/***/ }),

/***/ "./src/Canvas.js":
/*!***********************!*\
  !*** ./src/Canvas.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = Canvas;\n\nvar _HTMLCanvasElement = __webpack_require__(/*! ./HTMLCanvasElement */ \"./src/HTMLCanvasElement.js\");\n\nvar _HTMLCanvasElement2 = _interopRequireDefault(_HTMLCanvasElement);\n\nvar _util = __webpack_require__(/*! ./utils/util */ \"./src/utils/util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Canvas() {\n    var canvas = my.createCanvas();\n\n    if (!_util.isIDE) {\n        if (!('tagName' in canvas)) {\n            canvas.tagName = 'canvas';\n        }\n\n        canvas.__proto__.__proto__ = new _HTMLCanvasElement2.default();\n    }\n\n    return canvas;\n}\n\n//# sourceURL=webpack:///./src/Canvas.js?");

/***/ }),

/***/ "./src/Element.js":
/*!************************!*\
  !*** ./src/Element.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Node2 = __webpack_require__(/*! ./Node */ \"./src/Node.js\");\n\nvar _Node3 = _interopRequireDefault(_Node2);\n\nvar _noop = __webpack_require__(/*! ./utils/noop */ \"./src/utils/noop.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Element = function (_Node) {\n    _inherits(Element, _Node);\n\n    function Element() {\n        _classCallCheck(this, Element);\n\n        var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this));\n\n        _this.className = '';\n        _this.children = [];\n\n        _this.remove = _noop.noop;\n        return _this;\n    }\n\n    _createClass(Element, [{\n        key: \"setAttribute\",\n        value: function setAttribute(name, value) {\n            this[name] = value;\n        }\n    }, {\n        key: \"getAttribute\",\n        value: function getAttribute(name) {\n            return this[name];\n        }\n    }, {\n        key: \"setAttributeNS\",\n        value: function setAttributeNS(name, value) {\n            this[name] = value;\n        }\n    }, {\n        key: \"getAttributeNS\",\n        value: function getAttributeNS(name) {\n            return this[name];\n        }\n    }]);\n\n    return Element;\n}(_Node3.default);\n\nexports.default = Element;\n\n//# sourceURL=webpack:///./src/Element.js?");

/***/ }),

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _noop = __webpack_require__(/*! ./utils/noop */ \"./src/utils/noop.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Event = function Event(type) {\n    _classCallCheck(this, Event);\n\n    this.cancelBubble = false;\n    this.cacelable = false;\n    this.target = null;\n    this.timestampe = Date.now();\n    this.preventDefault = _noop.noop;\n    this.stopPropagation = _noop.noop;\n\n    this.type = type;\n};\n\nexports.default = Event;\n\n//# sourceURL=webpack:///./src/Event.js?");

/***/ }),

/***/ "./src/EventIniter/MouseEvent.js":
/*!***************************************!*\
  !*** ./src/EventIniter/MouseEvent.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MouseEvent = function MouseEvent() {\n  _classCallCheck(this, MouseEvent);\n};\n\nexports.default = MouseEvent;\n\n//# sourceURL=webpack:///./src/EventIniter/MouseEvent.js?");

/***/ }),

/***/ "./src/EventIniter/TouchEvent.js":
/*!***************************************!*\
  !*** ./src/EventIniter/TouchEvent.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Event2 = __webpack_require__(/*! ../Event */ \"./src/Event.js\");\n\nvar _Event3 = _interopRequireDefault(_Event2);\n\nvar _document = __webpack_require__(/*! ../document */ \"./src/document.js\");\n\nvar _document2 = _interopRequireDefault(_document);\n\nvar _util = __webpack_require__(/*! ../utils/util */ \"./src/utils/util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TouchEvent = function (_Event) {\n    _inherits(TouchEvent, _Event);\n\n    function TouchEvent(type) {\n        _classCallCheck(this, TouchEvent);\n\n        var _this = _possibleConstructorReturn(this, (TouchEvent.__proto__ || Object.getPrototypeOf(TouchEvent)).call(this, type));\n\n        _this.touches = [];\n        _this.targetTouches = [];\n        _this.changedTouches = [];\n\n        _this.target = window.canvas;\n        _this.currentTarget = window.canvas;\n        return _this;\n    }\n\n    return TouchEvent;\n}(_Event3.default);\n\nexports.default = TouchEvent;\n\n\nfunction eventHandlerFactory(type) {\n    return function (rawEvent) {\n        var event = _util.isIDE ? new window.Event(type) : new TouchEvent(type);\n\n        event.changedTouches = rawEvent.touches;\n        event.touches = rawEvent.touches;\n        event.targetTouches = Array.prototype.slice.call(rawEvent.touches);\n        // event.timeStamp = rawEvent.timeStamp\n        console.log(JSON.stringify(event.type));\n        _document2.default.dispatchEvent(event);\n    };\n}\n\nmy.onTouchStart(eventHandlerFactory('touchstart'));\nmy.onTouchMove(eventHandlerFactory('touchmove'));\nmy.onTouchEnd(eventHandlerFactory('touchend'));\nmy.onTouchCancel(eventHandlerFactory('touchcancel'));\n\n//# sourceURL=webpack:///./src/EventIniter/TouchEvent.js?");

/***/ }),

/***/ "./src/EventIniter/index.js":
/*!**********************************!*\
  !*** ./src/EventIniter/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _TouchEvent = __webpack_require__(/*! ./TouchEvent */ \"./src/EventIniter/TouchEvent.js\");\n\nObject.defineProperty(exports, 'TouchEvent', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_TouchEvent).default;\n  }\n});\n\nvar _MouseEvent = __webpack_require__(/*! ./MouseEvent */ \"./src/EventIniter/MouseEvent.js\");\n\nObject.defineProperty(exports, 'MouseEvent', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_MouseEvent).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/EventIniter/index.js?");

/***/ }),

/***/ "./src/EventTarget.js":
/*!****************************!*\
  !*** ./src/EventTarget.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar _events = new WeakMap();\n\nvar EventTarget = function () {\n    function EventTarget() {\n        _classCallCheck(this, EventTarget);\n\n        _events.set(this, {});\n    }\n\n    _createClass(EventTarget, [{\n        key: \"addEventListener\",\n        value: function addEventListener(type, listener) {\n            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n            var events = _events.get(this);\n\n            if (!events) {\n                events = {};\n                _events.set(this, events);\n            }\n\n            if (!events[type]) {\n                events[type] = [];\n            }\n            events[type].push(listener);\n        }\n    }, {\n        key: \"removeEventListener\",\n        value: function removeEventListener(type, listener) {\n            var events = _events.get(this);\n            if (events) {\n                var listeners = events[type];\n                if (listeners && listeners.length > 0) {\n                    for (var i = listeners.length; i--; i > 0) {\n                        if (listeners[i] === listener) {\n                            listeners.splice(i, 1);\n                            break;\n                        }\n                    }\n                }\n            }\n        }\n    }, {\n        key: \"dispatchEvent\",\n        value: function dispatchEvent() {\n            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n            if (typeof event.type !== \"string\") {\n                return;\n            }\n\n            if (!_events.get(this)) {\n                return;\n            }\n\n            var listeners = _events.get(this)[event.type];\n            if (listeners) {\n                for (var i = 0; i < listeners.length; i++) {\n                    listeners[i](event);\n                }\n            }\n        }\n    }]);\n\n    return EventTarget;\n}();\n\nexports.default = EventTarget;\n\n//# sourceURL=webpack:///./src/EventTarget.js?");

/***/ }),

/***/ "./src/FileReader.js":
/*!***************************!*\
  !*** ./src/FileReader.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FileReader = function () {\n    function FileReader() {\n        _classCallCheck(this, FileReader);\n    }\n\n    _createClass(FileReader, [{\n        key: \"construct\",\n        value: function construct() {}\n    }]);\n\n    return FileReader;\n}();\n\nexports.default = FileReader;\n\n//# sourceURL=webpack:///./src/FileReader.js?");

/***/ }),

/***/ "./src/HTMLAudioElement.js":
/*!*********************************!*\
  !*** ./src/HTMLAudioElement.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _HTMLMediaElement2 = __webpack_require__(/*! ./HTMLMediaElement */ \"./src/HTMLMediaElement.js\");\n\nvar _HTMLMediaElement3 = _interopRequireDefault(_HTMLMediaElement2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HTMLAudioElement = function (_HTMLMediaElement) {\n    _inherits(HTMLAudioElement, _HTMLMediaElement);\n\n    function HTMLAudioElement() {\n        _classCallCheck(this, HTMLAudioElement);\n\n        return _possibleConstructorReturn(this, (HTMLAudioElement.__proto__ || Object.getPrototypeOf(HTMLAudioElement)).call(this, \"audio\"));\n    }\n\n    return HTMLAudioElement;\n}(_HTMLMediaElement3.default);\n\nexports.default = HTMLAudioElement;\n\n//# sourceURL=webpack:///./src/HTMLAudioElement.js?");

/***/ }),

/***/ "./src/HTMLCanvasElement.js":
/*!**********************************!*\
  !*** ./src/HTMLCanvasElement.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _HTMLElement2 = __webpack_require__(/*! ./HTMLElement */ \"./src/HTMLElement.js\");\n\nvar _HTMLElement3 = _interopRequireDefault(_HTMLElement2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HTMLCanvasElement = function (_HTMLElement) {\n    _inherits(HTMLCanvasElement, _HTMLElement);\n\n    function HTMLCanvasElement() {\n        _classCallCheck(this, HTMLCanvasElement);\n\n        return _possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || Object.getPrototypeOf(HTMLCanvasElement)).call(this, 'canvas'));\n    }\n\n    return HTMLCanvasElement;\n}(_HTMLElement3.default);\n\nexports.default = HTMLCanvasElement;\n;\n\n//# sourceURL=webpack:///./src/HTMLCanvasElement.js?");

/***/ }),

/***/ "./src/HTMLElement.js":
/*!****************************!*\
  !*** ./src/HTMLElement.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Element2 = __webpack_require__(/*! ./Element */ \"./src/Element.js\");\n\nvar _Element3 = _interopRequireDefault(_Element2);\n\nvar _noop = __webpack_require__(/*! ./utils/noop */ \"./src/utils/noop.js\");\n\nvar _WindowProperties = __webpack_require__(/*! ./WindowProperties */ \"./src/WindowProperties.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HTMLElement = function (_Element) {\n    _inherits(HTMLElement, _Element);\n\n    function HTMLElement() {\n        var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n        _classCallCheck(this, HTMLElement);\n\n        var _this = _possibleConstructorReturn(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this));\n\n        _this.className = '';\n        _this.childern = [];\n\n        _this.style = {\n            width: _WindowProperties.innerWidth + 'px',\n            height: _WindowProperties.innerHeight + 'px'\n        };\n\n        _this.focus = _noop.noop;\n        _this.blur = _noop.noop;\n\n        _this.innerHTML = '';\n\n        _this.tagName = tagName.toUpperCase();\n        return _this;\n    }\n\n    return HTMLElement;\n}(_Element3.default);\n\nexports.default = HTMLElement;\n\n//# sourceURL=webpack:///./src/HTMLElement.js?");

/***/ }),

/***/ "./src/HTMLImageElement.js":
/*!*********************************!*\
  !*** ./src/HTMLImageElement.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _HTMLElement2 = __webpack_require__(/*! ./HTMLElement */ \"./src/HTMLElement.js\");\n\nvar _HTMLElement3 = _interopRequireDefault(_HTMLElement2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HTMLImageElement = function (_HTMLElement) {\n    _inherits(HTMLImageElement, _HTMLElement);\n\n    function HTMLImageElement() {\n        _classCallCheck(this, HTMLImageElement);\n\n        return _possibleConstructorReturn(this, (HTMLImageElement.__proto__ || Object.getPrototypeOf(HTMLImageElement)).call(this, \"img\"));\n    }\n\n    return HTMLImageElement;\n}(_HTMLElement3.default);\n\nexports.default = HTMLImageElement;\n;\n\n//# sourceURL=webpack:///./src/HTMLImageElement.js?");

/***/ }),

/***/ "./src/HTMLMediaElement.js":
/*!*********************************!*\
  !*** ./src/HTMLMediaElement.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _HTMLElement2 = __webpack_require__(/*! ./HTMLElement */ \"./src/HTMLElement.js\");\n\nvar _HTMLElement3 = _interopRequireDefault(_HTMLElement2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HTMLMediaElement = function (_HTMLElement) {\n    _inherits(HTMLMediaElement, _HTMLElement);\n\n    function HTMLMediaElement(tagName) {\n        var _this, _ret;\n\n        _classCallCheck(this, HTMLMediaElement);\n\n        return _ret = (_this = _possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this, tagName)), _this), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(HTMLMediaElement, [{\n        key: \"addTextTrack\",\n        value: function addTextTrack() {}\n    }, {\n        key: \"capureStream\",\n        value: function capureStream() {}\n    }, {\n        key: \"fastSeek\",\n        value: function fastSeek() {}\n    }, {\n        key: \"load\",\n        value: function load() {}\n    }, {\n        key: \"pause\",\n        value: function pause() {}\n    }, {\n        key: \"play\",\n        value: function play() {}\n    }]);\n\n    return HTMLMediaElement;\n}(_HTMLElement3.default);\n\nexports.default = HTMLMediaElement;\n\n//# sourceURL=webpack:///./src/HTMLMediaElement.js?");

/***/ }),

/***/ "./src/HTMLVideoElement.js":
/*!*********************************!*\
  !*** ./src/HTMLVideoElement.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _HTMLMediaElement2 = __webpack_require__(/*! ./HTMLMediaElement */ \"./src/HTMLMediaElement.js\");\n\nvar _HTMLMediaElement3 = _interopRequireDefault(_HTMLMediaElement2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HTMLVideoElement = function (_HTMLMediaElement) {\n    _inherits(HTMLVideoElement, _HTMLMediaElement);\n\n    function HTMLVideoElement() {\n        _classCallCheck(this, HTMLVideoElement);\n\n        return _possibleConstructorReturn(this, (HTMLVideoElement.__proto__ || Object.getPrototypeOf(HTMLVideoElement)).call(this, 'video'));\n    }\n\n    return HTMLVideoElement;\n}(_HTMLMediaElement3.default);\n\nexports.default = HTMLVideoElement;\n;\n\n//# sourceURL=webpack:///./src/HTMLVideoElement.js?");

/***/ }),

/***/ "./src/Image.js":
/*!**********************!*\
  !*** ./src/Image.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = Image;\n\nvar _HTMLImageElement = __webpack_require__(/*! ./HTMLImageElement */ \"./src/HTMLImageElement.js\");\n\nvar _HTMLImageElement2 = _interopRequireDefault(_HTMLImageElement);\n\nvar _util = __webpack_require__(/*! ./utils/util */ \"./src/utils/util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Image() {\n    var image = my.createImage();\n    if (!_util.isIDE) {\n        image.__proto__.__proto__ = new _HTMLImageElement2.default();\n        if (image.tagName === undefined) {\n            image.tagName = \"IMG\";\n        }\n\n        image.dispatchEvent = function () {\n            image.__proto__.__proto__.dispatchEvent(arguments);\n        };\n    }\n\n    return image;\n}\n\n//# sourceURL=webpack:///./src/Image.js?");

/***/ }),

/***/ "./src/ImageBitmap.js":
/*!****************************!*\
  !*** ./src/ImageBitmap.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ImageBitmap = function ImageBitmap() {\n    // TODO\n\n    _classCallCheck(this, ImageBitmap);\n};\n\nexports.default = ImageBitmap;\n\n//# sourceURL=webpack:///./src/ImageBitmap.js?");

/***/ }),

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _EventTarget2 = __webpack_require__(/*! ./EventTarget */ \"./src/EventTarget.js\");\n\nvar _EventTarget3 = _interopRequireDefault(_EventTarget2);\n\nvar _noop = __webpack_require__(/*! ./utils/noop */ \"./src/utils/noop.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Node = function (_EventTarget) {\n  _inherits(Node, _EventTarget);\n\n  function Node() {\n    _classCallCheck(this, Node);\n\n    var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));\n\n    _this.childNodes = [];\n\n    _this.insertBefor = _noop.noop;\n    return _this;\n  }\n\n  _createClass(Node, [{\n    key: 'appendChild',\n    value: function appendChild(node) {\n      if (node instanceof Node || node instanceof window.Node) {\n        this.childNodes.push(node);\n      } else {\n        throw new TypeError('Failed to executed \\'appendChild\\' on \\'Node\\': parameter 1 is not of type \\'Node\\'.');\n      }\n    }\n  }, {\n    key: 'cloneNode',\n    value: function cloneNode() {\n      var copyNode = Object.create(this);\n\n      return Object.assign(copyNode, this);\n    }\n  }, {\n    key: 'removeChild',\n    value: function removeChild(node) {\n      var index = this.childNodes.findIndex(function (child) {\n        return child === node;\n      });\n\n      if (index > -1) {\n        return this.childNodes.splice(index, 1);\n      }\n      return null;\n    }\n  }]);\n\n  return Node;\n}(_EventTarget3.default);\n\nexports.default = Node;\n\n//# sourceURL=webpack:///./src/Node.js?");

/***/ }),

/***/ "./src/WebGLRenderingContext.js":
/*!**************************************!*\
  !*** ./src/WebGLRenderingContext.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar WebGLRenderingContext = function WebGLRenderingContext() {\n    // TODO\n\n    _classCallCheck(this, WebGLRenderingContext);\n};\n\nexports.default = WebGLRenderingContext;\n\n//# sourceURL=webpack:///./src/WebGLRenderingContext.js?");

/***/ }),

/***/ "./src/WebSocket.js":
/*!**************************!*\
  !*** ./src/WebSocket.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _util = __webpack_require__(/*! ./utils/util */ \"./src/utils/util.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar _taskMap = new WeakMap();\n\nvar CONNECTING = 0;\nvar OPEN = 1;\nvar CLOSING = 2;\nvar CLOSED = 3;\n\nvar WebSocket = function () {\n    function WebSocket(url) {\n        var _this = this;\n\n        var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n        _classCallCheck(this, WebSocket);\n\n        this.binaryType = '';\n        this.bufferedAmount = 0;\n        this.extensions = '';\n\n        this.onclose = null;\n        this.onerror = null;\n        this.onmessage = null;\n        this.onopen = null;\n\n        this.protocol = '';\n        this.readyState = CLOSED;\n\n        if (typeof url !== 'string' || !/(^ws:\\/\\/)|(^wss:\\/\\/)/.test(url)) {\n            throw new TypeError('Failed to construct \\'WebSocket\\': The URL=\\'' + url + '\\' is invalid');\n        }\n\n        this.url = url;\n        this.readyState = CONNECTING;\n\n        var task = my.connectSocket({\n            url: url,\n            multiple: true,\n            protocols: Array.isArray(protocols) ? protocols : [protocols]\n        });\n        _taskMap.set(this, task);\n\n        task.onOpen(function (res) {\n            _this.readyState = OPEN;\n            if (typeof _this.onopen === 'function') {\n                _this.onopen(res);\n            }\n        });\n\n        task.onError(function (res) {\n            if (typeof _this.onerror === 'function') {\n                _this.onerror(new Error(res.errorMessage));\n            }\n        });\n\n        task.onMessage(function (res) {\n            if (typeof _this.onmessage === 'function') {\n                if (res.isBuffer) {\n                    res = atob(res);\n                }\n                _this.onmessage(res);\n            }\n        });\n\n        task.onClose(function (res) {\n            _this.readyState = CLOSED;\n            if (typeof _this.onclose === 'function') {\n                _this.onclose(res);\n            }\n        });\n    }\n\n    _createClass(WebSocket, [{\n        key: 'send',\n        value: function send(data) {\n            if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {\n                throw new TypeError('Failed to send message: The data ' + data + ' is invalid');\n            }\n            var p = {};\n            if (data instanceof ArrayBuffer) {\n                data = (0, _util.transformArrayBufferToBase64)(data);\n                p.isBuffer = true;\n            }\n            p.data = data;\n            var task = _taskMap.get(this);\n            task.send(p);\n        }\n    }, {\n        key: 'close',\n        value: function close() {\n            this.readyState = CLOSING;\n            var task = _taskMap.get(this);\n            task.close();\n        }\n    }]);\n\n    return WebSocket;\n}();\n\nexports.default = WebSocket;\n\n//# sourceURL=webpack:///./src/WebSocket.js?");

/***/ }),

/***/ "./src/WindowProperties.js":
/*!*********************************!*\
  !*** ./src/WindowProperties.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _my$getSystemInfoSync = my.getSystemInfoSync(),\n    screenWidth = _my$getSystemInfoSync.screenWidth,\n    screenHeight = _my$getSystemInfoSync.screenHeight,\n    _devicePixelRatio = _my$getSystemInfoSync._devicePixelRatio,\n    _platform = _my$getSystemInfoSync._platform,\n    pixelRatio = _my$getSystemInfoSync.pixelRatio,\n    windowHeight = _my$getSystemInfoSync.windowHeight,\n    windowWidth = _my$getSystemInfoSync.windowWidth;\n\n// export var platform = _platform;\n\n\nvar innerHeight = exports.innerHeight = windowHeight;\nvar innerWidth = exports.innerWidth = windowWidth;\nvar devicePixelRatio = exports.devicePixelRatio = pixelRatio;\nvar screen = exports.screen = {\n  width: screenWidth,\n  height: screenHeight,\n  availWidth: innerWidth,\n  availHeight: innerHeight,\n  availLeft: 0,\n  availTop: 0\n};\n\n//# sourceURL=webpack:///./src/WindowProperties.js?");

/***/ }),

/***/ "./src/XMLHttpRequest.js":
/*!*******************************!*\
  !*** ./src/XMLHttpRequest.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _EventTarget2 = __webpack_require__(/*! ./EventTarget */ \"./src/EventTarget.js\");\n\nvar _EventTarget3 = _interopRequireDefault(_EventTarget2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _url = new WeakMap();\nvar _method = new WeakMap();\nvar _requestHeader = new WeakMap();\nvar _responseHeader = new WeakMap();\nvar _requestTask = new WeakMap();\n\nfunction _triggerEvent(type) {\n  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  event.target = event.target || this;\n  if (typeof this['on' + type] === 'function') {\n    this['on' + type].apply(this, event);\n  }\n}\n\nfunction _changeReadyState(readyState) {\n  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  this.readyState = readyState;\n  event.readyState = readyState;\n  _triggerEvent.call(this, 'readystatechange', event);\n}\n\nvar UNSEND = 0;\nvar OPENED = 1;\nvar HEADERS_RECEIVED = 2;\nvar LOADING = 3;\nvar DONE = 4;\n\nvar XMLHttpRequest = function (_EventTarget) {\n  _inherits(XMLHttpRequest, _EventTarget);\n\n  function XMLHttpRequest() {\n    _classCallCheck(this, XMLHttpRequest);\n\n    var _this = _possibleConstructorReturn(this, (XMLHttpRequest.__proto__ || Object.getPrototypeOf(XMLHttpRequest)).call(this));\n\n    _this.onabort = null;\n    _this.onerror = null;\n    _this.onload = null;\n    _this.onloadstart = null;\n    _this.onprogress = null;\n    _this.ontimeout = null;\n    _this.onloadend = null;\n\n    _this.onreadystatechange = null;\n    _this.readyState = 0;\n    _this.response = null;\n    _this.responseText = null;\n    _this.responseType = '';\n    _this.dataType = 'string';\n    _this.responseXML = null;\n    _this.status = 0;\n    _this.statusText = '';\n    _this.upload = {};\n    _this.withCredentials = false;\n    _this.timeout = 0;\n\n    _requestHeader.set(_this, {\n      'content-type': 'application/x-www-form-urlencoded'\n    });\n    _responseHeader.set(_this, {});\n    return _this;\n  }\n\n  _createClass(XMLHttpRequest, [{\n    key: 'abort',\n    value: function abort() {\n      var myRequestTask = _requestTask.get(this);\n\n      if (myRequestTask) {\n        myRequestTask.abort();\n      }\n    }\n  }, {\n    key: 'getAllResponseHeaders',\n    value: function getAllResponseHeaders() {\n      var responseHeader = _responseHeader.get(this);\n\n      return Object.keys(responseHeader).map(function (header) {\n        return header + ': ' + responseHeader[header];\n      }).join('\\n');\n    }\n\n    /* async, user, password 这几个参数在小程序内不支持*/\n\n  }, {\n    key: 'open',\n    value: function open(method, url) {\n      _method.set(this, method);\n      _url.set(this, url);\n      _changeReadyState.call(this, OPENED);\n    }\n  }, {\n    key: 'overrideMimeType',\n    value: function overrideMimeType() {}\n  }, {\n    key: 'send',\n    value: function send() {\n      var _this2 = this;\n\n      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n\n      if (this.readyState !== OPENED) {\n        throw new Error(\"Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.\");\n      } else {\n        var task = my.request({\n          data: data,\n          url: _url.get(this),\n          method: _method.get(this),\n          header: _requestHeader.get(this),\n          timeout: this.timeout,\n          dataType: this.dataType,\n          responseType: this.responseType,\n          success: function success(res) {\n            var data = res.data,\n                status = res.status,\n                headers = res.headers;\n\n\n            if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {\n              try {\n                data = JSON.stringify(data);\n              } catch (e) {\n                data = data;\n              }\n            }\n\n            _this2.status = status;\n            _responseHeader.set(_this2, headers || {});\n            _triggerEvent.call(_this2, 'loadstart');\n            _changeReadyState.call(_this2, HEADERS_RECEIVED);\n            _changeReadyState.call(_this2, LOADING);\n\n            _this2.response = data;\n\n            if (data instanceof ArrayBuffer) {\n              _this2.responseText = '';\n              var bytes = new Uint8Array(data);\n              var len = bytes.byteLength;\n\n              for (var i = 0; i < len; i++) {\n                _this2.responseText += String.fromCharCode(bytes[i]);\n              }\n            } else {\n              _this2.responseText = data;\n            }\n            _changeReadyState.call(_this2, DONE);\n            _triggerEvent.call(_this2, 'load');\n            _triggerEvent.call(_this2, 'loadend');\n          },\n\n          fail: function fail(res) {\n            var errorMessage = res.errorMessage;\n\n\n            _triggerEvent.call(_this2, 'error', errorMessage);\n            _triggerEvent.call(_this2, 'loadend');\n          }\n        });\n\n        _requestTask.set(this, task);\n      }\n    }\n  }, {\n    key: 'setRequestHeader',\n    value: function setRequestHeader(header, value) {\n      var myHeader = _requestHeader.get(this);\n      myHeader[header] = value;\n      _requestHeader.set(this, myHeader);\n    }\n  }, {\n    key: 'addEventListener',\n    value: function addEventListener(type, listener) {\n      var _this3 = this;\n\n      if (typeof listener === 'function') {\n        this['on' + type] = function () {\n          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n          event.target = event.target || _this3;\n          listener.call(_this3, event);\n        };\n      }\n    }\n  }, {\n    key: 'removeEventListener',\n    value: function removeEventListener(type, listener) {\n      if (this['on' + type] === listener) {\n        this['on' + type] = null;\n      }\n    }\n  }]);\n\n  return XMLHttpRequest;\n}(_EventTarget3.default);\n\nexports.default = XMLHttpRequest;\n\n//# sourceURL=webpack:///./src/XMLHttpRequest.js?");

/***/ }),

/***/ "./src/document.js":
/*!*************************!*\
  !*** ./src/document.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Event = __webpack_require__(/*! ./Event */ \"./src/Event.js\");\n\nvar _Event2 = _interopRequireDefault(_Event);\n\nvar _HTMLElement = __webpack_require__(/*! ./HTMLElement */ \"./src/HTMLElement.js\");\n\nvar _HTMLElement2 = _interopRequireDefault(_HTMLElement);\n\nvar _HTMLVideoElement = __webpack_require__(/*! ./HTMLVideoElement */ \"./src/HTMLVideoElement.js\");\n\nvar _HTMLVideoElement2 = _interopRequireDefault(_HTMLVideoElement);\n\nvar _Image = __webpack_require__(/*! ./Image */ \"./src/Image.js\");\n\nvar _Image2 = _interopRequireDefault(_Image);\n\nvar _Audio = __webpack_require__(/*! ./Audio */ \"./src/Audio.js\");\n\nvar _Audio2 = _interopRequireDefault(_Audio);\n\nvar _Canvas = __webpack_require__(/*! ./Canvas */ \"./src/Canvas.js\");\n\nvar _Canvas2 = _interopRequireDefault(_Canvas);\n\n__webpack_require__(/*! ./EventIniter/index.js */ \"./src/EventIniter/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar events = {};\n\nvar getElementsByTagName_;\nif (window.document && window.document.getElementsByTagName) {\n    getElementsByTagName_ = window.document.getElementsByTagName.bind(window.document);\n}\n\nvar document = {\n    readyState: 'complete',\n    visibilityState: 'visible', // 'visible' , 'hidden'\n    fullscreen: true,\n    hidden: false,\n    style: {},\n    scripts: [],\n\n    location: window.location,\n\n    ontouchstart: null,\n    ontouchmove: null,\n    ontouchend: null,\n    onvisibilitychange: null,\n\n    head: new _HTMLElement2.default(\"head\"),\n    body: new _HTMLElement2.default(\"body\"),\n\n    createElement: function createElement(tagName) {\n        tagName = tagName.toLowerCase();\n        if (tagName === 'canvas') {\n            return new _Canvas2.default();\n        } else if (tagName === 'audio') {\n            return new _Audio2.default();\n        } else if (tagName === 'img') {\n            return new _Image2.default();\n        } else if (tagName === 'video') {\n            return new _HTMLVideoElement2.default();\n        }\n\n        return new _HTMLElement2.default(tagName);\n    },\n    createElementNS: function createElementNS(nameSpace, tagName) {\n        return this.createElement(tagName);\n    },\n    getElementById: function getElementById(id) {\n        if (id === window.canvas.id) {\n            return window.canvas;\n        }\n        return null;\n    },\n    getElementsByTagName: function getElementsByTagName(tagName) {\n        if (getElementsByTagName_) {\n            return getElementsByTagName_(tagName);\n        }\n\n        tagName = tagName.toLowerCase();\n        if (tagName === 'head') {\n            return [document.head];\n        } else if (tagName === 'body') {\n            return [document.body];\n        } else if (tagName === 'canvas') {\n            return [window.canvas];\n        }\n        return [];\n    },\n    getElementsByTagNameNS: function getElementsByTagNameNS(nameSpace, tagName) {\n        return this.getElementsByTagName(tagName);\n    },\n    getElementsByName: function getElementsByName(tagName) {\n        if (tagName === 'head') {\n            return [document.head];\n        } else if (tagName === 'body') {\n            return [document.body];\n        } else if (tagName === 'canvas') {\n            return [window.canvas];\n        }\n        return [];\n    },\n    querySelector: function querySelector(query) {\n        if (query === 'head') {\n            return document.head;\n        } else if (query === 'body') {\n            return document.body;\n        } else if (query === 'canvas') {\n            return window.canvas;\n        } else if (query === '#' + window.canvas.id) {\n            return window.canvas;\n        }\n        return null;\n    },\n    querySelectorAll: function querySelectorAll(query) {\n        if (query === 'head') {\n            return [document.head];\n        } else if (query === 'body') {\n            return [document.body];\n        } else if (query === 'canvas') {\n            return [window.canvas];\n        }\n        return [];\n    },\n    addEventListener: function addEventListener(type, listener) {\n        if (!events[type]) {\n            events[type] = [];\n        }\n        events[type].push(listener);\n    },\n    removeEventListener: function removeEventListener(type, listener) {\n        var listeners = events[type];\n\n        if (listeners && listeners.length > 0) {\n            for (var i = listeners.length; i--; i > 0) {\n                if (listeners[i] === listener) {\n                    listeners.splice(i, 1);\n                    break;\n                }\n            }\n        }\n    },\n    dispatchEvent: function dispatchEvent(event) {\n        var type = event.type;\n        var listeners = events[type];\n\n        if (listeners) {\n            for (var i = 0; i < listeners.length; i++) {\n                listeners[i](event);\n            }\n        }\n\n        window.canvas.dispatchEvent(event);\n\n        if (event.target && typeof event.target['on' + type] === 'function') {\n            event.target['on' + type](event);\n        }\n    }\n};\n\nfunction onVisibilityChange(visible) {\n\n    return function () {\n\n        document.visibilityState = visible ? 'visible' : 'hidden';\n\n        var hidden = !visible;\n        if (document.hidden === hidden) {\n            return;\n        }\n        document.hidden = hidden;\n\n        var event = new _Event2.default('visibilitychange');\n\n        event.target = document;\n        event.timeStamp = Date.now();\n\n        document.dispatchEvent(event);\n    };\n}\n\nif (my.onHide) {\n    my.onHide(onVisibilityChange(false));\n}\nif (my.onShow) {\n    my.onShow(onVisibilityChange(true));\n}\n\nexports.default = document;\n\n//# sourceURL=webpack:///./src/document.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _window2 = __webpack_require__(/*! ./window */ \"./src/window.js\");\n\nvar _window = _interopRequireWildcard(_window2);\n\nvar _document = __webpack_require__(/*! ./document */ \"./src/document.js\");\n\nvar _document2 = _interopRequireDefault(_document);\n\nvar _util = __webpack_require__(/*! ./utils/util */ \"./src/utils/util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction inject() {\n    _window.document = _document2.default;\n\n    _window.addEventListener = function (type, listener) {\n        _window.document.addEventListener(type, listener);\n    };\n    _window.removeEventListener = function (type, listener) {\n        _window.document.removeEventListener(type, listener);\n    };\n    _window.dispatchEvent = function () {\n        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n        console.log('window.dispatchEvent', event.type, event);\n    };\n\n    if (_util.isIDE) {\n        for (var key in _window) {\n            var descriptor = Object.getOwnPropertyDescriptor(window, key);\n\n            if (!descriptor || descriptor.configurable === true) {\n                Object.defineProperty(window, key, {\n                    value: _window[key]\n                });\n            }\n        }\n\n        for (var _key in _window.document) {\n            var _descriptor = Object.getOwnPropertyDescriptor(window.document, _key);\n\n            if (!_descriptor || _descriptor.configurable === true) {\n                Object.defineProperty(window.document, _key, {\n                    value: _window.document[_key]\n                });\n            }\n        }\n        window.parent = window;\n        window.my = my;\n    } else {\n        _window.my = my;\n        for (var _key2 in _window) {\n            window[_key2] = _window[_key2];\n        }\n    }\n}\n\ninject();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar localStorage = {\n    get length() {\n        var _my$getStorageInfoSyn = my.getStorageInfoSync(),\n            keys = _my$getStorageInfoSyn.keys;\n\n        console.log(\"getStorageInfoSync: \" + JSON.stringify(my.getStorageInfoSync()));\n        return keys.length;\n    },\n\n    key: function key(n) {\n        var _my$getStorageInfoSyn2 = my.getStorageInfoSync(),\n            keys = _my$getStorageInfoSyn2.keys;\n\n        return keys[n];\n    },\n    getItem: function getItem(key) {\n        var value = my.getStorageSync({ key: key });\n        return value.data === null ? null : value.data;\n    },\n    setItem: function setItem(key, value) {\n        if (window.asyncStorage) {\n            return my.setStorage({\n                key: key,\n                data: value\n            });\n        }\n        return my.setStorageSync({ key: key, data: value });\n    },\n    removeItem: function removeItem(key) {\n        if (window.asyncStorage) {\n            return my.removeStorage({\n                key: key\n            });\n        }\n        return my.removeStorageSync({ key: key });\n    },\n    clear: function clear() {\n        if (window.asyncStorage) {\n            return my.clearStorage();\n        }\n        return my.clearStorageSync();\n    }\n};\n\nexports.default = localStorage;\n\n//# sourceURL=webpack:///./src/localStorage.js?");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar location = {\n  href: 'game.js',\n\n  reload: function reload() {},\n  replace: function replace() {}\n};\n\nexports.default = location;\n\n//# sourceURL=webpack:///./src/location.js?");

/***/ }),

/***/ "./src/navigator.js":
/*!**************************!*\
  !*** ./src/navigator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _noop = __webpack_require__(/*! ./utils/noop */ \"./src/utils/noop.js\");\n\nvar systemInfo = my.getSystemInfoSync();\nconsole.log(\"navigator init\");\n\nvar _ref = systemInfo || {},\n    system = _ref.system,\n    _ref$platform = _ref.platform,\n    platform = _ref$platform === undefined ? \"android\" : _ref$platform,\n    language = _ref.language;\n\nvar android = platform.toLowerCase().indexOf('android') !== -1;\n\nif (my.onNetworkStatusChange) {\n    my.onNetworkStatusChange(function (res) {\n        navigator.onLine = res.isConnected ? true : false;\n    });\n}\n\nfunction getCurrentPosition(cb) {\n    if (typeof cb !== \"function\") {\n        throw new TypeError(\"Failed to execute 'getCurrentPosition' on 'Geolocation': 1 argument required, but only 0 present.\");\n    }\n\n    my.getLocation({\n        success: function success(res) {\n            var accuracy = res.accuracy,\n                latitude = res.latitude,\n                longitude = res.longitude;\n\n            cb({\n                coords: {\n                    accuracy: accuracy,\n                    latitude: latitude,\n                    longitude: longitude\n                },\n                timestamp: new Date().valueOf()\n            });\n        }\n    });\n}\n\nvar uaDesc = android ? 'Android; CPU ' + system : 'iPhone; CPU iPhone OS ' + system + ' like Mac OS X';\nvar userAgent = \"Mozilla/5.0 (\" + uaDesc + \") AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 AlipayMiniGame NetType/WIFI Language/\" + language;\nif (window.navigator) {\n    userAgent = window.navigator.userAgent + \" AlipayMiniGame\";\n}\n\nvar navigator = {\n    platform: platform,\n    language: language,\n    userAgent: userAgent,\n    appVersion: '5.0 (' + uaDesc + ') AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',\n    geolocation: {\n        getCurrentPosition: getCurrentPosition,\n        watchPositon: _noop.noop,\n        clearWatch: _noop.noop\n    }\n};\n\nexports.default = navigator;\n\n//# sourceURL=webpack:///./src/navigator.js?");

/***/ }),

/***/ "./src/utils/noop.js":
/*!***************************!*\
  !*** ./src/utils/noop.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.noop = noop;\nfunction noop() {};\n\n//# sourceURL=webpack:///./src/utils/noop.js?");

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.isIDE = undefined;\nexports.transformArrayBufferToBase64 = transformArrayBufferToBase64;\n\nvar _Base = __webpack_require__(/*! ../Base64 */ \"./src/Base64.js\");\n\nfunction transformArrayBufferToBase64(buffer) {\n    var binary = '';\n    var bytes = new Uint8Array(buffer);\n    for (var len = bytes.byteLength, i = 0; i < len; i++) {\n        binary += String.fromCharCode(bytes[i]);\n    }\n    return (0, _Base.btoa)(binary);\n}\n\nvar isIDE = exports.isIDE = window.navigator && /AlipayIDE/.test(window.navigator.userAgent);\n\n//# sourceURL=webpack:///./src/utils/util.js?");

/***/ }),

/***/ "./src/window.js":
/*!***********************!*\
  !*** ./src/window.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.canvas = exports.location = exports.atob = exports.btoa = exports.localStorage = exports.MouseEvent = exports.TouchEvent = exports.WebGLRenderingContext = exports.HTMLVideoElement = exports.HTMLAudioElement = exports.HTMLMediaElement = exports.HTMLCanvasElement = exports.HTMLImageElement = exports.HTMLElement = exports.Element = exports.FileReader = exports.Audio = exports.ImageBitmap = exports.Image = exports.WebSocket = exports.XMLHttpRequest = exports.navigator = undefined;\n\nvar _navigator = __webpack_require__(/*! ./navigator */ \"./src/navigator.js\");\n\nObject.defineProperty(exports, 'navigator', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_navigator).default;\n    }\n});\n\nvar _XMLHttpRequest = __webpack_require__(/*! ./XMLHttpRequest */ \"./src/XMLHttpRequest.js\");\n\nObject.defineProperty(exports, 'XMLHttpRequest', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_XMLHttpRequest).default;\n    }\n});\n\nvar _WebSocket = __webpack_require__(/*! ./WebSocket */ \"./src/WebSocket.js\");\n\nObject.defineProperty(exports, 'WebSocket', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_WebSocket).default;\n    }\n});\n\nvar _Image = __webpack_require__(/*! ./Image */ \"./src/Image.js\");\n\nObject.defineProperty(exports, 'Image', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_Image).default;\n    }\n});\n\nvar _ImageBitmap = __webpack_require__(/*! ./ImageBitmap */ \"./src/ImageBitmap.js\");\n\nObject.defineProperty(exports, 'ImageBitmap', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_ImageBitmap).default;\n    }\n});\n\nvar _Audio = __webpack_require__(/*! ./Audio */ \"./src/Audio.js\");\n\nObject.defineProperty(exports, 'Audio', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_Audio).default;\n    }\n});\n\nvar _FileReader = __webpack_require__(/*! ./FileReader */ \"./src/FileReader.js\");\n\nObject.defineProperty(exports, 'FileReader', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_FileReader).default;\n    }\n});\n\nvar _Element = __webpack_require__(/*! ./Element */ \"./src/Element.js\");\n\nObject.defineProperty(exports, 'Element', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_Element).default;\n    }\n});\n\nvar _HTMLElement = __webpack_require__(/*! ./HTMLElement */ \"./src/HTMLElement.js\");\n\nObject.defineProperty(exports, 'HTMLElement', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_HTMLElement).default;\n    }\n});\n\nvar _HTMLImageElement = __webpack_require__(/*! ./HTMLImageElement */ \"./src/HTMLImageElement.js\");\n\nObject.defineProperty(exports, 'HTMLImageElement', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_HTMLImageElement).default;\n    }\n});\n\nvar _HTMLCanvasElement = __webpack_require__(/*! ./HTMLCanvasElement */ \"./src/HTMLCanvasElement.js\");\n\nObject.defineProperty(exports, 'HTMLCanvasElement', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_HTMLCanvasElement).default;\n    }\n});\n\nvar _HTMLMediaElement = __webpack_require__(/*! ./HTMLMediaElement */ \"./src/HTMLMediaElement.js\");\n\nObject.defineProperty(exports, 'HTMLMediaElement', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_HTMLMediaElement).default;\n    }\n});\n\nvar _HTMLAudioElement = __webpack_require__(/*! ./HTMLAudioElement */ \"./src/HTMLAudioElement.js\");\n\nObject.defineProperty(exports, 'HTMLAudioElement', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_HTMLAudioElement).default;\n    }\n});\n\nvar _HTMLVideoElement = __webpack_require__(/*! ./HTMLVideoElement */ \"./src/HTMLVideoElement.js\");\n\nObject.defineProperty(exports, 'HTMLVideoElement', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_HTMLVideoElement).default;\n    }\n});\n\nvar _WebGLRenderingContext = __webpack_require__(/*! ./WebGLRenderingContext */ \"./src/WebGLRenderingContext.js\");\n\nObject.defineProperty(exports, 'WebGLRenderingContext', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_WebGLRenderingContext).default;\n    }\n});\n\nvar _index = __webpack_require__(/*! ./EventIniter/index.js */ \"./src/EventIniter/index.js\");\n\nObject.defineProperty(exports, 'TouchEvent', {\n    enumerable: true,\n    get: function get() {\n        return _index.TouchEvent;\n    }\n});\nObject.defineProperty(exports, 'MouseEvent', {\n    enumerable: true,\n    get: function get() {\n        return _index.MouseEvent;\n    }\n});\n\nvar _localStorage = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\nObject.defineProperty(exports, 'localStorage', {\n    enumerable: true,\n    get: function get() {\n        return _interopRequireDefault(_localStorage).default;\n    }\n});\n\nvar _Base = __webpack_require__(/*! ./Base64 */ \"./src/Base64.js\");\n\nObject.defineProperty(exports, 'btoa', {\n    enumerable: true,\n    get: function get() {\n        return _Base.btoa;\n    }\n});\nObject.defineProperty(exports, 'atob', {\n    enumerable: true,\n    get: function get() {\n        return _Base.atob;\n    }\n});\n\nvar _WindowProperties = __webpack_require__(/*! ./WindowProperties */ \"./src/WindowProperties.js\");\n\nObject.keys(_WindowProperties).forEach(function (key) {\n    if (key === \"default\" || key === \"__esModule\") return;\n    Object.defineProperty(exports, key, {\n        enumerable: true,\n        get: function get() {\n            return _WindowProperties[key];\n        }\n    });\n});\nexports.alert = alert;\nexports.focus = focus;\nexports.blur = blur;\n\nvar _Canvas = __webpack_require__(/*! ./Canvas */ \"./src/Canvas.js\");\n\nvar _Canvas2 = _interopRequireDefault(_Canvas);\n\nvar _location = __webpack_require__(/*! ./location */ \"./src/location.js\");\n\nvar _location2 = _interopRequireDefault(_location);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar location = exports.location = _location2.default;\n\n// 暴露全局的 canvas\nwindow.screencanvas = window.screencanvas || new _Canvas2.default();\nvar canvas = exports.canvas = window.screencanvas;\n\nfunction alert(msg) {\n    my.alert({\n        content: msg\n    });\n}\n\nfunction focus() {}\n\nfunction blur() {}\n\n//# sourceURL=webpack:///./src/window.js?");

/***/ })

/******/ });