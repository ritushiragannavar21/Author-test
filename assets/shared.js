"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["shared"],{

/***/ "./js/components/react-wrapper.js":
/*!****************************************!*\
  !*** ./js/components/react-wrapper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-6 */ "./node_modules/json-6/dist/index.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_6__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Component, container, propsEl) => {
  console.log("---------react-------");
  //component is a pre-compiled class
  //container is where you want to inject component
  //propEl pass prop when injecting
  var appContainer = document.querySelectorAll(container);
  var singlePropsEl = document.querySelector(propsEl);
  var props = {};
  if (singlePropsEl) {
    props = json_6__WEBPACK_IMPORTED_MODULE_2___default().parse(singlePropsEl === null || singlePropsEl === void 0 ? void 0 : singlePropsEl.innerHTML) || {};
  }
  return [...appContainer].map(appTarget => {
    var initialized = appTarget.dataset.initialized || false;
    if (appTarget && !initialized) {
      if (!singlePropsEl) {
        if (propsEl) {
          var _appTarget$querySelec;
          props = {};
          props = json_6__WEBPACK_IMPORTED_MODULE_2___default().parse((_appTarget$querySelec = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec === void 0 ? void 0 : _appTarget$querySelec.innerHTML) || {}; //get json from the script id 
        }
      }
      appTarget.dataset.initialized = true;
      var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appTarget);
      root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {
        shopifyData: props
      }));
      return root;
    }
  });
});

/***/ }),

/***/ "./js/components/react/ResponsiveImage.js":
/*!************************************************!*\
  !*** ./js/components/react/ResponsiveImage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    aspectratio,
    aspect_ratio_mobile,
    image,
    settings
  } = _ref;
  var min = 100;
  var max = 10000;
  var diff = max - min;
  var generated_image_id = Date.now() / diff + min;
  var displayImage = image;
  if (!displayImage) {
    displayImage = {
      width: 1920,
      height: 1080,
      id: Date.now(),
      src: 'https://cdn.shopify.com/s/files/1/0422/2255/1191/files/placeholderImage.webp?v=1692958737'
    };
  }
  var {
    imageFit
  } = settings || {};
  var {
    height: maxHeightImage,
    id: image_id,
    src: imageSrc,
    width: maxWidthImage
  } = displayImage;
  var IMAGE_WIDTHS = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2160, 2376, 2592, 2808, 3024];
  var getImageWidths = nativeWidth => {
    var imageWidths = [];
    for (var i = 0; i < IMAGE_WIDTHS.length; i++) {
      var width = IMAGE_WIDTHS[i];
      if (nativeWidth > width) {
        imageWidths.push(width);
      } else {
        imageWidths.push(nativeWidth);
        break;
      }
    }
    return imageWidths.join(',');
  };
  var imageSizes = getImageWidths(displayImage.width).split(',');
  var imageSrcSet = imageSizes.map(width => {
    return "".concat(displayImage.src, "&width=").concat(width, " ").concat(width, "w");
  }).join(",");

  // Determine the aspect ratio based on screen size
  var [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth <= 525);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleResize = () => {
      setIsMobile(window.innerWidth <= 525);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  var currentAspectRatio = isMobile ? aspect_ratio_mobile : aspectratio;
  if (currentAspectRatio <= 1) {
    maxWidthImage = parseInt(maxHeightImage) * currentAspectRatio;
  } else {
    maxHeightImage = parseInt(maxWidthImage) / currentAspectRatio;
  }
  var maxWidthImageFloat = maxWidthImage * 1.0;
  var getWrapperStyles = () => {
    return {
      '--padding-top': "".concat(maxHeightImage / maxWidthImageFloat * 100, "%"),
      '--max-height': "".concat(maxHeightImage, "px"),
      '--max-width': "".concat(maxWidthImage, "px")
    };
  };
  var getImageStyle = () => {
    return {
      objectFit: "".concat(imageFit ? imageFit : 'contain'),
      aspectRatio: "".concat(currentAspectRatio)
    };
  };
  var css = "\n  .responsive-image__wrapper:before {\n    content: '';\n    width: 100%;\n    display: block;\n    padding-top: var(--padding-top);\n  }\n  .responsive-image__wrapper {\n      height: 100%;\n      position: relative;\n      max-width: var(--max-width);\n      max-height: var(--max-height);\n  }\n  .responsive-image__image {\n      position: absolute;\n      top: 0;\n      height: 100%;\n      left: 0;\n      width: 100%;\n      object-fit: var(--objectFit);\n      aspect-ratio: var(--aspectRatio);\n      \n  }";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "ImageWrapper-".concat(image_id, "-").concat(generated_image_id),
    "data-image-id": image_id,
    className: "responsive-image__wrapper",
    style: getWrapperStyles()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "Image-".concat(image_id, "-").concat(generated_image_id),
    className: "responsive-image__image",
    src: displayImage.src,
    loading: "lazy",
    srcSet: imageSrcSet,
    "data-widths": "[".concat(imageSizes, "]"),
    "data-aspectratio": currentAspectRatio,
    "data-sizes": "auto",
    tabIndex: "-1",
    style: getImageStyle()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, css)));
});

/***/ }),

