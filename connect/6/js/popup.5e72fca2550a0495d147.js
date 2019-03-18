(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TrezorConnect"] = factory();
	else
		root["TrezorConnect"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 451);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(136);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(59)('wks');
var uid = __webpack_require__(46);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(199);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(195);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(98);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(98);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var IFRAME_HANDSHAKE = exports.IFRAME_HANDSHAKE = 'iframe-handshake';

var TRANSPORT = exports.TRANSPORT = 'ui-no_transport';
var BOOTLOADER = exports.BOOTLOADER = 'ui-device_bootloader_mode';
var INITIALIZE = exports.INITIALIZE = 'ui-device_not_initialized';
var SEEDLESS = exports.SEEDLESS = 'ui-device_seedless';
var FIRMWARE = exports.FIRMWARE = 'ui-device_firmware_old';
var FIRMWARE_OUTDATED = exports.FIRMWARE_OUTDATED = 'ui-device_firmware_outdated';
var FIRMWARE_NOT_SUPPORTED = exports.FIRMWARE_NOT_SUPPORTED = 'ui-device_firmware_unsupported';
var BROWSER_NOT_SUPPORTED = exports.BROWSER_NOT_SUPPORTED = 'ui-browser_not_supported';
var BROWSER_OUTDATED = exports.BROWSER_OUTDATED = 'ui-browser_outdated';
var RECEIVE_BROWSER = exports.RECEIVE_BROWSER = 'ui-receive_browser';

var REQUEST_UI_WINDOW = exports.REQUEST_UI_WINDOW = 'ui-request_window';
var CLOSE_UI_WINDOW = exports.CLOSE_UI_WINDOW = 'ui-close_window';

var REQUEST_PERMISSION = exports.REQUEST_PERMISSION = 'ui-request_permission';
var REQUEST_CONFIRMATION = exports.REQUEST_CONFIRMATION = 'ui-request_confirmation';
var REQUEST_PIN = exports.REQUEST_PIN = 'ui-request_pin';
var INVALID_PIN = exports.INVALID_PIN = 'ui-invalid_pin';
var REQUEST_PASSPHRASE = exports.REQUEST_PASSPHRASE = 'ui-request_passphrase';
var REQUEST_PASSPHRASE_ON_DEVICE = exports.REQUEST_PASSPHRASE_ON_DEVICE = 'ui-request_passphrase_on_device';
var INVALID_PASSPHRASE = exports.INVALID_PASSPHRASE = 'ui-invalid_passphrase';
var INVALID_PASSPHRASE_ACTION = exports.INVALID_PASSPHRASE_ACTION = 'ui-invalid_passphrase_action';
var CONNECT = exports.CONNECT = 'ui-connect';
var LOADING = exports.LOADING = 'ui-loading';
var SET_OPERATION = exports.SET_OPERATION = 'ui-set_operation';
var SELECT_DEVICE = exports.SELECT_DEVICE = 'ui-select_device';
var SELECT_ACCOUNT = exports.SELECT_ACCOUNT = 'ui-select_account';
var SELECT_FEE = exports.SELECT_FEE = 'ui-select_fee';
var UPDATE_CUSTOM_FEE = exports.UPDATE_CUSTOM_FEE = 'ui-update_custom_fee';
var INSUFFICIENT_FUNDS = exports.INSUFFICIENT_FUNDS = 'ui-insufficient_funds';
var REQUEST_BUTTON = exports.REQUEST_BUTTON = 'ui-button';

var RECEIVE_PERMISSION = exports.RECEIVE_PERMISSION = 'ui-receive_permission';
var RECEIVE_CONFIRMATION = exports.RECEIVE_CONFIRMATION = 'ui-receive_confirmation';
var RECEIVE_PIN = exports.RECEIVE_PIN = 'ui-receive_pin';
var RECEIVE_PASSPHRASE = exports.RECEIVE_PASSPHRASE = 'ui-receive_passphrase';
var RECEIVE_DEVICE = exports.RECEIVE_DEVICE = 'ui-receive_device';
var CHANGE_ACCOUNT = exports.CHANGE_ACCOUNT = 'ui-change_account';
var RECEIVE_ACCOUNT = exports.RECEIVE_ACCOUNT = 'ui-receive_account';
var RECEIVE_FEE = exports.RECEIVE_FEE = 'ui-receive_fee';

var CHANGE_SETTINGS = exports.CHANGE_SETTINGS = 'ui-change_settings';

var CUSTOM_MESSAGE_REQUEST = exports.CUSTOM_MESSAGE_REQUEST = 'ui-custom_request';
var CUSTOM_MESSAGE_RESPONSE = exports.CUSTOM_MESSAGE_RESPONSE = 'ui-custom_response';

var LOGIN_CHALLENGE_REQUEST = exports.LOGIN_CHALLENGE_REQUEST = 'ui-login_challenge_request';
var LOGIN_CHALLENGE_RESPONSE = exports.LOGIN_CHALLENGE_RESPONSE = 'ui-login_challenge_response';

var BUNDLE_PROGRESS = exports.BUNDLE_PROGRESS = 'ui-bundle_progress';

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(26);
var createDesc = __webpack_require__(47);
module.exports = __webpack_require__(23) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(7);
var ctx = __webpack_require__(32);
var hide = __webpack_require__(18);
var has = __webpack_require__(25);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.BlockchainMessage = exports.ResponseMessage = exports.TransportMessage = exports.DeviceMessage = exports.UiMessage = undefined;

var _constants = __webpack_require__(148);

var UiMessage = exports.UiMessage = function UiMessage(type, payload) {
    return {
        event: _constants.UI_EVENT,
        type: type,
        payload: payload
    };
};

var DeviceMessage = exports.DeviceMessage = function DeviceMessage(type, payload) {
    return {
        event: _constants.DEVICE_EVENT,
        type: type,
        payload: payload
    };
};

var TransportMessage = exports.TransportMessage = function TransportMessage(type, payload) {
    return {
        event: _constants.TRANSPORT_EVENT,
        type: type,
        payload: payload
    };
};

var ResponseMessage = exports.ResponseMessage = function ResponseMessage(id, success) {
    var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    return {
        event: _constants.RESPONSE_EVENT,
        type: _constants.RESPONSE_EVENT,
        id: id,
        success: success,
        payload: payload
    };
};

var BlockchainMessage = exports.BlockchainMessage = function BlockchainMessage(type, payload) {
    return {
        event: _constants.BLOCKCHAIN_EVENT,
        type: type,
        payload: payload
    };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getLabel = exports.getPublicKeyLabel = exports.getAccountLabel = exports.getIndexFromPath = exports.getPathFromIndex = exports.getSerializedPath = exports.validatePath = exports.getOutputScriptType = exports.getScriptType = exports.isBech32Path = exports.isSegwitPath = exports.isMultisigPath = exports.getHDPath = exports.fromHardened = exports.toHardened = exports.HD_HARDENED = undefined;

var _CoinInfo = __webpack_require__(39);

var _errors = __webpack_require__(41);

var HD_HARDENED = exports.HD_HARDENED = 0x80000000;
var toHardened = exports.toHardened = function toHardened(n) {
    return (n | HD_HARDENED) >>> 0;
};
var fromHardened = exports.fromHardened = function fromHardened(n) {
    return (n & ~HD_HARDENED) >>> 0;
};

var PATH_NOT_VALID = (0, _errors.invalidParameter)('Not a valid path.');
var PATH_NEGATIVE_VALUES = (0, _errors.invalidParameter)('Path cannot contain negative values.');

var getHDPath = exports.getHDPath = function getHDPath(path) {
    var parts = path.toLowerCase().split('/');
    if (parts[0] !== 'm') throw PATH_NOT_VALID;
    return parts.filter(function (p) {
        return p !== 'm' && p !== '';
    }).map(function (p) {
        var hardened = false;
        if (p.substr(p.length - 1) === "'") {
            hardened = true;
            p = p.substr(0, p.length - 1);
        }
        var n = parseInt(p);
        if (isNaN(n)) {
            throw PATH_NOT_VALID;
        } else if (n < 0) {
            throw PATH_NEGATIVE_VALUES;
        }
        if (hardened) {
            // hardened index
            n = toHardened(n);
        }
        return n;
    });
};

var isMultisigPath = exports.isMultisigPath = function isMultisigPath(path) {
    return Array.isArray(path) && path[0] === toHardened(48);
};

var isSegwitPath = exports.isSegwitPath = function isSegwitPath(path) {
    return Array.isArray(path) && path[0] === toHardened(49);
};

var isBech32Path = exports.isBech32Path = function isBech32Path(path) {
    return Array.isArray(path) && path[0] === toHardened(84);
};

var getScriptType = exports.getScriptType = function getScriptType(path) {
    if (!Array.isArray(path) || path.length < 1) return;
    var p1 = fromHardened(path[0]);
    switch (p1) {
        case 44:
            return 'SPENDADDRESS';
        case 48:
            return 'SPENDMULTISIG';
        case 49:
            return 'SPENDP2SHWITNESS';
        case 84:
            return 'SPENDWITNESS';
        default:
            return;
    }
};

var getOutputScriptType = exports.getOutputScriptType = function getOutputScriptType(path) {
    if (!Array.isArray(path) || path.length < 1) return;
    var p = fromHardened(path[0]);
    switch (p) {
        case 44:
            return 'PAYTOADDRESS';
        case 48:
            return 'PAYTOMULTISIG';
        case 49:
            return 'PAYTOP2SHWITNESS';
        case 84:
            return 'PAYTOWITNESS';
        default:
            return;
    }
};

var validatePath = exports.validatePath = function validatePath(path) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var valid = void 0;
    if (typeof path === 'string') {
        valid = getHDPath(path);
    } else if (Array.isArray(path)) {
        valid = path.map(function (p) {
            var n = parseInt(p);
            if (isNaN(n)) {
                throw PATH_NOT_VALID;
            } else if (n < 0) {
                throw PATH_NEGATIVE_VALUES;
            }
            return n;
        });
    }
    if (!valid) throw PATH_NOT_VALID;
    if (length > 0 && valid.length < length) throw PATH_NOT_VALID;
    return base ? valid.splice(0, 3) : valid;
};

var getSerializedPath = exports.getSerializedPath = function getSerializedPath(path) {
    return path.map(function (i) {
        var s = (i & ~HD_HARDENED).toString();
        if (i & HD_HARDENED) {
            return s + "'";
        } else {
            return s;
        }
    }).join('/');
};

var getPathFromIndex = exports.getPathFromIndex = function getPathFromIndex(bip44purpose, bip44cointype, index) {
    return [toHardened(bip44purpose), toHardened(bip44cointype), toHardened(index)];
};

var getIndexFromPath = exports.getIndexFromPath = function getIndexFromPath(path) {
    if (path.length < 3) {
        throw (0, _errors.invalidParameter)('getIndexFromPath: invalid path length ' + path.toString());
    }
    return fromHardened(path[2]);
};

var getAccountLabel = exports.getAccountLabel = function getAccountLabel(path, coinInfo) {
    var coinLabel = coinInfo.label;
    var p1 = fromHardened(path[0]);
    var account = fromHardened(path[2]);
    var realAccountId = account + 1;
    var prefix = 'Export info of';
    var accountType = '';

    if (p1 === 48) {
        accountType = coinLabel + ' multisig';
    } else if (p1 === 44 && coinInfo.segwit) {
        accountType = coinLabel + ' legacy';
    } else {
        accountType = coinLabel;
    }
    return prefix + ' ' + accountType + ' <span>account #' + realAccountId + '</span>';
};

var getPublicKeyLabel = exports.getPublicKeyLabel = function getPublicKeyLabel(path, coinInfo) {
    var hasSegwit = false;
    var coinLabel = 'Unknown coin';
    if (coinInfo) {
        coinLabel = coinInfo.label;
        hasSegwit = coinInfo.segwit;
    } else {
        coinLabel = (0, _CoinInfo.getCoinName)(path);
    }

    var p1 = fromHardened(path[0]);
    var account = path.length >= 3 ? fromHardened(path[2]) : -1;
    var realAccountId = account + 1;
    var prefix = 'Export public key';
    var accountType = '';

    // Copay id
    if (p1 === 45342) {
        var p2 = fromHardened(path[1]);
        account = fromHardened(path[3]);
        realAccountId = account + 1;
        prefix = 'Export Copay ID of';
        if (p2 === 48) {
            accountType = 'multisig';
        } else if (p2 === 44) {
            accountType = 'legacy';
        }
    } else if (p1 === 48) {
        accountType = coinLabel + ' multisig';
    } else if (p1 === 44 && hasSegwit) {
        accountType = coinLabel + ' legacy';
    } else if (p1 === 84 && hasSegwit) {
        accountType = coinLabel + ' native segwit';
    } else {
        accountType = coinLabel;
    }

    if (realAccountId > 0) {
        return prefix + ' of ' + accountType + ' <span>account #' + realAccountId + '</span>';
    } else {
        return prefix;
    }
};

var getLabel = exports.getLabel = function getLabel(label, coinInfo) {
    if (coinInfo) {
        return label.replace('#NETWORK', coinInfo.label);
    }
    return label.replace('#NETWORK', '');
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(37)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(90);
var toPrimitive = __webpack_require__(63);
var dP = Object.defineProperty;

exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(88);
var defined = __webpack_require__(53);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(36);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(215);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseCoinsJson = exports.getEthereumNetwork = exports.parseEthereumNetworksJson = exports.ethereumNetworks = exports.parseBitcoinNetworksJson = exports.getCoinName = exports.getCoinInfoFromPath = exports.getCoinInfoByCurrency = exports.getCoinInfoByHash = exports.fixCoinInfoNetwork = exports.getBech32Network = exports.getSegwitNetwork = exports.cloneCoinInfo = exports.getCoins = undefined;

var _extends2 = __webpack_require__(38);

var _extends3 = _interopRequireDefault(_extends2);

var _pathUtils = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var coins = [];

var getCoins = exports.getCoins = function getCoins() {
    // return coins.slice(0);
    return JSON.parse(JSON.stringify(coins));
};

var cloneCoinInfo = exports.cloneCoinInfo = function cloneCoinInfo(ci) {
    return JSON.parse(JSON.stringify(ci));
};

var getSegwitNetwork = exports.getSegwitNetwork = function getSegwitNetwork(coin) {
    if (coin.segwit && typeof coin.xPubMagicSegwit === 'number') {
        return (0, _extends3.default)({}, coin.network, {
            bip32: (0, _extends3.default)({}, coin.network.bip32, {
                public: coin.xPubMagicSegwit
            })
        });
    }
    return null;
};

var getBech32Network = exports.getBech32Network = function getBech32Network(coin) {
    if (coin.segwit && typeof coin.xPubMagicSegwitNative === 'number') {
        return (0, _extends3.default)({}, coin.network, {
            bip32: (0, _extends3.default)({}, coin.network.bip32, {
                public: coin.xPubMagicSegwitNative
            })
        });
    }
    return null;
};

// fix coinInfo network values from path (segwit/legacy)
var fixCoinInfoNetwork = exports.fixCoinInfoNetwork = function fixCoinInfoNetwork(ci, path) {
    var coinInfo = cloneCoinInfo(ci);
    if (path[0] === (0, _pathUtils.toHardened)(49)) {
        var segwitNetwork = getSegwitNetwork(coinInfo);
        if (segwitNetwork) {
            coinInfo.network = segwitNetwork;
        }
    } else {
        coinInfo.segwit = false;
    }
    return coinInfo;
};

var detectBtcVersion = function detectBtcVersion(data) {
    if (data.subversion == null) {
        return 'btc';
    }
    if (data.subversion.startsWith('/Bitcoin ABC')) {
        return 'bch';
    }
    if (data.subversion.startsWith('/Bitcoin Gold')) {
        return 'btg';
    }
    return 'btc';
};

var getCoinInfoByHash = exports.getCoinInfoByHash = function getCoinInfoByHash(hash, networkInfo) {
    var result = getCoins().find(function (info) {
        return hash.toLowerCase() === info.hashGenesisBlock.toLowerCase();
    });
    if (!result) {
        throw new Error('Coin info not found for hash: ' + hash + ' ' + networkInfo.hashGenesisBlock);
    }

    if (result.isBitcoin) {
        var btcVersion = detectBtcVersion(networkInfo);
        var fork = void 0;
        if (btcVersion === 'bch') {
            fork = coins.find(function (info) {
                return info.name === 'Bcash';
            });
        } else if (btcVersion === 'btg') {
            fork = coins.find(function (info) {
                return info.name === 'Bgold';
            });
        }
        if (fork) {
            return fork;
        } else {
            throw new Error('Coin info not found for hash: ' + hash + ' ' + networkInfo.hashGenesisBlock + ' BTC version:' + btcVersion);
        }
    }
    return result;
};

var getCoinInfoByCurrency = exports.getCoinInfoByCurrency = function getCoinInfoByCurrency(currency) {
    var lower = currency.toLowerCase();
    var coinInfo = getCoins().find(function (coin) {
        return coin.name.toLowerCase() === lower || coin.shortcut.toLowerCase() === lower || coin.label.toLowerCase() === lower;
    });
    return coinInfo;
};

var getCoinInfoFromPath = exports.getCoinInfoFromPath = function getCoinInfoFromPath(path) {
    return getCoins().find(function (coin) {
        return (0, _pathUtils.toHardened)(coin.slip44) === path[1];
    });
};

var getCoinName = exports.getCoinName = function getCoinName(path) {
    var slip44 = (0, _pathUtils.fromHardened)(path[1]);
    for (var _iterator = ethereumNetworks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var network = _ref;

        if (network.slip44 === slip44) {
            return network.name;
        }
    }
    return 'Unknown coin';
};

var parseBitcoinNetworksJson = exports.parseBitcoinNetworksJson = function parseBitcoinNetworksJson(json) {
    var coinsObject = json;
    Object.keys(coinsObject).forEach(function (key) {
        var coin = coinsObject[key];
        var network = {
            messagePrefix: coin.signed_message_header,
            bip32: {
                public: coin.xpub_magic,
                private: coin.xprv_magic
            },
            pubKeyHash: coin.address_type,
            scriptHash: coin.address_type_p2sh,
            wif: 0x80, // doesn't matter, for type correctness
            dustThreshold: 0, // doesn't matter, for type correctness,
            bech32: coin.bech32_prefix
        };

        var zcash = coin.coin_name.startsWith('Zcash');
        var shortcut = coin.coin_shortcut;
        var isBitcoin = shortcut === 'BTC' || shortcut === 'TEST';

        coins.push({
            // address_type in Network
            // address_type_p2sh in Network
            // bech32_prefix in Network
            // bip115: not used
            bitcore: coin.bitcore,
            blockbook: coin.blockbook,
            blocktime: Math.round(coin.blocktime_seconds / 60),
            cashAddrPrefix: coin.cashaddr_prefix,
            label: coin.coin_label,
            name: coin.coin_name,
            shortcut: shortcut,
            // cooldown no used
            curveName: coin.curve_name,
            decred: coin.decred,
            defaultFees: coin.default_fee_b,
            dustLimit: coin.dust_limit,
            forceBip143: coin.force_bip143,
            forkid: coin.fork_id,
            // github not used
            hashGenesisBlock: coin.hash_genesis_block,
            // key not used
            // maintainer not used
            maxAddressLength: coin.max_address_length,
            maxFeeSatoshiKb: coin.maxfee_kb,
            minAddressLength: coin.min_address_length,
            minFeeSatoshiKb: coin.minfee_kb,
            // name: same as coin_label
            segwit: coin.segwit,
            // signed_message_header in Network
            slip44: coin.slip44,
            support: coin.support,
            // uri_prefix not used
            // version_group_id not used
            // website not used
            // xprv_magic in Network
            xPubMagic: coin.xpub_magic,
            xPubMagicSegwitNative: coin.xpub_magic_segwit_native,
            xPubMagicSegwit: coin.xpub_magic_segwit_p2sh,

            // custom
            network: network, // bitcoinjs network
            zcash: zcash,
            isBitcoin: isBitcoin,
            maxFee: Math.round(coin.maxfee_kb / 1000),
            minFee: Math.round(coin.minfee_kb / 1000),

            // used in backend ?
            blocks: Math.round(coin.blocktime_seconds / 60)
        });
    });
};

var ethereumNetworks = exports.ethereumNetworks = [];

var parseEthereumNetworksJson = exports.parseEthereumNetworksJson = function parseEthereumNetworksJson(json) {
    var networksObject = json;
    Object.keys(networksObject).forEach(function (key) {
        var network = networksObject[key];
        ethereumNetworks.push({
            blockbook: network.blockbook || [],
            bitcore: [], // legacy compatibility with bitcoin coinInfo
            chain: network.chain,
            chainId: network.chain_id,
            // key not used
            name: network.name,
            rskip60: network.rskip60,
            shortcut: network.shortcut,
            slip44: network.slip44,
            support: network.support
            // url not used
        });
    });
};

var getEthereumNetwork = exports.getEthereumNetwork = function getEthereumNetwork(pathOrName) {
    if (typeof pathOrName === 'string') {
        var name = pathOrName.toLowerCase();
        return ethereumNetworks.find(function (n) {
            return n.name.toLowerCase() === name || n.shortcut.toLowerCase() === name;
        });
    } else {
        var slip44 = (0, _pathUtils.fromHardened)(pathOrName[1]);
        return ethereumNetworks.find(function (n) {
            return n.slip44 === slip44;
        });
    }
};

var parseCoinsJson = exports.parseCoinsJson = function parseCoinsJson(json) {
    var coinsObject = json;
    Object.keys(coinsObject).forEach(function (key) {
        switch (key) {
            case 'bitcoin':
                return parseBitcoinNetworksJson(coinsObject[key]);
            case 'eth':
                return parseEthereumNetworksJson(coinsObject[key]);
        }
    });
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(26).f;
var has = __webpack_require__(25);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.NO_COIN_INFO = exports.BACKEND_NO_URL = exports.WEBUSB_ERROR_MESSAGE = exports.INVALID_PIN_ERROR_MESSAGE = exports.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = exports.INVALID_STATE = exports.CALL_OVERRIDE = exports.INITIALIZATION_FAILED = exports.DEVICE_USED_ELSEWHERE = exports.PERMISSIONS_NOT_GRANTED = exports.POPUP_CLOSED = exports.INVALID_PARAMETERS = exports.DEVICE_CALL_IN_PROGRESS = exports.DEVICE_NOT_FOUND = exports.WRONG_TRANSPORT_CONFIG = exports.NO_TRANSPORT = exports.BROWSER = exports.POPUP_TIMEOUT = exports.IFRAME_TIMEOUT = exports.IFRAME_INITIALIZED = exports.IFRAME_BLOCKED = exports.NO_IFRAME = exports.invalidParameter = exports.TrezorError = undefined;

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrezorError = exports.TrezorError = function (_Error) {
    (0, _inherits3.default)(TrezorError, _Error);

    function TrezorError(code, message) {
        (0, _classCallCheck3.default)(this, TrezorError);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Error.call(this, message));

        _this.code = code;
        _this.message = message;
        return _this;
    }

    return TrezorError;
}(Error);

var invalidParameter = exports.invalidParameter = function invalidParameter(message) {
    return new TrezorError('Connect_InvalidParameter', message);
};

// level 100 error during initialization
var NO_IFRAME = exports.NO_IFRAME = new TrezorError(100, 'TrezorConnect not yet initialized');
var IFRAME_BLOCKED = exports.IFRAME_BLOCKED = new TrezorError('iframe_blocked', 'TrezorConnect iframe was blocked');
var IFRAME_INITIALIZED = exports.IFRAME_INITIALIZED = new TrezorError(101, 'TrezorConnect has been already initialized');
var IFRAME_TIMEOUT = exports.IFRAME_TIMEOUT = new TrezorError(102, 'Iframe timeout');
var POPUP_TIMEOUT = exports.POPUP_TIMEOUT = new TrezorError(103, 'Popup timeout');
var BROWSER = exports.BROWSER = new TrezorError(104, 'Browser not supported');

var NO_TRANSPORT = exports.NO_TRANSPORT = new TrezorError(500, 'Transport is missing');
var WRONG_TRANSPORT_CONFIG = exports.WRONG_TRANSPORT_CONFIG = new TrezorError(5002, 'Wrong config response'); // config_signed
var DEVICE_NOT_FOUND = exports.DEVICE_NOT_FOUND = new TrezorError(501, 'Device not found');
// export const DEVICE_CALL_IN_PROGRESS: TrezorError = new TrezorError(502, "Device call in progress.");
var DEVICE_CALL_IN_PROGRESS = exports.DEVICE_CALL_IN_PROGRESS = new TrezorError(503, 'Device call in progress');
var INVALID_PARAMETERS = exports.INVALID_PARAMETERS = new TrezorError(504, 'Invalid parameters');
var POPUP_CLOSED = exports.POPUP_CLOSED = new Error('Popup closed');

var PERMISSIONS_NOT_GRANTED = exports.PERMISSIONS_NOT_GRANTED = new TrezorError(600, 'Permissions not granted');

var DEVICE_USED_ELSEWHERE = exports.DEVICE_USED_ELSEWHERE = new TrezorError(700, 'Device is used in another window');
var INITIALIZATION_FAILED = exports.INITIALIZATION_FAILED = new TrezorError('Failure_Initialize', 'Initialization failed');

var CALL_OVERRIDE = exports.CALL_OVERRIDE = new TrezorError('Failure_ActionOverride', 'override');
var INVALID_STATE = exports.INVALID_STATE = new TrezorError('Failure_PassphraseState', 'Passphrase is incorrect');

// a slight hack
// this error string is hard-coded
// in both bridge and extension
var WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = exports.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = 'wrong previous session';
var INVALID_PIN_ERROR_MESSAGE = exports.INVALID_PIN_ERROR_MESSAGE = 'PIN invalid';
var WEBUSB_ERROR_MESSAGE = exports.WEBUSB_ERROR_MESSAGE = 'NetworkError: Unable to claim interface.';

// BlockBook
var BACKEND_NO_URL = exports.BACKEND_NO_URL = new TrezorError('Backend_init', 'Url not found');

var NO_COIN_INFO = exports.NO_COIN_INFO = invalidParameter('Coin not found.');

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 48 */,
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(36);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(59)('keys');
var uid = __webpack_require__(46);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(89);
var enumBugKeys = __webpack_require__(58);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(33) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.postMessage = exports.initBroadcast = exports.showView = exports.clearView = exports.createTooltip = exports.init = exports.setOperation = exports.broadcast = exports.channel = exports.iframe = exports.views = exports.container = exports.header = undefined;

var _DataManager = __webpack_require__(66);

var _DataManager2 = _interopRequireDefault(_DataManager);

var _popup = __webpack_require__(106);

var POPUP = _interopRequireWildcard(_popup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = exports.header = document.getElementsByTagName('header')[0];
var container = exports.container = document.getElementById('container');
var views = exports.views = document.getElementById('views');
var iframe = exports.iframe = void 0; // Window type

var channel = exports.channel = new MessageChannel();
var broadcast = exports.broadcast = void 0;

var setOperation = exports.setOperation = function setOperation(operation) {
    var infoPanel = document.getElementsByClassName('info-panel')[0];
    var operationEl = infoPanel.getElementsByClassName('operation')[0];
    var originEl = infoPanel.getElementsByClassName('origin')[0];
    operationEl.innerHTML = operation;
    originEl.innerText = _DataManager2.default.getSettings('hostLabel') || _DataManager2.default.getSettings('origin');

    var icon = _DataManager2.default.getSettings('hostIcon');
    if (icon) {
        var iconContainers = document.getElementsByClassName('service-info');
        for (var i = 0; i < iconContainers.length; i++) {
            iconContainers[i].innerHTML = '<img src="' + icon + '" alt="" />';
        }
    }
};

var init = exports.init = function init() {
    // find iframe
    if (window.opener) {
        var iframes = window.opener.frames;
        for (var i = 0; i < iframes.length; i++) {
            try {
                if (iframes[i].location.host === window.location.host) {
                    exports.iframe = iframe = iframes[i];
                }
            } catch (error) {
                // empty
            }
        }
    }
    return iframe;
};

var createTooltip = exports.createTooltip = function createTooltip(text) {
    var tooltip = document.createElement('div');
    tooltip.setAttribute('tooltip', text);
    tooltip.setAttribute('tooltip-position', 'bottom');

    return tooltip;
};

var clearView = exports.clearView = function clearView() {
    container.innerHTML = '';
};

var showView = exports.showView = function showView(className) {
    clearView();

    var view = views.getElementsByClassName(className);
    if (view) {
        container.innerHTML = view.item(0).outerHTML;
    } else {
        var unknown = views.getElementsByClassName('unknown-view');
        container.innerHTML = unknown.item(0).outerHTML;
    }
    return container;
};

var initBroadcast = exports.initBroadcast = function initBroadcast(id) {
    exports.broadcast = broadcast = new BroadcastChannel(id);
    return broadcast;
};

var postMessage = exports.postMessage = function postMessage(message) {
    if (broadcast) {
        broadcast.postMessage(message);
        return;
    }
    if (!window.opener || !iframe) {
        return;
    }

    if (message.type && message.type === POPUP.OPENED) {
        iframe.postMessage(message, window.location.origin, [channel.port2]);
    } else {
        iframe.postMessage(message, window.location.origin);
    }
};

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(132);
var enumBugKeys = __webpack_require__(58);
var IE_PROTO = __webpack_require__(51)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(54)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(72).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(17);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _networkUtils = __webpack_require__(82);

var _browser = __webpack_require__(191);

var _ConnectSettings = __webpack_require__(157);

var _CoinInfo = __webpack_require__(39);

var _FirmwareInfo = __webpack_require__(174);

var _es6Promise = __webpack_require__(238);

var _parseUri = __webpack_require__(290);

var _parseUri2 = _interopRequireDefault(_parseUri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: transform json to flow typed object
var parseConfig = function parseConfig(json) {
    var config = json;
    return config;
};

var DataManager = function () {
    function DataManager() {
        (0, _classCallCheck3.default)(this, DataManager);
    }

    DataManager.load = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(settings) {
            var ts, configUrl, config, isLocalhost, _whitelist, knownHost, _iterator, _isArray, _i, _ref2, asset, json;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            ts = new Date().getTime();
                            configUrl = settings.configSrc + '?r=' + ts;
                            _context.prev = 2;

                            this.settings = settings;
                            _context.next = 6;
                            return (0, _networkUtils.httpRequest)(configUrl, 'json');

                        case 6:
                            config = _context.sent;

                            this.config = parseConfig(config);

                            // check if origin is localhost or trusted
                            isLocalhost = location.hostname === 'localhost';
                            _whitelist = DataManager.isWhitelisted(this.settings.origin || '');

                            this.settings.trustedHost = isLocalhost || !!_whitelist && !this.settings.popup;
                            // ensure that popup will be used
                            if (!this.settings.trustedHost) {
                                this.settings.popup = true;
                            }
                            // ensure that debug is disabled
                            if (this.settings.debug && !this.settings.trustedHost && !_whitelist) {
                                this.settings.debug = false;
                            }
                            this.settings.priority = DataManager.getPriority(_whitelist);

                            knownHost = DataManager.getHostLabel(this.settings.extension || this.settings.origin || '');

                            if (knownHost) {
                                this.settings.hostLabel = knownHost.label;
                                this.settings.hostIcon = knownHost.icon;
                            }

                            _iterator = this.config.assets, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();

                        case 17:
                            if (!_isArray) {
                                _context.next = 23;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 20;
                                break;
                            }

                            return _context.abrupt('break', 34);

                        case 20:
                            _ref2 = _iterator[_i++];
                            _context.next = 27;
                            break;

                        case 23:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 26;
                                break;
                            }

                            return _context.abrupt('break', 34);

                        case 26:
                            _ref2 = _i.value;

                        case 27:
                            asset = _ref2;
                            _context.next = 30;
                            return (0, _networkUtils.httpRequest)(asset.url + '?r=' + ts, asset.type || 'json');

                        case 30:
                            json = _context.sent;

                            this.assets[asset.name] = json;

                        case 32:
                            _context.next = 17;
                            break;

                        case 34:

                            // parse bridge JSON
                            this.assets['bridge'] = (0, _browser.parseBridgeJSON)(this.assets['bridge']);

                            // parse coins definitions
                            (0, _CoinInfo.parseCoinsJson)(this.assets['coins']);

                            // parse firmware definitions
                            (0, _FirmwareInfo.parseFirmware)(this.assets['firmware-t1']);
                            (0, _FirmwareInfo.parseFirmware)(this.assets['firmware-t2']);
                            _context.next = 43;
                            break;

                        case 40:
                            _context.prev = 40;
                            _context.t0 = _context['catch'](2);
                            throw _context.t0;

                        case 43:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[2, 40]]);
        }));

        function load(_x) {
            return _ref.apply(this, arguments);
        }

        return load;
    }();

    DataManager.getMessages = function getMessages() {
        return this.assets['messages'];
    };

    DataManager.isWhitelisted = function isWhitelisted(origin) {
        if (!this.config) return null;
        var uri = (0, _parseUri2.default)(origin);
        if (uri && typeof uri.host === 'string') {
            var parts = uri.host.split('.');
            if (parts.length > 2) {
                // subdomain
                uri.host = parts.slice(parts.length - 2, parts.length).join('.');
            }
            return this.config.whitelist.find(function (item) {
                return item.origin === origin || item.origin === uri.host;
            });
        }
    };

    DataManager.getPriority = function getPriority(whitelist) {
        if (whitelist) {
            return whitelist.priority;
        }
        return _ConnectSettings.DEFAULT_PRIORITY;
    };

    DataManager.getHostLabel = function getHostLabel(origin) {
        return this.config.knownHosts.find(function (host) {
            return host.origin === origin;
        });
    };

    DataManager.getSettings = function getSettings(key) {
        if (!this.settings) return null;
        if (typeof key === 'string') {
            return this.settings[key];
        }
        return this.settings;
    };

    DataManager.getDebugSettings = function getDebugSettings(type) {
        return false;
    };

    DataManager.getConfig = function getConfig() {
        return this.config;
    };

    DataManager.isExcludedDevice = function isExcludedDevice(path) {
        // $FlowIssue: settings.excludedDevices field is intentionally not defined in flowtype. it's used only in tests to exclude debug-link device.
        return Array.isArray(this.settings.excludedDevices) ? this.settings.excludedDevices.indexOf(path) >= 0 : false;
    };

    DataManager.getLatestBridgeVersion = function getLatestBridgeVersion() {
        return DataManager.assets.bridge;
    };

    return DataManager;
}();

