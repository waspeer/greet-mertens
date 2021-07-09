var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports2, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/rxjs/internal/util/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/rxjs/internal/util/isFunction.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function isFunction(x) {
      return typeof x === "function";
    }
    exports2.isFunction = isFunction;
  }
});

// node_modules/rxjs/internal/config.js
var require_config = __commonJS({
  "node_modules/rxjs/internal/config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports2.config = {
      Promise: void 0,
      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log("RxJS: Back to a better error behavior. Thank you. <3");
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }
    };
  }
});

// node_modules/rxjs/internal/util/hostReportError.js
var require_hostReportError = __commonJS({
  "node_modules/rxjs/internal/util/hostReportError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function hostReportError(err) {
      setTimeout(function() {
        throw err;
      }, 0);
    }
    exports2.hostReportError = hostReportError;
  }
});

// node_modules/rxjs/internal/Observer.js
var require_Observer = __commonJS({
  "node_modules/rxjs/internal/Observer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    exports2.empty = {
      closed: true,
      next: function(value) {
      },
      error: function(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function() {
      }
    };
  }
});

// node_modules/rxjs/internal/util/isArray.js
var require_isArray = __commonJS({
  "node_modules/rxjs/internal/util/isArray.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isArray = function() {
      return Array.isArray || function(x) {
        return x && typeof x.length === "number";
      };
    }();
  }
});

// node_modules/rxjs/internal/util/isObject.js
var require_isObject = __commonJS({
  "node_modules/rxjs/internal/util/isObject.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function isObject(x) {
      return x !== null && typeof x === "object";
    }
    exports2.isObject = isObject;
  }
});

// node_modules/rxjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = __commonJS({
  "node_modules/rxjs/internal/util/UnsubscriptionError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var UnsubscriptionErrorImpl = function() {
      function UnsubscriptionErrorImpl2(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
        return this;
      }
      UnsubscriptionErrorImpl2.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl2;
    }();
    exports2.UnsubscriptionError = UnsubscriptionErrorImpl;
  }
});

// node_modules/rxjs/internal/Subscription.js
var require_Subscription = __commonJS({
  "node_modules/rxjs/internal/Subscription.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var isArray_1 = require_isArray();
    var isObject_1 = require_isObject();
    var isFunction_1 = require_isFunction();
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    var Subscription = function() {
      function Subscription2(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
          this._ctorUnsubscribe = true;
          this._unsubscribe = unsubscribe;
        }
      }
      Subscription2.prototype.unsubscribe = function() {
        var errors;
        if (this.closed) {
          return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription2) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
          if (_ctorUnsubscribe) {
            this._unsubscribe = void 0;
          }
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }
        if (isArray_1.isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;
          while (++index < len) {
            var sub = _subscriptions[index];
            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors = errors || [];
                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };
      Subscription2.prototype.add = function(teardown) {
        var subscription = teardown;
        if (!teardown) {
          return Subscription2.EMPTY;
        }
        switch (typeof teardown) {
          case "function":
            subscription = new Subscription2(teardown);
          case "object":
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription2)) {
              var tmp = subscription;
              subscription = new Subscription2();
              subscription._subscriptions = [tmp];
            }
            break;
          default: {
            throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
          }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription2) {
          if (_parentOrParents === this) {
            return subscription;
          }
          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }
        return subscription;
      };
      Subscription2.prototype.remove = function(subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);
          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };
      Subscription2.EMPTY = function(empty) {
        empty.closed = true;
        return empty;
      }(new Subscription2());
      return Subscription2;
    }();
    exports2.Subscription = Subscription;
    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function(errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    }
  }
});

// node_modules/rxjs/internal/symbol/rxSubscriber.js
var require_rxSubscriber = __commonJS({
  "node_modules/rxjs/internal/symbol/rxSubscriber.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.rxSubscriber = function() {
      return typeof Symbol === "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
    }();
    exports2.$$rxSubscriber = exports2.rxSubscriber;
  }
});

// node_modules/rxjs/internal/Subscriber.js
var require_Subscriber = __commonJS({
  "node_modules/rxjs/internal/Subscriber.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var isFunction_1 = require_isFunction();
    var Observer_1 = require_Observer();
    var Subscription_1 = require_Subscription();
    var rxSubscriber_1 = require_rxSubscriber();
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    var Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;
          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }
            if (typeof destinationOrNext === "object") {
              if (destinationOrNext instanceof Subscriber2) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }
              break;
            }
          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }
        return _this;
      }
      Subscriber2.prototype[rxSubscriber_1.rxSubscriber] = function() {
        return this;
      };
      Subscriber2.create = function(next, error, complete) {
        var subscriber = new Subscriber2(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };
      Subscriber2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (!this.isStopped) {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (this.closed) {
          return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        this.destination.error(err);
        this.unsubscribe();
      };
      Subscriber2.prototype._complete = function() {
        this.destination.complete();
        this.unsubscribe();
      };
      Subscriber2.prototype._unsubscribeAndRecycle = function() {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };
      return Subscriber2;
    }(Subscription_1.Subscription);
    exports2.Subscriber = Subscriber;
    var SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;
          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);
            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }
      SafeSubscriber2.prototype.next = function(value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;
          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);
              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();
            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }
            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.complete = function() {
        var _this = this;
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          if (this._complete) {
            var wrappedComplete = function() {
              return _this._complete.call(_this._context);
            };
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);
              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error("bad call");
        }
        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }
        return false;
      };
      SafeSubscriber2.prototype._unsubscribe = function() {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber2;
    }(Subscriber);
    exports2.SafeSubscriber = SafeSubscriber;
  }
});

// node_modules/rxjs/internal/operators/filter.js
var require_filter = __commonJS({
  "node_modules/rxjs/internal/operators/filter.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function filter(predicate, thisArg) {
      return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
      };
    }
    exports2.filter = filter;
    var FilterOperator = function() {
      function FilterOperator2(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
      }
      FilterOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
      };
      return FilterOperator2;
    }();
    var FilterSubscriber = function(_super) {
      __extends(FilterSubscriber2, _super);
      function FilterSubscriber2(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
      }
      FilterSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        if (result) {
          this.destination.next(value);
        }
      };
      return FilterSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/@sanity/observable/operators/filter.js
var require_filter2 = __commonJS({
  "node_modules/@sanity/observable/operators/filter.js"(exports2) {
    exports2.filter = require_filter().filter;
  }
});

// node_modules/rxjs/internal/operators/map.js
var require_map = __commonJS({
  "node_modules/rxjs/internal/operators/map.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function map(project, thisArg) {
      return function mapOperation(source) {
        if (typeof project !== "function") {
          throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        }
        return source.lift(new MapOperator(project, thisArg));
      };
    }
    exports2.map = map;
    var MapOperator = function() {
      function MapOperator2(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
      }
      MapOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };
      return MapOperator2;
    }();
    exports2.MapOperator = MapOperator;
    var MapSubscriber = function(_super) {
      __extends(MapSubscriber2, _super);
      function MapSubscriber2(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
      }
      MapSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return MapSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/@sanity/observable/operators/map.js
var require_map2 = __commonJS({
  "node_modules/@sanity/observable/operators/map.js"(exports2) {
    exports2.map = require_map().map;
  }
});

// node_modules/is-obj/index.js
var require_is_obj = __commonJS({
  "node_modules/is-obj/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(x) {
      var type = typeof x;
      return x !== null && (type === "object" || type === "function");
    };
  }
});

// node_modules/deep-assign/index.js
var require_deep_assign = __commonJS({
  "node_modules/deep-assign/index.js"(exports2, module2) {
    "use strict";
    var isObj = require_is_obj();
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Sources cannot be null or undefined");
      }
      return Object(val);
    }
    function assignKey(to, from, key) {
      var val = from[key];
      if (val === void 0 || val === null) {
        return;
      }
      if (hasOwnProperty.call(to, key)) {
        if (to[key] === void 0 || to[key] === null) {
          throw new TypeError("Cannot convert undefined or null to object (" + key + ")");
        }
      }
      if (!hasOwnProperty.call(to, key) || !isObj(val)) {
        to[key] = val;
      } else {
        to[key] = assign(Object(to[key]), from[key]);
      }
    }
    function assign(to, from) {
      if (to === from) {
        return to;
      }
      from = Object(from);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          assignKey(to, from, key);
        }
      }
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            assignKey(to, from, symbols[i]);
          }
        }
      }
      return to;
    }
    module2.exports = function deepAssign(target) {
      target = toObject(target);
      for (var s = 1; s < arguments.length; s++) {
        assign(target, arguments[s]);
      }
      return target;
    };
  }
});

// node_modules/@sanity/client/lib/util/getSelection.js
var require_getSelection = __commonJS({
  "node_modules/@sanity/client/lib/util/getSelection.js"(exports2, module2) {
    "use strict";
    module2.exports = function getSelection(sel) {
      if (typeof sel === "string" || Array.isArray(sel)) {
        return {
          id: sel
        };
      }
      if (sel && sel.query) {
        return {
          query: sel.query
        };
      }
      var selectionOpts = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join("\n");
      throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
    };
  }
});

// node_modules/@sanity/client/lib/validators.js
var require_validators = __commonJS({
  "node_modules/@sanity/client/lib/validators.js"(exports2) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var VALID_ASSET_TYPES = ["image", "file"];
    var VALID_INSERT_LOCATIONS = ["before", "after", "replace"];
    exports2.dataset = function(name) {
      if (!/^(~[a-z0-9]{1}[-\w]{0,25}|[a-z0-9]{1}[-\w]{0,19})$/.test(name)) {
        throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 20 characters");
      }
    };
    exports2.projectId = function(id) {
      if (!/^[-a-z0-9]+$/i.test(id)) {
        throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
      }
    };
    exports2.validateAssetType = function(type) {
      if (VALID_ASSET_TYPES.indexOf(type) === -1) {
        throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(", ")));
      }
    };
    exports2.validateObject = function(op, val) {
      if (val === null || _typeof(val) !== "object" || Array.isArray(val)) {
        throw new Error("".concat(op, "() takes an object of properties"));
      }
    };
    exports2.requireDocumentId = function(op, doc) {
      if (!doc._id) {
        throw new Error("".concat(op, '() requires that the document contains an ID ("_id" property)'));
      }
      exports2.validateDocumentId(op, doc._id);
    };
    exports2.validateDocumentId = function(op, id) {
      if (typeof id !== "string" || !/^[a-z0-9_.-]+$/i.test(id)) {
        throw new Error("".concat(op, '(): "').concat(id, '" is not a valid document ID'));
      }
    };
    exports2.validateInsert = function(at, selector, items) {
      var signature = "insert(at, selector, items)";
      if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
        var valid = VALID_INSERT_LOCATIONS.map(function(loc) {
          return '"'.concat(loc, '"');
        }).join(", ");
        throw new Error("".concat(signature, ' takes an "at"-argument which is one of: ').concat(valid));
      }
      if (typeof selector !== "string") {
        throw new Error("".concat(signature, ' takes a "selector"-argument which must be a string'));
      }
      if (!Array.isArray(items)) {
        throw new Error("".concat(signature, ' takes an "items"-argument which must be an array'));
      }
    };
    exports2.hasDataset = function(config) {
      if (!config.gradientMode && !config.dataset) {
        throw new Error("`dataset` must be provided to perform queries");
      }
      return config.dataset || "";
    };
    exports2.requestTag = function(tag) {
      if (typeof tag !== "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) {
        throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
      }
      return tag;
    };
  }
});

// node_modules/@sanity/client/lib/data/patch.js
var require_patch = __commonJS({
  "node_modules/@sanity/client/lib/data/patch.js"(exports2, module2) {
    "use strict";
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var deepAssign = require_deep_assign();
    var assign = require_object_assign();
    var getSelection = require_getSelection();
    var validate = require_validators();
    var validateObject = validate.validateObject;
    var validateInsert = validate.validateInsert;
    function Patch(selection) {
      var operations = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var client = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      this.selection = selection;
      this.operations = assign({}, operations);
      this.client = client;
    }
    assign(Patch.prototype, {
      clone: function clone() {
        return new Patch(this.selection, assign({}, this.operations), this.client);
      },
      merge: function merge(props) {
        validateObject("merge", props);
        var stack = new Error().stack.toString().split("\n").filter(function(str) {
          return str.trim();
        }).slice(2);
        console.warn('The "merge" patch has been deprecated and will be removed in the future\n'.concat(stack.join("\n")));
        return this._assign("merge", deepAssign(this.operations.merge || {}, props));
      },
      set: function set(props) {
        return this._assign("set", props);
      },
      diffMatchPatch: function diffMatchPatch(props) {
        validateObject("diffMatchPatch", props);
        return this._assign("diffMatchPatch", props);
      },
      unset: function unset(attrs) {
        if (!Array.isArray(attrs)) {
          throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        }
        this.operations = assign({}, this.operations, {
          unset: attrs
        });
        return this;
      },
      setIfMissing: function setIfMissing(props) {
        return this._assign("setIfMissing", props);
      },
      replace: function replace(props) {
        validateObject("replace", props);
        return this._set("set", {
          $: props
        });
      },
      inc: function inc(props) {
        return this._assign("inc", props);
      },
      dec: function dec(props) {
        return this._assign("dec", props);
      },
      insert: function insert(at, selector, items) {
        var _this$_assign;
        validateInsert(at, selector, items);
        return this._assign("insert", (_this$_assign = {}, _defineProperty(_this$_assign, at, selector), _defineProperty(_this$_assign, "items", items), _this$_assign));
      },
      append: function append(selector, items) {
        return this.insert("after", "".concat(selector, "[-1]"), items);
      },
      prepend: function prepend(selector, items) {
        return this.insert("before", "".concat(selector, "[0]"), items);
      },
      splice: function splice(selector, start, deleteCount, items) {
        var delAll = typeof deleteCount === "undefined" || deleteCount === -1;
        var startIndex = start < 0 ? start - 1 : start;
        var delCount = delAll ? -1 : Math.max(0, start + deleteCount);
        var delRange = startIndex < 0 && delCount >= 0 ? "" : delCount;
        var rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
        return this.insert("replace", rangeSelector, items || []);
      },
      ifRevisionId: function ifRevisionId(rev) {
        this.operations.ifRevisionID = rev;
        return this;
      },
      serialize: function serialize() {
        return assign(getSelection(this.selection), this.operations);
      },
      toJSON: function toJSON() {
        return this.serialize();
      },
      commit: function commit() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!this.client) {
          throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        }
        var returnFirst = typeof this.selection === "string";
        var opts = assign({
          returnFirst,
          returnDocuments: true
        }, options);
        return this.client.mutate({
          patch: this.serialize()
        }, opts);
      },
      reset: function reset() {
        this.operations = {};
        return this;
      },
      _set: function _set(op, props) {
        return this._assign(op, props, false);
      },
      _assign: function _assign(op, props) {
        var merge = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        validateObject(op, props);
        this.operations = assign({}, this.operations, _defineProperty({}, op, assign({}, merge && this.operations[op] || {}, props)));
        return this;
      }
    });
    module2.exports = Patch;
  }
});

// node_modules/@sanity/client/lib/data/transaction.js
var require_transaction = __commonJS({
  "node_modules/@sanity/client/lib/data/transaction.js"(exports2, module2) {
    "use strict";
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var validators = require_validators();
    var Patch = require_patch();
    var defaultMutateOptions = {
      returnDocuments: false
    };
    function Transaction() {
      var operations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var client = arguments.length > 1 ? arguments[1] : void 0;
      var transactionId = arguments.length > 2 ? arguments[2] : void 0;
      this.trxId = transactionId;
      this.operations = operations;
      this.client = client;
    }
    assign(Transaction.prototype, {
      clone: function clone() {
        return new Transaction(this.operations.slice(0), this.client, this.trxId);
      },
      create: function create(doc) {
        validators.validateObject("create", doc);
        return this._add({
          create: doc
        });
      },
      createIfNotExists: function createIfNotExists(doc) {
        var op = "createIfNotExists";
        validators.validateObject(op, doc);
        validators.requireDocumentId(op, doc);
        return this._add(_defineProperty({}, op, doc));
      },
      createOrReplace: function createOrReplace(doc) {
        var op = "createOrReplace";
        validators.validateObject(op, doc);
        validators.requireDocumentId(op, doc);
        return this._add(_defineProperty({}, op, doc));
      },
      delete: function _delete(documentId) {
        validators.validateDocumentId("delete", documentId);
        return this._add({
          delete: {
            id: documentId
          }
        });
      },
      patch: function patch(documentId, patchOps) {
        var isBuilder = typeof patchOps === "function";
        var isPatch = documentId instanceof Patch;
        if (isPatch) {
          return this._add({
            patch: documentId.serialize()
          });
        }
        if (isBuilder) {
          var patch2 = patchOps(new Patch(documentId, {}, this.client));
          if (!(patch2 instanceof Patch)) {
            throw new Error("function passed to `patch()` must return the patch");
          }
          return this._add({
            patch: patch2.serialize()
          });
        }
        return this._add({
          patch: assign({
            id: documentId
          }, patchOps)
        });
      },
      transactionId: function transactionId(id) {
        if (!id) {
          return this.trxId;
        }
        this.trxId = id;
        return this;
      },
      serialize: function serialize() {
        return this.operations.slice();
      },
      toJSON: function toJSON() {
        return this.serialize();
      },
      commit: function commit(options) {
        if (!this.client) {
          throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        }
        return this.client.mutate(this.serialize(), assign({
          transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
      },
      reset: function reset() {
        this.operations = [];
        return this;
      },
      _add: function _add(mut) {
        this.operations.push(mut);
        return this;
      }
    });
    module2.exports = Transaction;
  }
});

// node_modules/@sanity/client/lib/data/encodeQueryString.js
var require_encodeQueryString = __commonJS({
  "node_modules/@sanity/client/lib/data/encodeQueryString.js"(exports2, module2) {
    "use strict";
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    var enc = encodeURIComponent;
    module2.exports = function(_ref) {
      var query = _ref.query, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options;
      var tag = options.tag, opts = _objectWithoutProperties(options, ["tag"]);
      var q = "query=".concat(enc(query));
      var base = tag ? "?tag=".concat(enc(tag), "&").concat(q) : "?".concat(q);
      var qString = Object.keys(params).reduce(function(qs, param) {
        return "".concat(qs, "&").concat(enc("$".concat(param)), "=").concat(enc(JSON.stringify(params[param])));
      }, base);
      return Object.keys(opts).reduce(function(qs, option) {
        return options[option] ? "".concat(qs, "&").concat(enc(option), "=").concat(enc(options[option])) : qs;
      }, qString);
    };
  }
});

// node_modules/rxjs/internal/util/canReportError.js
var require_canReportError = __commonJS({
  "node_modules/rxjs/internal/util/canReportError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function canReportError(observer) {
      while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }
      return true;
    }
    exports2.canReportError = canReportError;
  }
});

// node_modules/rxjs/internal/util/toSubscriber.js
var require_toSubscriber = __commonJS({
  "node_modules/rxjs/internal/util/toSubscriber.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    var rxSubscriber_1 = require_rxSubscriber();
    var Observer_1 = require_Observer();
    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }
      if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }
      return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }
    exports2.toSubscriber = toSubscriber;
  }
});

// node_modules/rxjs/internal/symbol/observable.js
var require_observable = __commonJS({
  "node_modules/rxjs/internal/symbol/observable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// node_modules/rxjs/internal/util/identity.js
var require_identity = __commonJS({
  "node_modules/rxjs/internal/util/identity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function identity(x) {
      return x;
    }
    exports2.identity = identity;
  }
});

// node_modules/rxjs/internal/util/pipe.js
var require_pipe = __commonJS({
  "node_modules/rxjs/internal/util/pipe.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var identity_1 = require_identity();
    function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
    }
    exports2.pipe = pipe;
    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }
      if (fns.length === 1) {
        return fns[0];
      }
      return function piped(input) {
        return fns.reduce(function(prev, fn) {
          return fn(prev);
        }, input);
      };
    }
    exports2.pipeFromArray = pipeFromArray;
  }
});

// node_modules/rxjs/internal/Observable.js
var require_Observable = __commonJS({
  "node_modules/rxjs/internal/Observable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var canReportError_1 = require_canReportError();
    var toSubscriber_1 = require_toSubscriber();
    var observable_1 = require_observable();
    var pipe_1 = require_pipe();
    var config_1 = require_config();
    var Observable = function() {
      function Observable2(subscribe) {
        this._isScalar = false;
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      Observable2.prototype.lift = function(operator) {
        var observable = new Observable2();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };
      Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }
        return sink;
      };
      Observable2.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }
          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };
      Observable2.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };
      Observable2.prototype._subscribe = function(subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };
      Observable2.prototype[observable_1.observable] = function() {
        return this;
      };
      Observable2.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
          return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
      };
      Observable2.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve(value);
          });
        });
      };
      Observable2.create = function(subscribe) {
        return new Observable2(subscribe);
      };
      return Observable2;
    }();
    exports2.Observable = Observable;
    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }
      if (!promiseCtor) {
        throw new Error("no Promise impl found");
      }
      return promiseCtor;
    }
  }
});