/***/ "./js/components/react/factuals.js":
/*!*****************************************!*\
  !*** ./js/components/react/factuals.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveImage */ "./js/components/react/ResponsiveImage.js");


var FactualSection = _ref => {
  var _shopifyData$data;
  var {
    shopifyData
  } = _ref;
  console.log("Shopify Data:", shopifyData);
  var blocks = ((_shopifyData$data = shopifyData.data) === null || _shopifyData$data === void 0 ? void 0 : _shopifyData$data.blocks) || [];
  var blockCount = blocks.length;
  var imageArray = blocks.flatMap((block, index) => {
    var _block$cards;
    return (_block$cards = block.cards) === null || _block$cards === void 0 ? void 0 : _block$cards.map(card => card);
  });
  var [selectedBlock, setselectedBlock] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [isFirstImageOpen, setIsFirstImageOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [isSecondImageOpen, setIsSecondImageOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var srcTokens = {
    replacementToken: "?width=90&height=90",
    dataSrcToken: "?width=width&height=height",
    srcToken: "?width=90&height=90"
  };
  var handleCardClick = cardIndex => {
    setIsFirstImageOpen(true);
    setselectedBlock(imageArray[cardIndex]);
  };
  var handleCloseImage = () => {
    setIsFirstImageOpen(false);
    setselectedBlock(false);
  };
  var handleNextImage = () => {
    setIsSecondImageOpen(true);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log("data---", selectedBlock);
  }, [selectedBlock]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container factual_container"
  }, blockCount > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "factual__section",
    style: {
      background: "".concat(shopifyData.data.background_color),
      display: "grid",
      gridTemplateColumns: "repeat(".concat(Math.min(blockCount, 2), ", 1fr)")
    }
  }, blocks.map((block, index) => {
    var _block$image, _selectedBlock$imageS, _selectedBlock$imageS2, _selectedBlock$imageM, _selectedBlock$imageS3;
    var image = (_block$image = block.image) === null || _block$image === void 0 ? void 0 : _block$image[0];
    var src = image === null || image === void 0 ? void 0 : image.src;
    var width = (image === null || image === void 0 ? void 0 : image.width) || 1920;
    var height = (image === null || image === void 0 ? void 0 : image.height) || 1080;
    var isFirstBlock = index === 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "factual__item ".concat(isFirstBlock ? "factual__item--flex" : "", " ").concat(shopifyData.data.swipeMedia === "true" ? "factual__swap-block-mobile" : ""),
      style: {
        position: "relative"
      }
    }, isFirstBlock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, block.url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-image__button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "button button__custom-button text__cta",
      href: block.url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "btn-text button__btn-text"
    }, " ", block.button, " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__popup-image-desktop"
    }, selectedBlock && (selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.imageSrc[0]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__top-image",
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      aspectratio: 0.9,
      aspect_ratio_mobile: 0.59,
      image: {
        src: selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$imageS = selectedBlock.imageSrc[0]) === null || _selectedBlock$imageS === void 0 ? void 0 : _selectedBlock$imageS.src,
        width,
        height
      },
      srcTokens: srcTokens
    }), selectedBlock && !isSecondImageOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "close-icon",
      style: {
        position: 'absolute',
        top: '10px',
        right: '0',
        cursor: 'pointer',
        zIndex: 15
      },
      onClick: handleCloseImage
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      width: "71",
      height: "70",
      viewBox: "0 0 71 70",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
      cx: "35.5",
      cy: "35",
      r: "17.5",
      fill: selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.color
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      x1: "27.8399",
      y1: "26.6601",
      x2: "41.9821",
      y2: "40.8022",
      stroke: "#FEFDF6",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      x1: "41.9805",
      y1: "27.3321",
      x2: "27.8384",
      y2: "41.4742",
      stroke: "#FEFDF6",
      "stroke-width": "2"
    }))), (selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$imageS2 = selectedBlock.imageSrc[1]) === null || _selectedBlock$imageS2 === void 0 ? void 0 : _selectedBlock$imageS2.src) && !isSecondImageOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__next-icon",
      style: {
        position: 'absolute',
        top: '50%',
        right: '17px',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 15
      },
      onClick: handleNextImage
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      width: "35",
      height: "36",
      viewBox: "0 0 35 36",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
      cx: "17.5",
      cy: "18",
      r: "17",
      fill: selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.color,
      stroke: selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.color
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M13.7908 27.9548L24.3868 18.1175L13.7908 8.28074",
      stroke: "#FEFDF6",
      "stroke-width": "2"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__popup-image-mobile"
    }, selectedBlock && (selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.imageMobile[0]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__top-image",
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      aspectratio: 0.9,
      aspect_ratio_mobile: 0.582,
      image: {
        src: selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$imageM = selectedBlock.imageMobile[0]) === null || _selectedBlock$imageM === void 0 ? void 0 : _selectedBlock$imageM.src,
        width,
        height
      },
      srcTokens: srcTokens
    }), selectedBlock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "close-icon",
      style: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        zIndex: 15
      },
      onClick: handleCloseImage
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      width: "71",
      height: "70",
      viewBox: "0 0 71 70",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
      cx: "35.5",
      cy: "35",
      r: "17.5",
      fill: selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.color
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      x1: "27.8399",
      y1: "26.6601",
      x2: "41.9821",
      y2: "40.8022",
      stroke: "#FEFDF6",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      x1: "41.9805",
      y1: "27.3321",
      x2: "27.8384",
      y2: "41.4742",
      stroke: "#FEFDF6",
      "stroke-width": "2"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__sub-container ".concat(isFirstImageOpen ? "factual__first-image-container" : "")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "factual__title"
    }, block.title || "Default Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "factual__description",
      dangerouslySetInnerHTML: {
        __html: block.description
      }
    }), block.cards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__cards"
    }, block.cards.map((card, cardIndex) => {
      var text = card.text;
      if (text) {
        var myStyle = {
          background: "\n                                  linear-gradient(to right bottom, transparent 41%, #fff 0) no-repeat 0 0 / 1.5em 1.5em, \n                                  linear-gradient(135deg, transparent 0.41em, ".concat(card.color, " 0)")
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: cardIndex,
          style: myStyle,
          className: "factual__card-item",
          onClick: () => handleCardClick(cardIndex)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "factual__card-cut-icon"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
          width: "32",
          height: "33",
          viewBox: "0 0 32 33",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
          d: "M31 32H3L17 17.5L31 3V32Z",
          fill: "white",
          stroke: "#282FEE",
          strokeWidth: "1.5"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "factual__card-icon"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
          width: "25",
          height: "25",
          viewBox: "0 0 25 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
          cx: "12.5",
          cy: "12.5",
          r: "12",
          fill: "#FEFDF6",
          stroke: "#FEFDF6"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
          d: "M12.9507 9.18C12.6241 9.18 12.3954 9.11467 12.2647 8.984C12.1341 8.844 12.0687 8.67133 12.0687 8.466V8.242C12.0687 8.03667 12.1341 7.86867 12.2647 7.738C12.3954 7.598 12.6241 7.528 12.9507 7.528C13.2774 7.528 13.5061 7.598 13.6367 7.738C13.7674 7.86867 13.8327 8.03667 13.8327 8.242V8.466C13.8327 8.67133 13.7674 8.844 13.6367 8.984C13.5061 9.11467 13.2774 9.18 12.9507 9.18ZM9.78673 17.048H12.3907V11.728H9.78673V10.776H13.5107V17.048H15.9467V18H9.78673V17.048Z",
          fill: "#282FEE"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "factual__card-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "factual__card-title",
          dangerouslySetInnerHTML: {
            __html: card.card_title
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
          className: "factual__code"
        }, card.text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("sup", null, card.sup))));
      }
      return null;
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__right factual__right-".concat(blockCount)
    }, isSecondImageOpen && !isFirstBlock ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__right-image",
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      aspectratio: 0.9,
      aspect_ratio_mobile: 0.59,
      image: {
        src: selectedBlock === null || selectedBlock === void 0 || (_selectedBlock$imageS3 = selectedBlock.imageSrc[1]) === null || _selectedBlock$imageS3 === void 0 ? void 0 : _selectedBlock$imageS3.src,
        width,
        height
      },
      srcTokens: srcTokens
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "close-icon",
      style: {
        position: 'absolute',
        top: '50%',
        right: '17px',
        cursor: 'pointer',
        zIndex: 15
      },
      onClick: () => setIsSecondImageOpen(false)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      width: "35",
      height: "36",
      viewBox: "0 0 35 36",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
      cx: "17.5",
      cy: "17.5",
      r: "17",
      transform: "matrix(-1 0 0 1 35 0.5)",
      fill: selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.color,
      stroke: selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.color
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M21.2092 27.9548L10.6132 18.1175L21.2092 8.28074",
      stroke: "#FEFDF6",
      "stroke-width": "2"
    })))) : src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: " ".concat(block.hideImage === "true" ? "factual__hide-image" : "", " ")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      aspectratio: 0.9,
      aspect_ratio_mobile: 0.9,
      image: {
        src,
        width,
        height
      },
      srcTokens: srcTokens
    }))));
  })) : '');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FactualSection);