DataManager.assets = {};
exports.default = DataManager;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(17);
var newPromiseCapability = __webpack_require__(50);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(32);
var invoke = __webpack_require__(121);
var html = __webpack_require__(72);
var cel = __webpack_require__(54);
var global = __webpack_require__(3);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(31)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(36);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(31);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(33);
var $export = __webpack_require__(19);
var redefine = __webpack_require__(84);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(29);
var $iterCreate = __webpack_require__(133);
var setToStringTag = __webpack_require__(40);
var getPrototypeOf = __webpack_require__(131);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(52);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getOrigin = exports.httpRequest = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

__webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var httpRequest = exports.httpRequest = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
        var response, txt;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return fetch(url, { credentials: 'same-origin' });

                    case 2:
                        response = _context.sent;

                        if (!response.ok) {
                            _context.next = 22;
                            break;
                        }

                        if (!(type === 'json')) {
                            _context.next = 11;
                            break;
                        }

                        _context.next = 7;
                        return response.text();

                    case 7:
                        txt = _context.sent;
                        return _context.abrupt('return', JSON.parse(txt));

                    case 11:
                        if (!(type === 'binary')) {
                            _context.next = 17;
                            break;
                        }

                        _context.next = 14;
                        return response.arrayBuffer();

                    case 14:
                        return _context.abrupt('return', _context.sent);

                    case 17:
                        _context.next = 19;
                        return response.text();

                    case 19:
                        return _context.abrupt('return', _context.sent);

                    case 20:
                        _context.next = 23;
                        break;

                    case 22:
                        throw new Error('httpRequest error: ' + url + ' ' + response.statusText);

                    case 23:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function httpRequest(_x2) {
        return _ref.apply(this, arguments);
    };
}();

