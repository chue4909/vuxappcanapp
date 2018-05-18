(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("appcan", [], factory);
	else if(typeof exports === 'object')
		exports["appcan"] = factory();
	else
		root["appcan"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(3);
var isBuffer = __webpack_require__(14);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return version; });
/* harmony export (immutable) */ __webpack_exports__["c"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["e"] = isString;
/* unused harmony export isObject */
/* unused harmony export isArray */
/* unused harmony export isWindow */
/* harmony export (immutable) */ __webpack_exports__["d"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["b"] = isAppCan;
/* harmony export (immutable) */ __webpack_exports__["f"] = ready;
/* harmony export (immutable) */ __webpack_exports__["a"] = getUID;
var version = '0.0.1'; // 版本号

// 是否是函数
function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}

// 是否是字符串
function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

// 是否是object对象
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

// 是否是数组
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

// 是否是window对象
function isWindow(obj) {
  return obj != null && obj === obj.window;
}

// 是否是纯对象
function isPlainObject(obj) {
  return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) === Object.prototype;
}

// 是否是appcan环境
function isAppCan() {
  return window.navigator.userAgent.toLowerCase().indexOf('appcan') >= 0;
}

/*
  检查是ready
  @param Function callback 回调函数

  */
function ready(callback) {
  var cb = callback;
  cb = isFunction(callback) ? callback : function func() {};
  if (isAppCan()) {
    window.uexOnload = function onLoad(type) {
      cb(type);
    };
  } else {
    window.onload = function onload() {
      cb();
    };
  }
}

// 获取随机的唯一id，随机不重复，长度固定
function getUID(len) {
  var length = len;
  length = length || 6;
  length = parseInt(length, 10);
  length = isNaN(length) ? 6 : length;
  var seed = '0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ';
  var seedLen = seed.length - 1;
  var uuid = '';
  var count = length;
  while (count) {
    count -= 1;
    uuid += seed[Math.round(Math.random() * seedLen)];
  }
  return uuid;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(16);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(5);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(5);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(17);
var buildURL = __webpack_require__(19);
var parseHeaders = __webpack_require__(20);
var isURLSameOrigin = __webpack_require__(21);
var createError = __webpack_require__(6);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(22);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(23);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(18);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = setVal;
/* harmony export (immutable) */ __webpack_exports__["c"] = getVal;
/* harmony export (immutable) */ __webpack_exports__["b"] = getKeys;
/* harmony export (immutable) */ __webpack_exports__["a"] = clear;
/* harmony export (immutable) */ __webpack_exports__["d"] = leaveSpace;
/* harmony export (immutable) */ __webpack_exports__["f"] = val;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);


var storage = window.localStorage;
/*
   从本地存储获取值
   @param String key 设置localstorage的key
   @param String value 设置localstorage的val

   */
function setVal(key, value) {
  if (storage) {
    var value1 = value;
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__base__["e" /* isString */])(value1)) {
      value1 = JSON.stringify(value1);
    }
    storage.setItem(key, value1);
  }
}

/*
   从localStorage获取对应的值
   @param String key 获取值的key

   */
function getVal(key) {
  if (storage && key) {
    return storage.getItem(key);
  }
  return '';
}

/*
   从localStorage获取所有的keys

   */
function getKeys() {
  var res = [];
  for (var i = 0, len = storage.length; i < len; i) {
    var key = '';
    key = storage.key(i);
    if (key) {
      res.push(key);
    }
    var n = i + 1;
    i = n;
  }
  return res;
}

/*
   青春对应的key
   @param String key


   */
function clear(key) {
  if (key && Object(__WEBPACK_IMPORTED_MODULE_0__base__["e" /* isString */])(key)) {
    storage.removeItem(key);
  } else {
    storage.clear();
  }
}

/*
   localStorage剩余空间大小

   */
function leaveSpace() {
  var all = 1024 * 1024 * 5;
  var space = all - unescape(encodeURIComponent(JSON.stringify(storage))).length;
  return space;
}

/*
   获取或者设置localStorage的值
   @param String key
   @param String val

   */