// node_modules/rxjs/internal/operators/scan.js
var require_scan = __commonJS({
  "node_modules/rxjs/internal/operators/scan.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function scan(accumulator, seed) {
      var hasSeed = false;
      if (arguments.length >= 2) {
        hasSeed = true;
      }
      return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
      };
    }
    exports2.scan = scan;
    var ScanOperator = function() {
      function ScanOperator2(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) {
          hasSeed = false;
        }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
      }
      ScanOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
      };
      return ScanOperator2;
    }();
    var ScanSubscriber = function(_super) {
      __extends(ScanSubscriber2, _super);
      function ScanSubscriber2(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
      }
      Object.defineProperty(ScanSubscriber2.prototype, "seed", {
        get: function() {
          return this._seed;
        },
        set: function(value) {
          this.hasSeed = true;
          this._seed = value;
        },
        enumerable: true,
        configurable: true
      });
      ScanSubscriber2.prototype._next = function(value) {
        if (!this.hasSeed) {
          this.seed = value;
          this.destination.next(value);
        } else {
          return this._tryNext(value);
        }
      };
      ScanSubscriber2.prototype._tryNext = function(value) {
        var index = this.index++;
        var result;
        try {
          result = this.accumulator(this.seed, value, index);
        } catch (err) {
          this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
      };
      return ScanSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js
var require_ArgumentOutOfRangeError = __commonJS({
  "node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var ArgumentOutOfRangeErrorImpl = function() {
      function ArgumentOutOfRangeErrorImpl2() {
        Error.call(this);
        this.message = "argument out of range";
        this.name = "ArgumentOutOfRangeError";
        return this;
      }
      ArgumentOutOfRangeErrorImpl2.prototype = Object.create(Error.prototype);
      return ArgumentOutOfRangeErrorImpl2;
    }();
    exports2.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
  }
});

// node_modules/rxjs/internal/observable/empty.js
var require_empty = __commonJS({
  "node_modules/rxjs/internal/observable/empty.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Observable_1 = require_Observable();
    exports2.EMPTY = new Observable_1.Observable(function(subscriber) {
      return subscriber.complete();
    });
    function empty(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : exports2.EMPTY;
    }
    exports2.empty = empty;
    function emptyScheduled(scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
          return subscriber.complete();
        });
      });
    }
  }
});

// node_modules/rxjs/internal/operators/takeLast.js
var require_takeLast = __commonJS({
  "node_modules/rxjs/internal/operators/takeLast.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
    var empty_1 = require_empty();
    function takeLast(count) {
      return function takeLastOperatorFunction(source) {
        if (count === 0) {
          return empty_1.empty();
        } else {
          return source.lift(new TakeLastOperator(count));
        }
      };
    }
    exports2.takeLast = takeLast;
    var TakeLastOperator = function() {
      function TakeLastOperator2(total) {
        this.total = total;
        if (this.total < 0) {
          throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }
      }
      TakeLastOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
      };
      return TakeLastOperator2;
    }();
    var TakeLastSubscriber = function(_super) {
      __extends(TakeLastSubscriber2, _super);
      function TakeLastSubscriber2(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
      }
      TakeLastSubscriber2.prototype._next = function(value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
          ring.push(value);
        } else {
          var index = count % total;
          ring[index] = value;
        }
      };
      TakeLastSubscriber2.prototype._complete = function() {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
          var total = this.count >= this.total ? this.total : this.count;
          var ring = this.ring;
          for (var i = 0; i < total; i++) {
            var idx = count++ % total;
            destination.next(ring[idx]);
          }
        }
        destination.complete();
      };
      return TakeLastSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/rxjs/internal/operators/defaultIfEmpty.js
var require_defaultIfEmpty = __commonJS({
  "node_modules/rxjs/internal/operators/defaultIfEmpty.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function defaultIfEmpty(defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = null;
      }
      return function(source) {
        return source.lift(new DefaultIfEmptyOperator(defaultValue));
      };
    }
    exports2.defaultIfEmpty = defaultIfEmpty;
    var DefaultIfEmptyOperator = function() {
      function DefaultIfEmptyOperator2(defaultValue) {
        this.defaultValue = defaultValue;
      }
      DefaultIfEmptyOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
      };
      return DefaultIfEmptyOperator2;
    }();
    var DefaultIfEmptySubscriber = function(_super) {
      __extends(DefaultIfEmptySubscriber2, _super);
      function DefaultIfEmptySubscriber2(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
      }
      DefaultIfEmptySubscriber2.prototype._next = function(value) {
        this.isEmpty = false;
        this.destination.next(value);
      };
      DefaultIfEmptySubscriber2.prototype._complete = function() {
        if (this.isEmpty) {
          this.destination.next(this.defaultValue);
        }
        this.destination.complete();
      };
      return DefaultIfEmptySubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/rxjs/internal/operators/reduce.js
var require_reduce = __commonJS({
  "node_modules/rxjs/internal/operators/reduce.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var scan_1 = require_scan();
    var takeLast_1 = require_takeLast();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var pipe_1 = require_pipe();
    function reduce(accumulator, seed) {
      if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
          return pipe_1.pipe(scan_1.scan(accumulator, seed), takeLast_1.takeLast(1), defaultIfEmpty_1.defaultIfEmpty(seed))(source);
        };
      }
      return function reduceOperatorFunction(source) {
        return pipe_1.pipe(scan_1.scan(function(acc, value, index) {
          return accumulator(acc, value, index + 1);
        }), takeLast_1.takeLast(1))(source);
      };
    }
    exports2.reduce = reduce;
  }
});

// node_modules/@sanity/observable/operators/reduce.js
var require_reduce2 = __commonJS({
  "node_modules/@sanity/observable/operators/reduce.js"(exports2) {
    exports2.reduce = require_reduce().reduce;
  }
});

// node_modules/@sanity/observable/lib/SanityObservableMinimal.js
var require_SanityObservableMinimal = __commonJS({
  "node_modules/@sanity/observable/lib/SanityObservableMinimal.js"(exports2, module2) {
    "use strict";
    var _require = require_Observable();
    var Observable = _require.Observable;
    var assign = require_object_assign();
    var _require2 = require_map2();
    var map = _require2.map;
    var _require3 = require_filter2();
    var filter = _require3.filter;
    var _require4 = require_reduce2();
    var reduce = _require4.reduce;
    function SanityObservableMinimal() {
      Observable.apply(this, arguments);
    }
    SanityObservableMinimal.prototype = Object.create(assign(Object.create(null), Observable.prototype));
    Object.defineProperty(SanityObservableMinimal.prototype, "constructor", {
      value: SanityObservableMinimal,
      enumerable: false,
      writable: true,
      configurable: true
    });
    SanityObservableMinimal.prototype.lift = function lift(operator) {
      var observable = new SanityObservableMinimal();
      observable.source = this;
      observable.operator = operator;
      return observable;
    };
    function createDeprecatedMemberOp(name, op) {
      var hasWarned = false;
      return function deprecatedOperator() {
        if (!hasWarned) {
          hasWarned = true;
          console.warn(new Error("Calling observable.".concat(name, "(...) is deprecated. Please use observable.pipe(").concat(name, "(...)) instead")));
        }
        return this.pipe(op.apply(this, arguments));
      };
    }
    SanityObservableMinimal.prototype.map = createDeprecatedMemberOp("map", map);
    SanityObservableMinimal.prototype.filter = createDeprecatedMemberOp("filter", filter);
    SanityObservableMinimal.prototype.reduce = createDeprecatedMemberOp("filter", reduce);
    module2.exports = SanityObservableMinimal;
  }
});

// node_modules/@sanity/observable/minimal.js
var require_minimal = __commonJS({
  "node_modules/@sanity/observable/minimal.js"(exports2, module2) {
    module2.exports = require_SanityObservableMinimal();
  }
});

// node_modules/requires-port/index.js
var require_requires_port = __commonJS({
  "node_modules/requires-port/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function required(port, protocol) {
      protocol = protocol.split(":")[0];
      port = +port;
      if (!port)
        return false;
      switch (protocol) {
        case "http":
        case "ws":
          return port !== 80;
        case "https":
        case "wss":
          return port !== 443;
        case "ftp":
          return port !== 21;
        case "gopher":
          return port !== 70;
        case "file":
          return false;
      }
      return port !== 0;
    };
  }
});

// node_modules/querystringify/index.js
var require_querystringify = __commonJS({
  "node_modules/querystringify/index.js"(exports2) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var undef;
    function decode(input) {
      try {
        return decodeURIComponent(input.replace(/\+/g, " "));
      } catch (e) {
        return null;
      }
    }
    function encode(input) {
      try {
        return encodeURIComponent(input);
      } catch (e) {
        return null;
      }
    }
    function querystring(query) {
      var parser = /([^=?#&]+)=?([^&]*)/g, result = {}, part;
      while (part = parser.exec(query)) {
        var key = decode(part[1]), value = decode(part[2]);
        if (key === null || value === null || key in result)
          continue;
        result[key] = value;
      }
      return result;
    }
    function querystringify(obj, prefix) {
      prefix = prefix || "";
      var pairs = [], value, key;
      if (typeof prefix !== "string")
        prefix = "?";
      for (key in obj) {
        if (has.call(obj, key)) {
          value = obj[key];
          if (!value && (value === null || value === undef || isNaN(value))) {
            value = "";
          }
          key = encode(key);
          value = encode(value);
          if (key === null || value === null)
            continue;
          pairs.push(key + "=" + value);
        }
      }
      return pairs.length ? prefix + pairs.join("&") : "";
    }
    exports2.stringify = querystringify;
    exports2.parse = querystring;
  }
});

// node_modules/url-parse/index.js
var require_url_parse = __commonJS({
  "node_modules/url-parse/index.js"(exports2, module2) {
    "use strict";
    var required = require_requires_port();
    var qs = require_querystringify();
    var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/;
    var protocolre = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i;
    var whitespace = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]";
    var left = new RegExp("^" + whitespace + "+");
    function trimLeft(str) {
      return (str ? str : "").toString().replace(left, "");
    }
    var rules = [
      ["#", "hash"],
      ["?", "query"],
      function sanitize(address) {
        return address.replace("\\", "/");
      },
      ["/", "pathname"],
      ["@", "auth", 1],
      [NaN, "host", void 0, 1, 1],
      [/:(\d+)$/, "port", void 0, 1],
      [NaN, "hostname", void 0, 1, 1]
    ];
    var ignore = { hash: 1, query: 1 };
    function lolcation(loc) {
      var globalVar;
      if (typeof window !== "undefined")
        globalVar = window;
      else if (typeof global !== "undefined")
        globalVar = global;
      else if (typeof self !== "undefined")
        globalVar = self;
      else
        globalVar = {};
      var location = globalVar.location || {};
      loc = loc || location;
      var finaldestination = {}, type = typeof loc, key;
      if (loc.protocol === "blob:") {
        finaldestination = new Url(unescape(loc.pathname), {});
      } else if (type === "string") {
        finaldestination = new Url(loc, {});
        for (key in ignore)
          delete finaldestination[key];
      } else if (type === "object") {
        for (key in loc) {
          if (key in ignore)
            continue;
          finaldestination[key] = loc[key];
        }
        if (finaldestination.slashes === void 0) {
          finaldestination.slashes = slashes.test(loc.href);
        }
      }
      return finaldestination;
    }
    function extractProtocol(address) {
      address = trimLeft(address);
      var match = protocolre.exec(address), protocol = match[1] ? match[1].toLowerCase() : "", slashes2 = !!(match[2] && match[2].length >= 2), rest = match[2] && match[2].length === 1 ? "/" + match[3] : match[3];
      return {
        protocol,
        slashes: slashes2,
        rest
      };
    }
    function resolve(relative, base) {
      if (relative === "")
        return base;
      var path = (base || "/").split("/").slice(0, -1).concat(relative.split("/")), i = path.length, last = path[i - 1], unshift = false, up = 0;
      while (i--) {
        if (path[i] === ".") {
          path.splice(i, 1);
        } else if (path[i] === "..") {
          path.splice(i, 1);
          up++;
        } else if (up) {
          if (i === 0)
            unshift = true;
          path.splice(i, 1);
          up--;
        }
      }
      if (unshift)
        path.unshift("");
      if (last === "." || last === "..")
        path.push("");
      return path.join("/");
    }
    function Url(address, location, parser) {
      address = trimLeft(address);
      if (!(this instanceof Url)) {
        return new Url(address, location, parser);
      }
      var relative, extracted, parse, instruction, index, key, instructions = rules.slice(), type = typeof location, url = this, i = 0;
      if (type !== "object" && type !== "string") {
        parser = location;
        location = null;
      }
      if (parser && typeof parser !== "function")
        parser = qs.parse;
      location = lolcation(location);
      extracted = extractProtocol(address || "");
      relative = !extracted.protocol && !extracted.slashes;
      url.slashes = extracted.slashes || relative && location.slashes;
      url.protocol = extracted.protocol || location.protocol || "";
      address = extracted.rest;
      if (!extracted.slashes)
        instructions[3] = [/(.*)/, "pathname"];
      for (; i < instructions.length; i++) {
        instruction = instructions[i];
        if (typeof instruction === "function") {
          address = instruction(address);
          continue;
        }
        parse = instruction[0];
        key = instruction[1];
        if (parse !== parse) {
          url[key] = address;
        } else if (typeof parse === "string") {
          if (~(index = address.indexOf(parse))) {
            if (typeof instruction[2] === "number") {
              url[key] = address.slice(0, index);
              address = address.slice(index + instruction[2]);
            } else {
              url[key] = address.slice(index);
              address = address.slice(0, index);
            }
          }
        } else if (index = parse.exec(address)) {
          url[key] = index[1];
          address = address.slice(0, index.index);
        }
        url[key] = url[key] || (relative && instruction[3] ? location[key] || "" : "");
        if (instruction[4])
          url[key] = url[key].toLowerCase();
      }
      if (parser)
        url.query = parser(url.query);
      if (relative && location.slashes && url.pathname.charAt(0) !== "/" && (url.pathname !== "" || location.pathname !== "")) {
        url.pathname = resolve(url.pathname, location.pathname);
      }
      if (url.pathname.charAt(0) !== "/" && url.hostname) {
        url.pathname = "/" + url.pathname;
      }
      if (!required(url.port, url.protocol)) {
        url.host = url.hostname;
        url.port = "";
      }
      url.username = url.password = "";
      if (url.auth) {
        instruction = url.auth.split(":");
        url.username = instruction[0] || "";
        url.password = instruction[1] || "";
      }
      url.origin = url.protocol && url.host && url.protocol !== "file:" ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
    }
    function set(part, value, fn) {
      var url = this;
      switch (part) {
        case "query":
          if (typeof value === "string" && value.length) {
            value = (fn || qs.parse)(value);
          }
          url[part] = value;
          break;
        case "port":
          url[part] = value;
          if (!required(value, url.protocol)) {
            url.host = url.hostname;
            url[part] = "";
          } else if (value) {
            url.host = url.hostname + ":" + value;
          }
          break;
        case "hostname":
          url[part] = value;
          if (url.port)
            value += ":" + url.port;
          url.host = value;
          break;
        case "host":
          url[part] = value;
          if (/:\d+$/.test(value)) {
            value = value.split(":");
            url.port = value.pop();
            url.hostname = value.join(":");
          } else {
            url.hostname = value;
            url.port = "";
          }
          break;
        case "protocol":
          url.protocol = value.toLowerCase();
          url.slashes = !fn;
          break;
        case "pathname":
        case "hash":
          if (value) {
            var char = part === "pathname" ? "/" : "#";
            url[part] = value.charAt(0) !== char ? char + value : value;
          } else {
            url[part] = value;
          }
          break;
        default:
          url[part] = value;
      }
      for (var i = 0; i < rules.length; i++) {
        var ins = rules[i];
        if (ins[4])
          url[ins[1]] = url[ins[1]].toLowerCase();
      }
      url.origin = url.protocol && url.host && url.protocol !== "file:" ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
      return url;
    }
    function toString(stringify) {
      if (!stringify || typeof stringify !== "function")
        stringify = qs.stringify;
      var query, url = this, protocol = url.protocol;
      if (protocol && protocol.charAt(protocol.length - 1) !== ":")
        protocol += ":";
      var result = protocol + (url.slashes ? "//" : "");
      if (url.username) {
        result += url.username;
        if (url.password)
          result += ":" + url.password;
        result += "@";
      }
      result += url.host + url.pathname;
      query = typeof url.query === "object" ? stringify(url.query) : url.query;
      if (query)
        result += query.charAt(0) !== "?" ? "?" + query : query;
      if (url.hash)
        result += url.hash;
      return result;
    }
    Url.prototype = { set, toString };
    Url.extractProtocol = extractProtocol;
    Url.location = lolcation;
    Url.trimLeft = trimLeft;
    Url.qs = qs;
    module2.exports = Url;
  }
});

// node_modules/original/index.js
var require_original = __commonJS({
  "node_modules/original/index.js"(exports2, module2) {
    "use strict";
    var parse = require_url_parse();
    function origin(url) {
      if (typeof url === "string")
        url = parse(url);
      if (!url.protocol || !url.hostname)
        return "null";
      return (url.protocol + "//" + url.host).toLowerCase();
    }
    origin.same = function same(a, b) {
      return origin(a) === origin(b);
    };
    module2.exports = origin;
  }
});