var getOrigin = exports.getOrigin = function getOrigin(url) {
    // eslint-disable-next-line no-irregular-whitespace, no-useless-escape
    var parts = url.match(/^.+\:\/\/[^\/]+/);
    return Array.isArray(parts) && parts.length > 0 ? parts[0] : 'unknown';
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
var global = __webpack_require__(3);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(29);
var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(134)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(73)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 86 */
/***/ (function(module, exports) {



/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(53);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(31);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(25);
var toIObject = __webpack_require__(30);
var arrayIndexOf = __webpack_require__(139)(false);
var IE_PROTO = __webpack_require__(51)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(23) && !__webpack_require__(37)(function () {
  return Object.defineProperty(__webpack_require__(54)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(7);
var LIBRARY = __webpack_require__(33);
var wksExt = __webpack_require__(97);
var defineProperty = __webpack_require__(26).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(210);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(208);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var INIT = exports.INIT = 'popup-init';
var BOOTSTRAP = exports.BOOTSTRAP = 'popup-bootstrap';
var EXTENSION_REQUEST = exports.EXTENSION_REQUEST = 'popup-extension_request';
var EXTENSION_USB_PERMISSIONS = exports.EXTENSION_USB_PERMISSIONS = 'open-usb-permissions';
var LOG = exports.LOG = 'popup-log';
var OPENED = exports.OPENED = 'popup-opened';
var OPEN_TIMEOUT = exports.OPEN_TIMEOUT = 'popup-open_timeout';
var HANDSHAKE = exports.HANDSHAKE = 'popup-handshake';
var CLOSE = exports.CLOSE = 'popup-close';
var CLOSED = exports.CLOSED = 'popup-closed';
var CANCEL_POPUP_REQUEST = exports.CANCEL_POPUP_REQUEST = 'ui-cancel-popup-request';

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(19);
var newPromiseCapability = __webpack_require__(50);
var perform = __webpack_require__(68);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(19);
var core = __webpack_require__(7);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(70);
var promiseResolve = __webpack_require__(67);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var core = __webpack_require__(7);
var dP = __webpack_require__(26);
var DESCRIPTORS = __webpack_require__(23);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(18);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(69).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(31)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 121 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(71);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(29);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(29);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(32);
var call = __webpack_require__(124);
var isArrayIter = __webpack_require__(123);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(75);
var getIterFn = __webpack_require__(122);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(33);
var global = __webpack_require__(3);
var ctx = __webpack_require__(32);
var classof = __webpack_require__(71);
var $export = __webpack_require__(19);
var isObject = __webpack_require__(17);
var aFunction = __webpack_require__(36);
var anInstance = __webpack_require__(126);
var forOf = __webpack_require__(125);
var speciesConstructor = __webpack_require__(70);
var task = __webpack_require__(69).set;
var microtask = __webpack_require__(120)();
var newPromiseCapabilityModule = __webpack_require__(50);
var perform = __webpack_require__(68);
var userAgent = __webpack_require__(119);
var promiseResolve = __webpack_require__(67);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(118)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(40)($Promise, PROMISE);
__webpack_require__(117)(PROMISE);
Wrapper = __webpack_require__(7)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(116)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(129);
var step = __webpack_require__(128);
var Iterators = __webpack_require__(29);
var toIObject = __webpack_require__(30);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(73)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(25);
var toObject = __webpack_require__(87);
var IE_PROTO = __webpack_require__(51)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(26);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(55);

module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(62);
var descriptor = __webpack_require__(47);
var setToStringTag = __webpack_require__(40);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(52);
var defined = __webpack_require__(53);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86);
__webpack_require__(85);
__webpack_require__(83);
__webpack_require__(127);
__webpack_require__(115);
__webpack_require__(114);
module.exports = __webpack_require__(7).Promise;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(107);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(52);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(30);
var toLength = __webpack_require__(75);
var toAbsoluteIndex = __webpack_require__(138);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(74);
var createDesc = __webpack_require__(47);
var toIObject = __webpack_require__(30);
var toPrimitive = __webpack_require__(63);
var has = __webpack_require__(25);
var IE8_DOM_DEFINE = __webpack_require__(90);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(89);
var hiddenKeys = __webpack_require__(58).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var CORE_EVENT = exports.CORE_EVENT = 'CORE_EVENT';
var UI_EVENT = exports.UI_EVENT = 'UI_EVENT';
var DEVICE_EVENT = exports.DEVICE_EVENT = 'DEVICE_EVENT';
var TRANSPORT_EVENT = exports.TRANSPORT_EVENT = 'TRANSPORT_EVENT';
var RESPONSE_EVENT = exports.RESPONSE_EVENT = 'RESPONSE_EVENT';
var BLOCKCHAIN_EVENT = exports.BLOCKCHAIN_EVENT = 'BLOCKCHAIN_EVENT';

/***/ }),
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parse = exports.DEFAULT_PRIORITY = undefined;

var _extends2 = __webpack_require__(38);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Initial settings for connect.
 * It could be changed by passing values into TrezorConnect.init(...) method
 */

var VERSION = '6.0.3';
var versionN = VERSION.split('.').map(function (s) {
    return parseInt(s);
});
var DIRECTORY = '' + versionN[0] + (versionN[1] > 0 ? '.' + versionN[1] : '') + '/';
//const DEFAULT_DOMAIN: string = `https://connect.trezor.io/${ DIRECTORY }`;
//const DEFAULT_DOMAIN: string = `http://bio.suprema.inc/trezor/connect/${ DIRECTORY }`;
var DEFAULT_DOMAIN = 'https://shcheong.github.io/connect/' + DIRECTORY;
var DEFAULT_PRIORITY = exports.DEFAULT_PRIORITY = 2;

var initialSettings = {
    configSrc: 'data/config.json', // constant
    debug: false,
    origin: null,
    priority: DEFAULT_PRIORITY,
    trustedHost: false,
    connectSrc: DEFAULT_DOMAIN,
    iframeSrc: DEFAULT_DOMAIN + 'iframe.html',
    popup: true,
    popupSrc: DEFAULT_DOMAIN + 'popup.html',
    webusbSrc: DEFAULT_DOMAIN + 'webusb.html',
    transportReconnect: false,
    webusb: true,
    pendingTransportEvent: true,
    supportedBrowser: !/Trident|MSIE/.test(navigator.userAgent),
    extension: null
};

var currentSettings = initialSettings;

var parse = exports.parse = function parse(input) {
    if (!input) return currentSettings;

    var settings = (0, _extends3.default)({}, currentSettings);
    if (input.hasOwnProperty('debug')) {
        if (Array.isArray(input)) {
            // enable log with prefix
        }if (typeof input.debug === 'boolean') {
            settings.debug = input.debug;
        } else if (typeof input.debug === 'string') {
            settings.debug = input.debug === 'true';
        }
    }

    if (typeof input.connectSrc === 'string') {
        // TODO: escape string, validate url
        settings.connectSrc = input.connectSrc;
    } else if (typeof window !== 'undefined' && typeof window.__TREZOR_CONNECT_SRC === 'string') {
        settings.connectSrc = window.__TREZOR_CONNECT_SRC;
    }
    settings.iframeSrc = settings.connectSrc + 'iframe.html';
    settings.popupSrc = settings.connectSrc + 'popup.html';
    settings.webusbSrc = settings.connectSrc + 'webusb.html';

    if (typeof input.transportReconnect === 'boolean') {
        settings.transportReconnect = input.transportReconnect;
    }

    if (typeof input.webusb === 'boolean') {
        settings.webusb = input.webusb;
    }

    if (typeof input.popup === 'boolean') {
        settings.popup = input.popup;
    }

    if (typeof input.pendingTransportEvent === 'boolean') {
        settings.pendingTransportEvent = input.pendingTransportEvent;
    }

    // local files
    if (window.location.protocol === 'file:') {
        settings.origin = window.location.origin + window.location.pathname;
        settings.webusb = false;
    }

    if (typeof input.extension === 'string') {
        settings.extension = input.extension;
    }

    // $FlowIssue: settings.excludedDevices field is intentionally not defined in flowtype. it's used only in tests to exclude debug-link device.
    settings.excludedDevices = input.excludedDevices;

    currentSettings = settings;
    return currentSettings;
};

/***/ }),
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;


var currencyUnits = 'mbtc2';

// TODO: chagne currency units

var formatAmount = exports.formatAmount = function formatAmount(n, coinInfo) {
    var amount = n / 1e8;
    if (coinInfo.isBitcoin && currencyUnits === 'mbtc' && amount <= 0.1 && n !== 0) {
        var _s = (n / 1e5).toString();
        return _s + ' mBTC';
    }
    var s = amount.toString();
    return s + ' ' + coinInfo.shortcut;
};

var formatTime = exports.formatTime = function formatTime(n) {
    var hours = Math.floor(n / 60);
    var minutes = n % 60;

    if (!n) return 'No time estimate';
    var res = '';
    if (hours !== 0) {
        res += hours + ' hour';
        if (hours > 1) {
            res += 's';
        }
        res += ' ';
    }
    if (minutes !== 0) {
        res += minutes + ' minutes';
    }
    return res;
};

var btckb2satoshib = exports.btckb2satoshib = function btckb2satoshib(n) {
    return Math.round(n * 1e5);
};

/***/ }),
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getLatestRelease = exports.checkFirmware = exports.parseFirmware = undefined;

