/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/font/Ubuntu-Regular.ttf */ "./src/assets/font/Ubuntu-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Ubuntu';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Ubuntu', 'Courier New', Courier, monospace;\n}\n\n:root {\n  --color-main: white;\n  --color-secondary: #3d5a80;\n  --color-tertiary: #293241;\n  --color-accent-main: #ee6c4d;\n  --color-accent-main-hover: gray;\n\n  --color-rain: blue;\n\n  --font-color-main: black;\n  --font-color-secondary: white;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  gap: 1rem;\n  background-color: var(--color-secondary);\n  color: var(--font-color-secondary);\n}\n\nheader .logo {\n  text-align: center;\n}\n\nheader .search {\n  display: flex;\n  height: 1.5rem;\n}\n\nheader .search input {\n  width: 100%;\n  padding: 0 0.5rem;\n  border-radius: 0;\n  outline: none;\n  border: 1px solid black;\n}\n\nheader .search input:focus {\n  border-radius: 0;\n  outline: none;\n}\n\nheader .search button {\n  cursor: pointer;\n  padding-inline: 0.5rem;\n  background-color: var(--color-accent-main);\n  box-shadow: none;\n  border: 1px solid black;\n  border-left-style: none;\n  border-radius: 0;\n  outline: none;\n}\n\nheader .search button:hover,\nheader .search button:active {\n  background-color: var(--color-accent-main-hover);\n}\n\nheader .btn-container {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 1rem;\n}\n\nheader .btn-container > span.active {\n  font-weight: bold;\n  font-size: 1.05rem;\n  text-decoration: underline;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nmain .forecast {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: 'location location' 'detail weather' 'hourly hourly';\n  text-transform: uppercase;\n  width: 100%;\n  padding-inline: 1rem;\n  gap: 1rem;\n}\n\nmain .forecast .location {\n  grid-area: location;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.5rem;\n  flex-wrap: wrap;\n}\n\nmain .forecast .location span.city {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\nmain .forecast .location span.date {\n  display: flex;\n}\n\nmain .forecast .small-details {\n  grid-area: detail;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: start;\n}\n\nmain .forecast .small-details span:not(.time) {\n  font-weight: 500;\n}\n\nmain .forecast .small-details .time {\n  font-size: 0.8rem;\n}\n\nmain .forecast .small-details .temp {\n  font-size: 4rem;\n  display: flex;\n  align-items: flex-end;\n  line-height: 0.9;\n}\n\nmain .forecast .small-details .feel {\n  font-size: 0.8rem;\n  font-style: italic;\n}\n\nmain .forecast .weather {\n  grid-area: weather;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\nmain .forecast .weather i {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  font-size: 4rem;\n}\n\nmain .forecast .weather .condition {\n  text-align: center;\n}\n\nmain .hourly {\n  grid-area: hourly;\n  display: flex;\n  overflow-x: auto;\n  flex-wrap: nowrap;\n  width: 100%;\n  gap: var(--card-gap);\n  margin: 1rem 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  --card-gap: 1rem;\n  --card-shown: 3;\n}\n\nmain .hourly > .card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 1rem 0;\n  flex: 1 0 calc((100% - var(--card-gap) * var(--card-shown) + 1rem) / var(--card-shown));\n  height: 100%;\n}\n\nmain .hourly > .card i:not(.wi-raindrop) {\n  font-size: 1.4rem;\n}\n\nmain .hourly > .card .rain {\n  margin-bottom: auto;\n}\n\nmain .hourly > .card .condition {\n  font-size: 0.8rem;\n  overflow-wrap: anywhere;\n  text-align: center;\n}\n\nmain .hourly > .card .rain {\n  font-size: 0.75rem;\n  color: var(--color-rain);\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n\nmain .details {\n  width: 100%;\n  background-color: var(--color-tertiary);\n  display: flex;\n  color: var(--font-color-secondary);\n}\n\nfooter {\n  border: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,0DAAwD;AAC1D;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,wDAAwD;AAC1D;;AAEA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,yBAAyB;EACzB,4BAA4B;EAC5B,+BAA+B;;EAE/B,kBAAkB;;EAElB,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,SAAS;EACT,wCAAwC;EACxC,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,0CAA0C;EAC1C,gBAAgB;EAChB,uBAAuB;EACvB,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;AACf;;AAEA;;EAEE,gDAAgD;AAClD;;AAEA;EACE,aAAa;EACb,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,yEAAyE;EACzE,yBAAyB;EACzB,WAAW;EACX,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,oBAAoB;EACpB,cAAc;EACd,yCAAyC;EACzC,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,uFAAuF;EACvF,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,uCAAuC;EACvC,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: 'Ubuntu';\n  src: url(./assets/font/Ubuntu-Regular.ttf) format('ttf');\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Ubuntu', 'Courier New', Courier, monospace;\n}\n\n:root {\n  --color-main: white;\n  --color-secondary: #3d5a80;\n  --color-tertiary: #293241;\n  --color-accent-main: #ee6c4d;\n  --color-accent-main-hover: gray;\n\n  --color-rain: blue;\n\n  --font-color-main: black;\n  --font-color-secondary: white;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  gap: 1rem;\n  background-color: var(--color-secondary);\n  color: var(--font-color-secondary);\n}\n\nheader .logo {\n  text-align: center;\n}\n\nheader .search {\n  display: flex;\n  height: 1.5rem;\n}\n\nheader .search input {\n  width: 100%;\n  padding: 0 0.5rem;\n  border-radius: 0;\n  outline: none;\n  border: 1px solid black;\n}\n\nheader .search input:focus {\n  border-radius: 0;\n  outline: none;\n}\n\nheader .search button {\n  cursor: pointer;\n  padding-inline: 0.5rem;\n  background-color: var(--color-accent-main);\n  box-shadow: none;\n  border: 1px solid black;\n  border-left-style: none;\n  border-radius: 0;\n  outline: none;\n}\n\nheader .search button:hover,\nheader .search button:active {\n  background-color: var(--color-accent-main-hover);\n}\n\nheader .btn-container {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 1rem;\n}\n\nheader .btn-container > span.active {\n  font-weight: bold;\n  font-size: 1.05rem;\n  text-decoration: underline;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nmain .forecast {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: 'location location' 'detail weather' 'hourly hourly';\n  text-transform: uppercase;\n  width: 100%;\n  padding-inline: 1rem;\n  gap: 1rem;\n}\n\nmain .forecast .location {\n  grid-area: location;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.5rem;\n  flex-wrap: wrap;\n}\n\nmain .forecast .location span.city {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\nmain .forecast .location span.date {\n  display: flex;\n}\n\nmain .forecast .small-details {\n  grid-area: detail;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: start;\n}\n\nmain .forecast .small-details span:not(.time) {\n  font-weight: 500;\n}\n\nmain .forecast .small-details .time {\n  font-size: 0.8rem;\n}\n\nmain .forecast .small-details .temp {\n  font-size: 4rem;\n  display: flex;\n  align-items: flex-end;\n  line-height: 0.9;\n}\n\nmain .forecast .small-details .feel {\n  font-size: 0.8rem;\n  font-style: italic;\n}\n\nmain .forecast .weather {\n  grid-area: weather;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\nmain .forecast .weather i {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  font-size: 4rem;\n}\n\nmain .forecast .weather .condition {\n  text-align: center;\n}\n\nmain .hourly {\n  grid-area: hourly;\n  display: flex;\n  overflow-x: auto;\n  flex-wrap: nowrap;\n  width: 100%;\n  gap: var(--card-gap);\n  margin: 1rem 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  --card-gap: 1rem;\n  --card-shown: 3;\n}\n\nmain .hourly > .card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 1rem 0;\n  flex: 1 0 calc((100% - var(--card-gap) * var(--card-shown) + 1rem) / var(--card-shown));\n  height: 100%;\n}\n\nmain .hourly > .card i:not(.wi-raindrop) {\n  font-size: 1.4rem;\n}\n\nmain .hourly > .card .rain {\n  margin-bottom: auto;\n}\n\nmain .hourly > .card .condition {\n  font-size: 0.8rem;\n  overflow-wrap: anywhere;\n  text-align: center;\n}\n\nmain .hourly > .card .rain {\n  font-size: 0.75rem;\n  color: var(--color-rain);\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n\nmain .details {\n  width: 100%;\n  background-color: var(--color-tertiary);\n  display: flex;\n  color: var(--font-color-secondary);\n}\n\nfooter {\n  border: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/weather-icons.min.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/weather-icons.min.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/font/weathericons-regular-webfont.eot */ "./src/assets/font/weathericons-regular-webfont.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/font/weathericons-regular-webfont.woff2 */ "./src/assets/font/weathericons-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/font/weathericons-regular-webfont.woff */ "./src/assets/font/weathericons-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/font/weathericons-regular-webfont.ttf */ "./src/assets/font/weathericons-regular-webfont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/font/weathericons-regular-webfont.svg */ "./src/assets/font/weathericons-regular-webfont.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: "#weather_iconsregular" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n *  Weather Icons 2.0.10\n *  Updated November 1, 2020\n *  Weather themed icons for Bootstrap\n *  Author - Erik Flowers - erik@helloerik.com\n *  Email: erik@helloerik.com\n *  Twitter: http://twitter.com/Erik_UX\n *  ------------------------------------------------------------------------------\n *  Maintained at http://erikflowers.github.io/weather-icons\n *\n *  License\n *  ------------------------------------------------------------------------------\n *  - Font licensed under SIL OFL 1.1 -\n *    http://scripts.sil.org/OFL\n *  - CSS, SCSS and LESS are licensed under MIT License -\n *    http://opensource.org/licenses/mit-license.html\n *  - Documentation licensed under CC BY 3.0 -\n *    http://creativecommons.org/licenses/by/3.0/\n *  - Inspired by and works great as a companion with Font Awesome\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\n */@font-face{font-family:'weathericons';src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype'),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('svg');font-weight:normal;font-style:normal}.wi{display:inline-block;font-family:'weathericons';font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.wi-fw{text-align:center;width:1.4em}.wi-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.wi-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.wi-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.wi-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.wi-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}.wi-day-sunny:before{content:\"\\f00d\"}.wi-day-cloudy:before{content:\"\\f002\"}.wi-day-cloudy-gusts:before{content:\"\\f000\"}.wi-day-cloudy-windy:before{content:\"\\f001\"}.wi-day-fog:before{content:\"\\f003\"}.wi-day-hail:before{content:\"\\f004\"}.wi-day-haze:before{content:\"\\f0b6\"}.wi-day-lightning:before{content:\"\\f005\"}.wi-day-rain:before{content:\"\\f008\"}.wi-day-rain-mix:before{content:\"\\f006\"}.wi-day-rain-wind:before{content:\"\\f007\"}.wi-day-showers:before{content:\"\\f009\"}.wi-day-sleet:before{content:\"\\f0b2\"}.wi-day-sleet-storm:before{content:\"\\f068\"}.wi-day-snow:before{content:\"\\f00a\"}.wi-day-snow-thunderstorm:before{content:\"\\f06b\"}.wi-day-snow-wind:before{content:\"\\f065\"}.wi-day-sprinkle:before{content:\"\\f00b\"}.wi-day-storm-showers:before{content:\"\\f00e\"}.wi-day-sunny-overcast:before{content:\"\\f00c\"}.wi-day-thunderstorm:before{content:\"\\f010\"}.wi-day-windy:before{content:\"\\f085\"}.wi-solar-eclipse:before{content:\"\\f06e\"}.wi-hot:before{content:\"\\f072\"}.wi-day-cloudy-high:before{content:\"\\f07d\"}.wi-day-light-wind:before{content:\"\\f0c4\"}.wi-night-clear:before{content:\"\\f02e\"}.wi-night-alt-cloudy:before{content:\"\\f086\"}.wi-night-alt-cloudy-gusts:before{content:\"\\f022\"}.wi-night-alt-cloudy-windy:before{content:\"\\f023\"}.wi-night-alt-hail:before{content:\"\\f024\"}.wi-night-alt-lightning:before{content:\"\\f025\"}.wi-night-alt-rain:before{content:\"\\f028\"}.wi-night-alt-rain-mix:before{content:\"\\f026\"}.wi-night-alt-rain-wind:before{content:\"\\f027\"}.wi-night-alt-showers:before{content:\"\\f029\"}.wi-night-alt-sleet:before{content:\"\\f0b4\"}.wi-night-alt-sleet-storm:before{content:\"\\f06a\"}.wi-night-alt-snow:before{content:\"\\f02a\"}.wi-night-alt-snow-thunderstorm:before{content:\"\\f06d\"}.wi-night-alt-snow-wind:before{content:\"\\f067\"}.wi-night-alt-sprinkle:before{content:\"\\f02b\"}.wi-night-alt-storm-showers:before{content:\"\\f02c\"}.wi-night-alt-thunderstorm:before{content:\"\\f02d\"}.wi-night-cloudy:before{content:\"\\f031\"}.wi-night-cloudy-gusts:before{content:\"\\f02f\"}.wi-night-cloudy-windy:before{content:\"\\f030\"}.wi-night-fog:before{content:\"\\f04a\"}.wi-night-hail:before{content:\"\\f032\"}.wi-night-lightning:before{content:\"\\f033\"}.wi-night-partly-cloudy:before{content:\"\\f083\"}.wi-night-rain:before{content:\"\\f036\"}.wi-night-rain-mix:before{content:\"\\f034\"}.wi-night-rain-wind:before{content:\"\\f035\"}.wi-night-showers:before{content:\"\\f037\"}.wi-night-sleet:before{content:\"\\f0b3\"}.wi-night-sleet-storm:before{content:\"\\f069\"}.wi-night-snow:before{content:\"\\f038\"}.wi-night-snow-thunderstorm:before{content:\"\\f06c\"}.wi-night-snow-wind:before{content:\"\\f066\"}.wi-night-sprinkle:before{content:\"\\f039\"}.wi-night-storm-showers:before{content:\"\\f03a\"}.wi-night-thunderstorm:before{content:\"\\f03b\"}.wi-lunar-eclipse:before{content:\"\\f070\"}.wi-stars:before{content:\"\\f077\"}.wi-storm-showers:before{content:\"\\f01d\"}.wi-thunderstorm:before{content:\"\\f01e\"}.wi-night-alt-cloudy-high:before{content:\"\\f07e\"}.wi-night-cloudy-high:before{content:\"\\f080\"}.wi-night-alt-partly-cloudy:before{content:\"\\f081\"}.wi-cloud:before{content:\"\\f041\"}.wi-cloudy:before{content:\"\\f013\"}.wi-cloudy-gusts:before{content:\"\\f011\"}.wi-cloudy-windy:before{content:\"\\f012\"}.wi-fog:before{content:\"\\f014\"}.wi-hail:before{content:\"\\f015\"}.wi-rain:before{content:\"\\f019\"}.wi-rain-mix:before{content:\"\\f017\"}.wi-rain-wind:before{content:\"\\f018\"}.wi-showers:before{content:\"\\f01a\"}.wi-sleet:before{content:\"\\f0b5\"}.wi-snow:before{content:\"\\f01b\"}.wi-sprinkle:before{content:\"\\f01c\"}.wi-storm-showers:before{content:\"\\f01d\"}.wi-thunderstorm:before{content:\"\\f01e\"}.wi-snow-wind:before{content:\"\\f064\"}.wi-snow:before{content:\"\\f01b\"}.wi-smog:before{content:\"\\f074\"}.wi-smoke:before{content:\"\\f062\"}.wi-lightning:before{content:\"\\f016\"}.wi-raindrops:before{content:\"\\f04e\"}.wi-raindrop:before{content:\"\\f078\"}.wi-dust:before{content:\"\\f063\"}.wi-snowflake-cold:before{content:\"\\f076\"}.wi-windy:before{content:\"\\f021\"}.wi-strong-wind:before{content:\"\\f050\"}.wi-sandstorm:before{content:\"\\f082\"}.wi-earthquake:before{content:\"\\f0c6\"}.wi-fire:before{content:\"\\f0c7\"}.wi-flood:before{content:\"\\f07c\"}.wi-meteor:before{content:\"\\f071\"}.wi-tsunami:before{content:\"\\f0c5\"}.wi-volcano:before{content:\"\\f0c8\"}.wi-hurricane:before{content:\"\\f073\"}.wi-tornado:before{content:\"\\f056\"}.wi-small-craft-advisory:before{content:\"\\f0cc\"}.wi-gale-warning:before{content:\"\\f0cd\"}.wi-storm-warning:before{content:\"\\f0ce\"}.wi-hurricane-warning:before{content:\"\\f0cf\"}.wi-wind-direction:before{content:\"\\f0b1\"}.wi-alien:before{content:\"\\f075\"}.wi-celsius:before{content:\"\\f03c\"}.wi-fahrenheit:before{content:\"\\f045\"}.wi-degrees:before{content:\"\\f042\"}.wi-thermometer:before{content:\"\\f055\"}.wi-thermometer-exterior:before{content:\"\\f053\"}.wi-thermometer-internal:before{content:\"\\f054\"}.wi-cloud-down:before{content:\"\\f03d\"}.wi-cloud-up:before{content:\"\\f040\"}.wi-cloud-refresh:before{content:\"\\f03e\"}.wi-horizon:before{content:\"\\f047\"}.wi-horizon-alt:before{content:\"\\f046\"}.wi-sunrise:before{content:\"\\f051\"}.wi-sunset:before{content:\"\\f052\"}.wi-moonrise:before{content:\"\\f0c9\"}.wi-moonset:before{content:\"\\f0ca\"}.wi-refresh:before{content:\"\\f04c\"}.wi-refresh-alt:before{content:\"\\f04b\"}.wi-umbrella:before{content:\"\\f084\"}.wi-barometer:before{content:\"\\f079\"}.wi-humidity:before{content:\"\\f07a\"}.wi-na:before{content:\"\\f07b\"}.wi-train:before{content:\"\\f0cb\"}.wi-moon-new:before{content:\"\\f095\"}.wi-moon-waxing-crescent-1:before{content:\"\\f096\"}.wi-moon-waxing-crescent-2:before{content:\"\\f097\"}.wi-moon-waxing-crescent-3:before{content:\"\\f098\"}.wi-moon-waxing-crescent-4:before{content:\"\\f099\"}.wi-moon-waxing-crescent-5:before{content:\"\\f09a\"}.wi-moon-waxing-crescent-6:before{content:\"\\f09b\"}.wi-moon-first-quarter:before{content:\"\\f09c\"}.wi-moon-waxing-gibbous-1:before{content:\"\\f09d\"}.wi-moon-waxing-gibbous-2:before{content:\"\\f09e\"}.wi-moon-waxing-gibbous-3:before{content:\"\\f09f\"}.wi-moon-waxing-gibbous-4:before{content:\"\\f0a0\"}.wi-moon-waxing-gibbous-5:before{content:\"\\f0a1\"}.wi-moon-waxing-gibbous-6:before{content:\"\\f0a2\"}.wi-moon-full:before{content:\"\\f0a3\"}.wi-moon-waning-gibbous-1:before{content:\"\\f0a4\"}.wi-moon-waning-gibbous-2:before{content:\"\\f0a5\"}.wi-moon-waning-gibbous-3:before{content:\"\\f0a6\"}.wi-moon-waning-gibbous-4:before{content:\"\\f0a7\"}.wi-moon-waning-gibbous-5:before{content:\"\\f0a8\"}.wi-moon-waning-gibbous-6:before{content:\"\\f0a9\"}.wi-moon-third-quarter:before{content:\"\\f0aa\"}.wi-moon-waning-crescent-1:before{content:\"\\f0ab\"}.wi-moon-waning-crescent-2:before{content:\"\\f0ac\"}.wi-moon-waning-crescent-3:before{content:\"\\f0ad\"}.wi-moon-waning-crescent-4:before{content:\"\\f0ae\"}.wi-moon-waning-crescent-5:before{content:\"\\f0af\"}.wi-moon-waning-crescent-6:before{content:\"\\f0b0\"}.wi-moon-alt-new:before{content:\"\\f0eb\"}.wi-moon-alt-waxing-crescent-1:before{content:\"\\f0d0\"}.wi-moon-alt-waxing-crescent-2:before{content:\"\\f0d1\"}.wi-moon-alt-waxing-crescent-3:before{content:\"\\f0d2\"}.wi-moon-alt-waxing-crescent-4:before{content:\"\\f0d3\"}.wi-moon-alt-waxing-crescent-5:before{content:\"\\f0d4\"}.wi-moon-alt-waxing-crescent-6:before{content:\"\\f0d5\"}.wi-moon-alt-first-quarter:before{content:\"\\f0d6\"}.wi-moon-alt-waxing-gibbous-1:before{content:\"\\f0d7\"}.wi-moon-alt-waxing-gibbous-2:before{content:\"\\f0d8\"}.wi-moon-alt-waxing-gibbous-3:before{content:\"\\f0d9\"}.wi-moon-alt-waxing-gibbous-4:before{content:\"\\f0da\"}.wi-moon-alt-waxing-gibbous-5:before{content:\"\\f0db\"}.wi-moon-alt-waxing-gibbous-6:before{content:\"\\f0dc\"}.wi-moon-alt-full:before{content:\"\\f0dd\"}.wi-moon-alt-waning-gibbous-1:before{content:\"\\f0de\"}.wi-moon-alt-waning-gibbous-2:before{content:\"\\f0df\"}.wi-moon-alt-waning-gibbous-3:before{content:\"\\f0e0\"}.wi-moon-alt-waning-gibbous-4:before{content:\"\\f0e1\"}.wi-moon-alt-waning-gibbous-5:before{content:\"\\f0e2\"}.wi-moon-alt-waning-gibbous-6:before{content:\"\\f0e3\"}.wi-moon-alt-third-quarter:before{content:\"\\f0e4\"}.wi-moon-alt-waning-crescent-1:before{content:\"\\f0e5\"}.wi-moon-alt-waning-crescent-2:before{content:\"\\f0e6\"}.wi-moon-alt-waning-crescent-3:before{content:\"\\f0e7\"}.wi-moon-alt-waning-crescent-4:before{content:\"\\f0e8\"}.wi-moon-alt-waning-crescent-5:before{content:\"\\f0e9\"}.wi-moon-alt-waning-crescent-6:before{content:\"\\f0ea\"}.wi-moon-0:before{content:\"\\f095\"}.wi-moon-1:before{content:\"\\f096\"}.wi-moon-2:before{content:\"\\f097\"}.wi-moon-3:before{content:\"\\f098\"}.wi-moon-4:before{content:\"\\f099\"}.wi-moon-5:before{content:\"\\f09a\"}.wi-moon-6:before{content:\"\\f09b\"}.wi-moon-7:before{content:\"\\f09c\"}.wi-moon-8:before{content:\"\\f09d\"}.wi-moon-9:before{content:\"\\f09e\"}.wi-moon-10:before{content:\"\\f09f\"}.wi-moon-11:before{content:\"\\f0a0\"}.wi-moon-12:before{content:\"\\f0a1\"}.wi-moon-13:before{content:\"\\f0a2\"}.wi-moon-14:before{content:\"\\f0a3\"}.wi-moon-15:before{content:\"\\f0a4\"}.wi-moon-16:before{content:\"\\f0a5\"}.wi-moon-17:before{content:\"\\f0a6\"}.wi-moon-18:before{content:\"\\f0a7\"}.wi-moon-19:before{content:\"\\f0a8\"}.wi-moon-20:before{content:\"\\f0a9\"}.wi-moon-21:before{content:\"\\f0aa\"}.wi-moon-22:before{content:\"\\f0ab\"}.wi-moon-23:before{content:\"\\f0ac\"}.wi-moon-24:before{content:\"\\f0ad\"}.wi-moon-25:before{content:\"\\f0ae\"}.wi-moon-26:before{content:\"\\f0af\"}.wi-moon-27:before{content:\"\\f0b0\"}.wi-time-1:before{content:\"\\f08a\"}.wi-time-2:before{content:\"\\f08b\"}.wi-time-3:before{content:\"\\f08c\"}.wi-time-4:before{content:\"\\f08d\"}.wi-time-5:before{content:\"\\f08e\"}.wi-time-6:before{content:\"\\f08f\"}.wi-time-7:before{content:\"\\f090\"}.wi-time-8:before{content:\"\\f091\"}.wi-time-9:before{content:\"\\f092\"}.wi-time-10:before{content:\"\\f093\"}.wi-time-11:before{content:\"\\f094\"}.wi-time-12:before{content:\"\\f089\"}.wi-direction-up:before{content:\"\\f058\"}.wi-direction-up-right:before{content:\"\\f057\"}.wi-direction-right:before{content:\"\\f04d\"}.wi-direction-down-right:before{content:\"\\f088\"}.wi-direction-down:before{content:\"\\f044\"}.wi-direction-down-left:before{content:\"\\f043\"}.wi-direction-left:before{content:\"\\f048\"}.wi-direction-up-left:before{content:\"\\f087\"}.wi-wind-beaufort-0:before{content:\"\\f0b7\"}.wi-wind-beaufort-1:before{content:\"\\f0b8\"}.wi-wind-beaufort-2:before{content:\"\\f0b9\"}.wi-wind-beaufort-3:before{content:\"\\f0ba\"}.wi-wind-beaufort-4:before{content:\"\\f0bb\"}.wi-wind-beaufort-5:before{content:\"\\f0bc\"}.wi-wind-beaufort-6:before{content:\"\\f0bd\"}.wi-wind-beaufort-7:before{content:\"\\f0be\"}.wi-wind-beaufort-8:before{content:\"\\f0bf\"}.wi-wind-beaufort-9:before{content:\"\\f0c0\"}.wi-wind-beaufort-10:before{content:\"\\f0c1\"}.wi-wind-beaufort-11:before{content:\"\\f0c2\"}.wi-wind-beaufort-12:before{content:\"\\f0c3\"}.wi-yahoo-0:before{content:\"\\f056\"}.wi-yahoo-1:before{content:\"\\f00e\"}.wi-yahoo-2:before{content:\"\\f073\"}.wi-yahoo-3:before{content:\"\\f01e\"}.wi-yahoo-4:before{content:\"\\f01e\"}.wi-yahoo-5:before{content:\"\\f017\"}.wi-yahoo-6:before{content:\"\\f017\"}.wi-yahoo-7:before{content:\"\\f017\"}.wi-yahoo-8:before{content:\"\\f015\"}.wi-yahoo-9:before{content:\"\\f01a\"}.wi-yahoo-10:before{content:\"\\f015\"}.wi-yahoo-11:before{content:\"\\f01a\"}.wi-yahoo-12:before{content:\"\\f01a\"}.wi-yahoo-13:before{content:\"\\f01b\"}.wi-yahoo-14:before{content:\"\\f00a\"}.wi-yahoo-15:before{content:\"\\f064\"}.wi-yahoo-16:before{content:\"\\f01b\"}.wi-yahoo-17:before{content:\"\\f015\"}.wi-yahoo-18:before{content:\"\\f017\"}.wi-yahoo-19:before{content:\"\\f063\"}.wi-yahoo-20:before{content:\"\\f014\"}.wi-yahoo-21:before{content:\"\\f021\"}.wi-yahoo-22:before{content:\"\\f062\"}.wi-yahoo-23:before{content:\"\\f050\"}.wi-yahoo-24:before{content:\"\\f050\"}.wi-yahoo-25:before{content:\"\\f076\"}.wi-yahoo-26:before{content:\"\\f013\"}.wi-yahoo-27:before{content:\"\\f031\"}.wi-yahoo-28:before{content:\"\\f002\"}.wi-yahoo-29:before{content:\"\\f031\"}.wi-yahoo-30:before{content:\"\\f002\"}.wi-yahoo-31:before{content:\"\\f02e\"}.wi-yahoo-32:before{content:\"\\f00d\"}.wi-yahoo-33:before{content:\"\\f083\"}.wi-yahoo-34:before{content:\"\\f00c\"}.wi-yahoo-35:before{content:\"\\f017\"}.wi-yahoo-36:before{content:\"\\f072\"}.wi-yahoo-37:before{content:\"\\f00e\"}.wi-yahoo-38:before{content:\"\\f00e\"}.wi-yahoo-39:before{content:\"\\f00e\"}.wi-yahoo-40:before{content:\"\\f01a\"}.wi-yahoo-41:before{content:\"\\f064\"}.wi-yahoo-42:before{content:\"\\f01b\"}.wi-yahoo-43:before{content:\"\\f064\"}.wi-yahoo-44:before{content:\"\\f00c\"}.wi-yahoo-45:before{content:\"\\f00e\"}.wi-yahoo-46:before{content:\"\\f01b\"}.wi-yahoo-47:before{content:\"\\f00e\"}.wi-yahoo-3200:before{content:\"\\f077\"}.wi-forecast-io-clear-day:before{content:\"\\f00d\"}.wi-forecast-io-clear-night:before{content:\"\\f02e\"}.wi-forecast-io-rain:before{content:\"\\f019\"}.wi-forecast-io-snow:before{content:\"\\f01b\"}.wi-forecast-io-sleet:before{content:\"\\f0b5\"}.wi-forecast-io-wind:before{content:\"\\f050\"}.wi-forecast-io-fog:before{content:\"\\f014\"}.wi-forecast-io-cloudy:before{content:\"\\f013\"}.wi-forecast-io-partly-cloudy-day:before{content:\"\\f002\"}.wi-forecast-io-partly-cloudy-night:before{content:\"\\f031\"}.wi-forecast-io-hail:before{content:\"\\f015\"}.wi-forecast-io-thunderstorm:before{content:\"\\f01e\"}.wi-forecast-io-tornado:before{content:\"\\f056\"}.wi-wmo4680-0:before,.wi-wmo4680-00:before{content:\"\\f055\"}.wi-wmo4680-1:before,.wi-wmo4680-01:before{content:\"\\f013\"}.wi-wmo4680-2:before,.wi-wmo4680-02:before{content:\"\\f055\"}.wi-wmo4680-3:before,.wi-wmo4680-03:before{content:\"\\f013\"}.wi-wmo4680-4:before,.wi-wmo4680-04:before{content:\"\\f014\"}.wi-wmo4680-5:before,.wi-wmo4680-05:before{content:\"\\f014\"}.wi-wmo4680-10:before{content:\"\\f014\"}.wi-wmo4680-11:before{content:\"\\f014\"}.wi-wmo4680-12:before{content:\"\\f016\"}.wi-wmo4680-18:before{content:\"\\f050\"}.wi-wmo4680-20:before{content:\"\\f014\"}.wi-wmo4680-21:before{content:\"\\f017\"}.wi-wmo4680-22:before{content:\"\\f017\"}.wi-wmo4680-23:before{content:\"\\f019\"}.wi-wmo4680-24:before{content:\"\\f01b\"}.wi-wmo4680-25:before{content:\"\\f015\"}.wi-wmo4680-26:before{content:\"\\f01e\"}.wi-wmo4680-27:before{content:\"\\f063\"}.wi-wmo4680-28:before{content:\"\\f063\"}.wi-wmo4680-29:before{content:\"\\f063\"}.wi-wmo4680-30:before{content:\"\\f014\"}.wi-wmo4680-31:before{content:\"\\f014\"}.wi-wmo4680-32:before{content:\"\\f014\"}.wi-wmo4680-33:before{content:\"\\f014\"}.wi-wmo4680-34:before{content:\"\\f014\"}.wi-wmo4680-35:before{content:\"\\f014\"}.wi-wmo4680-40:before{content:\"\\f017\"}.wi-wmo4680-41:before{content:\"\\f01c\"}.wi-wmo4680-42:before{content:\"\\f019\"}.wi-wmo4680-43:before{content:\"\\f01c\"}.wi-wmo4680-44:before{content:\"\\f019\"}.wi-wmo4680-45:before{content:\"\\f015\"}.wi-wmo4680-46:before{content:\"\\f015\"}.wi-wmo4680-47:before{content:\"\\f01b\"}.wi-wmo4680-48:before{content:\"\\f01b\"}.wi-wmo4680-50:before{content:\"\\f01c\"}.wi-wmo4680-51:before{content:\"\\f01c\"}.wi-wmo4680-52:before{content:\"\\f019\"}.wi-wmo4680-53:before{content:\"\\f019\"}.wi-wmo4680-54:before{content:\"\\f076\"}.wi-wmo4680-55:before{content:\"\\f076\"}.wi-wmo4680-56:before{content:\"\\f076\"}.wi-wmo4680-57:before{content:\"\\f01c\"}.wi-wmo4680-58:before{content:\"\\f019\"}.wi-wmo4680-60:before{content:\"\\f01c\"}.wi-wmo4680-61:before{content:\"\\f01c\"}.wi-wmo4680-62:before{content:\"\\f019\"}.wi-wmo4680-63:before{content:\"\\f019\"}.wi-wmo4680-64:before{content:\"\\f015\"}.wi-wmo4680-65:before{content:\"\\f015\"}.wi-wmo4680-66:before{content:\"\\f015\"}.wi-wmo4680-67:before{content:\"\\f017\"}.wi-wmo4680-68:before{content:\"\\f017\"}.wi-wmo4680-70:before{content:\"\\f01b\"}.wi-wmo4680-71:before{content:\"\\f01b\"}.wi-wmo4680-72:before{content:\"\\f01b\"}.wi-wmo4680-73:before{content:\"\\f01b\"}.wi-wmo4680-74:before{content:\"\\f076\"}.wi-wmo4680-75:before{content:\"\\f076\"}.wi-wmo4680-76:before{content:\"\\f076\"}.wi-wmo4680-77:before{content:\"\\f01b\"}.wi-wmo4680-78:before{content:\"\\f076\"}.wi-wmo4680-80:before{content:\"\\f019\"}.wi-wmo4680-81:before{content:\"\\f01c\"}.wi-wmo4680-82:before{content:\"\\f019\"}.wi-wmo4680-83:before{content:\"\\f019\"}.wi-wmo4680-84:before{content:\"\\f01d\"}.wi-wmo4680-85:before{content:\"\\f017\"}.wi-wmo4680-86:before{content:\"\\f017\"}.wi-wmo4680-87:before{content:\"\\f017\"}.wi-wmo4680-89:before{content:\"\\f015\"}.wi-wmo4680-90:before{content:\"\\f016\"}.wi-wmo4680-91:before{content:\"\\f01d\"}.wi-wmo4680-92:before{content:\"\\f01e\"}.wi-wmo4680-93:before{content:\"\\f01e\"}.wi-wmo4680-94:before{content:\"\\f016\"}.wi-wmo4680-95:before{content:\"\\f01e\"}.wi-wmo4680-96:before{content:\"\\f01e\"}.wi-wmo4680-99:before{content:\"\\f056\"}.wi-owm-200:before{content:\"\\f01e\"}.wi-owm-201:before{content:\"\\f01e\"}.wi-owm-202:before{content:\"\\f01e\"}.wi-owm-210:before{content:\"\\f016\"}.wi-owm-211:before{content:\"\\f016\"}.wi-owm-212:before{content:\"\\f016\"}.wi-owm-221:before{content:\"\\f016\"}.wi-owm-230:before{content:\"\\f01e\"}.wi-owm-231:before{content:\"\\f01e\"}.wi-owm-232:before{content:\"\\f01e\"}.wi-owm-300:before{content:\"\\f01c\"}.wi-owm-301:before{content:\"\\f01c\"}.wi-owm-302:before{content:\"\\f019\"}.wi-owm-310:before{content:\"\\f017\"}.wi-owm-311:before{content:\"\\f019\"}.wi-owm-312:before{content:\"\\f019\"}.wi-owm-313:before{content:\"\\f01a\"}.wi-owm-314:before{content:\"\\f019\"}.wi-owm-321:before{content:\"\\f01c\"}.wi-owm-500:before{content:\"\\f01c\"}.wi-owm-501:before{content:\"\\f019\"}.wi-owm-502:before{content:\"\\f019\"}.wi-owm-503:before{content:\"\\f019\"}.wi-owm-504:before{content:\"\\f019\"}.wi-owm-511:before{content:\"\\f017\"}.wi-owm-520:before{content:\"\\f01a\"}.wi-owm-521:before{content:\"\\f01a\"}.wi-owm-522:before{content:\"\\f01a\"}.wi-owm-531:before{content:\"\\f01d\"}.wi-owm-600:before{content:\"\\f01b\"}.wi-owm-601:before{content:\"\\f01b\"}.wi-owm-602:before{content:\"\\f0b5\"}.wi-owm-611:before{content:\"\\f017\"}.wi-owm-612:before{content:\"\\f017\"}.wi-owm-615:before{content:\"\\f017\"}.wi-owm-616:before{content:\"\\f017\"}.wi-owm-620:before{content:\"\\f017\"}.wi-owm-621:before{content:\"\\f01b\"}.wi-owm-622:before{content:\"\\f01b\"}.wi-owm-701:before{content:\"\\f014\"}.wi-owm-711:before{content:\"\\f062\"}.wi-owm-721:before{content:\"\\f0b6\"}.wi-owm-731:before{content:\"\\f063\"}.wi-owm-741:before{content:\"\\f014\"}.wi-owm-761:before{content:\"\\f063\"}.wi-owm-762:before{content:\"\\f063\"}.wi-owm-771:before{content:\"\\f011\"}.wi-owm-781:before{content:\"\\f056\"}.wi-owm-800:before{content:\"\\f00d\"}.wi-owm-801:before{content:\"\\f041\"}.wi-owm-802:before{content:\"\\f041\"}.wi-owm-803:before{content:\"\\f013\"}.wi-owm-804:before{content:\"\\f013\"}.wi-owm-900:before{content:\"\\f056\"}.wi-owm-901:before{content:\"\\f01d\"}.wi-owm-902:before{content:\"\\f073\"}.wi-owm-903:before{content:\"\\f076\"}.wi-owm-904:before{content:\"\\f072\"}.wi-owm-905:before{content:\"\\f021\"}.wi-owm-906:before{content:\"\\f015\"}.wi-owm-957:before{content:\"\\f050\"}.wi-owm-day-200:before{content:\"\\f010\"}.wi-owm-day-201:before{content:\"\\f010\"}.wi-owm-day-202:before{content:\"\\f010\"}.wi-owm-day-210:before{content:\"\\f005\"}.wi-owm-day-211:before{content:\"\\f005\"}.wi-owm-day-212:before{content:\"\\f005\"}.wi-owm-day-221:before{content:\"\\f005\"}.wi-owm-day-230:before{content:\"\\f010\"}.wi-owm-day-231:before{content:\"\\f010\"}.wi-owm-day-232:before{content:\"\\f010\"}.wi-owm-day-300:before{content:\"\\f00b\"}.wi-owm-day-301:before{content:\"\\f00b\"}.wi-owm-day-302:before{content:\"\\f008\"}.wi-owm-day-310:before{content:\"\\f008\"}.wi-owm-day-311:before{content:\"\\f008\"}.wi-owm-day-312:before{content:\"\\f008\"}.wi-owm-day-313:before{content:\"\\f008\"}.wi-owm-day-314:before{content:\"\\f008\"}.wi-owm-day-321:before{content:\"\\f00b\"}.wi-owm-day-500:before{content:\"\\f00b\"}.wi-owm-day-501:before{content:\"\\f008\"}.wi-owm-day-502:before{content:\"\\f008\"}.wi-owm-day-503:before{content:\"\\f008\"}.wi-owm-day-504:before{content:\"\\f008\"}.wi-owm-day-511:before{content:\"\\f006\"}.wi-owm-day-520:before{content:\"\\f009\"}.wi-owm-day-521:before{content:\"\\f009\"}.wi-owm-day-522:before{content:\"\\f009\"}.wi-owm-day-531:before{content:\"\\f00e\"}.wi-owm-day-600:before{content:\"\\f00a\"}.wi-owm-day-601:before{content:\"\\f0b2\"}.wi-owm-day-602:before{content:\"\\f00a\"}.wi-owm-day-611:before{content:\"\\f006\"}.wi-owm-day-612:before{content:\"\\f006\"}.wi-owm-day-615:before{content:\"\\f006\"}.wi-owm-day-616:before{content:\"\\f006\"}.wi-owm-day-620:before{content:\"\\f006\"}.wi-owm-day-621:before{content:\"\\f00a\"}.wi-owm-day-622:before{content:\"\\f00a\"}.wi-owm-day-701:before{content:\"\\f003\"}.wi-owm-day-711:before{content:\"\\f062\"}.wi-owm-day-721:before{content:\"\\f0b6\"}.wi-owm-day-731:before{content:\"\\f063\"}.wi-owm-day-741:before{content:\"\\f003\"}.wi-owm-day-761:before{content:\"\\f063\"}.wi-owm-day-762:before{content:\"\\f063\"}.wi-owm-day-781:before{content:\"\\f056\"}.wi-owm-day-800:before{content:\"\\f00d\"}.wi-owm-day-801:before{content:\"\\f002\"}.wi-owm-day-802:before{content:\"\\f002\"}.wi-owm-day-803:before{content:\"\\f013\"}.wi-owm-day-804:before{content:\"\\f013\"}.wi-owm-day-900:before{content:\"\\f056\"}.wi-owm-day-902:before{content:\"\\f073\"}.wi-owm-day-903:before{content:\"\\f076\"}.wi-owm-day-904:before{content:\"\\f072\"}.wi-owm-day-906:before{content:\"\\f004\"}.wi-owm-day-957:before{content:\"\\f050\"}.wi-owm-night-200:before{content:\"\\f02d\"}.wi-owm-night-201:before{content:\"\\f02d\"}.wi-owm-night-202:before{content:\"\\f02d\"}.wi-owm-night-210:before{content:\"\\f025\"}.wi-owm-night-211:before{content:\"\\f025\"}.wi-owm-night-212:before{content:\"\\f025\"}.wi-owm-night-221:before{content:\"\\f025\"}.wi-owm-night-230:before{content:\"\\f02d\"}.wi-owm-night-231:before{content:\"\\f02d\"}.wi-owm-night-232:before{content:\"\\f02d\"}.wi-owm-night-300:before{content:\"\\f02b\"}.wi-owm-night-301:before{content:\"\\f02b\"}.wi-owm-night-302:before{content:\"\\f028\"}.wi-owm-night-310:before{content:\"\\f028\"}.wi-owm-night-311:before{content:\"\\f028\"}.wi-owm-night-312:before{content:\"\\f028\"}.wi-owm-night-313:before{content:\"\\f028\"}.wi-owm-night-314:before{content:\"\\f028\"}.wi-owm-night-321:before{content:\"\\f02b\"}.wi-owm-night-500:before{content:\"\\f02b\"}.wi-owm-night-501:before{content:\"\\f028\"}.wi-owm-night-502:before{content:\"\\f028\"}.wi-owm-night-503:before{content:\"\\f028\"}.wi-owm-night-504:before{content:\"\\f028\"}.wi-owm-night-511:before{content:\"\\f026\"}.wi-owm-night-520:before{content:\"\\f029\"}.wi-owm-night-521:before{content:\"\\f029\"}.wi-owm-night-522:before{content:\"\\f029\"}.wi-owm-night-531:before{content:\"\\f02c\"}.wi-owm-night-600:before{content:\"\\f02a\"}.wi-owm-night-601:before{content:\"\\f0b4\"}.wi-owm-night-602:before{content:\"\\f02a\"}.wi-owm-night-611:before{content:\"\\f026\"}.wi-owm-night-612:before{content:\"\\f026\"}.wi-owm-night-615:before{content:\"\\f026\"}.wi-owm-night-616:before{content:\"\\f026\"}.wi-owm-night-620:before{content:\"\\f026\"}.wi-owm-night-621:before{content:\"\\f02a\"}.wi-owm-night-622:before{content:\"\\f02a\"}.wi-owm-night-701:before{content:\"\\f04a\"}.wi-owm-night-711:before{content:\"\\f062\"}.wi-owm-night-721:before{content:\"\\f0b6\"}.wi-owm-night-731:before{content:\"\\f063\"}.wi-owm-night-741:before{content:\"\\f04a\"}.wi-owm-night-761:before{content:\"\\f063\"}.wi-owm-night-762:before{content:\"\\f063\"}.wi-owm-night-781:before{content:\"\\f056\"}.wi-owm-night-800:before{content:\"\\f02e\"}.wi-owm-night-801:before{content:\"\\f081\"}.wi-owm-night-802:before{content:\"\\f086\"}.wi-owm-night-803:before{content:\"\\f013\"}.wi-owm-night-804:before{content:\"\\f013\"}.wi-owm-night-900:before{content:\"\\f056\"}.wi-owm-night-902:before{content:\"\\f073\"}.wi-owm-night-903:before{content:\"\\f076\"}.wi-owm-night-904:before{content:\"\\f072\"}.wi-owm-night-906:before{content:\"\\f024\"}.wi-owm-night-957:before{content:\"\\f050\"}.wi-wu-chanceflurries:before{content:\"\\f064\"}.wi-wu-chancerain:before{content:\"\\f019\"}.wi-wu-chancesleat:before{content:\"\\f0b5\"}.wi-wu-chancesnow:before{content:\"\\f01b\"}.wi-wu-chancetstorms:before{content:\"\\f01e\"}.wi-wu-clear:before{content:\"\\f00d\"}.wi-wu-cloudy:before{content:\"\\f002\"}.wi-wu-flurries:before{content:\"\\f064\"}.wi-wu-hazy:before{content:\"\\f0b6\"}.wi-wu-mostlycloudy:before{content:\"\\f002\"}.wi-wu-mostlysunny:before{content:\"\\f00d\"}.wi-wu-partlycloudy:before{content:\"\\f002\"}.wi-wu-partlysunny:before{content:\"\\f00d\"}.wi-wu-rain:before{content:\"\\f01a\"}.wi-wu-sleat:before{content:\"\\f0b5\"}.wi-wu-snow:before{content:\"\\f01b\"}.wi-wu-sunny:before{content:\"\\f00d\"}.wi-wu-tstorms:before{content:\"\\f01e\"}.wi-wu-unknown:before{content:\"\\f00d\"}/*# sourceMappingURL=weather-icons.min.css.map */", "",{"version":3,"sources":["webpack://./src/weather-icons.min.css"],"names":[],"mappings":"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C,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,mBAAmB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,yBAAyB,eAAe,CAAC,6BAA6B,eAAe,CAAC,yBAAyB,eAAe,CAAC,0BAA0B,eAAe,CAAC,yBAAyB,eAAe,CAAC,4BAA4B,eAAe,CAAC,oBAAoB,eAAe,CAAC,qBAAqB,eAAe,CAAC,uBAAuB,eAAe,CAAC,mBAAmB,eAAe,CAAC,2BAA2B,eAAe,CAAC,0BAA0B,eAAe,CAAC,2BAA2B,eAAe,CAAC,0BAA0B,eAAe,CAAC,mBAAmB,eAAe,CAAC,oBAAoB,eAAe,CAAC,mBAAmB,eAAe,CAAC,oBAAoB,eAAe,CAAC,sBAAsB,eAAe,CAAC,sBAAsB,eAAe,CAAC,gDAAgD","sourcesContent":["/*!\n *  Weather Icons 2.0.10\n *  Updated November 1, 2020\n *  Weather themed icons for Bootstrap\n *  Author - Erik Flowers - erik@helloerik.com\n *  Email: erik@helloerik.com\n *  Twitter: http://twitter.com/Erik_UX\n *  ------------------------------------------------------------------------------\n *  Maintained at http://erikflowers.github.io/weather-icons\n *\n *  License\n *  ------------------------------------------------------------------------------\n *  - Font licensed under SIL OFL 1.1 -\n *    http://scripts.sil.org/OFL\n *  - CSS, SCSS and LESS are licensed under MIT License -\n *    http://opensource.org/licenses/mit-license.html\n *  - Documentation licensed under CC BY 3.0 -\n *    http://creativecommons.org/licenses/by/3.0/\n *  - Inspired by and works great as a companion with Font Awesome\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\n */@font-face{font-family:'weathericons';src:url('./assets/font/weathericons-regular-webfont.eot');src:url('./assets/font/weathericons-regular-webfont.eot?#iefix') format('embedded-opentype'),url('./assets/font/weathericons-regular-webfont.woff2') format('woff2'),url('./assets/font/weathericons-regular-webfont.woff') format('woff'),url('./assets/font/weathericons-regular-webfont.ttf') format('truetype'),url('./assets/font/weathericons-regular-webfont.svg#weather_iconsregular') format('svg');font-weight:normal;font-style:normal}.wi{display:inline-block;font-family:'weathericons';font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.wi-fw{text-align:center;width:1.4em}.wi-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.wi-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.wi-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.wi-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.wi-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}.wi-day-sunny:before{content:\"\\f00d\"}.wi-day-cloudy:before{content:\"\\f002\"}.wi-day-cloudy-gusts:before{content:\"\\f000\"}.wi-day-cloudy-windy:before{content:\"\\f001\"}.wi-day-fog:before{content:\"\\f003\"}.wi-day-hail:before{content:\"\\f004\"}.wi-day-haze:before{content:\"\\f0b6\"}.wi-day-lightning:before{content:\"\\f005\"}.wi-day-rain:before{content:\"\\f008\"}.wi-day-rain-mix:before{content:\"\\f006\"}.wi-day-rain-wind:before{content:\"\\f007\"}.wi-day-showers:before{content:\"\\f009\"}.wi-day-sleet:before{content:\"\\f0b2\"}.wi-day-sleet-storm:before{content:\"\\f068\"}.wi-day-snow:before{content:\"\\f00a\"}.wi-day-snow-thunderstorm:before{content:\"\\f06b\"}.wi-day-snow-wind:before{content:\"\\f065\"}.wi-day-sprinkle:before{content:\"\\f00b\"}.wi-day-storm-showers:before{content:\"\\f00e\"}.wi-day-sunny-overcast:before{content:\"\\f00c\"}.wi-day-thunderstorm:before{content:\"\\f010\"}.wi-day-windy:before{content:\"\\f085\"}.wi-solar-eclipse:before{content:\"\\f06e\"}.wi-hot:before{content:\"\\f072\"}.wi-day-cloudy-high:before{content:\"\\f07d\"}.wi-day-light-wind:before{content:\"\\f0c4\"}.wi-night-clear:before{content:\"\\f02e\"}.wi-night-alt-cloudy:before{content:\"\\f086\"}.wi-night-alt-cloudy-gusts:before{content:\"\\f022\"}.wi-night-alt-cloudy-windy:before{content:\"\\f023\"}.wi-night-alt-hail:before{content:\"\\f024\"}.wi-night-alt-lightning:before{content:\"\\f025\"}.wi-night-alt-rain:before{content:\"\\f028\"}.wi-night-alt-rain-mix:before{content:\"\\f026\"}.wi-night-alt-rain-wind:before{content:\"\\f027\"}.wi-night-alt-showers:before{content:\"\\f029\"}.wi-night-alt-sleet:before{content:\"\\f0b4\"}.wi-night-alt-sleet-storm:before{content:\"\\f06a\"}.wi-night-alt-snow:before{content:\"\\f02a\"}.wi-night-alt-snow-thunderstorm:before{content:\"\\f06d\"}.wi-night-alt-snow-wind:before{content:\"\\f067\"}.wi-night-alt-sprinkle:before{content:\"\\f02b\"}.wi-night-alt-storm-showers:before{content:\"\\f02c\"}.wi-night-alt-thunderstorm:before{content:\"\\f02d\"}.wi-night-cloudy:before{content:\"\\f031\"}.wi-night-cloudy-gusts:before{content:\"\\f02f\"}.wi-night-cloudy-windy:before{content:\"\\f030\"}.wi-night-fog:before{content:\"\\f04a\"}.wi-night-hail:before{content:\"\\f032\"}.wi-night-lightning:before{content:\"\\f033\"}.wi-night-partly-cloudy:before{content:\"\\f083\"}.wi-night-rain:before{content:\"\\f036\"}.wi-night-rain-mix:before{content:\"\\f034\"}.wi-night-rain-wind:before{content:\"\\f035\"}.wi-night-showers:before{content:\"\\f037\"}.wi-night-sleet:before{content:\"\\f0b3\"}.wi-night-sleet-storm:before{content:\"\\f069\"}.wi-night-snow:before{content:\"\\f038\"}.wi-night-snow-thunderstorm:before{content:\"\\f06c\"}.wi-night-snow-wind:before{content:\"\\f066\"}.wi-night-sprinkle:before{content:\"\\f039\"}.wi-night-storm-showers:before{content:\"\\f03a\"}.wi-night-thunderstorm:before{content:\"\\f03b\"}.wi-lunar-eclipse:before{content:\"\\f070\"}.wi-stars:before{content:\"\\f077\"}.wi-storm-showers:before{content:\"\\f01d\"}.wi-thunderstorm:before{content:\"\\f01e\"}.wi-night-alt-cloudy-high:before{content:\"\\f07e\"}.wi-night-cloudy-high:before{content:\"\\f080\"}.wi-night-alt-partly-cloudy:before{content:\"\\f081\"}.wi-cloud:before{content:\"\\f041\"}.wi-cloudy:before{content:\"\\f013\"}.wi-cloudy-gusts:before{content:\"\\f011\"}.wi-cloudy-windy:before{content:\"\\f012\"}.wi-fog:before{content:\"\\f014\"}.wi-hail:before{content:\"\\f015\"}.wi-rain:before{content:\"\\f019\"}.wi-rain-mix:before{content:\"\\f017\"}.wi-rain-wind:before{content:\"\\f018\"}.wi-showers:before{content:\"\\f01a\"}.wi-sleet:before{content:\"\\f0b5\"}.wi-snow:before{content:\"\\f01b\"}.wi-sprinkle:before{content:\"\\f01c\"}.wi-storm-showers:before{content:\"\\f01d\"}.wi-thunderstorm:before{content:\"\\f01e\"}.wi-snow-wind:before{content:\"\\f064\"}.wi-snow:before{content:\"\\f01b\"}.wi-smog:before{content:\"\\f074\"}.wi-smoke:before{content:\"\\f062\"}.wi-lightning:before{content:\"\\f016\"}.wi-raindrops:before{content:\"\\f04e\"}.wi-raindrop:before{content:\"\\f078\"}.wi-dust:before{content:\"\\f063\"}.wi-snowflake-cold:before{content:\"\\f076\"}.wi-windy:before{content:\"\\f021\"}.wi-strong-wind:before{content:\"\\f050\"}.wi-sandstorm:before{content:\"\\f082\"}.wi-earthquake:before{content:\"\\f0c6\"}.wi-fire:before{content:\"\\f0c7\"}.wi-flood:before{content:\"\\f07c\"}.wi-meteor:before{content:\"\\f071\"}.wi-tsunami:before{content:\"\\f0c5\"}.wi-volcano:before{content:\"\\f0c8\"}.wi-hurricane:before{content:\"\\f073\"}.wi-tornado:before{content:\"\\f056\"}.wi-small-craft-advisory:before{content:\"\\f0cc\"}.wi-gale-warning:before{content:\"\\f0cd\"}.wi-storm-warning:before{content:\"\\f0ce\"}.wi-hurricane-warning:before{content:\"\\f0cf\"}.wi-wind-direction:before{content:\"\\f0b1\"}.wi-alien:before{content:\"\\f075\"}.wi-celsius:before{content:\"\\f03c\"}.wi-fahrenheit:before{content:\"\\f045\"}.wi-degrees:before{content:\"\\f042\"}.wi-thermometer:before{content:\"\\f055\"}.wi-thermometer-exterior:before{content:\"\\f053\"}.wi-thermometer-internal:before{content:\"\\f054\"}.wi-cloud-down:before{content:\"\\f03d\"}.wi-cloud-up:before{content:\"\\f040\"}.wi-cloud-refresh:before{content:\"\\f03e\"}.wi-horizon:before{content:\"\\f047\"}.wi-horizon-alt:before{content:\"\\f046\"}.wi-sunrise:before{content:\"\\f051\"}.wi-sunset:before{content:\"\\f052\"}.wi-moonrise:before{content:\"\\f0c9\"}.wi-moonset:before{content:\"\\f0ca\"}.wi-refresh:before{content:\"\\f04c\"}.wi-refresh-alt:before{content:\"\\f04b\"}.wi-umbrella:before{content:\"\\f084\"}.wi-barometer:before{content:\"\\f079\"}.wi-humidity:before{content:\"\\f07a\"}.wi-na:before{content:\"\\f07b\"}.wi-train:before{content:\"\\f0cb\"}.wi-moon-new:before{content:\"\\f095\"}.wi-moon-waxing-crescent-1:before{content:\"\\f096\"}.wi-moon-waxing-crescent-2:before{content:\"\\f097\"}.wi-moon-waxing-crescent-3:before{content:\"\\f098\"}.wi-moon-waxing-crescent-4:before{content:\"\\f099\"}.wi-moon-waxing-crescent-5:before{content:\"\\f09a\"}.wi-moon-waxing-crescent-6:before{content:\"\\f09b\"}.wi-moon-first-quarter:before{content:\"\\f09c\"}.wi-moon-waxing-gibbous-1:before{content:\"\\f09d\"}.wi-moon-waxing-gibbous-2:before{content:\"\\f09e\"}.wi-moon-waxing-gibbous-3:before{content:\"\\f09f\"}.wi-moon-waxing-gibbous-4:before{content:\"\\f0a0\"}.wi-moon-waxing-gibbous-5:before{content:\"\\f0a1\"}.wi-moon-waxing-gibbous-6:before{content:\"\\f0a2\"}.wi-moon-full:before{content:\"\\f0a3\"}.wi-moon-waning-gibbous-1:before{content:\"\\f0a4\"}.wi-moon-waning-gibbous-2:before{content:\"\\f0a5\"}.wi-moon-waning-gibbous-3:before{content:\"\\f0a6\"}.wi-moon-waning-gibbous-4:before{content:\"\\f0a7\"}.wi-moon-waning-gibbous-5:before{content:\"\\f0a8\"}.wi-moon-waning-gibbous-6:before{content:\"\\f0a9\"}.wi-moon-third-quarter:before{content:\"\\f0aa\"}.wi-moon-waning-crescent-1:before{content:\"\\f0ab\"}.wi-moon-waning-crescent-2:before{content:\"\\f0ac\"}.wi-moon-waning-crescent-3:before{content:\"\\f0ad\"}.wi-moon-waning-crescent-4:before{content:\"\\f0ae\"}.wi-moon-waning-crescent-5:before{content:\"\\f0af\"}.wi-moon-waning-crescent-6:before{content:\"\\f0b0\"}.wi-moon-alt-new:before{content:\"\\f0eb\"}.wi-moon-alt-waxing-crescent-1:before{content:\"\\f0d0\"}.wi-moon-alt-waxing-crescent-2:before{content:\"\\f0d1\"}.wi-moon-alt-waxing-crescent-3:before{content:\"\\f0d2\"}.wi-moon-alt-waxing-crescent-4:before{content:\"\\f0d3\"}.wi-moon-alt-waxing-crescent-5:before{content:\"\\f0d4\"}.wi-moon-alt-waxing-crescent-6:before{content:\"\\f0d5\"}.wi-moon-alt-first-quarter:before{content:\"\\f0d6\"}.wi-moon-alt-waxing-gibbous-1:before{content:\"\\f0d7\"}.wi-moon-alt-waxing-gibbous-2:before{content:\"\\f0d8\"}.wi-moon-alt-waxing-gibbous-3:before{content:\"\\f0d9\"}.wi-moon-alt-waxing-gibbous-4:before{content:\"\\f0da\"}.wi-moon-alt-waxing-gibbous-5:before{content:\"\\f0db\"}.wi-moon-alt-waxing-gibbous-6:before{content:\"\\f0dc\"}.wi-moon-alt-full:before{content:\"\\f0dd\"}.wi-moon-alt-waning-gibbous-1:before{content:\"\\f0de\"}.wi-moon-alt-waning-gibbous-2:before{content:\"\\f0df\"}.wi-moon-alt-waning-gibbous-3:before{content:\"\\f0e0\"}.wi-moon-alt-waning-gibbous-4:before{content:\"\\f0e1\"}.wi-moon-alt-waning-gibbous-5:before{content:\"\\f0e2\"}.wi-moon-alt-waning-gibbous-6:before{content:\"\\f0e3\"}.wi-moon-alt-third-quarter:before{content:\"\\f0e4\"}.wi-moon-alt-waning-crescent-1:before{content:\"\\f0e5\"}.wi-moon-alt-waning-crescent-2:before{content:\"\\f0e6\"}.wi-moon-alt-waning-crescent-3:before{content:\"\\f0e7\"}.wi-moon-alt-waning-crescent-4:before{content:\"\\f0e8\"}.wi-moon-alt-waning-crescent-5:before{content:\"\\f0e9\"}.wi-moon-alt-waning-crescent-6:before{content:\"\\f0ea\"}.wi-moon-0:before{content:\"\\f095\"}.wi-moon-1:before{content:\"\\f096\"}.wi-moon-2:before{content:\"\\f097\"}.wi-moon-3:before{content:\"\\f098\"}.wi-moon-4:before{content:\"\\f099\"}.wi-moon-5:before{content:\"\\f09a\"}.wi-moon-6:before{content:\"\\f09b\"}.wi-moon-7:before{content:\"\\f09c\"}.wi-moon-8:before{content:\"\\f09d\"}.wi-moon-9:before{content:\"\\f09e\"}.wi-moon-10:before{content:\"\\f09f\"}.wi-moon-11:before{content:\"\\f0a0\"}.wi-moon-12:before{content:\"\\f0a1\"}.wi-moon-13:before{content:\"\\f0a2\"}.wi-moon-14:before{content:\"\\f0a3\"}.wi-moon-15:before{content:\"\\f0a4\"}.wi-moon-16:before{content:\"\\f0a5\"}.wi-moon-17:before{content:\"\\f0a6\"}.wi-moon-18:before{content:\"\\f0a7\"}.wi-moon-19:before{content:\"\\f0a8\"}.wi-moon-20:before{content:\"\\f0a9\"}.wi-moon-21:before{content:\"\\f0aa\"}.wi-moon-22:before{content:\"\\f0ab\"}.wi-moon-23:before{content:\"\\f0ac\"}.wi-moon-24:before{content:\"\\f0ad\"}.wi-moon-25:before{content:\"\\f0ae\"}.wi-moon-26:before{content:\"\\f0af\"}.wi-moon-27:before{content:\"\\f0b0\"}.wi-time-1:before{content:\"\\f08a\"}.wi-time-2:before{content:\"\\f08b\"}.wi-time-3:before{content:\"\\f08c\"}.wi-time-4:before{content:\"\\f08d\"}.wi-time-5:before{content:\"\\f08e\"}.wi-time-6:before{content:\"\\f08f\"}.wi-time-7:before{content:\"\\f090\"}.wi-time-8:before{content:\"\\f091\"}.wi-time-9:before{content:\"\\f092\"}.wi-time-10:before{content:\"\\f093\"}.wi-time-11:before{content:\"\\f094\"}.wi-time-12:before{content:\"\\f089\"}.wi-direction-up:before{content:\"\\f058\"}.wi-direction-up-right:before{content:\"\\f057\"}.wi-direction-right:before{content:\"\\f04d\"}.wi-direction-down-right:before{content:\"\\f088\"}.wi-direction-down:before{content:\"\\f044\"}.wi-direction-down-left:before{content:\"\\f043\"}.wi-direction-left:before{content:\"\\f048\"}.wi-direction-up-left:before{content:\"\\f087\"}.wi-wind-beaufort-0:before{content:\"\\f0b7\"}.wi-wind-beaufort-1:before{content:\"\\f0b8\"}.wi-wind-beaufort-2:before{content:\"\\f0b9\"}.wi-wind-beaufort-3:before{content:\"\\f0ba\"}.wi-wind-beaufort-4:before{content:\"\\f0bb\"}.wi-wind-beaufort-5:before{content:\"\\f0bc\"}.wi-wind-beaufort-6:before{content:\"\\f0bd\"}.wi-wind-beaufort-7:before{content:\"\\f0be\"}.wi-wind-beaufort-8:before{content:\"\\f0bf\"}.wi-wind-beaufort-9:before{content:\"\\f0c0\"}.wi-wind-beaufort-10:before{content:\"\\f0c1\"}.wi-wind-beaufort-11:before{content:\"\\f0c2\"}.wi-wind-beaufort-12:before{content:\"\\f0c3\"}.wi-yahoo-0:before{content:\"\\f056\"}.wi-yahoo-1:before{content:\"\\f00e\"}.wi-yahoo-2:before{content:\"\\f073\"}.wi-yahoo-3:before{content:\"\\f01e\"}.wi-yahoo-4:before{content:\"\\f01e\"}.wi-yahoo-5:before{content:\"\\f017\"}.wi-yahoo-6:before{content:\"\\f017\"}.wi-yahoo-7:before{content:\"\\f017\"}.wi-yahoo-8:before{content:\"\\f015\"}.wi-yahoo-9:before{content:\"\\f01a\"}.wi-yahoo-10:before{content:\"\\f015\"}.wi-yahoo-11:before{content:\"\\f01a\"}.wi-yahoo-12:before{content:\"\\f01a\"}.wi-yahoo-13:before{content:\"\\f01b\"}.wi-yahoo-14:before{content:\"\\f00a\"}.wi-yahoo-15:before{content:\"\\f064\"}.wi-yahoo-16:before{content:\"\\f01b\"}.wi-yahoo-17:before{content:\"\\f015\"}.wi-yahoo-18:before{content:\"\\f017\"}.wi-yahoo-19:before{content:\"\\f063\"}.wi-yahoo-20:before{content:\"\\f014\"}.wi-yahoo-21:before{content:\"\\f021\"}.wi-yahoo-22:before{content:\"\\f062\"}.wi-yahoo-23:before{content:\"\\f050\"}.wi-yahoo-24:before{content:\"\\f050\"}.wi-yahoo-25:before{content:\"\\f076\"}.wi-yahoo-26:before{content:\"\\f013\"}.wi-yahoo-27:before{content:\"\\f031\"}.wi-yahoo-28:before{content:\"\\f002\"}.wi-yahoo-29:before{content:\"\\f031\"}.wi-yahoo-30:before{content:\"\\f002\"}.wi-yahoo-31:before{content:\"\\f02e\"}.wi-yahoo-32:before{content:\"\\f00d\"}.wi-yahoo-33:before{content:\"\\f083\"}.wi-yahoo-34:before{content:\"\\f00c\"}.wi-yahoo-35:before{content:\"\\f017\"}.wi-yahoo-36:before{content:\"\\f072\"}.wi-yahoo-37:before{content:\"\\f00e\"}.wi-yahoo-38:before{content:\"\\f00e\"}.wi-yahoo-39:before{content:\"\\f00e\"}.wi-yahoo-40:before{content:\"\\f01a\"}.wi-yahoo-41:before{content:\"\\f064\"}.wi-yahoo-42:before{content:\"\\f01b\"}.wi-yahoo-43:before{content:\"\\f064\"}.wi-yahoo-44:before{content:\"\\f00c\"}.wi-yahoo-45:before{content:\"\\f00e\"}.wi-yahoo-46:before{content:\"\\f01b\"}.wi-yahoo-47:before{content:\"\\f00e\"}.wi-yahoo-3200:before{content:\"\\f077\"}.wi-forecast-io-clear-day:before{content:\"\\f00d\"}.wi-forecast-io-clear-night:before{content:\"\\f02e\"}.wi-forecast-io-rain:before{content:\"\\f019\"}.wi-forecast-io-snow:before{content:\"\\f01b\"}.wi-forecast-io-sleet:before{content:\"\\f0b5\"}.wi-forecast-io-wind:before{content:\"\\f050\"}.wi-forecast-io-fog:before{content:\"\\f014\"}.wi-forecast-io-cloudy:before{content:\"\\f013\"}.wi-forecast-io-partly-cloudy-day:before{content:\"\\f002\"}.wi-forecast-io-partly-cloudy-night:before{content:\"\\f031\"}.wi-forecast-io-hail:before{content:\"\\f015\"}.wi-forecast-io-thunderstorm:before{content:\"\\f01e\"}.wi-forecast-io-tornado:before{content:\"\\f056\"}.wi-wmo4680-0:before,.wi-wmo4680-00:before{content:\"\\f055\"}.wi-wmo4680-1:before,.wi-wmo4680-01:before{content:\"\\f013\"}.wi-wmo4680-2:before,.wi-wmo4680-02:before{content:\"\\f055\"}.wi-wmo4680-3:before,.wi-wmo4680-03:before{content:\"\\f013\"}.wi-wmo4680-4:before,.wi-wmo4680-04:before{content:\"\\f014\"}.wi-wmo4680-5:before,.wi-wmo4680-05:before{content:\"\\f014\"}.wi-wmo4680-10:before{content:\"\\f014\"}.wi-wmo4680-11:before{content:\"\\f014\"}.wi-wmo4680-12:before{content:\"\\f016\"}.wi-wmo4680-18:before{content:\"\\f050\"}.wi-wmo4680-20:before{content:\"\\f014\"}.wi-wmo4680-21:before{content:\"\\f017\"}.wi-wmo4680-22:before{content:\"\\f017\"}.wi-wmo4680-23:before{content:\"\\f019\"}.wi-wmo4680-24:before{content:\"\\f01b\"}.wi-wmo4680-25:before{content:\"\\f015\"}.wi-wmo4680-26:before{content:\"\\f01e\"}.wi-wmo4680-27:before{content:\"\\f063\"}.wi-wmo4680-28:before{content:\"\\f063\"}.wi-wmo4680-29:before{content:\"\\f063\"}.wi-wmo4680-30:before{content:\"\\f014\"}.wi-wmo4680-31:before{content:\"\\f014\"}.wi-wmo4680-32:before{content:\"\\f014\"}.wi-wmo4680-33:before{content:\"\\f014\"}.wi-wmo4680-34:before{content:\"\\f014\"}.wi-wmo4680-35:before{content:\"\\f014\"}.wi-wmo4680-40:before{content:\"\\f017\"}.wi-wmo4680-41:before{content:\"\\f01c\"}.wi-wmo4680-42:before{content:\"\\f019\"}.wi-wmo4680-43:before{content:\"\\f01c\"}.wi-wmo4680-44:before{content:\"\\f019\"}.wi-wmo4680-45:before{content:\"\\f015\"}.wi-wmo4680-46:before{content:\"\\f015\"}.wi-wmo4680-47:before{content:\"\\f01b\"}.wi-wmo4680-48:before{content:\"\\f01b\"}.wi-wmo4680-50:before{content:\"\\f01c\"}.wi-wmo4680-51:before{content:\"\\f01c\"}.wi-wmo4680-52:before{content:\"\\f019\"}.wi-wmo4680-53:before{content:\"\\f019\"}.wi-wmo4680-54:before{content:\"\\f076\"}.wi-wmo4680-55:before{content:\"\\f076\"}.wi-wmo4680-56:before{content:\"\\f076\"}.wi-wmo4680-57:before{content:\"\\f01c\"}.wi-wmo4680-58:before{content:\"\\f019\"}.wi-wmo4680-60:before{content:\"\\f01c\"}.wi-wmo4680-61:before{content:\"\\f01c\"}.wi-wmo4680-62:before{content:\"\\f019\"}.wi-wmo4680-63:before{content:\"\\f019\"}.wi-wmo4680-64:before{content:\"\\f015\"}.wi-wmo4680-65:before{content:\"\\f015\"}.wi-wmo4680-66:before{content:\"\\f015\"}.wi-wmo4680-67:before{content:\"\\f017\"}.wi-wmo4680-68:before{content:\"\\f017\"}.wi-wmo4680-70:before{content:\"\\f01b\"}.wi-wmo4680-71:before{content:\"\\f01b\"}.wi-wmo4680-72:before{content:\"\\f01b\"}.wi-wmo4680-73:before{content:\"\\f01b\"}.wi-wmo4680-74:before{content:\"\\f076\"}.wi-wmo4680-75:before{content:\"\\f076\"}.wi-wmo4680-76:before{content:\"\\f076\"}.wi-wmo4680-77:before{content:\"\\f01b\"}.wi-wmo4680-78:before{content:\"\\f076\"}.wi-wmo4680-80:before{content:\"\\f019\"}.wi-wmo4680-81:before{content:\"\\f01c\"}.wi-wmo4680-82:before{content:\"\\f019\"}.wi-wmo4680-83:before{content:\"\\f019\"}.wi-wmo4680-84:before{content:\"\\f01d\"}.wi-wmo4680-85:before{content:\"\\f017\"}.wi-wmo4680-86:before{content:\"\\f017\"}.wi-wmo4680-87:before{content:\"\\f017\"}.wi-wmo4680-89:before{content:\"\\f015\"}.wi-wmo4680-90:before{content:\"\\f016\"}.wi-wmo4680-91:before{content:\"\\f01d\"}.wi-wmo4680-92:before{content:\"\\f01e\"}.wi-wmo4680-93:before{content:\"\\f01e\"}.wi-wmo4680-94:before{content:\"\\f016\"}.wi-wmo4680-95:before{content:\"\\f01e\"}.wi-wmo4680-96:before{content:\"\\f01e\"}.wi-wmo4680-99:before{content:\"\\f056\"}.wi-owm-200:before{content:\"\\f01e\"}.wi-owm-201:before{content:\"\\f01e\"}.wi-owm-202:before{content:\"\\f01e\"}.wi-owm-210:before{content:\"\\f016\"}.wi-owm-211:before{content:\"\\f016\"}.wi-owm-212:before{content:\"\\f016\"}.wi-owm-221:before{content:\"\\f016\"}.wi-owm-230:before{content:\"\\f01e\"}.wi-owm-231:before{content:\"\\f01e\"}.wi-owm-232:before{content:\"\\f01e\"}.wi-owm-300:before{content:\"\\f01c\"}.wi-owm-301:before{content:\"\\f01c\"}.wi-owm-302:before{content:\"\\f019\"}.wi-owm-310:before{content:\"\\f017\"}.wi-owm-311:before{content:\"\\f019\"}.wi-owm-312:before{content:\"\\f019\"}.wi-owm-313:before{content:\"\\f01a\"}.wi-owm-314:before{content:\"\\f019\"}.wi-owm-321:before{content:\"\\f01c\"}.wi-owm-500:before{content:\"\\f01c\"}.wi-owm-501:before{content:\"\\f019\"}.wi-owm-502:before{content:\"\\f019\"}.wi-owm-503:before{content:\"\\f019\"}.wi-owm-504:before{content:\"\\f019\"}.wi-owm-511:before{content:\"\\f017\"}.wi-owm-520:before{content:\"\\f01a\"}.wi-owm-521:before{content:\"\\f01a\"}.wi-owm-522:before{content:\"\\f01a\"}.wi-owm-531:before{content:\"\\f01d\"}.wi-owm-600:before{content:\"\\f01b\"}.wi-owm-601:before{content:\"\\f01b\"}.wi-owm-602:before{content:\"\\f0b5\"}.wi-owm-611:before{content:\"\\f017\"}.wi-owm-612:before{content:\"\\f017\"}.wi-owm-615:before{content:\"\\f017\"}.wi-owm-616:before{content:\"\\f017\"}.wi-owm-620:before{content:\"\\f017\"}.wi-owm-621:before{content:\"\\f01b\"}.wi-owm-622:before{content:\"\\f01b\"}.wi-owm-701:before{content:\"\\f014\"}.wi-owm-711:before{content:\"\\f062\"}.wi-owm-721:before{content:\"\\f0b6\"}.wi-owm-731:before{content:\"\\f063\"}.wi-owm-741:before{content:\"\\f014\"}.wi-owm-761:before{content:\"\\f063\"}.wi-owm-762:before{content:\"\\f063\"}.wi-owm-771:before{content:\"\\f011\"}.wi-owm-781:before{content:\"\\f056\"}.wi-owm-800:before{content:\"\\f00d\"}.wi-owm-801:before{content:\"\\f041\"}.wi-owm-802:before{content:\"\\f041\"}.wi-owm-803:before{content:\"\\f013\"}.wi-owm-804:before{content:\"\\f013\"}.wi-owm-900:before{content:\"\\f056\"}.wi-owm-901:before{content:\"\\f01d\"}.wi-owm-902:before{content:\"\\f073\"}.wi-owm-903:before{content:\"\\f076\"}.wi-owm-904:before{content:\"\\f072\"}.wi-owm-905:before{content:\"\\f021\"}.wi-owm-906:before{content:\"\\f015\"}.wi-owm-957:before{content:\"\\f050\"}.wi-owm-day-200:before{content:\"\\f010\"}.wi-owm-day-201:before{content:\"\\f010\"}.wi-owm-day-202:before{content:\"\\f010\"}.wi-owm-day-210:before{content:\"\\f005\"}.wi-owm-day-211:before{content:\"\\f005\"}.wi-owm-day-212:before{content:\"\\f005\"}.wi-owm-day-221:before{content:\"\\f005\"}.wi-owm-day-230:before{content:\"\\f010\"}.wi-owm-day-231:before{content:\"\\f010\"}.wi-owm-day-232:before{content:\"\\f010\"}.wi-owm-day-300:before{content:\"\\f00b\"}.wi-owm-day-301:before{content:\"\\f00b\"}.wi-owm-day-302:before{content:\"\\f008\"}.wi-owm-day-310:before{content:\"\\f008\"}.wi-owm-day-311:before{content:\"\\f008\"}.wi-owm-day-312:before{content:\"\\f008\"}.wi-owm-day-313:before{content:\"\\f008\"}.wi-owm-day-314:before{content:\"\\f008\"}.wi-owm-day-321:before{content:\"\\f00b\"}.wi-owm-day-500:before{content:\"\\f00b\"}.wi-owm-day-501:before{content:\"\\f008\"}.wi-owm-day-502:before{content:\"\\f008\"}.wi-owm-day-503:before{content:\"\\f008\"}.wi-owm-day-504:before{content:\"\\f008\"}.wi-owm-day-511:before{content:\"\\f006\"}.wi-owm-day-520:before{content:\"\\f009\"}.wi-owm-day-521:before{content:\"\\f009\"}.wi-owm-day-522:before{content:\"\\f009\"}.wi-owm-day-531:before{content:\"\\f00e\"}.wi-owm-day-600:before{content:\"\\f00a\"}.wi-owm-day-601:before{content:\"\\f0b2\"}.wi-owm-day-602:before{content:\"\\f00a\"}.wi-owm-day-611:before{content:\"\\f006\"}.wi-owm-day-612:before{content:\"\\f006\"}.wi-owm-day-615:before{content:\"\\f006\"}.wi-owm-day-616:before{content:\"\\f006\"}.wi-owm-day-620:before{content:\"\\f006\"}.wi-owm-day-621:before{content:\"\\f00a\"}.wi-owm-day-622:before{content:\"\\f00a\"}.wi-owm-day-701:before{content:\"\\f003\"}.wi-owm-day-711:before{content:\"\\f062\"}.wi-owm-day-721:before{content:\"\\f0b6\"}.wi-owm-day-731:before{content:\"\\f063\"}.wi-owm-day-741:before{content:\"\\f003\"}.wi-owm-day-761:before{content:\"\\f063\"}.wi-owm-day-762:before{content:\"\\f063\"}.wi-owm-day-781:before{content:\"\\f056\"}.wi-owm-day-800:before{content:\"\\f00d\"}.wi-owm-day-801:before{content:\"\\f002\"}.wi-owm-day-802:before{content:\"\\f002\"}.wi-owm-day-803:before{content:\"\\f013\"}.wi-owm-day-804:before{content:\"\\f013\"}.wi-owm-day-900:before{content:\"\\f056\"}.wi-owm-day-902:before{content:\"\\f073\"}.wi-owm-day-903:before{content:\"\\f076\"}.wi-owm-day-904:before{content:\"\\f072\"}.wi-owm-day-906:before{content:\"\\f004\"}.wi-owm-day-957:before{content:\"\\f050\"}.wi-owm-night-200:before{content:\"\\f02d\"}.wi-owm-night-201:before{content:\"\\f02d\"}.wi-owm-night-202:before{content:\"\\f02d\"}.wi-owm-night-210:before{content:\"\\f025\"}.wi-owm-night-211:before{content:\"\\f025\"}.wi-owm-night-212:before{content:\"\\f025\"}.wi-owm-night-221:before{content:\"\\f025\"}.wi-owm-night-230:before{content:\"\\f02d\"}.wi-owm-night-231:before{content:\"\\f02d\"}.wi-owm-night-232:before{content:\"\\f02d\"}.wi-owm-night-300:before{content:\"\\f02b\"}.wi-owm-night-301:before{content:\"\\f02b\"}.wi-owm-night-302:before{content:\"\\f028\"}.wi-owm-night-310:before{content:\"\\f028\"}.wi-owm-night-311:before{content:\"\\f028\"}.wi-owm-night-312:before{content:\"\\f028\"}.wi-owm-night-313:before{content:\"\\f028\"}.wi-owm-night-314:before{content:\"\\f028\"}.wi-owm-night-321:before{content:\"\\f02b\"}.wi-owm-night-500:before{content:\"\\f02b\"}.wi-owm-night-501:before{content:\"\\f028\"}.wi-owm-night-502:before{content:\"\\f028\"}.wi-owm-night-503:before{content:\"\\f028\"}.wi-owm-night-504:before{content:\"\\f028\"}.wi-owm-night-511:before{content:\"\\f026\"}.wi-owm-night-520:before{content:\"\\f029\"}.wi-owm-night-521:before{content:\"\\f029\"}.wi-owm-night-522:before{content:\"\\f029\"}.wi-owm-night-531:before{content:\"\\f02c\"}.wi-owm-night-600:before{content:\"\\f02a\"}.wi-owm-night-601:before{content:\"\\f0b4\"}.wi-owm-night-602:before{content:\"\\f02a\"}.wi-owm-night-611:before{content:\"\\f026\"}.wi-owm-night-612:before{content:\"\\f026\"}.wi-owm-night-615:before{content:\"\\f026\"}.wi-owm-night-616:before{content:\"\\f026\"}.wi-owm-night-620:before{content:\"\\f026\"}.wi-owm-night-621:before{content:\"\\f02a\"}.wi-owm-night-622:before{content:\"\\f02a\"}.wi-owm-night-701:before{content:\"\\f04a\"}.wi-owm-night-711:before{content:\"\\f062\"}.wi-owm-night-721:before{content:\"\\f0b6\"}.wi-owm-night-731:before{content:\"\\f063\"}.wi-owm-night-741:before{content:\"\\f04a\"}.wi-owm-night-761:before{content:\"\\f063\"}.wi-owm-night-762:before{content:\"\\f063\"}.wi-owm-night-781:before{content:\"\\f056\"}.wi-owm-night-800:before{content:\"\\f02e\"}.wi-owm-night-801:before{content:\"\\f081\"}.wi-owm-night-802:before{content:\"\\f086\"}.wi-owm-night-803:before{content:\"\\f013\"}.wi-owm-night-804:before{content:\"\\f013\"}.wi-owm-night-900:before{content:\"\\f056\"}.wi-owm-night-902:before{content:\"\\f073\"}.wi-owm-night-903:before{content:\"\\f076\"}.wi-owm-night-904:before{content:\"\\f072\"}.wi-owm-night-906:before{content:\"\\f024\"}.wi-owm-night-957:before{content:\"\\f050\"}.wi-wu-chanceflurries:before{content:\"\\f064\"}.wi-wu-chancerain:before{content:\"\\f019\"}.wi-wu-chancesleat:before{content:\"\\f0b5\"}.wi-wu-chancesnow:before{content:\"\\f01b\"}.wi-wu-chancetstorms:before{content:\"\\f01e\"}.wi-wu-clear:before{content:\"\\f00d\"}.wi-wu-cloudy:before{content:\"\\f002\"}.wi-wu-flurries:before{content:\"\\f064\"}.wi-wu-hazy:before{content:\"\\f0b6\"}.wi-wu-mostlycloudy:before{content:\"\\f002\"}.wi-wu-mostlysunny:before{content:\"\\f00d\"}.wi-wu-partlycloudy:before{content:\"\\f002\"}.wi-wu-partlysunny:before{content:\"\\f00d\"}.wi-wu-rain:before{content:\"\\f01a\"}.wi-wu-sleat:before{content:\"\\f0b5\"}.wi-wu-snow:before{content:\"\\f01b\"}.wi-wu-sunny:before{content:\"\\f00d\"}.wi-wu-tstorms:before{content:\"\\f01e\"}.wi-wu-unknown:before{content:\"\\f00d\"}/*# sourceMappingURL=weather-icons.min.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fromUnixTime)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Number} unixTime - the given Unix timestamp (in seconds)
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyUnixTime);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(unixTime * 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/weather-icons.min.css":
/*!***********************************!*\
  !*** ./src/weather-icons.min.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weather_icons_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./weather-icons.min.css */ "./node_modules/css-loader/dist/cjs.js!./src/weather-icons.min.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weather_icons_min_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weather_icons_min_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_weather_icons_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_weather_icons_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/helpers/helper.js":
/*!*******************************!*\
  !*** ./src/helpers/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addChildren": () => (/* binding */ addChildren),
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "degree": () => (/* binding */ degree),
/* harmony export */   "getPreviousDayDT": () => (/* binding */ getPreviousDayDT),
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "removeChildren": () => (/* binding */ removeChildren)
/* harmony export */ });
const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((e) => {
      console.error(e);
    });