// node_modules/eventsource/lib/eventsource.js
var require_eventsource = __commonJS({
  "node_modules/eventsource/lib/eventsource.js"(exports2, module2) {
    var original = require_original();
    var parse = require("url").parse;
    var events = require("events");
    var https = require("https");
    var http = require("http");
    var util = require("util");
    var httpsOptions = [
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "secureProtocol",
      "servername",
      "checkServerIdentity"
    ];
    var bom = [239, 187, 191];
    var colon = 58;
    var space = 32;
    var lineFeed = 10;
    var carriageReturn = 13;
    function hasBom(buf) {
      return bom.every(function(charCode, index) {
        return buf[index] === charCode;
      });
    }
    function EventSource(url, eventSourceInitDict) {
      var readyState = EventSource.CONNECTING;
      Object.defineProperty(this, "readyState", {
        get: function() {
          return readyState;
        }
      });
      Object.defineProperty(this, "url", {
        get: function() {
          return url;
        }
      });
      var self2 = this;
      self2.reconnectInterval = 1e3;
      self2.connectionInProgress = false;
      function onConnectionClosed(message) {
        if (readyState === EventSource.CLOSED)
          return;
        readyState = EventSource.CONNECTING;
        _emit("error", new Event("error", { message }));
        if (reconnectUrl) {
          url = reconnectUrl;
          reconnectUrl = null;
        }
        setTimeout(function() {
          if (readyState !== EventSource.CONNECTING || self2.connectionInProgress) {
            return;
          }
          self2.connectionInProgress = true;
          connect();
        }, self2.reconnectInterval);
      }
      var req;
      var lastEventId = "";
      if (eventSourceInitDict && eventSourceInitDict.headers && eventSourceInitDict.headers["Last-Event-ID"]) {
        lastEventId = eventSourceInitDict.headers["Last-Event-ID"];
        delete eventSourceInitDict.headers["Last-Event-ID"];
      }
      var discardTrailingNewline = false;
      var data = "";
      var eventName = "";
      var reconnectUrl = null;
      function connect() {
        var options = parse(url);
        var isSecure = options.protocol === "https:";
        options.headers = { "Cache-Control": "no-cache", "Accept": "text/event-stream" };
        if (lastEventId)
          options.headers["Last-Event-ID"] = lastEventId;
        if (eventSourceInitDict && eventSourceInitDict.headers) {
          for (var i in eventSourceInitDict.headers) {
            var header = eventSourceInitDict.headers[i];
            if (header) {
              options.headers[i] = header;
            }
          }
        }
        options.rejectUnauthorized = !(eventSourceInitDict && !eventSourceInitDict.rejectUnauthorized);
        if (eventSourceInitDict && eventSourceInitDict.createConnection !== void 0) {
          options.createConnection = eventSourceInitDict.createConnection;
        }
        var useProxy = eventSourceInitDict && eventSourceInitDict.proxy;
        if (useProxy) {
          var proxy = parse(eventSourceInitDict.proxy);
          isSecure = proxy.protocol === "https:";
          options.protocol = isSecure ? "https:" : "http:";
          options.path = url;
          options.headers.Host = options.host;
          options.hostname = proxy.hostname;
          options.host = proxy.host;
          options.port = proxy.port;
        }
        if (eventSourceInitDict && eventSourceInitDict.https) {
          for (var optName in eventSourceInitDict.https) {
            if (httpsOptions.indexOf(optName) === -1) {
              continue;
            }
            var option = eventSourceInitDict.https[optName];
            if (option !== void 0) {
              options[optName] = option;
            }
          }
        }
        if (eventSourceInitDict && eventSourceInitDict.withCredentials !== void 0) {
          options.withCredentials = eventSourceInitDict.withCredentials;
        }
        req = (isSecure ? https : http).request(options, function(res) {
          self2.connectionInProgress = false;
          if (res.statusCode === 500 || res.statusCode === 502 || res.statusCode === 503 || res.statusCode === 504) {
            _emit("error", new Event("error", { status: res.statusCode, message: res.statusMessage }));
            onConnectionClosed();
            return;
          }
          if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
            if (!res.headers.location) {
              _emit("error", new Event("error", { status: res.statusCode, message: res.statusMessage }));
              return;
            }
            if (res.statusCode === 307)
              reconnectUrl = url;
            url = res.headers.location;
            process.nextTick(connect);
            return;
          }
          if (res.statusCode !== 200) {
            _emit("error", new Event("error", { status: res.statusCode, message: res.statusMessage }));
            return self2.close();
          }
          readyState = EventSource.OPEN;
          res.on("close", function() {
            res.removeAllListeners("close");
            res.removeAllListeners("end");
            onConnectionClosed();
          });
          res.on("end", function() {
            res.removeAllListeners("close");
            res.removeAllListeners("end");
            onConnectionClosed();
          });
          _emit("open", new Event("open"));
          var isFirst = true;
          var buf;
          var startingPos = 0;
          var startingFieldLength = -1;
          res.on("data", function(chunk) {
            buf = buf ? Buffer.concat([buf, chunk]) : chunk;
            if (isFirst && hasBom(buf)) {
              buf = buf.slice(bom.length);
            }
            isFirst = false;
            var pos = 0;
            var length = buf.length;
            while (pos < length) {
              if (discardTrailingNewline) {
                if (buf[pos] === lineFeed) {
                  ++pos;
                }
                discardTrailingNewline = false;
              }
              var lineLength = -1;
              var fieldLength = startingFieldLength;
              var c;
              for (var i2 = startingPos; lineLength < 0 && i2 < length; ++i2) {
                c = buf[i2];
                if (c === colon) {
                  if (fieldLength < 0) {
                    fieldLength = i2 - pos;
                  }
                } else if (c === carriageReturn) {
                  discardTrailingNewline = true;
                  lineLength = i2 - pos;
                } else if (c === lineFeed) {
                  lineLength = i2 - pos;
                }
              }
              if (lineLength < 0) {
                startingPos = length - pos;
                startingFieldLength = fieldLength;
                break;
              } else {
                startingPos = 0;
                startingFieldLength = -1;
              }
              parseEventStreamLine(buf, pos, fieldLength, lineLength);
              pos += lineLength + 1;
            }
            if (pos === length) {
              buf = void 0;
            } else if (pos > 0) {
              buf = buf.slice(pos);
            }
          });
        });
        req.on("error", function(err) {
          self2.connectionInProgress = false;
          onConnectionClosed(err.message);
        });
        if (req.setNoDelay)
          req.setNoDelay(true);
        req.end();
      }
      connect();
      function _emit() {
        if (self2.listeners(arguments[0]).length > 0) {
          self2.emit.apply(self2, arguments);
        }
      }
      this._close = function() {
        if (readyState === EventSource.CLOSED)
          return;
        readyState = EventSource.CLOSED;
        if (req.abort)
          req.abort();
        if (req.xhr && req.xhr.abort)
          req.xhr.abort();
      };
      function parseEventStreamLine(buf, pos, fieldLength, lineLength) {
        if (lineLength === 0) {
          if (data.length > 0) {
            var type = eventName || "message";
            _emit(type, new MessageEvent(type, {
              data: data.slice(0, -1),
              lastEventId,
              origin: original(url)
            }));
            data = "";
          }
          eventName = void 0;
        } else if (fieldLength > 0) {
          var noValue = fieldLength < 0;
          var step = 0;
          var field = buf.slice(pos, pos + (noValue ? lineLength : fieldLength)).toString();
          if (noValue) {
            step = lineLength;
          } else if (buf[pos + fieldLength + 1] !== space) {
            step = fieldLength + 1;
          } else {
            step = fieldLength + 2;
          }
          pos += step;
          var valueLength = lineLength - step;
          var value = buf.slice(pos, pos + valueLength).toString();
          if (field === "data") {
            data += value + "\n";
          } else if (field === "event") {
            eventName = value;
          } else if (field === "id") {
            lastEventId = value;
          } else if (field === "retry") {
            var retry = parseInt(value, 10);
            if (!Number.isNaN(retry)) {
              self2.reconnectInterval = retry;
            }
          }
        }
      }
    }
    module2.exports = EventSource;
    util.inherits(EventSource, events.EventEmitter);
    EventSource.prototype.constructor = EventSource;
    ["open", "error", "message"].forEach(function(method) {
      Object.defineProperty(EventSource.prototype, "on" + method, {
        get: function get() {
          var listener = this.listeners(method)[0];
          return listener ? listener._listener ? listener._listener : listener : void 0;
        },
        set: function set(listener) {
          this.removeAllListeners(method);
          this.addEventListener(method, listener);
        }
      });
    });
    Object.defineProperty(EventSource, "CONNECTING", { enumerable: true, value: 0 });
    Object.defineProperty(EventSource, "OPEN", { enumerable: true, value: 1 });
    Object.defineProperty(EventSource, "CLOSED", { enumerable: true, value: 2 });
    EventSource.prototype.CONNECTING = 0;
    EventSource.prototype.OPEN = 1;
    EventSource.prototype.CLOSED = 2;
    EventSource.prototype.close = function() {
      this._close();
    };
    EventSource.prototype.addEventListener = function addEventListener(type, listener) {
      if (typeof listener === "function") {
        listener._listener = listener;
        this.on(type, listener);
      }
    };
    EventSource.prototype.dispatchEvent = function dispatchEvent(event) {
      if (!event.type) {
        throw new Error("UNSPECIFIED_EVENT_TYPE_ERR");
      }
      this.emit(event.type, event.detail);
    };
    EventSource.prototype.removeEventListener = function removeEventListener(type, listener) {
      if (typeof listener === "function") {
        listener._listener = void 0;
        this.removeListener(type, listener);
      }
    };
    function Event(type, optionalProperties) {
      Object.defineProperty(this, "type", { writable: false, value: type, enumerable: true });
      if (optionalProperties) {
        for (var f in optionalProperties) {
          if (optionalProperties.hasOwnProperty(f)) {
            Object.defineProperty(this, f, { writable: false, value: optionalProperties[f], enumerable: true });
          }
        }
      }
    }
    function MessageEvent(type, eventInitDict) {
      Object.defineProperty(this, "type", { writable: false, value: type, enumerable: true });
      for (var f in eventInitDict) {
        if (eventInitDict.hasOwnProperty(f)) {
          Object.defineProperty(this, f, { writable: false, value: eventInitDict[f], enumerable: true });
        }
      }
    }
  }
});

// node_modules/@sanity/eventsource/node.js
var require_node = __commonJS({
  "node_modules/@sanity/eventsource/node.js"(exports2, module2) {
    module2.exports = require_eventsource();
  }
});

// node_modules/@sanity/generate-help-url/index.js
var require_generate_help_url = __commonJS({
  "node_modules/@sanity/generate-help-url/index.js"(exports2, module2) {
    var baseUrl = "https://docs.sanity.io/help/";
    module2.exports = function generateHelpUrl(slug) {
      return baseUrl + slug;
    };
  }
});

// node_modules/@sanity/client/lib/util/pick.js
var require_pick = __commonJS({
  "node_modules/@sanity/client/lib/util/pick.js"(exports2, module2) {
    "use strict";
    module2.exports = function(obj, props) {
      return props.reduce(function(selection, prop) {
        if (typeof obj[prop] === "undefined") {
          return selection;
        }
        selection[prop] = obj[prop];
        return selection;
      }, {});
    };
  }
});

// node_modules/@sanity/client/lib/util/once.js
var require_once = __commonJS({
  "node_modules/@sanity/client/lib/util/once.js"(exports2, module2) {
    "use strict";
    module2.exports = function(fn) {
      var didCall = false;
      var returnValue;
      return function() {
        if (didCall) {
          return returnValue;
        }
        returnValue = fn.apply(void 0, arguments);
        didCall = true;
        return returnValue;
      };
    };
  }
});

// node_modules/@sanity/client/lib/util/defaults.js
var require_defaults = __commonJS({
  "node_modules/@sanity/client/lib/util/defaults.js"(exports2, module2) {
    "use strict";
    module2.exports = function(obj, defaults) {
      return Object.keys(defaults).concat(Object.keys(obj)).reduce(function(target, prop) {
        target[prop] = typeof obj[prop] === "undefined" ? defaults[prop] : obj[prop];
        return target;
      }, {});
    };
  }
});

// node_modules/@sanity/client/lib/data/listen.js
var require_listen = __commonJS({
  "node_modules/@sanity/client/lib/data/listen.js"(exports2, module2) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var Observable = require_minimal();
    var polyfilledEventSource = require_node();
    var generateHelpUrl = require_generate_help_url();
    var pick = require_pick();
    var once = require_once();
    var defaults = require_defaults();
    var encodeQueryString = require_encodeQueryString();
    var tokenWarning = ["Using token with listeners is not supported in browsers. ", "For more info, see ".concat(generateHelpUrl("js-client-listener-tokens-browser"), ".")];
    var printTokenWarning = once(function() {
      return console.warn(tokenWarning.join(" "));
    });
    var isWindowEventSource = Boolean(typeof window !== "undefined" && window.EventSource);
    var EventSource = isWindowEventSource ? window.EventSource : polyfilledEventSource;
    var possibleOptions = ["includePreviousRevision", "includeResult", "visibility", "effectFormat", "tag"];
    var defaultOptions = {
      includeResult: true
    };
    module2.exports = function listen(query, params) {
      var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var _this$clientConfig = this.clientConfig, url = _this$clientConfig.url, token = _this$clientConfig.token, withCredentials = _this$clientConfig.withCredentials, requestTagPrefix = _this$clientConfig.requestTagPrefix;
      var tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag;
      var options = _objectSpread(_objectSpread({}, defaults(opts, defaultOptions)), {}, {
        tag
      });
      var listenOpts = pick(options, possibleOptions);
      var qs = encodeQueryString({
        query,
        params,
        options: listenOpts,
        tag
      });
      var uri = "".concat(url).concat(this.getDataUrl("listen", qs));
      var listenFor = options.events ? options.events : ["mutation"];
      var shouldEmitReconnect = listenFor.indexOf("reconnect") !== -1;
      if (token && isWindowEventSource) {
        printTokenWarning();
      }
      var esOptions = {};
      if (token || withCredentials) {
        esOptions.withCredentials = true;
      }
      if (token) {
        esOptions.headers = {
          Authorization: "Bearer ".concat(token)
        };
      }
      return new Observable(function(observer) {
        var es = getEventSource();
        var reconnectTimer;
        var stopped = false;
        function onError() {
          if (stopped) {
            return;
          }
          emitReconnect();
          if (stopped) {
            return;
          }
          if (es.readyState === EventSource.CLOSED) {
            unsubscribe();
            clearTimeout(reconnectTimer);
            reconnectTimer = setTimeout(open, 100);
          }
        }
        function onChannelError(err) {
          observer.error(cooerceError(err));
        }
        function onMessage(evt) {
          var event = parseEvent(evt);
          return event instanceof Error ? observer.error(event) : observer.next(event);
        }
        function onDisconnect(evt) {
          stopped = true;
          unsubscribe();
          observer.complete();
        }
        function unsubscribe() {
          es.removeEventListener("error", onError, false);
          es.removeEventListener("channelError", onChannelError, false);
          es.removeEventListener("disconnect", onDisconnect, false);
          listenFor.forEach(function(type) {
            return es.removeEventListener(type, onMessage, false);
          });
          es.close();
        }
        function emitReconnect() {
          if (shouldEmitReconnect) {
            observer.next({
              type: "reconnect"
            });
          }
        }
        function getEventSource() {
          var evs = new EventSource(uri, esOptions);
          evs.addEventListener("error", onError, false);
          evs.addEventListener("channelError", onChannelError, false);
          evs.addEventListener("disconnect", onDisconnect, false);
          listenFor.forEach(function(type) {
            return evs.addEventListener(type, onMessage, false);
          });
          return evs;
        }
        function open() {
          es = getEventSource();
        }
        function stop() {
          stopped = true;
          unsubscribe();
        }
        return stop;
      });
    };
    function parseEvent(event) {
      try {
        var data = event.data && JSON.parse(event.data) || {};
        return assign({
          type: event.type
        }, data);
      } catch (err) {
        return err;
      }
    }
    function cooerceError(err) {
      if (err instanceof Error) {
        return err;
      }
      var evt = parseEvent(err);
      return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
    }
    function extractErrorMessage(err) {
      if (!err.error) {
        return err.message || "Unknown listener error";
      }
      if (err.error.description) {
        return err.error.description;
      }
      return typeof err.error === "string" ? err.error : JSON.stringify(err.error, null, 2);
    }
  }
});

// node_modules/@sanity/client/lib/data/dataMethods.js
var require_dataMethods = __commonJS({
  "node_modules/@sanity/client/lib/data/dataMethods.js"(exports2, module2) {
    "use strict";
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var _require = require_filter2();
    var filter = _require.filter;
    var _require2 = require_map2();
    var map = _require2.map;
    var validators = require_validators();
    var getSelection = require_getSelection();
    var encodeQueryString = require_encodeQueryString();
    var Transaction = require_transaction();
    var Patch = require_patch();
    var listen = require_listen();
    var excludeFalsey = function excludeFalsey2(param, defValue) {
      var value = typeof param === "undefined" ? defValue : param;
      return param === false ? void 0 : value;
    };
    var getMutationQuery = function getMutationQuery2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return {
        returnIds: true,
        returnDocuments: excludeFalsey(options.returnDocuments, true),
        visibility: options.visibility || "sync"
      };
    };
    var isResponse = function isResponse2(event) {
      return event.type === "response";
    };
    var getBody = function getBody2(event) {
      return event.body;
    };
    var indexBy = function indexBy2(docs, attr) {
      return docs.reduce(function(indexed, doc) {
        indexed[attr(doc)] = doc;
        return indexed;
      }, Object.create(null));
    };
    var toPromise = function toPromise2(observable) {
      return observable.toPromise();
    };
    var getQuerySizeLimit = 11264;
    module2.exports = {
      listen,
      getDataUrl: function getDataUrl(operation, path) {
        var config = this.clientConfig;
        var catalog = config.gradientMode ? config.namespace : validators.hasDataset(config);
        var baseUri = "/".concat(operation, "/").concat(catalog);
        var uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
        return (this.clientConfig.gradientMode ? uri : "/data".concat(uri)).replace(/\/($|\?)/, "$1");
      },
      fetch: function fetch(query, params) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var mapResponse = options.filterResponse === false ? function(res) {
          return res;
        } : function(res) {
          return res.result;
        };
        var observable = this._dataRequest("query", {
          query,
          params
        }, options).pipe(map(mapResponse));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      getDocument: function getDocument(id) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var options = {
          uri: this.getDataUrl("doc", id),
          json: true,
          tag: opts.tag
        };
        var observable = this._requestObservable(options).pipe(filter(isResponse), map(function(event) {
          return event.body.documents && event.body.documents[0];
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      getDocuments: function getDocuments(ids) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var options = {
          uri: this.getDataUrl("doc", ids.join(",")),
          json: true,
          tag: opts.tag
        };
        var observable = this._requestObservable(options).pipe(filter(isResponse), map(function(event) {
          var indexed = indexBy(event.body.documents || [], function(doc) {
            return doc._id;
          });
          return ids.map(function(id) {
            return indexed[id] || null;
          });
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      create: function create(doc, options) {
        return this._create(doc, "create", options);
      },
      createIfNotExists: function createIfNotExists(doc, options) {
        validators.requireDocumentId("createIfNotExists", doc);
        return this._create(doc, "createIfNotExists", options);
      },
      createOrReplace: function createOrReplace(doc, options) {
        validators.requireDocumentId("createOrReplace", doc);
        return this._create(doc, "createOrReplace", options);
      },
      patch: function patch(selector, operations) {
        return new Patch(selector, operations, this);
      },
      delete: function _delete(selection, options) {
        return this.dataRequest("mutate", {
          mutations: [{
            delete: getSelection(selection)
          }]
        }, options);
      },
      mutate: function mutate(mutations, options) {
        var mut = mutations instanceof Patch || mutations instanceof Transaction ? mutations.serialize() : mutations;
        var muts = Array.isArray(mut) ? mut : [mut];
        var transactionId = options && options.transactionId;
        return this.dataRequest("mutate", {
          mutations: muts,
          transactionId
        }, options);
      },
      transaction: function transaction(operations) {
        return new Transaction(operations, this);
      },
      dataRequest: function dataRequest(endpoint, body) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var request = this._dataRequest(endpoint, body, options);
        return this.isPromiseAPI() ? toPromise(request) : request;
      },
      _dataRequest: function _dataRequest(endpoint, body) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var isMutation = endpoint === "mutate";
        var strQuery = !isMutation && encodeQueryString(body);
        var useGet = !isMutation && strQuery.length < getQuerySizeLimit;
        var stringQuery = useGet ? strQuery : "";
        var returnFirst = options.returnFirst;
        var timeout = options.timeout, token = options.token, tag = options.tag;
        var uri = this.getDataUrl(endpoint, stringQuery);
        var reqOptions = {
          method: useGet ? "GET" : "POST",
          uri,
          json: true,
          body: useGet ? void 0 : body,
          query: isMutation && getMutationQuery(options),
          timeout,
          token,
          tag
        };
        return this._requestObservable(reqOptions).pipe(filter(isResponse), map(getBody), map(function(res) {
          if (!isMutation) {
            return res;
          }
          var results = res.results || [];
          if (options.returnDocuments) {
            return returnFirst ? results[0] && results[0].document : results.map(function(mut) {
              return mut.document;
            });
          }
          var key = returnFirst ? "documentId" : "documentIds";
          var ids = returnFirst ? results[0] && results[0].id : results.map(function(mut) {
            return mut.id;
          });
          return _defineProperty({
            transactionId: res.transactionId,
            results
          }, key, ids);
        }));
      },
      _create: function _create(doc, op) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var mutation = _defineProperty({}, op, doc);
        var opts = assign({
          returnFirst: true,
          returnDocuments: true
        }, options);
        return this.dataRequest("mutate", {
          mutations: [mutation]
        }, opts);
      }
    };
  }
});

// node_modules/@sanity/client/lib/datasets/datasetsClient.js
var require_datasetsClient = __commonJS({
  "node_modules/@sanity/client/lib/datasets/datasetsClient.js"(exports2, module2) {
    "use strict";
    var assign = require_object_assign();
    var validate = require_validators();
    function DatasetsClient(client) {
      this.request = client.request.bind(client);
    }
    assign(DatasetsClient.prototype, {
      create: function create(name, options) {
        return this._modify("PUT", name, options);
      },
      edit: function edit(name, options) {
        return this._modify("PATCH", name, options);
      },
      delete: function _delete(name) {
        return this._modify("DELETE", name);
      },
      list: function list() {
        return this.request({
          uri: "/datasets"
        });
      },
      _modify: function _modify(method, name, body) {
        validate.dataset(name);
        return this.request({
          method,
          uri: "/datasets/".concat(name),
          body
        });
      }
    });
    module2.exports = DatasetsClient;
  }
});

// node_modules/@sanity/client/lib/projects/projectsClient.js
var require_projectsClient = __commonJS({
  "node_modules/@sanity/client/lib/projects/projectsClient.js"(exports2, module2) {
    "use strict";
    var assign = require_object_assign();
    function ProjectsClient(client) {
      this.client = client;
    }
    assign(ProjectsClient.prototype, {
      list: function list() {
        return this.client.request({
          uri: "/projects"
        });
      },
      getById: function getById(id) {
        return this.client.request({
          uri: "/projects/".concat(id)
        });
      }
    });
    module2.exports = ProjectsClient;
  }
});

// node_modules/@sanity/client/lib/http/queryString.js
var require_queryString = __commonJS({
  "node_modules/@sanity/client/lib/http/queryString.js"(exports2, module2) {
    "use strict";
    module2.exports = function(params) {
      var qs = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key])));
        }
      }
      return qs.length > 0 ? "?".concat(qs.join("&")) : "";
    };
  }
});