function val(key, value) {
  if (arguments.length === 1) {
    return getVal(key);
  }
  return setVal(key, value);
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* global toString:true */

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result = void 0;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    /* eslint no-param-reassign:0 */
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i += 1) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    var keys = Object.keys(obj);
    for (var _i = 0; _i < keys.length; _i += 1) {
      if (Object.prototype.hasOwnProperty.call(obj, keys[_i])) {
        fn.call(null, obj[keys[_i]], keys[_i], obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i += 1) {
    forEach(arguments.length <= i ? undefined : arguments[i], assignValue);
  }
  return result;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  trim: trim
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__log__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scanner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__voice__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__window__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__xhr__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__download__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upload__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__storage__ = __webpack_require__(9);














if (__WEBPACK_IMPORTED_MODULE_1__base__["b" /* isAppCan */]()) {
  __WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.adapter = __WEBPACK_IMPORTED_MODULE_9__xhr__["a" /* default */];
}

// console.log(axios.defaults.adapter);

var appcan = {
  request: __WEBPACK_IMPORTED_MODULE_0_axios___default.a,
  download: __WEBPACK_IMPORTED_MODULE_10__download__["b" /* download */],
  cancelDownload: __WEBPACK_IMPORTED_MODULE_10__download__["a" /* cancelDownload */],
  getDownloadInfo: __WEBPACK_IMPORTED_MODULE_10__download__["c" /* getDownloadInfo */],
  upload: __WEBPACK_IMPORTED_MODULE_11__upload__["a" /* default */],
  ready: __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ready */],
  getUID: __WEBPACK_IMPORTED_MODULE_1__base__["a" /* getUID */],
  isAppCan: __WEBPACK_IMPORTED_MODULE_1__base__["b" /* isAppCan */],
  version: __WEBPACK_IMPORTED_MODULE_1__base__["g" /* version */],
  getInfo: __WEBPACK_IMPORTED_MODULE_2__device__["a" /* getInfo */],
  getNetworkType: __WEBPACK_IMPORTED_MODULE_2__device__["b" /* getNetworkType */],
  takePicture: __WEBPACK_IMPORTED_MODULE_3__image__["g" /* takePicture */],
  takePicturePromise: __WEBPACK_IMPORTED_MODULE_3__image__["h" /* takePicturePromise */],
  chooseImage: __WEBPACK_IMPORTED_MODULE_3__image__["a" /* chooseImage */],
  chooseImagePromise: __WEBPACK_IMPORTED_MODULE_3__image__["b" /* chooseImagePromise */],
  previewImage: __WEBPACK_IMPORTED_MODULE_3__image__["e" /* previewImage */],
  previewImagePromise: __WEBPACK_IMPORTED_MODULE_3__image__["f" /* previewImagePromise */],
  openCropper: __WEBPACK_IMPORTED_MODULE_3__image__["c" /* openCropper */],
  openCropperPromise: __WEBPACK_IMPORTED_MODULE_3__image__["d" /* openCropperPromise */],
  getLocation: __WEBPACK_IMPORTED_MODULE_4__location__["a" /* getLocation */],
  getLocationPromise: __WEBPACK_IMPORTED_MODULE_4__location__["b" /* getLocationPromise */],
  logs: __WEBPACK_IMPORTED_MODULE_5__log__["a" /* default */],
  scanQRCode: __WEBPACK_IMPORTED_MODULE_6__scanner__["c" /* scanQRCode */],
  scanImage: __WEBPACK_IMPORTED_MODULE_6__scanner__["a" /* scanImage */],
  scanImagePromise: __WEBPACK_IMPORTED_MODULE_6__scanner__["b" /* scanImagePromise */],
  startRecord: __WEBPACK_IMPORTED_MODULE_7__voice__["e" /* startRecord */],
  stopRecord: __WEBPACK_IMPORTED_MODULE_7__voice__["f" /* stopRecord */],
  stopRecordPromise: __WEBPACK_IMPORTED_MODULE_7__voice__["g" /* stopRecordPromise */],
  playVoice: __WEBPACK_IMPORTED_MODULE_7__voice__["d" /* playVoice */],
  pauseVoice: __WEBPACK_IMPORTED_MODULE_7__voice__["c" /* pauseVoice */],
  stopVoice: __WEBPACK_IMPORTED_MODULE_7__voice__["h" /* stopVoice */],
  onVoicePlayEnd: __WEBPACK_IMPORTED_MODULE_7__voice__["a" /* onVoicePlayEnd */],
  onVoicePlayEndPromise: __WEBPACK_IMPORTED_MODULE_7__voice__["b" /* onVoicePlayEndPromise */],
  onKeyPressed: __WEBPACK_IMPORTED_MODULE_8__window__["c" /* onKeyPressed */],
  closeWindow: __WEBPACK_IMPORTED_MODULE_8__window__["a" /* closeWindow */],
  setWindowTitle: __WEBPACK_IMPORTED_MODULE_8__window__["f" /* setWindowTitle */],
  setTitleBackgroundColor: __WEBPACK_IMPORTED_MODULE_8__window__["d" /* setTitleBackgroundColor */],
  setTitleMenu: __WEBPACK_IMPORTED_MODULE_8__window__["e" /* setTitleMenu */],
  getTitleMenu: __WEBPACK_IMPORTED_MODULE_8__window__["b" /* getTitleMenu */],
  setVal: __WEBPACK_IMPORTED_MODULE_12__storage__["e" /* setVal */],
  getVal: __WEBPACK_IMPORTED_MODULE_12__storage__["c" /* getVal */],
  getKeys: __WEBPACK_IMPORTED_MODULE_12__storage__["b" /* getKeys */],
  clear: __WEBPACK_IMPORTED_MODULE_12__storage__["a" /* clear */],
  leaveSpace: __WEBPACK_IMPORTED_MODULE_12__storage__["d" /* leaveSpace */],
  val: __WEBPACK_IMPORTED_MODULE_12__storage__["f" /* val */]
};
// Object.assign(appcan, base, device, image, location, logs, scanner, voice, window);
/* harmony default export */ __webpack_exports__["default"] = (appcan);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(3);
var Axios = __webpack_require__(15);
var defaults = __webpack_require__(2);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(8);
axios.CancelToken = __webpack_require__(29);
axios.isCancel = __webpack_require__(7);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(30);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(2);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(24);
var dispatchRequest = __webpack_require__(25);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(6);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(26);
var isCancel = __webpack_require__(7);
var defaults = __webpack_require__(2);
var isAbsoluteURL = __webpack_require__(27);
var combineURLs = __webpack_require__(28);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(8);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getInfo;
/* harmony export (immutable) */ __webpack_exports__["b"] = getNetworkType;
/* device模块 getInfo,getNetworkType */
/*
  获取设备相关的信息
  @param Int infoId 设备信息Id

  */
function getInfo(infoId) {
  return uexDevice.getInfo(infoId);
}

// 获取网络状态
function getNetworkType() {
  return uexDevice.getInfo(13);
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = takePicture;
/* harmony export (immutable) */ __webpack_exports__["h"] = takePicturePromise;
/* harmony export (immutable) */ __webpack_exports__["a"] = chooseImage;
/* harmony export (immutable) */ __webpack_exports__["b"] = chooseImagePromise;
/* harmony export (immutable) */ __webpack_exports__["e"] = previewImage;
/* harmony export (immutable) */ __webpack_exports__["f"] = previewImagePromise;
/* harmony export (immutable) */ __webpack_exports__["c"] = openCropper;
/* harmony export (immutable) */ __webpack_exports__["d"] = openCropperPromise;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);


/**
 * 拍照，调用系统相机拍照，返回图片地址
 * @param  Number   comtextareass 图片是否压缩,0表示压缩,非0或者不传表示不压缩
 * @param  Number   quality       图片压缩质量,comtextareass为0时有效,取值范围[0,100]
 * @param  {Function} callback      回调函数,用来获取相关业务数据
 * @return                  拍照完成后图片的存储路径
 */
function takePicture(comtextareass, quality, callback) {
  var pictureComtextareass = comtextareass;
  var pictureQuality = quality;
  var pictureCallBack = callback;
  if (arguments.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_0__base__["d" /* isPlainObject */])(comtextareass)) {
    pictureComtextareass = comtextareass.comtextareass;
    pictureQuality = comtextareass.quality;
    pictureCallBack = comtextareass.success;
  }
  uexCamera.open(pictureComtextareass, pictureQuality, function (picPath) {
    pictureCallBack(picPath);
  });
}

