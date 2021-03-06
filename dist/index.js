/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 911:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/* unused reexport */ __nccwpck_require__(99)


/***/ }),

/***/ 99:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;
var Breadcrumb = /*#__PURE__*/function () {
  function Breadcrumb(message, metadata, type, timestamp) {
    if (timestamp === void 0) {
      timestamp = new Date();
    }

    this.type = type;
    this.message = message;
    this.metadata = metadata;
    this.timestamp = timestamp;
  }

  var _proto = Breadcrumb.prototype;

  _proto.toJSON = function toJSON() {
    return {
      type: this.type,
      name: this.message,
      timestamp: this.timestamp,
      metaData: this.metadata
    };
  };

  return Breadcrumb;
}();

var _$Breadcrumb_1 = Breadcrumb;

var _$breadcrumbTypes_6 = ['navigation', 'request', 'process', 'log', 'user', 'state', 'error', 'manual'];

// Array#reduce
var _$reduce_16 = function (arr, fn, accum) {
  var val = accum;

  for (var i = 0, len = arr.length; i < len; i++) {
    val = fn(val, arr[i], i, arr);
  }

  return val;
};

/* removed: var _$reduce_16 = require('./reduce'); */; // Array#filter


var _$filter_11 = function (arr, fn) {
  return _$reduce_16(arr, function (accum, item, i, arr) {
    return !fn(item, i, arr) ? accum : accum.concat(item);
  }, []);
};

/* removed: var _$reduce_16 = require('./reduce'); */; // Array#includes


var _$includes_12 = function (arr, x) {
  return _$reduce_16(arr, function (accum, item, i, arr) {
    return accum === true || item === x;
  }, false);
};

// Array#isArray
var _$isArray_13 = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

/* eslint-disable-next-line no-prototype-builtins */
var _hasDontEnumBug = !{
  toString: null
}.propertyIsEnumerable('toString');

var _dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor']; // Object#keys

var _$keys_14 = function (obj) {
  // stripped down version of
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Keys
  var result = [];
  var prop;

  for (prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) result.push(prop);
  }

  if (!_hasDontEnumBug) return result;

  for (var i = 0, len = _dontEnums.length; i < len; i++) {
    if (Object.prototype.hasOwnProperty.call(obj, _dontEnums[i])) result.push(_dontEnums[i]);
  }

  return result;
};

var _$intRange_24 = function (min, max) {
  if (min === void 0) {
    min = 1;
  }

  if (max === void 0) {
    max = Infinity;
  }

  return function (value) {
    return typeof value === 'number' && parseInt('' + value, 10) === value && value >= min && value <= max;
  };
};

/* removed: var _$filter_11 = require('../es-utils/filter'); */;

/* removed: var _$isArray_13 = require('../es-utils/is-array'); */;

var _$listOfFunctions_25 = function (value) {
  return typeof value === 'function' || _$isArray_13(value) && _$filter_11(value, function (f) {
    return typeof f === 'function';
  }).length === value.length;
};

var _$stringWithLength_26 = function (value) {
  return typeof value === 'string' && !!value.length;
};

var _$config_3 = {};
/* removed: var _$filter_11 = require('./lib/es-utils/filter'); */;

/* removed: var _$reduce_16 = require('./lib/es-utils/reduce'); */;

/* removed: var _$keys_14 = require('./lib/es-utils/keys'); */;

/* removed: var _$isArray_13 = require('./lib/es-utils/is-array'); */;

/* removed: var _$includes_12 = require('./lib/es-utils/includes'); */;

/* removed: var _$intRange_24 = require('./lib/validators/int-range'); */;

/* removed: var _$stringWithLength_26 = require('./lib/validators/string-with-length'); */;

/* removed: var _$listOfFunctions_25 = require('./lib/validators/list-of-functions'); */;

/* removed: var _$breadcrumbTypes_6 = require('./lib/breadcrumb-types'); */;

var defaultErrorTypes = function () {
  return {
    unhandledExceptions: true,
    unhandledRejections: true
  };
};

_$config_3.schema = {
  apiKey: {
    defaultValue: function () {
      return null;
    },
    message: 'is required',
    validate: _$stringWithLength_26
  },
  appVersion: {
    defaultValue: function () {
      return undefined;
    },
    message: 'should be a string',
    validate: function (value) {
      return value === undefined || _$stringWithLength_26(value);
    }
  },
  appType: {
    defaultValue: function () {
      return undefined;
    },
    message: 'should be a string',
    validate: function (value) {
      return value === undefined || _$stringWithLength_26(value);
    }
  },
  autoDetectErrors: {
    defaultValue: function () {
      return true;
    },
    message: 'should be true|false',
    validate: function (value) {
      return value === true || value === false;
    }
  },
  enabledErrorTypes: {
    defaultValue: function () {
      return defaultErrorTypes();
    },
    message: 'should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }',
    allowPartialObject: true,
    validate: function (value) {
      // ensure we have an object
      if (typeof value !== 'object' || !value) return false;
      var providedKeys = _$keys_14(value);
      var defaultKeys = _$keys_14(defaultErrorTypes()); // ensure it only has a subset of the allowed keys

      if (_$filter_11(providedKeys, function (k) {
        return _$includes_12(defaultKeys, k);
      }).length < providedKeys.length) return false; // ensure all of the values are boolean

      if (_$filter_11(_$keys_14(value), function (k) {
        return typeof value[k] !== 'boolean';
      }).length > 0) return false;
      return true;
    }
  },
  onError: {
    defaultValue: function () {
      return [];
    },
    message: 'should be a function or array of functions',
    validate: _$listOfFunctions_25
  },
  onSession: {
    defaultValue: function () {
      return [];
    },
    message: 'should be a function or array of functions',
    validate: _$listOfFunctions_25
  },
  onBreadcrumb: {
    defaultValue: function () {
      return [];
    },
    message: 'should be a function or array of functions',
    validate: _$listOfFunctions_25
  },
  endpoints: {
    defaultValue: function () {
      return {
        notify: 'https://notify.bugsnag.com',
        sessions: 'https://sessions.bugsnag.com'
      };
    },
    message: 'should be an object containing endpoint URLs { notify, sessions }',
    validate: function (val) {
      return (// first, ensure it's an object
        val && typeof val === 'object' && // notify and sessions must always be set
        _$stringWithLength_26(val.notify) && _$stringWithLength_26(val.sessions) && // ensure no keys other than notify/session are set on endpoints object
        _$filter_11(_$keys_14(val), function (k) {
          return !_$includes_12(['notify', 'sessions'], k);
        }).length === 0
      );
    }
  },
  autoTrackSessions: {
    defaultValue: function (val) {
      return true;
    },
    message: 'should be true|false',
    validate: function (val) {
      return val === true || val === false;
    }
  },
  enabledReleaseStages: {
    defaultValue: function () {
      return null;
    },
    message: 'should be an array of strings',
    validate: function (value) {
      return value === null || _$isArray_13(value) && _$filter_11(value, function (f) {
        return typeof f === 'string';
      }).length === value.length;
    }
  },
  releaseStage: {
    defaultValue: function () {
      return 'production';
    },
    message: 'should be a string',
    validate: function (value) {
      return typeof value === 'string' && value.length;
    }
  },
  maxBreadcrumbs: {
    defaultValue: function () {
      return 25;
    },
    message: 'should be a number ???100',
    validate: function (value) {
      return _$intRange_24(0, 100)(value);
    }
  },
  enabledBreadcrumbTypes: {
    defaultValue: function () {
      return _$breadcrumbTypes_6;
    },
    message: "should be null or a list of available breadcrumb types (" + _$breadcrumbTypes_6.join(',') + ")",
    validate: function (value) {
      return value === null || _$isArray_13(value) && _$reduce_16(value, function (accum, maybeType) {
        if (accum === false) return accum;
        return _$includes_12(_$breadcrumbTypes_6, maybeType);
      }, true);
    }
  },
  context: {
    defaultValue: function () {
      return undefined;
    },
    message: 'should be a string',
    validate: function (value) {
      return value === undefined || typeof value === 'string';
    }
  },
  user: {
    defaultValue: function () {
      return {};
    },
    message: 'should be an object with { id, email, name } properties',
    validate: function (value) {
      return value === null || value && _$reduce_16(_$keys_14(value), function (accum, key) {
        return accum && _$includes_12(['id', 'email', 'name'], key);
      }, true);
    }
  },
  metadata: {
    defaultValue: function () {
      return {};
    },
    message: 'should be an object',
    validate: function (value) {
      return typeof value === 'object' && value !== null;
    }
  },
  logger: {
    defaultValue: function () {
      return undefined;
    },
    message: 'should be null or an object with methods { debug, info, warn, error }',
    validate: function (value) {
      return !value || value && _$reduce_16(['debug', 'info', 'warn', 'error'], function (accum, method) {
        return accum && typeof value[method] === 'function';
      }, true);
    }
  },
  redactedKeys: {
    defaultValue: function () {
      return ['password'];
    },
    message: 'should be an array of strings|regexes',
    validate: function (value) {
      return _$isArray_13(value) && value.length === _$filter_11(value, function (s) {
        return typeof s === 'string' || s && typeof s.test === 'function';
      }).length;
    }
  },
  plugins: {
    defaultValue: function () {
      return [];
    },
    message: 'should be an array of plugin objects',
    validate: function (value) {
      return _$isArray_13(value) && value.length === _$filter_11(value, function (p) {
        return p && typeof p === 'object' && typeof p.load === 'function';
      }).length;
    }
  }
};

var _$errorStackParser_9 = __nccwpck_require__(176);