var _extends2 = __webpack_require__(38);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var releases = [];

var parseFirmware = exports.parseFirmware = function parseFirmware(json) {
    var obj = json;
    Object.keys(obj).forEach(function (key) {
        var release = obj[key];
        releases.push((0, _extends3.default)({}, release));
    });
};

var checkFirmware = exports.checkFirmware = function checkFirmware(fw) {
    // find all releases for device model
    var modelFirmware = releases.filter(function (r) {
        return r.version[0] === fw[0];
    });
    // find latest firmware for this model
    var latestFirmware = modelFirmware.filter(function (r) {
        return r.version[1] > fw[1] || r.version[1] === fw[1] && r.version[2] > fw[2];
    });
    if (latestFirmware.length > 0) {
        // check if any of releases is required
        var requiredFirmware = latestFirmware.find(function (r) {
            return r.required;
        });
        if (requiredFirmware) {
            return 'required';
        } else {
            return 'outdated';
        }
    }
    return 'valid';
};

var getLatestRelease = exports.getLatestRelease = function getLatestRelease(fw) {
    // find all releases for device model
    var modelFirmware = releases.filter(function (r) {
        return r.version[0] === fw[0];
    });
    // find latest firmware for this model
    return modelFirmware.find(function (r) {
        return r.version[1] > fw[1] || r.version[1] === fw[1] && r.version[2] > fw[2];
    });
};

/***/ }),
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseBridgeJSON = exports.checkBrowser = exports.state = undefined;

var _extends2 = __webpack_require__(38);

var _extends3 = _interopRequireDefault(_extends2);

var _bowser = __webpack_require__(292);

var bowser = _interopRequireWildcard(_bowser);

var _DataManager = __webpack_require__(66);