function takePicturePromise(comtextareass, quality) {
  return new Promise(function (resolve) {
    uexCamera.open(comtextareass, quality, function (picPath) {
      return resolve(picPath);
    });
  });
}

/**
 * 选择图片
 * @param  Object   param    picker参数设置
 * {min:,max:,quality:,usePng:,detailedInfo,style：1}
  参数名称  参数类型  是否必选  说明  默认值
  min Number  否 最小选择数量 ,传0表示无限制 1
  max Number  否 最大选择数量 ,传0表示无限制 0
  quality Number  否 JPG压缩质量 取值范围 0-1 越大表示质量越好 0.5
  usePng  Boolean 否 用png格式导出图片 ,此参数为true时,quality参数无效 false
  detailedInfo  Boolean 否 此参数为true时,回调中会包含图片的额外信息 false
  style Number  否 如果不传或者传0 为默认样式，传1为新样式(仿微信)  0
  * @param  Function callback picker被关闭的回调函数
  * 参数名称 类型  说明
  images  Object  返回的数据信息
  error Number  0为成功,-1为点击取消而关闭,其他为失败
  * @return Object
  */
function chooseImage(param, callback) {
  var imageParam = param;
  var imageCallBack = callback;
  if (arguments.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_0__base__["d" /* isPlainObject */])(param)) {
    imageParam = param.param;
    imageCallBack = param.success;
  }
  uexImage.openPicker(JSON.stringify(imageParam), function (error, info) {
    if (error === -1) {
      var res = { error: error, images: [] };
      imageCallBack(res);
    } else if (error === 0) {
      if (info.detailedImageInfo && info.detailedImageInfo.length > 0) {
        var _res = { error: error, images: info.detailedImageInfo };
        imageCallBack(_res);
      } else if (info.data && info.data.length > 0) {
        var _res2 = { error: error, images: info.data };
        imageCallBack(_res2);
      } else {
        var _res3 = { error: error, images: [] };
        imageCallBack(_res3);
      }
    } else {
      var _res4 = { error: error, images: [] };
      imageCallBack(_res4);
    }
  });
}