// extends helper from babel
// https://github.com/babel/babel/blob/916429b516e6466fd06588ee820e40e025d7f3a3/packages/babel-helpers/src/helpers.js#L377-L393
var _$assign_10 = function (target) {
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

/* removed: var _$reduce_16 = require('./reduce'); */; // Array#map


var _$map_15 = function (arr, fn) {
  return _$reduce_16(arr, function (accum, item, i, arr) {
    return accum.concat(fn(item, i, arr));
  }, []);
};

// Given `err` which may be an error, does it have a stack property which is a string?
var _$hasStack_17 = function (err) {
  return !!err && (!!err.stack || !!err.stacktrace || !!err['opera#sourceloc']) && typeof (err.stack || err.stacktrace || err['opera#sourceloc']) === 'string' && err.stack !== err.name + ": " + err.message;
};

var _$iserror_18 = __nccwpck_require__(169);

/* removed: var _$assign_10 = require('./es-utils/assign'); */;

var add = function (state, section, keyOrObj, maybeVal) {
  var _updates;

  if (!section) return;
  var updates; // addMetadata("section", null) -> clears section

  if (keyOrObj === null) return clear(state, section); // normalise the two supported input types into object form

  if (typeof keyOrObj === 'object') updates = keyOrObj;
  if (typeof keyOrObj === 'string') updates = (_updates = {}, _updates[keyOrObj] = maybeVal, _updates); // exit if we don't have an updates object at this point

  if (!updates) return; // ensure a section with this name exists

  if (!state[section]) state[section] = {}; // merge the updates with the existing section

  state[section] = _$assign_10({}, state[section], updates);
};

var get = function (state, section, key) {
  if (typeof section !== 'string') return undefined;

  if (!key) {
    return state[section];
  }

  if (state[section]) {
    return state[section][key];
  }

  return undefined;
};

var clear = function (state, section, key) {
  if (typeof section !== 'string') return; // clear an entire section

  if (!key) {
    delete state[section];
    return;
  } // clear a single value from a section


  if (state[section]) {
    delete state[section][key];
  }
};

var _$metadataDelegate_20 = {
  add: add,
  get: get,
  clear: clear
};

/* removed: var _$errorStackParser_9 = require('./lib/error-stack-parser'); */;

var StackGenerator = __nccwpck_require__(236);

/* removed: var _$hasStack_17 = require('./lib/has-stack'); */;

/* removed: var _$map_15 = require('./lib/es-utils/map'); */;

/* removed: var _$reduce_16 = require('./lib/es-utils/reduce'); */;

/* removed: var _$filter_11 = require('./lib/es-utils/filter'); */;

/* removed: var _$assign_10 = require('./lib/es-utils/assign'); */;

/* removed: var _$metadataDelegate_20 = require('./lib/metadata-delegate'); */;

/* removed: var _$iserror_18 = require('./lib/iserror'); */;

var Event = /*#__PURE__*/function () {
  function Event(errorClass, errorMessage, stacktrace, handledState, originalError) {
    if (stacktrace === void 0) {
      stacktrace = [];
    }

    if (handledState === void 0) {
      handledState = defaultHandledState();
    }

    this.apiKey = undefined;
    this.context = undefined;
    this.groupingHash = undefined;
    this.originalError = originalError;
    this._handledState = handledState;
    this.severity = this._handledState.severity;
    this.unhandled = this._handledState.unhandled;
    this.app = {};
    this.device = {};
    this.request = {};
    this.breadcrumbs = [];
    this.threads = [];
    this._metadata = {};
    this._user = {};
    this._session = undefined;
    this.errors = [{
      errorClass: ensureString(errorClass),
      errorMessage: ensureString(errorMessage),
      type: Event.__type,
      stacktrace: _$reduce_16(stacktrace, function (accum, frame) {
        var f = formatStackframe(frame); // don't include a stackframe if none of its properties are defined

        try {
          if (JSON.stringify(f) === '{}') return accum;
          return accum.concat(f);
        } catch (e) {
          return accum;
        }
      }, [])
    }]; // Flags.
    // Note these are not initialised unless they are used
    // to save unnecessary bytes in the browser bundle

    /* this.attemptImmediateDelivery, default: true */
  }

  var _proto = Event.prototype;

  _proto.addMetadata = function addMetadata(section, keyOrObj, maybeVal) {
    return _$metadataDelegate_20.add(this._metadata, section, keyOrObj, maybeVal);
  };

  _proto.getMetadata = function getMetadata(section, key) {
    return _$metadataDelegate_20.get(this._metadata, section, key);
  };

  _proto.clearMetadata = function clearMetadata(section, key) {
    return _$metadataDelegate_20.clear(this._metadata, section, key);
  };

  _proto.getUser = function getUser() {
    return this._user;
  };

  _proto.setUser = function setUser(id, email, name) {
    this._user = {
      id: id,
      email: email,
      name: name
    };
  };

  _proto.toJSON = function toJSON() {
    return {
      payloadVersion: '4',
      exceptions: _$map_15(this.errors, function (er) {
        return _$assign_10({}, er, {
          message: er.errorMessage
        });
      }),
      severity: this.severity,
      unhandled: this._handledState.unhandled,
      severityReason: this._handledState.severityReason,
      app: this.app,
      device: this.device,
      request: this.request,
      breadcrumbs: this.breadcrumbs,
      context: this.context,
      groupingHash: this.groupingHash,
      metaData: this._metadata,
      user: this._user,
      session: this._session
    };
  };

  return Event;
}(); // takes a stacktrace.js style stackframe (https://github.com/stacktracejs/stackframe)
// and returns a Bugsnag compatible stackframe (https://docs.bugsnag.com/api/error-reporting/#json-payload)


var formatStackframe = function (frame) {
  var f = {
    file: frame.fileName,
    method: normaliseFunctionName(frame.functionName),
    lineNumber: frame.lineNumber,
    columnNumber: frame.columnNumber,
    code: undefined,
    inProject: undefined
  }; // Some instances result in no file:
  // - calling notify() from chrome's terminal results in no file/method.
  // - non-error exception thrown from global code in FF
  // This adds one.

  if (f.lineNumber > -1 && !f.file && !f.method) {
    f.file = 'global code';
  }

  return f;
};

var normaliseFunctionName = function (name) {
  return /^global code$/i.test(name) ? 'global code' : name;
};

var defaultHandledState = function () {
  return {
    unhandled: false,
    severity: 'warning',
    severityReason: {
      type: 'handledException'
    }
  };
};

var ensureString = function (str) {
  return typeof str === 'string' ? str : '';
}; // Helpers


Event.getStacktrace = function (error, errorFramesToSkip, backtraceFramesToSkip) {
  if (_$hasStack_17(error)) return _$errorStackParser_9.parse(error).slice(errorFramesToSkip); // error wasn't provided or didn't have a stacktrace so try to walk the callstack

  try {
    return _$filter_11(StackGenerator.backtrace(), function (frame) {
      return (frame.functionName || '').indexOf('StackGenerator$$') === -1;
    }).slice(1 + backtraceFramesToSkip);
  } catch (e) {
    return [];
  }
};

Event.create = function (maybeError, tolerateNonErrors, handledState, component, errorFramesToSkip, logger) {
  if (errorFramesToSkip === void 0) {
    errorFramesToSkip = 0;
  }

  var _normaliseError = normaliseError(maybeError, tolerateNonErrors, component, logger),
      error = _normaliseError[0],
      internalFrames = _normaliseError[1];

  var event;

  try {
    var stacktrace = Event.getStacktrace(error, // if an error was created/throw in the normaliseError() function, we need to
    // tell the getStacktrace() function to skip the number of frames we know will
    // be from our own functions. This is added to the number of frames deep we
    // were told about
    internalFrames > 0 ? 1 + internalFrames + errorFramesToSkip : 0, // if there's no stacktrace, the callstack may be walked to generated one.
    // this is how many frames should be removed because they come from our library
    1 + errorFramesToSkip);
    event = new Event(error.name, error.message, stacktrace, handledState, maybeError);
  } catch (e) {
    event = new Event(error.name, error.message, [], handledState, maybeError);
  }

  if (error.name === 'InvalidError') {
    event.addMetadata("" + component, 'non-error parameter', makeSerialisable(maybeError));
  }

  return event;
};

var makeSerialisable = function (err) {
  if (err === null) return 'null';
  if (err === undefined) return 'undefined';
  return err;
};

var normaliseError = function (maybeError, tolerateNonErrors, component, logger) {
  var error;
  var internalFrames = 0;

  var createAndLogInputError = function (reason) {
    if (logger) logger.warn(component + " received a non-error: \"" + reason + "\"");
    var err = new Error(component + " received a non-error. See \"" + component + "\" tab for more detail.");
    err.name = 'InvalidError';
    return err;
  }; // In some cases:
  //
  //  - the promise rejection handler (both in the browser and node)
  //  - the node uncaughtException handler
  //
  // We are really limited in what we can do to get a stacktrace. So we use the
  // tolerateNonErrors option to ensure that the resulting error communicates as
  // such.


  if (!tolerateNonErrors) {
    if (_$iserror_18(maybeError)) {
      error = maybeError;
    } else {
      error = createAndLogInputError(typeof maybeError);
      internalFrames += 2;
    }
  } else {
    switch (typeof maybeError) {
      case 'string':
      case 'number':
      case 'boolean':
        error = new Error(String(maybeError));
        internalFrames += 1;
        break;

      case 'function':
        error = createAndLogInputError('function');
        internalFrames += 2;
        break;

      case 'object':
        if (maybeError !== null && _$iserror_18(maybeError)) {
          error = maybeError;
        } else if (maybeError !== null && hasNecessaryFields(maybeError)) {
          error = new Error(maybeError.message || maybeError.errorMessage);
          error.name = maybeError.name || maybeError.errorClass;
          internalFrames += 1;
        } else {
          error = createAndLogInputError(maybeError === null ? 'null' : 'unsupported object');
          internalFrames += 2;
        }

        break;

      default:
        error = createAndLogInputError('nothing');
        internalFrames += 2;
    }
  }

  if (!_$hasStack_17(error)) {
    // in IE10/11 a new Error() doesn't have a stacktrace until you throw it, so try that here
    try {
      throw error;
    } catch (e) {
      if (_$hasStack_17(e)) {
        error = e; // if the error only got a stacktrace after we threw it here, we know it
        // will only have one extra internal frame from this function, regardless
        // of whether it went through createAndLogInputError() or not

        internalFrames = 1;
      }
    }
  }

  return [error, internalFrames];
}; // default value for stacktrace.type


Event.__type = 'browserjs';

var hasNecessaryFields = function (error) {
  return (typeof error.name === 'string' || typeof error.errorClass === 'string') && (typeof error.message === 'string' || typeof error.errorMessage === 'string');
};

var _$Event_4 = Event;

// This is a heavily modified/simplified version of
//   https://github.com/othiym23/async-some
// with the logic flipped so that it is akin to the
// synchronous "every" method instead of "some".
// run the asynchronous test function (fn) over each item in the array (arr)
// in series until:
//   - fn(item, cb) => calls cb(null, false)
//   - or the end of the array is reached
// the callback (cb) will be passed (null, false) if any of the items in arr
// caused fn to call back with false, otherwise it will be passed (null, true)
var _$asyncEvery_5 = function (arr, fn, cb) {
  var index = 0;

  var next = function () {
    if (index >= arr.length) return cb(null, true);
    fn(arr[index], function (err, result) {
      if (err) return cb(err);
      if (result === false) return cb(null, false);
      index++;
      next();
    });
  };

  next();
};

/* removed: var _$asyncEvery_5 = require('./async-every'); */;

var _$callbackRunner_7 = function (callbacks, event, onCallbackError, cb) {
  // This function is how we support different kinds of callback:
  //  - synchronous - return value
  //  - node-style async with callback - cb(err, value)
  //  - promise/thenable - resolve(value)
  // It normalises each of these into the lowest common denominator ??? a node-style callback
  var runMaybeAsyncCallback = function (fn, cb) {
    if (typeof fn !== 'function') return cb(null);

    try {
      // if function appears sync???
      if (fn.length !== 2) {
        var ret = fn(event); // check if it returned a "thenable" (promise)

        if (ret && typeof ret.then === 'function') {
          return ret.then( // resolve
          function (val) {
            return setTimeout(function () {
              return cb(null, val);
            });
          }, // reject
          function (err) {
            setTimeout(function () {
              onCallbackError(err);
              return cb(null, true);
            });
          });
        }

        return cb(null, ret);
      } // if function is async???


      fn(event, function (err, result) {
        if (err) {
          onCallbackError(err);
          return cb(null);
        }

        cb(null, result);
      });
    } catch (e) {
      onCallbackError(e);
      cb(null);
    }
  };

  _$asyncEvery_5(callbacks, runMaybeAsyncCallback, cb);
};

var _$syncCallbackRunner_23 = function (callbacks, callbackArg, callbackType, logger) {
  var ignore = false;
  var cbs = callbacks.slice();

  while (!ignore) {
    if (!cbs.length) break;

    try {
      ignore = cbs.pop()(callbackArg) === false;
    } catch (e) {
      logger.error("Error occurred in " + callbackType + " callback, continuing anyway\u2026");
      logger.error(e);
    }
  }

  return ignore;
};

var _$pad_29 = function pad(num, size) {
  var s = '000000000' + num;
  return s.substr(s.length - size);
};

/* removed: var _$pad_29 = require('./pad.js'); */;

var os = __nccwpck_require__(37),
    padding = 2,
    pid = _$pad_29(process.pid.toString(36), padding),
    hostname = os.hostname(),
    length = hostname.length,
    hostId = _$pad_29(hostname.split('').reduce(function (prev, char) {
  return +prev + char.charCodeAt(0);
}, +length + 36).toString(36), padding);

var _$fingerprint_28 = function fingerprint() {
  return pid + hostId;
};

/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */
/* removed: var _$fingerprint_28 = require('./lib/fingerprint.js'); */;

/* removed: var _$pad_29 = require('./lib/pad.js'); */;

var c = 0,
    blockSize = 4,
    base = 36,
    discreteValues = Math.pow(base, blockSize);

function randomBlock() {
  return _$pad_29((Math.random() * discreteValues << 0).toString(base), blockSize);
}

function safeCounter() {
  c = c < discreteValues ? c : 0;
  c++; // this is not subliminal

  return c - 1;
}

function cuid() {
  // Starting with a lowercase letter makes
  // it HTML element ID friendly.
  var letter = 'c',
      // hard-coded allows for sequential access
  // timestamp
  // warning: this exposes the exact date and time
  // that the uid was created.
  timestamp = new Date().getTime().toString(base),
      // Prevent same-machine collisions.
  counter = _$pad_29(safeCounter().toString(base), blockSize),
      // A few chars to generate distinct ids for different
  // clients (so different computers are far less
  // likely to generate the same id)
  print = _$fingerprint_28(),
      // Grab some more chars from Math.random()
  random = randomBlock() + randomBlock();
  return letter + timestamp + counter + print + random;
}

cuid.fingerprint = _$fingerprint_28;
var _$cuid_27 = cuid;

/* removed: var _$cuid_27 = require('@bugsnag/cuid'); */;

var Session = /*#__PURE__*/function () {
  function Session() {
    this.id = _$cuid_27();
    this.startedAt = new Date();
    this._handled = 0;
    this._unhandled = 0;
    this._user = {};
    this.app = {};
    this.device = {};
  }

  var _proto = Session.prototype;

  _proto.getUser = function getUser() {
    return this._user;
  };

  _proto.setUser = function setUser(id, email, name) {
    this._user = {
      id: id,
      email: email,
      name: name
    };
  };

  _proto.toJSON = function toJSON() {
    return {
      id: this.id,
      startedAt: this.startedAt,
      events: {
        handled: this._handled,
        unhandled: this._unhandled
      }
    };
  };

  _proto._track = function _track(event) {
    this[event._handledState.unhandled ? '_unhandled' : '_handled'] += 1;
  };

  return Session;
}();

var _$Session_31 = Session;

/* removed: var _$config_3 = require('./config'); */;

/* removed: var _$Event_4 = require('./event'); */;

/* removed: var _$Breadcrumb_1 = require('./breadcrumb'); */;

/* removed: var _$Session_31 = require('./session'); */;

/* removed: var _$map_15 = require('./lib/es-utils/map'); */;

/* removed: var _$includes_12 = require('./lib/es-utils/includes'); */;

/* removed: var _$filter_11 = require('./lib/es-utils/filter'); */;

/* removed: var _$reduce_16 = require('./lib/es-utils/reduce'); */;

/* removed: var _$keys_14 = require('./lib/es-utils/keys'); */;

/* removed: var _$assign_10 = require('./lib/es-utils/assign'); */;

/* removed: var _$callbackRunner_7 = require('./lib/callback-runner'); */;

/* removed: var _$metadataDelegate_20 = require('./lib/metadata-delegate'); */;

/* removed: var _$syncCallbackRunner_23 = require('./lib/sync-callback-runner'); */;

/* removed: var _$breadcrumbTypes_6 = require('./lib/breadcrumb-types'); */;

var noop = function () {};

var Client = /*#__PURE__*/function () {
  function Client(configuration, schema, internalPlugins, notifier) {
    var _this = this;

    if (schema === void 0) {
      schema = _$config_3.schema;
    }

    if (internalPlugins === void 0) {
      internalPlugins = [];
    }

    // notifier id
    this._notifier = notifier; // intialise opts and config

    this._config = {};
    this._schema = schema; // i/o

    this._delivery = {
      sendSession: noop,
      sendEvent: noop
    };
    this._logger = {
      debug: noop,
      info: noop,
      warn: noop,
      error: noop
    }; // plugins

    this._plugins = {}; // state

    this._breadcrumbs = [];
    this._session = null;
    this._metadata = {};
    this._context = undefined;
    this._user = {}; // callbacks:
    //  e: onError
    //  s: onSession
    //  sp: onSessionPayload
    //  b: onBreadcrumb
    // (note these names are minified by hand because object
    // properties are not safe to minify automatically)

    this._cbs = {
      e: [],
      s: [],
      sp: [],
      b: []
    }; // expose internal constructors

    this.Client = Client;
    this.Event = _$Event_4;
    this.Breadcrumb = _$Breadcrumb_1;
    this.Session = _$Session_31;
    this._config = this._configure(configuration, internalPlugins);
    _$map_15(internalPlugins.concat(this._config.plugins), function (pl) {
      if (pl) _this._loadPlugin(pl);
    }); // when notify() is called we need to know how many frames are from our own source
    // this inital value is 1 not 0 because we wrap notify() to ensure it is always
    // bound to have the client as its `this` value ??? see below.

    this._depth = 1;
    var self = this;
    var notify = this.notify;

    this.notify = function () {
      return notify.apply(self, arguments);
    };
  }

  var _proto = Client.prototype;

  _proto.addMetadata = function addMetadata(section, keyOrObj, maybeVal) {
    return _$metadataDelegate_20.add(this._metadata, section, keyOrObj, maybeVal);
  };

  _proto.getMetadata = function getMetadata(section, key) {
    return _$metadataDelegate_20.get(this._metadata, section, key);
  };

  _proto.clearMetadata = function clearMetadata(section, key) {
    return _$metadataDelegate_20.clear(this._metadata, section, key);
  };

  _proto.getContext = function getContext() {
    return this._context;
  };

  _proto.setContext = function setContext(c) {
    this._context = c;
  };

  _proto._configure = function _configure(opts, internalPlugins) {
    var schema = _$reduce_16(internalPlugins, function (schema, plugin) {
      if (plugin && plugin.configSchema) return _$assign_10({}, schema, plugin.configSchema);
      return schema;
    }, this._schema); // accumulate configuration and error messages

    var _reduce = _$reduce_16(_$keys_14(schema), function (accum, key) {
      var defaultValue = schema[key].defaultValue(opts[key]);

      if (opts[key] !== undefined) {
        var valid = schema[key].validate(opts[key]);

        if (!valid) {
          accum.errors[key] = schema[key].message;
          accum.config[key] = defaultValue;
        } else {
          if (schema[key].allowPartialObject) {
            accum.config[key] = _$assign_10(defaultValue, opts[key]);
          } else {
            accum.config[key] = opts[key];
          }
        }
      } else {
        accum.config[key] = defaultValue;
      }

      return accum;
    }, {
      errors: {},
      config: {}
    }),
        errors = _reduce.errors,
        config = _reduce.config;

    if (schema.apiKey) {
      // missing api key is the only fatal error
      if (!config.apiKey) throw new Error('No Bugsnag API Key set'); // warn about an apikey that is not of the expected format

      if (!/^[0-9a-f]{32}$/i.test(config.apiKey)) errors.apiKey = 'should be a string of 32 hexadecimal characters';
    } // update and elevate some options


    this._metadata = _$assign_10({}, config.metadata);
    this._user = _$assign_10({}, config.user);
    this._context = config.context;
    if (config.logger) this._logger = config.logger; // add callbacks

    if (config.onError) this._cbs.e = this._cbs.e.concat(config.onError);
    if (config.onBreadcrumb) this._cbs.b = this._cbs.b.concat(config.onBreadcrumb);
    if (config.onSession) this._cbs.s = this._cbs.s.concat(config.onSession); // finally warn about any invalid config where we fell back to the default

    if (_$keys_14(errors).length) {
      this._logger.warn(generateConfigErrorMessage(errors, opts));
    }

    return config;
  };

  _proto.getUser = function getUser() {
    return this._user;
  };

  _proto.setUser = function setUser(id, email, name) {
    this._user = {
      id: id,
      email: email,
      name: name
    };
  };

  _proto._loadPlugin = function _loadPlugin(plugin) {
    var result = plugin.load(this); // JS objects are not the safest way to store arbitrarily keyed values,
    // so bookend the key with some characters that prevent tampering with
    // stuff like __proto__ etc. (only store the result if the plugin had a
    // name)

    if (plugin.name) this._plugins["~" + plugin.name + "~"] = result;
    return this;
  };

  _proto.getPlugin = function getPlugin(name) {
    return this._plugins["~" + name + "~"];
  };

  _proto._setDelivery = function _setDelivery(d) {
    this._delivery = d(this);
  };

  _proto.startSession = function startSession() {
    var session = new _$Session_31();
    session.app.releaseStage = this._config.releaseStage;
    session.app.version = this._config.appVersion;
    session.app.type = this._config.appType;
    session._user = _$assign_10({}, this._user); // run onSession callbacks

    var ignore = _$syncCallbackRunner_23(this._cbs.s, session, 'onSession', this._logger);

    if (ignore) {
      this._logger.debug('Session not started due to onSession callback');

      return this;
    }

    return this._sessionDelegate.startSession(this, session);
  };

  _proto.addOnError = function addOnError(fn, front) {
    if (front === void 0) {
      front = false;
    }

    this._cbs.e[front ? 'unshift' : 'push'](fn);
  };

  _proto.removeOnError = function removeOnError(fn) {
    this._cbs.e = _$filter_11(this._cbs.e, function (f) {
      return f !== fn;
    });
  };

  _proto._addOnSessionPayload = function _addOnSessionPayload(fn) {
    this._cbs.sp.push(fn);
  };

  _proto.addOnSession = function addOnSession(fn) {
    this._cbs.s.push(fn);
  };

  _proto.removeOnSession = function removeOnSession(fn) {
    this._cbs.s = _$filter_11(this._cbs.s, function (f) {
      return f !== fn;
    });
  };

  _proto.addOnBreadcrumb = function addOnBreadcrumb(fn, front) {
    if (front === void 0) {
      front = false;
    }

    this._cbs.b[front ? 'unshift' : 'push'](fn);
  };

  _proto.removeOnBreadcrumb = function removeOnBreadcrumb(fn) {
    this._cbs.b = _$filter_11(this._cbs.b, function (f) {
      return f !== fn;
    });
  };

  _proto.pauseSession = function pauseSession() {
    return this._sessionDelegate.pauseSession(this);
  };

  _proto.resumeSession = function resumeSession() {
    return this._sessionDelegate.resumeSession(this);
  };

  _proto.leaveBreadcrumb = function leaveBreadcrumb(message, metadata, type) {
    // coerce bad values so that the defaults get set
    message = typeof message === 'string' ? message : '';
    type = typeof type === 'string' && _$includes_12(_$breadcrumbTypes_6, type) ? type : 'manual';
    metadata = typeof metadata === 'object' && metadata !== null ? metadata : {}; // if no message, discard

    if (!message) return;
    var crumb = new _$Breadcrumb_1(message, metadata, type); // run onBreadcrumb callbacks

    var ignore = _$syncCallbackRunner_23(this._cbs.b, crumb, 'onBreadcrumb', this._logger);

    if (ignore) {
      this._logger.debug('Breadcrumb not attached due to onBreadcrumb callback');

      return;
    } // push the valid crumb onto the queue and maintain the length


    this._breadcrumbs.push(crumb);

    if (this._breadcrumbs.length > this._config.maxBreadcrumbs) {
      this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs);
    }
  };

  _proto._isBreadcrumbTypeEnabled = function _isBreadcrumbTypeEnabled(type) {
    var types = this._config.enabledBreadcrumbTypes;
    return types === null || _$includes_12(types, type);
  };

  _proto.notify = function notify(maybeError, onError, cb) {
    if (cb === void 0) {
      cb = noop;
    }

    var event = _$Event_4.create(maybeError, true, undefined, 'notify()', this._depth + 1, this._logger);

    this._notify(event, onError, cb);
  };

  _proto._notify = function _notify(event, onError, cb) {
    var _this2 = this;

    if (cb === void 0) {
      cb = noop;
    }

    event.app = _$assign_10({}, event.app, {
      releaseStage: this._config.releaseStage,
      version: this._config.appVersion,
      type: this._config.appType
    });
    event.context = event.context || this._context;
    event._metadata = _$assign_10({}, event._metadata, this._metadata);
    event._user = _$assign_10({}, event._user, this._user);
    event.breadcrumbs = this._breadcrumbs.slice(); // exit early if events should not be sent on the current releaseStage

    if (this._config.enabledReleaseStages !== null && !_$includes_12(this._config.enabledReleaseStages, this._config.releaseStage)) {
      this._logger.warn('Event not sent due to releaseStage/enabledReleaseStages configuration');

      return cb(null, event);
    }

    var originalSeverity = event.severity;

    var onCallbackError = function (err) {
      // errors in callbacks are tolerated but we want to log them out
      _this2._logger.error('Error occurred in onError callback, continuing anyway???');

      _this2._logger.error(err);
    };

    var callbacks = [].concat(this._cbs.e).concat(onError);
    _$callbackRunner_7(callbacks, event, onCallbackError, function (err, shouldSend) {
      if (err) onCallbackError(err);

      if (!shouldSend) {
        _this2._logger.debug('Event not sent due to onError callback');

        return cb(null, event);
      }

      if (_this2._isBreadcrumbTypeEnabled('error')) {
        // only leave a crumb for the error if actually got sent
        Client.prototype.leaveBreadcrumb.call(_this2, event.errors[0].errorClass, {
          errorClass: event.errors[0].errorClass,
          errorMessage: event.errors[0].errorMessage,
          severity: event.severity
        }, 'error');
      }

      if (originalSeverity !== event.severity) {
        event._handledState.severityReason = {
          type: 'userCallbackSetSeverity'
        };
      }

      if (event.unhandled !== event._handledState.unhandled) {
        event._handledState.severityReason.unhandledOverridden = true;
        event._handledState.unhandled = event.unhandled;
      }

      if (_this2._session) {
        _this2._session._track(event);

        event._session = _this2._session;
      }

      _this2._delivery.sendEvent({
        apiKey: event.apiKey || _this2._config.apiKey,
        notifier: _this2._notifier,
        events: [event]
      }, function (err) {
        return cb(err, event);
      });
    });
  };

  return Client;
}();