// node_modules/@sanity/client/lib/assets/assetsClient.js
var require_assetsClient = __commonJS({
  "node_modules/@sanity/client/lib/assets/assetsClient.js"(exports2, module2) {
    "use strict";
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    var assign = require_object_assign();
    var _require = require_map2();
    var map = _require.map;
    var _require2 = require_filter2();
    var filter = _require2.filter;
    var queryString = require_queryString();
    var validators = require_validators();
    function AssetsClient(client) {
      this.client = client;
    }
    function toDocument(body) {
      var document2 = body.document;
      Object.defineProperty(document2, "document", {
        enumerable: false,
        get: function get() {
          console.warn("The promise returned from client.asset.upload(...) now resolves with the asset document");
          return document2;
        }
      });
      return document2;
    }
    function optionsFromFile(opts, file) {
      if (typeof window === "undefined" || !(file instanceof window.File)) {
        return opts;
      }
      return assign({
        filename: opts.preserveFilename === false ? void 0 : file.name,
        contentType: file.type
      }, opts);
    }
    assign(AssetsClient.prototype, {
      upload: function upload(assetType, body) {
        var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        validators.validateAssetType(assetType);
        var meta = opts.extract || void 0;
        if (meta && !meta.length) {
          meta = ["none"];
        }
        var dataset2 = validators.hasDataset(this.client.clientConfig);
        var assetEndpoint = assetType === "image" ? "images" : "files";
        var options = optionsFromFile(opts, body);
        var tag = options.tag, label = options.label, title = options.title, description = options.description, creditLine = options.creditLine, filename = options.filename, source = options.source;
        var query = {
          label,
          title,
          description,
          filename,
          meta,
          creditLine
        };
        if (source) {
          query.sourceId = source.id;
          query.sourceName = source.name;
          query.sourceUrl = source.url;
        }
        var observable = this.client._requestObservable({
          tag,
          method: "POST",
          timeout: options.timeout || 0,
          uri: "/assets/".concat(assetEndpoint, "/").concat(dataset2),
          headers: options.contentType ? {
            "Content-Type": options.contentType
          } : {},
          query,
          body
        });
        return this.client.isPromiseAPI() ? observable.pipe(filter(function(event) {
          return event.type === "response";
        }), map(function(event) {
          return toDocument(event.body);
        })).toPromise() : observable;
      },
      delete: function _delete(type, id) {
        console.warn("client.assets.delete() is deprecated, please use client.delete(<document-id>)");
        var docId = id || "";
        if (!/^(image|file)-/.test(docId)) {
          docId = "".concat(type, "-").concat(docId);
        } else if (type._id) {
          docId = type._id;
        }
        validators.hasDataset(this.client.clientConfig);
        return this.client.delete(docId);
      },
      getImageUrl: function getImageUrl(ref, query) {
        var id = ref._ref || ref;
        if (typeof id !== "string") {
          throw new Error("getImageUrl() needs either an object with a _ref, or a string with an asset document ID");
        }
        if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(id)) {
          throw new Error('Unsupported asset ID "'.concat(id, '". URL generation only works for auto-generated IDs.'));
        }
        var _id$split = id.split("-"), _id$split2 = _slicedToArray(_id$split, 4), assetId = _id$split2[1], size = _id$split2[2], format = _id$split2[3];
        validators.hasDataset(this.client.clientConfig);
        var _this$client$clientCo = this.client.clientConfig, projectId2 = _this$client$clientCo.projectId, dataset2 = _this$client$clientCo.dataset;
        var qs = query ? queryString(query) : "";
        return "https://cdn.sanity.io/images/".concat(projectId2, "/").concat(dataset2, "/").concat(assetId, "-").concat(size, ".").concat(format).concat(qs);
      }
    });
    module2.exports = AssetsClient;
  }
});

// node_modules/@sanity/client/lib/users/usersClient.js
var require_usersClient = __commonJS({
  "node_modules/@sanity/client/lib/users/usersClient.js"(exports2, module2) {
    "use strict";
    var assign = require_object_assign();
    function UsersClient(client) {
      this.client = client;
    }
    assign(UsersClient.prototype, {
      getById: function getById(id) {
        return this.client.request({
          uri: "/users/".concat(id)
        });
      }
    });
    module2.exports = UsersClient;
  }
});

// node_modules/@sanity/client/lib/auth/authClient.js
var require_authClient = __commonJS({
  "node_modules/@sanity/client/lib/auth/authClient.js"(exports2, module2) {
    "use strict";
    var assign = require_object_assign();
    function AuthClient(client) {
      this.client = client;
    }
    assign(AuthClient.prototype, {
      getLoginProviders: function getLoginProviders() {
        return this.client.request({
          uri: "/auth/providers"
        });
      },
      logout: function logout() {
        return this.client.request({
          uri: "/auth/logout",
          method: "POST"
        });
      }
    });
    module2.exports = AuthClient;
  }
});

// node_modules/nano-pubsub/index.js
var require_nano_pubsub = __commonJS({
  "node_modules/nano-pubsub/index.js"(exports2, module2) {
    module2.exports = function Pubsub() {
      var subscribers = [];
      return {
        subscribe,
        publish
      };
      function subscribe(subscriber) {
        subscribers.push(subscriber);
        return function unsubscribe() {
          var idx = subscribers.indexOf(subscriber);
          if (idx > -1) {
            subscribers.splice(idx, 1);
          }
        };
      }
      function publish() {
        for (var i = 0; i < subscribers.length; i++) {
          subscribers[i].apply(null, arguments);
        }
      }
    };
  }
});

// node_modules/get-it/lib-node/util/middlewareReducer.js
var require_middlewareReducer = __commonJS({
  "node_modules/get-it/lib-node/util/middlewareReducer.js"(exports2, module2) {
    "use strict";
    module2.exports = (middleware) => {
      const applyMiddleware = function applyMiddleware2(hook, defaultValue) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        const bailEarly = hook === "onError";
        let value = defaultValue;
        for (let i = 0; i < middleware[hook].length; i++) {
          const handler = middleware[hook][i];
          value = handler.apply(void 0, [value].concat(args));
          if (bailEarly && !value) {
            break;
          }
        }
        return value;
      };
      return applyMiddleware;
    };
  }
});

// node_modules/get-it/lib-node/middleware/defaultOptionsProcessor.js
var require_defaultOptionsProcessor = __commonJS({
  "node_modules/get-it/lib-node/middleware/defaultOptionsProcessor.js"(exports2, module2) {
    "use strict";
    var objectAssign = require_object_assign();
    var urlParse = require_url_parse();
    var isReactNative = typeof navigator === "undefined" ? false : navigator.product === "ReactNative";
    var has = Object.prototype.hasOwnProperty;
    var defaultOptions = { timeout: isReactNative ? 6e4 : 12e4 };
    module2.exports = (opts) => {
      const options = typeof opts === "string" ? objectAssign({ url: opts }, defaultOptions) : objectAssign({}, defaultOptions, opts);
      const url = urlParse(options.url, {}, true);
      options.timeout = normalizeTimeout(options.timeout);
      if (options.query) {
        url.query = objectAssign({}, url.query, removeUndefined(options.query));
      }
      options.method = options.body && !options.method ? "POST" : (options.method || "GET").toUpperCase();
      options.url = url.toString(stringifyQueryString);
      return options;
    };
    function stringifyQueryString(obj) {
      const pairs = [];
      for (const key in obj) {
        if (has.call(obj, key)) {
          push(key, obj[key]);
        }
      }
      return pairs.length ? pairs.join("&") : "";
      function push(key, val) {
        if (Array.isArray(val)) {
          val.forEach((item) => push(key, item));
        } else {
          pairs.push([key, val].map(encodeURIComponent).join("="));
        }
      }
    }
    function normalizeTimeout(time) {
      if (time === false || time === 0) {
        return false;
      }
      if (time.connect || time.socket) {
        return time;
      }
      const delay = Number(time);
      if (isNaN(delay)) {
        return normalizeTimeout(defaultOptions.timeout);
      }
      return { connect: delay, socket: delay };
    }
    function removeUndefined(obj) {
      const target = {};
      for (const key in obj) {
        if (obj[key] !== void 0) {
          target[key] = obj[key];
        }
      }
      return target;
    }
  }
});

// node_modules/get-it/lib-node/middleware/defaultOptionsValidator.js
var require_defaultOptionsValidator = __commonJS({
  "node_modules/get-it/lib-node/middleware/defaultOptionsValidator.js"(exports2, module2) {
    "use strict";
    var validUrl = /^https?:\/\//i;
    module2.exports = (options) => {
      if (!validUrl.test(options.url)) {
        throw new Error(`"${options.url}" is not a valid URL`);
      }
    };
  }
});

// node_modules/simple-concat/index.js
var require_simple_concat = __commonJS({
  "node_modules/simple-concat/index.js"(exports2, module2) {
    module2.exports = function(stream, cb) {
      var chunks = [];
      stream.on("data", function(chunk) {
        chunks.push(chunk);
      });
      stream.once("end", function() {
        if (cb)
          cb(null, Buffer.concat(chunks));
        cb = null;
      });
      stream.once("error", function(err) {
        if (cb)
          cb(err);
        cb = null;
      });
    };
  }
});

// node_modules/debug/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/debug/node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports2, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports2, module2) {
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports2.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (flag, argv) => {
      argv = argv || process.argv;
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const pos = argv.indexOf(prefix + flag);
      const terminatorPos = argv.indexOf("--");
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var os = require("os");
    var hasFlag = require_has_flag();
    var env = process.env;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
      forceColor = false;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env) {
      forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      const min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      if (env.TERM === "dumb") {
        return min;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// node_modules/debug/src/node.js
var require_node2 = __commonJS({
  "node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util = require("util");
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.destroy = util.deprecate(() => {
    }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    exports2.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports2.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports2.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} [0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports2.inspectOpts.hideDate) {
        return "";
      }
      return new Date().toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports2.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node2();
    }
  }
});

// node_modules/follow-redirects/debug.js
var require_debug = __commonJS({
  "node_modules/follow-redirects/debug.js"(exports2, module2) {
    var debug;
    module2.exports = function() {
      if (!debug) {
        try {
          debug = require_src()("follow-redirects");
        } catch (error) {
          debug = function() {
          };
        }
      }
      debug.apply(null, arguments);
    };
  }
});

// node_modules/follow-redirects/index.js
var require_follow_redirects = __commonJS({
  "node_modules/follow-redirects/index.js"(exports2, module2) {
    var url = require("url");
    var URL = url.URL;
    var http = require("http");
    var https = require("https");
    var Writable = require("stream").Writable;
    var assert = require("assert");
    var debug = require_debug();
    var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
    var eventHandlers = Object.create(null);
    events.forEach(function(event) {
      eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });
    var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "");
    var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
    var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
    var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    function RedirectableRequest(options, responseCallback) {
      Writable.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];
      if (responseCallback) {
        this.on("response", responseCallback);
      }
      var self2 = this;
      this._onNativeResponse = function(response) {
        self2._processResponse(response);
      };
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable.prototype);
    RedirectableRequest.prototype.abort = function() {
      abortRequest(this._currentRequest);
      this.emit("abort");
    };
    RedirectableRequest.prototype.write = function(data, encoding, callback) {
      if (this._ending) {
        throw new WriteAfterEndError();
      }
      if (!(typeof data === "string" || typeof data === "object" && "length" in data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({ data, encoding });
        this._currentRequest.write(data, encoding, callback);
      } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };
    RedirectableRequest.prototype.end = function(data, encoding, callback) {
      if (typeof data === "function") {
        callback = data;
        data = encoding = null;
      } else if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      } else {
        var self2 = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
          self2._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };
    RedirectableRequest.prototype.setHeader = function(name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };
    RedirectableRequest.prototype.removeHeader = function(name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };
    RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
      var self2 = this;
      if (callback) {
        this.on("timeout", callback);
      }
      function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
      }
      function startTimer(socket) {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
        }
        self2._timeout = setTimeout(function() {
          self2.emit("timeout");
          clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
      }
      function clearTimer() {
        clearTimeout(this._timeout);
        if (callback) {
          self2.removeListener("timeout", callback);
        }
        if (!this.socket) {
          self2._currentRequest.removeListener("socket", startTimer);
        }
      }
      if (this.socket) {
        startTimer(this.socket);
      } else {
        this._currentRequest.once("socket", startTimer);
      }
      this.on("socket", destroyOnTimeout);
      this.once("response", clearTimer);
      this.once("error", clearTimer);
      return this;
    };
    [
      "flushHeaders",
      "getHeader",
      "setNoDelay",
      "setSocketKeepAlive"
    ].forEach(function(method) {
      RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
      };
    });
    ["aborted", "connection", "socket"].forEach(function(property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
          return this._currentRequest[property];
        }
      });
    });
    RedirectableRequest.prototype._sanitizeOptions = function(options) {
      if (!options.headers) {
        options.headers = {};
      }
      if (options.host) {
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        } else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };
    RedirectableRequest.prototype._performRequest = function() {
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
      }
      if (this._options.agents) {
        var scheme = protocol.substr(0, protocol.length - 1);
        this._options.agent = this._options.agents[scheme];
      }
      var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
      this._currentUrl = url.format(this._options);
      request._redirectable = this;
      for (var e = 0; e < events.length; e++) {
        request.on(events[e], eventHandlers[events[e]]);
      }
      if (this._isRedirect) {
        var i = 0;
        var self2 = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
          if (request === self2._currentRequest) {
            if (error) {
              self2.emit("error", error);
            } else if (i < buffers.length) {
              var buffer = buffers[i++];
              if (!request.finished) {
                request.write(buffer.data, buffer.encoding, writeNext);
              }
            } else if (self2._ended) {
              request.end();
            }
          }
        })();
      }
    };
    RedirectableRequest.prototype._processResponse = function(response) {
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode
        });
      }
      var location = response.headers.location;
      if (location && this._options.followRedirects !== false && statusCode >= 300 && statusCode < 400) {
        abortRequest(this._currentRequest);
        response.destroy();
        if (++this._redirectCount > this._options.maxRedirects) {
          this.emit("error", new TooManyRedirectsError());
          return;
        }
        if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
          this._options.method = "GET";
          this._requestBodyBuffers = [];
          removeMatchingHeaders(/^content-/i, this._options.headers);
        }
        var previousHostName = removeMatchingHeaders(/^host$/i, this._options.headers) || url.parse(this._currentUrl).hostname;
        var redirectUrl = url.resolve(this._currentUrl, location);
        debug("redirecting to", redirectUrl);
        this._isRedirect = true;
        var redirectUrlParts = url.parse(redirectUrl);
        Object.assign(this._options, redirectUrlParts);
        if (redirectUrlParts.hostname !== previousHostName) {
          removeMatchingHeaders(/^authorization$/i, this._options.headers);
        }
        if (typeof this._options.beforeRedirect === "function") {
          var responseDetails = { headers: response.headers };
          try {
            this._options.beforeRedirect.call(null, this._options, responseDetails);
          } catch (err) {
            this.emit("error", err);
            return;
          }
          this._sanitizeOptions(this._options);
        }
        try {
          this._performRequest();
        } catch (cause) {
          var error = new RedirectionError("Redirected request failed: " + cause.message);
          error.cause = cause;
          this.emit("error", error);
        }
      } else {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        this._requestBodyBuffers = [];
      }
    };
    function wrap(protocols) {
      var exports3 = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
      };
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports3[scheme] = Object.create(nativeProtocol);
        function request(input, options, callback) {
          if (typeof input === "string") {
            var urlStr = input;
            try {
              input = urlToOptions(new URL(urlStr));
            } catch (err) {
              input = url.parse(urlStr);
            }
          } else if (URL && input instanceof URL) {
            input = urlToOptions(input);
          } else {
            callback = options;
            options = input;
            input = { protocol };
          }
          if (typeof options === "function") {
            callback = options;
            options = null;
          }
          options = Object.assign({
            maxRedirects: exports3.maxRedirects,
            maxBodyLength: exports3.maxBodyLength
          }, input, options);
          options.nativeProtocols = nativeProtocols;
          assert.equal(options.protocol, protocol, "protocol mismatch");
          debug("options", options);
          return new RedirectableRequest(options, callback);
        }
        function get(input, options, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }
        Object.defineProperties(wrappedProtocol, {
          request: { value: request, configurable: true, enumerable: true, writable: true },
          get: { value: get, configurable: true, enumerable: true, writable: true }
        });
      });
      return exports3;
    }
    function noop() {
    }
    function urlToOptions(urlObject) {
      var options = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ? urlObject.hostname.slice(1, -1) : urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href
      };
      if (urlObject.port !== "") {
        options.port = Number(urlObject.port);
      }
      return options;
    }
    function removeMatchingHeaders(regex, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue;
    }
    function createErrorType(code, defaultMessage) {
      function CustomError(message) {
        Error.captureStackTrace(this, this.constructor);
        this.message = message || defaultMessage;
      }
      CustomError.prototype = new Error();
      CustomError.prototype.constructor = CustomError;
      CustomError.prototype.name = "Error [" + code + "]";
      CustomError.prototype.code = code;
      return CustomError;
    }
    function abortRequest(request) {
      for (var e = 0; e < events.length; e++) {
        request.removeListener(events[e], eventHandlers[events[e]]);
      }
      request.on("error", noop);
      request.abort();
    }
    module2.exports = wrap({ http, https });
    module2.exports.wrap = wrap;
  }
});

// node_modules/@sanity/timed-out/index.js
var require_timed_out = __commonJS({
  "node_modules/@sanity/timed-out/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(req, time) {
      if (req.timeoutTimer) {
        return req;
      }
      var delays = isNaN(time) ? time : { socket: time, connect: time };
      var hostHeader = req.getHeader("host");
      var host = hostHeader ? " to " + hostHeader : "";
      if (delays.connect !== void 0) {
        req.timeoutTimer = setTimeout(function timeoutHandler() {
          req.abort();
          var e = new Error("Connection timed out on request" + host);
          e.code = "ETIMEDOUT";
          req.emit("error", e);
        }, delays.connect);
      }
      req.on("socket", function assign(socket) {
        if (!(socket.connecting || socket._connecting)) {
          connect();
          return;
        }
        socket.once("connect", connect);
      });
      function clear() {
        if (req.timeoutTimer) {
          clearTimeout(req.timeoutTimer);
          req.timeoutTimer = null;
        }
      }
      function connect() {
        clear();
        if (delays.socket !== void 0) {
          req.setTimeout(delays.socket, function socketTimeoutHandler() {
            req.abort();
            var e = new Error("Socket timed out on request" + host);
            e.code = "ESOCKETTIMEDOUT";
            req.emit("error", e);
          });
        }
      }
      return req.on("error", clear);
    };
  }
});

// node_modules/is-stream/index.js
var require_is_stream = __commonJS({
  "node_modules/is-stream/index.js"(exports2, module2) {
    "use strict";
    var isStream = module2.exports = function(stream) {
      return stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
    };
    isStream.writable = function(stream) {
      return isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
    };
    isStream.readable = function(stream) {
      return isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
    };
    isStream.duplex = function(stream) {
      return isStream.writable(stream) && isStream.readable(stream);
    };
    isStream.transform = function(stream) {
      return isStream.duplex(stream) && typeof stream._transform === "function" && typeof stream._transformState === "object";
    };
  }
});

// node_modules/process-nextick-args/index.js
var require_process_nextick_args = __commonJS({
  "node_modules/process-nextick-args/index.js"(exports2, module2) {
    "use strict";
    if (typeof process === "undefined" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) {
      module2.exports = { nextTick };
    } else {
      module2.exports = process;
    }
    function nextTick(fn, arg1, arg2, arg3) {
      if (typeof fn !== "function") {
        throw new TypeError('"callback" argument must be a function');
      }
      var len = arguments.length;
      var args, i;
      switch (len) {
        case 0:
        case 1:
          return process.nextTick(fn);
        case 2:
          return process.nextTick(function afterTickOne() {
            fn.call(null, arg1);
          });
        case 3:
          return process.nextTick(function afterTickTwo() {
            fn.call(null, arg1, arg2);
          });
        case 4:
          return process.nextTick(function afterTickThree() {
            fn.call(null, arg1, arg2, arg3);
          });
        default:
          args = new Array(len - 1);
          i = 0;
          while (i < args.length) {
            args[i++] = arguments[i];
          }
          return process.nextTick(function afterTick() {
            fn.apply(null, args);
          });
      }
    }
  }
});

