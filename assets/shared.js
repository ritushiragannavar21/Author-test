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
    image_aspect_ratio,
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
  var aspectRatio = image_aspect_ratio;
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
  var css = "\n  .responsive-image__wrapper:before {\n    content: '';\n    width: 100%;\n    display: block;\n    padding-top: var(--padding-top);\n  }\n\n  .responsive-image__wrapper {\n      height: 100%;\n      position: relative;\n      max-width: var(--max-width);\n      max-height: var(--max-height);\n  }\n\n  .responsive-image__image {\n      position: absolute;\n      top: 0;\n      height: 100%;\n      left: 0;\n      width: 100%;\n      \n  }";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "ImageWrapper-".concat(image_id, "-").concat(generated_image_id),
    "data-image-id": image_id,
    className: "responsive-image__wrapper",
    style: getWrapperStyles()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
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
  var {
    shopifyData
  } = _ref;
  console.log("Shopify Data:", shopifyData);
  var srcTokens = {
    replacementToken: "?width=90&height=90",
    dataSrcToken: "?width=width&height=height",
    srcToken: "?width=90&height=90"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, shopifyData.data.blocks && shopifyData.data.blocks.length > 0 ? shopifyData.data.blocks.map((block, index) => {
    var _block$image, _block$image2, _block$image3;
    var src = ((_block$image = block.image) === null || _block$image === void 0 ? void 0 : _block$image.src) || 'https://cdn.shopify.com/s/files/1/0422/2255/1191/files/placeholderImage.webp?v=1692958737';
    var width = ((_block$image2 = block.image) === null || _block$image2 === void 0 ? void 0 : _block$image2.width) || 1920;
    var height = ((_block$image3 = block.image) === null || _block$image3 === void 0 ? void 0 : _block$image3.height) || 1080;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "factual__section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "factual__title"
    }, block.title || 'Default Title'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "factual__description"
    }, block.description || 'Default Description'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__cards"
    }, block.cards.map((card, cardIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: cardIndex,
      className: "factual__card-item",
      style: {
        backgroundColor: card.color
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, card.text))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "factual__right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      image_aspect_ratio: 0.9,
      image: {
        src,
        width,
        height
      },
      srcTokens: srcTokens
    })));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No data available."));
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