/***/ }),

/***/ "./js/components/react/frequency-options.js":
/*!**************************************************!*\
  !*** ./js/components/react/frequency-options.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip */ "./js/components/react/tooltip.js");


// import 'StyleComponents/variant-options.scss';

var FrequencyOptions = _ref => {
  var {
    sellingplan,
    selectedSellingPlan,
    onUpdate,
    subscriptionPlan
  } = _ref;
  var [showFrequencyOption, setShowFrequencyOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [showTooltip, setShowTooltip] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var extractFrequency = frequency => {
    if (frequency != selectedSellingPlan.frequency) {
      var [deliveryText] = frequency.split(',');
      if (!deliveryText) return;
      // deliveryText = (deliveryText?.toLowerCase()).split("delivery every")[1];
      return deliveryText;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "frequency-container__freq-label variant-container__opt-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "frequency-container__freq-options variant-container__var-options"
  }, "Ships every ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "dropdown_content",
    onClick: () => setShowFrequencyOption(!showFrequencyOption)
  }, selectedSellingPlan.frequency, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: showFrequencyOption ? 'dropdownOpen' : 'dropdownClose'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "7",
    viewBox: "0 0 10 7",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "0.707107",
    y1: "1.29289",
    x2: "5.70711",
    y2: "6.29289",
    stroke: "#282FEE",
    "stroke-width": "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "4.29289",
    y1: "6.29289",
    x2: "9.29289",
    y2: "1.29289",
    stroke: "#282FEE",
    "stroke-width": "2"
  }))), showFrequencyOption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "frequency_options"
  }, sellingplan.length && sellingplan.map((sellplan, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "frequency-container__freq-wrapper ".concat(selectedSellingPlan.id === sellplan.id ? 'active' : ''),
    onClick: () => {
      onUpdate(sellplan);
      setShowFrequencyOption(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "frequency-container__freq-name variant-container__var-name"
  }, extractFrequency(sellplan.frequency)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tooltip_container",
    onClick: () => setShowTooltip(!showTooltip)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z",
    fill: "#E8FF5C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5ZM8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z",
    fill: "#282FEE"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M7.77042 10.42V8.53601C8.45842 8.50401 8.99842 8.35601 9.39042 8.09201C9.78242 7.82001 9.97842 7.41201 9.97842 6.86801V6.70001C9.97842 6.25201 9.84242 5.91601 9.57042 5.69201C9.30642 5.46801 8.94242 5.35601 8.47842 5.35601C7.99842 5.35601 7.61442 5.48801 7.32642 5.75201C7.03842 6.01601 6.83842 6.35201 6.72642 6.76001L5.82642 6.42401C5.90642 6.16001 6.01842 5.91201 6.16242 5.68001C6.30642 5.44001 6.48642 5.23201 6.70242 5.05601C6.92642 4.88001 7.18642 4.74001 7.48242 4.63601C7.78642 4.53201 8.13042 4.48001 8.51442 4.48001C8.89842 4.48001 9.24242 4.53601 9.54642 4.64801C9.85842 4.75201 10.1224 4.90401 10.3384 5.10401C10.5544 5.29601 10.7224 5.53201 10.8424 5.81201C10.9624 6.09201 11.0224 6.40401 11.0224 6.74801C11.0224 7.12401 10.9544 7.45601 10.8184 7.74401C10.6824 8.02401 10.5064 8.26401 10.2904 8.46401C10.0744 8.66401 9.82642 8.82801 9.54642 8.95601C9.27442 9.07601 8.99842 9.16001 8.71842 9.20801V10.42H7.77042ZM8.28642 13.108C7.95842 13.108 7.72642 13.04 7.59042 12.904C7.46242 12.768 7.39842 12.596 7.39842 12.388V12.172C7.39842 11.964 7.46242 11.792 7.59042 11.656C7.72642 11.52 7.95842 11.452 8.28642 11.452C8.61442 11.452 8.84242 11.52 8.97042 11.656C9.10642 11.792 9.17442 11.964 9.17442 12.172V12.388C9.17442 12.596 9.10642 12.768 8.97042 12.904C8.84242 13.04 8.61442 13.108 8.28642 13.108Z",
    fill: "#282FEE"
  })), showTooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setShowTooltip: showTooltip,
    subscriptionPlan: subscriptionPlan
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrequencyOptions);