// node_modules/readable-stream/node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/readable-stream/node_modules/isarray/index.js"(exports2, module2) {
    var toString = {}.toString;
    module2.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/stream.js"(exports2, module2) {
    module2.exports = require("stream");
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports2, module2) {
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/core-util-is/lib/util.js
var require_util = __commonJS({
  "node_modules/core-util-is/lib/util.js"(exports2) {
    function isArray(arg) {
      if (Array.isArray) {
        return Array.isArray(arg);
      }
      return objectToString(arg) === "[object Array]";
    }
    exports2.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports2.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports2.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports2.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports2.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports2.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports2.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports2.isUndefined = isUndefined;
    function isRegExp(re) {
      return objectToString(re) === "[object RegExp]";
    }
    exports2.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports2.isObject = isObject;
    function isDate(d) {
      return objectToString(d) === "[object Date]";
    }
    exports2.isDate = isDate;
    function isError(e) {
      return objectToString(e) === "[object Error]" || e instanceof Error;
    }
    exports2.isError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports2.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
    }
    exports2.isPrimitive = isPrimitive;
    exports2.isBuffer = Buffer.isBuffer;
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports2, module2) {
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports2, module2) {
    try {
      util = require("util");
      if (typeof util.inherits !== "function")
        throw "";
      module2.exports = util.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/readable-stream/lib/internal/streams/BufferList.js
var require_BufferList = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/BufferList.js"(exports2, module2) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Buffer2 = require_safe_buffer().Buffer;
    var util = require("util");
    function copyBuffer(src, target, offset) {
      src.copy(target, offset);
    }
    module2.exports = function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      BufferList.prototype.push = function push(v) {
        var entry = { data: v, next: null };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      };
      BufferList.prototype.unshift = function unshift(v) {
        var entry = { data: v, next: this.head };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      };
      BufferList.prototype.shift = function shift() {
        if (this.length === 0)
          return;
        var ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      };
      BufferList.prototype.clear = function clear() {
        this.head = this.tail = null;
        this.length = 0;
      };
      BufferList.prototype.join = function join(s) {
        if (this.length === 0)
          return "";
        var p = this.head;
        var ret = "" + p.data;
        while (p = p.next) {
          ret += s + p.data;
        }
        return ret;
      };
      BufferList.prototype.concat = function concat(n) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        if (this.length === 1)
          return this.head.data;
        var ret = Buffer2.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while (p) {
          copyBuffer(p.data, ret, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      };
      return BufferList;
    }();
    if (util && util.inspect && util.inspect.custom) {
      module2.exports.prototype[util.inspect.custom] = function() {
        var obj = util.inspect({ length: this.length });
        return this.constructor.name + " " + obj;
      };
    }
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports2, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
          pna.nextTick(emitErrorNT, this, err);
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          pna.nextTick(emitErrorNT, _this, err2);
          if (_this._writableState) {
            _this._writableState.errorEmitted = true;
          }
        } else if (cb) {
          cb(err2);
        }
      });
      return this;
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    module2.exports = {
      destroy,
      undestroy
    };
  }
});

// node_modules/util-deprecate/node.js
var require_node3 = __commonJS({
  "node_modules/util-deprecate/node.js"(exports2, module2) {
    module2.exports = require("util").deprecate;
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports2, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    module2.exports = Writable;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var asyncWrite = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
    var Duplex;
    Writable.WritableState = WritableState;
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var internalUtil = {
      deprecate: require_node3()
    };
    var Stream = require_stream();
    var Buffer2 = require_safe_buffer().Buffer;
    var OurUint8Array = global.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    util.inherits(Writable, Stream);
    function nop() {
    }
    function WritableState(options, stream) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      var isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      var hwm = options.highWaterMark;
      var writableHwm = options.writableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0)
        this.highWaterMark = hwm;
      else if (isDuplex && (writableHwm || writableHwm === 0))
        this.highWaterMark = writableHwm;
      else
        this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function(object) {
          if (realHasInstance.call(this, object))
            return true;
          if (this !== Writable)
            return false;
          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function(object) {
        return object instanceof this;
      };
    }
    function Writable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
        return new Writable(options);
      }
      this._writableState = new WritableState(options, this);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function")
          this._write = options.write;
        if (typeof options.writev === "function")
          this._writev = options.writev;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
        if (typeof options.final === "function")
          this._final = options.final;
      }
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    function writeAfterEnd(stream, cb) {
      var er = new Error("write after end");
      stream.emit("error", er);
      pna.nextTick(cb, er);
    }
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      var er = false;
      if (chunk === null) {
        er = new TypeError("May not write null values to stream");
      } else if (typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      if (er) {
        stream.emit("error", er);
        pna.nextTick(cb, er);
        valid = false;
      }
      return valid;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf)
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop;
      if (state.ended)
        writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new TypeError("Unknown encoding: " + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        pna.nextTick(cb, er);
        pna.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
        finishMaybe(stream, state);
      }
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state);
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          asyncWrite(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf)
            allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null)
          state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("_write() is not implemented"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending && !state.finished)
        endWritable(this, state, cb);
    };
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          stream.emit("error", err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function") {
          state.pendingcb++;
          state.finalCalled = true;
          pna.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
        }
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          pna.nextTick(cb);
        else
          stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      if (state.corkedRequestsFree) {
        state.corkedRequestsFree.next = corkReq;
      } else {
        state.corkedRequestsFree = corkReq;
      }
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
      get: function() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      this.end();
      cb(err);
    };
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports2, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj) {
        keys2.push(key);
      }
      return keys2;
    };
    module2.exports = Duplex;
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    util.inherits(Duplex, Readable);
    {
      keys = objectKeys(Writable.prototype);
      for (v = 0; v < keys.length; v++) {
        method = keys[v];
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys;
    var method;
    var v;
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      if (options && options.readable === false)
        this.readable = false;
      if (options && options.writable === false)
        this.writable = false;
      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false)
        this.allowHalfOpen = false;
      this.once("end", onend);
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function onend() {
      if (this.allowHalfOpen || this._writableState.ended)
        return;
      pna.nextTick(onEndNT, this);
    }
    function onEndNT(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
    Duplex.prototype._destroy = function(err, cb) {
      this.push(null);
      this.end();
      pna.nextTick(cb, err);
    };
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports2, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    module2.exports = Readable;
    var isArray = require_isarray();
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = require("events").EventEmitter;
    var EElistenerCount = function(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream = require_stream();
    var Buffer2 = require_safe_buffer().Buffer;
    var OurUint8Array = global.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var debugUtil = require("util");
    var debug = void 0;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = function() {
      };
    }
    var BufferList = require_BufferList();
    var destroyImpl = require_destroy();
    var StringDecoder;
    util.inherits(Readable, Stream);
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
    function ReadableState(options, stream) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      var isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      var hwm = options.highWaterMark;
      var readableHwm = options.readableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0)
        this.highWaterMark = hwm;
      else if (isDuplex && (readableHwm || readableHwm === 0))
        this.highWaterMark = readableHwm;
      else
        this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = require("string_decoder/").StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable))
        return new Readable(options);
      this._readableState = new ReadableState(options, this);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function")
          this._read = options.read;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
      }
      Stream.call(this);
    }
    Object.defineProperty(Readable.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      this.push(null);
      cb(err);
    };
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck)
          er = chunkInvalid(state, chunk);
        if (er) {
          stream.emit("error", er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted)
              stream.emit("error", new Error("stream.unshift() after end event"));
            else
              addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            stream.emit("error", new Error("stream.push() after EOF"));
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0)
                addChunk(stream, state, chunk, false);
              else
                maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
        }
      }
      return needMoreData(state);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit("data", chunk);
        stream.read(0);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);
        if (state.needReadable)
          emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      return er;
    }
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = require("string_decoder/").StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    var MAX_HWM = 8388608;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return 1;
      if (n !== n) {
        if (state.flowing && state.length)
          return state.buffer.head.data.length;
        else
          return state.length;
      }
      if (n > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length)
        return n;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = true;
        n = 0;
      } else {
        state.length -= n;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n && state.ended)
          endReadable(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      if (state.ended)
        return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      emitReadable(stream);
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        if (state.sync)
          pna.nextTick(emitReadable_, stream);
        else
          emitReadable_(stream);
      }
    }
    function emitReadable_(stream) {
      debug("emit readable");
      stream.emit("readable");
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        pna.nextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
        else
          len = state.length;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      this.emit("error", new Error("_read() is not implemented"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted)
        pna.nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      var increasedAwaitDrain = false;
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (ret === false && !increasedAwaitDrain) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", src._readableState.awaitDrain);
            src._readableState.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0)
          dest.emit("error", er);
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = { hasUnpiped: false };
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++) {
          dests[i].emit("unpipe", this, unpipeInfo);
        }
        return this;
      }
      var index = indexOf(state.pipes, dest);
      if (index === -1)
        return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      if (ev === "data") {
        if (this._readableState.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.emittedReadable = false;
          if (!state.reading) {
            pna.nextTick(nReadingNextTick, this);
          } else if (state.length) {
            emitReadable(this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = true;
        resume(this, state);
      }
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        pna.nextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      if (!state.reading) {
        debug("resume read 0");
        stream.read(0);
      }
      state.resumeScheduled = false;
      state.awaitDrain = 0;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null) {
      }
    }
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._readableState.highWaterMark;
      }
    });
    Readable._fromList = fromList;
    function fromList(n, state) {
      if (state.length === 0)
        return null;
      var ret;
      if (state.objectMode)
        ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder)
          ret = state.buffer.join("");
        else if (state.buffer.length === 1)
          ret = state.buffer.head.data;
        else
          ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = fromListPartial(n, state.buffer, state.decoder);
      }
      return ret;
    }
    function fromListPartial(n, list, hasStrings) {
      var ret;
      if (n < list.head.data.length) {
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
      } else if (n === list.head.data.length) {
        ret = list.shift();
      } else {
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
      }
      return ret;
    }
    function copyFromBufferString(n, list) {
      var p = list.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;
      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length)
          ret += str;
        else
          ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next)
              list.head = p.next;
            else
              list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = str.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    function copyFromBuffer(n, list) {
      var ret = Buffer2.allocUnsafe(n);
      var p = list.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;
      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next)
              list.head = p.next;
            else
              list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = buf.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error('"endReadable()" called on non-empty stream');
      if (!state.endEmitted) {
        state.ended = true;
        pna.nextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
      }
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
  }
});

// node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/readable-stream/lib/_stream_transform.js"(exports2, module2) {
    "use strict";
    module2.exports = Transform;
    var Duplex = require_stream_duplex();
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    util.inherits(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (!cb) {
        return this.emit("error", new Error("write callback called multiple times"));
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function")
          this._transform = options.transform;
        if (typeof options.flush === "function")
          this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function") {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("_transform() is not implemented");
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      var _this2 = this;
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
        _this2.emit("close");
      });
    };
    function done(stream, er, data) {
      if (er)
        return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length)
        throw new Error("Calling transform done when ws.length != 0");
      if (stream._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return stream.push(null);
    }
  }
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports2, module2) {
    "use strict";
    module2.exports = PassThrough;
    var Transform = require_stream_transform();
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    util.inherits(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough))
        return new PassThrough(options);
      Transform.call(this, options);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/readable.js
var require_readable = __commonJS({
  "node_modules/readable-stream/readable.js"(exports2, module2) {
    var Stream = require("stream");
    if (process.env.READABLE_STREAM === "disable" && Stream) {
      module2.exports = Stream;
      exports2 = module2.exports = Stream.Readable;
      exports2.Readable = Stream.Readable;
      exports2.Writable = Stream.Writable;
      exports2.Duplex = Stream.Duplex;
      exports2.Transform = Stream.Transform;
      exports2.PassThrough = Stream.PassThrough;
      exports2.Stream = Stream;
    } else {
      exports2 = module2.exports = require_stream_readable();
      exports2.Stream = Stream || exports2;
      exports2.Readable = exports2;
      exports2.Writable = require_stream_writable();
      exports2.Duplex = require_stream_duplex();
      exports2.Transform = require_stream_transform();
      exports2.PassThrough = require_stream_passthrough();
    }
  }
});

// node_modules/from2/index.js
var require_from2 = __commonJS({
  "node_modules/from2/index.js"(exports2, module2) {
    var Readable = require_readable().Readable;
    var inherits = require_inherits();
    module2.exports = from2;
    from2.ctor = ctor;
    from2.obj = obj;
    var Proto = ctor();
    function toFunction(list) {
      list = list.slice();
      return function(_, cb) {
        var err = null;
        var item = list.length ? list.shift() : null;
        if (item instanceof Error) {
          err = item;
          item = null;
        }
        cb(err, item);
      };
    }
    function from2(opts, read) {
      if (typeof opts !== "object" || Array.isArray(opts)) {
        read = opts;
        opts = {};
      }
      var rs = new Proto(opts);
      rs._from = Array.isArray(read) ? toFunction(read) : read || noop;
      return rs;
    }
    function ctor(opts, read) {
      if (typeof opts === "function") {
        read = opts;
        opts = {};
      }
      opts = defaults(opts);
      inherits(Class, Readable);
      function Class(override) {
        if (!(this instanceof Class))
          return new Class(override);
        this._reading = false;
        this._callback = check;
        this.destroyed = false;
        Readable.call(this, override || opts);
        var self2 = this;
        var hwm = this._readableState.highWaterMark;
        function check(err, data) {
          if (self2.destroyed)
            return;
          if (err)
            return self2.destroy(err);
          if (data === null)
            return self2.push(null);
          self2._reading = false;
          if (self2.push(data))
            self2._read(hwm);
        }
      }
      Class.prototype._from = read || noop;
      Class.prototype._read = function(size) {
        if (this._reading || this.destroyed)
          return;
        this._reading = true;
        this._from(size, this._callback);
      };
      Class.prototype.destroy = function(err) {
        if (this.destroyed)
          return;
        this.destroyed = true;
        var self2 = this;
        process.nextTick(function() {
          if (err)
            self2.emit("error", err);
          self2.emit("close");
        });
      };
      return Class;
    }
    function obj(opts, read) {
      if (typeof opts === "function" || Array.isArray(opts)) {
        read = opts;
        opts = {};
      }
      opts = defaults(opts);
      opts.objectMode = true;
      opts.highWaterMark = 16;
      return from2(opts, read);
    }
    function noop() {
    }
    function defaults(opts) {
      opts = opts || {};
      return opts;
    }
  }
});

// node_modules/p-is-promise/index.js
var require_p_is_promise = __commonJS({
  "node_modules/p-is-promise/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (x) => x instanceof Promise || x !== null && typeof x === "object" && typeof x.then === "function" && typeof x.catch === "function";
  }
});

// node_modules/into-stream/index.js
var require_into_stream = __commonJS({
  "node_modules/into-stream/index.js"(exports2, module2) {
    "use strict";
    var from = require_from2();
    var pIsPromise = require_p_is_promise();
    module2.exports = (x) => {
      if (Array.isArray(x)) {
        x = x.slice();
      }
      let promise;
      let iterator;
      prepare(x);
      function prepare(value) {
        x = value;
        promise = pIsPromise(x) ? x : null;
        const shouldIterate = !promise && x[Symbol.iterator] && typeof x !== "string" && !Buffer.isBuffer(x);
        iterator = shouldIterate ? x[Symbol.iterator]() : null;
      }
      return from(function reader(size, cb) {
        if (promise) {
          promise.then(prepare).then(() => reader.call(this, size, cb), cb);
          return;
        }
        if (iterator) {
          const obj = iterator.next();
          setImmediate(cb, null, obj.done ? null : obj.value);
          return;
        }
        if (x.length === 0) {
          setImmediate(cb, null, null);
          return;
        }
        const chunk = x.slice(0, size);
        x = x.slice(size);
        setImmediate(cb, null, chunk);
      });
    };
    module2.exports.obj = (x) => {
      if (Array.isArray(x)) {
        x = x.slice();
      }
      let promise;
      let iterator;
      prepare(x);
      function prepare(value) {
        x = value;
        promise = pIsPromise(x) ? x : null;
        iterator = !promise && x[Symbol.iterator] ? x[Symbol.iterator]() : null;
      }
      return from.obj(function reader(size, cb) {
        if (promise) {
          promise.then(prepare).then(() => reader.call(this, size, cb), cb);
          return;
        }
        if (iterator) {
          const obj = iterator.next();
          setImmediate(cb, null, obj.done ? null : obj.value);
          return;
        }
        this.push(x);
        setImmediate(cb, null, null);
      });
    };
  }
});