var _DataManager2 = _interopRequireDefault(_DataManager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = exports.state = {
    name: 'unknown',
    osname: 'unknown',
    supported: false,
    outdated: false,
    mobile: false
};

var checkBrowser = exports.checkBrowser = function checkBrowser() {
    var supported = _DataManager2.default.getConfig().supportedBrowsers;
    state.name = bowser.name + ': ' + bowser.version + '; ' + bowser.osname + ': ' + bowser.osversion + ';';
    state.mobile = bowser.mobile;
    state.osname = bowser.osname;
    if (bowser.mobile && typeof navigator.usb === 'undefined') {
        state.supported = false;
    } else {
        var isSupported = supported[bowser.name.toLowerCase()];
        if (isSupported) {
            state.supported = true;
            state.outdated = isSupported.version > parseInt(bowser.version, 10);
        }
    }

    return state;
};

// Parse JSON loaded from config.assets.bridge
// Find preferred platform using bowser and userAgent
var parseBridgeJSON = exports.parseBridgeJSON = function parseBridgeJSON(json) {
    var osname = bowser.osname.toLowerCase();
    var preferred = '';
    switch (osname) {
        case 'linux':
            {
                var agent = navigator.userAgent;
                var isRpm = agent.match(/CentOS|Fedora|Mandriva|Mageia|Red Hat|Scientific|SUSE/) ? 'rpm' : 'deb';
                var is64x = agent.match(/Linux i[3456]86/) ? '32' : '64';
                preferred = '' + isRpm + is64x;
            }
            break;
        case 'macos':
            preferred = 'mac';
            break;
        case 'windows':
            preferred = 'win';
            break;
        default:
            break;
    }

    // $FlowIssue indexer property is missing in `JSON`
    var latest = json[0];
    var version = latest.version.join('.');

    latest.packages = latest.packages.map(function (p) {
        return (0, _extends3.default)({}, p, {
            url: '' + latest.directory + p.url,
            signature: p.signature ? '' + latest.directory + p.signature : null,
            preferred: p.platform.indexOf(preferred) >= 0
        });
    });
    latest.changelog = latest.changelog.replace(/\n/g, '').split('* ');
    latest.changelog.splice(0, 1);
    return JSON.parse(JSON.stringify(latest).replace(/{version}/g, version));
};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;


// parse MessageEvent .data into CoreMessage
var parseMessage = exports.parseMessage = function parseMessage(messageData) {
    var message = {
        event: messageData.event,
        type: messageData.type,
        payload: messageData.payload
    };

    if (typeof messageData.id === 'number') {
        message.id = messageData.id;
    }

    if (typeof messageData.success === 'boolean') {
        message.success = messageData.success;
    }

    return message;
};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(19);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(62) });


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(193);
var $Object = __webpack_require__(7).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(194), __esModule: true };

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(17);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(32)(Function.call, __webpack_require__(146).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(19);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(196).set });


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(197);
module.exports = __webpack_require__(7).Object.setPrototypeOf;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(198), __esModule: true };

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96)('observable');


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96)('asyncIterator');


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(30);
var gOPN = __webpack_require__(147).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(31);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(55);
var gOPS = __webpack_require__(99);
var pIE = __webpack_require__(74);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(46)('meta');
var isObject = __webpack_require__(17);
var has = __webpack_require__(25);
var setDesc = __webpack_require__(26).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(37)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(25);
var DESCRIPTORS = __webpack_require__(23);
var $export = __webpack_require__(19);
var redefine = __webpack_require__(84);
var META = __webpack_require__(205).KEY;
var $fails = __webpack_require__(37);
var shared = __webpack_require__(59);
var setToStringTag = __webpack_require__(40);
var uid = __webpack_require__(46);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(97);
var wksDefine = __webpack_require__(96);
var enumKeys = __webpack_require__(204);
var isArray = __webpack_require__(203);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(17);
var toIObject = __webpack_require__(30);
var toPrimitive = __webpack_require__(63);
var createDesc = __webpack_require__(47);
var _create = __webpack_require__(62);
var gOPNExt = __webpack_require__(202);
var $GOPD = __webpack_require__(146);
var $DP = __webpack_require__(26);
var $keys = __webpack_require__(55);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(147).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(74).f = $propertyIsEnumerable;
  __webpack_require__(99).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(33)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(206);
__webpack_require__(86);
__webpack_require__(201);
__webpack_require__(200);
module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(207), __esModule: true };

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
__webpack_require__(83);
module.exports = __webpack_require__(97).f('iterator');


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(209), __esModule: true };

/***/ }),
/* 211 */,
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(55);
var gOPS = __webpack_require__(99);
var pIE = __webpack_require__(74);
var toObject = __webpack_require__(87);
var IObject = __webpack_require__(88);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(37)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(19);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(212) });


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(213);
module.exports = __webpack_require__(7).Object.assign;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(214), __esModule: true };

/***/ }),
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    return promise.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49), __webpack_require__(15)))

/***/ }),
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function parseURI (str, opts) {
  opts = opts || {}

  var o = {
    key: ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'],
    q: {
      name: 'queryKey',
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  }

  var m = o.parser[opts.strictMode ? 'strict' : 'loose'].exec(str)
  var uri = {}
  var i = 14

  while (i--) uri[o.key[i]] = m[i] || ''

  uri[o.q.name] = {}
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2
  })

  return uri
}


/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) __webpack_require__(291)(name, definition)
  else {}
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)os/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr\/|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , osname: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , osname: 'Chrome OS'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/edg([ea]|ios)/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , osname: 'Sailfish OS'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
        result.osname = 'Firefox OS'
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , osname: 'BlackBerry OS'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , osname: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , osname: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , osname: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && (android || result.silk)) {
      result.android = t
      result.osname = 'Android'
    } else if (!result.windowsphone && iosdevice) {
      result[iosdevice] = t
      result.ios = t
      result.osname = 'iOS'
    } else if (mac) {
      result.mac = t
      result.osname = 'macOS'
    } else if (xbox) {
      result.xbox = t
      result.osname = 'Xbox'
    } else if (windows) {
      result.windows = t
      result.osname = 'Windows'
    } else if (linux) {
      result.linux = t
      result.osname = 'Linux'
    }

    function getWindowsVersion (s) {
      switch (s) {
        case 'NT': return 'NT'
        case 'XP': return 'XP'
        case 'NT 5.0': return '2000'
        case 'NT 5.1': return 'XP'
        case 'NT 5.2': return '2003'
        case 'NT 6.0': return 'Vista'
        case 'NT 6.1': return '7'
        case 'NT 6.2': return '8'
        case 'NT 6.3': return '8.1'
        case 'NT 10.0': return '10'
        default: return undefined
      }
    }

    // OS version extraction
    var osVersion = '';
    if (result.windows) {
      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))
    } else if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (result.mac) {
      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = !result.windows && osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  /*
   * Set our detect public method to the main bowser object
   * This is needed to implement bowser in server side
   */
  bowser.detect = detect;
  return bowser
});


/***/ }),
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.firmwareNotSupported = undefined;

var _common = __webpack_require__(60);

var firmwareNotSupported = exports.firmwareNotSupported = function firmwareNotSupported(device) {
    var view = (0, _common.showView)('firmware-not-supported');
    if (!device.features) return;
    var features = device.features;


    var h3 = view.getElementsByTagName('h3')[0];
    h3.innerHTML = (features.major_version === 1 ? 'Trezor One' : 'Trezor T') + ' is not supported';
};

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.firmwareRequiredUpdate = undefined;

var _common = __webpack_require__(60);

var _FirmwareInfo = __webpack_require__(174);

var firmwareRequiredUpdate = exports.firmwareRequiredUpdate = function firmwareRequiredUpdate(device) {
    var view = (0, _common.showView)('firmware-update');
    if (!device.features) return;
    var features = device.features;

    var release = (0, _FirmwareInfo.getLatestRelease)([features.major_version, features.minor_version, features.patch_version]);

    if (!release) return;

    var button = view.getElementsByClassName('confirm')[0];
    var url = release.channel === 'beta' ? 'https://beta-wallet.trezor.io/' : 'https://wallet.trezor.io/';
    var version = release.version.join('.');
    button.setAttribute('href', url + '?fw=' + version);
};

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.passphraseOnDeviceView = undefined;

var _common = __webpack_require__(60);

var passphraseOnDeviceView = exports.passphraseOnDeviceView = function passphraseOnDeviceView(payload) {
    (0, _common.showView)('passphrase-on-device');

    var deviceName = _common.container.getElementsByClassName('device-name')[0];
    deviceName.innerText = payload.device.label;
};

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.initBrowserView = undefined;

var _common = __webpack_require__(60);

var initBrowserView = exports.initBrowserView = function initBrowserView(payload) {
    (0, _common.showView)(!payload.supported && payload.mobile ? 'smartphones-not-supported' : 'browser');

    var h3 = _common.container.getElementsByTagName('h3')[0];
    var p = _common.container.getElementsByTagName('p')[0];
    if (!payload.supported && !payload.mobile) {
        h3.innerText = 'Unsupported browser';
        p.innerText = 'Please use one of the supported browsers.';
    } else if (payload.outdated) {
        h3.innerText = 'Outdated browser';
        p.innerText = 'Please update your browser.';
    }
};

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.initConfirmationView = undefined;

var _builder = __webpack_require__(21);

var _ui = __webpack_require__(16);

var UI = _interopRequireWildcard(_ui);

var _common = __webpack_require__(60);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initConfirmationView = exports.initConfirmationView = function initConfirmationView(data) {
    // Confirmation views:
    // - export xpub
    // - export account info

    // TODO: Check if correct class names for HTML views
    (0, _common.showView)(data.view);

    var h3 = _common.container.getElementsByTagName('h3')[0];
    var confirmButton = _common.container.getElementsByClassName('confirm')[0];
    var cancelButton = _common.container.getElementsByClassName('cancel')[0];

    var customConfirmButton = data.customConfirmButton;

    if (customConfirmButton) {
        confirmButton.innerHTML = customConfirmButton.label;
        confirmButton.classList.add(customConfirmButton.className);
    }

    h3.innerHTML = data.label;

    confirmButton.onclick = function () {
        (0, _common.postMessage)(new _builder.UiMessage(UI.RECEIVE_CONFIRMATION, 'true'));
        (0, _common.showView)('loader');
    };

    cancelButton.onclick = function () {
        (0, _common.postMessage)(new _builder.UiMessage(UI.RECEIVE_CONFIRMATION, 'false'));
        (0, _common.showView)('loader');
    };
};

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.initPermissionsView = undefined;

var _builder = __webpack_require__(21);

var _ui = __webpack_require__(16);

var UI = _interopRequireWildcard(_ui);

var _DataManager = __webpack_require__(66);

var _DataManager2 = _interopRequireDefault(_DataManager);

var _common = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getPermissionText = function getPermissionText(permissionType, deviceName) {
    var text = '';

    switch (permissionType) {
        case 'read':
            text = 'Read public keys from Trezor device';
            break;
        case 'read-meta':
            text = 'Read metadata from Trezor device';
            break;
        case 'write':
            text = 'Prepare Trezor device for transaction and data signing';
            break;
        case 'write-meta':
            text = 'Write metadata to Trezor device';
            break;
        case 'management':
            text = 'Modify device settings';
            break;
        case 'custom-message':
            text = 'Run custom operations';
            break;
    }
    return text;
};

var getPermissionTooltipText = function getPermissionTooltipText(permissionType) {
    var text = '';

    switch (permissionType) {
        case 'read':
            text = 'Permission needed to load public information from your device.';
            break;
        case 'write':
            text = 'Permission needed to execute operations, such as composing a transaction, after your confirmation.';
            break;
        case 'management':
            text = 'Permission needed to change device settings, such as PIN, passphrase, label or seed.';
            break;
        case 'custom-message':
            text = 'Development tool. Use at your own risk. Allows service to send arbitrary data to your Trezor device.';
            break;
    }
    return text;
};

var createPermissionItem = function createPermissionItem(permissionText, tooltipText) {
    var permissionItem = document.createElement('div');
    permissionItem.className = 'permission-item';

    // Tooltip
    if (tooltipText !== '') {
        var tooltip = (0, _common.createTooltip)(tooltipText);
        permissionItem.appendChild(tooltip);
    }
    //

    // Permission content (icon & text)
    var contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    var infoIcon = document.createElement('span');
    infoIcon.className = 'info-icon';

    var permissionTextSpan = document.createElement('span');
    permissionTextSpan.innerText = permissionText;
    contentDiv.appendChild(infoIcon);
    contentDiv.appendChild(permissionTextSpan);
    permissionItem.appendChild(contentDiv);
    //

    return permissionItem;
};

var initPermissionsView = exports.initPermissionsView = function initPermissionsView(payload) {
    (0, _common.showView)('permissions');

    var h3 = _common.container.getElementsByTagName('h3')[0];
    var hostName = h3.getElementsByClassName('host-name')[0];
    var permissionsList = _common.container.getElementsByClassName('permissions-list')[0];
    var confirmButton = _common.container.getElementsByClassName('confirm')[0];
    var cancelButton = _common.container.getElementsByClassName('cancel')[0];
    var rememberCheckbox = _common.container.getElementsByClassName('remember-permissions')[0];

    hostName.innerText = _DataManager2.default.getSettings('hostLabel') || _DataManager2.default.getSettings('origin');
    if (payload && Array.isArray(payload.permissions)) {
        payload.permissions.forEach(function (p) {
            var permissionText = getPermissionText(p, payload.device.label);
            var tooltipText = getPermissionTooltipText(p);

            var permissionItem = createPermissionItem(permissionText, tooltipText);
            permissionsList.appendChild(permissionItem);
        });
    }

    confirmButton.onclick = function () {
        (0, _common.postMessage)(new _builder.UiMessage(UI.RECEIVE_PERMISSION, {
            remember: rememberCheckbox && rememberCheckbox.checked,
            granted: true
        }));
        (0, _common.showView)('loader');
    };

    cancelButton.onclick = function () {
        (0, _common.postMessage)(new _builder.UiMessage(UI.RECEIVE_PERMISSION, {
            remember: rememberCheckbox && rememberCheckbox.checked,
            granted: false
        }));
        (0, _common.showView)('loader');
    };

    rememberCheckbox.onchange = function (e) {
        confirmButton.innerText = e.target.checked ? 'Always allow for this service' : 'Allow once for this session';
    };
};

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.requestButton = undefined;