/***/ }),

/***/ "./js/components/react/onetime-options.js":
/*!************************************************!*\
  !*** ./js/components/react/onetime-options.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var OnetimeOptions = _ref => {
  var {
    selectedVariant,
    onUpdate,
    purchaseType
  } = _ref;
  console.log('selectedVariant..', selectedVariant);
  var {
    price,
    compareAtPrice,
    OriginalCompareAtPrice
  } = selectedVariant;
  // Remove dollar signs and parse the values to floats
  var numPriceWithoutCurrency = parseFloat(price.replace('$', '')) || 0;
  var compareAtPriceWithoutCurrency = parseFloat(compareAtPrice.replace('$', '')) || 0;
  var OriginalComparePrice = parseFloat(OriginalCompareAtPrice.replace('$', '')) || 0;
  var showDiscountedPrice = compareAtPriceWithoutCurrency > numPriceWithoutCurrency;
  var finalCompareAtPrice = compareAtPrice;
  if (!showDiscountedPrice) {
    finalCompareAtPrice = OriginalCompareAtPrice;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "onetime-container__onetime-wrapper variant-container__var-wrapper ".concat(purchaseType === 'onetime' ? 'active' : ''),
    onClick: () => {
      onUpdate("onetime");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "onetime-container__onetime-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "8",
    viewBox: "0 0 10 8",
    fill: "none",
    className: "".concat(purchaseType == 'onetime' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "4.61589",
    y1: "6.67991",
    x2: "9.61589",
    y2: "0.679908",
    stroke: "white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "4.64645",
    y1: "7.35355",
    x2: "1.11091",
    y2: "3.81802",
    stroke: "white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "One-time Purchase")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "onetime-container__oneTime-Price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sub-compare-at-price"
  }, finalCompareAtPrice), "\xA0", price)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnetimeOptions);

/***/ }),