// node_modules/xtend/immutable.js
var require_immutable = __commonJS({
  "node_modules/xtend/immutable.js"(exports2, module2) {
    module2.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend() {
      var target = {};
      for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }
});

// node_modules/through2/through2.js
var require_through2 = __commonJS({
  "node_modules/through2/through2.js"(exports2, module2) {
    var Transform = require_readable().Transform;
    var inherits = require("util").inherits;
    var xtend = require_immutable();
    function DestroyableTransform(opts) {
      Transform.call(this, opts);
      this._destroyed = false;
    }
    inherits(DestroyableTransform, Transform);
    DestroyableTransform.prototype.destroy = function(err) {
      if (this._destroyed)
        return;
      this._destroyed = true;
      var self2 = this;
      process.nextTick(function() {
        if (err)
          self2.emit("error", err);
        self2.emit("close");
      });
    };
    function noop(chunk, enc, callback) {
      callback(null, chunk);
    }
    function through2(construct) {
      return function(options, transform, flush) {
        if (typeof options == "function") {
          flush = transform;
          transform = options;
          options = {};
        }
        if (typeof transform != "function")
          transform = noop;
        if (typeof flush != "function")
          flush = null;
        return construct(options, transform, flush);
      };
    }
    module2.exports = through2(function(options, transform, flush) {
      var t2 = new DestroyableTransform(options);
      t2._transform = transform;
      if (flush)
        t2._flush = flush;
      return t2;
    });
    module2.exports.ctor = through2(function(options, transform, flush) {
      function Through2(override) {
        if (!(this instanceof Through2))
          return new Through2(override);
        this.options = xtend(options, override);
        DestroyableTransform.call(this, this.options);
      }
      inherits(Through2, DestroyableTransform);
      Through2.prototype._transform = transform;
      if (flush)
        Through2.prototype._flush = flush;
      return Through2;
    });
    module2.exports.obj = through2(function(options, transform, flush) {
      var t2 = new DestroyableTransform(xtend({ objectMode: true, highWaterMark: 16 }, options));
      t2._transform = transform;
      if (flush)
        t2._flush = flush;
      return t2;
    });
  }
});

// node_modules/speedometer/index.js
var require_speedometer = __commonJS({
  "node_modules/speedometer/index.js"(exports2, module2) {
    var tick = 1;
    var maxTick = 65535;
    var resolution = 4;
    var inc = function() {
      tick = tick + 1 & maxTick;
    };
    var timer = setInterval(inc, 1e3 / resolution | 0);
    if (timer.unref)
      timer.unref();
    module2.exports = function(seconds) {
      var size = resolution * (seconds || 5);
      var buffer = [0];
      var pointer = 1;
      var last = tick - 1 & maxTick;
      return function(delta) {
        var dist = tick - last & maxTick;
        if (dist > size)
          dist = size;
        last = tick;
        while (dist--) {
          if (pointer === size)
            pointer = 0;
          buffer[pointer] = buffer[pointer === 0 ? size - 1 : pointer - 1];
          pointer++;
        }
        if (delta)
          buffer[pointer - 1] += delta;
        var top = buffer[pointer - 1];
        var btm = buffer.length < size ? 0 : buffer[pointer === size ? 0 : pointer];
        return buffer.length < resolution ? top : (top - btm) * resolution / buffer.length;
      };
    };
  }
});

// node_modules/progress-stream/index.js
var require_progress_stream = __commonJS({
  "node_modules/progress-stream/index.js"(exports2, module2) {
    var through = require_through2();
    var speedometer = require_speedometer();
    module2.exports = function(options, onprogress) {
      if (typeof options === "function")
        return module2.exports(null, options);
      options = options || {};
      var length = options.length || 0;
      var time = options.time || 0;
      var drain = options.drain || false;
      var transferred = options.transferred || 0;
      var nextUpdate = Date.now() + time;
      var delta = 0;
      var speed = speedometer(options.speed || 5e3);
      var startTime = Date.now();
      var update = {
        percentage: 0,
        transferred,
        length,
        remaining: length,
        eta: 0,
        runtime: 0
      };
      var emit = function(ended) {
        update.delta = delta;
        update.percentage = ended ? 100 : length ? transferred / length * 100 : 0;
        update.speed = speed(delta);
        update.eta = Math.round(update.remaining / update.speed);
        update.runtime = parseInt((Date.now() - startTime) / 1e3);
        nextUpdate = Date.now() + time;
        delta = 0;
        tr.emit("progress", update);
      };
      var write = function(chunk, enc, callback) {
        var len = options.objectMode ? 1 : chunk.length;
        transferred += len;
        delta += len;
        update.transferred = transferred;
        update.remaining = length >= transferred ? length - transferred : 0;
        if (Date.now() >= nextUpdate)
          emit(false);
        callback(null, chunk);
      };
      var end = function(callback) {
        emit(true);
        callback();
      };
      var tr = through(options.objectMode ? { objectMode: true, highWaterMark: 16 } : {}, write, end);
      var onlength = function(newLength) {
        length = newLength;
        update.length = length;
        update.remaining = length - update.transferred;
        tr.emit("length", length);
      };
      tr.setLength = onlength;
      tr.on("pipe", function(stream) {
        if (typeof length === "number")
          return;
        if (stream.readable && !stream.writable && stream.headers) {
          return onlength(parseInt(stream.headers["content-length"] || 0));
        }
        if (typeof stream.length === "number") {
          return onlength(stream.length);
        }
        stream.on("response", function(res) {
          if (!res || !res.headers)
            return;
          if (res.headers["content-encoding"] === "gzip")
            return;
          if (res.headers["content-length"]) {
            return onlength(parseInt(res.headers["content-length"]));
          }
        });
      });
      if (drain)
        tr.resume();
      if (onprogress)
        tr.on("progress", onprogress);
      tr.progress = function() {
        update.speed = speed(0);
        update.eta = Math.round(update.remaining / update.speed);
        return update;
      };
      return tr;
    };
  }
});

// node_modules/mimic-response/index.js
var require_mimic_response = __commonJS({
  "node_modules/mimic-response/index.js"(exports2, module2) {
    "use strict";
    var knownProps = [
      "destroy",
      "setTimeout",
      "socket",
      "headers",
      "trailers",
      "rawHeaders",
      "statusCode",
      "httpVersion",
      "httpVersionMinor",
      "httpVersionMajor",
      "rawTrailers",
      "statusMessage"
    ];
    module2.exports = (fromStream, toStream) => {
      const fromProps = new Set(Object.keys(fromStream).concat(knownProps));
      for (const prop of fromProps) {
        if (prop in toStream) {
          continue;
        }
        toStream[prop] = typeof fromStream[prop] === "function" ? fromStream[prop].bind(fromStream) : fromStream[prop];
      }
    };
  }
});

// node_modules/decompress-response/index.js
var require_decompress_response = __commonJS({
  "node_modules/decompress-response/index.js"(exports2, module2) {
    "use strict";
    var PassThrough = require("stream").PassThrough;
    var zlib = require("zlib");
    var mimicResponse = require_mimic_response();
    module2.exports = (response) => {
      if (["gzip", "deflate"].indexOf(response.headers["content-encoding"]) === -1) {
        return response;
      }
      const unzip = zlib.createUnzip();
      const stream = new PassThrough();
      mimicResponse(response, stream);
      unzip.on("error", (err) => {
        if (err.code === "Z_BUF_ERROR") {
          stream.end();
          return;
        }
        stream.emit("error", err);
      });
      response.pipe(unzip).pipe(stream);
      return stream;
    };
  }
});

// node_modules/get-it/lib-node/request/node/proxy.js
var require_proxy = __commonJS({
  "node_modules/get-it/lib-node/request/node/proxy.js"(exports2) {
    "use strict";
    var url = require("url");
    var objectAssign = require_object_assign();
    function formatHostname(hostname) {
      return hostname.replace(/^\.*/, ".").toLowerCase();
    }
    function parseNoProxyZone(zoneStr) {
      const zone = zoneStr.trim().toLowerCase();
      const zoneParts = zone.split(":", 2);
      const zoneHost = formatHostname(zoneParts[0]);
      const zonePort = zoneParts[1];
      const hasPort = zone.indexOf(":") > -1;
      return { hostname: zoneHost, port: zonePort, hasPort };
    }
    function uriInNoProxy(uri, noProxy) {
      const port = uri.port || (uri.protocol === "https:" ? "443" : "80");
      const hostname = formatHostname(uri.hostname);
      const noProxyList = noProxy.split(",");
      return noProxyList.map(parseNoProxyZone).some((noProxyZone) => {
        const isMatchedAt = hostname.indexOf(noProxyZone.hostname);
        const hostnameMatched = isMatchedAt > -1 && isMatchedAt === hostname.length - noProxyZone.hostname.length;
        if (noProxyZone.hasPort) {
          return port === noProxyZone.port && hostnameMatched;
        }
        return hostnameMatched;
      });
    }
    function getProxyFromUri(uri) {
      const noProxy = process.env.NO_PROXY || process.env.no_proxy || "";
      if (noProxy === "*") {
        return null;
      }
      if (noProxy !== "" && uriInNoProxy(uri, noProxy)) {
        return null;
      }
      if (uri.protocol === "http:") {
        return process.env.HTTP_PROXY || process.env.http_proxy || null;
      }
      if (uri.protocol === "https:") {
        return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || null;
      }
      return null;
    }
    function getHostFromUri(uri) {
      let host = uri.host;
      if (uri.port) {
        if (uri.port === "80" && uri.protocol === "http:" || uri.port === "443" && uri.protocol === "https:") {
          host = uri.hostname;
        }
      }
      return host;
    }
    function getHostHeaderWithPort(uri) {
      const port = uri.port || (uri.protocol === "https:" ? "443" : "80");
      return `${uri.hostname}:${port}`;
    }
    function rewriteUriForProxy(reqOpts, uri, proxy) {
      const headers = reqOpts.headers || {};
      const options = objectAssign({}, reqOpts, { headers });
      headers.host = headers.host || getHostHeaderWithPort(uri);
      options.protocol = proxy.protocol || options.protocol;
      options.hostname = proxy.host.replace(/:\d+/, "");
      options.port = proxy.port;
      options.host = getHostFromUri(objectAssign({}, uri, proxy));
      options.href = `${options.protocol}//${options.host}${options.path}`;
      options.path = url.format(uri);
      return options;
    }
    function getProxyOptions(options) {
      let proxy;
      if (options.hasOwnProperty("proxy")) {
        proxy = options.proxy;
      } else {
        const uri = url.parse(options.url);
        proxy = getProxyFromUri(uri);
      }
      return typeof proxy === "string" ? url.parse(proxy) : proxy;
    }
    exports2.rewriteUriForProxy = rewriteUriForProxy;
    exports2.getProxyOptions = getProxyOptions;
  }
});

// node_modules/tunnel-agent/node_modules/safe-buffer/index.js
var require_safe_buffer2 = __commonJS({
  "node_modules/tunnel-agent/node_modules/safe-buffer/index.js"(exports2, module2) {
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/tunnel-agent/index.js
var require_tunnel_agent = __commonJS({
  "node_modules/tunnel-agent/index.js"(exports2) {
    "use strict";
    var net = require("net");
    var tls = require("tls");
    var http = require("http");
    var https = require("https");
    var events = require("events");
    var assert = require("assert");
    var util = require("util");
    var Buffer2 = require_safe_buffer2().Buffer;
    exports2.httpOverHttp = httpOverHttp;
    exports2.httpsOverHttp = httpsOverHttp;
    exports2.httpOverHttps = httpOverHttps;
    exports2.httpsOverHttps = httpsOverHttps;
    function httpOverHttp(options) {
      var agent = new TunnelingAgent(options);
      agent.request = http.request;
      return agent;
    }
    function httpsOverHttp(options) {
      var agent = new TunnelingAgent(options);
      agent.request = http.request;
      agent.createSocket = createSecureSocket;
      agent.defaultPort = 443;
      return agent;
    }
    function httpOverHttps(options) {
      var agent = new TunnelingAgent(options);
      agent.request = https.request;
      return agent;
    }
    function httpsOverHttps(options) {
      var agent = new TunnelingAgent(options);
      agent.request = https.request;
      agent.createSocket = createSecureSocket;
      agent.defaultPort = 443;
      return agent;
    }
    function TunnelingAgent(options) {
      var self2 = this;
      self2.options = options || {};
      self2.proxyOptions = self2.options.proxy || {};
      self2.maxSockets = self2.options.maxSockets || http.Agent.defaultMaxSockets;
      self2.requests = [];
      self2.sockets = [];
      self2.on("free", function onFree(socket, host, port) {
        for (var i = 0, len = self2.requests.length; i < len; ++i) {
          var pending = self2.requests[i];
          if (pending.host === host && pending.port === port) {
            self2.requests.splice(i, 1);
            pending.request.onSocket(socket);
            return;
          }
        }
        socket.destroy();
        self2.removeSocket(socket);
      });
    }
    util.inherits(TunnelingAgent, events.EventEmitter);
    TunnelingAgent.prototype.addRequest = function addRequest(req, options) {
      var self2 = this;
      if (typeof options === "string") {
        options = {
          host: options,
          port: arguments[2],
          path: arguments[3]
        };
      }
      if (self2.sockets.length >= this.maxSockets) {
        self2.requests.push({ host: options.host, port: options.port, request: req });
        return;
      }
      self2.createConnection({ host: options.host, port: options.port, request: req });
    };
    TunnelingAgent.prototype.createConnection = function createConnection(pending) {
      var self2 = this;
      self2.createSocket(pending, function(socket) {
        socket.on("free", onFree);
        socket.on("close", onCloseOrRemove);
        socket.on("agentRemove", onCloseOrRemove);
        pending.request.onSocket(socket);
        function onFree() {
          self2.emit("free", socket, pending.host, pending.port);
        }
        function onCloseOrRemove(err) {
          self2.removeSocket(socket);
          socket.removeListener("free", onFree);
          socket.removeListener("close", onCloseOrRemove);
          socket.removeListener("agentRemove", onCloseOrRemove);
        }
      });
    };
    TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
      var self2 = this;
      var placeholder = {};
      self2.sockets.push(placeholder);
      var connectOptions = mergeOptions({}, self2.proxyOptions, {
        method: "CONNECT",
        path: options.host + ":" + options.port,
        agent: false
      });
      if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {};
        connectOptions.headers["Proxy-Authorization"] = "Basic " + Buffer2.from(connectOptions.proxyAuth).toString("base64");
      }
      debug("making CONNECT request");
      var connectReq = self2.request(connectOptions);
      connectReq.useChunkedEncodingByDefault = false;
      connectReq.once("response", onResponse);
      connectReq.once("upgrade", onUpgrade);
      connectReq.once("connect", onConnect);
      connectReq.once("error", onError);
      connectReq.end();
      function onResponse(res) {
        res.upgrade = true;
      }
      function onUpgrade(res, socket, head) {
        process.nextTick(function() {
          onConnect(res, socket, head);
        });
      }
      function onConnect(res, socket, head) {
        connectReq.removeAllListeners();
        socket.removeAllListeners();
        if (res.statusCode === 200) {
          assert.equal(head.length, 0);
          debug("tunneling connection has established");
          self2.sockets[self2.sockets.indexOf(placeholder)] = socket;
          cb(socket);
        } else {
          debug("tunneling socket could not be established, statusCode=%d", res.statusCode);
          var error = new Error("tunneling socket could not be established, statusCode=" + res.statusCode);
          error.code = "ECONNRESET";
          options.request.emit("error", error);
          self2.removeSocket(placeholder);
        }
      }
      function onError(cause) {
        connectReq.removeAllListeners();
        debug("tunneling socket could not be established, cause=%s\n", cause.message, cause.stack);
        var error = new Error("tunneling socket could not be established, cause=" + cause.message);
        error.code = "ECONNRESET";
        options.request.emit("error", error);
        self2.removeSocket(placeholder);
      }
    };
    TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
      var pos = this.sockets.indexOf(socket);
      if (pos === -1)
        return;
      this.sockets.splice(pos, 1);
      var pending = this.requests.shift();
      if (pending) {
        this.createConnection(pending);
      }
    };
    function createSecureSocket(options, cb) {
      var self2 = this;
      TunnelingAgent.prototype.createSocket.call(self2, options, function(socket) {
        var secureSocket = tls.connect(0, mergeOptions({}, self2.options, {
          servername: options.host,
          socket
        }));
        self2.sockets[self2.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
      });
    }
    function mergeOptions(target) {
      for (var i = 1, len = arguments.length; i < len; ++i) {
        var overrides = arguments[i];
        if (typeof overrides === "object") {
          var keys = Object.keys(overrides);
          for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
            var k = keys[j];
            if (overrides[k] !== void 0) {
              target[k] = overrides[k];
            }
          }
        }
      }
      return target;
    }
    var debug;
    if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
      debug = function() {
        var args = Array.prototype.slice.call(arguments);
        if (typeof args[0] === "string") {
          args[0] = "TUNNEL: " + args[0];
        } else {
          args.unshift("TUNNEL:");
        }
        console.error.apply(console, args);
      };
    } else {
      debug = function() {
      };
    }
    exports2.debug = debug;
  }
});

// node_modules/get-it/lib-node/request/node/tunnel.js
var require_tunnel = __commonJS({
  "node_modules/get-it/lib-node/request/node/tunnel.js"(exports2) {
    "use strict";
    var url = require("url");
    var tunnel = require_tunnel_agent();
    var objectAssign = require_object_assign();
    var uriParts = ["protocol", "slashes", "auth", "host", "port", "hostname", "hash", "search", "query", "pathname", "path", "href"];
    var defaultProxyHeaderWhiteList = ["accept", "accept-charset", "accept-encoding", "accept-language", "accept-ranges", "cache-control", "content-encoding", "content-language", "content-location", "content-md5", "content-range", "content-type", "connection", "date", "expect", "max-forwards", "pragma", "referer", "te", "user-agent", "via"];
    var defaultProxyHeaderExclusiveList = ["proxy-authorization"];
    exports2.shouldEnable = (options, tunnelOption) => {
      if (typeof options.tunnel !== "undefined") {
        return Boolean(options.tunnel);
      }
      const uri = url.parse(options.url);
      if (uri.protocol === "https:") {
        return true;
      }
      return false;
    };
    exports2.applyAgent = function() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      let proxy = arguments[1];
      const options = objectAssign({}, opts);
      const proxyHeaderWhiteList = defaultProxyHeaderWhiteList.concat(options.proxyHeaderWhiteList || []).map((header) => header.toLowerCase());
      const proxyHeaderExclusiveList = defaultProxyHeaderExclusiveList.concat(options.proxyHeaderExclusiveList || []).map((header) => header.toLowerCase());
      const proxyHeaders = getAllowedProxyHeaders(options.headers, proxyHeaderWhiteList);
      proxyHeaders.host = constructProxyHost(options);
      options.headers = Object.keys(options.headers || {}).reduce((headers, header) => {
        const isAllowed = proxyHeaderExclusiveList.indexOf(header.toLowerCase()) === -1;
        if (isAllowed) {
          headers[header] = options.headers[header];
        }
        return headers;
      }, {});
      const tunnelFn = getTunnelFn(options, proxy);
      const tunnelOptions = constructTunnelOptions(options, proxy, proxyHeaders);
      options.agent = tunnelFn(tunnelOptions);
      return options;
    };
    function getTunnelFn(options, proxy) {
      const uri = getUriParts(options);
      const tunnelFnName = constructTunnelFnName(uri, proxy);
      return tunnel[tunnelFnName];
    }
    function getUriParts(options) {
      return uriParts.reduce((uri, part) => {
        uri[part] = options[part];
        return uri;
      }, {});
    }
    function constructTunnelFnName(uri, proxy) {
      const uriProtocol = uri.protocol === "https:" ? "https" : "http";
      const proxyProtocol = proxy.protocol === "https:" ? "Https" : "Http";
      return [uriProtocol, proxyProtocol].join("Over");
    }
    function constructProxyHost(uri) {
      const port = uri.port;
      const protocol = uri.protocol;
      let proxyHost = `${uri.hostname}:`;
      if (port) {
        proxyHost += port;
      } else if (protocol === "https:") {
        proxyHost += "443";
      } else {
        proxyHost += "80";
      }
      return proxyHost;
    }
    function getAllowedProxyHeaders(headers, whiteList) {
      return Object.keys(headers).filter((header) => whiteList.indexOf(header.toLowerCase()) !== -1).reduce((set, header) => {
        set[header] = headers[header];
        return set;
      }, {});
    }
    function constructTunnelOptions(options, proxy, proxyHeaders) {
      return {
        proxy: {
          host: proxy.hostname,
          port: +proxy.port,
          proxyAuth: proxy.auth,
          headers: proxyHeaders
        },
        headers: options.headers,
        ca: options.ca,
        cert: options.cert,
        key: options.key,
        passphrase: options.passphrase,
        pfx: options.pfx,
        ciphers: options.ciphers,
        rejectUnauthorized: options.rejectUnauthorized,
        secureOptions: options.secureOptions,
        secureProtocol: options.secureProtocol
      };
    }
  }
});

// node_modules/get-it/lib-node/request/node-request.js
var require_node_request = __commonJS({
  "node_modules/get-it/lib-node/request/node-request.js"(exports2, module2) {
    "use strict";
    var _slicedToArray = function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    var qs = require("querystring");
    var url = require("url");
    var http = require("http");
    var https = require("https");
    var concat = require_simple_concat();
    var follow = require_follow_redirects();
    var timedOut = require_timed_out();
    var isStream = require_is_stream();
    var toStream = require_into_stream();
    var objectAssign = require_object_assign();
    var progressStream = require_progress_stream();
    var decompressResponse = require_decompress_response();
    var _require = require_proxy();
    var getProxyOptions = _require.getProxyOptions;
    var rewriteUriForProxy = _require.rewriteUriForProxy;
    var tunneling = require_tunnel();
    var adapter = "node";
    var reduceResponse = (res, reqUrl, method, body) => ({
      body,
      url: reqUrl,
      method,
      headers: res.headers,
      statusCode: res.statusCode,
      statusMessage: res.statusMessage
    });
    module2.exports = (context, cb) => {
      const options = context.options;
      const uri = objectAssign({}, url.parse(options.url));
      const bodyType = isStream(options.body) ? "stream" : typeof options.body;
      if (bodyType !== "undefined" && bodyType !== "stream" && bodyType !== "string" && !Buffer.isBuffer(options.body)) {
        throw new Error(`Request body must be a string, buffer or stream, got ${bodyType}`);
      }
      const lengthHeader = {};
      if (options.bodySize) {
        lengthHeader["content-length"] = options.bodySize;
      } else if (options.body && Buffer.isBuffer(options.body)) {
        lengthHeader["content-length"] = options.body.length;
      }
      let aborted = false;
      const callback = (err, res) => !aborted && cb(err, res);
      context.channels.abort.subscribe(() => {
        aborted = true;
      });
      let reqOpts = objectAssign({}, uri, {
        method: options.method,
        headers: objectAssign({}, lowerCaseHeaders(options.headers), lengthHeader),
        maxRedirects: options.maxRedirects
      });
      const proxy = getProxyOptions(options);
      const tunnel = proxy && tunneling.shouldEnable(options);
      const injectedResponse = context.applyMiddleware("interceptRequest", void 0, {
        adapter,
        context
      });
      if (injectedResponse) {
        const cbTimer = setImmediate(callback, null, injectedResponse);
        const abort = () => clearImmediate(cbTimer);
        return { abort };
      }
      if (options.maxRedirects !== 0) {
        reqOpts.maxRedirects = options.maxRedirects || 5;
      }
      if (proxy && tunnel) {
        reqOpts = tunneling.applyAgent(reqOpts, proxy);
      } else if (proxy && !tunnel) {
        reqOpts = rewriteUriForProxy(reqOpts, uri, proxy);
      }
      if (!tunnel && proxy && proxy.auth && !reqOpts.headers["proxy-authorization"]) {
        var _ref = proxy.auth.username ? [proxy.auth.username, proxy.auth.password] : proxy.auth.split(":").map((item) => qs.unescape(item)), _ref2 = _slicedToArray(_ref, 2);
        const username = _ref2[0], password = _ref2[1];
        const auth = Buffer.from(`${username}:${password}`, "utf8");
        const authBase64 = auth.toString("base64");
        reqOpts.headers["proxy-authorization"] = `Basic ${authBase64}`;
      }
      const transport = getRequestTransport(reqOpts, proxy, tunnel);
      if (typeof options.debug === "function" && proxy) {
        options.debug("Proxying using %s", reqOpts.agent ? "tunnel agent" : `${reqOpts.host}:${reqOpts.port}`);
      }
      const finalOptions = context.applyMiddleware("finalizeOptions", reqOpts);
      const request = transport.request(finalOptions, (response) => {
        const tryDecompress = reqOpts.method !== "HEAD";
        const res = tryDecompress ? decompressResponse(response) : response;
        const resStream = context.applyMiddleware("onHeaders", res, {
          headers: response.headers,
          adapter,
          context
        });
        concat(resStream, (err, data) => {
          if (err) {
            return callback(err);
          }
          const body = options.rawBody ? data : data.toString();
          const reduced = reduceResponse(res, response.responseUrl || options.url, reqOpts.method, body);
          return callback(null, reduced);
        });
      });
      if (options.timeout) {
        timedOut(request, options.timeout);
      }
      request.once("error", callback);
      var _getProgressStream = getProgressStream(options);
      const bodyStream = _getProgressStream.bodyStream, progress = _getProgressStream.progress;
      context.applyMiddleware("onRequest", { options, adapter, request, context, progress });
      if (bodyStream) {
        bodyStream.pipe(request);
      } else {
        request.end(options.body);
      }
      return { abort: () => request.abort() };
    };
    function getProgressStream(options) {
      if (!options.body) {
        return {};
      }
      const bodyIsStream = isStream(options.body);
      const length = options.bodySize || (bodyIsStream ? null : Buffer.byteLength(options.body));
      if (!length) {
        return bodyIsStream ? { bodyStream: options.body } : {};
      }
      const progress = progressStream({ time: 16, length });
      const bodyStream = bodyIsStream ? options.body : toStream(options.body);
      return { bodyStream: bodyStream.pipe(progress), progress };
    }
    function getRequestTransport(reqOpts, proxy, tunnel) {
      const isHttpsRequest = reqOpts.protocol === "https:";
      const transports = reqOpts.maxRedirects === 0 ? { http, https } : { http: follow.http, https: follow.https };
      if (!proxy || tunnel) {
        return isHttpsRequest ? transports.https : transports.http;
      }
      let isHttpsProxy = proxy.port === 443;
      if (proxy.protocol) {
        isHttpsProxy = /^https:?/.test(proxy.protocol);
      }
      return isHttpsProxy ? transports.https : transports.http;
    }
    function lowerCaseHeaders(headers) {
      return Object.keys(headers || {}).reduce((acc, header) => {
        acc[header.toLowerCase()] = headers[header];
        return acc;
      }, {});
    }
  }
});