var generateConfigErrorMessage = function (errors, rawInput) {
  var er = new Error("Invalid configuration\n" + _$map_15(_$keys_14(errors), function (key) {
    return "  - " + key + " " + errors[key] + ", got " + stringify(rawInput[key]);
  }).join('\n\n'));
  return er;
};

var stringify = function (val) {
  switch (typeof val) {
    case 'string':
    case 'number':
    case 'object':
      return JSON.stringify(val);

    default:
      return String(val);
  }
};

var _$Client_2 = Client;

var _$safeJsonStringify_30 = function (data, replacer, space, opts) {
  var redactedKeys = opts && opts.redactedKeys ? opts.redactedKeys : [];
  var redactedPaths = opts && opts.redactedPaths ? opts.redactedPaths : [];
  return JSON.stringify(prepareObjForSerialization(data, redactedKeys, redactedPaths), replacer, space);
};

var MAX_DEPTH = 20;
var MAX_EDGES = 25000;
var MIN_PRESERVED_DEPTH = 8;
var REPLACEMENT_NODE = '...';

function __isError_30(o) {
  return o instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(o));
}

function throwsMessage(err) {
  return '[Throws: ' + (err ? err.message : '?') + ']';
}

function find(haystack, needle) {
  for (var i = 0, len = haystack.length; i < len; i++) {
    if (haystack[i] === needle) return true;
  }

  return false;
} // returns true if the string `path` starts with any of the provided `paths`


