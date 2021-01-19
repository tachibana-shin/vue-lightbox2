(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-lightbox2"] = factory();
	else
		root["vue-lightbox2"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_css_loader_index_js_node_modules_sass_loader_dist_cjs_js_vue_lightbox_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_css_loader_index_js_node_modules_sass_loader_dist_cjs_js_vue_lightbox_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_css_loader_index_js_node_modules_sass_loader_dist_cjs_js_vue_lightbox_scss__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = __WEBPACK_IMPORTED_MODULE_0__node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js___default()(__WEBPACK_IMPORTED_MODULE_1__node_modules_css_loader_index_js_node_modules_sass_loader_dist_cjs_js_vue_lightbox_scss___default.a, options);



/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1__node_modules_css_loader_index_js_node_modules_sass_loader_dist_cjs_js_vue_lightbox_scss___default.a.locals || {});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let onKeyDown;
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    items: {
      type: Array
    },
    cells: {
      type: Number,
      default: 5,
      validator: val => val <= 5 && val >= 1
    },
    width: {
      type: [String, Number],
      default: "100%"
    },
    height: {
      type: [String, Number],
      default: 250
    },
    classGrid: [Object, Array, String],
    hidePopup: Boolean
  },
  data: () => ({
    index: -1,
    loading: false,
    openModal: false
  }),
  methods: {
    getStyleValue(value) {
      return typeof value == "number" ? `${value}px` : value;
    },
    showImage(index) {
      this.openModal = true;
      if (index >= this.items.length) {
        index = this.items.length % index;
      }
      if (index < 0) {
        index += this.items.length;
      }

      this.loading = true;
      this.index = index;
    },
    next() {
      this.showImage(this.index + 1);
    },
    prev() {
      this.showImage(this.index - 1);
    },
    close() {
      this.openModal = false;
      this.loading = false;
      this.index = -1;
    },
    getBackgroundStyle(src) {
      return `background-image: url("${src}")`;
    }
  },
  computed: {
    src() {
      return this.items[this.index];
    }
  },
  created() {
    window.addEventListener("keydown", onKeyDown = ({ keyCode }) => {
      if (this.index >= 0) {
        switch (keyCode) {
          case 37:
            this.prev();
            break;
          case 39:
            this.next();
            break;
          case 27:
            this.close();
            break;
        }
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener("keydown", onKeyDown);
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_lightbox_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_lightbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_lightbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_lightbox_scss__ = __webpack_require__(0);



const LightboxPlugin = {
  install(Vue) {
    Vue.component("vue-lightbox", __WEBPACK_IMPORTED_MODULE_0__vue_lightbox_vue___default.a);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  Vue.use(LightboxPlugin);
}

const VueLightbox = __WEBPACK_IMPORTED_MODULE_0__vue_lightbox_vue___default.a;
/* harmony export (immutable) */ __webpack_exports__["VueLightbox"] = VueLightbox;

/* harmony default export */ __webpack_exports__["default"] = (LightboxPlugin);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".lightbox--grid{position:relative;display:block}.lightbox--grid__item{position:absolute;top:0;left:0;background-position:50%;background-repeat:no-repeat;background-size:cover;border-top:2px solid #fff;border-right:2px solid #fff}.lightbox--grid__item:focus,.lightbox--grid__item:hover{opacity:.6}.lightbox--grid__item--more{position:absolute;top:0;left:0;right:0;bottom:0;text-align:center;color:#fff;font-size:3rem;background-color:rgba(0,0,0,.4)}.lightbox--grid__item--more:before{display:inline-block;content:\"\";vertical-align:middle;height:100%}.lightbox--grid-1 .lightbox--grid__item{width:100%;height:100%}.lightbox--grid-2 .lightbox--grid__item,.lightbox--grid-3 .lightbox--grid__item,.lightbox--grid-4 .lightbox--grid__item,.lightbox--grid-5 .lightbox--grid__item{width:50%}.lightbox--grid-2 .lightbox--grid__item,.lightbox--grid-3 .lightbox--grid__item:first-child,.lightbox--grid-4 .lightbox--grid__item:first-child{height:100%}.lightbox--grid-3 .lightbox--grid__item:nth-child(2),.lightbox--grid-3 .lightbox--grid__item:nth-child(3),.lightbox--grid-5 .lightbox--grid__item:first-child,.lightbox--grid-5 .lightbox--grid__item:nth-child(2){height:50%}.lightbox--grid-2 .lightbox--grid__item:nth-child(2),.lightbox--grid-3 .lightbox--grid__item:nth-child(2),.lightbox--grid-3 .lightbox--grid__item:nth-child(3),.lightbox--grid-4 .lightbox--grid__item:nth-child(2),.lightbox--grid-4 .lightbox--grid__item:nth-child(3),.lightbox--grid-4 .lightbox--grid__item:nth-child(4),.lightbox--grid-5 .lightbox--grid__item:nth-child(3),.lightbox--grid-5 .lightbox--grid__item:nth-child(4),.lightbox--grid-5 .lightbox--grid__item:nth-child(5),.lightbox--grid .lightbox--grid__item:last-child{left:auto;right:0;border-right:0}.lightbox--grid-3 .lightbox--grid__item:nth-child(3),.lightbox--grid-4 .lightbox--grid__item:nth-child(4),.lightbox--grid-5 .lightbox--grid__item:nth-child(2),.lightbox--grid-5 .lightbox--grid__item:nth-child(5){bottom:0;top:auto}.lightbox--grid-4 .lightbox--grid__item:nth-child(3),.lightbox--grid-5 .lightbox--grid__item:nth-child(4){top:33.3333333333%}.lightbox--grid-4 .lightbox--grid__item:nth-child(2),.lightbox--grid-4 .lightbox--grid__item:nth-child(3),.lightbox--grid-4 .lightbox--grid__item:nth-child(4),.lightbox--grid-5 .lightbox--grid__item:nth-child(3),.lightbox--grid-5 .lightbox--grid__item:nth-child(4),.lightbox--grid-5 .lightbox--grid__item:nth-child(5){height:33.3333333333%}.lightbox--animate{animation-fill-mode:both;animation-duration:.3s}.lightbox--animate__fadeIn{animation-name:fadeIn}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.lightbox--animate__fadeOut{animation-name:fadeOut}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.lightbox--modal{transition:opacity .2s ease;position:fixed;z-index:99999;top:0;left:0;bottom:0;right:0;width:100%;min-height:100%;background-color:rgba(0,0,0,.8);display:block;user-select:none}.lightbox--modal__counter{color:#fff;text-align:center;margin-top:20px}.lightbox--modal__btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;user-select:none;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:transform .15s ease;outline:none;background-color:transparent;color:#fff;border:0}.lightbox--modal__btn:hover{transform:translateY(-50%) scale(1.1)}@media(prefers-reduced-motion:reduce){.lightbox--modal__btn{transition:none}}.lightbox--modal__btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.lightbox--modal__btn-close{position:absolute;right:20px;top:20px;color:#fff}.lightbox--modal__btn-close:hover{transform:scale(1.1)}.lightbox--modal__btn-next,.lightbox--modal__btn-prev{position:absolute;top:50%;left:20px;z-index:999;cursor:pointer;color:#fff;background-color:transparent;border:none;transform:translateY(-50%);display:block}@media(max-width:772px){.lightbox--modal__btn-next,.lightbox--modal__btn-prev{left:10px}}.lightbox--modal__btn-next{left:auto;right:20px}@media(max-width:772px){.lightbox--modal__btn-next{right:10px;left:auto}}.lightbox--modal__image{position:absolute;top:10px;left:70px;right:70px;bottom:10px;text-align:center}.lightbox--modal__image:before{display:inline-block;content:\"\";vertical-align:middle;height:100%}.lightbox--modal__image img{max-width:100%;max-height:100%;vertical-align:middle;object-fit:contain}.lightbox--modal__image--spinner{width:150px;z-index:1;color:#fff;display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:spinner-border .75s linear infinite}.lightbox--modal__image--spinner--inner{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;vertical-align:middle}@keyframes spinner-border{to{transform:rotate(1turn)}}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.items.length > 0) ? _c('div', {
    staticClass: "lightbox"
  }, [_c('div', {
    staticClass: "lightbox--grid",
    class: [
      ("lightbox--grid-" + (Math.min(_vm.items.length, _vm.cells))),
      _vm.classGrid
    ],
    style: ({
      width: _vm.getStyleValue(_vm.width),
      height: _vm.getStyleValue(_vm.height)
    })
  }, _vm._l((_vm.items), function(item, index) {
    return (index < _vm.cells) ? _c('a', {
      staticClass: "lightbox--grid__item",
      style: (_vm.getBackgroundStyle(item)),
      attrs: {
        "href": item
      },
      on: {
        "click": [function($event) {
          $event.preventDefault();
          return _vm.showImage(index)
        }, function($event) {
          return _vm.$emit('click:item', item, index)
        }]
      }
    }, [(index == _vm.cells - 1 && _vm.items.length - _vm.cells > 0) ? _c('span', {
      staticClass: "lightbox--grid__item--more"
    }, [_vm._v(" " + _vm._s(_vm.items.length - _vm.cells) + " +")]) : _vm._e()]) : _vm._e()
  }), 0), _vm._v(" "), _c('transition', {
    attrs: {
      "enter-active-class": "lightbox--animate lightbox--animate__fadeIn",
      "leave-active-class": "lightbox--animate lightbox--animate__fadeOut"
    }
  }, [(_vm.openModal && !_vm.hidePopup) ? _c('div', {
    staticClass: "lightbox--modal"
  }, [_c('div', {
    staticClass: "lightbox--modal__counter"
  }, [_vm._v(" " + _vm._s(_vm.index + 1) + " / " + _vm._s(_vm.items.length) + " ")]), _vm._v(" "), _c('button', {
    staticClass: "lightbox--modal__btn lightbox--modal__btn-outline-danger lightbox--modal__btn-sm lightbox--modal__btn-close",
    on: {
      "click": function($event) {
        _vm.close;
        _vm.$emit('click:close')
      }
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 320 512",
      "width": "1em",
      "height": "1em",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "d": "M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "lightbox--modal__btn lightbox--modal__btn-outline-primary lightbox--modal__btn-prev",
    on: {
      "click": function($event) {
        _vm.prev;
        _vm.$emit('click:prev')
      }
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 192 512",
      "width": "2em",
      "height": "2em",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "d": "M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "lightbox--modal__btn lightbox--modal__btn-outline-primary lightbox--modal__btn-next",
    on: {
      "click": function($event) {
        _vm.next;
        _vm.$emit('click:next')
      }
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 192 512",
      "width": "2em",
      "height": "2em",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "d": "M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "lightbox--modal__image",
    on: {
      "click": _vm.close
    }
  }, [_c('transition', {
    attrs: {
      "enter-active-class": "lightbox--animate lightbox--animate__fadeIn",
      "leave-active-class": "lightbox--animate lightbox--animate__fadeOut",
      "mode": "out-in"
    }
  }, [_c('img', {
    key: _vm.src,
    attrs: {
      "src": _vm.src
    },
    on: {
      "load": function($event) {
        _vm.loading = false
      }
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "lightbox--modal__image--spinner--inner"
  }, [_c('span', {
    staticClass: "lightbox--modal__image--spinner"
  })])], 1)]) : _vm._e()])], 1) : _vm._e()
},staticRenderFns: []}

/***/ })
/******/ ]);
});