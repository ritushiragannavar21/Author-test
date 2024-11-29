/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/count-up.js":
/*!***********************************!*\
  !*** ./js/components/count-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var targetElements = document.querySelectorAll('.counter');
  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  targetElements.forEach(element => observer.observe(element));
  function startCounting(element) {
    var targetCount = parseInt(element.getAttribute('data-count'), 10);
    var range = {
      min: 1,
      max: targetCount
    };
    var delta = range.max - range.min;
    var increment = Math.round(range.min + Math.random() * delta);
    var randomDuration = 2000;
    var randomInterval = setInterval(() => {
      var range = {
        min: 10,
        max: targetCount
      };
      var delta = range.max - range.min;
      element.textContent = formatNumber(Math.round(range.min + Math.random() * delta));
    }, 30);
    setTimeout(() => {
      clearInterval(randomInterval);
      var currentCount = 0;
      var interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
          currentCount = targetCount;
          clearInterval(interval);
        }
        element.textContent = formatNumber(currentCount);
      }, 30);
    }, randomDuration);
  }
  function formatNumber(number) {
    return number < 10 ? "0".concat(number) : number;
  }
});

/***/ }),

/***/ "./js/components/handle-video-overlay.js":
/*!***********************************************!*\
  !*** ./js/components/handle-video-overlay.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  // Select the video player element
  var videoPlayers = document.querySelectorAll('default-player');
  // Add an event listener for the "video-play" event
  videoPlayers.forEach(videoPlayer => {
    videoPlayer.addEventListener('video-play', event => {
      var target = event.target;
      if (!target) return;
      var parent = target.closest('[data-video-parent]');
      if (!parent) return;
      var overlay = parent.querySelector('[data-overlay]');
      if (!overlay) return;
      if (!overlay.classList.contains('overlay--hidden')) {
        overlay.classList.add('overlay--hidden');
      }
    });

    // Add an event listener for the "video-pause" event
    videoPlayer.addEventListener('video-pause', event => {
      var target = event.target;
      if (!target) return;
      var parent = target.closest('[data-video-parent]');
      if (!parent) return;
      var overlay = parent.querySelector('[data-overlay]');
      if (!overlay) return;
      if (overlay.classList.contains('overlay--hidden')) {
        overlay.classList.remove('overlay--hidden');
      }
    });
  });
});

/***/ }),

/***/ "./js/sections/factuals.js":
/*!*********************************!*\
  !*** ./js/sections/factuals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_react_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/react-wrapper */ "./js/components/react-wrapper.js");
/* harmony import */ var ReactComponents_factuals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ReactComponents/factuals */ "./js/components/react/factuals.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_react_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(ReactComponents_factuals__WEBPACK_IMPORTED_MODULE_1__["default"], 'factual-data', '#factual-data');
});

/***/ }),

/***/ "./js/sections/hello.js":
/*!******************************!*\
  !*** ./js/sections/hello.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/svelte-wrapper */ "./js/components/svelte-wrapper.js");
/* harmony import */ var SvelteComponents_hello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SvelteComponents/hello */ "./js/components/svelte/hello.svelte");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(SvelteComponents_hello__WEBPACK_IMPORTED_MODULE_1__["default"], 'svelte-sample', '#product-data');
});

/***/ }),

/***/ "./js/sections/sections.js":
/*!*********************************!*\
  !*** ./js/sections/sections.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello */ "./js/sections/hello.js");
/* harmony import */ var _factuals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factuals */ "./js/sections/factuals.js");
/* harmony import */ var _variantOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variantOptions */ "./js/sections/variantOptions.js");
/* harmony import */ var _components_count_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/count-up */ "./js/components/count-up.js");
/* harmony import */ var JsComponents_handle_video_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! JsComponents/handle-video-overlay */ "./js/components/handle-video-overlay.js");





document.addEventListener('DOMContentLoaded', () => {
  (0,_hello__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_factuals__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_variantOptions__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_count_up__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,JsComponents_handle_video_overlay__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "./js/sections/variantOptions.js":
/*!***************************************!*\
  !*** ./js/sections/variantOptions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_react_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/react-wrapper */ "./js/components/react-wrapper.js");
/* harmony import */ var ReactComponents_variant_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ReactComponents/variant-selector */ "./js/components/react/variant-selector.js");


// import "StyleComponents/variant-options.scss"; 

document.addEventListener('Variant:Changed', ev => {
  var updatedVariant = ev.detail;
  if (window.updateSelectedVariant) {
    window.updateSelectedVariant(updatedVariant);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_react_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(ReactComponents_variant_selector__WEBPACK_IMPORTED_MODULE_1__["default"], 'variant-selector', '#variant-data');
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"sections": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","shared"], () => (__webpack_require__("./js/sections/sections.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;