function chooseImagePromise(param) {
  return new Promise(function (resolve, reject) {
    uexImage.openPicker(JSON.stringify(param), function (error, info) {
      if (error === -1) {
        return resolve({ error: error, images: [] });
      } else if (error === 0) {
        if (info.detailedImageInfo && info.detailedImageInfo.length > 0) {
          return resolve({ error: error, images: info.detailedImageInfo });
        }
        if (info.data && info.data.length > 0) {
          return resolve({ error: error, images: info.data });
        }
        return resolve({ error: error, images: [] });
      }
      return reject(new Error('chooseImage error'));
    });
  });
}

/**
 * 预览图片
 * @param  Object   param   必选 browser参数设置
 * var param = {
      displayActionButton:,
      displayNavArrows:,
      enableGrid:,
      startOnGrid:,
      startIndex:,
      data:[],
      style,
      gridBackgroundColor,  // style为1时生效
      gridBrowserTitle,
      viewFramePicPreview:{   //位置、大小
        x:,
        y:,
        w:,
        h:,
      },
      viewFramePicGrid:{   //位置、大小
        x:,
        y:,
        w:,
        h:,
      }
  }
  参数名称  参数类型  是否必选  说明  默认值
  displayActionButton Boolean 否 显示分享按钮  false
  displayNavArrows  Boolean 否 显示切换箭头(仅iOS支持此参数) false
  enableGrid  Boolean 否 允许九宫格视图 true
  startOnGrid Boolean 否 以九宫格视图起始  false
  startIndex  Number  否 非负整数 起始图片位置 0
  data  Array 是 图片资源构成的数组 无
    即使只浏览一张图片 data也必须是数组
      data内的元素可以是 字符串 或者是 Json对象 格式
      传字符串时,此字符串应为图片资源路径
      传Json对象时, 结构如下
      {
          src:,//(String,必选)图片资源路径,支持 wgt:// wgts:// res:// file:// http:// https://
          thumb:,//(String,可选)图片缩略图路径
          desc:,//(String,可选) 为图片添加一段文字描述
          showBigPic:,//(Boolean 可选) 是否显示大图，默认不显示false，参数值为false、true
      }
      形如：["res://photo1.jpg",
            {
              src:"res://photo2.jpg",
              thumb:"res://photo2t.jpg",
              showBigPic: true
            },
            {
              src:"res://photo3.jpg",
              thumb:"res://photo3t.jpg",
              desc:"22222222222222"
            },
            {
              src:"http://it-eproducts.com/images/3-1347760443.jpg",
              thumb:"res://photo4t.jpg",
              desc:"22222222222222"
            }]
  style Number  否 UI样式，0：插件旧风格UI；1：仿照微信优化后的UI。  0
  gridBackgroundColor String  否 九宫格背景颜色，style为1时支持  黑色
  gridTitle String  否 九宫格预览图片的标题，style为1时支持 图片浏览
  viewFramePicPreview Object  否 单张图片视图的位置大小信息，
  形如"viewFramePicPreview":{ x:0, y:0,w:1080, h:1767}，style为1时才有效  全屏
  viewFramePicGrid  Object  否 九宫格视图的位置大小信息，
  形如："viewFramePicGrid":{ x:0, y:0,w:1080, h:1767}，style为1时才有效 全屏
  * @param  {Function} callback 非必须 browser被关闭的回调函数
  * @return {[type]}            [description]
  */
function previewImage(param, callback) {
  var imageParam = param;
  var imageCallBack = callback;
  if (arguments.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_0__base__["d" /* isPlainObject */])(param)) {
    imageParam = param.param;
    imageCallBack = param.success;
  }
  uexImage.openBrowser(JSON.stringify(imageParam), function () {
    imageCallBack();
  });
}