// node_modules/get-it/lib-node/request/index.js
var require_request = __commonJS({
  "node_modules/get-it/lib-node/request/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_node_request();
  }
});

// node_modules/get-it/lib-node/index.js
var require_lib_node = __commonJS({
  "node_modules/get-it/lib-node/index.js"(exports2, module2) {
    "use strict";
    var pubsub = require_nano_pubsub();
    var middlewareReducer = require_middlewareReducer();
    var processOptions = require_defaultOptionsProcessor();
    var validateOptions = require_defaultOptionsValidator();
    var httpRequest = require_request();
    var channelNames = ["request", "response", "progress", "error", "abort"];
    var middlehooks = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
    module2.exports = function createRequester() {
      let initMiddleware = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const loadedMiddleware = [];
      const middleware = middlehooks.reduce((ware, name) => {
        ware[name] = ware[name] || [];
        return ware;
      }, {
        processOptions: [processOptions],
        validateOptions: [validateOptions]
      });
      function request(opts) {
        const channels = channelNames.reduce((target, name) => {
          target[name] = pubsub();
          return target;
        }, {});
        const applyMiddleware = middlewareReducer(middleware);
        const options = applyMiddleware("processOptions", opts);
        applyMiddleware("validateOptions", options);
        const context = {
          options,
          channels,
          applyMiddleware
        };
        let ongoingRequest = null;
        const unsubscribe = channels.request.subscribe((ctx) => {
          ongoingRequest = httpRequest(ctx, (err, res) => onResponse(err, res, ctx));
        });
        channels.abort.subscribe(() => {
          unsubscribe();
          if (ongoingRequest) {
            ongoingRequest.abort();
          }
        });
        const returnValue = applyMiddleware("onReturn", channels, context);
        if (returnValue === channels) {
          channels.request.publish(context);
        }
        return returnValue;
        function onResponse(reqErr, res, ctx) {
          let error = reqErr;
          let response = res;
          if (!error) {
            try {
              response = applyMiddleware("onResponse", res, ctx);
            } catch (err) {
              response = null;
              error = err;
            }
          }
          error = error && applyMiddleware("onError", error, ctx);
          if (error) {
            channels.error.publish(error);
          } else if (response) {
            channels.response.publish(response);
          }
        }
      }
      request.use = function use(newMiddleware) {
        if (!newMiddleware) {
          throw new Error("Tried to add middleware that resolved to falsey value");
        }
        if (typeof newMiddleware === "function") {
          throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        }
        if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
          throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        }
        middlehooks.forEach((key) => {
          if (newMiddleware[key]) {
            middleware[key].push(newMiddleware[key]);
          }
        });
        loadedMiddleware.push(newMiddleware);
        return request;
      };
      request.clone = function clone() {
        return createRequester(loadedMiddleware);
      };
      initMiddleware.forEach(request.use);
      return request;
    };
  }
});

// node_modules/get-it/index.js
var require_get_it = __commonJS({
  "node_modules/get-it/index.js"(exports2, module2) {
    module2.exports = require_lib_node();
  }
});

// node_modules/get-it/lib/util/global.js
var require_global = __commonJS({
  "node_modules/get-it/lib/util/global.js"(exports2, module2) {
    "use strict";
    if (typeof window !== "undefined") {
      module2.exports = window;
    } else if (typeof global !== "undefined") {
      module2.exports = global;
    } else if (typeof self !== "undefined") {
      module2.exports = self;
    } else {
      module2.exports = {};
    }
  }
});

// node_modules/get-it/lib/middleware/observable.js
var require_observable2 = __commonJS({
  "node_modules/get-it/lib/middleware/observable.js"(exports2, module2) {
    "use strict";
    var global2 = require_global();
    var objectAssign = require_object_assign();
    module2.exports = function() {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var Observable = opts.implementation || global2.Observable;
      if (!Observable) {
        throw new Error("`Observable` is not available in global scope, and no implementation was passed");
      }
      return {
        onReturn: function onReturn(channels, context) {
          return new Observable(function(observer) {
            channels.error.subscribe(function(err) {
              return observer.error(err);
            });
            channels.progress.subscribe(function(event) {
              return observer.next(objectAssign({ type: "progress" }, event));
            });
            channels.response.subscribe(function(response) {
              observer.next(objectAssign({ type: "response" }, response));
              observer.complete();
            });
            channels.request.publish(context);
            return function() {
              return channels.abort.publish();
            };
          });
        }
      };
    };
  }
});

// node_modules/isobject/index.js
var require_isobject = __commonJS({
  "node_modules/isobject/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function isObject(val) {
      return val != null && typeof val === "object" && Array.isArray(val) === false;
    };
  }
});