function isDescendent(paths, path) {
  for (var i = 0, len = paths.length; i < len; i++) {
    if (path.indexOf(paths[i]) === 0) return true;
  }

  return false;
}

function shouldRedact(patterns, key) {
  for (var i = 0, len = patterns.length; i < len; i++) {
    if (typeof patterns[i] === 'string' && patterns[i].toLowerCase() === key.toLowerCase()) return true;
    if (patterns[i] && typeof patterns[i].test === 'function' && patterns[i].test(key)) return true;
  }

  return false;
}

function __isArray_30(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function safelyGetProp(obj, prop) {
  try {
    return obj[prop];
  } catch (err) {
    return throwsMessage(err);
  }
}

function prepareObjForSerialization(obj, redactedKeys, redactedPaths) {
  var seen = []; // store references to objects we have seen before

  var edges = 0;

  function visit(obj, path) {
    function edgesExceeded() {
      return path.length > MIN_PRESERVED_DEPTH && edges > MAX_EDGES;
    }

    edges++;
    if (path.length > MAX_DEPTH) return REPLACEMENT_NODE;
    if (edgesExceeded()) return REPLACEMENT_NODE;
    if (obj === null || typeof obj !== 'object') return obj;
    if (find(seen, obj)) return '[Circular]';
    seen.push(obj);

    if (typeof obj.toJSON === 'function') {
      try {
        // we're not going to count this as an edge because it
        // replaces the value of the currently visited object
        edges--;
        var fResult = visit(obj.toJSON(), path);
        seen.pop();
        return fResult;
      } catch (err) {
        return throwsMessage(err);
      }
    }

    var er = __isError_30(obj);

    if (er) {
      edges--;
      var eResult = visit({
        name: obj.name,
        message: obj.message
      }, path);
      seen.pop();
      return eResult;
    }

    if (__isArray_30(obj)) {
      var aResult = [];

      for (var i = 0, len = obj.length; i < len; i++) {
        if (edgesExceeded()) {
          aResult.push(REPLACEMENT_NODE);
          break;
        }

        aResult.push(visit(obj[i], path.concat('[]')));
      }

      seen.pop();
      return aResult;
    }

    var result = {};

    try {
      for (var prop in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) continue;

        if (isDescendent(redactedPaths, path.join('.')) && shouldRedact(redactedKeys, prop)) {
          result[prop] = '[REDACTED]';
          continue;
        }

        if (edgesExceeded()) {
          result[prop] = REPLACEMENT_NODE;
          break;
        }

        result[prop] = visit(safelyGetProp(obj, prop), path.concat(prop));
      }
    } catch (e) {}

    seen.pop();
    return result;
  }

  return visit(obj, []);
}

var _$jsonPayload_19 = {};
/* removed: var _$safeJsonStringify_30 = require('@bugsnag/safe-json-stringify'); */;

var EVENT_REDACTION_PATHS = ['events.[].metaData', 'events.[].breadcrumbs.[].metaData', 'events.[].request'];

_$jsonPayload_19.event = function (event, redactedKeys) {
  var payload = _$safeJsonStringify_30(event, null, null, {
    redactedPaths: EVENT_REDACTION_PATHS,
    redactedKeys: redactedKeys
  });

  if (payload.length > 10e5) {
    event.events[0]._metadata = {
      notifier: "WARNING!\nSerialized payload was " + payload.length / 10e5 + "MB (limit = 1MB)\nmetadata was removed"
    };
    payload = _$safeJsonStringify_30(event, null, null, {
      redactedPaths: EVENT_REDACTION_PATHS,
      redactedKeys: redactedKeys
    });
    if (payload.length > 10e5) throw new Error('payload exceeded 1MB limit');
  }

  return payload;
};

_$jsonPayload_19.session = function (event, redactedKeys) {
  var payload = _$safeJsonStringify_30(event, null, null);
  if (payload.length > 10e5) throw new Error('payload exceeded 1MB limit');
  return payload;
};

var http = __nccwpck_require__(685);

var https = __nccwpck_require__(687); // eslint-disable-next-line node/no-deprecated-api


var _require = __nccwpck_require__(310),
    parse = _require.parse;

var _$request_33 = function (_ref, cb) {
  var url = _ref.url,
      headers = _ref.headers,
      body = _ref.body,
      agent = _ref.agent;
  var didError = false;

  var onError = function (err) {
    if (didError) return;
    didError = true;
    cb(err);
  };

  var parsedUrl = parse(url);
  var secure = parsedUrl.protocol === 'https:';
  var transport = secure ? https : http;
  var req = transport.request({
    method: 'POST',
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    path: parsedUrl.path,
    headers: headers,
    agent: agent
  });
  req.on('error', onError);
  req.on('response', function (res) {
    bufferResponse(res, function (err, body) {
      if (err) return onError(err);

      if (res.statusCode < 200 || res.statusCode >= 300) {
        return onError(new Error("Bad statusCode from API: " + res.statusCode + "\n" + body));
      }

      cb(null, body);
    });
  });
  req.write(body);
  req.end();
};

var bufferResponse = function (stream, cb) {
  var data = '';
  stream.on('error', cb);
  stream.setEncoding('utf8');
  stream.on('data', function (d) {
    data += d;
  });
  stream.on('end', function () {
    return cb(null, data);
  });
};

/* removed: var _$jsonPayload_19 = require('@bugsnag/core/lib/json-payload'); */;

/* removed: var _$request_33 = require('./request'); */;