const degree = '°';

const addChildren = (container, childElArr) => {
  if (childElArr && childElArr.length > 0) {
    for (const el of childElArr) {
      container.appendChild(el);
    }
  }
};

const createContainer = (type = 'div', className, childElArr) => {
  const div = document.createElement(type);
  if(className) div.className = className;
  addChildren(div, childElArr);
  return div;
};

const removeChildren = (parentEl) => {
  while (parentEl.firstChild) {
    parentEl.removeChild(parentEl.firstChild);
  }
};

const getPreviousDayDT = () => {
  const date = new Date();
  return Math.floor(date.getTime() / 1000);
};


/***/ }),

/***/ "./src/modules/ForecastUI.js":
/*!***********************************!*\
  !*** ./src/modules/ForecastUI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/fromUnixTime/index.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./src/helpers/helper.js");



const ForecastUI = (Weather) => {
  const $forecast = document.querySelector('.forecast');
  const $location = document.querySelector('.location');
  const $smallDetail = document.querySelector('.small-details');
  const $currWeather = document.querySelector('.weather');
  const $hourly = document.querySelector('.hourly');

  const _createLocation = (city, date) => {
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.removeChildren)($location);
    const citySpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'city');
    const dateSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'date');

    citySpan.textContent = city;
    dateSpan.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date, 'd MMMM yyyy');
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.addChildren)($location, [citySpan, dateSpan]);
  };

  const _createSmallDetail = (date, temp, lowTemp, highTemp, feel) => {
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.removeChildren)($smallDetail);
    temp = Math.floor(temp);
    lowTemp = Math.floor(lowTemp);
    highTemp = Math.floor(highTemp);
    feel = Math.floor(feel);
    const daySpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'day');
    const timeSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'time');
    const lhSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'low-high');
    const tempSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'temp');
    const feelSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'feel');

    daySpan.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date, 'EEEE');
    timeSpan.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date, 'h:mmaaa');
    lhSpan.textContent = `H:${highTemp}${_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.degree} L:${lowTemp}${_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.degree}`;
    tempSpan.textContent = `${temp}${_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.degree}`;
    feelSpan.textContent = `Feels like: ${feel}${_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.degree}`;

    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.addChildren)($smallDetail, [daySpan, timeSpan, lhSpan, tempSpan, feelSpan]);
  };

  const _createCurrWeather = (conditionID, condition) => {
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.removeChildren)($currWeather);
    const icon = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('i', `wi wi-owm-${conditionID}`);
    const conditionSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'condition');
    conditionSpan.textContent = condition;
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.addChildren)($currWeather, [icon, conditionSpan]);
  };

  const _createHourlyForecast = (data) => {
    const TOTAL_CARDS = 11;
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.removeChildren)($hourly);
    const createCard = ({date, iconID, condition, temp, precipitationChance}) => {
      const timeSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span');
      const icon = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', `wi wi-owm-${iconID}`);
      const conditionSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'condition');
      const tempSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'temp');
      const rainSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'rain');

      timeSpan.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date, 'h:mmaaa');
      conditionSpan.textContent = condition;
      tempSpan.textContent = `${temp}${_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.degree}`;

      if (precipitationChance) {
        const chance = Math.floor(precipitationChance * 100);
        const raindropIcon = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('i', 'wi wi-raindrop');
        rainSpan.appendChild(raindropIcon);
        rainSpan.textContent = `${chance}%`;
      }
      return (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('div', 'card', [timeSpan, icon, conditionSpan, tempSpan, rainSpan]);
    };

    const cardArr = [];
    for (let i = 1; i <= TOTAL_CARDS; i++) {
      const {dt, temp, weather, pop} = data[i];
      const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(dt);
      const iconID = weather[0]?.id;
      const condition = weather[0]?.description;
      cardArr.push(createCard({date, temp, iconID, condition, precipitationChance: pop}));
    }

    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.addChildren)($hourly, cardArr);
  };

  const _render = () => {
    const currWeather = Weather.data.current;
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(currWeather.dt);
    const daily = Weather.data.daily;
    const todayMinTemp = daily[0].temp.min;
    const todayMaxTemp = daily[0].temp.max;
    const iconID = currWeather.weather[0].id;
    const condition = currWeather.weather[0].description;

    _createLocation(Weather.name, date);
    _createSmallDetail(date, currWeather.temp, todayMinTemp, todayMaxTemp, currWeather.feels_like);
    _createCurrWeather(iconID, condition);
    _createHourlyForecast(Weather.data.hourly);
  };

  const setData = (newWeather) => {
    Weather = newWeather;
    _render();
  };

  _render();

  return {
    setData,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForecastUI);


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/modules/weather.js");
/* harmony import */ var _weatherController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherController */ "./src/modules/weatherController.js");
/* harmony import */ var _ForecastUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForecastUI */ "./src/modules/ForecastUI.js");