/***/ "./js/components/react/slider.js":
/*!***************************************!*\
  !*** ./js/components/react/slider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResponsiveImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponsiveImage */ "./js/components/react/ResponsiveImage.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");



var slider = _ref => {
  var _shopifyData$data;
  var {
    shopifyData
  } = _ref;
  var slides = (_shopifyData$data = shopifyData.data) === null || _shopifyData$data === void 0 ? void 0 : _shopifyData$data.blocks;
  var blockSize = slides.length;
  var [currentSlideIndex, setCurrentSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  var [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(slides[0]);
  var width = 1920;
  var height = 1080;
  console.log(shopifyData);
  var settings = {
    imageFit: 'cover'
  };
  var renderNavigationBar = () => {
    var bars = [];
    for (var i = 0; i < blockSize; i++) {
      bars.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: currentSlideIndex == i ? 'bar active' : 'bar'
      }));
    }
    return bars;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCurrentSlide(slides[currentSlideIndex]);
  }, [currentSlideIndex]);
  var slideVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  };
  if (currentSlide) {
    var _currentSlide$slide_i, _currentSlide$bundle_;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "h1 slideshow__head mb-1 mobile-only"
    }, currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.slide_header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "slideshow bannerSlider"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
      className: "slideshow__banner-image",
      key: currentSlideIndex,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: slideVariants,
      transition: {
        duration: 0.9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      aspectratio: 1.8,
      aspect_ratio_mobile: 1.4,
      image: {
        src: currentSlide === null || currentSlide === void 0 || (_currentSlide$slide_i = currentSlide.slide_image[0]) === null || _currentSlide$slide_i === void 0 ? void 0 : _currentSlide$slide_i.src,
        width,
        height
      },
      settings: settings
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "slideshow__card-content slideshow__slideBody d-flex d-flex-dir-c justify-content-space-btw desktop-only",
      role: "region",
      "aria-label": "Slide Text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "h1 slideshow__head mb-1"
    }, currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.slide_header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "slide_index"
    }, currentSlideIndex + 1), currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.subheading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "slideshow__subtext"
    }, currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.slide_sub_text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "slideshow__navigation"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      style: {
        opacity: currentSlideIndex === 0 ? 0.5 : 1,
        pointerEvents: currentSlideIndex === 0 ? 'none' : 'auto'
      },
      width: "36",
      height: "36",
      viewBox: "0 0 36 36",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: () => currentSlideIndex > 0 && setCurrentSlideIndex(currentSlideIndex - 1)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
      r: "17.5",
      transform: "matrix(-1 0 0 1 18 18)",
      stroke: "rgba(var(--color-controls)/1)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M14.5234 13.4961L9.81889 18.2006L14.5234 22.9052",
      stroke: "rgba(var(--color-controls)/1)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M10.0234 18.2031L26.1825 18.2031",
      stroke: "rgba(var(--color-controls)/1)"
    })), renderNavigationBar(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      style: {
        opacity: currentSlideIndex == blockSize - 1 ? 0.5 : 1,
        pointerEvents: currentSlideIndex == blockSize ? 'none' : 'auto'
      },
      width: "36",
      height: "36",
      viewBox: "0 0 36 36",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: () => currentSlideIndex < blockSize - 1 && setCurrentSlideIndex(currentSlideIndex + 1)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
      cx: "18",
      cy: "18",
      r: "17.5",
      stroke: "rgba(var(--color-controls)/1)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M21.4766 13.4961L26.1811 18.2006L21.4766 22.9052",
      stroke: "rgba(var(--color-controls)/1)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M25.9766 18.2031L9.81747 18.2031",
      stroke: "rgba(var(--color-controls)/1)"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "btn--wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "btn btn--fill slideshow__shop-btn",
      href: currentSlide.slide_product_url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "slideshow__shop-btn-text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Shop the ", currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.slide_product_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, currentSlide === null || currentSlide === void 0 || (_currentSlide$bundle_ = currentSlide.bundle_products) === null || _currentSlide$bundle_ === void 0 ? void 0 : _currentSlide$bundle_.join(', ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.slide_product_price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "slideshow__shop-btn--hover-text"
    }, "SHOP NOW")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "slideshow__slideBody slideshow__slideBody--mobile mobile-only"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "slide_index"
    }, currentSlideIndex + 1), currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.subheading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "navigations mobile-only"
    }, currentSlideIndex != 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: "slide-prev--mobile",
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      onClick: () => currentSlideIndex > 0 && setCurrentSlideIndex(currentSlideIndex - 1)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)",
      stroke: "#282FEE",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)",
      stroke: "#282FEE",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)",
      stroke: "#282FEE",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)",
      stroke: "#282FEE",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)",
      stroke: "#282FEE",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)",
      stroke: "#282FEE",
      "stroke-width": "2"
    })), currentSlideIndex < blockSize - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      onClick: () => currentSlideIndex < blockSize - 1 && setCurrentSlideIndex(currentSlideIndex + 1)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)",
      stroke: "#282FEE",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)",
      stroke: "#282FEE",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)",
      stroke: "#282FEE",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)",
      stroke: "#282FEE",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)",
      stroke: "#282FEE",
      "stroke-width": "2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      y1: "-1",
      x2: "16.9706",
      y2: "-1",
      transform: "matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)",
      stroke: "#282FEE",
      "stroke-width": "2"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "slideshow__subtext"
    }, currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.slide_sub_text)));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/components/react/subscription-options.js":