function previewImagePromise(param) {
  return new Promise(function (resolve) {
    uexImage.openBrowser(JSON.stringify(param), function () {
      return resolve();
    });
  });
}

/**
 * 剪裁图片
 * @param  Object   param    cropper参数设置
 * var param = {src:,quality:,usePng:,mode:1}
 * 参数名称 参数类型  是否必选  说明  默认值
  src String  否 图片路径 支持wgt:// wgts:// file:// res://,不传此参数时,会先打开系统相册让用户选择一张图片 无
  quality Number  否 JPG压缩质量 取值范围 0-1 越大表示质量越好 0.5
  usePng  Boolean 否 用png格式导出图片 ,此参数为true时,quality参数无效 false
  mode  Number  否 1- 正方型裁剪；
  2- 圆形裁剪(仅iOS支持圆形裁剪)；
  4-矩形裁剪，宽高比(4:3)；
  5-矩形裁剪，宽高比(16:9)；
  6-矩形裁剪，宽高自由缩放(mode为6仅支持安卓)  1
  * @param  {Function} callback  cropper被关闭的回调函数
  * 参数名称 类型  说明
  path  String  返回图片路径
  error Number  0表示成功,-1表示取消,其他表示失败
  * @return {[type]}            [description]
  */
function openCropper(param, callback) {
  var cropperParam = param;
  var cropperCallBack = callback;
  if (arguments.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_0__base__["d" /* isPlainObject */])(param)) {
    cropperParam = param.param;
    cropperCallBack = param.success;
  }
  uexImage.openCropper(JSON.stringify(cropperParam), function (error, info) {
    if (error === -1) {
      var res = { error: error, path: '' };
      cropperCallBack(res);
    } else if (error === 0) {
      if (info.isCancelled) {
        var _res5 = { error: -1, path: '' };
        cropperCallBack(_res5);
      } else {
        var _res6 = { error: error, path: info.data };
        cropperCallBack(_res6);
      }
    } else {
      var _res7 = { error: error, path: '' };
      cropperCallBack(_res7);
    }
  });
}
function openCropperPromise(param) {
  return new Promise(function (resolve, reject) {
    uexImage.openCropper(JSON.stringify(param), function (error, info) {
      if (error === -1) {
        return resolve({ error: error, path: '' });
      } else if (error === 0) {
        if (info.isCancelled) {
          return resolve({ error: -1, path: '' });
        }
        return resolve({ error: error, path: info.data });
      }
      return reject(new Error('openCropper error'));
    });
  });
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLocation;
/* harmony export (immutable) */ __webpack_exports__["b"] = getLocationPromise;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);


/**
 * 获取经纬度
 * @param  String   type     指定坐标系类型,
 * "wgs84":采用世界标准经纬度坐标;
 * "bd09":采用百度地图的经纬度坐标;
 * "gcj02":采用高德地图的经纬度坐标.
 * 不传,iOS默认返回高德地图的经纬度坐标,
 * Android默认返回百度地图的经纬度坐标
 * @param  Function callback 回调
 * @return  {error:null,latitude:lat, longitude:log}
 */
function getLocation(type, callback) {
  var locationCallBack = callback;
  var locationType = type;
  if (arguments.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_0__base__["d" /* isPlainObject */])(type)) {
    locationCallBack = type.success;
    locationType = type.type;
  }
  uexLocation.onChange = function (lat, log) {
    uexLocation.closeLocation();
    var res = { error: null, latitude: lat, longitude: log };
    locationCallBack(res);
  };

  uexLocation.openLocation(locationType, function (error) {
    if (error) {
      var res = { error: new Error('openLocation error') };
      locationCallBack(res);
    }
  });
}