const main = () => {
  const degree = '°';
  const lat = 40.73061;
  const lon = -73.935242;

  // const data = await weatherController.getData(lat, lon)
  // localStorage.setItem('weather', JSON.stringify(data));

  const data = JSON.parse(localStorage.getItem('weather'));

  const weather = (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])('New York City', 'United States', data);

  const forecast = (0,_ForecastUI__WEBPACK_IMPORTED_MODULE_2__["default"])(weather);

  console.log(data);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);


/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Weather = (name, country, data) =>{
  return {name, country, data};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);

/***/ }),

/***/ "./src/modules/weatherController.js":
/*!******************************************!*\
  !*** ./src/modules/weatherController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./src/helpers/helper.js");


const FREE = '17c0775075508ec49f2913ca7f02bf44';
const GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/direct?appid=${FREE}`;
const ONE_CALL_URL = `https://api.openweathermap.org/data/2.5/onecall?appid=${FREE}&units=metric`;
const ONE_CALL_HIST_URL = `https://api.openweathermap.org/data/2.5/onecall/timemachine?appid=${FREE}&units=metric`;

const WeatherController = (() => {
  const geocodeUnsafe = async (q, limit = 5) => {
    if (!q) return;
    let url = GEOCODING_URL;
    url += `&limit=${limit}`;
    url += `&q=${q}`;

    const dataResponse = await fetch(url, {mode: 'cors'});
    const {name, country, state} = await dataResponse.json();

    return {name, country, state, lat, lon};
  };

  const getDataUnsafe = async (lat, lon, units = 'metric', exclude = 'minutely,alerts') => {
    if (!lat || !lon) return;
    const url = `${ONE_CALL_URL}&lat=${lat}&lon=${lon}&units=${units}&exclude=${exclude}`;
    let dataResponse = await fetch(url, {mode: 'cors'});
    const currData = await dataResponse.json();

    const histURL = `${ONE_CALL_HIST_URL}&lat=${lat}&lon=${lon}&units=${units}&dt=${(0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.getPreviousDayDT)()}`;
    dataResponse = await fetch(histURL, {mode: 'cors'});
    const histData = await dataResponse.json();

    const data = Object.assign({}, currData, {previous: histData});
    return data;
  };

  return {
    geocode: (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.handleError)(geocodeUnsafe),
    getData: (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.handleError)(getDataUnsafe),
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherController);


/***/ }),