var _common = __webpack_require__(60);

var requestButton = exports.requestButton = function requestButton(data) {
    if (data.code === 'ButtonRequest_ConfirmOutput') {
        (0, _common.showView)('check-address');
    } else if (data.code === 'ButtonRequest_Address') {
        (0, _common.showView)('check-address');
    } else {
        (0, _common.showView)('follow-device');
    }
};

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.selectFee = exports.updateCustomFee = undefined;

var _builder = __webpack_require__(21);

var _ui = __webpack_require__(16);

var UI = _interopRequireWildcard(_ui);

var _common = __webpack_require__(60);

var _formatUtils = __webpack_require__(169);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fees = [];
// reference to currently selected button
var selectedFee = void 0;

/*
 * Update custom fee view.
 */
var updateCustomFee = exports.updateCustomFee = function updateCustomFee(payload) {
    var custom = _common.container.getElementsByClassName('custom-fee')[0];
    var opener = _common.container.getElementsByClassName('opener')[0];
    var customFeeLabel = opener.getElementsByClassName('fee-info')[0];

    if (custom.className.indexOf('active') < 0) {
        return;
    }

    var lastFee = fees[fees.length - 1];
    if (lastFee.name === 'custom') {
        fees[fees.length - 1] = payload.level;
    } else {
        fees.push(payload.level);
    }

    if (payload.level.fee) {
        customFeeLabel.innerHTML = (0, _formatUtils.formatAmount)(payload.level.fee, payload.coinInfo);
    } else {
        customFeeLabel.innerHTML = 'Insufficient funds';
    }
    // eslint-disable-next-line no-use-before-define
    validation(payload.coinInfo);
};

var validation = function validation(coinInfo) {
    if (selectedFee) {
        var selectedName = selectedFee.getAttribute('data-fee') || 'custom';
        var selectedValue = fees.find(function (f) {
            return f.name === selectedName;
        });
        var sendButton = _common.container.getElementsByClassName('send-button')[0];

        if (selectedValue && selectedValue.fee !== 0) {
            sendButton.removeAttribute('disabled');
            sendButton.innerHTML = 'Send ' + (0, _formatUtils.formatAmount)(selectedValue.total, coinInfo);
        } else {
            sendButton.setAttribute('disabled', 'disabled');
            sendButton.innerHTML = 'Send';
        }
    }
};

/*
 * Show select fee view.
 */
var selectFee = exports.selectFee = function selectFee(data) {
    if (!data || !Array.isArray(data.feeLevels)) return; // TODO: back to accounts?

    (0, _common.showView)('select-fee');

    // remove old references
    selectedFee = null;
    fees.splice(0, fees.length);
    // add new fees from message
    fees.push.apply(fees, data.feeLevels);

    // build innerHTML string with fee buttons
    var feesComponents = [];
    fees.forEach(function (level, index) {
        // ignore custom
        if (level.name === 'custom') return;

        var feeName = level.name;
        if (level.name === 'normal' && level.fee) {
            feeName = '<span>' + level.name + '</span>\n                <span class="fee-subtitle">recommended</span>';
        }

        if (level.fee) {
            feesComponents.push('\n                <button data-fee="' + level.name + '" class="list">\n                    <span class="fee-title">' + feeName + '</span>\n                    <span class="fee-info">\n                        <span class="fee-amount">' + (0, _formatUtils.formatAmount)(level.fee, data.coinInfo) + '</span>\n                        <span class="fee-time">' + (0, _formatUtils.formatTime)(level.minutes) + '</span>\n                    </span>\n                </button>\n            ');
        } else {
            feesComponents.push('\n                <button disabled class="list">\n                    <span class="fee-title">' + feeName + '</span>\n                    <span class="fee-info">Insufficient funds</span>\n                </button>\n            ');
        }
    });

    var feeList = _common.container.getElementsByClassName('select-fee-list')[0];
    // append custom fee button
    feesComponents.push(feeList.innerHTML);
    // render all buttons
    feeList.innerHTML = feesComponents.join('');

    // references to html elements
    var sendButton = _common.container.getElementsByClassName('send-button')[0];
    var opener = _common.container.getElementsByClassName('opener')[0];
    var custom = _common.container.getElementsByClassName('custom-fee')[0];
    var customFeeLabel = opener.getElementsByClassName('fee-info')[0];

    var onFeeSelect = function onFeeSelect(event) {
        if (event.currentTarget instanceof HTMLElement) {
            if (selectedFee) {
                selectedFee.classList.remove('active');
            }
            selectedFee = event.currentTarget;
            selectedFee.classList.add('active');

            validation(data.coinInfo);
        }
    };

    // find all buttons excluding custom fee button
    var feeButtons = feeList.querySelectorAll('[data-fee]');
    for (var i = 0; i < feeButtons.length; i++) {
        feeButtons.item(i).addEventListener('click', onFeeSelect);

        // Select normal fee on default
        if (feeButtons.item(i).dataset.fee === 'normal') {
            feeButtons.item(i).click();
        }
    }

    // custom fee button logic
    var composingTimeout = 0;
    opener.onclick = function () {
        if (custom.className.indexOf('active') >= 0) return;

        if (selectedFee) {
            selectedFee.classList.remove('active');
        }

        var composedCustomFee = fees.find(function (f) {
            return f.name === 'custom';
        });
        var customFeeDefaultValue = 0;
        if (!composedCustomFee) {
            if (selectedFee) {
                var selectedName = selectedFee.getAttribute('data-fee');
                var selectedValue = fees.find(function (f) {
                    return f.name === selectedName;
                });
                if (selectedValue && selectedValue.fee !== 0) {
                    customFeeDefaultValue = selectedValue.feePerByte;
                }
            }

            if (!customFeeDefaultValue) {
                customFeeDefaultValue = 1; // TODO: get normal
            }
        } else if (composedCustomFee.fee) {
            customFeeDefaultValue = composedCustomFee.feePerByte;
        }

        custom.classList.add('active');
        selectedFee = custom;
        // eslint-disable-next-line no-use-before-define
        focusInput(customFeeDefaultValue);
    };

    var focusInput = function focusInput(defaultValue) {
        var input = _common.container.getElementsByTagName('input')[0];
        setTimeout(function () {
            // eslint-disable-next-line no-use-before-define
            input.oninput = handleCustomFeeChange;
            if (defaultValue) {
                input.value = defaultValue.toString();
                var event = document.createEvent('Event');
                event.initEvent('input', true, true);
                input.dispatchEvent(event);
            }
            input.focus();
        }, 1);
    };

    var minFee = data.coinInfo.minFeeSatoshiKb / 1000;
    var maxFee = data.coinInfo.maxFeeSatoshiKb / 1000;

    var handleCustomFeeChange = function handleCustomFeeChange(event) {
        window.clearTimeout(composingTimeout);

        sendButton.setAttribute('disabled', 'disabled');
        // $FlowIssue value not found on Event target
        var value = event.currentTarget.value;
        var valueNum = parseInt(value);

        if (isNaN(valueNum)) {
            if (value.length > 0) {
                customFeeLabel.innerHTML = 'Incorrect fee';
            } else {
                customFeeLabel.innerHTML = 'Missing fee';
            }
        } else if (valueNum < minFee) {
            customFeeLabel.innerHTML = 'Fee is too low';
        } else if (valueNum > maxFee) {
            customFeeLabel.innerHTML = 'Fee is too big';
        } else {
            customFeeLabel.innerHTML = 'Composing...';

            var composeCustomFeeTimeoutHandler = function composeCustomFeeTimeoutHandler() {
                (0, _common.postMessage)(new _builder.UiMessage(UI.RECEIVE_FEE, {
                    type: 'compose-custom',
                    value: valueNum
                }));

                // updateCustomFee({
                //     fee: {
                //         name: "custom",
                //         minutes: 10,
                //         fee: 123,
                //         bytes: 200,
                //         feePerByte: 30
                //     },
                //     coinInfo: data.coinInfo,
                // })
            };

            composingTimeout = window.setTimeout(composeCustomFeeTimeoutHandler, 800);
        }
    };

    var changeAccountButton = _common.container.getElementsByClassName('back-button')[0];
    changeAccountButton.onclick = function () {
        (0, _common.postMessage)(new _builder.UiMessage(UI.RECEIVE_FEE, {
            type: 'change-account'
        }));
        (0, _common.showView)('loader');
    };

    sendButton.onclick = function () {
        if (!selectedFee) return;
        var selectedName = selectedFee.getAttribute('data-fee');
        (0, _common.postMessage)(new _builder.UiMessage(UI.RECEIVE_FEE, {
            type: 'send',
            value: selectedName || 'custom'
        }));
    };
};

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.selectAccount = undefined;

var _builder = __webpack_require__(21);

var _ui = __webpack_require__(16);

var UI = _interopRequireWildcard(_ui);

var _formatUtils = __webpack_require__(169);

var _common = __webpack_require__(60);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var selectAccount = exports.selectAccount = function selectAccount(payload) {
    if (!payload || !Array.isArray(payload.accounts)) return;

    // first render
    // configure buttons
    if (payload.start) {
        (0, _common.showView)('select-account');

        if (payload.coinInfo.segwit) {
            (function () {
                var tabs = _common.container.getElementsByClassName('tabs')[0];
                tabs.style.display = 'flex';

                var selectAccountContainer = _common.container.getElementsByClassName('select-account')[0];
                var buttons = tabs.getElementsByClassName('tab-selection');
                var button = void 0;

                var _loop = function _loop() {
                    var type = button.getAttribute('data-tab');
                    if (type) {
                        button.onclick = function (event) {
                            selectAccountContainer.className = 'select-account ' + type;
                        };
                    }
                };

                for (var _iterator = buttons, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        button = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        button = _i.value;
                    }

                    _loop();
                }
            })();
        }
    }

    // set header
    var h3 = _common.container.getElementsByTagName('h3')[0];
    h3.innerHTML = payload.complete ? 'Select ' + payload.coinInfo.label + ' account' : 'Loading ' + payload.coinInfo.label + ' accounts...';

    var buttonsContainer = _common.container.querySelectorAll('.select-account-list.normal')[0];
    var legacyButtonsContainer = _common.container.querySelectorAll('.select-account-list.legacy')[0];

    var handleClick = function handleClick(event) {
        if (event.currentTarget instanceof HTMLElement) {
            (0, _common.postMessage)(new _builder.UiMessage(UI.RECEIVE_ACCOUNT, event.currentTarget.getAttribute('data-index')));
        }
        buttonsContainer.style.pointerEvents = 'none';
    };

    var removeEmptyButton = function removeEmptyButton(buttonContainer) {
        var defaultButton = buttonContainer.querySelectorAll('.account-default')[0];
        if (defaultButton) {
            buttonContainer.removeChild(defaultButton);
        }
    };

    var updateButtonValue = function updateButtonValue(button, account) {
        if (button.innerHTML.length < 1) {
            button.innerHTML = '\n                <span class="account-title"></span>\n                <span class="account-status"></span>';
        }
        var title = button.getElementsByClassName('account-title')[0];
        var status = button.getElementsByClassName('account-status')[0];
        title.innerHTML = account.label;

        // TODO: Disable button once an account is fully loaded and its balance is 0

        if (account.balance < 0) {
            status.innerHTML = account.transactions ? account.transactions + ' transactions' : 'Loading...';
            button.disabled = true;
        } else {
            status.innerHTML = account.transactions === 0 ? 'New account' : (0, _formatUtils.formatAmount)(account.balance, payload.coinInfo);
            if (payload.checkBalance) {
                button.disabled = account.transactions === 0 || account.balance === 0;
            } else {
                button.disabled = false;
            }

            if (!button.disabled) {
                button.onclick = handleClick;
            }
        }
    };

    for (var _iterator2 = payload.accounts.entries(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var _ref = _ref2;
        var index = _ref[0];
        var account = _ref[1];

        var existed = _common.container.querySelectorAll('[data-index="' + index + '"]')[0];
        if (!existed) {
            var button = document.createElement('button');
            button.className = 'list';
            button.setAttribute('data-index', index.toString());

            updateButtonValue(button, account);

            // add to proper container
            if (payload.coinInfo.segwit && !account.coinInfo.segwit) {
                removeEmptyButton(legacyButtonsContainer);
                legacyButtonsContainer.appendChild(button);
            } else {
                removeEmptyButton(buttonsContainer);
                buttonsContainer.appendChild(button);
            }
        } else {
            updateButtonValue(existed, account);
        }
    }
};

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.selectDevice = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _builder = __webpack_require__(21);