function getLocationPromise(type) {
  return new Promise(function (resolve, reject) {
    uexLocation.onChange = function (lat, log) {
      uexLocation.closeLocation();
      return resolve({ latitude: lat, longitude: log });
    };
    uexLocation.openLocation(type, function (error) {
      if (error) {
        return reject(new Error('openLocation error'));
      }
      return '';
    });
  });
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = logs;
/**
 * 打印日志到控制台，如果是appcan应用打印到，响应的控制台
 * @param * obj 任何类型
 */
function logs(obj) {
  if (window.uexLog) {
    uexLog.sendLog(obj);
  } else {
    console.log(obj);
  }
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = scanQRCode;
/* harmony export (immutable) */ __webpack_exports__["a"] = scanImage;
/* harmony export (immutable) */ __webpack_exports__["b"] = scanImagePromise;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);

/**
 * 二维码扫一扫
 * @param  Function callback 扫描结果返回回调
 * var callbackFunction = function(error,data){}
 * 参数名称 类型  说明
  error Number  扫描结果,0-成功,非0-失败,打开失败通常是因为没有开启摄像头权限.
  data  Object  扫描成功的数据,形式如下:
  var data = {
      code:,
      type:
  }
  */
function scanQRCode(callback) {
  uexScanner.open(callback);
}
/**
 * 扫描二维码及条形码图片
 * @param  String imagePath 二维码及条形码图片路径
 * @param  Function callback 二维码识别结果回调
 */
function scanImage(imagePath, callback) {
  var scannerCallBack = callback;
  var scannerImagePath = imagePath;
  if (arguments.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_0__base__["d" /* isPlainObject */])(imagePath)) {
    scannerCallBack = imagePath.success;
    scannerImagePath = imagePath.imagePath;
  }
  uexScanner.recognizeFromImage(scannerImagePath, scannerCallBack);
}

function scanImagePromise(imagePath) {
  var scannerImagePath = imagePath;
  return new Promise(function (resolve) {
    uexScanner.recognizeFromImage(scannerImagePath, function (res) {
      return resolve(res);
    });
  });
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = startRecord;
/* harmony export (immutable) */ __webpack_exports__["f"] = stopRecord;
/* harmony export (immutable) */ __webpack_exports__["g"] = stopRecordPromise;
/* harmony export (immutable) */ __webpack_exports__["d"] = playVoice;
/* harmony export (immutable) */ __webpack_exports__["c"] = pauseVoice;
/* harmony export (immutable) */ __webpack_exports__["h"] = stopVoice;
/* harmony export (immutable) */ __webpack_exports__["a"] = onVoicePlayEnd;
/* harmony export (immutable) */ __webpack_exports__["b"] = onVoicePlayEndPromise;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);


/**
 * 后台开始录音
 * @param  Number mode     必填 要录音格式,0:AMR格式,1:CAF格式,2:MP3格式.Android只支持AMR格式,MP3格式.
 * @param  String fileName 否   录音文件名称,不传时默认以当前时间作为文件名
 * @return {[type]}          [description]
 */
function startRecord(mode, fileName) {
  var recordMode = mode;
  var recordFileName = fileName;
  if (arguments.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_0__base__["d" /* isPlainObject */])(mode)) {
    recordMode = mode.mode;
    recordFileName = mode.fileName;
  }
  uexAudio.startBackgroundRecord(recordMode, recordFileName);
}

/**
 * 停止录音
 * @param  Function callback 录音结束后,会调用此回调函数
 * 回调参数为录音文件路径
 * @return
 */
function stopRecord(callback) {
  uexAudio.stopBackgroundRecord(function (filePath) {
    callback(filePath);
  });
}

function stopRecordPromise() {
  return new Promise(function (resolve) {
    uexAudio.stopBackgroundRecord(function (filePath) {
      return resolve(filePath);
    });
  });
}

/**
 * 播放语音
 * @param  String path 语音路径
 * @return null
 */
function playVoice(path) {
  var param = {
    playMode: 0
  };
  param = JSON.stringify(param);
  uexAudio.setPlayMode(param);
  uexAudio.open(path);
  uexAudio.setProximityState('1');
  uexAudio.play('0');
}

/**
 * 暂停播放语音
 *
 */
function pauseVoice() {
  uexAudio.pause();
}

/**
 * 停止播放语音
 * @return null
 */
function stopVoice() {
  uexAudio.stop();
}

/**
 * 监听语音播放完毕接口
 * @param  Function callback 播放完毕回调
 *
 */
function onVoicePlayEnd(callback) {
  uexAudio.onPlayFinished = function () {
    uexAudio.setProximityState('0');
    callback();
  };
}
function onVoicePlayEndPromise() {
  return new Promise(function (resolve) {
    uexAudio.onPlayFinished = function () {
      uexAudio.setProximityState('0');
      return resolve();
    };
  });
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = onKeyPressed;
/* harmony export (immutable) */ __webpack_exports__["a"] = closeWindow;
/* harmony export (immutable) */ __webpack_exports__["f"] = setWindowTitle;
/* harmony export (immutable) */ __webpack_exports__["e"] = setTitleMenu;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTitleMenu;
/* harmony export (immutable) */ __webpack_exports__["d"] = setTitleBackgroundColor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(9);
/* window模块 base onKeyPressed，closeWindow */



// android物理键监听拦截
function onKeyPressed(code, callback) {
  var keyCallBack = callback;
  var keyCode = code;
  if (arguments.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_0__base__["d" /* isPlainObject */])(code)) {
    keyCallBack = code.success;
    keyCode = code.code;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__base__["c" /* isFunction */])(keyCallBack)) {
    uexWindow.onKeyPressed = function (keyCode1) {
      keyCallBack(keyCode1);
    };
  }
  uexWindow.setReportKey(keyCode, 1);
}

