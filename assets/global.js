/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/custom-carousel.js":
/*!******************************************!*\
  !*** ./js/components/custom-carousel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var _excluded = ["breakpoints"],
  _excluded2 = ["pagination", "navigation"],
  _excluded3 = ["navigation", "pagination", "progressPagination"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


class CustomCarousel extends HTMLElement {
  constructor() {
    super();
    this.carouselSettings;
    this.currentWidth;
    this.innerHTML;
    this.container;
    this.circleArrow = this.getAttribute('circleArrow') === 'true';
  }
  connectedCallback() {
    if (this.innerHTML.length > 0) {
      this.initCarousel();
    } else {
      var that = this;
      var checkHtmlLength = window.setInterval(() => {
        if (this.innerHTML.length > 0) {
          that.initCarousel();
          window.clearInterval(checkHtmlLength);
          checkHtmlLength = false;
        }
      }, 500);
      window.setTimeout(() => {
        if (checkHtmlLength) {
          window.clearInterval(checkHtmlLength);
        }
      }, 5000);
    }
  }
  getCarouselSettings() {
    this.currentWidth = window.innerWidth;
    //default settings
    var defaultSettings = {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 1000,
      navigation: false
    };
    var carouselSettings = defaultSettings;
    //end of default settings 

    //handle breakpoint
    var _this$carouselSetting = this.carouselSettings,
      {
        breakpoints
      } = _this$carouselSetting,
      otherSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$carouselSetting, _excluded);
    if (breakpoints) {
      this.breakpoints = Object.keys(breakpoints);
      this.breakpoints.forEach((breakpoint, index) => {
        if (this.currentWidth >= breakpoint) {
          if (breakpoints[breakpoint]) {
            this.breakpointSettings = breakpoints[breakpoint];
          } else {
            this.breakpointSettings = breakpoints[this.breakpoints[index - 1]];
          }
          var _this$breakpointSetti = this.breakpointSettings,
            {
              pagination,
              navigation
            } = _this$breakpointSetti,
            otherResponsiveSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$breakpointSetti, _excluded2);
          this.carouselSettings = _objectSpread(_objectSpread(_objectSpread({}, otherSettings), otherResponsiveSettings), {}, {
            pagination,
            navigation
          });
        }
      });
    }
    if (this.carouselSettings && Object.keys(this.carouselSettings).length > 0) {
      var _this$carouselSetting2 = this.carouselSettings,
        {
          navigation,
          pagination,
          progressPagination
        } = _this$carouselSetting2,
        otherSwiperSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$carouselSetting2, _excluded3);
      carouselSettings = _objectSpread({}, otherSwiperSettings);
      if (navigation) {
        var parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
        var navigationNext = parentSelector.querySelector('.swiper-navigation--next');
        var navigationPrev = parentSelector.querySelector('.swiper-navigation--prev');
        carouselSettings = _objectSpread(_objectSpread({}, carouselSettings), {}, {
          navigation: {
            nextEl: navigationNext,
            prevEl: navigationPrev
          }
        });
      }
      if (pagination) {
        var _parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
        var swiperPagination = _parentSelector.querySelector('.swiper-pagination');
        var _pagination = {
          el: swiperPagination,
          clickable: true
        };
        if (progressPagination) {
          _pagination = {
            el: swiperPagination,
            type: 'progressbar'
          };
        }
        carouselSettings = _objectSpread(_objectSpread({}, carouselSettings), {}, {
          pagination: _pagination
        });
      }
    }
    return carouselSettings;
  }
  initCarousel() {
    var _this$querySelector, _this$querySelector2, _parentSelector$query;
    this.carouselSettings = JSON.parse(((_this$querySelector = this.querySelector('[data-settings]')) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.innerHTML) || "{}");
    var parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
    this.carouselContent = (_this$querySelector2 = this.querySelector('[data-carousel-content]')) === null || _this$querySelector2 === void 0 ? void 0 : _this$querySelector2.innerHTML;
    this.placeholders = (_parentSelector$query = parentSelector.querySelector('[data-carousel-placeholder]')) === null || _parentSelector$query === void 0 ? void 0 : _parentSelector$query.innerHTML;
    this.navigations = parentSelector.querySelector('[data-swiper-navigations]');
    this.currentWidth = window.innerWidth;
    var swiperNavigationElements = this.circleArrow ? "\n        <div class=\"swiper-navigation swiper-navigation--next ".concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', "\">\n          <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle r=\"17.5\" transform=\"matrix(-1 0 0 1 18 18)\" stroke=\"blue\"></circle>\n            <path d=\"M14.5234 13.4961L9.81889 18.2006L14.5234 22.9052\" stroke=\"blue\"></path>\n            <path d=\"M10.0234 18.2031L26.1825 18.2031\" stroke=\"blue\"></path>     \n          </svg>\n        </div>\n        <div class=\"swiper-navigation swiper-navigation--prev swiper-button-disabled ").concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', "\">\n          <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"\">\n            <circle cx=\"18\" cy=\"18\" r=\"17.5\" stroke=\"blue\"></circle>\n            <path d=\"M21.4766 13.4961L26.1811 18.2006L21.4766 22.9052\" stroke=\"blue\"></path>\n            <path d=\"M25.9766 18.2031L9.81747 18.2031\" stroke=\"blue\"></path>    \n          </svg>\n        </div>\n      ") : "\n        <div class=\"swiper-navigation swiper-navigation--prev  ".concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', "\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"33\" viewBox=\"0 0 48 48\" fill=\"none\">\n            <line y1=\"-2\" x2=\"33\" y2=\"-2\" transform=\"matrix(-0.707107 0.707107 0.707107 0.707107 27.1191 3.78516)\" stroke=\"#282FEE\" stroke-width=\"4\"/>\n            <line y1=\"-2\" x2=\"33\" y2=\"-2\" transform=\"matrix(-0.707107 -0.707107 -0.707107 0.707107 24.334 47.6719)\" stroke=\"#282FEE\" stroke-width=\"4\"/>\n          </svg>\n        </div>\n        <div class=\"swiper-navigation swiper-navigation--next swiper-button-disabled ").concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', "\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"33\" viewBox=\"0 0 47 47\" fill=\"none\">\n            <line y1=\"-2\" x2=\"33\" y2=\"-2\" transform=\"matrix(0.707107 -0.707107 -0.707107 -0.707107 20.5479 43.8867)\" stroke=\"#282FEE\" stroke-width=\"4\"/>\n            <line y1=\"-2\" x2=\"33\" y2=\"-2\" transform=\"matrix(0.707107 0.707107 0.707107 -0.707107 23.333 0)\" stroke=\"#282FEE\" stroke-width=\"4\"/>\n          </svg>\n        </div>\n      ");
    this.carouselContent ? this.innerHTML = "<div class=\"carousel__container swiper hide\" data-swiper-container>\n    <div class=\"swiper-wrapper\">\n    ".concat(this.carouselContent, "\n    </div> </div>\n    <div class=\"swiper-pagination\"></div>\n    ").concat(this.carouselSettings['customNavigation'] ? '' : this.navigations.innerHTML = swiperNavigationElements, "\n    ").concat(this.placeholders ? this.placeholders : "<div class=\"carousel-placeholders\"></div>") : this.carouselSettings['customNavigation'] ? '' : this.navigations.innerHTML = swiperNavigationElements;
    this.container = this.querySelector('[data-swiper-container]');
    var carouselSettings = this.getCarouselSettings();
    console.log(carouselSettings, "carousel settings");
    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](this.container, _objectSpread({
      on: {
        beforeInit: () => {
          var {
            navigation,
            pagination
          } = carouselSettings || {};
          var parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
          if (!navigation) {
            parentSelector.querySelectorAll('.swiper-navigation').forEach(navigation => navigation.classList.add('swiper-navigation--hide'));
          } else {
            parentSelector.querySelector('.swiper-navigation--hide') && parentSelector.querySelectorAll('.swiper-navigation--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
          if (!pagination) {
            parentSelector.querySelectorAll('.swiper-pagination').forEach(navigation => navigation.classList.add('swiper-pagination--hide'));
          } else {
            parentSelector.querySelector('.swiper-pagination--hide') && parentSelector.querySelectorAll('.swiper-pagination--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
        },
        init: swiper => {
          // if (!!swiper.navigation) {
          //   swiper.navigation.destroy();
          // }
        },
        afterInit: () => {
          var _parentSelector$query2;
          parentSelector.querySelector('.carousel__container').classList.remove('hide');
          (_parentSelector$query2 = parentSelector.querySelector('.carousel-placeholders')) === null || _parentSelector$query2 === void 0 || _parentSelector$query2.classList.add('hide');
        },
        slideChange: swiper => {
          var {
            onSlideChange
          } = carouselSettings;
          window[onSlideChange] && window[onSlideChange](swiper);
        }
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination]
    }, carouselSettings));
    this.swiper.on('activeIndexChange', current => {
      var _parentSelector$query3, _parentSelector$query4;
      (_parentSelector$query3 = parentSelector.querySelector('.swiper-pagination-bullet-active')) === null || _parentSelector$query3 === void 0 || _parentSelector$query3.classList.remove('swiper-pagination-bullet-active');
      (_parentSelector$query4 = parentSelector.querySelectorAll('.swiper-pagination-bullet')[current.activeIndex]) === null || _parentSelector$query4 === void 0 || _parentSelector$query4.classList.add('swiper-pagination-bullet-active');
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCarousel);

/***/ }),