/***/ "./src/assets/font/Ubuntu-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/font/Ubuntu-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cbb1b79a23478cc89ad.ttf";

/***/ }),

/***/ "./src/assets/font/weathericons-regular-webfont.eot":
/*!**********************************************************!*\
  !*** ./src/assets/font/weathericons-regular-webfont.eot ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb2ec001c20cf752f852.eot";

/***/ }),

/***/ "./src/assets/font/weathericons-regular-webfont.svg":
/*!**********************************************************!*\
  !*** ./src/assets/font/weathericons-regular-webfont.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1341a15172cec8dae06e.svg";

/***/ }),

/***/ "./src/assets/font/weathericons-regular-webfont.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/font/weathericons-regular-webfont.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0942d1e1c447d6ce3ffc.ttf";

/***/ }),

/***/ "./src/assets/font/weathericons-regular-webfont.woff":
/*!***********************************************************!*\
  !*** ./src/assets/font/weathericons-regular-webfont.woff ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "371511ddba5fdac0538c.woff";

/***/ }),

/***/ "./src/assets/font/weathericons-regular-webfont.woff2":
/*!************************************************************!*\
  !*** ./src/assets/font/weathericons-regular-webfont.woff2 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e218aee6928fe3da9ed6.woff2";

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weather_icons_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-icons.min.css */ "./src/weather-icons.min.css");




const degree = '°';