var _$delivery_32 = function (client) {
  return {
    sendEvent: function (event, cb) {
      if (cb === void 0) {
        cb = function () {};
      }

      var _cb = function (err) {
        if (err) client._logger.error("Event failed to send\u2026\n" + (err && err.stack ? err.stack : err), err);
        cb(err);
      };

      try {
        _$request_33({
          url: client._config.endpoints.notify,
          headers: {
            'Content-Type': 'application/json',
            'Bugsnag-Api-Key': event.apiKey || client._config.apiKey,
            'Bugsnag-Payload-Version': '4',
            'Bugsnag-Sent-At': new Date().toISOString()
          },
          body: _$jsonPayload_19.event(event, client._config.redactedKeys),
          agent: client._config.agent
        }, function (err, body) {
          return _cb(err);
        });
      } catch (e) {
        _cb(e);
      }
    },
    sendSession: function (session, cb) {
      if (cb === void 0) {
        cb = function () {};
      }

      var _cb = function (err) {
        if (err) client._logger.error("Session failed to send\u2026\n" + (err && err.stack ? err.stack : err), err);
        cb(err);
      };

      try {
        _$request_33({
          url: client._config.endpoints.sessions,
          headers: {
            'Content-Type': 'application/json',
            'Bugsnag-Api-Key': client._config.apiKey,
            'Bugsnag-Payload-Version': '1',
            'Bugsnag-Sent-At': new Date().toISOString()
          },
          body: _$jsonPayload_19.session(session, client._config.redactedKeys),
          agent: client._config.agent
        }, function (err) {
          return _cb(err);
        });
      } catch (e) {
        _cb(e);
      }
    }
  };
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var schema = _$config_3.schema;

/* removed: var _$stringWithLength_26 = require('@bugsnag/core/lib/validators/string-with-length'); */;

var __os_34 = __nccwpck_require__(37);

var _require2 = __nccwpck_require__(837),
    inspect = _require2.inspect;

var _$config_34 = {
  appType: _extends({}, schema.appType, {
    defaultValue: function () {
      return 'node';
    }
  }),
  projectRoot: {
    defaultValue: function () {
      return process.cwd();
    },
    validate: function (value) {
      return value === null || _$stringWithLength_26(value);
    },
    message: 'should be string'
  },
  hostname: {
    defaultValue: function () {
      return __os_34.hostname();
    },
    message: 'should be a string',
    validate: function (value) {
      return value === null || _$stringWithLength_26(value);
    }
  },
  logger: _extends({}, schema.logger, {
    defaultValue: function () {
      return getPrefixedConsole();
    }
  }),
  releaseStage: _extends({}, schema.releaseStage, {
    defaultValue: function () {
      return process.env.NODE_ENV || 'production';
    }
  }),
  agent: {
    defaultValue: function () {
      return undefined;
    },
    message: 'should be an HTTP(s) agent',
    validate: function (value) {
      return value === undefined || isAgent(value);
    }
  },
  onUncaughtException: {
    defaultValue: function () {
      return function (err, event, logger) {
        logger.error("Uncaught exception" + getContext(event) + ", the process will now terminate\u2026\n" + printError(err));
        process.exit(1);
      };
    },
    message: 'should be a function',
    validate: function (value) {
      return typeof value === 'function';
    }
  },
  onUnhandledRejection: {
    defaultValue: function () {
      return function (err, event, logger) {
        logger.error("Unhandled rejection" + getContext(event) + "\u2026\n" + printError(err));
      };
    },
    message: 'should be a function',
    validate: function (value) {
      return typeof value === 'function';
    }
  }
};

var printError = function (err) {
  return err && err.stack ? err.stack : inspect(err);
};

var getPrefixedConsole = function () {
  return ['debug', 'info', 'warn', 'error'].reduce(function (accum, method) {
    var consoleMethod = console[method] || console.log;
    accum[method] = consoleMethod.bind(console, '[bugsnag]');
    return accum;
  }, {});
};

var getContext = function (event) {
  return event.request && Object.keys(event.request).length ? " at " + event.request.httpMethod + " " + (event.request.path || event.request.url) : '';
};

var isAgent = function (value) {
  return typeof value === 'object' && value !== null || typeof value === 'boolean';
};

var appStart = new Date();

var reset = function () {
  appStart = new Date();
};

var _$app_36 = {
  name: 'appDuration',
  load: function (client) {
    client.addOnError(function (event) {
      var now = new Date();
      event.app.duration = now - appStart;
    }, true);
    return {
      reset: reset
    };
  }
};

var _$nodeFallbackStack_21 = {};
// The utilities in this file are used to save the stackframes from a known execution context
// to use when a subsequent error has no stack frames. This happens with a lot of
// node's builtin async callbacks when they return from the native layer with no context
// for example:
//
//   fs.readFile('does not exist', (err) => {
//     /* node 8 */
//     err.stack = "ENOENT: no such file or directory, open 'nope'"
//     /* node 4,6 */
//     err.stack = "Error: ENOENT: no such file or directory, open 'nope'\n    at Error (native)"
//   })
// Gets the stack string for the current execution context
_$nodeFallbackStack_21.getStack = function () {
  // slice(3) removes the first line + this function's frame + the caller's frame,
  // so the stack begins with the caller of this function
  return new Error().stack.split('\n').slice(3).join('\n');
}; // Given an Error and a fallbackStack from getStack(), use the fallbackStack
// if error.stack has no genuine stackframes (according to the example above)


_$nodeFallbackStack_21.maybeUseFallbackStack = function (err, fallbackStack) {
  var lines = err.stack.split('\n');

  if (lines.length === 1 || lines.length === 2 && /at Error \(native\)/.test(lines[1])) {
    err.stack = lines[0] + "\n" + fallbackStack;
  }

  return err;
};

var _$contextualize_37 = {};
/* eslint node/no-deprecated-api: [error, {ignoreModuleItems: ["domain"]}] */
var domain = __nccwpck_require__(639);

var getStack = _$nodeFallbackStack_21.getStack,
    maybeUseFallbackStack = _$nodeFallbackStack_21.maybeUseFallbackStack;

_$contextualize_37 = {
  name: 'contextualize',
  load: function (client) {
    var contextualize = function (fn, onError) {
      // capture a stacktrace in case a resulting error has nothing
      var fallbackStack = getStack();
      var dom = domain.create();
      dom.on('error', function (err) {
        // check if the stacktrace has no context, if so, if so append the frames we created earlier
        if (err.stack) maybeUseFallbackStack(err, fallbackStack);
        var event = client.Event.create(err, true, {
          severity: 'error',
          unhandled: true,
          severityReason: {
            type: 'unhandledException'
          }
        }, 'contextualize()', 1);

        client._notify(event, onError, function (e, event) {
          if (e) client._logger.error('Failed to send event to Bugsnag');

          client._config.onUncaughtException(err, event, client._logger);
        });
      });
      process.nextTick(function () {
        return dom.run(fn);
      });
    };

    return contextualize;
  }
}; // add a default export for ESM modules without interop

_$contextualize_37["default"] = _$contextualize_37;

var _$intercept_38 = {};
var __getStack_38 = _$nodeFallbackStack_21.getStack,
    __maybeUseFallbackStack_38 = _$nodeFallbackStack_21.maybeUseFallbackStack;

_$intercept_38 = {
  name: 'intercept',
  load: function (client) {
    var intercept = function (onError, cb) {
      if (onError === void 0) {
        onError = function () {};
      }

      if (typeof cb !== 'function') {
        cb = onError;

        onError = function () {};
      } // capture a stacktrace in case a resulting error has nothing


      var fallbackStack = __getStack_38();
      return function (err) {
        if (err) {
          // check if the stacktrace has no context, if so, if so append the frames we created earlier
          if (err.stack) __maybeUseFallbackStack_38(err, fallbackStack);
          var event = client.Event.create(err, true, {
            severity: 'warning',
            unhandled: false,
            severityReason: {
              type: 'callbackErrorIntercept'
            }
          }, 'intercept()', 1);

          client._notify(event, onError);

          return;
        }

        for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          data[_key - 1] = arguments[_key];
        }

        cb.apply(void 0, data); // eslint-disable-line
      };
    };

    return intercept;
  }
}; // add a default export for ESM modules without interop

_$intercept_38["default"] = _$intercept_38;

function ___extends_39() { ___extends_39 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_39.apply(this, arguments); }

var __os_39 = __nccwpck_require__(37);
/*
 * Automatically detects Node server details ('device' in the API)
 */


var _$device_39 = {
  load: function (client) {
    var device = {
      osName: __os_39.platform() + " (" + __os_39.arch() + ")",
      osVersion: __os_39.release(),
      totalMemory: __os_39.totalmem(),
      hostname: client._config.hostname,
      runtimeVersions: {
        node: process.versions.node
      }
    };

    client._addOnSessionPayload(function (sp) {
      sp.device = ___extends_39({}, sp.device, device);
    }); // add time just as the event is sent


    client.addOnError(function (event) {
      event.device = ___extends_39({}, event.device, device, {
        freeMemory: __os_39.freemem(),
        time: new Date()
      });
    }, true);
  }
};

var ___require_22 = __nccwpck_require__(17),
    join = ___require_22.join,
    resolve = ___require_22.resolve; // normalise a path to a directory, adding a trailing slash if it doesn't already
// have one and resolve it to make it absolute (e.g. get rid of any ".."s)


var _$pathNormalizer_22 = function (p) {
  return join(resolve(p), '/');
};

/* removed: var _$pathNormalizer_22 = require('@bugsnag/core/lib/path-normalizer'); */;

var _$inProject_40 = {
  load: function (client) {
    return client.addOnError(function (event) {
      if (!client._config.projectRoot) return;
      var projectRoot = _$pathNormalizer_22(client._config.projectRoot);
      var allFrames = event.errors.reduce(function (accum, er) {
        return accum.concat(er.stacktrace);
      }, []);
      allFrames.map(function (stackframe) {
        stackframe.inProject = typeof stackframe.file === 'string' && stackframe.file.indexOf(projectRoot) === 0 && !/\/node_modules\//.test(stackframe.file);
      });
    });
  }
};