// node_modules/is-plain-object/index.js
var require_is_plain_object = __commonJS({
  "node_modules/is-plain-object/index.js"(exports2, module2) {
    "use strict";
    var isObject = require_isobject();
    function isObjectObject(o) {
      return isObject(o) === true && Object.prototype.toString.call(o) === "[object Object]";
    }
    module2.exports = function isPlainObject(o) {
      var ctor, prot;
      if (isObjectObject(o) === false)
        return false;
      ctor = o.constructor;
      if (typeof ctor !== "function")
        return false;
      prot = ctor.prototype;
      if (isObjectObject(prot) === false)
        return false;
      if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/get-it/lib/middleware/jsonRequest.js
var require_jsonRequest = __commonJS({
  "node_modules/get-it/lib/middleware/jsonRequest.js"(exports2, module2) {
    "use strict";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var objectAssign = require_object_assign();
    var isPlainObject = require_is_plain_object();
    var serializeTypes = ["boolean", "string", "number"];
    var isBuffer = function isBuffer2(obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    };
    module2.exports = function() {
      return {
        processOptions: function processOptions(options) {
          var body = options.body;
          if (!body) {
            return options;
          }
          var isStream = typeof body.pipe === "function";
          var shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(typeof body === "undefined" ? "undefined" : _typeof(body)) !== -1 || Array.isArray(body) || isPlainObject(body));
          if (!shouldSerialize) {
            return options;
          }
          return objectAssign({}, options, {
            body: JSON.stringify(options.body),
            headers: objectAssign({}, options.headers, {
              "Content-Type": "application/json"
            })
          });
        }
      };
    };
  }
});

// node_modules/get-it/lib/middleware/jsonResponse.js
var require_jsonResponse = __commonJS({
  "node_modules/get-it/lib/middleware/jsonResponse.js"(exports2, module2) {
    "use strict";
    var objectAssign = require_object_assign();
    module2.exports = function(opts) {
      return {
        onResponse: function onResponse(response) {
          var contentType = response.headers["content-type"] || "";
          var shouldDecode = opts && opts.force || contentType.indexOf("application/json") !== -1;
          if (!response.body || !contentType || !shouldDecode) {
            return response;
          }
          return objectAssign({}, response, { body: tryParse(response.body) });
        },
        processOptions: function processOptions(options) {
          return objectAssign({}, options, {
            headers: objectAssign({ Accept: "application/json" }, options.headers)
          });
        }
      };
    };
    function tryParse(body) {
      try {
        return JSON.parse(body);
      } catch (err) {
        err.message = "Failed to parsed response body as JSON: " + err.message;
        throw err;
      }
    }
  }
});

// node_modules/get-it/lib/middleware/progress/node-progress.js
var require_node_progress = __commonJS({
  "node_modules/get-it/lib/middleware/progress/node-progress.js"(exports2, module2) {
    "use strict";
    var progressStream = require_progress_stream();
    function normalizer(stage) {
      return function(prog) {
        return {
          stage,
          percent: prog.percentage,
          total: prog.length,
          loaded: prog.transferred,
          lengthComputable: !(prog.length === 0 && prog.percentage === 0)
        };
      };
    }
    module2.exports = function() {
      return {
        onHeaders: function onHeaders(response, evt) {
          var progress = progressStream({ time: 16 });
          var normalize = normalizer("download");
          var contentLength = response.headers["content-length"];
          var length = contentLength && Number(contentLength);
          if (!isNaN(length) && length > 0) {
            progress.setLength(length);
          }
          progress.on("progress", function(prog) {
            return evt.context.channels.progress.publish(normalize(prog));
          });
          return response.pipe(progress);
        },
        onRequest: function onRequest(evt) {
          if (!evt.progress) {
            return;
          }
          var normalize = normalizer("upload");
          evt.progress.on("progress", function(prog) {
            return evt.context.channels.progress.publish(normalize(prog));
          });
        }
      };
    };
  }
});

// node_modules/get-it/lib/middleware/progress/index.js
var require_progress = __commonJS({
  "node_modules/get-it/lib/middleware/progress/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_node_progress();
  }
});

// node_modules/make-error/index.js
var require_make_error = __commonJS({
  "node_modules/make-error/index.js"(exports2, module2) {
    "use strict";
    var construct = typeof Reflect !== "undefined" ? Reflect.construct : void 0;
    var defineProperty = Object.defineProperty;
    var captureStackTrace = Error.captureStackTrace;
    if (captureStackTrace === void 0) {
      captureStackTrace = function captureStackTrace2(error) {
        var container = new Error();
        defineProperty(error, "stack", {
          configurable: true,
          get: function getStack() {
            var stack = container.stack;
            defineProperty(this, "stack", {
              configurable: true,
              value: stack,
              writable: true
            });
            return stack;
          },
          set: function setStack(stack) {
            defineProperty(error, "stack", {
              configurable: true,
              value: stack,
              writable: true
            });
          }
        });
      };
    }
    function BaseError(message) {
      if (message !== void 0) {
        defineProperty(this, "message", {
          configurable: true,
          value: message,
          writable: true
        });
      }
      var cname = this.constructor.name;
      if (cname !== void 0 && cname !== this.name) {
        defineProperty(this, "name", {
          configurable: true,
          value: cname,
          writable: true
        });
      }
      captureStackTrace(this, this.constructor);
    }
    BaseError.prototype = Object.create(Error.prototype, {
      constructor: {
        configurable: true,
        value: BaseError,
        writable: true
      }
    });
    var setFunctionName = function() {
      function setFunctionName2(fn, name) {
        return defineProperty(fn, "name", {
          configurable: true,
          value: name
        });
      }
      try {
        var f = function() {
        };
        setFunctionName2(f, "foo");
        if (f.name === "foo") {
          return setFunctionName2;
        }
      } catch (_) {
      }
    }();
    function makeError(constructor, super_) {
      if (super_ == null || super_ === Error) {
        super_ = BaseError;
      } else if (typeof super_ !== "function") {
        throw new TypeError("super_ should be a function");
      }
      var name;
      if (typeof constructor === "string") {
        name = constructor;
        constructor = construct !== void 0 ? function() {
          return construct(super_, arguments, this.constructor);
        } : function() {
          super_.apply(this, arguments);
        };
        if (setFunctionName !== void 0) {
          setFunctionName(constructor, name);
          name = void 0;
        }
      } else if (typeof constructor !== "function") {
        throw new TypeError("constructor should be either a string or a function");
      }
      constructor.super_ = constructor["super"] = super_;
      var properties = {
        constructor: {
          configurable: true,
          value: constructor,
          writable: true
        }
      };
      if (name !== void 0) {
        properties.name = {
          configurable: true,
          value: name,
          writable: true
        };
      }
      constructor.prototype = Object.create(super_.prototype, properties);
      return constructor;
    }
    exports2 = module2.exports = makeError;
    exports2.BaseError = BaseError;
  }
});

// node_modules/@sanity/client/lib/http/errors.js
var require_errors = __commonJS({
  "node_modules/@sanity/client/lib/http/errors.js"(exports2) {
    "use strict";
    var makeError = require_make_error();
    var assign = require_object_assign();
    function ClientError(res) {
      var props = extractErrorProps(res);
      ClientError.super.call(this, props.message);
      assign(this, props);
    }
    function ServerError(res) {
      var props = extractErrorProps(res);
      ServerError.super.call(this, props.message);
      assign(this, props);
    }
    function extractErrorProps(res) {
      var body = res.body;
      var props = {
        response: res,
        statusCode: res.statusCode,
        responseBody: stringifyBody(body, res)
      };
      if (body.error && body.message) {
        props.message = "".concat(body.error, " - ").concat(body.message);
        return props;
      }
      if (body.error && body.error.description) {
        props.message = body.error.description;
        props.details = body.error;
        return props;
      }
      props.message = body.error || body.message || httpErrorMessage(res);
      return props;
    }
    function httpErrorMessage(res) {
      var statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : "";
      return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
    }
    function stringifyBody(body, res) {
      var contentType = (res.headers["content-type"] || "").toLowerCase();
      var isJson = contentType.indexOf("application/json") !== -1;
      return isJson ? JSON.stringify(body, null, 2) : body;
    }
    makeError(ClientError);
    makeError(ServerError);
    exports2.ClientError = ClientError;
    exports2.ServerError = ServerError;
  }
});

// node_modules/is-retry-allowed/index.js
var require_is_retry_allowed = __commonJS({
  "node_modules/is-retry-allowed/index.js"(exports2, module2) {
    "use strict";
    var WHITELIST = [
      "ETIMEDOUT",
      "ECONNRESET",
      "EADDRINUSE",
      "ESOCKETTIMEDOUT",
      "ECONNREFUSED",
      "EPIPE",
      "EHOSTUNREACH",
      "EAI_AGAIN"
    ];
    var BLACKLIST = [
      "ENOTFOUND",
      "ENETUNREACH",
      "UNABLE_TO_GET_ISSUER_CERT",
      "UNABLE_TO_GET_CRL",
      "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
      "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
      "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
      "CERT_SIGNATURE_FAILURE",
      "CRL_SIGNATURE_FAILURE",
      "CERT_NOT_YET_VALID",
      "CERT_HAS_EXPIRED",
      "CRL_NOT_YET_VALID",
      "CRL_HAS_EXPIRED",
      "ERROR_IN_CERT_NOT_BEFORE_FIELD",
      "ERROR_IN_CERT_NOT_AFTER_FIELD",
      "ERROR_IN_CRL_LAST_UPDATE_FIELD",
      "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
      "OUT_OF_MEM",
      "DEPTH_ZERO_SELF_SIGNED_CERT",
      "SELF_SIGNED_CERT_IN_CHAIN",
      "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
      "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
      "CERT_CHAIN_TOO_LONG",
      "CERT_REVOKED",
      "INVALID_CA",
      "PATH_LENGTH_EXCEEDED",
      "INVALID_PURPOSE",
      "CERT_UNTRUSTED",
      "CERT_REJECTED"
    ];
    module2.exports = function(err) {
      if (!err || !err.code) {
        return true;
      }
      if (WHITELIST.indexOf(err.code) !== -1) {
        return true;
      }
      if (BLACKLIST.indexOf(err.code) !== -1) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/get-it/lib-node/util/node-shouldRetry.js
var require_node_shouldRetry = __commonJS({
  "node_modules/get-it/lib-node/util/node-shouldRetry.js"(exports2, module2) {
    "use strict";
    var allowed = require_is_retry_allowed();
    module2.exports = (err, num, options) => {
      if (options.method !== "GET" && options.method !== "HEAD") {
        return false;
      }
      if (err.response && err.response.statusCode) {
        return false;
      }
      return allowed(err);
    };
  }
});

// node_modules/get-it/lib-node/middleware/retry.js
var require_retry = __commonJS({
  "node_modules/get-it/lib-node/middleware/retry.js"(exports2, module2) {
    "use strict";
    var objectAssign = require_object_assign();
    var defaultShouldRetry = require_node_shouldRetry();
    var isStream = (stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
    var retry = function retry2() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const maxRetries = opts.maxRetries || 5;
      const retryDelay = opts.retryDelay || getRetryDelay;
      const allowRetry = opts.shouldRetry || defaultShouldRetry;
      return {
        onError: (err, context) => {
          const options = context.options;
          const max = options.maxRetries || maxRetries;
          const shouldRetry = options.shouldRetry || allowRetry;
          const attemptNumber = options.attemptNumber || 0;
          if (isStream(options.body)) {
            return err;
          }
          if (!shouldRetry(err, attemptNumber, options) || attemptNumber >= max) {
            return err;
          }
          const newContext = objectAssign({}, context, {
            options: objectAssign({}, options, { attemptNumber: attemptNumber + 1 })
          });
          setTimeout(() => context.channels.request.publish(newContext), retryDelay(attemptNumber));
          return null;
        }
      };
    };
    retry.shouldRetry = defaultShouldRetry;
    module2.exports = retry;
    function getRetryDelay(attemptNum) {
      return 100 * Math.pow(2, attemptNum) + Math.random() * 100;
    }
  }
});

// node_modules/ms/index.js
var require_ms2 = __commonJS({
  "node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/get-it/node_modules/debug/src/debug.js
var require_debug2 = __commonJS({
  "node_modules/get-it/node_modules/debug/src/debug.js"(exports2, module2) {
    exports2 = module2.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports2.coerce = coerce;
    exports2.disable = disable;
    exports2.enable = enable;
    exports2.enabled = enabled;
    exports2.humanize = require_ms2();
    exports2.names = [];
    exports2.skips = [];
    exports2.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports2.colors[Math.abs(hash) % exports2.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled)
          return;
        var self2 = debug;
        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self2.diff = ms;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports2.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%")
            return match;
          index++;
          var formatter = exports2.formatters[format];
          if (typeof formatter === "function") {
            var val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports2.formatArgs.call(self2, args);
        var logFn = debug.log || exports2.log || console.log.bind(console);
        logFn.apply(self2, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports2.enabled(namespace);
      debug.useColors = exports2.useColors();
      debug.color = selectColor(namespace);
      if (typeof exports2.init === "function") {
        exports2.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports2.save(namespaces);
      exports2.names = [];
      exports2.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i])
          continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports2.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports2.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports2.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports2.skips.length; i < len; i++) {
        if (exports2.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports2.names.length; i < len; i++) {
        if (exports2.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error)
        return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/get-it/node_modules/debug/src/browser.js
var require_browser2 = __commonJS({
  "node_modules/get-it/node_modules/debug/src/browser.js"(exports2, module2) {
    exports2 = module2.exports = require_debug2();
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
    exports2.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports2.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports2.humanize(this.diff);
      if (!useColors2)
        return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if (match === "%%")
          return;
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (namespaces == null) {
          exports2.storage.removeItem("debug");
        } else {
          exports2.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load() {
      var r;
      try {
        r = exports2.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports2.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/get-it/node_modules/debug/src/node.js
var require_node4 = __commonJS({
  "node_modules/get-it/node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util = require("util");
    exports2 = module2.exports = require_debug2();
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.colors = [6, 2, 3, 4, 5, 1];
    exports2.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val))
        val = true;
      else if (/^(no|off|false|disabled)$/i.test(val))
        val = false;
      else if (val === "null")
        val = null;
      else
        val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (fd !== 1 && fd !== 2) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = fd === 1 ? process.stdout : fd === 2 ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(fd);
    }
    exports2.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports2.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  [3" + c + ";1m" + name + " [0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("[3" + c + "m+" + exports2.humanize(this.diff) + "[0m");
      } else {
        args[0] = new Date().toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (namespaces == null) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs = require("fs");
          stream2 = new fs.SyncWriteStream(fd2, { autoClose: false });
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = require("net");
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports2.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
      }
    }
    exports2.enable(load());
  }
});

// node_modules/get-it/node_modules/debug/src/index.js
var require_src2 = __commonJS({
  "node_modules/get-it/node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process !== "undefined" && process.type === "renderer") {
      module2.exports = require_browser2();
    } else {
      module2.exports = require_node4();
    }
  }
});

// node_modules/get-it/lib-node/middleware/debug.js
var require_debug3 = __commonJS({
  "node_modules/get-it/lib-node/middleware/debug.js"(exports2, module2) {
    "use strict";
    var debugIt = require_src2();
    var SENSITIVE_HEADERS = ["Cookie", "Authorization"];
    var hasOwn = Object.prototype.hasOwnProperty;
    var redactKeys = (source, keys) => {
      const target = {};
      for (const key in source) {
        if (hasOwn.call(source, key)) {
          target[key] = keys.indexOf(key) > -1 ? "<redacted>" : source[key];
        }
      }
      return target;
    };
    module2.exports = function() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const verbose = opts.verbose;
      const namespace = opts.namespace || "get-it";
      const defaultLogger = debugIt(namespace);
      const log = opts.log || defaultLogger;
      const shortCircuit = log === defaultLogger && !debugIt.enabled(namespace);
      let requestId = 0;
      return {
        processOptions: (options) => {
          options.debug = log;
          options.requestId = options.requestId || ++requestId;
          return options;
        },
        onRequest: (event) => {
          if (shortCircuit || !event) {
            return event;
          }
          const options = event.options;
          log("[%s] HTTP %s %s", options.requestId, options.method, options.url);
          if (verbose && options.body && typeof options.body === "string") {
            log("[%s] Request body: %s", options.requestId, options.body);
          }
          if (verbose && options.headers) {
            const headers = opts.redactSensitiveHeaders === false ? options.headers : redactKeys(options.headers, SENSITIVE_HEADERS);
            log("[%s] Request headers: %s", options.requestId, JSON.stringify(headers, null, 2));
          }
          return event;
        },
        onResponse: (res, context) => {
          if (shortCircuit || !res) {
            return res;
          }
          const reqId = context.options.requestId;
          log("[%s] Response code: %s %s", reqId, res.statusCode, res.statusMessage);
          if (verbose && res.body) {
            log("[%s] Response body: %s", reqId, stringifyBody(res));
          }
          return res;
        },
        onError: (err, context) => {
          const reqId = context.options.requestId;
          if (!err) {
            log("[%s] Error encountered, but handled by an earlier middleware", reqId);
            return err;
          }
          log("[%s] ERROR: %s", reqId, err.message);
          return err;
        }
      };
    };
    function stringifyBody(res) {
      const contentType = (res.headers["content-type"] || "").toLowerCase();
      const isJson = contentType.indexOf("application/json") !== -1;
      return isJson ? tryFormat(res.body) : res.body;
    }
    function tryFormat(body) {
      try {
        const parsed = typeof body === "string" ? JSON.parse(body) : body;
        return JSON.stringify(parsed, null, 2);
      } catch (err) {
        return body;
      }
    }
  }
});

// node_modules/get-it/lib-node/middleware/headers.js
var require_headers = __commonJS({
  "node_modules/get-it/lib-node/middleware/headers.js"(exports2, module2) {
    "use strict";
    var objectAssign = require_object_assign();
    module2.exports = function(headers) {
      let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return {
        processOptions: (options) => {
          const existing = options.headers || {};
          options.headers = opts.override ? objectAssign({}, existing, headers) : objectAssign({}, headers, existing);
          return options;
        }
      };
    };
  }
});

// node_modules/@sanity/client/package.json
var require_package = __commonJS({
  "node_modules/@sanity/client/package.json"(exports2, module2) {
    module2.exports = {
      name: "@sanity/client",
      version: "2.11.0",
      description: "Client for retrieving data from Sanity",
      main: "lib/sanityClient.js",
      umd: "umd/sanityClient.min.js",
      unpkg: "umd/sanityClient.min.js",
      types: "./sanityClient.d.ts",
      scripts: {
        analyze: "NODE_ENV=production BROWSERIFY_ENV=build DEBUG='' browserify --full-paths -t envify -g uglifyify lib/sanityClient.js --standalone=SanityClient | discify --open",
        browserify: "NODE_ENV=production BROWSERIFY_ENV=build DEBUG='' browserify -t envify -g uglifyify lib/sanityClient.js -o umd/sanityClient.js --standalone=SanityClient",
        build: "babel src --copy-files --out-dir lib && npm run browserify && npm run minify && npm run size",
        size: "node -r @babel/register src/scripts/print-bundle-size",
        clean: "rimraf lib coverage .nyc_output umd/*.js",
        coverage: "DEBUG=sanity NODE_ENV=test nyc --reporter=html --reporter=lcov --reporter=text npm test",
        minify: "terser -c -m -- umd/sanityClient.js > umd/sanityClient.min.js",
        prepublishOnly: "npm run build",
        test: "NODE_ENV=test tape -r @babel/register test/*.test.js"
      },
      browser: {
        "./src/http/nodeMiddleware.js": "./src/http/browserMiddleware.js",
        "./lib/http/nodeMiddleware.js": "./lib/http/browserMiddleware.js"
      },
      dependencies: {
        "@sanity/eventsource": "2.2.6",
        "@sanity/generate-help-url": "2.2.6",
        "@sanity/observable": "2.0.9",
        "deep-assign": "^2.0.0",
        "get-it": "^5.0.3",
        "make-error": "^1.3.0",
        "object-assign": "^4.1.1"
      },
      devDependencies: {
        "@babel/cli": "^7.11.6",
        "@babel/core": "^7.11.6",
        "@babel/preset-env": "^7.11.5",
        boxen: "^4.1.0",
        browserify: "^14.3.0",
        chalk: "^2.3.0",
        disc: "^1.3.2",
        envify: "^4.0.0",
        "gzip-size": "^3.0.0",
        "hard-rejection": "^2.1.0",
        nock: "^9.0.5",
        nyc: "^11.0.3",
        "pretty-bytes": "^4.0.2",
        rimraf: "^2.7.1",
        "sse-channel": "^2.0.6",
        tape: "^4.8.0",
        terser: "4.6.7",
        uglifyify: "^5.0.1"
      },
      repository: {
        type: "git",
        url: "git+https://github.com/sanity-io/sanity.git",
        directory: "packages/@sanity/client"
      },
      keywords: [
        "sanity",
        "cms",
        "headless",
        "realtime",
        "content",
        "client",
        "fetch",
        "api",
        "gradient"
      ],
      author: "Sanity.io <hello@sanity.io>",
      license: "MIT",
      bugs: {
        url: "https://github.com/sanity-io/sanity/issues"
      },
      homepage: "https://www.sanity.io/",
      nyc: {
        include: [
          "src/**/*.js"
        ],
        require: [
          "@babel/register"
        ],
        sourceMap: false
      },
      gitHead: "9bb9220b5697d99885f2878470fd42e61a337d08"
    };
  }
});

// node_modules/@sanity/client/lib/http/nodeMiddleware.js
var require_nodeMiddleware = __commonJS({
  "node_modules/@sanity/client/lib/http/nodeMiddleware.js"(exports2, module2) {
    "use strict";
    var retry = require_retry();
    var debug = require_debug3();
    var headers = require_headers();
    var pkg = require_package();
    var middleware = [debug({
      verbose: true,
      namespace: "sanity:client"
    }), headers({
      "User-Agent": "".concat(pkg.name, " ").concat(pkg.version)
    }), retry({
      maxRetries: 3
    })];
    module2.exports = middleware;
  }
});

// node_modules/@sanity/client/lib/http/request.js
var require_request2 = __commonJS({
  "node_modules/@sanity/client/lib/http/request.js"(exports2, module2) {
    "use strict";
    var getIt = require_get_it();
    var assign = require_object_assign();
    var observable = require_observable2();
    var jsonRequest = require_jsonRequest();
    var jsonResponse = require_jsonResponse();
    var progress = require_progress();
    var Observable = require_minimal();
    var _require = require_errors();
    var ClientError = _require.ClientError;
    var ServerError = _require.ServerError;
    var httpError = {
      onResponse: function onResponse(res) {
        if (res.statusCode >= 500) {
          throw new ServerError(res);
        } else if (res.statusCode >= 400) {
          throw new ClientError(res);
        }
        return res;
      }
    };
    var printWarnings = {
      onResponse: function onResponse(res) {
        var warn = res.headers["x-sanity-warning"];
        var warnings = Array.isArray(warn) ? warn : [warn];
        warnings.filter(Boolean).forEach(function(msg) {
          return console.warn(msg);
        });
        return res;
      }
    };
    var envSpecific = require_nodeMiddleware();
    var middleware = envSpecific.concat([printWarnings, jsonRequest(), jsonResponse(), progress(), httpError, observable({
      implementation: Observable
    })]);
    var request = getIt(middleware);
    function httpRequest(options) {
      var requester = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : request;
      return requester(assign({
        maxRedirects: 0
      }, options));
    }
    httpRequest.defaultRequester = request;
    httpRequest.ClientError = ClientError;
    httpRequest.ServerError = ServerError;
    module2.exports = httpRequest;
  }
});

// node_modules/@sanity/client/lib/http/requestOptions.js
var require_requestOptions = __commonJS({
  "node_modules/@sanity/client/lib/http/requestOptions.js"(exports2, module2) {
    "use strict";
    var assign = require_object_assign();
    var projectHeader = "X-Sanity-Project-ID";
    module2.exports = function(config) {
      var overrides = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var headers = {};
      var token = overrides.token || config.token;
      if (token) {
        headers.Authorization = "Bearer ".concat(token);
      }
      if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
        headers[projectHeader] = config.projectId;
      }
      var withCredentials = Boolean(typeof overrides.withCredentials === "undefined" ? config.token || config.withCredentials : overrides.withCredentials);
      var timeout = typeof overrides.timeout === "undefined" ? config.timeout : overrides.timeout;
      return assign({}, overrides, {
        headers: assign({}, headers, overrides.headers || {}),
        timeout: typeof timeout === "undefined" ? 5 * 60 * 1e3 : timeout,
        json: true,
        withCredentials
      });
    };
  }
});

// node_modules/@sanity/client/lib/warnings.js
var require_warnings = __commonJS({
  "node_modules/@sanity/client/lib/warnings.js"(exports2) {
    "use strict";
    var generateHelpUrl = require_generate_help_url();
    var once = require_once();
    var createWarningPrinter = function createWarningPrinter2(message) {
      return once(function() {
        var _console;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_console = console).warn.apply(_console, [message.join(" ")].concat(args));
      });
    };
    exports2.printCdnWarning = createWarningPrinter(["You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and", "cheaper. Think about it! For more info, see ".concat(generateHelpUrl("js-client-cdn-configuration"), "."), "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating", "the client."]);
    exports2.printBrowserTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", "See ".concat(generateHelpUrl("js-client-browser-token"), " for more information and how to hide this warning.")]);
    exports2.printCdnTokenWarning = createWarningPrinter(["You have set `useCdn` to `true` while also specifying a token. This is usually not what you", "want. The CDN cannot be used with an authorization token, since private data cannot be cached.", "See ".concat(generateHelpUrl("js-client-usecdn-token"), " for more information.")]);
    exports2.printNoApiVersionSpecifiedWarning = createWarningPrinter(["Using the Sanity client without specifying an API version is deprecated.", "See ".concat(generateHelpUrl("js-client-api-version"))]);
  }
});

// node_modules/@sanity/client/lib/config.js
var require_config2 = __commonJS({
  "node_modules/@sanity/client/lib/config.js"(exports2) {
    "use strict";
    var generateHelpUrl = require_generate_help_url();
    var assign = require_object_assign();
    var validate = require_validators();
    var warnings = require_warnings();
    var defaultCdnHost = "apicdn.sanity.io";
    var defaultConfig = {
      apiHost: "https://api.sanity.io",
      apiVersion: "1",
      useProjectHostname: true,
      gradientMode: false,
      isPromiseAPI: true
    };
    var LOCALHOSTS = ["localhost", "127.0.0.1", "0.0.0.0"];
    var isLocal = function isLocal2(host) {
      return LOCALHOSTS.indexOf(host) !== -1;
    };
    exports2.defaultConfig = defaultConfig;
    exports2.initConfig = function(config, prevConfig) {
      var specifiedConfig = assign({}, prevConfig, config);
      if (!specifiedConfig.apiVersion) {
        warnings.printNoApiVersionSpecifiedWarning();
      }
      var newConfig = assign({}, defaultConfig, specifiedConfig);
      var gradientMode = newConfig.gradientMode;
      var projectBased = !gradientMode && newConfig.useProjectHostname;
      if (typeof Promise === "undefined") {
        var helpUrl = generateHelpUrl("js-client-promise-polyfill");
        throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
      }
      if (gradientMode && !newConfig.namespace) {
        throw new Error("Configuration must contain `namespace` when running in gradient mode");
      }
      if (projectBased && !newConfig.projectId) {
        throw new Error("Configuration must contain `projectId`");
      }
      var isBrowser = typeof window !== "undefined" && window.location && window.location.hostname;
      var isLocalhost = isBrowser && isLocal(window.location.hostname);
      if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
        warnings.printBrowserTokenWarning();
      } else if ((!isBrowser || isLocalhost) && newConfig.useCdn && newConfig.token) {
        warnings.printCdnTokenWarning();
      } else if (typeof newConfig.useCdn === "undefined") {
        warnings.printCdnWarning();
      }
      if (projectBased) {
        validate.projectId(newConfig.projectId);
      }
      if (!gradientMode && newConfig.dataset) {
        validate.dataset(newConfig.dataset, newConfig.gradientMode);
      }
      if ("requestTagPrefix" in newConfig) {
        newConfig.requestTagPrefix = newConfig.requestTagPrefix ? validate.requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0;
      }
      newConfig.apiVersion = "".concat(newConfig.apiVersion).replace(/^v/, "");
      newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
      newConfig.useCdn = Boolean(newConfig.useCdn) && !newConfig.token && !newConfig.withCredentials;
      exports2.validateApiVersion(newConfig.apiVersion);
      if (newConfig.gradientMode) {
        newConfig.url = newConfig.apiHost;
        newConfig.cdnUrl = newConfig.apiHost;
      } else {
        var hostParts = newConfig.apiHost.split("://", 2);
        var protocol = hostParts[0];
        var host = hostParts[1];
        var cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
        if (newConfig.useProjectHostname) {
          newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v").concat(newConfig.apiVersion);
          newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v").concat(newConfig.apiVersion);
        } else {
          newConfig.url = "".concat(newConfig.apiHost, "/v").concat(newConfig.apiVersion);
          newConfig.cdnUrl = newConfig.url;
        }
      }
      return newConfig;
    };
    exports2.validateApiVersion = function validateApiVersion(apiVersion) {
      if (apiVersion === "1" || apiVersion === "X") {
        return;
      }
      var apiDate = new Date(apiVersion);
      var apiVersionValid = /^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0;
      if (!apiVersionValid) {
        throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
      }
    };
  }
});

// node_modules/@sanity/client/lib/sanityClient.js
var require_sanityClient = __commonJS({
  "node_modules/@sanity/client/lib/sanityClient.js"(exports2, module2) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var _require = require_filter2();
    var filter = _require.filter;
    var _require2 = require_map2();
    var map = _require2.map;
    var Patch = require_patch();
    var Transaction = require_transaction();
    var dataMethods = require_dataMethods();
    var DatasetsClient = require_datasetsClient();
    var ProjectsClient = require_projectsClient();
    var AssetsClient = require_assetsClient();
    var UsersClient = require_usersClient();
    var AuthClient = require_authClient();
    var httpRequest = require_request2();
    var getRequestOptions = require_requestOptions();
    var _require3 = require_config2();
    var defaultConfig = _require3.defaultConfig;
    var initConfig = _require3.initConfig;
    var validate = require_validators();
    var toPromise = function toPromise2(observable) {
      return observable.toPromise();
    };
    function SanityClient() {
      var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultConfig;
      if (!(this instanceof SanityClient)) {
        return new SanityClient(config);
      }
      this.config(config);
      this.assets = new AssetsClient(this);
      this.datasets = new DatasetsClient(this);
      this.projects = new ProjectsClient(this);
      this.users = new UsersClient(this);
      this.auth = new AuthClient(this);
      if (this.clientConfig.isPromiseAPI) {
        var observableConfig = assign({}, this.clientConfig, {
          isPromiseAPI: false
        });
        this.observable = new SanityClient(observableConfig);
      }
    }
    assign(SanityClient.prototype, dataMethods);
    assign(SanityClient.prototype, {
      clone: function clone() {
        return new SanityClient(this.config());
      },
      config: function config(newConfig) {
        if (typeof newConfig === "undefined") {
          return assign({}, this.clientConfig);
        }
        if (this.observable) {
          var observableConfig = assign({}, newConfig, {
            isPromiseAPI: false
          });
          this.observable.config(observableConfig);
        }
        this.clientConfig = initConfig(newConfig, this.clientConfig || {});
        return this;
      },
      withConfig: function withConfig(newConfig) {
        return this.clone().config(newConfig);
      },
      getUrl: function getUrl(uri) {
        var canUseCdn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var base = canUseCdn ? this.clientConfig.cdnUrl : this.clientConfig.url;
        return "".concat(base, "/").concat(uri.replace(/^\//, ""));
      },
      isPromiseAPI: function isPromiseAPI() {
        return this.clientConfig.isPromiseAPI;
      },
      _requestObservable: function _requestObservable(options) {
        var uri = options.url || options.uri;
        var canUseCdn = this.clientConfig.useCdn && ["GET", "HEAD"].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/") === 0;
        var tag = options.tag && this.clientConfig.requestTagPrefix ? [this.clientConfig.requestTagPrefix, options.tag].join(".") : options.tag || this.clientConfig.requestTagPrefix;
        if (tag) {
          options.query = _objectSpread({
            tag: validate.requestTag(tag)
          }, options.query);
        }
        var reqOptions = getRequestOptions(this.clientConfig, assign({}, options, {
          url: this.getUrl(uri, canUseCdn)
        }));
        return httpRequest(reqOptions, this.clientConfig.requester);
      },
      request: function request(options) {
        var observable = this._requestObservable(options).pipe(filter(function(event) {
          return event.type === "response";
        }), map(function(event) {
          return event.body;
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      }
    });
    SanityClient.Patch = Patch;
    SanityClient.Transaction = Transaction;
    SanityClient.ClientError = httpRequest.ClientError;
    SanityClient.ServerError = httpRequest.ServerError;
    SanityClient.requester = httpRequest.defaultRequester;
    module2.exports = SanityClient;
  }
});

// src/data/shared-fragments.ts
var IMAGE_FRAGMENT = `
  asset,
  crop,
  hotspot,
  ...asset-> {
    "aspectRatio": metadata.dimensions.aspectRatio,
    "dominantColor": metadata.palette.dominant.background,
  },
`;

// src/lib/sanity-client.ts
var import_client = __toModule(require_sanityClient());
var projectId = process.env.SANITY_PROJECT;
var dataset = process.env.SANITY_DATASET;
var sanityClient = (0, import_client.default)({
  apiVersion: "v1",
  dataset,
  projectId,
  useCdn: process.env.NODE_ENV === "development"
});

// src/data/articles.data.ts
var ARTICLES_QUERY = `
  *[_type == 'article'] {
    body,
    categories,
    excerpt,
    "id": _id,
    publishedAt,
    mainImage { ${IMAGE_FRAGMENT} },
    "slug": slug.current,
    title,
    "type": _type,
  }
`;
async function getArticles() {
  const result = await sanityClient.fetch(ARTICLES_QUERY);
  return result.map((rawArticle) => ({
    ...rawArticle,
    publishedAt: new Date(rawArticle.publishedAt)
  }));
}
module.exports = getArticles;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