(0,_modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQixpQ0FBaUMsbUJBQW1CLGlDQUFpQyxtQkFBbUIsaUNBQWlDLG1CQUFtQixpQ0FBaUMsbUJBQW1CLGlDQUFpQyxtQkFBbUIscUJBQXFCLG1CQUFtQixpQ0FBaUMsbUJBQW1CLGlDQUFpQyxtQkFBbUIsaUNBQWlDLG1CQUFtQixpQ0FBaUMsbUJBQW1CLGlDQUFpQyxtQkFBbUIsaUNBQWlDLG1CQUFtQiw4QkFBOEIsbUJBQW1CLGtDQUFrQyxtQkFBbUIsa0NBQWtDLG1CQUFtQixrQ0FBa0MsbUJBQW1CLGtDQUFrQyxtQkFBbUIsa0NBQWtDLG1CQUFtQixrQ0FBa0MsbUJBQW1CLHdCQUF3QixtQkFBbUIsc0NBQXNDLG1CQUFtQixzQ0FBc0MsbUJBQW1CLHNDQUFzQyxtQkFBbUIsc0NBQXNDLG1CQUFtQixzQ0FBc0MsbUJBQW1CLHNDQUFzQyxtQkFBbUIsa0NBQWtDLG1CQUFtQixxQ0FBcUMsbUJBQW1CLHFDQUFxQyxtQkFBbUIscUNBQXFDLG1CQUFtQixxQ0FBcUMsbUJBQW1CLHFDQUFxQyxtQkFBbUIscUNBQXFDLG1CQUFtQix5QkFBeUIsbUJBQW1CLHFDQUFxQyxtQkFBbUIscUNBQXFDLG1CQUFtQixxQ0FBcUMsbUJBQW1CLHFDQUFxQyxtQkFBbUIscUNBQXFDLG1CQUFtQixxQ0FBcUMsbUJBQW1CLGtDQUFrQyxtQkFBbUIsc0NBQXNDLG1CQUFtQixzQ0FBc0MsbUJBQW1CLHNDQUFzQyxtQkFBbUIsc0NBQXNDLG1CQUFtQixzQ0FBc0MsbUJBQW1CLHNDQUFzQyxtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQix3QkFBd0IsbUJBQW1CLDhCQUE4QixtQkFBbUIsMkJBQTJCLG1CQUFtQixnQ0FBZ0MsbUJBQW1CLDBCQUEwQixtQkFBbUIsK0JBQStCLG1CQUFtQiwwQkFBMEIsbUJBQW1CLDZCQUE2QixtQkFBbUIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQiw0QkFBNEIsbUJBQW1CLDRCQUE0QixtQkFBbUIsNEJBQTRCLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixzQkFBc0IsbUJBQW1CLGlDQUFpQyxtQkFBbUIsbUNBQW1DLG1CQUFtQiw0QkFBNEIsbUJBQW1CLDRCQUE0QixtQkFBbUIsNkJBQTZCLG1CQUFtQiw0QkFBNEIsbUJBQW1CLDJCQUEyQixtQkFBbUIsOEJBQThCLG1CQUFtQix5Q0FBeUMsbUJBQW1CLDJDQUEyQyxtQkFBbUIsNEJBQTRCLG1CQUFtQixvQ0FBb0MsbUJBQW1CLCtCQUErQixtQkFBbUIsMkNBQTJDLG1CQUFtQiwyQ0FBMkMsbUJBQW1CLDJDQUEyQyxtQkFBbUIsMkNBQTJDLG1CQUFtQiwyQ0FBMkMsbUJBQW1CLDJDQUEyQyxtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5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QkFBMkIsbUJBQW1CLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQiw0QkFBNEIsbUJBQW1CLDRCQUE0QixtQkFBbUIsNEJBQTRCLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixzQkFBc0IsbUJBQW1CLGlDQUFpQyxtQkFBbUIsbUNBQW1DLG1CQUFtQiw0QkFBNEIsbUJBQW1CLDRCQUE0QixtQkFBbUIsNkJBQTZCLG1CQUFtQiw0QkFBNEIsbUJBQW1CLDJCQUEyQixtQkFBbUIsOEJBQThCLG1CQUFtQix5Q0FBeUMsbUJBQW1CLDJDQUEyQyxtQkFBbUIsNEJBQTRCLG1CQUFtQixvQ0FBb0MsbUJBQW1CLCtCQUErQixtQkFBbUIsMkNBQTJDLG1CQUFtQiwyQ0FBMkMsbUJBQW1CLDJDQUEyQyxtQkFBbUIsMkNBQTJDLG1CQUFtQiwyQ0FBMkMsbUJBQW1CLDJDQUEyQyxtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUs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Ozs7Ozs7Ozs7Ozs7QUNyQmdDO0FBQ1g7QUFDWTs7QUFFakM7O0FBRUEsdURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvd2VhdGhlci1pY29ucy5taW4uY3NzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mcm9tVW5peFRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy93ZWF0aGVyLWljb25zLm1pbi5jc3M/MzYyMiIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2hlbHBlcnMvaGVscGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvRm9yZWNhc3RVSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udC9VYnVudHUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItbWFpbjogd2hpdGU7XFxuICAtLWNvbG9yLXNlY29uZGFyeTogIzNkNWE4MDtcXG4gIC0tY29sb3ItdGVydGlhcnk6ICMyOTMyNDE7XFxuICAtLWNvbG9yLWFjY2VudC1tYWluOiAjZWU2YzRkO1xcbiAgLS1jb2xvci1hY2NlbnQtbWFpbi1ob3ZlcjogZ3JheTtcXG5cXG4gIC0tY29sb3ItcmFpbjogYmx1ZTtcXG5cXG4gIC0tZm9udC1jb2xvci1tYWluOiBibGFjaztcXG4gIC0tZm9udC1jb2xvci1zZWNvbmRhcnk6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5oZWFkZXIgLnNlYXJjaCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmhlYWRlciAuc2VhcmNoIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50LW1haW4pO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2ggYnV0dG9uOmhvdmVyLFxcbmhlYWRlciAuc2VhcmNoIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50LW1haW4taG92ZXIpO1xcbn1cXG5cXG5oZWFkZXIgLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgLmJ0bi1jb250YWluZXIgPiBzcGFuLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2xvY2F0aW9uIGxvY2F0aW9uJyAnZGV0YWlsIHdlYXRoZXInICdob3VybHkgaG91cmx5JztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAubG9jYXRpb24ge1xcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3QgLmxvY2F0aW9uIHNwYW4uY2l0eSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAubG9jYXRpb24gc3Bhbi5kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5zbWFsbC1kZXRhaWxzIHtcXG4gIGdyaWQtYXJlYTogZGV0YWlsO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5zbWFsbC1kZXRhaWxzIHNwYW46bm90KC50aW1lKSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAuc21hbGwtZGV0YWlscyAudGltZSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3QgLnNtYWxsLWRldGFpbHMgLnRlbXAge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGxpbmUtaGVpZ2h0OiAwLjk7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5zbWFsbC1kZXRhaWxzIC5mZWVsIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAud2VhdGhlciB7XFxuICBncmlkLWFyZWE6IHdlYXRoZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAud2VhdGhlciBpIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAud2VhdGhlciAuY29uZGl0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubWFpbiAuaG91cmx5IHtcXG4gIGdyaWQtYXJlYTogaG91cmx5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiB2YXIoLS1jYXJkLWdhcCk7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgLS1jYXJkLWdhcDogMXJlbTtcXG4gIC0tY2FyZC1zaG93bjogMztcXG59XFxuXFxubWFpbiAuaG91cmx5ID4gLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNyZW07XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBmbGV4OiAxIDAgY2FsYygoMTAwJSAtIHZhcigtLWNhcmQtZ2FwKSAqIHZhcigtLWNhcmQtc2hvd24pICsgMXJlbSkgLyB2YXIoLS1jYXJkLXNob3duKSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbm1haW4gLmhvdXJseSA+IC5jYXJkIGk6bm90KC53aS1yYWluZHJvcCkge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbm1haW4gLmhvdXJseSA+IC5jYXJkIC5yYWluIHtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbm1haW4gLmhvdXJseSA+IC5jYXJkIC5jb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubWFpbiAuaG91cmx5ID4gLmNhcmQgLnJhaW4ge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJhaW4pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxubWFpbiAuZGV0YWlscyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDBEQUF3RDtB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QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnQvVWJ1bnR1LVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3R0ZicpO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItbWFpbjogd2hpdGU7XFxuICAtLWNvbG9yLXNlY29uZGFyeTogIzNkNWE4MDtcXG4gIC0tY29sb3ItdGVydGlhcnk6ICMyOTMyNDE7XFxuICAtLWNvbG9yLWFjY2VudC1tYWluOiAjZWU2YzRkO1xcbiAgLS1jb2xvci1hY2NlbnQtbWFpbi1ob3ZlcjogZ3JheTtcXG5cXG4gIC0tY29sb3ItcmFpbjogYmx1ZTtcXG5cXG4gIC0tZm9udC1jb2xvci1tYWluOiBibGFjaztcXG4gIC0tZm9udC1jb2xvci1zZWNvbmRhcnk6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5oZWFkZXIgLnNlYXJjaCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmhlYWRlciAuc2VhcmNoIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50LW1haW4pO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2ggYnV0dG9uOmhvdmVyLFxcbmhlYWRlciAuc2VhcmNoIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50LW1haW4taG92ZXIpO1xcbn1cXG5cXG5oZWFkZXIgLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgLmJ0bi1jb250YWluZXIgPiBzcGFuLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2xvY2F0aW9uIGxvY2F0aW9uJyAnZGV0YWlsIHdlYXRoZXInICdob3VybHkgaG91cmx5JztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAubG9jYXRpb24ge1xcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3QgLmxvY2F0aW9uIHNwYW4uY2l0eSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAubG9jYXRpb24gc3Bhbi5kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5zbWFsbC1kZXRhaWxzIHtcXG4gIGdyaWQtYXJlYTogZGV0YWlsO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5zbWFsbC1kZXRhaWxzIHNwYW46bm90KC50aW1lKSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAuc21hbGwtZGV0YWlscyAudGltZSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3QgLnNtYWxsLWRldGFpbHMgLnRlbXAge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGxpbmUtaGVpZ2h0OiAwLjk7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5zbWFsbC1kZXRhaWxzIC5mZWVsIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAud2VhdGhlciB7XFxuICBncmlkLWFyZWE6IHdlYXRoZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAud2VhdGhlciBpIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAud2VhdGhlciAuY29uZGl0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubWFpbiAuaG91cmx5IHtcXG4gIGdyaWQtYXJlYTogaG91cmx5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiB2YXIoLS1jYXJkLWdhcCk7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgLS1jYXJkLWdhcDogMXJlbTtcXG4gIC0tY2FyZC1zaG93bjogMztcXG59XFxuXFxubWFpbiAuaG91cmx5ID4gLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjNyZW07XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBmbGV4OiAxIDAgY2FsYygoMTAwJSAtIHZhcigtLWNhcmQtZ2FwKSAqIHZhcigtLWNhcmQtc2hvd24pICsgMXJlbSkgLyB2YXIoLS1jYXJkLXNob3duKSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbm1haW4gLmhvdXJseSA+IC5jYXJkIGk6bm90KC53aS1yYWluZHJvcCkge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbm1haW4gLmhvdXJseSA+IC5jYXJkIC5yYWluIHtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbm1haW4gLmhvdXJseSA+IC5jYXJkIC5jb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubWFpbiAuaG91cmx5ID4gLmNhcmQgLnJhaW4ge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJhaW4pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxubWFpbiAuZGV0YWlscyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC5lb3RcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fLCB7IGhhc2g6IFwiI3dlYXRoZXJfaWNvbnNyZWd1bGFyXCIgfSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiFcXG4gKiAgV2VhdGhlciBJY29ucyAyLjAuMTBcXG4gKiAgVXBkYXRlZCBOb3ZlbWJlciAxLCAyMDIwXFxuICogIFdlYXRoZXIgdGhlbWVkIGljb25zIGZvciBCb290c3RyYXBcXG4gKiAgQXV0aG9yIC0gRXJpayBGbG93ZXJzIC0gZXJpa0BoZWxsb2VyaWsuY29tXFxuICogIEVtYWlsOiBlcmlrQGhlbGxvZXJpay5jb21cXG4gKiAgVHdpdHRlcjogaHR0cDovL3R3aXR0ZXIuY29tL0VyaWtfVVhcXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogIE1haW50YWluZWQgYXQgaHR0cDovL2VyaWtmbG93ZXJzLmdpdGh1Yi5pby93ZWF0aGVyLWljb25zXFxuICpcXG4gKiAgTGljZW5zZVxcbiAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiAgLSBGb250IGxpY2Vuc2VkIHVuZGVyIFNJTCBPRkwgMS4xIC1cXG4gKiAgICBodHRwOi8vc2NyaXB0cy5zaWwub3JnL09GTFxcbiAqICAtIENTUywgU0NTUyBhbmQgTEVTUyBhcmUgbGljZW5zZWQgdW5kZXIgTUlUIExpY2Vuc2UgLVxcbiAqICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5odG1sXFxuICogIC0gRG9jdW1lbnRhdGlvbiBsaWNlbnNlZCB1bmRlciBDQyBCWSAzLjAgLVxcbiAqICAgIGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzMuMC9cXG4gKiAgLSBJbnNwaXJlZCBieSBhbmQgd29ya3MgZ3JlYXQgYXMgYSBjb21wYW5pb24gd2l0aCBGb250IEF3ZXNvbWVcXG4gKiAgICBcXFwiRm9udCBBd2Vzb21lIGJ5IERhdmUgR2FuZHkgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW9cXFwiXFxuICovQGZvbnQtZmFjZXtmb250LWZhbWlseTond2VhdGhlcmljb25zJztzcmM6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtzcmM6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSx1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSx1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsfS53aXtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LWZhbWlseTond2VhdGhlcmljb25zJztmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7bGluZS1oZWlnaHQ6MTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZX0ud2ktZnd7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MS40ZW19LndpLXJvdGF0ZS05MHtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LndpLXJvdGF0ZS0xODB7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS53aS1yb3RhdGUtMjcwe2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX0ud2ktZmxpcC1ob3Jpem9udGFse2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLTEsIDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoLTEsIDEpO3RyYW5zZm9ybTpzY2FsZSgtMSwgMSl9LndpLWZsaXAtdmVydGljYWx7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLCAtMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxLCAtMSk7dHJhbnNmb3JtOnNjYWxlKDEsIC0xKX0ud2ktZGF5LXN1bm55OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZFxcXCJ9LndpLWRheS1jbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2ktZGF5LWNsb3VkeS1ndXN0czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDBcXFwifS53aS1kYXktY2xvdWR5LXdpbmR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMVxcXCJ9LndpLWRheS1mb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAzXFxcIn0ud2ktZGF5LWhhaWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA0XFxcIn0ud2ktZGF5LWhhemU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI2XFxcIn0ud2ktZGF5LWxpZ2h0bmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDVcXFwifS53aS1kYXktcmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDhcXFwifS53aS1kYXktcmFpbi1taXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktZGF5LXJhaW4td2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDdcXFwifS53aS1kYXktc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDlcXFwifS53aS1kYXktc2xlZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGIyXFxcIn0ud2ktZGF5LXNsZWV0LXN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2OFxcXCJ9LndpLWRheS1zbm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYVxcXCJ9LndpLWRheS1zbm93LXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNmJcXFwifS53aS1kYXktc25vdy13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2NVxcXCJ9LndpLWRheS1zcHJpbmtsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGJcXFwifS53aS1kYXktc3Rvcm0tc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS1kYXktc3Vubnktb3ZlcmNhc3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBjXFxcIn0ud2ktZGF5LXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTBcXFwifS53aS1kYXktd2luZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDg1XFxcIn0ud2ktc29sYXItZWNsaXBzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNmVcXFwifS53aS1ob3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDcyXFxcIn0ud2ktZGF5LWNsb3VkeS1oaWdoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3ZFxcXCJ9LndpLWRheS1saWdodC13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjNFxcXCJ9LndpLW5pZ2h0LWNsZWFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZVxcXCJ9LndpLW5pZ2h0LWFsdC1jbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDg2XFxcIn0ud2ktbmlnaHQtYWx0LWNsb3VkeS1ndXN0czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjJcXFwifS53aS1uaWdodC1hbHQtY2xvdWR5LXdpbmR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyM1xcXCJ9LndpLW5pZ2h0LWFsdC1oYWlsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNFxcXCJ9LndpLW5pZ2h0LWFsdC1saWdodG5pbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI1XFxcIn0ud2ktbmlnaHQtYWx0LXJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktbmlnaHQtYWx0LXJhaW4tbWl4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNlxcXCJ9LndpLW5pZ2h0LWFsdC1yYWluLXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI3XFxcIn0ud2ktbmlnaHQtYWx0LXNob3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI5XFxcIn0ud2ktbmlnaHQtYWx0LXNsZWV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNFxcXCJ9LndpLW5pZ2h0LWFsdC1zbGVldC1zdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNmFcXFwifS53aS1uaWdodC1hbHQtc25vdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmFcXFwifS53aS1uaWdodC1hbHQtc25vdy10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDZkXFxcIn0ud2ktbmlnaHQtYWx0LXNub3ctd2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjdcXFwifS53aS1uaWdodC1hbHQtc3ByaW5rbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJiXFxcIn0ud2ktbmlnaHQtYWx0LXN0b3JtLXNob3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJjXFxcIn0ud2ktbmlnaHQtYWx0LXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmRcXFwifS53aS1uaWdodC1jbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDMxXFxcIn0ud2ktbmlnaHQtY2xvdWR5LWd1c3RzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZlxcXCJ9LndpLW5pZ2h0LWNsb3VkeS13aW5keTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzBcXFwifS53aS1uaWdodC1mb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDRhXFxcIn0ud2ktbmlnaHQtaGFpbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzJcXFwifS53aS1uaWdodC1saWdodG5pbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDMzXFxcIn0ud2ktbmlnaHQtcGFydGx5LWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODNcXFwifS53aS1uaWdodC1yYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzNlxcXCJ9LndpLW5pZ2h0LXJhaW4tbWl4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzNFxcXCJ9LndpLW5pZ2h0LXJhaW4td2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzVcXFwifS53aS1uaWdodC1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzN1xcXCJ9LndpLW5pZ2h0LXNsZWV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiM1xcXCJ9LndpLW5pZ2h0LXNsZWV0LXN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2OVxcXCJ9LndpLW5pZ2h0LXNub3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDM4XFxcIn0ud2ktbmlnaHQtc25vdy10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDZjXFxcIn0ud2ktbmlnaHQtc25vdy13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2NlxcXCJ9LndpLW5pZ2h0LXNwcmlua2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzOVxcXCJ9LndpLW5pZ2h0LXN0b3JtLXNob3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDNhXFxcIn0ud2ktbmlnaHQtdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzYlxcXCJ9LndpLWx1bmFyLWVjbGlwc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDcwXFxcIn0ud2ktc3RhcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc3XFxcIn0ud2ktc3Rvcm0tc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWRcXFwifS53aS10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktbmlnaHQtYWx0LWNsb3VkeS1oaWdoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3ZVxcXCJ9LndpLW5pZ2h0LWNsb3VkeS1oaWdoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4MFxcXCJ9LndpLW5pZ2h0LWFsdC1wYXJ0bHktY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4MVxcXCJ9LndpLWNsb3VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0MVxcXCJ9LndpLWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS1jbG91ZHktZ3VzdHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDExXFxcIn0ud2ktY2xvdWR5LXdpbmR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxMlxcXCJ9LndpLWZvZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS1oYWlsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktcmFpbi1taXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktcmFpbi13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOFxcXCJ9LndpLXNob3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2ktc2xlZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI1XFxcIn0ud2ktc25vdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS1zcHJpbmtsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS1zdG9ybS1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZFxcXCJ9LndpLXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1zbm93LXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY0XFxcIn0ud2ktc25vdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS1zbW9nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NFxcXCJ9LndpLXNtb2tlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2MlxcXCJ9LndpLWxpZ2h0bmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTZcXFwifS53aS1yYWluZHJvcHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDRlXFxcIn0ud2ktcmFpbmRyb3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc4XFxcIn0ud2ktZHVzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1zbm93Zmxha2UtY29sZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS13aW5keTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjFcXFwifS53aS1zdHJvbmctd2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS1zYW5kc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDgyXFxcIn0ud2ktZWFydGhxdWFrZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzZcXFwifS53aS1maXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjN1xcXCJ9LndpLWZsb29kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3Y1xcXCJ9LndpLW1ldGVvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzFcXFwifS53aS10c3VuYW1pOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjNVxcXCJ9LndpLXZvbGNhbm86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGM4XFxcIn0ud2ktaHVycmljYW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3M1xcXCJ9LndpLXRvcm5hZG86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2ktc21hbGwtY3JhZnQtYWR2aXNvcnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGNjXFxcIn0ud2ktZ2FsZS13YXJuaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjZFxcXCJ9LndpLXN0b3JtLXdhcm5pbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGNlXFxcIn0ud2ktaHVycmljYW5lLXdhcm5pbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGNmXFxcIn0ud2ktd2luZC1kaXJlY3Rpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGIxXFxcIn0ud2ktYWxpZW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc1XFxcIn0ud2ktY2Vsc2l1czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwM2NcXFwifS53aS1mYWhyZW5oZWl0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0NVxcXCJ9LndpLWRlZ3JlZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQyXFxcIn0ud2ktdGhlcm1vbWV0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU1XFxcIn0ud2ktdGhlcm1vbWV0ZXItZXh0ZXJpb3I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUzXFxcIn0ud2ktdGhlcm1vbWV0ZXItaW50ZXJuYWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU0XFxcIn0ud2ktY2xvdWQtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwM2RcXFwifS53aS1jbG91ZC11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDBcXFwifS53aS1jbG91ZC1yZWZyZXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzZVxcXCJ9LndpLWhvcml6b246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQ3XFxcIn0ud2ktaG9yaXpvbi1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQ2XFxcIn0ud2ktc3VucmlzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTFcXFwifS53aS1zdW5zZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUyXFxcIn0ud2ktbW9vbnJpc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGM5XFxcIn0ud2ktbW9vbnNldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwY2FcXFwifS53aS1yZWZyZXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0Y1xcXCJ9LndpLXJlZnJlc2gtYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0YlxcXCJ9LndpLXVtYnJlbGxhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4NFxcXCJ9LndpLWJhcm9tZXRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzlcXFwifS53aS1odW1pZGl0eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwN2FcXFwifS53aS1uYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwN2JcXFwifS53aS10cmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwY2JcXFwifS53aS1tb29uLW5ldzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTVcXFwifS53aS1tb29uLXdheGluZy1jcmVzY2VudC0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5NlxcXCJ9LndpLW1vb24td2F4aW5nLWNyZXNjZW50LTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk3XFxcIn0ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOThcXFwifS53aS1tb29uLXdheGluZy1jcmVzY2VudC00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5OVxcXCJ9LndpLW1vb24td2F4aW5nLWNyZXNjZW50LTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDlhXFxcIn0ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWJcXFwifS53aS1tb29uLWZpcnN0LXF1YXJ0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDljXFxcIn0ud2ktbW9vbi13YXhpbmctZ2liYm91cy0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5ZFxcXCJ9LndpLW1vb24td2F4aW5nLWdpYmJvdXMtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWVcXFwifS53aS1tb29uLXdheGluZy1naWJib3VzLTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDlmXFxcIn0ud2ktbW9vbi13YXhpbmctZ2liYm91cy00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhMFxcXCJ9LndpLW1vb24td2F4aW5nLWdpYmJvdXMtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTFcXFwifS53aS1tb29uLXdheGluZy1naWJib3VzLTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGEyXFxcIn0ud2ktbW9vbi1mdWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhM1xcXCJ9LndpLW1vb24td2FuaW5nLWdpYmJvdXMtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTRcXFwifS53aS1tb29uLXdhbmluZy1naWJib3VzLTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE1XFxcIn0ud2ktbW9vbi13YW5pbmctZ2liYm91cy0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhNlxcXCJ9LndpLW1vb24td2FuaW5nLWdpYmJvdXMtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTdcXFwifS53aS1tb29uLXdhbmluZy1naWJib3VzLTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE4XFxcIn0ud2ktbW9vbi13YW5pbmctZ2liYm91cy02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhOVxcXCJ9LndpLW1vb24tdGhpcmQtcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWFcXFwifS53aS1tb29uLXdhbmluZy1jcmVzY2VudC0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhYlxcXCJ9LndpLW1vb24td2FuaW5nLWNyZXNjZW50LTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFjXFxcIn0ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWRcXFwifS53aS1tb29uLXdhbmluZy1jcmVzY2VudC00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhZVxcXCJ9LndpLW1vb24td2FuaW5nLWNyZXNjZW50LTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFmXFxcIn0ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjBcXFwifS53aS1tb29uLWFsdC1uZXc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGViXFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGQwXFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGQxXFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGQyXFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGQzXFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGQ0XFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGQ1XFxcIn0ud2ktbW9vbi1hbHQtZmlyc3QtcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDZcXFwifS53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkN1xcXCJ9LndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGQ4XFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDlcXFwifS53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkYVxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGRiXFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZGNcXFwifS53aS1tb29uLWFsdC1mdWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkZFxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGRlXFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZGZcXFwifS53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlMFxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGUxXFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTJcXFwifS53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlM1xcXCJ9LndpLW1vb24tYWx0LXRoaXJkLXF1YXJ0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGU0XFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGU1XFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGU2XFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGU3XFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGU4XFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGU5XFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGVhXFxcIn0ud2ktbW9vbi0wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5NVxcXCJ9LndpLW1vb24tMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTZcXFwifS53aS1tb29uLTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk3XFxcIn0ud2ktbW9vbi0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5OFxcXCJ9LndpLW1vb24tNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTlcXFwifS53aS1tb29uLTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDlhXFxcIn0ud2ktbW9vbi02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5YlxcXCJ9LndpLW1vb24tNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWNcXFwifS53aS1tb29uLTg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDlkXFxcIn0ud2ktbW9vbi05OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5ZVxcXCJ9LndpLW1vb24tMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDlmXFxcIn0ud2ktbW9vbi0xMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTBcXFwifS53aS1tb29uLTEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhMVxcXCJ9LndpLW1vb24tMTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGEyXFxcIn0ud2ktbW9vbi0xNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTNcXFwifS53aS1tb29uLTE1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhNFxcXCJ9LndpLW1vb24tMTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE1XFxcIn0ud2ktbW9vbi0xNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTZcXFwifS53aS1tb29uLTE4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhN1xcXCJ9LndpLW1vb24tMTk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE4XFxcIn0ud2ktbW9vbi0yMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTlcXFwifS53aS1tb29uLTIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhYVxcXCJ9LndpLW1vb24tMjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFiXFxcIn0ud2ktbW9vbi0yMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWNcXFwifS53aS1tb29uLTI0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhZFxcXCJ9LndpLW1vb24tMjU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFlXFxcIn0ud2ktbW9vbi0yNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWZcXFwifS53aS1tb29uLTI3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiMFxcXCJ9LndpLXRpbWUtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOGFcXFwifS53aS10aW1lLTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDhiXFxcIn0ud2ktdGltZS0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4Y1xcXCJ9LndpLXRpbWUtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOGRcXFwifS53aS10aW1lLTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDhlXFxcIn0ud2ktdGltZS02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4ZlxcXCJ9LndpLXRpbWUtNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTBcXFwifS53aS10aW1lLTg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDkxXFxcIn0ud2ktdGltZS05OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5MlxcXCJ9LndpLXRpbWUtMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDkzXFxcIn0ud2ktdGltZS0xMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTRcXFwifS53aS10aW1lLTEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4OVxcXCJ9LndpLWRpcmVjdGlvbi11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNThcXFwifS53aS1kaXJlY3Rpb24tdXAtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU3XFxcIn0ud2ktZGlyZWN0aW9uLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0ZFxcXCJ9LndpLWRpcmVjdGlvbi1kb3duLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4OFxcXCJ9LndpLWRpcmVjdGlvbi1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0NFxcXCJ9LndpLWRpcmVjdGlvbi1kb3duLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQzXFxcIn0ud2ktZGlyZWN0aW9uLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQ4XFxcIn0ud2ktZGlyZWN0aW9uLXVwLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDg3XFxcIn0ud2ktd2luZC1iZWF1Zm9ydC0wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiN1xcXCJ9LndpLXdpbmQtYmVhdWZvcnQtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjhcXFwifS53aS13aW5kLWJlYXVmb3J0LTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI5XFxcIn0ud2ktd2luZC1iZWF1Zm9ydC0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiYVxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYmJcXFwifS53aS13aW5kLWJlYXVmb3J0LTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGJjXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiZFxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYmVcXFwifS53aS13aW5kLWJlYXVmb3J0LTg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGJmXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC05OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjMFxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGMxXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC0xMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzJcXFwifS53aS13aW5kLWJlYXVmb3J0LTEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjM1xcXCJ9LndpLXlhaG9vLTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2kteWFob28tMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS15YWhvby0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3M1xcXCJ9LndpLXlhaG9vLTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2kteWFob28tNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS15YWhvby01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXlhaG9vLTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2kteWFob28tNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS15YWhvby04OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXlhaG9vLTk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2kteWFob28tMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2kteWFob28tMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2kteWFob28tMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2kteWFob28tMTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2kteWFob28tMTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBhXFxcIn0ud2kteWFob28tMTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY0XFxcIn0ud2kteWFob28tMTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2kteWFob28tMTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2kteWFob28tMTg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2kteWFob28tMTk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2kteWFob28tMjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2kteWFob28tMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDIxXFxcIn0ud2kteWFob28tMjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYyXFxcIn0ud2kteWFob28tMjM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUwXFxcIn0ud2kteWFob28tMjQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUwXFxcIn0ud2kteWFob28tMjU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2kteWFob28tMjY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2kteWFob28tMjc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDMxXFxcIn0ud2kteWFob28tMjg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2kteWFob28tMjk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDMxXFxcIn0ud2kteWFob28tMzA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2kteWFob28tMzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJlXFxcIn0ud2kteWFob28tMzI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2kteWFob28tMzM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDgzXFxcIn0ud2kteWFob28tMzQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBjXFxcIn0ud2kteWFob28tMzU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2kteWFob28tMzY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDcyXFxcIn0ud2kteWFob28tMzc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBlXFxcIn0ud2kteWFob28tMzg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBlXFxcIn0ud2kteWFob28tMzk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBlXFxcIn0ud2kteWFob28tNDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2kteWFob28tNDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY0XFxcIn0ud2kteWFob28tNDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2kteWFob28tNDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY0XFxcIn0ud2kteWFob28tNDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBjXFxcIn0ud2kteWFob28tNDU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBlXFxcIn0ud2kteWFob28tNDY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2kteWFob28tNDc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBlXFxcIn0ud2kteWFob28tMzIwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzdcXFwifS53aS1mb3JlY2FzdC1pby1jbGVhci1kYXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktZm9yZWNhc3QtaW8tY2xlYXItbmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJlXFxcIn0ud2ktZm9yZWNhc3QtaW8tcmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1mb3JlY2FzdC1pby1zbm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLWZvcmVjYXN0LWlvLXNsZWV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNVxcXCJ9LndpLWZvcmVjYXN0LWlvLXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUwXFxcIn0ud2ktZm9yZWNhc3QtaW8tZm9nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLWZvcmVjYXN0LWlvLWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS1mb3JlY2FzdC1pby1wYXJ0bHktY2xvdWR5LWRheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS1mb3JlY2FzdC1pby1wYXJ0bHktY2xvdWR5LW5pZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzMVxcXCJ9LndpLWZvcmVjYXN0LWlvLWhhaWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktZm9yZWNhc3QtaW8tdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLWZvcmVjYXN0LWlvLXRvcm5hZG86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2ktd21vNDY4MC0wOmJlZm9yZSwud2ktd21vNDY4MC0wMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTVcXFwifS53aS13bW80NjgwLTE6YmVmb3JlLC53aS13bW80NjgwLTAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLXdtbzQ2ODAtMjpiZWZvcmUsLndpLXdtbzQ2ODAtMDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU1XFxcIn0ud2ktd21vNDY4MC0zOmJlZm9yZSwud2ktd21vNDY4MC0wMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS13bW80NjgwLTQ6YmVmb3JlLC53aS13bW80NjgwLTA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtNTpiZWZvcmUsLndpLXdtbzQ2ODAtMDU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0xMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE2XFxcIn0ud2ktd21vNDY4MC0xODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS13bW80NjgwLTIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktd21vNDY4MC0yMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS13bW80NjgwLTIzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtMjQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd21vNDY4MC0yNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS13bW80NjgwLTI2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXdtbzQ2ODAtMjc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktd21vNDY4MC0yODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS13bW80NjgwLTI5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLXdtbzQ2ODAtMzA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0zMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTMyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMzM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0zNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTM1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtNDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktd21vNDY4MC00MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS13bW80NjgwLTQyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtNDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktd21vNDY4MC00NDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTQ1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXdtbzQ2ODAtNDY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktd21vNDY4MC00NzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13bW80NjgwLTQ4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXdtbzQ2ODAtNTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktd21vNDY4MC01MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS13bW80NjgwLTUyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtNTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC01NDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS13bW80NjgwLTU1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXdtbzQ2ODAtNTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktd21vNDY4MC01NzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS13bW80NjgwLTU4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtNjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktd21vNDY4MC02MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS13bW80NjgwLTYyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtNjM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC02NDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS13bW80NjgwLTY1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXdtbzQ2ODAtNjY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktd21vNDY4MC02NzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS13bW80NjgwLTY4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXdtbzQ2ODAtNzA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd21vNDY4MC03MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13bW80NjgwLTcyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXdtbzQ2ODAtNzM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd21vNDY4MC03NDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS13bW80NjgwLTc1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXdtbzQ2ODAtNzY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktd21vNDY4MC03NzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13bW80NjgwLTc4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXdtbzQ2ODAtODA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC04MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS13bW80NjgwLTgyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtODM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC04NDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWRcXFwifS53aS13bW80NjgwLTg1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXdtbzQ2ODAtODY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktd21vNDY4MC04NzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS13bW80NjgwLTg5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXdtbzQ2ODAtOTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE2XFxcIn0ud2ktd21vNDY4MC05MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWRcXFwifS53aS13bW80NjgwLTkyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXdtbzQ2ODAtOTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktd21vNDY4MC05NDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTZcXFwifS53aS13bW80NjgwLTk1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXdtbzQ2ODAtOTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktd21vNDY4MC05OTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS1vd20tMjAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLW93bS0yMDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktb3dtLTIwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1vd20tMjEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNlxcXCJ9LndpLW93bS0yMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE2XFxcIn0ud2ktb3dtLTIxMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTZcXFwifS53aS1vd20tMjIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNlxcXCJ9LndpLW93bS0yMzA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktb3dtLTIzMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1vd20tMjMyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLW93bS0zMDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktb3dtLTMwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS1vd20tMzAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS0zMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktb3dtLTMxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1vd20tMzEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS0zMTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2ktb3dtLTMxNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1vd20tMzIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLW93bS01MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktb3dtLTUwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1vd20tNTAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS01MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktb3dtLTUwNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1vd20tNTExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLW93bS01MjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2ktb3dtLTUyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS1vd20tNTIyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYVxcXCJ9LndpLW93bS01MzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFkXFxcIn0ud2ktb3dtLTYwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS1vd20tNjAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLW93bS02MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI1XFxcIn0ud2ktb3dtLTYxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS1vd20tNjEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLW93bS02MTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktb3dtLTYxNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS1vd20tNjIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLW93bS02MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktb3dtLTYyMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS1vd20tNzAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLW93bS03MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYyXFxcIn0ud2ktb3dtLTcyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjZcXFwifS53aS1vd20tNzMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLW93bS03NDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktb3dtLTc2MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1vd20tNzYyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLW93bS03NzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDExXFxcIn0ud2ktb3dtLTc4MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS1vd20tODAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZFxcXCJ9LndpLW93bS04MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQxXFxcIn0ud2ktb3dtLTgwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDFcXFwifS53aS1vd20tODAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLW93bS04MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktb3dtLTkwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS1vd20tOTAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZFxcXCJ9LndpLW93bS05MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDczXFxcIn0ud2ktb3dtLTkwMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS1vd20tOTA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3MlxcXCJ9LndpLW93bS05MDU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDIxXFxcIn0ud2ktb3dtLTkwNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS1vd20tOTU3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MFxcXCJ9LndpLW93bS1kYXktMjAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxMFxcXCJ9LndpLW93bS1kYXktMjAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxMFxcXCJ9LndpLW93bS1kYXktMjAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxMFxcXCJ9LndpLW93bS1kYXktMjEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNVxcXCJ9LndpLW93bS1kYXktMjExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNVxcXCJ9LndpLW93bS1kYXktMjEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNVxcXCJ9LndpLW93bS1kYXktMjIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNVxcXCJ9LndpLW93bS1kYXktMjMwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxMFxcXCJ9LndpLW93bS1kYXktMjMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxMFxcXCJ9LndpLW93bS1kYXktMjMyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxMFxcXCJ9LndpLW93bS1kYXktMzAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYlxcXCJ9LndpLW93bS1kYXktMzAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYlxcXCJ9LndpLW93bS1kYXktMzAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLW93bS1kYXktMzEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLW93bS1kYXktMzExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLW93bS1kYXktMzEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLW93bS1kYXktMzEzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLW93bS1kYXktMzE0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLW93bS1kYXktMzIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYlxcXCJ9LndpLW93bS1kYXktNTAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYlxcXCJ9LndpLW93bS1kYXktNTAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLW93bS1kYXktNTAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLW93bS1kYXktNTAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLW93bS1kYXktNTA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLW93bS1kYXktNTExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNlxcXCJ9LndpLW93bS1kYXktNTIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOVxcXCJ9LndpLW93bS1kYXktNTIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOVxcXCJ9LndpLW93bS1kYXktNTIyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOVxcXCJ9LndpLW93bS1kYXktNTMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZVxcXCJ9LndpLW93bS1kYXktNjAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYVxcXCJ9LndpLW93bS1kYXktNjAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiMlxcXCJ9LndpLW93bS1kYXktNjAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYVxcXCJ9LndpLW93bS1kYXktNjExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNlxcXCJ9LndpLW93bS1kYXktNjEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNlxcXCJ9LndpLW93bS1kYXktNjE1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNlxcXCJ9LndpLW93bS1kYXktNjE2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNlxcXCJ9LndpLW93bS1kYXktNjIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNlxcXCJ9LndpLW93bS1kYXktNjIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYVxcXCJ9LndpLW93bS1kYXktNjIyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYVxcXCJ9LndpLW93bS1kYXktNzAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwM1xcXCJ9LndpLW93bS1kYXktNzExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2MlxcXCJ9LndpLW93bS1kYXktNzIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNlxcXCJ9LndpLW93bS1kYXktNzMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLW93bS1kYXktNzQxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwM1xcXCJ9LndpLW93bS1kYXktNzYxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLW93bS1kYXktNzYyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLW93bS1kYXktNzgxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS1kYXktODAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZFxcXCJ9LndpLW93bS1kYXktODAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMlxcXCJ9LndpLW93bS1kYXktODAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMlxcXCJ9LndpLW93bS1kYXktODAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLW93bS1kYXktODA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLW93bS1kYXktOTAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS1kYXktOTAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3M1xcXCJ9LndpLW93bS1kYXktOTAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLW93bS1kYXktOTA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3MlxcXCJ9LndpLW93bS1kYXktOTA2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNFxcXCJ9LndpLW93bS1kYXktOTU3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MFxcXCJ9LndpLW93bS1uaWdodC0yMDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJkXFxcIn0ud2ktb3dtLW5pZ2h0LTIwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmRcXFwifS53aS1vd20tbmlnaHQtMjAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZFxcXCJ9LndpLW93bS1uaWdodC0yMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI1XFxcIn0ud2ktb3dtLW5pZ2h0LTIxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjVcXFwifS53aS1vd20tbmlnaHQtMjEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNVxcXCJ9LndpLW93bS1uaWdodC0yMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI1XFxcIn0ud2ktb3dtLW5pZ2h0LTIzMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmRcXFwifS53aS1vd20tbmlnaHQtMjMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZFxcXCJ9LndpLW93bS1uaWdodC0yMzI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJkXFxcIn0ud2ktb3dtLW5pZ2h0LTMwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmJcXFwifS53aS1vd20tbmlnaHQtMzAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYlxcXCJ9LndpLW93bS1uaWdodC0zMDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTMxMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtMzExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC0zMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTMxMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtMzE0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC0zMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJiXFxcIn0ud2ktb3dtLW5pZ2h0LTUwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmJcXFwifS53aS1vd20tbmlnaHQtNTAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC01MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTUwMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtNTA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC01MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI2XFxcIn0ud2ktb3dtLW5pZ2h0LTUyMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjlcXFwifS53aS1vd20tbmlnaHQtNTIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOVxcXCJ9LndpLW93bS1uaWdodC01MjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI5XFxcIn0ud2ktb3dtLW5pZ2h0LTUzMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmNcXFwifS53aS1vd20tbmlnaHQtNjAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYVxcXCJ9LndpLW93bS1uaWdodC02MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI0XFxcIn0ud2ktb3dtLW5pZ2h0LTYwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmFcXFwifS53aS1vd20tbmlnaHQtNjExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNlxcXCJ9LndpLW93bS1uaWdodC02MTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI2XFxcIn0ud2ktb3dtLW5pZ2h0LTYxNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjZcXFwifS53aS1vd20tbmlnaHQtNjE2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNlxcXCJ9LndpLW93bS1uaWdodC02MjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI2XFxcIn0ud2ktb3dtLW5pZ2h0LTYyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmFcXFwifS53aS1vd20tbmlnaHQtNjIyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYVxcXCJ9LndpLW93bS1uaWdodC03MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDRhXFxcIn0ud2ktb3dtLW5pZ2h0LTcxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjJcXFwifS53aS1vd20tbmlnaHQtNzIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNlxcXCJ9LndpLW93bS1uaWdodC03MzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLW5pZ2h0LTc0MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNGFcXFwifS53aS1vd20tbmlnaHQtNzYxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLW93bS1uaWdodC03NjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLW5pZ2h0LTc4MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS1vd20tbmlnaHQtODAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZVxcXCJ9LndpLW93bS1uaWdodC04MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDgxXFxcIn0ud2ktb3dtLW5pZ2h0LTgwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODZcXFwifS53aS1vd20tbmlnaHQtODAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLW93bS1uaWdodC04MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktb3dtLW5pZ2h0LTkwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS1vd20tbmlnaHQtOTAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3M1xcXCJ9LndpLW93bS1uaWdodC05MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktb3dtLW5pZ2h0LTkwNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzJcXFwifS53aS1vd20tbmlnaHQtOTA2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNFxcXCJ9LndpLW93bS1uaWdodC05NTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUwXFxcIn0ud2ktd3UtY2hhbmNlZmx1cnJpZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY0XFxcIn0ud2ktd3UtY2hhbmNlcmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13dS1jaGFuY2VzbGVhdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjVcXFwifS53aS13dS1jaGFuY2Vzbm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXd1LWNoYW5jZXRzdG9ybXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktd3UtY2xlYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktd3UtY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMlxcXCJ9LndpLXd1LWZsdXJyaWVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2NFxcXCJ9LndpLXd1LWhhenk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI2XFxcIn0ud2ktd3UtbW9zdGx5Y2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMlxcXCJ9LndpLXd1LW1vc3RseXN1bm55OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZFxcXCJ9LndpLXd1LXBhcnRseWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS13dS1wYXJ0bHlzdW5ueTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS13dS1yYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYVxcXCJ9LndpLXd1LXNsZWF0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNVxcXCJ9LndpLXd1LXNub3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd3Utc3Vubnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktd3UtdHN0b3JtczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS13dS11bmtub3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZFxcXCJ9LyojIHNvdXJjZU1hcHBpbmdVUkw9d2VhdGhlci1pY29ucy5taW4uY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93ZWF0aGVyLWljb25zLm1pbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFLENBQUMsV0FBVywwQkFBMEIsQ0FBQywyQ0FBeUQsQ0FB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LGVBQWUsQ0FBQyxzQ0FBc0MsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyw4QkFBOEIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsZ0NBQWdDLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLDRCQUE0QixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxpQ0FBaUMsZUFBZSxDQUFDLG1DQUFtQyxlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLDZCQUE2QixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLDhCQUE4QixlQUFlLENBQUMseUNBQXlDLGVBQWUsQ0FBQywyQ0FBMkMsZUFBZSxDQUFDLDRCQUE0QixlQUFlLENBQUMsb0NBQW9DLGVBQWUsQ0FBQywrQkFBK0IsZUFBZSxDQUFDLDJDQUEyQyxlQUFlLENBQUMsMkNBQTJDLGVBQWUsQ0FBQywyQ0FBMkMsZUFBZSxDQUFDLDJDQUEyQyxlQUFlLENBQUMsMkNBQTJDLGVBQWUsQ0FBQywyQ0FBMkMsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsNkJBQTZCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyw0QkFBNEIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxnREFBZ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohXFxuICogIFdlYXRoZXIgSWNvbnMgMi4wLjEwXFxuICogIFVwZGF0ZWQgTm92ZW1iZXIgMSwgMjAyMFxcbiAqICBXZWF0aGVyIHRoZW1lZCBpY29ucyBmb3IgQm9vdHN0cmFwXFxuICogIEF1dGhvciAtIEVyaWsgRmxvd2VycyAtIGVyaWtAaGVsbG9lcmlrLmNvbVxcbiAqICBFbWFpbDogZXJpa0BoZWxsb2VyaWsuY29tXFxuICogIFR3aXR0ZXI6IGh0dHA6Ly90d2l0dGVyLmNvbS9FcmlrX1VYXFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqICBNYWludGFpbmVkIGF0IGh0dHA6Ly9lcmlrZmxvd2Vycy5naXRodWIuaW8vd2VhdGhlci1pY29uc1xcbiAqXFxuICogIExpY2Vuc2VcXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogIC0gRm9udCBsaWNlbnNlZCB1bmRlciBTSUwgT0ZMIDEuMSAtXFxuICogICAgaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkxcXG4gKiAgLSBDU1MsIFNDU1MgYW5kIExFU1MgYXJlIGxpY2Vuc2VkIHVuZGVyIE1JVCBMaWNlbnNlIC1cXG4gKiAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UuaHRtbFxcbiAqICAtIERvY3VtZW50YXRpb24gbGljZW5zZWQgdW5kZXIgQ0MgQlkgMy4wIC1cXG4gKiAgICBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS8zLjAvXFxuICogIC0gSW5zcGlyZWQgYnkgYW5kIHdvcmtzIGdyZWF0IGFzIGEgY29tcGFuaW9uIHdpdGggRm9udCBBd2Vzb21lXFxuICogICAgXFxcIkZvbnQgQXdlc29tZSBieSBEYXZlIEdhbmR5IC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvXFxcIlxcbiAqL0Bmb250LWZhY2V7Zm9udC1mYW1pbHk6J3dlYXRoZXJpY29ucyc7c3JjOnVybCgnLi9hc3NldHMvZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LmVvdCcpO3NyYzp1cmwoJy4vYXNzZXRzL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybCgnLi9hc3NldHMvZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLHVybCgnLi9hc3NldHMvZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSx1cmwoJy4vYXNzZXRzL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksdXJsKCcuL2Fzc2V0cy9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQuc3ZnI3dlYXRoZXJfaWNvbnNyZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWx9Lndpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtZmFtaWx5Oid3ZWF0aGVyaWNvbnMnO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtsaW5lLWhlaWdodDoxOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlfS53aS1md3t0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxLjRlbX0ud2ktcm90YXRlLTkwe2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0ud2ktcm90YXRlLTE4MHtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Mik7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LndpLXJvdGF0ZS0yNzB7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfS53aS1mbGlwLWhvcml6b250YWx7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgtMSwgMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgtMSwgMSk7dHJhbnNmb3JtOnNjYWxlKC0xLCAxKX0ud2ktZmxpcC12ZXJ0aWNhbHtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsIC0xKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEsIC0xKTt0cmFuc2Zvcm06c2NhbGUoMSwgLTEpfS53aS1kYXktc3Vubnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktZGF5LWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS1kYXktY2xvdWR5LWd1c3RzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMFxcXCJ9LndpLWRheS1jbG91ZHktd2luZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAxXFxcIn0ud2ktZGF5LWZvZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDNcXFwifS53aS1kYXktaGFpbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDRcXFwifS53aS1kYXktaGF6ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjZcXFwifS53aS1kYXktbGlnaHRuaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNVxcXCJ9LndpLWRheS1yYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLWRheS1yYWluLW1peDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDZcXFwifS53aS1kYXktcmFpbi13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwN1xcXCJ9LndpLWRheS1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOVxcXCJ9LndpLWRheS1zbGVldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjJcXFwifS53aS1kYXktc2xlZXQtc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY4XFxcIn0ud2ktZGF5LXNub3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBhXFxcIn0ud2ktZGF5LXNub3ctdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2YlxcXCJ9LndpLWRheS1zbm93LXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY1XFxcIn0ud2ktZGF5LXNwcmlua2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYlxcXCJ9LndpLWRheS1zdG9ybS1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZVxcXCJ9LndpLWRheS1zdW5ueS1vdmVyY2FzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGNcXFwifS53aS1kYXktdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxMFxcXCJ9LndpLWRheS13aW5keTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODVcXFwifS53aS1zb2xhci1lY2xpcHNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2ZVxcXCJ9LndpLWhvdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzJcXFwifS53aS1kYXktY2xvdWR5LWhpZ2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDdkXFxcIn0ud2ktZGF5LWxpZ2h0LXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGM0XFxcIn0ud2ktbmlnaHQtY2xlYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJlXFxcIn0ud2ktbmlnaHQtYWx0LWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODZcXFwifS53aS1uaWdodC1hbHQtY2xvdWR5LWd1c3RzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyMlxcXCJ9LndpLW5pZ2h0LWFsdC1jbG91ZHktd2luZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDIzXFxcIn0ud2ktbmlnaHQtYWx0LWhhaWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI0XFxcIn0ud2ktbmlnaHQtYWx0LWxpZ2h0bmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjVcXFwifS53aS1uaWdodC1hbHQtcmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1uaWdodC1hbHQtcmFpbi1taXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI2XFxcIn0ud2ktbmlnaHQtYWx0LXJhaW4td2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjdcXFwifS53aS1uaWdodC1hbHQtc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjlcXFwifS53aS1uaWdodC1hbHQtc2xlZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI0XFxcIn0ud2ktbmlnaHQtYWx0LXNsZWV0LXN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2YVxcXCJ9LndpLW5pZ2h0LWFsdC1zbm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYVxcXCJ9LndpLW5pZ2h0LWFsdC1zbm93LXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNmRcXFwifS53aS1uaWdodC1hbHQtc25vdy13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2N1xcXCJ9LndpLW5pZ2h0LWFsdC1zcHJpbmtsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmJcXFwifS53aS1uaWdodC1hbHQtc3Rvcm0tc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmNcXFwifS53aS1uaWdodC1hbHQtdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZFxcXCJ9LndpLW5pZ2h0LWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzFcXFwifS53aS1uaWdodC1jbG91ZHktZ3VzdHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJmXFxcIn0ud2ktbmlnaHQtY2xvdWR5LXdpbmR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzMFxcXCJ9LndpLW5pZ2h0LWZvZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNGFcXFwifS53aS1uaWdodC1oYWlsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzMlxcXCJ9LndpLW5pZ2h0LWxpZ2h0bmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzNcXFwifS53aS1uaWdodC1wYXJ0bHktY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4M1xcXCJ9LndpLW5pZ2h0LXJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDM2XFxcIn0ud2ktbmlnaHQtcmFpbi1taXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDM0XFxcIn0ud2ktbmlnaHQtcmFpbi13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzNVxcXCJ9LndpLW5pZ2h0LXNob3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDM3XFxcIn0ud2ktbmlnaHQtc2xlZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGIzXFxcIn0ud2ktbmlnaHQtc2xlZXQtc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY5XFxcIn0ud2ktbmlnaHQtc25vdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzhcXFwifS53aS1uaWdodC1zbm93LXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNmNcXFwifS53aS1uaWdodC1zbm93LXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY2XFxcIn0ud2ktbmlnaHQtc3ByaW5rbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDM5XFxcIn0ud2ktbmlnaHQtc3Rvcm0tc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwM2FcXFwifS53aS1uaWdodC10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDNiXFxcIn0ud2ktbHVuYXItZWNsaXBzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzBcXFwifS53aS1zdGFyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzdcXFwifS53aS1zdG9ybS1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZFxcXCJ9LndpLXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1uaWdodC1hbHQtY2xvdWR5LWhpZ2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDdlXFxcIn0ud2ktbmlnaHQtY2xvdWR5LWhpZ2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDgwXFxcIn0ud2ktbmlnaHQtYWx0LXBhcnRseS1jbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDgxXFxcIn0ud2ktY2xvdWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQxXFxcIn0ud2ktY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLWNsb3VkeS1ndXN0czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTFcXFwifS53aS1jbG91ZHktd2luZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEyXFxcIn0ud2ktZm9nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLWhhaWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktcmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1yYWluLW1peDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS1yYWluLXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE4XFxcIn0ud2ktc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS1zbGVldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjVcXFwifS53aS1zbm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXNwcmlua2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXN0b3JtLXNob3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFkXFxcIn0ud2ktdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXNub3ctd2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjRcXFwifS53aS1zbm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXNtb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc0XFxcIn0ud2ktc21va2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYyXFxcIn0ud2ktbGlnaHRuaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNlxcXCJ9LndpLXJhaW5kcm9wczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNGVcXFwifS53aS1yYWluZHJvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzhcXFwifS53aS1kdXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLXNub3dmbGFrZS1jb2xkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXdpbmR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyMVxcXCJ9LndpLXN0cm9uZy13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MFxcXCJ9LndpLXNhbmRzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODJcXFwifS53aS1lYXJ0aHF1YWtlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjNlxcXCJ9LndpLWZpcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGM3XFxcIn0ud2ktZmxvb2Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDdjXFxcIn0ud2ktbWV0ZW9yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3MVxcXCJ9LndpLXRzdW5hbWk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGM1XFxcIn0ud2ktdm9sY2FubzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzhcXFwifS53aS1odXJyaWNhbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDczXFxcIn0ud2ktdG9ybmFkbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS1zbWFsbC1jcmFmdC1hZHZpc29yeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwY2NcXFwifS53aS1nYWxlLXdhcm5pbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGNkXFxcIn0ud2ktc3Rvcm0td2FybmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwY2VcXFwifS53aS1odXJyaWNhbmUtd2FybmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwY2ZcXFwifS53aS13aW5kLWRpcmVjdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjFcXFwifS53aS1hbGllbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzVcXFwifS53aS1jZWxzaXVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzY1xcXCJ9LndpLWZhaHJlbmhlaXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQ1XFxcIn0ud2ktZGVncmVlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDJcXFwifS53aS10aGVybW9tZXRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTVcXFwifS53aS10aGVybW9tZXRlci1leHRlcmlvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTNcXFwifS53aS10aGVybW9tZXRlci1pbnRlcm5hbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTRcXFwifS53aS1jbG91ZC1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzZFxcXCJ9LndpLWNsb3VkLXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0MFxcXCJ9LndpLWNsb3VkLXJlZnJlc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDNlXFxcIn0ud2ktaG9yaXpvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDdcXFwifS53aS1ob3Jpem9uLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDZcXFwifS53aS1zdW5yaXNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MVxcXCJ9LndpLXN1bnNldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTJcXFwifS53aS1tb29ucmlzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzlcXFwifS53aS1tb29uc2V0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjYVxcXCJ9LndpLXJlZnJlc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDRjXFxcIn0ud2ktcmVmcmVzaC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDRiXFxcIn0ud2ktdW1icmVsbGE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDg0XFxcIn0ud2ktYmFyb21ldGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3OVxcXCJ9LndpLWh1bWlkaXR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3YVxcXCJ9LndpLW5hOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3YlxcXCJ9LndpLXRyYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjYlxcXCJ9LndpLW1vb24tbmV3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5NVxcXCJ9LndpLW1vb24td2F4aW5nLWNyZXNjZW50LTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk2XFxcIn0ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTdcXFwifS53aS1tb29uLXdheGluZy1jcmVzY2VudC0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5OFxcXCJ9LndpLW1vb24td2F4aW5nLWNyZXNjZW50LTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk5XFxcIn0ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWFcXFwifS53aS1tb29uLXdheGluZy1jcmVzY2VudC02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5YlxcXCJ9LndpLW1vb24tZmlyc3QtcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWNcXFwifS53aS1tb29uLXdheGluZy1naWJib3VzLTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDlkXFxcIn0ud2ktbW9vbi13YXhpbmctZ2liYm91cy0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5ZVxcXCJ9LndpLW1vb24td2F4aW5nLWdpYmJvdXMtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWZcXFwifS53aS1tb29uLXdheGluZy1naWJib3VzLTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGEwXFxcIn0ud2ktbW9vbi13YXhpbmctZ2liYm91cy01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhMVxcXCJ9LndpLW1vb24td2F4aW5nLWdpYmJvdXMtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTJcXFwifS53aS1tb29uLWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGEzXFxcIn0ud2ktbW9vbi13YW5pbmctZ2liYm91cy0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhNFxcXCJ9LndpLW1vb24td2FuaW5nLWdpYmJvdXMtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTVcXFwifS53aS1tb29uLXdhbmluZy1naWJib3VzLTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE2XFxcIn0ud2ktbW9vbi13YW5pbmctZ2liYm91cy00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhN1xcXCJ9LndpLW1vb24td2FuaW5nLWdpYmJvdXMtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYThcXFwifS53aS1tb29uLXdhbmluZy1naWJib3VzLTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE5XFxcIn0ud2ktbW9vbi10aGlyZC1xdWFydGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhYVxcXCJ9LndpLW1vb24td2FuaW5nLWNyZXNjZW50LTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFiXFxcIn0ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWNcXFwifS53aS1tb29uLXdhbmluZy1jcmVzY2VudC0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhZFxcXCJ9LndpLW1vb24td2FuaW5nLWNyZXNjZW50LTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFlXFxcIn0ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWZcXFwifS53aS1tb29uLXdhbmluZy1jcmVzY2VudC02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiMFxcXCJ9LndpLW1vb24tYWx0LW5ldzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZWJcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDBcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDFcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDJcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDNcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDRcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDVcXFwifS53aS1tb29uLWFsdC1maXJzdC1xdWFydGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkNlxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGQ3XFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDhcXFwifS53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkOVxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGRhXFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZGJcXFwifS53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkY1xcXCJ9LndpLW1vb24tYWx0LWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGRkXFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZGVcXFwifS53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkZlxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGUwXFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTFcXFwifS53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlMlxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGUzXFxcIn0ud2ktbW9vbi1hbHQtdGhpcmQtcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTRcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTVcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTZcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTdcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZThcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTlcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZWFcXFwifS53aS1tb29uLTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk1XFxcIn0ud2ktbW9vbi0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5NlxcXCJ9LndpLW1vb24tMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTdcXFwifS53aS1tb29uLTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk4XFxcIn0ud2ktbW9vbi00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5OVxcXCJ9LndpLW1vb24tNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWFcXFwifS53aS1tb29uLTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDliXFxcIn0ud2ktbW9vbi03OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5Y1xcXCJ9LndpLW1vb24tODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWRcXFwifS53aS1tb29uLTk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDllXFxcIn0ud2ktbW9vbi0xMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWZcXFwifS53aS1tb29uLTExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhMFxcXCJ9LndpLW1vb24tMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGExXFxcIn0ud2ktbW9vbi0xMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTJcXFwifS53aS1tb29uLTE0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhM1xcXCJ9LndpLW1vb24tMTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE0XFxcIn0ud2ktbW9vbi0xNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTVcXFwifS53aS1tb29uLTE3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhNlxcXCJ9LndpLW1vb24tMTg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE3XFxcIn0ud2ktbW9vbi0xOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYThcXFwifS53aS1tb29uLTIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhOVxcXCJ9LndpLW1vb24tMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFhXFxcIn0ud2ktbW9vbi0yMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWJcXFwifS53aS1tb29uLTIzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhY1xcXCJ9LndpLW1vb24tMjQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFkXFxcIn0ud2ktbW9vbi0yNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWVcXFwifS53aS1tb29uLTI2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhZlxcXCJ9LndpLW1vb24tMjc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGIwXFxcIn0ud2ktdGltZS0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4YVxcXCJ9LndpLXRpbWUtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOGJcXFwifS53aS10aW1lLTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDhjXFxcIn0ud2ktdGltZS00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4ZFxcXCJ9LndpLXRpbWUtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOGVcXFwifS53aS10aW1lLTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDhmXFxcIn0ud2ktdGltZS03OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5MFxcXCJ9LndpLXRpbWUtODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTFcXFwifS53aS10aW1lLTk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDkyXFxcIn0ud2ktdGltZS0xMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTNcXFwifS53aS10aW1lLTExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5NFxcXCJ9LndpLXRpbWUtMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDg5XFxcIn0ud2ktZGlyZWN0aW9uLXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1OFxcXCJ9LndpLWRpcmVjdGlvbi11cC1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTdcXFwifS53aS1kaXJlY3Rpb24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDRkXFxcIn0ud2ktZGlyZWN0aW9uLWRvd24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDg4XFxcIn0ud2ktZGlyZWN0aW9uLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQ0XFxcIn0ud2ktZGlyZWN0aW9uLWRvd24tbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDNcXFwifS53aS1kaXJlY3Rpb24tbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDhcXFwifS53aS1kaXJlY3Rpb24tdXAtbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODdcXFwifS53aS13aW5kLWJlYXVmb3J0LTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI3XFxcIn0ud2ktd2luZC1iZWF1Zm9ydC0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiOFxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjlcXFwifS53aS13aW5kLWJlYXVmb3J0LTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGJhXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiYlxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYmNcXFwifS53aS13aW5kLWJlYXVmb3J0LTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGJkXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC03OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiZVxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYmZcXFwifS53aS13aW5kLWJlYXVmb3J0LTk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGMwXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC0xMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzFcXFwifS53aS13aW5kLWJlYXVmb3J0LTExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjMlxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGMzXFxcIn0ud2kteWFob28tMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS15YWhvby0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZVxcXCJ9LndpLXlhaG9vLTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDczXFxcIn0ud2kteWFob28tMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS15YWhvby00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXlhaG9vLTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2kteWFob28tNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS15YWhvby03OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXlhaG9vLTg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2kteWFob28tOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS15YWhvby0xMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS15YWhvby0xMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS15YWhvby0xMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS15YWhvby0xMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS15YWhvby0xNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGFcXFwifS53aS15YWhvby0xNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjRcXFwifS53aS15YWhvby0xNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS15YWhvby0xNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS15YWhvby0xODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS15YWhvby0xOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS15YWhvby0yMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS15YWhvby0yMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjFcXFwifS53aS15YWhvby0yMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjJcXFwifS53aS15YWhvby0yMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS15YWhvby0yNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS15YWhvby0yNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS15YWhvby0yNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS15YWhvby0yNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzFcXFwifS53aS15YWhvby0yODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS15YWhvby0yOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzFcXFwifS53aS15YWhvby0zMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS15YWhvby0zMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmVcXFwifS53aS15YWhvby0zMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS15YWhvby0zMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODNcXFwifS53aS15YWhvby0zNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGNcXFwifS53aS15YWhvby0zNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS15YWhvby0zNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzJcXFwifS53aS15YWhvby0zNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS15YWhvby0zODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS15YWhvby0zOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS15YWhvby00MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS15YWhvby00MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjRcXFwifS53aS15YWhvby00MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS15YWhvby00MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjRcXFwifS53aS15YWhvby00NDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGNcXFwifS53aS15YWhvby00NTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS15YWhvby00NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS15YWhvby00NzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS15YWhvby0zMjAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3N1xcXCJ9LndpLWZvcmVjYXN0LWlvLWNsZWFyLWRheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS1mb3JlY2FzdC1pby1jbGVhci1uaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmVcXFwifS53aS1mb3JlY2FzdC1pby1yYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLWZvcmVjYXN0LWlvLXNub3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktZm9yZWNhc3QtaW8tc2xlZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI1XFxcIn0ud2ktZm9yZWNhc3QtaW8td2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS1mb3JlY2FzdC1pby1mb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktZm9yZWNhc3QtaW8tY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLWZvcmVjYXN0LWlvLXBhcnRseS1jbG91ZHktZGF5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMlxcXCJ9LndpLWZvcmVjYXN0LWlvLXBhcnRseS1jbG91ZHktbmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDMxXFxcIn0ud2ktZm9yZWNhc3QtaW8taGFpbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS1mb3JlY2FzdC1pby10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktZm9yZWNhc3QtaW8tdG9ybmFkbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS13bW80NjgwLTA6YmVmb3JlLC53aS13bW80NjgwLTAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NVxcXCJ9LndpLXdtbzQ2ODAtMTpiZWZvcmUsLndpLXdtbzQ2ODAtMDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktd21vNDY4MC0yOmJlZm9yZSwud2ktd21vNDY4MC0wMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTVcXFwifS53aS13bW80NjgwLTM6YmVmb3JlLC53aS13bW80NjgwLTAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLXdtbzQ2ODAtNDpiZWZvcmUsLndpLXdtbzQ2ODAtMDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC01OmJlZm9yZSwud2ktd21vNDY4MC0wNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0xMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTZcXFwifS53aS13bW80NjgwLTE4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MFxcXCJ9LndpLXdtbzQ2ODAtMjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0yMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS13bW80NjgwLTIyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXdtbzQ2ODAtMjM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC0yNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13bW80NjgwLTI1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXdtbzQ2ODAtMjY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktd21vNDY4MC0yNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS13bW80NjgwLTI4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLXdtbzQ2ODAtMjk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktd21vNDY4MC0zMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMzI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0zMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTM0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMzU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC00MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS13bW80NjgwLTQxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtNDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC00MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS13bW80NjgwLTQ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtNDU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktd21vNDY4MC00NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS13bW80NjgwLTQ3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXdtbzQ2ODAtNDg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd21vNDY4MC01MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS13bW80NjgwLTUxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtNTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC01MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTU0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXdtbzQ2ODAtNTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktd21vNDY4MC01NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS13bW80NjgwLTU3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtNTg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC02MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS13bW80NjgwLTYxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtNjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC02MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTY0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXdtbzQ2ODAtNjU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktd21vNDY4MC02NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS13bW80NjgwLTY3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXdtbzQ2ODAtNjg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktd21vNDY4MC03MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13bW80NjgwLTcxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXdtbzQ2ODAtNzI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd21vNDY4MC03MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13bW80NjgwLTc0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXdtbzQ2ODAtNzU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktd21vNDY4MC03NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS13bW80NjgwLTc3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXdtbzQ2ODAtNzg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktd21vNDY4MC04MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTgxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtODI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC04MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTg0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZFxcXCJ9LndpLXdtbzQ2ODAtODU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktd21vNDY4MC04NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS13bW80NjgwLTg3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXdtbzQ2ODAtODk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktd21vNDY4MC05MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTZcXFwifS53aS13bW80NjgwLTkxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZFxcXCJ9LndpLXdtbzQ2ODAtOTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktd21vNDY4MC05MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS13bW80NjgwLTk0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNlxcXCJ9LndpLXdtbzQ2ODAtOTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktd21vNDY4MC05NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS13bW80NjgwLTk5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS0yMDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktb3dtLTIwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1vd20tMjAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLW93bS0yMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE2XFxcIn0ud2ktb3dtLTIxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTZcXFwifS53aS1vd20tMjEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNlxcXCJ9LndpLW93bS0yMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE2XFxcIn0ud2ktb3dtLTIzMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1vd20tMjMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLW93bS0yMzI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktb3dtLTMwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS1vd20tMzAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLW93bS0zMDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktb3dtLTMxMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS1vd20tMzExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS0zMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktb3dtLTMxMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS1vd20tMzE0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS0zMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktb3dtLTUwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS1vd20tNTAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS01MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktb3dtLTUwMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1vd20tNTA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS01MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktb3dtLTUyMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS1vd20tNTIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYVxcXCJ9LndpLW93bS01MjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2ktb3dtLTUzMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWRcXFwifS53aS1vd20tNjAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLW93bS02MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktb3dtLTYwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjVcXFwifS53aS1vd20tNjExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLW93bS02MTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktb3dtLTYxNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS1vd20tNjE2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLW93bS02MjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktb3dtLTYyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS1vd20tNjIyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLW93bS03MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktb3dtLTcxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjJcXFwifS53aS1vd20tNzIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNlxcXCJ9LndpLW93bS03MzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLTc0MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS1vd20tNzYxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLW93bS03NjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLTc3MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTFcXFwifS53aS1vd20tNzgxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS04MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktb3dtLTgwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDFcXFwifS53aS1vd20tODAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0MVxcXCJ9LndpLW93bS04MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktb3dtLTgwNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS1vd20tOTAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS05MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFkXFxcIn0ud2ktb3dtLTkwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzNcXFwifS53aS1vd20tOTAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLW93bS05MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDcyXFxcIn0ud2ktb3dtLTkwNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjFcXFwifS53aS1vd20tOTA2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLW93bS05NTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUwXFxcIn0ud2ktb3dtLWRheS0yMDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0yMDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0yMDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0yMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA1XFxcIn0ud2ktb3dtLWRheS0yMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA1XFxcIn0ud2ktb3dtLWRheS0yMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA1XFxcIn0ud2ktb3dtLWRheS0yMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA1XFxcIn0ud2ktb3dtLWRheS0yMzA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0yMzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0yMzI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0zMDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBiXFxcIn0ud2ktb3dtLWRheS0zMDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBiXFxcIn0ud2ktb3dtLWRheS0zMDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBiXFxcIn0ud2ktb3dtLWRheS01MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBiXFxcIn0ud2ktb3dtLWRheS01MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS01MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS01MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS01MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS01MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS01MjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA5XFxcIn0ud2ktb3dtLWRheS01MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA5XFxcIn0ud2ktb3dtLWRheS01MjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA5XFxcIn0ud2ktb3dtLWRheS01MzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBlXFxcIn0ud2ktb3dtLWRheS02MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBhXFxcIn0ud2ktb3dtLWRheS02MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGIyXFxcIn0ud2ktb3dtLWRheS02MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBhXFxcIn0ud2ktb3dtLWRheS02MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS02MTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS02MTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS02MTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS02MjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS02MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBhXFxcIn0ud2ktb3dtLWRheS02MjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBhXFxcIn0ud2ktb3dtLWRheS03MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAzXFxcIn0ud2ktb3dtLWRheS03MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYyXFxcIn0ud2ktb3dtLWRheS03MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI2XFxcIn0ud2ktb3dtLWRheS03MzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLWRheS03NDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAzXFxcIn0ud2ktb3dtLWRheS03NjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLWRheS03NjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLWRheS03ODE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2ktb3dtLWRheS04MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktb3dtLWRheS04MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2ktb3dtLWRheS04MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2ktb3dtLWRheS04MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktb3dtLWRheS04MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktb3dtLWRheS05MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2ktb3dtLWRheS05MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDczXFxcIn0ud2ktb3dtLWRheS05MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktb3dtLWRheS05MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDcyXFxcIn0ud2ktb3dtLWRheS05MDY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA0XFxcIn0ud2ktb3dtLWRheS05NTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUwXFxcIn0ud2ktb3dtLW5pZ2h0LTIwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmRcXFwifS53aS1vd20tbmlnaHQtMjAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZFxcXCJ9LndpLW93bS1uaWdodC0yMDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJkXFxcIn0ud2ktb3dtLW5pZ2h0LTIxMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjVcXFwifS53aS1vd20tbmlnaHQtMjExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNVxcXCJ9LndpLW93bS1uaWdodC0yMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI1XFxcIn0ud2ktb3dtLW5pZ2h0LTIyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjVcXFwifS53aS1vd20tbmlnaHQtMjMwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZFxcXCJ9LndpLW93bS1uaWdodC0yMzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJkXFxcIn0ud2ktb3dtLW5pZ2h0LTIzMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmRcXFwifS53aS1vd20tbmlnaHQtMzAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYlxcXCJ9LndpLW93bS1uaWdodC0zMDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJiXFxcIn0ud2ktb3dtLW5pZ2h0LTMwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtMzEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC0zMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTMxMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtMzEzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC0zMTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTMyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmJcXFwifS53aS1vd20tbmlnaHQtNTAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYlxcXCJ9LndpLW93bS1uaWdodC01MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTUwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtNTAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC01MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTUxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjZcXFwifS53aS1vd20tbmlnaHQtNTIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOVxcXCJ9LndpLW93bS1uaWdodC01MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI5XFxcIn0ud2ktb3dtLW5pZ2h0LTUyMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjlcXFwifS53aS1vd20tbmlnaHQtNTMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyY1xcXCJ9LndpLW93bS1uaWdodC02MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJhXFxcIn0ud2ktb3dtLW5pZ2h0LTYwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjRcXFwifS53aS1vd20tbmlnaHQtNjAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYVxcXCJ9LndpLW93bS1uaWdodC02MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI2XFxcIn0ud2ktb3dtLW5pZ2h0LTYxMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjZcXFwifS53aS1vd20tbmlnaHQtNjE1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNlxcXCJ9LndpLW93bS1uaWdodC02MTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI2XFxcIn0ud2ktb3dtLW5pZ2h0LTYyMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjZcXFwifS53aS1vd20tbmlnaHQtNjIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYVxcXCJ9LndpLW93bS1uaWdodC02MjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJhXFxcIn0ud2ktb3dtLW5pZ2h0LTcwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNGFcXFwifS53aS1vd20tbmlnaHQtNzExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2MlxcXCJ9LndpLW93bS1uaWdodC03MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI2XFxcIn0ud2ktb3dtLW5pZ2h0LTczMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1vd20tbmlnaHQtNzQxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0YVxcXCJ9LndpLW93bS1uaWdodC03NjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLW5pZ2h0LTc2MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1vd20tbmlnaHQtNzgxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS1uaWdodC04MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJlXFxcIn0ud2ktb3dtLW5pZ2h0LTgwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODFcXFwifS53aS1vd20tbmlnaHQtODAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4NlxcXCJ9LndpLW93bS1uaWdodC04MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktb3dtLW5pZ2h0LTgwNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS1vd20tbmlnaHQtOTAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS1uaWdodC05MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDczXFxcIn0ud2ktb3dtLW5pZ2h0LTkwMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS1vd20tbmlnaHQtOTA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3MlxcXCJ9LndpLW93bS1uaWdodC05MDY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI0XFxcIn0ud2ktb3dtLW5pZ2h0LTk1NzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS13dS1jaGFuY2VmbHVycmllczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjRcXFwifS53aS13dS1jaGFuY2VyYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXd1LWNoYW5jZXNsZWF0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNVxcXCJ9LndpLXd1LWNoYW5jZXNub3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd3UtY2hhbmNldHN0b3JtczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS13dS1jbGVhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS13dS1jbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2ktd3UtZmx1cnJpZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY0XFxcIn0ud2ktd3UtaGF6eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjZcXFwifS53aS13dS1tb3N0bHljbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2ktd3UtbW9zdGx5c3Vubnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktd3UtcGFydGx5Y2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMlxcXCJ9LndpLXd1LXBhcnRseXN1bm55OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZFxcXCJ9LndpLXd1LXJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2ktd3Utc2xlYXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI1XFxcIn0ud2ktd3Utc25vdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13dS1zdW5ueTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS13dS10c3Rvcm1zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXd1LXVua25vd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0vKiMgc291cmNlTWFwcGluZ1VSTD13ZWF0aGVyLWljb25zLm1pbi5jc3MubWFwICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmcm9tVW5peFRpbWVcbiAqIEBjYXRlZ29yeSBUaW1lc3RhbXAgSGVscGVyc1xuICogQHN1bW1hcnkgQ3JlYXRlIGEgZGF0ZSBmcm9tIGEgVW5peCB0aW1lc3RhbXAuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcykuIERlY2ltYWwgdmFsdWVzIHdpbGwgYmUgZGlzY2FyZGVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHVuaXhUaW1lIC0gdGhlIGdpdmVuIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKVxuICogQHJldHVybnMge0RhdGV9IHRoZSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlIHRoZSBkYXRlIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDU6XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tVW5peFRpbWUoMTMzMDUxNTkwNSlcbiAqIC8vPT4gV2VkIEZlYiAyOSAyMDEyIDExOjQ1OjA1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnJvbVVuaXhUaW1lKGRpcnR5VW5peFRpbWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB1bml4VGltZSA9IHRvSW50ZWdlcihkaXJ0eVVuaXhUaW1lKTtcbiAgcmV0dXJuIHRvRGF0ZSh1bml4VGltZSAqIDEwMDApO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlci1pY29ucy5taW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyLWljb25zLm1pbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGhhbmRsZUVycm9yID1cbiAgKGZuKSA9PlxuICAoLi4ucGFyYW1zKSA9PlxuICAgIGZuKC4uLnBhcmFtcykuY2F0Y2goKGUpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWdyZWUgPSAnwrAnO1xuXG5leHBvcnQgY29uc3QgYWRkQ2hpbGRyZW4gPSAoY29udGFpbmVyLCBjaGlsZEVsQXJyKSA9PiB7XG4gIGlmIChjaGlsZEVsQXJyICYmIGNoaWxkRWxBcnIubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgZWwgb2YgY2hpbGRFbEFycikge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb250YWluZXIgPSAodHlwZSA9ICdkaXYnLCBjbGFzc05hbWUsIGNoaWxkRWxBcnIpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYoY2xhc3NOYW1lKSBkaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBhZGRDaGlsZHJlbihkaXYsIGNoaWxkRWxBcnIpO1xuICByZXR1cm4gZGl2O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoaWxkcmVuID0gKHBhcmVudEVsKSA9PiB7XG4gIHdoaWxlIChwYXJlbnRFbC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50RWwucmVtb3ZlQ2hpbGQocGFyZW50RWwuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcmV2aW91c0RheURUID0gKCkgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbn07XG4iLCJpbXBvcnQge2Zvcm1hdCwgZnJvbVVuaXhUaW1lfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQge3JlbW92ZUNoaWxkcmVuLCBjcmVhdGVDb250YWluZXIsIGFkZENoaWxkcmVuLCBkZWdyZWV9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVyJztcblxuY29uc3QgRm9yZWNhc3RVSSA9IChXZWF0aGVyKSA9PiB7XG4gIGNvbnN0ICRmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuICBjb25zdCAkbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcbiAgY29uc3QgJHNtYWxsRGV0YWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNtYWxsLWRldGFpbHMnKTtcbiAgY29uc3QgJGN1cnJXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKTtcbiAgY29uc3QgJGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHknKTtcblxuICBjb25zdCBfY3JlYXRlTG9jYXRpb24gPSAoY2l0eSwgZGF0ZSkgPT4ge1xuICAgIHJlbW92ZUNoaWxkcmVuKCRsb2NhdGlvbik7XG4gICAgY29uc3QgY2l0eVNwYW4gPSBjcmVhdGVDb250YWluZXIoJ3NwYW4nLCAnY2l0eScpO1xuICAgIGNvbnN0IGRhdGVTcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJywgJ2RhdGUnKTtcblxuICAgIGNpdHlTcGFuLnRleHRDb250ZW50ID0gY2l0eTtcbiAgICBkYXRlU3Bhbi50ZXh0Q29udGVudCA9IGZvcm1hdChkYXRlLCAnZCBNTU1NIHl5eXknKTtcbiAgICBhZGRDaGlsZHJlbigkbG9jYXRpb24sIFtjaXR5U3BhbiwgZGF0ZVNwYW5dKTtcbiAgfTtcblxuICBjb25zdCBfY3JlYXRlU21hbGxEZXRhaWwgPSAoZGF0ZSwgdGVtcCwgbG93VGVtcCwgaGlnaFRlbXAsIGZlZWwpID0+IHtcbiAgICByZW1vdmVDaGlsZHJlbigkc21hbGxEZXRhaWwpO1xuICAgIHRlbXAgPSBNYXRoLmZsb29yKHRlbXApO1xuICAgIGxvd1RlbXAgPSBNYXRoLmZsb29yKGxvd1RlbXApO1xuICAgIGhpZ2hUZW1wID0gTWF0aC5mbG9vcihoaWdoVGVtcCk7XG4gICAgZmVlbCA9IE1hdGguZmxvb3IoZmVlbCk7XG4gICAgY29uc3QgZGF5U3BhbiA9IGNyZWF0ZUNvbnRhaW5lcignc3BhbicsICdkYXknKTtcbiAgICBjb25zdCB0aW1lU3BhbiA9IGNyZWF0ZUNvbnRhaW5lcignc3BhbicsICd0aW1lJyk7XG4gICAgY29uc3QgbGhTcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJywgJ2xvdy1oaWdoJyk7XG4gICAgY29uc3QgdGVtcFNwYW4gPSBjcmVhdGVDb250YWluZXIoJ3NwYW4nLCAndGVtcCcpO1xuICAgIGNvbnN0IGZlZWxTcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJywgJ2ZlZWwnKTtcblxuICAgIGRheVNwYW4udGV4dENvbnRlbnQgPSBmb3JtYXQoZGF0ZSwgJ0VFRUUnKTtcbiAgICB0aW1lU3Bhbi50ZXh0Q29udGVudCA9IGZvcm1hdChkYXRlLCAnaDptbWFhYScpO1xuICAgIGxoU3Bhbi50ZXh0Q29udGVudCA9IGBIOiR7aGlnaFRlbXB9JHtkZWdyZWV9IEw6JHtsb3dUZW1wfSR7ZGVncmVlfWA7XG4gICAgdGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHt0ZW1wfSR7ZGVncmVlfWA7XG4gICAgZmVlbFNwYW4udGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtmZWVsfSR7ZGVncmVlfWA7XG5cbiAgICBhZGRDaGlsZHJlbigkc21hbGxEZXRhaWwsIFtkYXlTcGFuLCB0aW1lU3BhbiwgbGhTcGFuLCB0ZW1wU3BhbiwgZmVlbFNwYW5dKTtcbiAgfTtcblxuICBjb25zdCBfY3JlYXRlQ3VycldlYXRoZXIgPSAoY29uZGl0aW9uSUQsIGNvbmRpdGlvbikgPT4ge1xuICAgIHJlbW92ZUNoaWxkcmVuKCRjdXJyV2VhdGhlcik7XG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUNvbnRhaW5lcignaScsIGB3aSB3aS1vd20tJHtjb25kaXRpb25JRH1gKTtcbiAgICBjb25zdCBjb25kaXRpb25TcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJywgJ2NvbmRpdGlvbicpO1xuICAgIGNvbmRpdGlvblNwYW4udGV4dENvbnRlbnQgPSBjb25kaXRpb247XG4gICAgYWRkQ2hpbGRyZW4oJGN1cnJXZWF0aGVyLCBbaWNvbiwgY29uZGl0aW9uU3Bhbl0pO1xuICB9O1xuXG4gIGNvbnN0IF9jcmVhdGVIb3VybHlGb3JlY2FzdCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgVE9UQUxfQ0FSRFMgPSAxMTtcbiAgICByZW1vdmVDaGlsZHJlbigkaG91cmx5KTtcbiAgICBjb25zdCBjcmVhdGVDYXJkID0gKHtkYXRlLCBpY29uSUQsIGNvbmRpdGlvbiwgdGVtcCwgcHJlY2lwaXRhdGlvbkNoYW5jZX0pID0+IHtcbiAgICAgIGNvbnN0IHRpbWVTcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJyk7XG4gICAgICBjb25zdCBpY29uID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJywgYHdpIHdpLW93bS0ke2ljb25JRH1gKTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvblNwYW4gPSBjcmVhdGVDb250YWluZXIoJ3NwYW4nLCAnY29uZGl0aW9uJyk7XG4gICAgICBjb25zdCB0ZW1wU3BhbiA9IGNyZWF0ZUNvbnRhaW5lcignc3BhbicsICd0ZW1wJyk7XG4gICAgICBjb25zdCByYWluU3BhbiA9IGNyZWF0ZUNvbnRhaW5lcignc3BhbicsICdyYWluJyk7XG5cbiAgICAgIHRpbWVTcGFuLnRleHRDb250ZW50ID0gZm9ybWF0KGRhdGUsICdoOm1tYWFhJyk7XG4gICAgICBjb25kaXRpb25TcGFuLnRleHRDb250ZW50ID0gY29uZGl0aW9uO1xuICAgICAgdGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHt0ZW1wfSR7ZGVncmVlfWA7XG5cbiAgICAgIGlmIChwcmVjaXBpdGF0aW9uQ2hhbmNlKSB7XG4gICAgICAgIGNvbnN0IGNoYW5jZSA9IE1hdGguZmxvb3IocHJlY2lwaXRhdGlvbkNoYW5jZSAqIDEwMCk7XG4gICAgICAgIGNvbnN0IHJhaW5kcm9wSWNvbiA9IGNyZWF0ZUNvbnRhaW5lcignaScsICd3aSB3aS1yYWluZHJvcCcpO1xuICAgICAgICByYWluU3Bhbi5hcHBlbmRDaGlsZChyYWluZHJvcEljb24pO1xuICAgICAgICByYWluU3Bhbi50ZXh0Q29udGVudCA9IGAke2NoYW5jZX0lYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVDb250YWluZXIoJ2RpdicsICdjYXJkJywgW3RpbWVTcGFuLCBpY29uLCBjb25kaXRpb25TcGFuLCB0ZW1wU3BhbiwgcmFpblNwYW5dKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FyZEFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IFRPVEFMX0NBUkRTOyBpKyspIHtcbiAgICAgIGNvbnN0IHtkdCwgdGVtcCwgd2VhdGhlciwgcG9wfSA9IGRhdGFbaV07XG4gICAgICBjb25zdCBkYXRlID0gZnJvbVVuaXhUaW1lKGR0KTtcbiAgICAgIGNvbnN0IGljb25JRCA9IHdlYXRoZXJbMF0/LmlkO1xuICAgICAgY29uc3QgY29uZGl0aW9uID0gd2VhdGhlclswXT8uZGVzY3JpcHRpb247XG4gICAgICBjYXJkQXJyLnB1c2goY3JlYXRlQ2FyZCh7ZGF0ZSwgdGVtcCwgaWNvbklELCBjb25kaXRpb24sIHByZWNpcGl0YXRpb25DaGFuY2U6IHBvcH0pKTtcbiAgICB9XG5cbiAgICBhZGRDaGlsZHJlbigkaG91cmx5LCBjYXJkQXJyKTtcbiAgfTtcblxuICBjb25zdCBfcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJXZWF0aGVyID0gV2VhdGhlci5kYXRhLmN1cnJlbnQ7XG4gICAgY29uc3QgZGF0ZSA9IGZyb21Vbml4VGltZShjdXJyV2VhdGhlci5kdCk7XG4gICAgY29uc3QgZGFpbHkgPSBXZWF0aGVyLmRhdGEuZGFpbHk7XG4gICAgY29uc3QgdG9kYXlNaW5UZW1wID0gZGFpbHlbMF0udGVtcC5taW47XG4gICAgY29uc3QgdG9kYXlNYXhUZW1wID0gZGFpbHlbMF0udGVtcC5tYXg7XG4gICAgY29uc3QgaWNvbklEID0gY3VycldlYXRoZXIud2VhdGhlclswXS5pZDtcbiAgICBjb25zdCBjb25kaXRpb24gPSBjdXJyV2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gICAgX2NyZWF0ZUxvY2F0aW9uKFdlYXRoZXIubmFtZSwgZGF0ZSk7XG4gICAgX2NyZWF0ZVNtYWxsRGV0YWlsKGRhdGUsIGN1cnJXZWF0aGVyLnRlbXAsIHRvZGF5TWluVGVtcCwgdG9kYXlNYXhUZW1wLCBjdXJyV2VhdGhlci5mZWVsc19saWtlKTtcbiAgICBfY3JlYXRlQ3VycldlYXRoZXIoaWNvbklELCBjb25kaXRpb24pO1xuICAgIF9jcmVhdGVIb3VybHlGb3JlY2FzdChXZWF0aGVyLmRhdGEuaG91cmx5KTtcbiAgfTtcblxuICBjb25zdCBzZXREYXRhID0gKG5ld1dlYXRoZXIpID0+IHtcbiAgICBXZWF0aGVyID0gbmV3V2VhdGhlcjtcbiAgICBfcmVuZGVyKCk7XG4gIH07XG5cbiAgX3JlbmRlcigpO1xuXG4gIHJldHVybiB7XG4gICAgc2V0RGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmVjYXN0VUk7XG4iLCJpbXBvcnQgV2VhdGhlciBmcm9tICcuL3dlYXRoZXInO1xuaW1wb3J0IFdlYXRoZXJDb250cm9sbGVyIGZyb20gJy4vd2VhdGhlckNvbnRyb2xsZXInO1xuaW1wb3J0IEZvcmVjYXN0VUkgZnJvbSAnLi9Gb3JlY2FzdFVJJztcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgY29uc3QgZGVncmVlID0gJ8KwJztcbiAgY29uc3QgbGF0ID0gNDAuNzMwNjE7XG4gIGNvbnN0IGxvbiA9IC03My45MzUyNDI7XG5cbiAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJDb250cm9sbGVyLmdldERhdGEobGF0LCBsb24pXG4gIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3ZWF0aGVyJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3ZWF0aGVyJykpO1xuXG4gIGNvbnN0IHdlYXRoZXIgPSBXZWF0aGVyKCdOZXcgWW9yayBDaXR5JywgJ1VuaXRlZCBTdGF0ZXMnLCBkYXRhKTtcblxuICBjb25zdCBmb3JlY2FzdCA9IEZvcmVjYXN0VUkod2VhdGhlcik7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluO1xuIiwiY29uc3QgV2VhdGhlciA9IChuYW1lLCBjb3VudHJ5LCBkYXRhKSA9PntcbiAgcmV0dXJuIHtuYW1lLCBjb3VudHJ5LCBkYXRhfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjsiLCJpbXBvcnQge2dldFByZXZpb3VzRGF5RFQsIGhhbmRsZUVycm9yfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcic7XG5cbmNvbnN0IEZSRUUgPSAnMTdjMDc3NTA3NTUwOGVjNDlmMjkxM2NhN2YwMmJmNDQnO1xuY29uc3QgR0VPQ09ESU5HX1VSTCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9hcHBpZD0ke0ZSRUV9YDtcbmNvbnN0IE9ORV9DQUxMX1VSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9hcHBpZD0ke0ZSRUV9JnVuaXRzPW1ldHJpY2A7XG5jb25zdCBPTkVfQ0FMTF9ISVNUX1VSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbC90aW1lbWFjaGluZT9hcHBpZD0ke0ZSRUV9JnVuaXRzPW1ldHJpY2A7XG5cbmNvbnN0IFdlYXRoZXJDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgZ2VvY29kZVVuc2FmZSA9IGFzeW5jIChxLCBsaW1pdCA9IDUpID0+IHtcbiAgICBpZiAoIXEpIHJldHVybjtcbiAgICBsZXQgdXJsID0gR0VPQ09ESU5HX1VSTDtcbiAgICB1cmwgKz0gYCZsaW1pdD0ke2xpbWl0fWA7XG4gICAgdXJsICs9IGAmcT0ke3F9YDtcblxuICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHtuYW1lLCBjb3VudHJ5LCBzdGF0ZX0gPSBhd2FpdCBkYXRhUmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHtuYW1lLCBjb3VudHJ5LCBzdGF0ZSwgbGF0LCBsb259O1xuICB9O1xuXG4gIGNvbnN0IGdldERhdGFVbnNhZmUgPSBhc3luYyAobGF0LCBsb24sIHVuaXRzID0gJ21ldHJpYycsIGV4Y2x1ZGUgPSAnbWludXRlbHksYWxlcnRzJykgPT4ge1xuICAgIGlmICghbGF0IHx8ICFsb24pIHJldHVybjtcbiAgICBjb25zdCB1cmwgPSBgJHtPTkVfQ0FMTF9VUkx9JmxhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz0ke3VuaXRzfSZleGNsdWRlPSR7ZXhjbHVkZX1gO1xuICAgIGxldCBkYXRhUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBjdXJyRGF0YSA9IGF3YWl0IGRhdGFSZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBoaXN0VVJMID0gYCR7T05FX0NBTExfSElTVF9VUkx9JmxhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz0ke3VuaXRzfSZkdD0ke2dldFByZXZpb3VzRGF5RFQoKX1gO1xuICAgIGRhdGFSZXNwb25zZSA9IGF3YWl0IGZldGNoKGhpc3RVUkwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBoaXN0RGF0YSA9IGF3YWl0IGRhdGFSZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY3VyckRhdGEsIHtwcmV2aW91czogaGlzdERhdGF9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdlb2NvZGU6IGhhbmRsZUVycm9yKGdlb2NvZGVVbnNhZmUpLFxuICAgIGdldERhdGE6IGhhbmRsZUVycm9yKGdldERhdGFVbnNhZmUpLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckNvbnRyb2xsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBtYWluIGZyb20gJy4vbW9kdWxlcy9VSSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi93ZWF0aGVyLWljb25zLm1pbi5jc3MnO1xuXG5jb25zdCBkZWdyZWUgPSAnwrAnO1xuXG5tYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=