function ___extends_41() { ___extends_41 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_41.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SURROUNDING_LINES = 3;
var MAX_LINE_LENGTH = 200;

var ___require_41 = __nccwpck_require__(147),
    createReadStream = ___require_41.createReadStream;

var ___require2_41 = __nccwpck_require__(781),
    Writable = ___require2_41.Writable;

var pump = __nccwpck_require__(341);

var byline = __nccwpck_require__(700);

var path = __nccwpck_require__(17);

var _$surroundingCode_41 = {
  load: function (client) {
    if (!client._config.sendCode) return;

    var loadSurroundingCode = function (stackframe, cache) {
      return new Promise(function (resolve, reject) {
        try {
          if (!stackframe.lineNumber || !stackframe.file) return resolve(stackframe);
          var file = path.resolve(client._config.projectRoot, stackframe.file);
          var cacheKey = file + "@" + stackframe.lineNumber;

          if (cacheKey in cache) {
            stackframe.code = cache[cacheKey];
            return resolve(stackframe);
          }

          getSurroundingCode(file, stackframe.lineNumber, function (err, code) {
            if (err) return resolve(stackframe);
            stackframe.code = cache[cacheKey] = code;
            return resolve(stackframe);
          });
        } catch (e) {
          return resolve(stackframe);
        }
      });
    };

    client.addOnError(function (event) {
      return new Promise(function (resolve, reject) {
        var cache = Object.create(null);
        var allFrames = event.errors.reduce(function (accum, er) {
          return accum.concat(er.stacktrace);
        }, []);
        pMapSeries(allFrames.map(function (stackframe) {
          return function () {
            return loadSurroundingCode(stackframe, cache);
          };
        })).then(resolve)["catch"](reject);
      });
    });
  },
  configSchema: {
    sendCode: {
      defaultValue: function () {
        return true;
      },
      validate: function (value) {
        return value === true || value === false;
      },
      message: 'should be true or false'
    }
  }
};

var getSurroundingCode = function (file, lineNumber, cb) {
  var start = lineNumber - SURROUNDING_LINES;
  var end = lineNumber + SURROUNDING_LINES;
  var reader = createReadStream(file, {
    encoding: 'utf8'
  });
  var splitter = new byline.LineStream({
    keepEmptyLines: true
  });
  var slicer = new CodeRange({
    start: start,
    end: end
  }); // if the slicer has enough lines already, no need to keep reading from the file

  slicer.on('done', function () {
    return reader.destroy();
  });
  pump(reader, splitter, slicer, function (err) {
    // reader.destroy() causes a "premature close" error which we can tolerate
    if (err && err.message !== 'premature close') return cb(err);
    cb(null, slicer.getCode());
  });
}; // This writable stream takes { start, end } options specifying the
// range of lines that should be extracted from a file. Pipe a readable
// stream to it that provides source lines as each chunk. If the range
// is satisfied before the end of the readable stream, it will emit the
// 'done' event. Once a 'done' or 'finish' event has been seen, call getCode()
// to get the range in the following format:
// {
//   '10': 'function getSquare (cb) {',
//   '11': '  rectangles.find({',
//   '12': '    length: 12',
//   '13': '    width: 12',
//   '14': '  }, err => cb)',
//   '15': '}'
// }


var CodeRange = /*#__PURE__*/function (_Writable) {
  _inheritsLoose(CodeRange, _Writable);

  function CodeRange(opts) {
    var _this;

    _this = _Writable.call(this, ___extends_41({}, opts, {
      decodeStrings: false
    })) || this;
    _this._start = opts.start;
    _this._end = opts.end;
    _this._n = 0;
    _this._code = {};
    return _this;
  }

  var _proto = CodeRange.prototype;

  _proto._write = function _write(chunk, enc, cb) {
    this._n++;
    if (this._n < this._start) return cb(null);

    if (this._n <= this._end) {
      this._code[String(this._n)] = chunk.length <= MAX_LINE_LENGTH ? chunk : chunk.substr(0, MAX_LINE_LENGTH);
      return cb(null);
    }

    this.emit('done');
    return cb(null);
  };

  _proto.getCode = function getCode() {
    return this._code;
  };

  return CodeRange;
}(Writable);

var pMapSeries = function (ps) {
  return new Promise(function (resolve, reject) {
    var res = [];
    ps.reduce(function (accum, p) {
      return accum.then(function (r) {
        res.push(r);
        return p();
      });
    }, Promise.resolve()).then(function (r) {
      res.push(r);
    }).then(function () {
      resolve(res.slice(1));
    });
  });
};

var _handler;

var _$uncaughtException_42 = {
  load: function (client) {
    if (!client._config.autoDetectErrors) return;
    if (!client._config.enabledErrorTypes.unhandledExceptions) return;

    _handler = function (err) {
      var event = client.Event.create(err, false, {
        severity: 'error',
        unhandled: true,
        severityReason: {
          type: 'unhandledException'
        }
      }, 'uncaughtException handler', 1);

      client._notify(event, function () {}, function (e, event) {
        if (e) client._logger.error('Failed to send event to Bugsnag');

        client._config.onUncaughtException(err, event, client._logger);
      });
    };

    process.on('uncaughtException', _handler);
  },
  destroy: function () {
    process.removeListener('uncaughtException', _handler);
  }
};

var ___handler_43;

var _$unhandledRejection_43 = {
  load: function (client) {
    if (!client._config.autoDetectErrors || !client._config.enabledErrorTypes.unhandledRejections) return;

    ___handler_43 = function (err) {
      var event = client.Event.create(err, false, {
        severity: 'error',
        unhandled: true,
        severityReason: {
          type: 'unhandledPromiseRejection'
        }
      }, 'unhandledRejection handler', 1);
      return new Promise(function (resolve) {
        client._notify(event, function () {}, function (e, event) {
          if (e) client._logger.error('Failed to send event to Bugsnag');

          client._config.onUnhandledRejection(err, event, client._logger);

          resolve();
        });
      });
    }; // Prepend the listener if we can (Node 6+)


    if (process.prependListener) {
      process.prependListener('unhandledRejection', ___handler_43);
    } else {
      process.on('unhandledRejection', ___handler_43);
    }
  },
  destroy: function () {
    process.removeListener('unhandledRejection', ___handler_43);
  }
};

/* removed: var _$assign_10 = require('./es-utils/assign'); */;

var _$cloneClient_8 = function (client) {
  var clone = new client.Client({}, {}, [], client._notifier);
  clone._config = client._config; // changes to these properties should not be reflected in the original client,
  // so ensure they are are (shallow) cloned

  clone._breadcrumbs = client._breadcrumbs.slice();
  clone._metadata = _$assign_10({}, client._metadata);
  clone._user = _$assign_10({}, client._user);
  clone._context = client._context;
  clone._cbs = {
    e: client._cbs.e.slice(),
    s: client._cbs.s.slice(),
    sp: client._cbs.sp.slice(),
    b: client._cbs.b.slice()
  };
  clone._logger = client._logger;
  clone._delivery = client._delivery;
  clone._sessionDelegate = client._sessionDelegate;
  return clone;
};

/**
 * Expose `Backoff`.
 */
var _$Backoff_44 = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */


Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ___inheritsLoose_46(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; ___setPrototypeOf_46(subClass, superClass); }

function ___setPrototypeOf_46(o, p) { ___setPrototypeOf_46 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ___setPrototypeOf_46(o, p); }

var DEFAULT_SUMMARY_INTERVAL = 10 * 1000;

var Emitter = (__nccwpck_require__(361).EventEmitter);

var _$tracker_46 = /*#__PURE__*/function (_Emitter) {
  ___inheritsLoose_46(SessionTracker, _Emitter);

  function SessionTracker(intervalLength) {
    var _this;

    _this = _Emitter.call(this) || this;
    _this._sessions = new Map();
    _this._interval = null;
    _this._intervalLength = intervalLength || DEFAULT_SUMMARY_INTERVAL;
    _this._summarize = _this._summarize.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = SessionTracker.prototype;

  _proto.start = function start() {
    if (!this._interval) {
      this._interval = setInterval(this._summarize, this._intervalLength).unref();
    }
  };

  _proto.stop = function stop() {
    clearInterval(this._interval);
    this._interval = null;
  };

  _proto.track = function track(session) {
    var key = dateToMsKey(session.startedAt);

    var cur = this._sessions.get(key);

    this._sessions.set(key, typeof cur === 'undefined' ? 1 : cur + 1);

    return session;
  };

  _proto._summarize = function _summarize() {
    var _this2 = this;

    var summary = [];

    this._sessions.forEach(function (val, key) {
      summary.push({
        startedAt: key,
        sessionsStarted: val
      });

      _this2._sessions["delete"](key);
    });

    if (!summary.length) return;
    this.emit('summary', summary);
  };

  return SessionTracker;
}(Emitter);

var dateToMsKey = function (d) {
  var dk = new Date(d);
  dk.setSeconds(0);
  dk.setMilliseconds(0);
  return dk.toISOString();
};

/* removed: var _$intRange_24 = require('@bugsnag/core/lib/validators/int-range'); */;

/* removed: var _$cloneClient_8 = require('@bugsnag/core/lib/clone-client'); */;

/* removed: var _$tracker_46 = require('./tracker'); */;

/* removed: var _$Backoff_44 = require('backo'); */;

/* removed: var _$syncCallbackRunner_23 = require('@bugsnag/core/lib/sync-callback-runner'); */;

var _$session_45 = {
  load: function (client) {
    var sessionTracker = new _$tracker_46(client._config.sessionSummaryInterval);
    sessionTracker.on('summary', sendSessionSummary(client));
    sessionTracker.start();
    client._sessionDelegate = {
      startSession: function (client, session) {
        var sessionClient = _$cloneClient_8(client);
        sessionClient._session = session;
        sessionClient._pausedSession = null;
        sessionTracker.track(sessionClient._session);
        return sessionClient;
      },
      pauseSession: function (client) {
        client._pausedSession = client._session;
        client._session = null;
      },
      resumeSession: function (client) {
        // Do nothing if there's already an active session
        if (client._session) {
          return client;
        } // If we have a paused session then make it the active session


        if (client._pausedSession) {
          client._session = client._pausedSession;
          client._pausedSession = null;
          return client;
        } // Otherwise start a new session


        return client.startSession();
      }
    };
  },
  configSchema: {
    sessionSummaryInterval: {
      defaultValue: function () {
        return undefined;
      },
      validate: function (value) {
        return value === undefined || _$intRange_24()(value);
      },
      message: 'should be a positive integer'
    }
  }
};

var sendSessionSummary = function (client) {
  return function (sessionCounts) {
    // exit early if the current releaseStage is not enabled
    if (client._config.enabledReleaseStages !== null && !client._config.enabledReleaseStages.includes(client._config.releaseStage)) {
      client._logger.warn('Session not sent due to releaseStage/enabledReleaseStages configuration');

      return;
    }

    if (!sessionCounts.length) return;
    var backoff = new _$Backoff_44({
      min: 1000,
      max: 10000
    });
    var maxAttempts = 10;
    req(handleRes);

    function handleRes(err) {
      if (!err) {
        var sessionCount = sessionCounts.reduce(function (accum, s) {
          return accum + s.sessionsStarted;
        }, 0);
        return client._logger.debug(sessionCount + " session(s) reported");
      }

      if (backoff.attempts === 10) {
        client._logger.error('Session delivery failed, max retries exceeded', err);

        return;
      }

      client._logger.debug('Session delivery failed, retry #' + (backoff.attempts + 1) + '/' + maxAttempts, err);

      setTimeout(function () {
        return req(handleRes);
      }, backoff.duration());
    }

    function req(cb) {
      var payload = {
        notifier: client._notifier,
        device: {},
        app: {
          releaseStage: client._config.releaseStage,
          version: client._config.appVersion,
          type: client._config.appType
        },
        sessionCounts: sessionCounts
      };
      var ignore = _$syncCallbackRunner_23(client._cbs.sp, payload, 'onSessionPayload', client._logger);

      if (ignore) {
        client._logger.debug('Session not sent due to onSessionPayload callback');

        return cb(null);
      }

      client._delivery.sendSession(payload, cb);
    }
  };
};

var _$pathNormaliser_47 = {
  load: function (client) {
    client.addOnError(function (event) {
      var allFrames = event.errors.reduce(function (accum, er) {
        return accum.concat(er.stacktrace);
      }, []);
      allFrames.forEach(function (stackframe) {
        if (typeof stackframe.file !== 'string') {
          return;
        }

        stackframe.file = stackframe.file.replace(/\\/g, '/');
      });
    });
  }
};

/* removed: var _$pathNormalizer_22 = require('@bugsnag/core/lib/path-normalizer'); */;

var _$stripProjectRoot_48 = {
  load: function (client) {
    return client.addOnError(function (event) {
      if (!client._config.projectRoot) return;
      var projectRoot = _$pathNormalizer_22(client._config.projectRoot);
      var allFrames = event.errors.reduce(function (accum, er) {
        return accum.concat(er.stacktrace);
      }, []);
      allFrames.map(function (stackframe) {
        if (typeof stackframe.file === 'string' && stackframe.file.indexOf(projectRoot) === 0) {
          stackframe.file = stackframe.file.replace(projectRoot, '');
        }
      });
    });
  }
};

var _$notifier_35 = {};
function ___extends_35() { ___extends_35 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ___extends_35.apply(this, arguments); }

var name = 'Bugsnag Node';
var version = '7.15.1';
var url = 'https://github.com/bugsnag/bugsnag-js';

/* removed: var _$Client_2 = require('@bugsnag/core/client'); */;

/* removed: var _$Event_4 = require('@bugsnag/core/event'); */;

/* removed: var _$Session_31 = require('@bugsnag/core/session'); */;

/* removed: var _$Breadcrumb_1 = require('@bugsnag/core/breadcrumb'); */;

_$Event_4.__type = 'nodejs';

/* removed: var _$delivery_32 = require('@bugsnag/delivery-node'); */; // extend the base config schema with some node-specific options


var __schema_35 = ___extends_35({}, _$config_3.schema, _$config_34); // remove enabledBreadcrumbTypes from the config schema


delete __schema_35.enabledBreadcrumbTypes;

/* removed: var _$app_36 = require('@bugsnag/plugin-app-duration'); */;

/* removed: var _$surroundingCode_41 = require('@bugsnag/plugin-node-surrounding-code'); */;

/* removed: var _$inProject_40 = require('@bugsnag/plugin-node-in-project'); */;

/* removed: var _$stripProjectRoot_48 = require('@bugsnag/plugin-strip-project-root'); */;

/* removed: var _$session_45 = require('@bugsnag/plugin-server-session'); */;

/* removed: var _$device_39 = require('@bugsnag/plugin-node-device'); */;

/* removed: var _$uncaughtException_42 = require('@bugsnag/plugin-node-uncaught-exception'); */;

/* removed: var _$unhandledRejection_43 = require('@bugsnag/plugin-node-unhandled-rejection'); */;

/* removed: var _$intercept_38 = require('@bugsnag/plugin-intercept'); */;

/* removed: var _$contextualize_37 = require('@bugsnag/plugin-contextualize'); */;

/* removed: var _$pathNormaliser_47 = require('@bugsnag/plugin-stackframe-path-normaliser'); */;

var internalPlugins = [_$app_36, _$surroundingCode_41, _$inProject_40, _$stripProjectRoot_48, _$session_45, _$device_39, _$uncaughtException_42, _$unhandledRejection_43, _$intercept_38, _$contextualize_37, _$pathNormaliser_47];
var Bugsnag = {
  _client: null,
  createClient: function (opts) {
    // handle very simple use case where user supplies just the api key as a string
    if (typeof opts === 'string') opts = {
      apiKey: opts
    };
    if (!opts) opts = {};
    var bugsnag = new _$Client_2(opts, __schema_35, internalPlugins, {
      name: name,
      version: version,
      url: url
    });

    bugsnag._setDelivery(_$delivery_32);

    bugsnag._logger.debug('Loaded!');

    bugsnag.leaveBreadcrumb = function () {
      bugsnag._logger.warn('Breadcrumbs are not supported in Node.js yet');
    };

    bugsnag._config.enabledBreadcrumbTypes = [];
    return bugsnag;
  },
  start: function (opts) {
    if (Bugsnag._client) {
      Bugsnag._client._logger.warn('Bugsnag.start() was called more than once. Ignoring.');

      return Bugsnag._client;
    }

    Bugsnag._client = Bugsnag.createClient(opts);
    return Bugsnag._client;
  }
};
Object.keys(_$Client_2.prototype).forEach(function (m) {
  if (/^_/.test(m)) return;

  Bugsnag[m] = function () {
    if (!Bugsnag._client) return console.error("Bugsnag." + m + "() was called before Bugsnag.start()");
    Bugsnag._client._depth += 1;

    var ret = Bugsnag._client[m].apply(Bugsnag._client, arguments);

    Bugsnag._client._depth -= 1;
    return ret;
  };
});
_$notifier_35 = Bugsnag;
_$notifier_35.Client = _$Client_2;
_$notifier_35.Event = _$Event_4;
_$notifier_35.Session = _$Session_31;
_$notifier_35.Breadcrumb = _$Breadcrumb_1; // Export a "default" property for compatibility with ESM imports

_$notifier_35["default"] = Bugsnag;

return _$notifier_35;

});
//# sourceMappingURL=bugsnag.js.map