var _ui = __webpack_require__(16);

var UI = _interopRequireWildcard(_ui);

var _popup = __webpack_require__(106);

var POPUP = _interopRequireWildcard(_popup);

var _common = __webpack_require__(60);

var _DataManager = __webpack_require__(66);

var _DataManager2 = _interopRequireDefault(_DataManager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initWebUsbButton = function initWebUsbButton(webusb, showLoader) {
    if (!webusb) return;

    var webusbContainer = _common.container.getElementsByClassName('webusb')[0];
    webusbContainer.style.display = 'flex';
    var button = webusbContainer.getElementsByTagName('button')[0];

    if (!_common.iframe) {
        button.innerHTML = '<span class="plus"></span><span class="text">Pair devices</span>';
    }

    button.onclick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var usb;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (_common.iframe) {
                            _context.next = 3;
                            break;
                        }

                        window.postMessage(POPUP.EXTENSION_USB_PERMISSIONS, window.location.origin);
                        return _context.abrupt('return');

                    case 3:
                        usb = _common.iframe.clientInformation.usb;
                        _context.prev = 4;
                        _context.next = 7;
                        return usb.requestDevice({ filters: _DataManager2.default.getConfig().webusb });

                    case 7:
                        if (showLoader) {
                            (0, _common.showView)('loader');
                        }
                        _context.next = 12;
                        break;

                    case 10:
                        _context.prev = 10;
                        _context.t0 = _context['catch'](4);

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[4, 10]]);
    }));
};

var selectDevice = exports.selectDevice = function selectDevice(payload) {
    if (!payload) return;

    if (!payload.devices || !Array.isArray(payload.devices) || payload.devices.length === 0) {
        // No device connected
        (0, _common.showView)('connect');
        initWebUsbButton(payload.webusb, true);
        return;
    }

    (0, _common.showView)('select-device');
    initWebUsbButton(payload.webusb, false);

    // If only 'remember device for now' toggle and no webusb button is available
    // show it right under the table
    if (!payload.webusb) {
        var wrapper = _common.container.getElementsByClassName('wrapper')[0];
        wrapper.style.justifyContent = 'normal';
    }

    // Populate device list
    var deviceList = _common.container.getElementsByClassName('select-device-list')[0];
    // deviceList.innerHTML = '';
    var rememberCheckbox = _common.container.getElementsByClassName('remember-device')[0];

    // Show readable devices first
    payload.devices.sort(function (d1, d2) {
        if (d1.type === 'unreadable' && !d2.type !== 'unreadable') {
            return 1;
        } else if (d1.type !== 'unreadable' && d2.type === 'unreadable') {
            return -1;
        }
        return 0;
    });

    payload.devices.forEach(function (device) {
        var deviceButton = document.createElement('button');
        deviceButton.className = 'list';
        if (device.type !== 'unreadable') {
            deviceButton.addEventListener('click', function () {
                (0, _common.postMessage)(new _builder.UiMessage(UI.RECEIVE_DEVICE, {
                    remember: rememberCheckbox && rememberCheckbox.checked,
                    device: device
                }));
                (0, _common.showView)('loader');
            });
        }

        var deviceIcon = document.createElement('span');
        deviceIcon.className = 'icon';

        if (device.features) {
            if (device.features.major_version === 2) {
                deviceIcon.classList.add('model-t');
            }
        }

        var deviceName = document.createElement('span');
        deviceName.className = 'device-name';
        deviceName.textContent = device.label;

        var wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        wrapper.appendChild(deviceIcon);
        wrapper.appendChild(deviceName);
        deviceButton.appendChild(wrapper);

        // device {
        //     status: 'available' | 'occupied' | 'used';
        //     type: 'acquired' | 'unacquired' | 'unreadable';
        // }
        // if (device.status !== 'available') {
        if (device.type !== 'acquired' || device.status === 'occupied') {
            deviceButton.classList.add('device-explain');

            var explanation = document.createElement('div');
            explanation.className = 'explain';

            var htmlUnreadable = 'Please install <a href="https://wallet.trezor.io" target="_blank" rel="noreferrer noopener" onclick="window.closeWindow();">Bridge</a> to use Trezor device.';
            var htmlUnacquired = 'Click to activate. This device is used by another application.';

            if (device.type === 'unreadable') {
                deviceButton.disabled = true;
                deviceIcon.classList.add('unknown');
                deviceName.textContent = 'Unrecognized device';
                explanation.innerHTML = htmlUnreadable;
            }

            if (device.type === 'unacquired' || device.status === 'occupied') {
                deviceName.textContent = 'Inactive device';
                deviceButton.classList.add('unacquired');
                explanation.classList.add('unacquired');
                explanation.innerHTML = htmlUnacquired;

                if (device.type === 'acquired') {
                    deviceName.textContent = device.label;
                }
            }

            deviceButton.appendChild(explanation);
        }

        deviceList.appendChild(deviceButton);
    });
};

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.initInvalidPassphraseView = undefined;

var _builder = __webpack_require__(21);

var _ui = __webpack_require__(16);

var UI = _interopRequireWildcard(_ui);

var _common = __webpack_require__(60);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initInvalidPassphraseView = exports.initInvalidPassphraseView = function initInvalidPassphraseView(payload) {
    (0, _common.showView)('invalid-passphrase');

    var confirmButton = _common.container.getElementsByClassName('confirm')[0];
    var cancelButton = _common.container.getElementsByClassName('cancel')[0];

    confirmButton.onclick = function () {
        (0, _common.postMessage)(new _builder.UiMessage(UI.INVALID_PASSPHRASE_ACTION, false));
        (0, _common.showView)('loader');
    };

    cancelButton.onclick = function () {
        (0, _common.postMessage)(new _builder.UiMessage(UI.INVALID_PASSPHRASE_ACTION, true));
        (0, _common.showView)('loader');
    };
};

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.initPassphraseView = undefined;

var _builder = __webpack_require__(21);

var _ui = __webpack_require__(16);

var UI = _interopRequireWildcard(_ui);

var _common = __webpack_require__(60);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initPassphraseView = exports.initPassphraseView = function initPassphraseView(payload) {
    (0, _common.showView)('passphrase');

    var view = _common.container.getElementsByClassName('passphrase')[0];
    var deviceNameSpan = _common.container.getElementsByClassName('device-name')[0];
    var input1 = _common.container.getElementsByClassName('pass')[0];
    var input2 = _common.container.getElementsByClassName('pass-check')[0];
    var toggle = _common.container.getElementsByClassName('show-passphrase')[0];
    var enter = _common.container.getElementsByClassName('submit')[0];

    var inputType = 'password';

    deviceNameSpan.innerText = payload.device.label;

    /* Functions */
    var validation = function validation() {
        if (input1.value !== input2.value) {
            enter.disabled = true;
            view.classList.add('not-valid');
        } else {
            enter.disabled = false;
            view.classList.remove('not-valid');
        }
    };
    var toggleInputFontStyle = function toggleInputFontStyle(input) {
        if (inputType === 'text') {
            // input.classList.add('text');
            input.setAttribute('type', 'text');

            // Since passphrase is visible there's no need to force user to fill the passphrase twice
            // - disable input2
            // - write automatically into input2 as the user is writing into input1 (listen to input event)
            input2.disabled = true;
            input2.value = input1.value;
            validation();
        } else if (inputType === 'password') {
            // input.classList.remove('text');
            input.setAttribute('type', 'password');

            input2.disabled = false;
            input2.value = '';
            validation();
        }
    };
    var handleToggleClick = function handleToggleClick() {
        inputType = inputType === 'text' ? 'password' : 'text';

        toggleInputFontStyle(input1);
        toggleInputFontStyle(input2);
    };
    var handleEnterClick = function handleEnterClick() {
        input1.blur();
        input2.blur();
        // eslint-disable-next-line no-use-before-define
        window.removeEventListener('keydown', handleWindowKeydown);

        (0, _common.showView)('loader');
        (0, _common.postMessage)(new _builder.UiMessage(UI.RECEIVE_PASSPHRASE, {
            save: true,
            value: input1.value
        }));
    };
    var handleWindowKeydown = function handleWindowKeydown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            enter.click();
        }
    };
    /* Functions: END */
    input1.addEventListener('input', function () {
        validation();
        if (inputType === 'text') {
            input2.value = input1.value;
            validation();
        }
    }, false);
    input2.addEventListener('input', validation, false);

    toggle.addEventListener('click', handleToggleClick);
    enter.addEventListener('click', handleEnterClick);
    window.addEventListener('keydown', handleWindowKeydown, false);

    input1.focus();
};

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.initPinView = undefined;

var _builder = __webpack_require__(21);

var _ui = __webpack_require__(16);

var UI = _interopRequireWildcard(_ui);

var _common = __webpack_require__(60);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var isSubmitButtonDisabled = function isSubmitButtonDisabled(isDisabled) {
    var submitButton = _common.container.getElementsByClassName('submit')[0];
    if (isDisabled) {
        submitButton.setAttribute('disabled', 'true');
    } else {
        submitButton.removeAttribute('disabled');
    }
};

var submit = function submit() {
    var button = _common.container.getElementsByClassName('submit')[0];
    button.click();
};

var addPin = function addPin(val) {
    var input = _common.container.getElementsByClassName('pin-input')[0];
    var maxInputLength = 9;

    if (input.value.length < maxInputLength) {
        input.value += val;

        if (input.value.length > 0) {
            isSubmitButtonDisabled(false);
        }
    }
};

var backspacePin = function backspacePin() {
    var input = _common.container.getElementsByClassName('pin-input')[0];
    var pin = input.value;

    input.value = pin.substring(0, pin.length - 1);

    if (!input.value) {
        isSubmitButtonDisabled(true);
    }
};

var pinKeyboardHandler = function pinKeyboardHandler(event) {
    event.preventDefault();
    switch (event.keyCode) {
        case 13:
            // enter,
            submit();
            break;
        // backspace
        case 8:
            backspacePin();
            break;

        // numeric and numpad
        case 49:
        case 97:
            addPin(1);
            break;
        case 50:
        case 98:
            addPin(2);
            break;
        case 51:
        case 99:
            addPin(3);
            break;
        case 52:
        case 100:
            addPin(4);
            break;
        case 53:
        case 101:
            addPin(5);
            break;
        case 54:
        case 102:
            addPin(6);
            break;
        case 55:
        case 103:
            addPin(7);
            break;
        case 56:
        case 104:
            addPin(8);
            break;
        case 57:
        case 105:
            addPin(9);
            break;
    }
};

var initPinView = exports.initPinView = function initPinView(payload) {
    (0, _common.showView)('pin');

    var deviceName = _common.container.getElementsByClassName('device-name')[0];
    var input = _common.container.getElementsByClassName('pin-input')[0];
    var enter = _common.container.getElementsByClassName('submit')[0];
    var backspace = _common.container.getElementsByClassName('pin-backspace')[0];
    var buttons = _common.container.querySelectorAll('[data-value]');

    deviceName.innerText = payload.device.label;

    for (var i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener('click', function (event) {
            if (event.target instanceof HTMLElement) {
                var val = event.target.getAttribute('data-value');
                if (val) {
                    addPin(+val);
                }
            }
        });
    }

    backspace.addEventListener('click', backspacePin);

    enter.addEventListener('click', function (event) {
        if (input.value.length > 0) {
            window.removeEventListener('keydown', pinKeyboardHandler, false);

            (0, _common.showView)('loader');
            (0, _common.postMessage)(new _builder.UiMessage(UI.RECEIVE_PIN, input.value));
        }
    });

    window.addEventListener('keydown', pinKeyboardHandler, false);
};

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _common = __webpack_require__(60);