/**
 * 关闭当前窗口
 *
 */
function closeWindow() {
  uexWindow.close(-1);
}

/**
 * 修改当前页面标题(健康号专用)
 * @param String title
 */
function setWindowTitle(title) {
  document.title = title;
  var windowOption = {
    windowTitle: title
  };
  uexWindow.setWindowOptions({ windowOptions: windowOption });
}

/**
 * 设置健康号右侧menu选项(健康号专用)
 * @param Array menus ["pyq","weixin","qq","weibo","refresh","copyUrl","openInBrowser"]
 */
function setTitleMenu(menus) {
  var curhref = window.location.href;
  Object(__WEBPACK_IMPORTED_MODULE_1__storage__["f" /* val */])(encodeURIComponent(curhref), menus);
}
/**
 * 获取健康号右侧menu选项，未设置时默认返回["refresh","copyUrl","openInBrowser"]
 */
function getTitleMenu() {
  var curhref = window.location.href;
  var menus = Object(__WEBPACK_IMPORTED_MODULE_1__storage__["f" /* val */])(encodeURIComponent(curhref)) || '["refresh","copyUrl","openInBrowser"]';
  return JSON.parse(menus);
}

/**
 * 修改当前页面标题颜色(健康号专用)
 * @param String color
 */
function setTitleBackgroundColor(color) {
  var windowOption = {
    titleBarBgColor: color
  };
  uexWindow.setWindowOptions({ windowOptions: windowOption });
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = myAdapter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);


var settle = __webpack_require__(39);
var buildURL = __webpack_require__(42);
var utils = __webpack_require__(10);
/*
  config = {
    url: 'http://nvie.com/files/Git-branching-model.pdf', // 要上传的服务器地址
    method:
    timeout:
    certificateValidation
    postdata: [{
      dataType:
      key:
      value:
    }]
    filePath
    body
    appVerify
    headers: { 'Content-type': 'application/json;charset=utf-8' }, // 请求头信息
    Authorization: {
      username: 'janedoe',
      password: 's00pers3cret'
    }
  };
*/

var defaultConfig = {
  method: 'GET',
  timeout: 30000,
  certificateValidation: false,
  flag: 0,
  appVerify: true
};