/*!*****************************************************!*\
  !*** ./js/components/react/subscription-options.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frequency_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frequency-options */ "./js/components/react/frequency-options.js");

// import "StyleComponents/subscription-sec.scss";

var SubscriptionOptions = _ref => {
  var {
    updateSellingPlan,
    sellingplan,
    selectedVariant,
    selectedSellingPlan,
    onUpdate,
    purchaseType,
    subscription_plan
  } = _ref;
  var {
    price,
    priceWithoutCurrency
  } = selectedVariant;
  var {
    priceAdjustments,
    discount
  } = selectedSellingPlan;
  var [subscriptionBenefits, setSubscriptionBenefits] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var discountNum = parseFloat(discount);
  var numPriceWithoutCurrency = parseFloat(price.replace('$', '').replace(',', '')) || 0;
  var numPrice = parseFloat(price.replace('$', '')) || 0;
  var calculateDiscountedPrice = function calculateDiscountedPrice() {
    var offerType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (offerType == 'percentage') {
      var discountedPrice = numPriceWithoutCurrency * (1 - discountNum / 100);
      return discountedPrice.toFixed(2);
    } else if (offerType == 'fixed_amount') {
      var fixedAmt = numPriceWithoutCurrency - flatRate;
      return fixedAmt.toFixed(2);
    } else if (offerType == 'price') {
      return flatRate.toFixed(2);
    }
  };
  var calculateOffer = offerType => {
    if (offerType === "percentage") {
      return "".concat(discountNum, "%");
    } else if (offerType === "fixed_amount") {
      var newFixedAmountValue = discountNum / 100;
      return "$".concat(newFixedAmountValue.toFixed(2));
    } else if (offerType === "price") {
      var newValue = numPriceWithoutCurrency - discountNum / 100;
      return "$".concat(newValue.toFixed(2));
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    subscription_plan.map(plan => {
      if (selectedSellingPlan.frequency === plan.frequency) {
        setSubscriptionBenefits(plan.benefits);
      }
    });
  }, [selectedSellingPlan]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscriptionOpt-container__subscription-wrapper variant-container__var-wrapper ".concat(purchaseType != 'onetime' ? 'active' : ''),
    onClick: () => {
      onUpdate("subscription");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscriptionOpt-container__subscription-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "8",
    viewBox: "0 0 10 8",
    fill: "none",
    className: "".concat(purchaseType != 'onetime' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "4.61589",
    y1: "6.67991",
    x2: "9.61589",
    y2: "0.679908",
    stroke: "white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "4.64645",
    y1: "7.35355",
    x2: "1.11091",
    y2: "3.81802",
    stroke: "white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Subscribe ", discount > 0 && "& Save", " ", discount > 0 && calculateOffer(priceAdjustments), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subscriptionOpt-container__subscription-Price"
  }, calculateDiscountedPrice(priceAdjustments) < numPrice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sub-compare-at-price"
  }, "$", numPrice), " $", calculateDiscountedPrice(priceAdjustments)), purchaseType != "onetime" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_frequency_options__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sellingplan: sellingplan,
    selectedSellingPlan: selectedSellingPlan,
    onUpdate: updateSellingPlan,
    subscriptionPlan: subscription_plan
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription_benefits"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Subscription Benefits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, subscriptionBenefits.map((benefit, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: index
  }, benefit)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriptionOptions);