/***/ }),

/***/ 700:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright (C) 2011-2015 John Hewson
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

var stream = __nccwpck_require__(781),
    util = __nccwpck_require__(837),
    timers = __nccwpck_require__(512);

// convinience API
module.exports = function(readStream, options) {
  return module.exports.createStream(readStream, options);
};

// basic API
module.exports.createStream = function(readStream, options) {
  if (readStream) {
    return createLineStream(readStream, options);
  } else {
    return new LineStream(options);
  }
};

// deprecated API
module.exports.createLineStream = function(readStream) {
  console.log('WARNING: byline#createLineStream is deprecated and will be removed soon');
  return createLineStream(readStream);
};

function createLineStream(readStream, options) {
  if (!readStream) {
    throw new Error('expected readStream');
  }
  if (!readStream.readable) {
    throw new Error('readStream must be readable');
  }
  var ls = new LineStream(options);
  readStream.pipe(ls);
  return ls;
}

//
// using the new node v0.10 "streams2" API
//

module.exports.LineStream = LineStream;

function LineStream(options) {
  stream.Transform.call(this, options);
  options = options || {};

  // use objectMode to stop the output from being buffered
  // which re-concatanates the lines, just without newlines.
  this._readableState.objectMode = true;
  this._lineBuffer = [];
  this._keepEmptyLines = options.keepEmptyLines || false;
  this._lastChunkEndedWithCR = false;

  // take the source's encoding if we don't have one
  var self = this;
  this.on('pipe', function(src) {
    if (!self.encoding) {
      // but we can't do this for old-style streams
      if (src instanceof stream.Readable) {
        self.encoding = src._readableState.encoding;
      }
    }
  });
}
util.inherits(LineStream, stream.Transform);

LineStream.prototype._transform = function(chunk, encoding, done) {
  // decode binary chunks as UTF-8
  encoding = encoding || 'utf8';
  
  if (Buffer.isBuffer(chunk)) {
    if (encoding == 'buffer') {
      chunk = chunk.toString(); // utf8
      encoding = 'utf8';
    }
    else {
     chunk = chunk.toString(encoding);
    }
  }
  this._chunkEncoding = encoding;
  
  // see: http://www.unicode.org/reports/tr18/#Line_Boundaries
  var lines = chunk.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/g);
  
  // don't split CRLF which spans chunks
  if (this._lastChunkEndedWithCR && chunk[0] == '\n') {
    lines.shift();
  }
  
  if (this._lineBuffer.length > 0) {
    this._lineBuffer[this._lineBuffer.length - 1] += lines[0];
    lines.shift();
  }

  this._lastChunkEndedWithCR = chunk[chunk.length - 1] == '\r';
  this._lineBuffer = this._lineBuffer.concat(lines);
  this._pushBuffer(encoding, 1, done);
};

LineStream.prototype._pushBuffer = function(encoding, keep, done) {
  // always buffer the last (possibly partial) line
  while (this._lineBuffer.length > keep) {
    var line = this._lineBuffer.shift();
    // skip empty lines
    if (this._keepEmptyLines || line.length > 0 ) {
      if (!this.push(this._reencode(line, encoding))) {
        // when the high-water mark is reached, defer pushes until the next tick
        var self = this;
        timers.setImmediate(function() {
          self._pushBuffer(encoding, keep, done);
        });
        return;
      }
    }
  }
  done();
};

LineStream.prototype._flush = function(done) {
  this._pushBuffer(this._chunkEncoding, 0, done);
};

// see Readable::push
LineStream.prototype._reencode = function(line, chunkEncoding) {
  if (this.encoding && this.encoding != chunkEncoding) {
    return new Buffer(line, chunkEncoding).toString(this.encoding);
  }
  else if (this.encoding) {
    // this should be the most common case, i.e. we're using an encoded source stream
    return line;
  }
  else {
    return new Buffer(line, chunkEncoding);
  }
};


/***/ }),

/***/ 205:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var once = __nccwpck_require__(223);

var noop = function() {};

var isRequest = function(stream) {
	return stream.setHeader && typeof stream.abort === 'function';
};

var isChildProcess = function(stream) {
	return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3
};

var eos = function(stream, opts, callback) {
	if (typeof opts === 'function') return eos(stream, null, opts);
	if (!opts) opts = {};

	callback = once(callback || noop);

	var ws = stream._writableState;
	var rs = stream._readableState;
	var readable = opts.readable || (opts.readable !== false && stream.readable);
	var writable = opts.writable || (opts.writable !== false && stream.writable);
	var cancelled = false;

	var onlegacyfinish = function() {
		if (!stream.writable) onfinish();
	};

	var onfinish = function() {
		writable = false;
		if (!readable) callback.call(stream);
	};

	var onend = function() {
		readable = false;
		if (!writable) callback.call(stream);
	};

	var onexit = function(exitCode) {
		callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
	};

	var onerror = function(err) {
		callback.call(stream, err);
	};

	var onclose = function() {
		process.nextTick(onclosenexttick);
	};

	var onclosenexttick = function() {
		if (cancelled) return;
		if (readable && !(rs && (rs.ended && !rs.destroyed))) return callback.call(stream, new Error('premature close'));
		if (writable && !(ws && (ws.ended && !ws.destroyed))) return callback.call(stream, new Error('premature close'));
	};

	var onrequest = function() {
		stream.req.on('finish', onfinish);
	};

	if (isRequest(stream)) {
		stream.on('complete', onfinish);
		stream.on('abort', onclose);
		if (stream.req) onrequest();
		else stream.on('request', onrequest);
	} else if (writable && !ws) { // legacy streams
		stream.on('end', onlegacyfinish);
		stream.on('close', onlegacyfinish);
	}

	if (isChildProcess(stream)) stream.on('exit', onexit);

	stream.on('end', onend);
	stream.on('finish', onfinish);
	if (opts.error !== false) stream.on('error', onerror);
	stream.on('close', onclose);

	return function() {
		cancelled = true;
		stream.removeListener('complete', onfinish);
		stream.removeListener('abort', onclose);
		stream.removeListener('request', onrequest);
		if (stream.req) stream.req.removeListener('finish', onfinish);
		stream.removeListener('end', onlegacyfinish);
		stream.removeListener('close', onlegacyfinish);
		stream.removeListener('finish', onfinish);
		stream.removeListener('exit', onexit);
		stream.removeListener('end', onend);
		stream.removeListener('error', onerror);
		stream.removeListener('close', onclose);
	};
};