function myAdapter(setting) {
  return new Promise(function (resolve, reject) {
    var config = utils.merge(defaultConfig, setting);

    var baseUrl = '';
    if (__WEBPACK_IMPORTED_MODULE_0__base__["b" /* isAppCan */]() && config.url.indexOf('http') < 0) {
      baseUrl = document.location.origin + config.url;
    } else {
      baseUrl = config.url;
    }

    var request = uexXmlHttpMgr.create({
      method: config.method.toUpperCase(),
      url: buildURL(baseUrl, config.params, config.paramsSerializer),
      timeout: config.timeout
    });

    if (config.postdata && config.postdata.length > 0 && uexXmlHttpMgr.setPostData) {
      for (var i = 0; i < config.postdata.length; i += 1) {
        uexXmlHttpMgr.setPostData(request, request.dataType, request.key, request.value);
      }
    }

    if (config.filepath && uexXmlHttpMgr.setInputStream) {
      uexXmlHttpMgr.setInputStream(request, config.filepath);
    }
    if (config.method.toUpperCase() === 'POST') {
      config.body = config.data;
    }
    if (config.body && uexXmlHttpMgr.setBody) {
      uexXmlHttpMgr.setBody(request, config.body);
    }

    if (config.appVerify === true && uexXmlHttpMgr.setAppVerify) {
      uexXmlHttpMgr.setAppVerify(request, 1);
    } else if (config.appVerify === false && uexXmlHttpMgr.setAppVerify) {
      uexXmlHttpMgr.setAppVerify(request, 0);
    }

    if (config.headers && uexXmlHttpMgr.setHeaders) {
      uexXmlHttpMgr.setHeaders(request, JSON.stringify(config.headers));
    }

    if (config.Authorization && uexXmlHttpMgr.setCertificate) {
      uexXmlHttpMgr.setCertificate(request, config.Authorization.passsword, config.Authorization.path);
    }

    // Create the request
    uexXmlHttpMgr.send(request, config.flag, function (status, resStr, resCode, resInfo) {
      // Prepare the response
      var response = {
        data: resStr,
        status: resCode,
        statusText: resInfo.responseStatusMessage,
        headers: resInfo.responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      uexXmlHttpMgr.close(request);
    }, function (progress) {
      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        config.onDownloadProgress(progress);
      }
    });
  });
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var createError = __webpack_require__(40);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var enhanceError = __webpack_require__(41);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  var newError = error;
  newError.config = config;
  if (code) {
    newError.code = code;
  }
  newError.request = request;
  newError.response = response;
  return newError;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(10);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /* eslint no-param-reassign:0 */
  if (!params) {
    return url;
  }

  var serializedParams = void 0;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function (val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key += '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function (v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = download;
/* harmony export (immutable) */ __webpack_exports__["a"] = cancelDownload;
/* harmony export (immutable) */ __webpack_exports__["c"] = getDownloadInfo;
/*
  config = {
    headers : {"Content-type":"application/json;charset=utf-8"},
    url: 'http://nvie.com/files/Git-branching-model.pdf',
    path: 'wgt://data/down/Git-branching-model.pdf',
    mode: '0',
    onDownloadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
    }
  }
*/

var defaultsConfig = {
  path: 'wgt://data/down/',
  mode: 1
};

function download(url) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultsConfig;

  return new Promise(function (resolve, reject) {
    var downloader = uexDownloaderMgr.create();

    var onProgress = null;
    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      onProgress = config.onDownloadProgress;
    }

    if (downloader) {
      if (config.headers) uexDownloaderMgr.setHeaders(downloader, config.headers);

      uexDownloaderMgr.download(downloader, url, config.path, config.mode, function (fileSize, percent, status) {
        switch (status) {
          case 0:
            if (onProgress) onProgress({ percent: percent });
            break;
          case 1:
            resolve({ percent: percent });
            uexDownloaderMgr.closeDownloader(downloader);
            break;
          case 2:
            reject('download failed');
            uexDownloaderMgr.closeDownloader(downloader);
            break;
          default:
            break;
        }
      });
    } else {
      // create failed
      reject('create failed');
    }
  });
}

function cancelDownload(url) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  uexDownloaderMgr.cancelDownload(url, mode);
}

function getDownloadInfo(url) {
  return new Promise(function (resolve, reject) {
    var info = uexDownloaderMgr.getInfo(url);

    if (info) {
      resolve(info);
    } else {
      reject('getDownloadInfo faild');
    }
  });
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = upload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(1);

/*
  config = {
    headers: { 'Content-type': 'application/json;charset=utf-8' }, // 请求头信息
    url: 'http://nvie.com/files/Git-branching-model.pdf', // 要上传的服务器地址
    type: 0, // uploader类型, 0: 一般上传对象 1: 全局上传对象 2: 后台上传对象.此参数不传时默认为0.
    path: '', // 需要上传的文件路径.支持wgt://,res://,file://
    field: '', // 文件数据所在的field
    quality: 0, // 类型如果为图片,表示是否需要压缩及压缩质量. 0:不压缩 1:高质量压缩 2:中质量压缩 3:低质量压缩
    maxwidth: 11, // 类型如果为图片,图片按尺寸等比压缩的最大宽度
    onUploadProgress(progressEvent) { // 文件上传中的信息会通过此函数回调
      // Do whatever you want with the native progress event
    },
  };
*/

function upload(config) {
  return new Promise(function (resolve, reject) {
    var baseUrl = config.url;
    if (__WEBPACK_IMPORTED_MODULE_0__base__["b" /* isAppCan */]() && config.url.indexOf('http') < 0) {
      baseUrl = document.location.origin + config.url;
    }
    var uploader = uexUploaderMgr.create({
      url: baseUrl,
      type: config.type ? config.type : 0
    });

    var onProgress = null;
    // Handle progress if needed
    if (typeof config.onUploadProgress === 'function') {
      onProgress = config.onUploadProgress;
    }

    if (uploader) {
      if (config.headers) uexUploaderMgr.setHeaders(uploader, config.headers);

      uexUploaderMgr.uploadFile(uploader, config.path, config.field, config.quality, config.maxwidth, function (packageSize, percent, responseString, status) {
        switch (status) {
          case 0:
            if (onProgress) onProgress({ percent: percent });
            break;
          case 1:
            resolve({ percent: percent, responseString: responseString });
            uexUploaderMgr.closeUploader(uploader);
            break;
          case 2:
            reject('upload failed');
            uexUploaderMgr.closeUploader(uploader);
            break;
          default:
            break;
        }
      });
    } else {
      // create failed
      reject('create failed');
    }
  });
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=appcan.js.map