/***/ }),

/***/ "./js/components/react/tooltip.js":
/*!****************************************!*\
  !*** ./js/components/react/tooltip.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Tooltip = _ref => {
  var {
    setShowTooltip,
    subscriptionPlan
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tooltip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tooltip__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "tooltip__title"
  }, "Frequency Recommendation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tooltip__closeButton",
    onClick: () => setShowTooltip(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "0.353553",
    y1: "0.388634",
    x2: "14.4957",
    y2: "14.5308",
    stroke: "#282FEE"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "14.4942",
    y1: "0.353553",
    x2: "0.352042",
    y2: "14.4957",
    stroke: "#282FEE"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "tooltip__subtitle"
  }, "We recommend the following replenishment cycle:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tooltip__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tooltip__content--left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "usage_title"
  }, "Usage:"), subscriptionPlan.map(plan => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "usage_content"
  }, plan.usage))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tooltip__content--right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "frequency_title"
  }, "Frequency:"), subscriptionPlan.map(plan => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "frequency_content"
  }, plan.frequency)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);

/***/ }),

/***/ "./js/components/react/variant-selector.js":
/*!*************************************************!*\
  !*** ./js/components/react/variant-selector.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _onetime_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onetime-options */ "./js/components/react/onetime-options.js");
/* harmony import */ var _subscription_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription-options */ "./js/components/react/subscription-options.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



