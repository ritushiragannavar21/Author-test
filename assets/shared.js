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
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    image_aspect_ratio_desktop,
    image_aspect_ratio_mobile,
    image,
    srcTokens
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

  // Set aspect ratio based on screen size
  var [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust this breakpoint as needed
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on mount to set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  var aspectRatio = isMobile ? image_aspect_ratio_mobile : image_aspect_ratio_desktop;
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
  var imageWidth = getImageWidths(displayImage.width);
  var urlTokens = srcTokens;
  var uriEncodedSrc = "".concat(encodeURI(imageSrc), "?width=300&height=300");
  var dataSrcUrl = uriEncodedSrc.replace(urlTokens.replacementToken, urlTokens.dataSrcToken);
  var srcUrl = uriEncodedSrc.replace(urlTokens.replacementToken, urlTokens.srcToken);
  if (aspectRatio <= 1) {
    maxWidthImage = parseInt(maxHeightImage) * aspectRatio;
  } else {
    maxHeightImage = parseInt(maxWidthImage) / aspectRatio;
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
      maxWidth: "".concat(maxWidthImage, "px"),
      maxHeight: "".concat(maxHeightImage, "px"),
      objectFit: 'contain'
    };
  };
  var css = "\n  .responsive-image__wrapper:before {\n    content: '';\n    width: 100%;\n    display: block;\n    padding-top: var(--padding-top);\n  }\n\n  .responsive-image__wrapper {\n      height: 100%;\n      position: relative;\n      max-width: var(--max-width);\n      max-height: var(--max-height);\n  }\n\n  .responsive-image__image {\n      position: absolute;\n      top: 0;\n      height: 100%;\n      left: 0;\n      width: 100%;\n  }";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "ImageWrapper-".concat(image_id, "-").concat(generated_image_id),
    "data-image-id": image_id,
    className: "responsive-image__wrapper",
    style: getWrapperStyles()
  }, imageSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "Image-".concat(image_id, "-").concat(generated_image_id),
    className: "responsive-image__image lazyload",
    src: srcUrl,
    srcSet: uriEncodedSrc,
    "data-src": dataSrcUrl,
    "data-widths": "[".concat(imageWidth, "]"),
    "data-aspectratio": aspectRatio,
    "data-sizes": "auto",
    tabIndex: "-1",
    style: getImageStyle()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, css));
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
  var [isSecondImageOpen, setIsSecondImageOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var srcTokens = {
    replacementToken: "?width=90&height=90",
    dataSrcToken: "?width=width&height=height",
    srcToken: "?width=90&height=90"
  };
  var handleCardClick = cardIndex => {
    setselectedBlock(imageArray[cardIndex]);
  };
  var handleCloseImage = () => {
    setselectedBlock(false);
  };
  var handleNextImage = () => {
    // const secondImageSrc = selectedBlock.imageSrc[1];
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
      className: "factual__item ".concat(isFirstBlock ? "factual__item--flex" : ""),
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
      image_aspect_ratio_desktop: 0.9,
      image_aspect_ratio_mobile: 0.59,
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
      image_aspect_ratio_mobile: 0.582,
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
      className: "factual__sub-container"
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
      var myStyle = {
        background: "\n                                linear-gradient(to right bottom, transparent 50%, #fff 0) no-repeat 0 0 / 2em 2em,\n                                linear-gradient(135deg, transparent 1.41em, ".concat(card.color, " 0)")
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: cardIndex,
        style: myStyle,
        className: "factual__card-item",
        onClick: () => handleCardClick(cardIndex)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
        className: "factual__code",
        dangerouslySetInnerHTML: {
          __html: card.text
        }
      })));
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__right"
    }, isSecondImageOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__right-image",
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      image_aspect_ratio_desktop: 0.9,
      image_aspect_ratio_mobile: 0.59,
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
    })))) : src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      image_aspect_ratio_desktop: 0.9,
      image_aspect_ratio_mobile: 0.9,
      image: {
        src,
        width,
        height
      },
      srcTokens: srcTokens
    })));
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

// import 'StyleComponents/variant-options.scss';

var FrequencyOptions = _ref => {
  var {
    sellingplan,
    selectedSellingPlan,
    onUpdate
  } = _ref;
  console.log('frequency...', sellingplan);
  var extractFrequency = frequency => {
    var [deliveryText] = frequency.split(',');
    if (!deliveryText) return;
    // deliveryText = (deliveryText?.toLowerCase()).split("delivery every")[1];

    return deliveryText;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "frequency-container__freq-label variant-container__opt-label"
  }, "Delivery every"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "frequency-container__freq-options variant-container__var-options"
  }, sellingplan.length && sellingplan.map((sellplan, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "frequency-container__freq-wrapper variant-container__var-wrapper ".concat(selectedSellingPlan.id === sellplan.id ? 'active' : ''),
    onClick: () => onUpdate(sellplan)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "frequency-container__freq-name variant-container__var-name"
  }, extractFrequency(sellplan.frequency))))));
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
  }, "One-time Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "onetime-container__oneTime-Price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sub-compare-at-price"
  }, finalCompareAtPrice), "\xA0", price)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnetimeOptions);

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

// import "StyleComponents/subscription-sec.scss";

var SubscriptionOptions = _ref => {
  var {
    selectedVariant,
    selectedSellingPlan,
    onUpdate,
    purchaseType
  } = _ref;
  var {
    price,
    priceWithoutCurrency
  } = selectedVariant;
  var {
    priceAdjustments,
    discount
  } = selectedSellingPlan;
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscriptionOpt-container__subscription-wrapper variant-container__var-wrapper ".concat(purchaseType != 'onetime' ? 'active' : ''),
    onClick: () => {
      onUpdate("subscription");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscriptionOpt-container__subscription-label"
  }, "Subscribe ", discount > 0 && "& Save", "\xA0 ", discount > 0 && calculateOffer(priceAdjustments)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subscriptionOpt-container__subscription-Price"
  }, calculateDiscountedPrice(priceAdjustments) < numPrice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sub-compare-at-price"
  }, "$", numPrice), "\xA0$", calculateDiscountedPrice(priceAdjustments))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriptionOptions);

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
/* harmony import */ var _frequency_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequency-options */ "./js/components/react/frequency-options.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



// import VariantOptions from "./variant-options";

// import 'StyleComponents/variant-options.scss';
// import 'StyleComponents/subscription-sec.scss';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
  console.log(shopifyData);
  var [purchaseType, setPurchaseType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('onetime');
  var {
    variants,
    sellingplan,
    options,
    selected
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
    className: "variant-container__purchaseType-label variant-container__opt-label"
  }, "Buying Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "variant-container__purchaseType-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_onetime_options__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedVariant: selectedVariant,
    purchaseType: purchaseType,
    onUpdate: handleSwitch
  }), Object.keys(selectedSellingPlan).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_subscription_options__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedVariant: selectedVariant,
    purchaseType: purchaseType,
    selectedSellingPlan: selectedSellingPlan,
    onUpdate: handleSwitch
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("s", null, " ", productComparePrice), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: productComparePrice ? "product-sale-color" : ""
  }, " ", selectedVariant.price, " "), " ", productComparePrice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "product-sale-color"
  })), purchaseType != "onetime" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_frequency_options__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sellingplan: sellingplan,
    selectedSellingPlan: selectedSellingPlan,
    onUpdate: updateSellingPlan
  }));
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