module.exports = eos;


/***/ }),

/***/ 176:
/***/ (function(module, __unused_webpack_exports, __nccwpck_require__) {

(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define('error-stack-parser', ['stackframe'], factory);
    } else if (true) {
        module.exports = factory(__nccwpck_require__(46));
    } else {}
}(this, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function ErrorStackParser$$parse(error) {
            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                return this.parseOpera(error);
            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
            } else if (error.stack) {
                return this.parseFFOrSafari(error);
            } else {
                throw new Error('Cannot parse given Error object');
            }
        },

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) {
                return [urlLike];
            }

            var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        },

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);

            return filtered.map(function(line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
                }
                var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '(');

                // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
                // case it has spaces in it, as the string is split on \s+ later on
                var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);

                // remove the parenthesized location from the line, if it was matched
                sanitizedLine = location ? sanitizedLine.replace(location[0], '') : sanitizedLine;

                var tokens = sanitizedLine.split(/\s+/).slice(1);
                // if a location was matched, pass it to extractLocation() otherwise pop the last token
                var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];

                return new StackFrame({
                    functionName: functionName,
                    fileName: fileName,
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                });
            }, this);
        },

        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);

            return filtered.map(function(line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
                }

                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                    // Safari eval frames only have function names and nothing else
                    return new StackFrame({
                        functionName: line
                    });
                } else {
                    var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                    var matches = line.match(functionNameRegex);
                    var functionName = matches && matches[1] ? matches[1] : undefined;
                    var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));

                    return new StackFrame({
                        functionName: functionName,
                        fileName: locationParts[0],
                        lineNumber: locationParts[1],
                        columnNumber: locationParts[2],
                        source: line
                    });
                }
            }, this);
        },

        parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
                return this.parseOpera9(e);
            } else if (!e.stack) {
                return this.parseOpera10(e);
            } else {
                return this.parseOpera11(e);
            }
        },

        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n');
            var result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(new StackFrame({
                        fileName: match[2],
                        lineNumber: match[1],
                        source: lines[i]
                    }));
                }
            }

            return result;
        },

        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n');
            var result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(
                        new StackFrame({
                            functionName: match[3] || undefined,
                            fileName: match[2],
                            lineNumber: match[1],
                            source: lines[i]
                        })
                    );
                }
            }

            return result;
        },

        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
            }, this);

            return filtered.map(function(line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = (tokens.shift() || '');
                var functionName = functionCall
                    .replace(/<anonymous function(: (\w+))?>/, '$2')
                    .replace(/\([^)]*\)/g, '') || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^)]*)\)/)) {
                    argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, '$1');
                }
                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ?
                    undefined : argsRaw.split(',');

                return new StackFrame({
                    functionName: functionName,
                    args: args,
                    fileName: locationParts[0],
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                });
            }, this);
        }
    };
}));


/***/ }),

/***/ 169:
/***/ ((module) => {


/**
 * Expose `isError`.
 */

module.exports = isError;

/**
 * Test whether `value` is error object.
 *
 * @param {*} value
 * @returns {boolean}
 */

function isError(value) {
  switch (Object.prototype.toString.call(value)) {
    case '[object Error]': return true;
    case '[object Exception]': return true;
    case '[object DOMException]': return true;
    default: return value instanceof Error;
  }
}


/***/ }),

/***/ 223:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var wrappy = __nccwpck_require__(940)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 341:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var once = __nccwpck_require__(223)
var eos = __nccwpck_require__(205)
var fs = __nccwpck_require__(147) // we only need fs to get the ReadStream and WriteStream prototypes

var noop = function () {}
var ancient = /^v?\.0/.test(process.version)

var isFn = function (fn) {
  return typeof fn === 'function'
}

var isFS = function (stream) {
  if (!ancient) return false // newer node version do not need to care about fs is a special way
  if (!fs) return false // browser
  return (stream instanceof (fs.ReadStream || noop) || stream instanceof (fs.WriteStream || noop)) && isFn(stream.close)
}

var isRequest = function (stream) {
  return stream.setHeader && isFn(stream.abort)
}

var destroyer = function (stream, reading, writing, callback) {
  callback = once(callback)

  var closed = false
  stream.on('close', function () {
    closed = true
  })

  eos(stream, {readable: reading, writable: writing}, function (err) {
    if (err) return callback(err)
    closed = true
    callback()
  })

  var destroyed = false
  return function (err) {
    if (closed) return
    if (destroyed) return
    destroyed = true

    if (isFS(stream)) return stream.close(noop) // use close for fs streams to avoid fd leaks
    if (isRequest(stream)) return stream.abort() // request.destroy just do .end - .abort is what we want

    if (isFn(stream.destroy)) return stream.destroy()

    callback(err || new Error('stream was destroyed'))
  }
}

var call = function (fn) {
  fn()
}

var pipe = function (from, to) {
  return from.pipe(to)
}

var pump = function () {
  var streams = Array.prototype.slice.call(arguments)
  var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop

  if (Array.isArray(streams[0])) streams = streams[0]
  if (streams.length < 2) throw new Error('pump requires two streams per minimum')

  var error
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1
    var writing = i > 0
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err
      if (err) destroys.forEach(call)
      if (reading) return
      destroys.forEach(call)
      callback(error)
    })
  })

  return streams.reduce(pipe)
}

module.exports = pump


/***/ }),

/***/ 236:
/***/ (function(module, __unused_webpack_exports, __nccwpck_require__) {

(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define('stack-generator', ['stackframe'], factory);
    } else if (true) {
        module.exports = factory(__nccwpck_require__(46));
    } else {}
}(this, function(StackFrame) {
    return {
        backtrace: function StackGenerator$$backtrace(opts) {
            var stack = [];
            var maxStackSize = 10;

            if (typeof opts === 'object' && typeof opts.maxStackSize === 'number') {
                maxStackSize = opts.maxStackSize;
            }

            var curr = arguments.callee;
            while (curr && stack.length < maxStackSize && curr['arguments']) {
                // Allow V8 optimizations
                var args = new Array(curr['arguments'].length);
                for (var i = 0; i < args.length; ++i) {
                    args[i] = curr['arguments'][i];
                }
                if (/function(?:\s+([\w$]+))+\s*\(/.test(curr.toString())) {
                    stack.push(new StackFrame({functionName: RegExp.$1 || undefined, args: args}));
                } else {
                    stack.push(new StackFrame({args: args}));
                }

                try {
                    curr = curr.caller;
                } catch (e) {
                    break;
                }
            }
            return stack;
        }
    };
}));


/***/ }),

/***/ 46:
/***/ (function(module) {

(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define('stackframe', [], factory);
    } else if (true) {
        module.exports = factory();
    } else {}
}(this, function() {
    'use strict';
    function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    function _getter(p) {
        return function() {
            return this[p];
        };
    }

    var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
    var numericProps = ['columnNumber', 'lineNumber'];
    var stringProps = ['fileName', 'functionName', 'source'];
    var arrayProps = ['args'];
    var objectProps = ['evalOrigin'];

    var props = booleanProps.concat(numericProps, stringProps, arrayProps, objectProps);

    function StackFrame(obj) {
        if (!obj) return;
        for (var i = 0; i < props.length; i++) {
            if (obj[props[i]] !== undefined) {
                this['set' + _capitalize(props[i])](obj[props[i]]);
            }
        }
    }

    StackFrame.prototype = {
        getArgs: function() {
            return this.args;
        },
        setArgs: function(v) {
            if (Object.prototype.toString.call(v) !== '[object Array]') {
                throw new TypeError('Args must be an Array');
            }
            this.args = v;
        },

        getEvalOrigin: function() {
            return this.evalOrigin;
        },
        setEvalOrigin: function(v) {
            if (v instanceof StackFrame) {
                this.evalOrigin = v;
            } else if (v instanceof Object) {
                this.evalOrigin = new StackFrame(v);
            } else {
                throw new TypeError('Eval Origin must be an Object or StackFrame');
            }
        },

        toString: function() {
            var fileName = this.getFileName() || '';
            var lineNumber = this.getLineNumber() || '';
            var columnNumber = this.getColumnNumber() || '';
            var functionName = this.getFunctionName() || '';
            if (this.getIsEval()) {
                if (fileName) {
                    return '[eval] (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
                }
                return '[eval]:' + lineNumber + ':' + columnNumber;
            }
            if (functionName) {
                return functionName + ' (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
            }
            return fileName + ':' + lineNumber + ':' + columnNumber;
        }
    };

    StackFrame.fromString = function StackFrame$$fromString(str) {
        var argsStartIndex = str.indexOf('(');
        var argsEndIndex = str.lastIndexOf(')');

        var functionName = str.substring(0, argsStartIndex);
        var args = str.substring(argsStartIndex + 1, argsEndIndex).split(',');
        var locationString = str.substring(argsEndIndex + 1);

        if (locationString.indexOf('@') === 0) {
            var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, '');
            var fileName = parts[1];
            var lineNumber = parts[2];
            var columnNumber = parts[3];
        }

        return new StackFrame({
            functionName: functionName,
            args: args || undefined,
            fileName: fileName,
            lineNumber: lineNumber || undefined,
            columnNumber: columnNumber || undefined
        });
    };

    for (var i = 0; i < booleanProps.length; i++) {
        StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
        StackFrame.prototype['set' + _capitalize(booleanProps[i])] = (function(p) {
            return function(v) {
                this[p] = Boolean(v);
            };
        })(booleanProps[i]);
    }

    for (var j = 0; j < numericProps.length; j++) {
        StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);
        StackFrame.prototype['set' + _capitalize(numericProps[j])] = (function(p) {
            return function(v) {
                if (!_isNumber(v)) {
                    throw new TypeError(p + ' must be a Number');
                }
                this[p] = Number(v);
            };
        })(numericProps[j]);
    }

    for (var k = 0; k < stringProps.length; k++) {
        StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);
        StackFrame.prototype['set' + _capitalize(stringProps[k])] = (function(p) {
            return function(v) {
                this[p] = String(v);
            };
        })(stringProps[k]);
    }

    return StackFrame;
}));


/***/ }),

/***/ 940:
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 639:
/***/ ((module) => {

"use strict";
module.exports = require("domain");

/***/ }),

/***/ 361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 37:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 512:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@bugsnag/js/node/notifier.js
var notifier = __nccwpck_require__(911);
;// CONCATENATED MODULE: ./src/bugsnag/client.ts

function createClient(config) {
    console.log("Creating Bugsnag client");
    const client = Bugsnag.createClient(config);
    return {
        setContext(ctx) {
            console.log("Bugsnag context", ctx);
            client.setContext(ctx);
        },
    };
}

;// CONCATENATED MODULE: ./src/bugsnag/noop.ts
function createNoop() {
    return {
        setContext(ctx) {
            console.log("setting context", ctx);
        },
    };
}

;// CONCATENATED MODULE: ./src/bugsnag/index.ts



;// CONCATENATED MODULE: ./src/index.ts

const noop = createNoop();
noop.setContext("yolo");

})();

module.exports = __webpack_exports__;
/******/ })()
;