Object.defineProperty(exports, 'init', {
  enumerable: true,
  get: function get() {
    return _common.init;
  }
});
Object.defineProperty(exports, 'showView', {
  enumerable: true,
  get: function get() {
    return _common.showView;
  }
});
Object.defineProperty(exports, 'postMessage', {
  enumerable: true,
  get: function get() {
    return _common.postMessage;
  }
});

var _pin = __webpack_require__(448);

Object.defineProperty(exports, 'initPinView', {
  enumerable: true,
  get: function get() {
    return _pin.initPinView;
  }
});

var _passphrase = __webpack_require__(447);

Object.defineProperty(exports, 'initPassphraseView', {
  enumerable: true,
  get: function get() {
    return _passphrase.initPassphraseView;
  }
});

var _invalidPassphrase = __webpack_require__(446);

Object.defineProperty(exports, 'initInvalidPassphraseView', {
  enumerable: true,
  get: function get() {
    return _invalidPassphrase.initInvalidPassphraseView;
  }
});

var _selectDevice = __webpack_require__(445);

Object.defineProperty(exports, 'selectDevice', {
  enumerable: true,
  get: function get() {
    return _selectDevice.selectDevice;
  }
});

var _selectAccount = __webpack_require__(444);

Object.defineProperty(exports, 'selectAccount', {
  enumerable: true,
  get: function get() {
    return _selectAccount.selectAccount;
  }
});

var _selectFee = __webpack_require__(443);

Object.defineProperty(exports, 'selectFee', {
  enumerable: true,
  get: function get() {
    return _selectFee.selectFee;
  }
});
Object.defineProperty(exports, 'updateCustomFee', {
  enumerable: true,
  get: function get() {
    return _selectFee.updateCustomFee;
  }
});

var _requestButton = __webpack_require__(442);

Object.defineProperty(exports, 'requestButton', {
  enumerable: true,
  get: function get() {
    return _requestButton.requestButton;
  }
});

var _permissions = __webpack_require__(441);

Object.defineProperty(exports, 'initPermissionsView', {
  enumerable: true,
  get: function get() {
    return _permissions.initPermissionsView;
  }
});

var _confirmation = __webpack_require__(440);

Object.defineProperty(exports, 'initConfirmationView', {
  enumerable: true,
  get: function get() {
    return _confirmation.initConfirmationView;
  }
});

var _browser = __webpack_require__(439);

Object.defineProperty(exports, 'initBrowserView', {
  enumerable: true,
  get: function get() {
    return _browser.initBrowserView;
  }
});

var _passphraseOnDevice = __webpack_require__(438);

Object.defineProperty(exports, 'passphraseOnDeviceView', {
  enumerable: true,
  get: function get() {
    return _passphraseOnDevice.passphraseOnDeviceView;
  }
});

var _firmwareRequiredUpdate = __webpack_require__(437);

Object.defineProperty(exports, 'firmwareRequiredUpdate', {
  enumerable: true,
  get: function get() {
    return _firmwareRequiredUpdate.firmwareRequiredUpdate;
  }
});

var _firmwareNotSupported = __webpack_require__(436);

Object.defineProperty(exports, 'firmwareNotSupported', {
  enumerable: true,
  get: function get() {
    return _firmwareNotSupported.firmwareNotSupported;
  }
});

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.showBridgeUpdateNotification = exports.showFirmwareUpdateNotification = undefined;

var _common = __webpack_require__(60);

var _FirmwareInfo = __webpack_require__(174);

var showFirmwareUpdateNotification = exports.showFirmwareUpdateNotification = function showFirmwareUpdateNotification(device) {
    var container = document.getElementsByClassName('notification')[0];
    var warning = container.querySelector('.firmware-update-notification');
    if (warning) {
        // already exists
        return;
    }
    if (!device.features) return;
    var features = device.features;

    var release = (0, _FirmwareInfo.getLatestRelease)([features.major_version, features.minor_version, features.patch_version]);
    if (!release) return;

    var view = _common.views.getElementsByClassName('firmware-update-notification');
    var notification = document.createElement('div');
    notification.className = 'firmware-update-notification notification-item';
    notification.innerHTML = view.item(0).innerHTML;

    var button = notification.getElementsByClassName('notification-button')[0];
    var url = release.channel === 'beta' ? 'https://beta-wallet.trezor.io/' : 'https://wallet.trezor.io/';
    var version = release.version.join('.');
    button.setAttribute('href', url + '?fw=' + version);

    container.appendChild(notification);

    var close = notification.querySelector('.close-icon');
    if (close) {
        close.addEventListener('click', function () {
            container.removeChild(notification);
        });
    }
};

var showBridgeUpdateNotification = exports.showBridgeUpdateNotification = function showBridgeUpdateNotification() {
    var container = document.getElementsByClassName('notification')[0];
    var warning = container.querySelector('.bridge-update-notification');
    if (warning) {
        // already exists
        return;
    }

    var view = _common.views.getElementsByClassName('bridge-update-notification');
    var notification = document.createElement('div');
    notification.className = 'bridge-update-notification notification-item';
    notification.innerHTML = view.item(0).innerHTML;

    container.appendChild(notification);

    var close = notification.querySelector('.close-icon');
    if (close) {
        close.addEventListener('click', function () {
            container.removeChild(notification);
        });
    }
};

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _message = __webpack_require__(192);

var _builder = __webpack_require__(21);

var _DataManager = __webpack_require__(66);

var _DataManager2 = _interopRequireDefault(_DataManager);

var _popup = __webpack_require__(106);

var POPUP = _interopRequireWildcard(_popup);

var _ui = __webpack_require__(16);

var UI = _interopRequireWildcard(_ui);

var _networkUtils = __webpack_require__(82);

var _common = __webpack_require__(60);

var _notification = __webpack_require__(450);

var _view = __webpack_require__(449);

var view = _interopRequireWildcard(_view);

var _popup2 = __webpack_require__(256);

var _popup3 = _interopRequireDefault(_popup2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleMessage = function handleMessage(event) {
    var data = event.data;
    if (!data) return;

    if (data.type === POPUP.INIT) {
        window.location.hash = '';
        // eslint-disable-next-line no-use-before-define
        onLoad();
        return;
    } else if (data.type === POPUP.EXTENSION_REQUEST) {
        var _broadcast = (0, _common.initBroadcast)(data.broadcast);
        _broadcast.onmessage = function (message) {
            return handleMessage(message);
        };
        // eslint-disable-next-line no-use-before-define
        onLoad();
        return;
    }

    var isMessagePort = event.target instanceof MessagePort || event.target instanceof BroadcastChannel;

    if (isMessagePort && data === POPUP.CLOSE) {
        if (window.opener) {
            window.opener.postMessage(new _builder.ResponseMessage(0, false, "Popup couldn't establish connection with iframe."), '*');
        }
        window.close();
        return;
    }
    // catch first message from iframe.js and gain settings
    if (isMessagePort && !_DataManager2.default.getSettings('origin') && data.type === POPUP.HANDSHAKE && data.payload) {
        // eslint-disable-next-line no-use-before-define
        init(data.payload);
        return;
    }

    // ignore messages from origin other then parent.window or white listed
    if (!isMessagePort && (0, _networkUtils.getOrigin)(event.origin) !== (0, _networkUtils.getOrigin)(document.referrer) && !_DataManager2.default.isWhitelisted(event.origin)) return;

    var message = (0, _message.parseMessage)(event.data);

    switch (message.type) {
        case UI.LOADING:
        case UI.REQUEST_UI_WINDOW:
            (0, _common.showView)('loader');
            break;
        case UI.SET_OPERATION:
            if (typeof message.payload === 'string') {
                (0, _common.setOperation)(message.payload);
            }
            break;
        case UI.TRANSPORT:
            (0, _common.showView)('transport');
            break;
        case UI.SELECT_DEVICE:
            view.selectDevice(message.payload);
            break;
        case UI.SELECT_ACCOUNT:
            view.selectAccount(message.payload);
            break;
        case UI.SELECT_FEE:
            view.selectFee(message.payload);
            break;
        case UI.UPDATE_CUSTOM_FEE:
            view.updateCustomFee(message.payload);
            break;
        case UI.INSUFFICIENT_FUNDS:
            (0, _common.showView)('insufficient-funds');
            break;
        case UI.REQUEST_BUTTON:
            view.requestButton(message.payload);
            break;

        case UI.BOOTLOADER:
            (0, _common.showView)('bootloader');
            break;
        case UI.INITIALIZE:
            (0, _common.showView)('initialize');
            break;
        case UI.SEEDLESS:
            (0, _common.showView)('seedless');
            break;
        case UI.FIRMWARE:
            view.firmwareRequiredUpdate(message.payload);
            break;
        case UI.FIRMWARE_NOT_SUPPORTED:
            view.firmwareNotSupported(message.payload);
            break;
        case UI.FIRMWARE_OUTDATED:
            (0, _notification.showFirmwareUpdateNotification)(message.payload);
            break;
        case UI.BROWSER_NOT_SUPPORTED:
        case UI.BROWSER_OUTDATED:
            view.initBrowserView(message.payload);
            break;

        case UI.REQUEST_PERMISSION:
            view.initPermissionsView(message.payload);
            break;
        case UI.REQUEST_CONFIRMATION:
            view.initConfirmationView(message.payload);
            break;
        case UI.REQUEST_PIN:
            view.initPinView(message.payload);
            break;
        case UI.INVALID_PIN:
            (0, _common.showView)('invalid-pin');
            break;
        case UI.REQUEST_PASSPHRASE:
            view.initPassphraseView(message.payload);
            break;
        case UI.REQUEST_PASSPHRASE_ON_DEVICE:
            view.passphraseOnDeviceView(message.payload);
            break;
        case UI.INVALID_PASSPHRASE:
            view.initInvalidPassphraseView(message.payload);
            break;
    }
};
// eslint-disable-next-line no-unused-vars


var init = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(payload) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (payload) {
                            _context.next = 2;
                            break;
                        }

                        return _context.abrupt('return');

                    case 2:
                        _context.next = 4;
                        return _DataManager2.default.load(payload.settings);

                    case 4:
                        (0, _common.setOperation)(payload.method || '');

                        if (payload.transport && payload.transport.outdated) {
                            (0, _notification.showBridgeUpdateNotification)();
                        }

                        (0, _common.postMessage)(new _builder.UiMessage(POPUP.HANDSHAKE));

                        // pass popup console to iframe
                        // popupConsole(POPUP.LOG, postMessage);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function init(_x) {
        return _ref.apply(this, arguments);
    };
}();

var onLoad = function onLoad() {
    if (window.location.hash.length > 0) {
        if (window.location.hash.indexOf('unsupported') >= 0) {
            view.initBrowserView({
                name: '',
                osname: '',
                outdated: false,
                supported: false,
                mobile: false
            });
        } else {
            if (window.opener) {
                window.opener.postMessage(POPUP.INIT, '*');
            } else {
                window.postMessage(POPUP.INIT, window.location.origin);
            }
        }
        return;
    }

    // if don't have access to opener
    // request a content-script of extension
    if (!window.opener && !_common.broadcast) {
        window.postMessage(POPUP.EXTENSION_REQUEST, window.location.origin);
        return;
    }

    window.location.hash = '';
    view.init();

    if (!_common.broadcast) {
        // future communication will be thru MessageChannel
        // $FlowIssue (Event !== MessageEvent)
        _common.channel.port1.onmessage = function (event) {
            return handleMessage(event);
        };
    }

    (0, _common.postMessage)(new _builder.UiMessage(POPUP.OPENED));
};

window.addEventListener('load', onLoad, false);
window.addEventListener('message', handleMessage, false);

window.addEventListener('beforeunload', function () {
    // TODO
});

// global method used in html-inline elements
window.closeWindow = function () {
    setTimeout(function () {
        window.postMessage('window.close', window.location.origin);
        window.close();
    }, 100);
};

/***/ })
/******/ ])["default"];
});