// import 'StyleComponents/variant-options.scss';
// import 'StyleComponents/subscription-sec.scss';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
  var [purchaseType, setPurchaseType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('onetime');
  var {
    variants,
    sellingplan,
    options,
    selected,
    subscription_plan
  } = shopifyData.data;
  var [selectedVariant, setSelectedVariant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(variants.find(variant => variant.id == selected));
  var [selectedSellingPlan, setselectedSellingPlan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sellingplan[0] || {});
  var updateSelectedVariant = variantObj => {
    var {
      id
    } = variantObj;
    var selectedVariant = variants.find(variant => variant.id == id);
    setSelectedVariant(selectedVariant);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var {
      priceWithoutCurrency
    } = selectedVariant;
    var price = priceWithoutCurrency === null || priceWithoutCurrency === void 0 ? void 0 : priceWithoutCurrency.trim();
    if (purchaseType != "onetime") {
      if (selectedSellingPlan) {
        var {
          priceAdjustments,
          discount
        } = selectedSellingPlan;
        var discountNum = parseInt(discount);
        var numPriceWithoutCurrency = parseFloat(priceWithoutCurrency) || 0;
        var calculateDiscountedPrice = function calculateDiscountedPrice() {
          var offerType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          if (offerType == 'percentage') {
            var discountedPrice = numPriceWithoutCurrency * (1 - discountNum / 100);
            return discountedPrice.toFixed(2);
          } else if (offerType == 'fixed_amount') {
            var fixedAmt = numPriceWithoutCurrency - flatRate;
            return fixedAmt.toFixed(2);
          } else if (offerType == 'price') {
            return flatRate.toFixed(2);
          }
        };
        price = calculateDiscountedPrice(priceAdjustments);
      }
    }
    document.querySelectorAll('[data-segmented-price]').forEach(priceInput => priceInput.value = price);
  }, [selectedVariant, purchaseType]);
  window.updateSelectedVariant = updateSelectedVariant;
  var handleSwitch = purchaseType => {
    setPurchaseType(purchaseType);
  };
  var handleVariantChange = obj => {
    setSelectedVariant(_objectSpread({}, obj));
  };
  var updateSellingPlan = sellingPlanObj => {
    setselectedSellingPlan(_objectSpread({}, sellingPlanObj));
  };
  var updateInputValues = (inputs, value) => {
    inputs.forEach(input => {
      if (input.closest('[data-product-form]')) {
        input.value = value;
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    //since product-form custom element code is compiled and is not set to initialise on connected callback
    //we are simply updating the input values in the existing product form
    var variantInputs = document.querySelectorAll('input[name="id"]');
    var sellingPlanInputs = document.querySelectorAll('input[name="selling_plan"]');
    var sellingFrequencyInput = document.querySelectorAll('[data-selling-frequency]');
    updateInputValues(variantInputs, selectedVariant.id);
    if (purchaseType == "subscription") {
      updateInputValues(sellingPlanInputs, selectedSellingPlan.id);
      updateInputValues(sellingFrequencyInput, selectedSellingPlan.frequency);
    } else {
      updateInputValues(sellingPlanInputs, '');
      updateInputValues(sellingFrequencyInput, '');
    }
    var priceContainer = document.querySelector('.product-price__current-price');
    if (priceContainer) {
      priceContainer.innerHTML = selectedVariant.price;
    }
  }, [selectedVariant, purchaseType, selectedSellingPlan]);
  var productOriginalPrice = parseFloat(selectedVariant.price.replace('$', '').replace(',', ''));
  var numProductCompareAtPrice = parseFloat(selectedVariant.compareAtPrice.replace('$', '').replace(',', ''));
  var productComparePrice;
  if (numProductCompareAtPrice > productOriginalPrice) {
    productComparePrice = selectedVariant.compareAtPrice;
  }
  if (!productComparePrice) {
    productComparePrice = selectedVariant.OriginalCompareAtPrice;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, sellingplan.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "variant-container__purchaseType-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_onetime_options__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedVariant: selectedVariant,
    purchaseType: purchaseType,
    onUpdate: handleSwitch
  }), Object.keys(selectedSellingPlan).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_subscription_options__WEBPACK_IMPORTED_MODULE_3__["default"], {
    updateSellingPlan: updateSellingPlan,
    sellingplan: sellingplan,
    selectedVariant: selectedVariant,
    purchaseType: purchaseType,
    selectedSellingPlan: selectedSellingPlan,
    onUpdate: handleSwitch,
    subscription_plan: subscription_plan
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("s", null, " ", productComparePrice), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: productComparePrice ? "product-sale-color" : ""
  }, " ", selectedVariant.price, " "), " ", productComparePrice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "product-sale-color"
  })));
});

/***/ }),

/***/ "./js/components/svelte-wrapper.js":
/*!*****************************************!*\
  !*** ./js/components/svelte-wrapper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-6 */ "./node_modules/json-6/dist/index.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_6__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Component, container, propsEl) => {
  console.log("---------svelte-------");
  //component is a pre-compiled class
  //container is where you want to inject component
  //propEl pass prop when injecting
  var appContainer = document.querySelectorAll(container);
  return [...appContainer].map(appTarget => {
    var initialized = appTarget.dataset.initialized || false;
    var props = {};
    if (appTarget && !initialized) {
      var _props;
      if (propsEl) {
        var _appTarget$querySelec;
        props = json_6__WEBPACK_IMPORTED_MODULE_0___default().parse((_appTarget$querySelec = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec === void 0 ? void 0 : _appTarget$querySelec.innerHTML) || {}; //get json from the script id 
      }
      //inject component into container
      var instance = new Component({
        target: appTarget,
        props: {
          shopifyData: (_props = props) === null || _props === void 0 ? void 0 : _props.data //pass the prop on data prop as default
        }
      });
      appTarget.dataset.initialized = true;
      return instance;
    }
  });
});

/***/ }),

/***/ "./js/components/svelte/hello.svelte":
/*!*******************************************!*\
  !*** ./js/components/svelte/hello.svelte ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* js/components/svelte/hello.svelte generated by Svelte v4.2.19 */




function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div.textContent = "hiiii";
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "tab-section");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

function instance($$self) {
	console.log("----------");
	return [];
}

class Hello extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Hello, {}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hello);

/***/ })

}]);