/***/ "./js/components/registerCustomElements.js":
/*!*************************************************!*\
  !*** ./js/components/registerCustomElements.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/custom-carousel */ "./js/components/custom-carousel.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  customElements.define('custom-carousel', JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./js/sections/global.js":
/*!*******************************!*\
  !*** ./js/sections/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes/plugins/object-fit/ls.object-fit */ "./node_modules/lazysizes/plugins/object-fit/ls.object-fit.js");
/* harmony import */ var lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes/plugins/rias/ls.rias */ "./node_modules/lazysizes/plugins/rias/ls.rias.js");
/* harmony import */ var lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_rias_ls_rias__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes/plugins/bgset/ls.bgset */ "./node_modules/lazysizes/plugins/bgset/ls.bgset.js");
/* harmony import */ var lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_bgset_ls_bgset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lazysizes/plugins/respimg/ls.respimg */ "./node_modules/lazysizes/plugins/respimg/ls.respimg.js");
/* harmony import */ var lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_respimg_ls_respimg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var JsComponents_registerCustomElements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! JsComponents/registerCustomElements */ "./js/components/registerCustomElements.js");
//global imports here







//lazyload image dependencies
(lazysizes__WEBPACK_IMPORTED_MODULE_0___default().cfg).loadMode = 1; //init lazyload

document.addEventListener('DOMContentLoaded', () => {
  (0,JsComponents_registerCustomElements__WEBPACK_IMPORTED_MODULE_6__["default"])();
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
/******/ 			"global": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./js/sections/global.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;