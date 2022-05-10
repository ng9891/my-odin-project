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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Ubuntu';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Ubuntu', 'Courier New', Courier, monospace;\n}\n\n:root {\n  --color-main: white;\n  --color-secondary: #3d5a80;\n  --color-tertiary: #293241;\n  --color-accent-main: rgba(238, 109, 77, 0.8);\n  --color-accent-main-hover: #ee6c4d;\n\n  --color-rain: blue;\n\n  --font-color-main: black;\n  --font-color-secondary: white;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  gap: 1rem;\n  background-color: var(--color-secondary);\n  color: var(--font-color-secondary);\n}\n\nheader .logo {\n  text-align: center;\n}\n\nheader .search {\n  display: flex;\n  height: 1.5rem;\n}\n\nheader .search input {\n  width: 100%;\n  padding: 0 0.5rem;\n  border-radius: 0;\n  outline: none;\n  border: 1px solid black;\n}\n\nheader .search input:focus {\n  border-radius: 0;\n  outline: none;\n}\n\nheader .search button {\n  cursor: pointer;\n  padding-inline: 0.5rem;\n  background-color: var(--color-accent-main);\n  box-shadow: none;\n  border: 1px solid black;\n  border-left-style: none;\n  border-radius: 0;\n  outline: none;\n}\n\nheader .search button:hover,\nheader .search button:active {\n  background-color: var(--color-accent-main-hover);\n}\n\nheader .btn-container {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 1rem;\n}\n\nheader .btn-container > span {\n  cursor: pointer;\n}\n\nheader .btn-container > span.active {\n  font-weight: bold;\n  font-size: 1.05rem;\n  text-decoration: underline;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  --general-padding-inline: 1rem;\n}\n\nmain .forecast {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: 'location location' 'detail weather' 'hourly hourly';\n  text-transform: uppercase;\n  width: 100%;\n  padding-inline: var(--general-padding-inline);\n  gap: 1rem;\n}\n\nmain .forecast .location {\n  grid-area: location;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.5rem;\n  flex-wrap: wrap;\n}\n\nmain .forecast .location span.city {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\nmain .forecast .location span.date {\n  display: flex;\n}\n\nmain .forecast .small-details {\n  grid-area: detail;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: start;\n}\n\nmain .forecast .small-details span:not(.time) {\n  font-weight: 500;\n}\n\nmain .forecast .small-details .time {\n  font-size: 0.8rem;\n}\n\nmain .forecast .small-details .temp {\n  font-size: 4rem;\n  display: flex;\n  align-items: flex-end;\n  line-height: 0.9;\n}\n\nmain .forecast .small-details .feel {\n  font-size: 0.8rem;\n  font-style: italic;\n}\n\nmain .forecast .weather {\n  grid-area: weather;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\nmain .forecast .weather i {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  font-size: 4rem;\n}\n\nmain .forecast .weather .condition {\n  text-align: center;\n}\n\nmain .hourly {\n  grid-area: hourly;\n  display: flex;\n  overflow-x: auto;\n  flex-wrap: nowrap;\n  width: 100%;\n  gap: var(--card-gap);\n  margin: 1rem 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  --card-gap: 1rem;\n  --card-shown: 3;\n  --padding-card: 1rem;\n}\n\nmain .hourly > .card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n  padding: var(--padding-card) 0;\n  flex: 1 0 calc((100% - var(--card-gap) * var(--card-shown) + var(--padding-card)) / var(--card-shown));\n  height: 100%;\n}\n\nmain .hourly > .card i:not(.wi-raindrop) {\n  font-size: 1.4rem;\n}\n\nmain .hourly > .card .condition {\n  font-size: 0.8rem;\n  overflow-wrap: anywhere;\n  text-align: center;\n  flex-shrink: 1;\n  flex-basis: 25%;\n}\n\nmain .hourly > .card .rain {\n  font-size: 0.75rem;\n  color: var(--color-rain);\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n\nmain .details {\n  --padding: 1.5rem;\n  --gap: 1rem;\n  --details-per-row: 2;\n\n  width: 100%;\n  background-color: var(--color-tertiary);\n  color: var(--font-color-secondary);\n  display: flex;\n  flex-wrap: wrap;\n\n  padding: var(--padding);\n  gap: var(--gap);\n}\n\nmain .details > .info {\n  flex-grow: 1;\n  flex-basis: calc(100% / var(--details-per-row) - var(--padding));\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow-wrap: break-word;\n}\n\nmain .details > .info span:first-of-type {\n  opacity: 0.5;\n  font-size: 0.9rem;\n  text-transform: capitalize;\n  text-align: center;\n}\n\nmain .daily {\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem;\n  width: 100%;\n}\n\nmain .daily > div {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n}\n\nmain .daily > div span:first-of-type {\n  flex-grow: 1;\n}\n\nmain .daily > div i {\n  font-size: 1.2rem;\n}\n\nfooter {\n  border-top: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem;\n  background-color: var(--color-tertiary);\n  color: var(--font-color-secondary);\n}\n\nfooter > span {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n\n@media only screen and (min-width: 760px) {\n  main {\n    --general-padding-inline: 20%;\n  }\n\n  main .hourly {\n    --card-shown: 5;\n  }\n\n  main .details {\n    --details-per-row: 3;\n  }\n\n  main .daily {\n    padding-inline: var(--general-padding-inline);\n  }\n}\n\n@media only screen and (min-width: 1280px) {\n  header {\n    flex-direction: row;\n    justify-content: center;\n    padding-inline: 30%;\n  }\n\n  header .search {\n    flex: 1;\n  }\n\n  main {\n    --general-padding-inline: 30%;\n  }\n\n  main .forecast {\n    padding: 2rem var(--general-padding-inline);\n  }\n\n  main .hourly {\n    --card-shown: 5;\n  }\n\n  main .details {\n    --details-per-row: 4;\n    padding: 2.5rem calc(var(--general-padding-inline) - 10%);\n  }\n\n  main .daily {\n    padding-inline: var(--general-padding-inline);\n  }\n}\n\n@media only screen and (min-width: 1920px) {\n  main {\n    --general-padding-inline: 37%;\n  }\n\n  main .details {\n    padding-inline: calc(var(--general-padding-inline) - 5%);\n  }\n\n  main .daily {\n    padding-inline: var(--general-padding-inline);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Ubuntu';\n  src: url(./assets/font/Ubuntu-Regular.ttf) format('ttf');\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Ubuntu', 'Courier New', Courier, monospace;\n}\n\n:root {\n  --color-main: white;\n  --color-secondary: #3d5a80;\n  --color-tertiary: #293241;\n  --color-accent-main: rgba(238, 109, 77, 0.8);\n  --color-accent-main-hover: #ee6c4d;\n\n  --color-rain: blue;\n\n  --font-color-main: black;\n  --font-color-secondary: white;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  gap: 1rem;\n  background-color: var(--color-secondary);\n  color: var(--font-color-secondary);\n}\n\nheader .logo {\n  text-align: center;\n}\n\nheader .search {\n  display: flex;\n  height: 1.5rem;\n}\n\nheader .search input {\n  width: 100%;\n  padding: 0 0.5rem;\n  border-radius: 0;\n  outline: none;\n  border: 1px solid black;\n}\n\nheader .search input:focus {\n  border-radius: 0;\n  outline: none;\n}\n\nheader .search button {\n  cursor: pointer;\n  padding-inline: 0.5rem;\n  background-color: var(--color-accent-main);\n  box-shadow: none;\n  border: 1px solid black;\n  border-left-style: none;\n  border-radius: 0;\n  outline: none;\n}\n\nheader .search button:hover,\nheader .search button:active {\n  background-color: var(--color-accent-main-hover);\n}\n\nheader .btn-container {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 1rem;\n}\n\nheader .btn-container > span {\n  cursor: pointer;\n}\n\nheader .btn-container > span.active {\n  font-weight: bold;\n  font-size: 1.05rem;\n  text-decoration: underline;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  --general-padding-inline: 1rem;\n}\n\nmain .forecast {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: 'location location' 'detail weather' 'hourly hourly';\n  text-transform: uppercase;\n  width: 100%;\n  padding-inline: var(--general-padding-inline);\n  gap: 1rem;\n}\n\nmain .forecast .location {\n  grid-area: location;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.5rem;\n  flex-wrap: wrap;\n}\n\nmain .forecast .location span.city {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\nmain .forecast .location span.date {\n  display: flex;\n}\n\nmain .forecast .small-details {\n  grid-area: detail;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: start;\n}\n\nmain .forecast .small-details span:not(.time) {\n  font-weight: 500;\n}\n\nmain .forecast .small-details .time {\n  font-size: 0.8rem;\n}\n\nmain .forecast .small-details .temp {\n  font-size: 4rem;\n  display: flex;\n  align-items: flex-end;\n  line-height: 0.9;\n}\n\nmain .forecast .small-details .feel {\n  font-size: 0.8rem;\n  font-style: italic;\n}\n\nmain .forecast .weather {\n  grid-area: weather;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\nmain .forecast .weather i {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  font-size: 4rem;\n}\n\nmain .forecast .weather .condition {\n  text-align: center;\n}\n\nmain .hourly {\n  grid-area: hourly;\n  display: flex;\n  overflow-x: auto;\n  flex-wrap: nowrap;\n  width: 100%;\n  gap: var(--card-gap);\n  margin: 1rem 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  --card-gap: 1rem;\n  --card-shown: 3;\n  --padding-card: 1rem;\n}\n\nmain .hourly > .card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n  padding: var(--padding-card) 0;\n  flex: 1 0 calc((100% - var(--card-gap) * var(--card-shown) + var(--padding-card)) / var(--card-shown));\n  height: 100%;\n}\n\nmain .hourly > .card i:not(.wi-raindrop) {\n  font-size: 1.4rem;\n}\n\nmain .hourly > .card .condition {\n  font-size: 0.8rem;\n  overflow-wrap: anywhere;\n  text-align: center;\n  flex-shrink: 1;\n  flex-basis: 25%;\n}\n\nmain .hourly > .card .rain {\n  font-size: 0.75rem;\n  color: var(--color-rain);\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n\nmain .details {\n  --padding: 1.5rem;\n  --gap: 1rem;\n  --details-per-row: 2;\n\n  width: 100%;\n  background-color: var(--color-tertiary);\n  color: var(--font-color-secondary);\n  display: flex;\n  flex-wrap: wrap;\n\n  padding: var(--padding);\n  gap: var(--gap);\n}\n\nmain .details > .info {\n  flex-grow: 1;\n  flex-basis: calc(100% / var(--details-per-row) - var(--padding));\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow-wrap: break-word;\n}\n\nmain .details > .info span:first-of-type {\n  opacity: 0.5;\n  font-size: 0.9rem;\n  text-transform: capitalize;\n  text-align: center;\n}\n\nmain .daily {\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem;\n  width: 100%;\n}\n\nmain .daily > div {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n}\n\nmain .daily > div span:first-of-type {\n  flex-grow: 1;\n}\n\nmain .daily > div i {\n  font-size: 1.2rem;\n}\n\nfooter {\n  border-top: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem;\n  background-color: var(--color-tertiary);\n  color: var(--font-color-secondary);\n}\n\nfooter > span {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n\n@media only screen and (min-width: 760px) {\n  main {\n    --general-padding-inline: 20%;\n  }\n\n  main .hourly {\n    --card-shown: 5;\n  }\n\n  main .details {\n    --details-per-row: 3;\n  }\n\n  main .daily {\n    padding-inline: var(--general-padding-inline);\n  }\n}\n\n@media only screen and (min-width: 1280px) {\n  header {\n    flex-direction: row;\n    justify-content: center;\n    padding-inline: 30%;\n  }\n\n  header .search {\n    flex: 1;\n  }\n\n  main {\n    --general-padding-inline: 30%;\n  }\n\n  main .forecast {\n    padding: 2rem var(--general-padding-inline);\n  }\n\n  main .hourly {\n    --card-shown: 5;\n  }\n\n  main .details {\n    --details-per-row: 4;\n    padding: 2.5rem calc(var(--general-padding-inline) - 10%);\n  }\n\n  main .daily {\n    padding-inline: var(--general-padding-inline);\n  }\n}\n\n@media only screen and (min-width: 1920px) {\n  main {\n    --general-padding-inline: 37%;\n  }\n\n  main .details {\n    padding-inline: calc(var(--general-padding-inline) - 5%);\n  }\n\n  main .daily {\n    padding-inline: var(--general-padding-inline);\n  }\n}\n"],"sourceRoot":""}]);
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
  if (className) div.className = className;
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

/***/ "./src/modules/DailyUI.js":
/*!********************************!*\
  !*** ./src/modules/DailyUI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/fromUnixTime/index.js");



const DailyUI = (Weather) => {
  const $daily = document.querySelector('main .daily');
  const _createDaily = (data) => {
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.removeChildren)($daily);

    for (const {dt, weather, temp, pop} of data) {
      // {dt, weather, temp, pop}
      const daySpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span');
      const icon = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('i', `wi wi-owm-${weather[0].id}`);
      const conditionSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span');
      const popSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span');
      const tempSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span');

      daySpan.textContent = dt === 'Yesterday' ? 'Yesterday' : (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(dt), 'EEEE');
      conditionSpan.textContent = weather[0].main;
      popSpan.textContent = pop ? `${Math.floor(pop * 100)}%` : ' ';
      tempSpan.textContent = `${Math.floor(temp.max ? temp.max : temp)}${_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.degree}`;

      const div = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('div', 'card', [daySpan, icon, conditionSpan, tempSpan]);
      $daily.append(div);
    }
  };

  const _render = () => {
    const data = Weather.data.daily;
    const yesterday = Weather.data.previous.current;
    yesterday.dt = 'Yesterday';
    data.unshift(yesterday);
    _createDaily(data);

    console.log(data);
  };

  const setWeather = (newWeather) => {
    Weather = newWeather;
    _render();
  };

  _render();
  return {
    setWeather,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyUI);


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
  const $location = document.querySelector('.forecast .location');
  const $smallDetail = document.querySelector('.forecast .small-details');
  const $currWeather = document.querySelector('.forecast .weather');
  const $hourly = document.querySelector('.forecast .hourly');
  const $details = document.querySelector('main .details');

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
      const icon = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('i', `wi wi-owm-${iconID}`);
      const conditionSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'condition');
      const tempSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'temp');
      const rainSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span', 'rain');

      timeSpan.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date, 'h:mmaaa');
      conditionSpan.textContent = condition;
      tempSpan.textContent = `${Math.floor(temp)}${_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.degree}`;

      if (precipitationChance) {
        const chance = Math.floor(precipitationChance * 100);
        const raindropIcon = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('i', 'wi wi-raindrop');
        rainSpan.textContent = `${chance}%`;
        rainSpan.prepend(raindropIcon);
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

  const _createDetails = (data, pop) => {
    (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.removeChildren)($details);
    const addCard = (key, value) => {
      const titleSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span');
      const infoSpan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('span');
      titleSpan.textContent = key;
      infoSpan.textContent = value;
      const container = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.createContainer)('div', 'info', [titleSpan, infoSpan]);
      $details.appendChild(container);
    };

    const {sunrise, sunset, humidity, pressure, visibility, wind_speed, wind_deg, rain, snow, uvi} = data;
    let precipitation = '0mm';
    let chance = '0%';
    if (rain) {
      precipitation = `${rain['1h']}mm`;
      chance = ` ${pop * 100}%`;
    } else if (snow) {
      precipitation = `${snow['1h']}mm`;
      chance = `${pop * 100}%`;
    }
    const detailObj = {
      sunrise: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(sunrise), 'h:mmaaa'),
      sunset: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(sunset), 'h:mmaaa'),
      ['Precipitation chance']: chance,
      ['Precipitation']: precipitation,
      humidity: `${humidity}%`,
      visibility: `${Math.floor(visibility / 1000)} km`,
      pressure: `${pressure} hPa`,
      ['wind']: `${wind_speed}m/s ${wind_deg}${_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.degree}`,
      ['UV Index']: uvi,
    };

    for (const [key, val] of Object.entries(detailObj)) {
      addCard(key, val);
    }
  };

  const _render = () => {
    const currWeather = Weather.data.current;
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(currWeather.dt);
    const daily = Weather.data.daily;
    const todayMinTemp = daily[0].temp.min;
    const todayMaxTemp = daily[0].temp.max;
    const iconID = currWeather.weather[0].id;
    const condition = currWeather.weather[0].description;
    const chanceOfPrecipitation = Weather.data.hourly[0].pop;

    _createLocation(Weather.name, date);
    _createSmallDetail(date, currWeather.temp, todayMinTemp, todayMaxTemp, currWeather.feels_like);
    _createCurrWeather(iconID, condition);
    _createHourlyForecast(Weather.data.hourly);
    _createDetails(currWeather, chanceOfPrecipitation);
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
/* harmony import */ var _DailyUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DailyUI */ "./src/modules/DailyUI.js");





const main = () => {
  const degree = '°';
  const lat = 40.73061;
  const lon = -73.935242;

  // const data = await weatherController.getData(lat, lon)
  // localStorage.setItem('weather', JSON.stringify(data));

  const data = JSON.parse(localStorage.getItem('weather'));

  const weather = (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])('New York City', 'United States', data);

  const forecast = (0,_ForecastUI__WEBPACK_IMPORTED_MODULE_2__["default"])(weather);
  const daily = (0,_DailyUI__WEBPACK_IMPORTED_MODULE_3__["default"])(weather);

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




(0,_modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLHFDQUFxQywwQkFBMEIsNkRBQTZELEdBQUcsT0FBTyxlQUFl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QUFtQixpQ0FBaUMsbUJBQW1CLGlDQUFpQyxtQkFBbUIsaUNBQWlDLG1CQUFtQixpQ0FBaUMsbUJBQW1CLGlDQUFpQyxtQkFBbUIsaUNBQWlDLG1CQUFtQixxQkFBcUIsbUJBQW1CLGlDQUFpQyxtQkFBbUIsaUNBQWlDLG1CQUFtQixpQ0FBaUMsbUJBQW1CLGlDQUFpQyxtQkFBbUIsaUNBQWlDLG1CQUFtQixpQ0FBaUMsbUJBQW1CLDhCQUE4QixtQkFBbUIsa0NBQWtDLG1CQUFtQixrQ0FBa0MsbUJBQW1CLGtDQUFrQyxtQkFBbUIsa0NBQWtDLG1CQUFtQixrQ0FBa0MsbUJBQW1CLGtDQUFrQyxtQkFBbUIsd0JBQXdCLG1CQUFtQixzQ0FBc0MsbUJBQW1CLHNDQUFzQyxtQkFBbUIsc0NBQXNDLG1CQUFtQixzQ0FBc0MsbUJBQW1CLHNDQUFzQyxtQkFBbUIsc0NBQXNDLG1CQUFtQixrQ0FBa0MsbUJBQW1CLHFDQUFxQyxtQkFBbUIscUNBQXFDLG1CQUFtQixxQ0FBcUMsbUJBQW1CLHFDQUFxQyxtQkFBbUIscUNBQXFDLG1CQUFtQixxQ0FBcUMsbUJBQW1CLHlCQUF5QixtQkFBbUIscUNBQXFDLG1CQUFtQixxQ0FBcUMsbUJBQW1CLHFDQUFxQyxtQkFBbUIscUNBQXFDLG1CQUFtQixxQ0FBcUMsbUJBQW1CLHFDQUFxQyxtQkFBbUIsa0NBQWtDLG1CQUFtQixzQ0FBc0MsbUJBQW1CLHNDQUFzQyxtQkFBbUIsc0NBQXNDLG1CQUFtQixzQ0FBc0MsbUJBQW1CLHNDQUFzQyxtQkFBbUIsc0NBQXNDLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLHdCQUF3QixtQkFBbUIsOEJBQThCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLGdDQUFnQyxtQkFBbUIsMEJBQTBCLG1CQUFtQiwrQkFBK0IsbUJBQW1CLDBCQUEwQixtQkFBbUIsNkJBQTZCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDRCQUE0QixtQkFBbUIsNEJBQTRCLG1CQUFtQiw0QkFBNEIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsaUNBQWlDLG1CQUFtQixtQ0FBbUMsbUJBQW1CLDRCQUE0QixtQkFBbUIsNEJBQTRCLG1CQUFtQiw2QkFBNkIsbUJBQW1CLDRCQUE0QixtQkFBbUIsMkJBQTJCLG1CQUFtQiw4QkFBOEIsbUJBQW1CLHlDQUF5QyxtQkFBbUIsMkNBQTJDLG1CQUFtQiw0QkFBNEIsbUJBQW1CLG9DQUFvQyxtQkFBbUIsK0JBQStCLG1CQUFtQiwyQ0FBMkMsbUJBQW1CLDJDQUEyQyxtQkFBbUIsMkNBQTJDLG1CQUFtQiwyQ0FBMkMsbUJBQW1CLDJDQUEyQyxtQkFBbUIsMkNBQTJDLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5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bUIscUNBQXFDLG1CQUFtQixxQ0FBcUMsbUJBQW1CLHFDQUFxQyxtQkFBbUIscUNBQXFDLG1CQUFtQixxQ0FBcUMsbUJBQW1CLHFDQUFxQyxtQkFBbUIsa0NBQWtDLG1CQUFtQixzQ0FBc0MsbUJBQW1CLHNDQUFzQyxtQkFBbUIsc0NBQXNDLG1CQUFtQixzQ0FBc0MsbUJBQW1CLHNDQUFzQyxtQkFBbUIsc0NBQXNDLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLHdCQUF3QixtQkFBbUIsOEJBQThCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLGdDQUFnQyxtQkFBbUIsMEJBQTBCLG1CQUFtQiwrQkFBK0IsbUJBQW1CLDBCQUEwQixtQkFBbUIsNkJBQTZCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDJCQUEyQixtQkFBbUIsMkJBQTJCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDRCQUE0QixtQkFBbUIsNEJBQTRCLG1CQUFtQiw0QkFBNEIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsaUNBQWlDLG1CQUFtQixtQ0FBbUMsbUJBQW1CLDRCQUE0QixtQkFBbUIsNEJBQTRCLG1CQUFtQiw2QkFBNkIsbUJBQW1CLDRCQUE0QixtQkFBbUIsMkJBQTJCLG1CQUFtQiw4QkFBOEIsbUJBQW1CLHlDQUF5QyxtQkFBbUIsMkNBQTJDLG1CQUFtQiw0QkFBNEIsbUJBQW1CLG9DQUFvQyxtQkFBbUIsK0JBQStCLG1CQUFtQiwyQ0FBMkMsbUJBQW1CLDJDQUEyQyxtQkFBbUIsMkNBQTJDLG1CQUFtQiwyQ0FBMkMsbUJBQW1CLDJDQUEyQyxtQkFBbUIsMkNBQTJDLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsc0JBQXNCLG1CQUFtQixzQkFBc0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsdUJBQXVCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLG1CQUFtQix5QkFBeUIs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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJnQztBQUNYO0FBQ1k7O0FBRWpDLHVEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3dlYXRoZXItaWNvbnMubWluLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZnJvbVVuaXhUaW1lL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvd2VhdGhlci1pY29ucy5taW4uY3NzPzM2MjIiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9oZWxwZXJzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL0RhaWx5VUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy9Gb3JlY2FzdFVJLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250L1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1tYWluOiB3aGl0ZTtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjM2Q1YTgwO1xcbiAgLS1jb2xvci10ZXJ0aWFyeTogIzI5MzI0MTtcXG4gIC0tY29sb3ItYWNjZW50LW1haW46IHJnYmEoMjM4LCAxMDksIDc3LCAwLjgpO1xcbiAgLS1jb2xvci1hY2NlbnQtbWFpbi1ob3ZlcjogI2VlNmM0ZDtcXG5cXG4gIC0tY29sb3ItcmFpbjogYmx1ZTtcXG5cXG4gIC0tZm9udC1jb2xvci1tYWluOiBibGFjaztcXG4gIC0tZm9udC1jb2xvci1zZWNvbmRhcnk6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5oZWFkZXIgLnNlYXJjaCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmhlYWRlciAuc2VhcmNoIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50LW1haW4pO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2ggYnV0dG9uOmhvdmVyLFxcbmhlYWRlciAuc2VhcmNoIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50LW1haW4taG92ZXIpO1xcbn1cXG5cXG5oZWFkZXIgLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgLmJ0bi1jb250YWluZXIgPiBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5idG4tY29udGFpbmVyID4gc3Bhbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMDVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC0tZ2VuZXJhbC1wYWRkaW5nLWlubGluZTogMXJlbTtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdsb2NhdGlvbiBsb2NhdGlvbicgJ2RldGFpbCB3ZWF0aGVyJyAnaG91cmx5IGhvdXJseSc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tZ2VuZXJhbC1wYWRkaW5nLWlubGluZSk7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5sb2NhdGlvbiB7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAubG9jYXRpb24gc3Bhbi5jaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5sb2NhdGlvbiBzcGFuLmRhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3QgLnNtYWxsLWRldGFpbHMge1xcbiAgZ3JpZC1hcmVhOiBkZXRhaWw7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3QgLnNtYWxsLWRldGFpbHMgc3Bhbjpub3QoLnRpbWUpIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5zbWFsbC1kZXRhaWxzIC50aW1lIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAuc21hbGwtZGV0YWlscyAudGVtcCB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbGluZS1oZWlnaHQ6IDAuOTtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3QgLnNtYWxsLWRldGFpbHMgLmZlZWwge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC53ZWF0aGVyIHtcXG4gIGdyaWQtYXJlYTogd2VhdGhlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC53ZWF0aGVyIGkge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC53ZWF0aGVyIC5jb25kaXRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5tYWluIC5ob3VybHkge1xcbiAgZ3JpZC1hcmVhOiBob3VybHk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IHZhcigtLWNhcmQtZ2FwKTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAtLWNhcmQtZ2FwOiAxcmVtO1xcbiAgLS1jYXJkLXNob3duOiAzO1xcbiAgLS1wYWRkaW5nLWNhcmQ6IDFyZW07XFxufVxcblxcbm1haW4gLmhvdXJseSA+IC5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1jYXJkKSAwO1xcbiAgZmxleDogMSAwIGNhbGMoKDEwMCUgLSB2YXIoLS1jYXJkLWdhcCkgKiB2YXIoLS1jYXJkLXNob3duKSArIHZhcigtLXBhZGRpbmctY2FyZCkpIC8gdmFyKC0tY2FyZC1zaG93bikpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5tYWluIC5ob3VybHkgPiAuY2FyZCBpOm5vdCgud2ktcmFpbmRyb3ApIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG5tYWluIC5ob3VybHkgPiAuY2FyZCAuY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LXNocmluazogMTtcXG4gIGZsZXgtYmFzaXM6IDI1JTtcXG59XFxuXFxubWFpbiAuaG91cmx5ID4gLmNhcmQgLnJhaW4ge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJhaW4pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxubWFpbiAuZGV0YWlscyB7XFxuICAtLXBhZGRpbmc6IDEuNXJlbTtcXG4gIC0tZ2FwOiAxcmVtO1xcbiAgLS1kZXRhaWxzLXBlci1yb3c6IDI7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxuICBnYXA6IHZhcigtLWdhcCk7XFxufVxcblxcbm1haW4gLmRldGFpbHMgPiAuaW5mbyB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyB2YXIoLS1kZXRhaWxzLXBlci1yb3cpIC0gdmFyKC0tcGFkZGluZykpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG5tYWluIC5kZXRhaWxzID4gLmluZm8gc3BhbjpmaXJzdC1vZi10eXBlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm1haW4gLmRhaWx5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1haW4gLmRhaWx5ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxubWFpbiAuZGFpbHkgPiBkaXYgc3BhbjpmaXJzdC1vZi10eXBlIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxubWFpbiAuZGFpbHkgPiBkaXYgaSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG5mb290ZXIgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzYwcHgpIHtcXG4gIG1haW4ge1xcbiAgICAtLWdlbmVyYWwtcGFkZGluZy1pbmxpbmU6IDIwJTtcXG4gIH1cXG5cXG4gIG1haW4gLmhvdXJseSB7XFxuICAgIC0tY2FyZC1zaG93bjogNTtcXG4gIH1cXG5cXG4gIG1haW4gLmRldGFpbHMge1xcbiAgICAtLWRldGFpbHMtcGVyLXJvdzogMztcXG4gIH1cXG5cXG4gIG1haW4gLmRhaWx5IHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWdlbmVyYWwtcGFkZGluZy1pbmxpbmUpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctaW5saW5lOiAzMCU7XFxuICB9XFxuXFxuICBoZWFkZXIgLnNlYXJjaCB7XFxuICAgIGZsZXg6IDE7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgLS1nZW5lcmFsLXBhZGRpbmctaW5saW5lOiAzMCU7XFxuICB9XFxuXFxuICBtYWluIC5mb3JlY2FzdCB7XFxuICAgIHBhZGRpbmc6IDJyZW0gdmFyKC0tZ2VuZXJhbC1wYWRkaW5nLWlubGluZSk7XFxuICB9XFxuXFxuICBtYWluIC5ob3VybHkge1xcbiAgICAtLWNhcmQtc2hvd246IDU7XFxuICB9XFxuXFxuICBtYWluIC5kZXRhaWxzIHtcXG4gICAgLS1kZXRhaWxzLXBlci1yb3c6IDQ7XFxuICAgIHBhZGRpbmc6IDIuNXJlbSBjYWxjKHZhcigtLWdlbmVyYWwtcGFkZGluZy1pbmxpbmUpIC0gMTAlKTtcXG4gIH1cXG5cXG4gIG1haW4gLmRhaWx5IHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWdlbmVyYWwtcGFkZGluZy1pbmxpbmUpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xcbiAgbWFpbiB7XFxuICAgIC0tZ2VuZXJhbC1wYWRkaW5nLWlubGluZTogMzclO1xcbiAgfVxcblxcbiAgbWFpbiAuZGV0YWlscyB7XFxuICAgIHBhZGRpbmctaW5saW5lOiBjYWxjKHZhcigtLWdlbmVyYWwtcGFkZGluZy1pbmxpbmUpIC0gNSUpO1xcbiAgfVxcblxcbiAgbWFpbiAuZGFpbHkge1xcbiAgICBwYWRkaW5nLWlubGluZTogdmFyKC0tZ2VuZXJhbC1wYWRkaW5nLWlubGluZSk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsMERBQXdEO0FBQzFEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsNENBQTRDO0VBQzVDLGtDQUFrQzs7RUFFbEMsa0JBQWtCOztFQUVsQix3QkFBd0I7RUFDeEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFB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QUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtFQUNmLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLHVDQUF1QztFQUN2QyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLDZDQUE2QztFQUMvQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLE9BQU87RUFDVDs7RUFFQTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIseURBQXlEO0VBQzNEOztFQUVBO0lBQ0UsNkNBQTZDO0VBQy9DO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLHdEQUF3RDtFQUMxRDs7RUFFQTtJQUNFLDZDQUE2QztFQUMvQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoLi9hc3NldHMvZm9udC9VYnVudHUtUmVndWxhci50dGYpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1tYWluOiB3aGl0ZTtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjM2Q1YTgwO1xcbiAgLS1jb2xvci10ZXJ0aWFyeTogIzI5MzI0MTtcXG4gIC0tY29sb3ItYWNjZW50LW1haW46IHJnYmEoMjM4LCAxMDksIDc3LCAwLjgpO1xcbiAgLS1jb2xvci1hY2NlbnQtbWFpbi1ob3ZlcjogI2VlNmM0ZDtcXG5cXG4gIC0tY29sb3ItcmFpbjogYmx1ZTtcXG5cXG4gIC0tZm9udC1jb2xvci1tYWluOiBibGFjaztcXG4gIC0tZm9udC1jb2xvci1zZWNvbmRhcnk6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5oZWFkZXIgLnNlYXJjaCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmhlYWRlciAuc2VhcmNoIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50LW1haW4pO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIC5zZWFyY2ggYnV0dG9uOmhvdmVyLFxcbmhlYWRlciAuc2VhcmNoIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50LW1haW4taG92ZXIpO1xcbn1cXG5cXG5oZWFkZXIgLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgLmJ0bi1jb250YWluZXIgPiBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5idG4tY29udGFpbmVyID4gc3Bhbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMDVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC0tZ2VuZXJhbC1wYWRkaW5nLWlubGluZTogMXJlbTtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdsb2NhdGlvbiBsb2NhdGlvbicgJ2RldGFpbCB3ZWF0aGVyJyAnaG91cmx5IGhvdXJseSc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tZ2VuZXJhbC1wYWRkaW5nLWlubGluZSk7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5sb2NhdGlvbiB7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAubG9jYXRpb24gc3Bhbi5jaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5sb2NhdGlvbiBzcGFuLmRhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3QgLnNtYWxsLWRldGFpbHMge1xcbiAgZ3JpZC1hcmVhOiBkZXRhaWw7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3QgLnNtYWxsLWRldGFpbHMgc3Bhbjpub3QoLnRpbWUpIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC5zbWFsbC1kZXRhaWxzIC50aW1lIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5tYWluIC5mb3JlY2FzdCAuc21hbGwtZGV0YWlscyAudGVtcCB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbGluZS1oZWlnaHQ6IDAuOTtcXG59XFxuXFxubWFpbiAuZm9yZWNhc3QgLnNtYWxsLWRldGFpbHMgLmZlZWwge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC53ZWF0aGVyIHtcXG4gIGdyaWQtYXJlYTogd2VhdGhlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC53ZWF0aGVyIGkge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbm1haW4gLmZvcmVjYXN0IC53ZWF0aGVyIC5jb25kaXRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5tYWluIC5ob3VybHkge1xcbiAgZ3JpZC1hcmVhOiBob3VybHk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IHZhcigtLWNhcmQtZ2FwKTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAtLWNhcmQtZ2FwOiAxcmVtO1xcbiAgLS1jYXJkLXNob3duOiAzO1xcbiAgLS1wYWRkaW5nLWNhcmQ6IDFyZW07XFxufVxcblxcbm1haW4gLmhvdXJseSA+IC5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1jYXJkKSAwO1xcbiAgZmxleDogMSAwIGNhbGMoKDEwMCUgLSB2YXIoLS1jYXJkLWdhcCkgKiB2YXIoLS1jYXJkLXNob3duKSArIHZhcigtLXBhZGRpbmctY2FyZCkpIC8gdmFyKC0tY2FyZC1zaG93bikpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5tYWluIC5ob3VybHkgPiAuY2FyZCBpOm5vdCgud2ktcmFpbmRyb3ApIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG5tYWluIC5ob3VybHkgPiAuY2FyZCAuY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbGV4LXNocmluazogMTtcXG4gIGZsZXgtYmFzaXM6IDI1JTtcXG59XFxuXFxubWFpbiAuaG91cmx5ID4gLmNhcmQgLnJhaW4ge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJhaW4pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxubWFpbiAuZGV0YWlscyB7XFxuICAtLXBhZGRpbmc6IDEuNXJlbTtcXG4gIC0tZ2FwOiAxcmVtO1xcbiAgLS1kZXRhaWxzLXBlci1yb3c6IDI7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxuICBnYXA6IHZhcigtLWdhcCk7XFxufVxcblxcbm1haW4gLmRldGFpbHMgPiAuaW5mbyB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyB2YXIoLS1kZXRhaWxzLXBlci1yb3cpIC0gdmFyKC0tcGFkZGluZykpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG5tYWluIC5kZXRhaWxzID4gLmluZm8gc3BhbjpmaXJzdC1vZi10eXBlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm1haW4gLmRhaWx5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1haW4gLmRhaWx5ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxubWFpbiAuZGFpbHkgPiBkaXYgc3BhbjpmaXJzdC1vZi10eXBlIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxubWFpbiAuZGFpbHkgPiBkaXYgaSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG5mb290ZXIgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzYwcHgpIHtcXG4gIG1haW4ge1xcbiAgICAtLWdlbmVyYWwtcGFkZGluZy1pbmxpbmU6IDIwJTtcXG4gIH1cXG5cXG4gIG1haW4gLmhvdXJseSB7XFxuICAgIC0tY2FyZC1zaG93bjogNTtcXG4gIH1cXG5cXG4gIG1haW4gLmRldGFpbHMge1xcbiAgICAtLWRldGFpbHMtcGVyLXJvdzogMztcXG4gIH1cXG5cXG4gIG1haW4gLmRhaWx5IHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWdlbmVyYWwtcGFkZGluZy1pbmxpbmUpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctaW5saW5lOiAzMCU7XFxuICB9XFxuXFxuICBoZWFkZXIgLnNlYXJjaCB7XFxuICAgIGZsZXg6IDE7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgLS1nZW5lcmFsLXBhZGRpbmctaW5saW5lOiAzMCU7XFxuICB9XFxuXFxuICBtYWluIC5mb3JlY2FzdCB7XFxuICAgIHBhZGRpbmc6IDJyZW0gdmFyKC0tZ2VuZXJhbC1wYWRkaW5nLWlubGluZSk7XFxuICB9XFxuXFxuICBtYWluIC5ob3VybHkge1xcbiAgICAtLWNhcmQtc2hvd246IDU7XFxuICB9XFxuXFxuICBtYWluIC5kZXRhaWxzIHtcXG4gICAgLS1kZXRhaWxzLXBlci1yb3c6IDQ7XFxuICAgIHBhZGRpbmc6IDIuNXJlbSBjYWxjKHZhcigtLWdlbmVyYWwtcGFkZGluZy1pbmxpbmUpIC0gMTAlKTtcXG4gIH1cXG5cXG4gIG1haW4gLmRhaWx5IHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IHZhcigtLWdlbmVyYWwtcGFkZGluZy1pbmxpbmUpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xcbiAgbWFpbiB7XFxuICAgIC0tZ2VuZXJhbC1wYWRkaW5nLWlubGluZTogMzclO1xcbiAgfVxcblxcbiAgbWFpbiAuZGV0YWlscyB7XFxuICAgIHBhZGRpbmctaW5saW5lOiBjYWxjKHZhcigtLWdlbmVyYWwtcGFkZGluZy1pbmxpbmUpIC0gNSUpO1xcbiAgfVxcblxcbiAgbWFpbiAuZGFpbHkge1xcbiAgICBwYWRkaW5nLWlubGluZTogdmFyKC0tZ2VuZXJhbC1wYWRkaW5nLWlubGluZSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18sIHsgaGFzaDogXCIjd2VhdGhlcl9pY29uc3JlZ3VsYXJcIiB9KTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIVxcbiAqICBXZWF0aGVyIEljb25zIDIuMC4xMFxcbiAqICBVcGRhdGVkIE5vdmVtYmVyIDEsIDIwMjBcXG4gKiAgV2VhdGhlciB0aGVtZWQgaWNvbnMgZm9yIEJvb3RzdHJhcFxcbiAqICBBdXRob3IgLSBFcmlrIEZsb3dlcnMgLSBlcmlrQGhlbGxvZXJpay5jb21cXG4gKiAgRW1haWw6IGVyaWtAaGVsbG9lcmlrLmNvbVxcbiAqICBUd2l0dGVyOiBodHRwOi8vdHdpdHRlci5jb20vRXJpa19VWFxcbiAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiAgTWFpbnRhaW5lZCBhdCBodHRwOi8vZXJpa2Zsb3dlcnMuZ2l0aHViLmlvL3dlYXRoZXItaWNvbnNcXG4gKlxcbiAqICBMaWNlbnNlXFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqICAtIEZvbnQgbGljZW5zZWQgdW5kZXIgU0lMIE9GTCAxLjEgLVxcbiAqICAgIGh0dHA6Ly9zY3JpcHRzLnNpbC5vcmcvT0ZMXFxuICogIC0gQ1NTLCBTQ1NTIGFuZCBMRVNTIGFyZSBsaWNlbnNlZCB1bmRlciBNSVQgTGljZW5zZSAtXFxuICogICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLmh0bWxcXG4gKiAgLSBEb2N1bWVudGF0aW9uIGxpY2Vuc2VkIHVuZGVyIENDIEJZIDMuMCAtXFxuICogICAgaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL1xcbiAqICAtIEluc3BpcmVkIGJ5IGFuZCB3b3JrcyBncmVhdCBhcyBhIGNvbXBhbmlvbiB3aXRoIEZvbnQgQXdlc29tZVxcbiAqICAgIFxcXCJGb250IEF3ZXNvbWUgYnkgRGF2ZSBHYW5keSAtIGh0dHA6Ly9mb250YXdlc29tZS5pb1xcXCJcXG4gKi9AZm9udC1mYWNle2ZvbnQtZmFtaWx5Oid3ZWF0aGVyaWNvbnMnO3NyYzp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO3NyYzp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSx1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSx1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpLHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCdzdmcnKTtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWx9Lndpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtZmFtaWx5Oid3ZWF0aGVyaWNvbnMnO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtsaW5lLWhlaWdodDoxOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlfS53aS1md3t0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxLjRlbX0ud2ktcm90YXRlLTkwe2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0ud2ktcm90YXRlLTE4MHtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Mik7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LndpLXJvdGF0ZS0yNzB7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfS53aS1mbGlwLWhvcml6b250YWx7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgtMSwgMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgtMSwgMSk7dHJhbnNmb3JtOnNjYWxlKC0xLCAxKX0ud2ktZmxpcC12ZXJ0aWNhbHtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsIC0xKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEsIC0xKTt0cmFuc2Zvcm06c2NhbGUoMSwgLTEpfS53aS1kYXktc3Vubnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktZGF5LWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS1kYXktY2xvdWR5LWd1c3RzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMFxcXCJ9LndpLWRheS1jbG91ZHktd2luZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAxXFxcIn0ud2ktZGF5LWZvZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDNcXFwifS53aS1kYXktaGFpbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDRcXFwifS53aS1kYXktaGF6ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjZcXFwifS53aS1kYXktbGlnaHRuaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNVxcXCJ9LndpLWRheS1yYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOFxcXCJ9LndpLWRheS1yYWluLW1peDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDZcXFwifS53aS1kYXktcmFpbi13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwN1xcXCJ9LndpLWRheS1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwOVxcXCJ9LndpLWRheS1zbGVldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjJcXFwifS53aS1kYXktc2xlZXQtc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY4XFxcIn0ud2ktZGF5LXNub3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBhXFxcIn0ud2ktZGF5LXNub3ctdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2YlxcXCJ9LndpLWRheS1zbm93LXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY1XFxcIn0ud2ktZGF5LXNwcmlua2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYlxcXCJ9LndpLWRheS1zdG9ybS1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZVxcXCJ9LndpLWRheS1zdW5ueS1vdmVyY2FzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGNcXFwifS53aS1kYXktdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxMFxcXCJ9LndpLWRheS13aW5keTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODVcXFwifS53aS1zb2xhci1lY2xpcHNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2ZVxcXCJ9LndpLWhvdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzJcXFwifS53aS1kYXktY2xvdWR5LWhpZ2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDdkXFxcIn0ud2ktZGF5LWxpZ2h0LXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGM0XFxcIn0ud2ktbmlnaHQtY2xlYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJlXFxcIn0ud2ktbmlnaHQtYWx0LWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODZcXFwifS53aS1uaWdodC1hbHQtY2xvdWR5LWd1c3RzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyMlxcXCJ9LndpLW5pZ2h0LWFsdC1jbG91ZHktd2luZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDIzXFxcIn0ud2ktbmlnaHQtYWx0LWhhaWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI0XFxcIn0ud2ktbmlnaHQtYWx0LWxpZ2h0bmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjVcXFwifS53aS1uaWdodC1hbHQtcmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1uaWdodC1hbHQtcmFpbi1taXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI2XFxcIn0ud2ktbmlnaHQtYWx0LXJhaW4td2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjdcXFwifS53aS1uaWdodC1hbHQtc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjlcXFwifS53aS1uaWdodC1hbHQtc2xlZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI0XFxcIn0ud2ktbmlnaHQtYWx0LXNsZWV0LXN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2YVxcXCJ9LndpLW5pZ2h0LWFsdC1zbm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYVxcXCJ9LndpLW5pZ2h0LWFsdC1zbm93LXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNmRcXFwifS53aS1uaWdodC1hbHQtc25vdy13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2N1xcXCJ9LndpLW5pZ2h0LWFsdC1zcHJpbmtsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmJcXFwifS53aS1uaWdodC1hbHQtc3Rvcm0tc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmNcXFwifS53aS1uaWdodC1hbHQtdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZFxcXCJ9LndpLW5pZ2h0LWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzFcXFwifS53aS1uaWdodC1jbG91ZHktZ3VzdHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJmXFxcIn0ud2ktbmlnaHQtY2xvdWR5LXdpbmR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzMFxcXCJ9LndpLW5pZ2h0LWZvZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNGFcXFwifS53aS1uaWdodC1oYWlsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzMlxcXCJ9LndpLW5pZ2h0LWxpZ2h0bmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzNcXFwifS53aS1uaWdodC1wYXJ0bHktY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4M1xcXCJ9LndpLW5pZ2h0LXJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDM2XFxcIn0ud2ktbmlnaHQtcmFpbi1taXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDM0XFxcIn0ud2ktbmlnaHQtcmFpbi13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzNVxcXCJ9LndpLW5pZ2h0LXNob3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDM3XFxcIn0ud2ktbmlnaHQtc2xlZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGIzXFxcIn0ud2ktbmlnaHQtc2xlZXQtc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY5XFxcIn0ud2ktbmlnaHQtc25vdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzhcXFwifS53aS1uaWdodC1zbm93LXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNmNcXFwifS53aS1uaWdodC1zbm93LXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY2XFxcIn0ud2ktbmlnaHQtc3ByaW5rbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDM5XFxcIn0ud2ktbmlnaHQtc3Rvcm0tc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwM2FcXFwifS53aS1uaWdodC10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDNiXFxcIn0ud2ktbHVuYXItZWNsaXBzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzBcXFwifS53aS1zdGFyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzdcXFwifS53aS1zdG9ybS1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZFxcXCJ9LndpLXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1uaWdodC1hbHQtY2xvdWR5LWhpZ2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDdlXFxcIn0ud2ktbmlnaHQtY2xvdWR5LWhpZ2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDgwXFxcIn0ud2ktbmlnaHQtYWx0LXBhcnRseS1jbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDgxXFxcIn0ud2ktY2xvdWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQxXFxcIn0ud2ktY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLWNsb3VkeS1ndXN0czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTFcXFwifS53aS1jbG91ZHktd2luZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEyXFxcIn0ud2ktZm9nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLWhhaWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktcmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1yYWluLW1peDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS1yYWluLXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE4XFxcIn0ud2ktc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS1zbGVldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjVcXFwifS53aS1zbm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXNwcmlua2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXN0b3JtLXNob3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFkXFxcIn0ud2ktdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXNub3ctd2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjRcXFwifS53aS1zbm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXNtb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc0XFxcIn0ud2ktc21va2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYyXFxcIn0ud2ktbGlnaHRuaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNlxcXCJ9LndpLXJhaW5kcm9wczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNGVcXFwifS53aS1yYWluZHJvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzhcXFwifS53aS1kdXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLXNub3dmbGFrZS1jb2xkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXdpbmR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyMVxcXCJ9LndpLXN0cm9uZy13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MFxcXCJ9LndpLXNhbmRzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODJcXFwifS53aS1lYXJ0aHF1YWtlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjNlxcXCJ9LndpLWZpcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGM3XFxcIn0ud2ktZmxvb2Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDdjXFxcIn0ud2ktbWV0ZW9yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3MVxcXCJ9LndpLXRzdW5hbWk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGM1XFxcIn0ud2ktdm9sY2FubzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzhcXFwifS53aS1odXJyaWNhbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDczXFxcIn0ud2ktdG9ybmFkbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS1zbWFsbC1jcmFmdC1hZHZpc29yeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwY2NcXFwifS53aS1nYWxlLXdhcm5pbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGNkXFxcIn0ud2ktc3Rvcm0td2FybmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwY2VcXFwifS53aS1odXJyaWNhbmUtd2FybmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwY2ZcXFwifS53aS13aW5kLWRpcmVjdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjFcXFwifS53aS1hbGllbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzVcXFwifS53aS1jZWxzaXVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzY1xcXCJ9LndpLWZhaHJlbmhlaXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQ1XFxcIn0ud2ktZGVncmVlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDJcXFwifS53aS10aGVybW9tZXRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTVcXFwifS53aS10aGVybW9tZXRlci1leHRlcmlvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTNcXFwifS53aS10aGVybW9tZXRlci1pbnRlcm5hbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTRcXFwifS53aS1jbG91ZC1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzZFxcXCJ9LndpLWNsb3VkLXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0MFxcXCJ9LndpLWNsb3VkLXJlZnJlc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDNlXFxcIn0ud2ktaG9yaXpvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDdcXFwifS53aS1ob3Jpem9uLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDZcXFwifS53aS1zdW5yaXNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MVxcXCJ9LndpLXN1bnNldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTJcXFwifS53aS1tb29ucmlzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzlcXFwifS53aS1tb29uc2V0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjYVxcXCJ9LndpLXJlZnJlc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDRjXFxcIn0ud2ktcmVmcmVzaC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDRiXFxcIn0ud2ktdW1icmVsbGE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDg0XFxcIn0ud2ktYmFyb21ldGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3OVxcXCJ9LndpLWh1bWlkaXR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3YVxcXCJ9LndpLW5hOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3YlxcXCJ9LndpLXRyYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjYlxcXCJ9LndpLW1vb24tbmV3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5NVxcXCJ9LndpLW1vb24td2F4aW5nLWNyZXNjZW50LTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk2XFxcIn0ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTdcXFwifS53aS1tb29uLXdheGluZy1jcmVzY2VudC0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5OFxcXCJ9LndpLW1vb24td2F4aW5nLWNyZXNjZW50LTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk5XFxcIn0ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWFcXFwifS53aS1tb29uLXdheGluZy1jcmVzY2VudC02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5YlxcXCJ9LndpLW1vb24tZmlyc3QtcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWNcXFwifS53aS1tb29uLXdheGluZy1naWJib3VzLTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDlkXFxcIn0ud2ktbW9vbi13YXhpbmctZ2liYm91cy0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5ZVxcXCJ9LndpLW1vb24td2F4aW5nLWdpYmJvdXMtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWZcXFwifS53aS1tb29uLXdheGluZy1naWJib3VzLTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGEwXFxcIn0ud2ktbW9vbi13YXhpbmctZ2liYm91cy01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhMVxcXCJ9LndpLW1vb24td2F4aW5nLWdpYmJvdXMtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTJcXFwifS53aS1tb29uLWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGEzXFxcIn0ud2ktbW9vbi13YW5pbmctZ2liYm91cy0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhNFxcXCJ9LndpLW1vb24td2FuaW5nLWdpYmJvdXMtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTVcXFwifS53aS1tb29uLXdhbmluZy1naWJib3VzLTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE2XFxcIn0ud2ktbW9vbi13YW5pbmctZ2liYm91cy00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhN1xcXCJ9LndpLW1vb24td2FuaW5nLWdpYmJvdXMtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYThcXFwifS53aS1tb29uLXdhbmluZy1naWJib3VzLTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE5XFxcIn0ud2ktbW9vbi10aGlyZC1xdWFydGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhYVxcXCJ9LndpLW1vb24td2FuaW5nLWNyZXNjZW50LTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFiXFxcIn0ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWNcXFwifS53aS1tb29uLXdhbmluZy1jcmVzY2VudC0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhZFxcXCJ9LndpLW1vb24td2FuaW5nLWNyZXNjZW50LTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFlXFxcIn0ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWZcXFwifS53aS1tb29uLXdhbmluZy1jcmVzY2VudC02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiMFxcXCJ9LndpLW1vb24tYWx0LW5ldzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZWJcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDBcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDFcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDJcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDNcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDRcXFwifS53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDVcXFwifS53aS1tb29uLWFsdC1maXJzdC1xdWFydGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkNlxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGQ3XFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDhcXFwifS53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkOVxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGRhXFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZGJcXFwifS53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkY1xcXCJ9LndpLW1vb24tYWx0LWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGRkXFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZGVcXFwifS53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkZlxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGUwXFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTFcXFwifS53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlMlxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGUzXFxcIn0ud2ktbW9vbi1hbHQtdGhpcmQtcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTRcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTVcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTZcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTdcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZThcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTlcXFwifS53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZWFcXFwifS53aS1tb29uLTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk1XFxcIn0ud2ktbW9vbi0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5NlxcXCJ9LndpLW1vb24tMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTdcXFwifS53aS1tb29uLTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk4XFxcIn0ud2ktbW9vbi00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5OVxcXCJ9LndpLW1vb24tNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWFcXFwifS53aS1tb29uLTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDliXFxcIn0ud2ktbW9vbi03OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5Y1xcXCJ9LndpLW1vb24tODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWRcXFwifS53aS1tb29uLTk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDllXFxcIn0ud2ktbW9vbi0xMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWZcXFwifS53aS1tb29uLTExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhMFxcXCJ9LndpLW1vb24tMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGExXFxcIn0ud2ktbW9vbi0xMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTJcXFwifS53aS1tb29uLTE0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhM1xcXCJ9LndpLW1vb24tMTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE0XFxcIn0ud2ktbW9vbi0xNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTVcXFwifS53aS1tb29uLTE3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhNlxcXCJ9LndpLW1vb24tMTg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE3XFxcIn0ud2ktbW9vbi0xOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYThcXFwifS53aS1tb29uLTIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhOVxcXCJ9LndpLW1vb24tMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFhXFxcIn0ud2ktbW9vbi0yMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWJcXFwifS53aS1tb29uLTIzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhY1xcXCJ9LndpLW1vb24tMjQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFkXFxcIn0ud2ktbW9vbi0yNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWVcXFwifS53aS1tb29uLTI2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhZlxcXCJ9LndpLW1vb24tMjc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGIwXFxcIn0ud2ktdGltZS0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4YVxcXCJ9LndpLXRpbWUtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOGJcXFwifS53aS10aW1lLTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDhjXFxcIn0ud2ktdGltZS00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4ZFxcXCJ9LndpLXRpbWUtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOGVcXFwifS53aS10aW1lLTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDhmXFxcIn0ud2ktdGltZS03OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5MFxcXCJ9LndpLXRpbWUtODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTFcXFwifS53aS10aW1lLTk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDkyXFxcIn0ud2ktdGltZS0xMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTNcXFwifS53aS10aW1lLTExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5NFxcXCJ9LndpLXRpbWUtMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDg5XFxcIn0ud2ktZGlyZWN0aW9uLXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1OFxcXCJ9LndpLWRpcmVjdGlvbi11cC1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTdcXFwifS53aS1kaXJlY3Rpb24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDRkXFxcIn0ud2ktZGlyZWN0aW9uLWRvd24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDg4XFxcIn0ud2ktZGlyZWN0aW9uLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQ0XFxcIn0ud2ktZGlyZWN0aW9uLWRvd24tbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDNcXFwifS53aS1kaXJlY3Rpb24tbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDhcXFwifS53aS1kaXJlY3Rpb24tdXAtbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODdcXFwifS53aS13aW5kLWJlYXVmb3J0LTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI3XFxcIn0ud2ktd2luZC1iZWF1Zm9ydC0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiOFxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjlcXFwifS53aS13aW5kLWJlYXVmb3J0LTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGJhXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiYlxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYmNcXFwifS53aS13aW5kLWJlYXVmb3J0LTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGJkXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC03OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiZVxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYmZcXFwifS53aS13aW5kLWJlYXVmb3J0LTk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGMwXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC0xMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzFcXFwifS53aS13aW5kLWJlYXVmb3J0LTExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjMlxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGMzXFxcIn0ud2kteWFob28tMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS15YWhvby0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZVxcXCJ9LndpLXlhaG9vLTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDczXFxcIn0ud2kteWFob28tMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS15YWhvby00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXlhaG9vLTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2kteWFob28tNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS15YWhvby03OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXlhaG9vLTg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2kteWFob28tOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS15YWhvby0xMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS15YWhvby0xMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS15YWhvby0xMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS15YWhvby0xMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS15YWhvby0xNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGFcXFwifS53aS15YWhvby0xNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjRcXFwifS53aS15YWhvby0xNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS15YWhvby0xNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS15YWhvby0xODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS15YWhvby0xOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS15YWhvby0yMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS15YWhvby0yMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjFcXFwifS53aS15YWhvby0yMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjJcXFwifS53aS15YWhvby0yMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS15YWhvby0yNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS15YWhvby0yNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS15YWhvby0yNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS15YWhvby0yNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzFcXFwifS53aS15YWhvby0yODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS15YWhvby0yOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzFcXFwifS53aS15YWhvby0zMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS15YWhvby0zMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmVcXFwifS53aS15YWhvby0zMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS15YWhvby0zMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODNcXFwifS53aS15YWhvby0zNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGNcXFwifS53aS15YWhvby0zNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS15YWhvby0zNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzJcXFwifS53aS15YWhvby0zNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS15YWhvby0zODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS15YWhvby0zOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS15YWhvby00MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS15YWhvby00MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjRcXFwifS53aS15YWhvby00MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS15YWhvby00MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjRcXFwifS53aS15YWhvby00NDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGNcXFwifS53aS15YWhvby00NTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS15YWhvby00NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS15YWhvby00NzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS15YWhvby0zMjAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3N1xcXCJ9LndpLWZvcmVjYXN0LWlvLWNsZWFyLWRheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS1mb3JlY2FzdC1pby1jbGVhci1uaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmVcXFwifS53aS1mb3JlY2FzdC1pby1yYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLWZvcmVjYXN0LWlvLXNub3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktZm9yZWNhc3QtaW8tc2xlZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI1XFxcIn0ud2ktZm9yZWNhc3QtaW8td2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS1mb3JlY2FzdC1pby1mb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktZm9yZWNhc3QtaW8tY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLWZvcmVjYXN0LWlvLXBhcnRseS1jbG91ZHktZGF5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMlxcXCJ9LndpLWZvcmVjYXN0LWlvLXBhcnRseS1jbG91ZHktbmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDMxXFxcIn0ud2ktZm9yZWNhc3QtaW8taGFpbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS1mb3JlY2FzdC1pby10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktZm9yZWNhc3QtaW8tdG9ybmFkbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS13bW80NjgwLTA6YmVmb3JlLC53aS13bW80NjgwLTAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NVxcXCJ9LndpLXdtbzQ2ODAtMTpiZWZvcmUsLndpLXdtbzQ2ODAtMDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktd21vNDY4MC0yOmJlZm9yZSwud2ktd21vNDY4MC0wMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTVcXFwifS53aS13bW80NjgwLTM6YmVmb3JlLC53aS13bW80NjgwLTAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLXdtbzQ2ODAtNDpiZWZvcmUsLndpLXdtbzQ2ODAtMDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC01OmJlZm9yZSwud2ktd21vNDY4MC0wNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0xMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTZcXFwifS53aS13bW80NjgwLTE4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MFxcXCJ9LndpLXdtbzQ2ODAtMjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0yMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS13bW80NjgwLTIyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXdtbzQ2ODAtMjM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC0yNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13bW80NjgwLTI1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXdtbzQ2ODAtMjY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktd21vNDY4MC0yNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS13bW80NjgwLTI4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLXdtbzQ2ODAtMjk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktd21vNDY4MC0zMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMzI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0zMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTM0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMzU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC00MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS13bW80NjgwLTQxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtNDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC00MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS13bW80NjgwLTQ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtNDU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktd21vNDY4MC00NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS13bW80NjgwLTQ3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXdtbzQ2ODAtNDg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd21vNDY4MC01MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS13bW80NjgwLTUxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtNTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC01MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTU0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXdtbzQ2ODAtNTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktd21vNDY4MC01NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS13bW80NjgwLTU3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtNTg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC02MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS13bW80NjgwLTYxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtNjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC02MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTY0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXdtbzQ2ODAtNjU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktd21vNDY4MC02NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS13bW80NjgwLTY3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXdtbzQ2ODAtNjg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktd21vNDY4MC03MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13bW80NjgwLTcxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXdtbzQ2ODAtNzI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd21vNDY4MC03MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13bW80NjgwLTc0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXdtbzQ2ODAtNzU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktd21vNDY4MC03NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS13bW80NjgwLTc3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXdtbzQ2ODAtNzg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktd21vNDY4MC04MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTgxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtODI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC04MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTg0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZFxcXCJ9LndpLXdtbzQ2ODAtODU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktd21vNDY4MC04NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS13bW80NjgwLTg3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXdtbzQ2ODAtODk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktd21vNDY4MC05MDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTZcXFwifS53aS13bW80NjgwLTkxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZFxcXCJ9LndpLXdtbzQ2ODAtOTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktd21vNDY4MC05MzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS13bW80NjgwLTk0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNlxcXCJ9LndpLXdtbzQ2ODAtOTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktd21vNDY4MC05NjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS13bW80NjgwLTk5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS0yMDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktb3dtLTIwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1vd20tMjAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLW93bS0yMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE2XFxcIn0ud2ktb3dtLTIxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTZcXFwifS53aS1vd20tMjEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNlxcXCJ9LndpLW93bS0yMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE2XFxcIn0ud2ktb3dtLTIzMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1vd20tMjMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLW93bS0yMzI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktb3dtLTMwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS1vd20tMzAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLW93bS0zMDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktb3dtLTMxMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS1vd20tMzExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS0zMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktb3dtLTMxMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS1vd20tMzE0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS0zMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktb3dtLTUwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS1vd20tNTAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS01MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktb3dtLTUwMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1vd20tNTA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS01MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktb3dtLTUyMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS1vd20tNTIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYVxcXCJ9LndpLW93bS01MjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2ktb3dtLTUzMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWRcXFwifS53aS1vd20tNjAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLW93bS02MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktb3dtLTYwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjVcXFwifS53aS1vd20tNjExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLW93bS02MTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktb3dtLTYxNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS1vd20tNjE2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLW93bS02MjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktb3dtLTYyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS1vd20tNjIyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLW93bS03MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktb3dtLTcxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjJcXFwifS53aS1vd20tNzIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNlxcXCJ9LndpLW93bS03MzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLTc0MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS1vd20tNzYxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLW93bS03NjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLTc3MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTFcXFwifS53aS1vd20tNzgxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS04MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktb3dtLTgwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDFcXFwifS53aS1vd20tODAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0MVxcXCJ9LndpLW93bS04MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktb3dtLTgwNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS1vd20tOTAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS05MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFkXFxcIn0ud2ktb3dtLTkwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzNcXFwifS53aS1vd20tOTAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLW93bS05MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDcyXFxcIn0ud2ktb3dtLTkwNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjFcXFwifS53aS1vd20tOTA2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLW93bS05NTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUwXFxcIn0ud2ktb3dtLWRheS0yMDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0yMDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0yMDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0yMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA1XFxcIn0ud2ktb3dtLWRheS0yMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA1XFxcIn0ud2ktb3dtLWRheS0yMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA1XFxcIn0ud2ktb3dtLWRheS0yMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA1XFxcIn0ud2ktb3dtLWRheS0yMzA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0yMzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0yMzI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktb3dtLWRheS0zMDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBiXFxcIn0ud2ktb3dtLWRheS0zMDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBiXFxcIn0ud2ktb3dtLWRheS0zMDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS0zMjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBiXFxcIn0ud2ktb3dtLWRheS01MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBiXFxcIn0ud2ktb3dtLWRheS01MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS01MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS01MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS01MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktb3dtLWRheS01MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS01MjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA5XFxcIn0ud2ktb3dtLWRheS01MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA5XFxcIn0ud2ktb3dtLWRheS01MjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA5XFxcIn0ud2ktb3dtLWRheS01MzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBlXFxcIn0ud2ktb3dtLWRheS02MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBhXFxcIn0ud2ktb3dtLWRheS02MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGIyXFxcIn0ud2ktb3dtLWRheS02MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBhXFxcIn0ud2ktb3dtLWRheS02MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS02MTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS02MTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS02MTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS02MjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA2XFxcIn0ud2ktb3dtLWRheS02MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBhXFxcIn0ud2ktb3dtLWRheS02MjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBhXFxcIn0ud2ktb3dtLWRheS03MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAzXFxcIn0ud2ktb3dtLWRheS03MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYyXFxcIn0ud2ktb3dtLWRheS03MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI2XFxcIn0ud2ktb3dtLWRheS03MzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLWRheS03NDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAzXFxcIn0ud2ktb3dtLWRheS03NjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLWRheS03NjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLWRheS03ODE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2ktb3dtLWRheS04MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktb3dtLWRheS04MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2ktb3dtLWRheS04MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2ktb3dtLWRheS04MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktb3dtLWRheS04MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktb3dtLWRheS05MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2ktb3dtLWRheS05MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDczXFxcIn0ud2ktb3dtLWRheS05MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktb3dtLWRheS05MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDcyXFxcIn0ud2ktb3dtLWRheS05MDY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA0XFxcIn0ud2ktb3dtLWRheS05NTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUwXFxcIn0ud2ktb3dtLW5pZ2h0LTIwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmRcXFwifS53aS1vd20tbmlnaHQtMjAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZFxcXCJ9LndpLW93bS1uaWdodC0yMDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJkXFxcIn0ud2ktb3dtLW5pZ2h0LTIxMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjVcXFwifS53aS1vd20tbmlnaHQtMjExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNVxcXCJ9LndpLW93bS1uaWdodC0yMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI1XFxcIn0ud2ktb3dtLW5pZ2h0LTIyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjVcXFwifS53aS1vd20tbmlnaHQtMjMwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZFxcXCJ9LndpLW93bS1uaWdodC0yMzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJkXFxcIn0ud2ktb3dtLW5pZ2h0LTIzMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmRcXFwifS53aS1vd20tbmlnaHQtMzAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYlxcXCJ9LndpLW93bS1uaWdodC0zMDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJiXFxcIn0ud2ktb3dtLW5pZ2h0LTMwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtMzEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC0zMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTMxMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtMzEzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC0zMTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTMyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmJcXFwifS53aS1vd20tbmlnaHQtNTAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYlxcXCJ9LndpLW93bS1uaWdodC01MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTUwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtNTAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC01MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTUxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjZcXFwifS53aS1vd20tbmlnaHQtNTIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOVxcXCJ9LndpLW93bS1uaWdodC01MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI5XFxcIn0ud2ktb3dtLW5pZ2h0LTUyMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjlcXFwifS53aS1vd20tbmlnaHQtNTMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyY1xcXCJ9LndpLW93bS1uaWdodC02MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJhXFxcIn0ud2ktb3dtLW5pZ2h0LTYwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjRcXFwifS53aS1vd20tbmlnaHQtNjAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYVxcXCJ9LndpLW93bS1uaWdodC02MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI2XFxcIn0ud2ktb3dtLW5pZ2h0LTYxMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjZcXFwifS53aS1vd20tbmlnaHQtNjE1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNlxcXCJ9LndpLW93bS1uaWdodC02MTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI2XFxcIn0ud2ktb3dtLW5pZ2h0LTYyMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjZcXFwifS53aS1vd20tbmlnaHQtNjIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYVxcXCJ9LndpLW93bS1uaWdodC02MjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJhXFxcIn0ud2ktb3dtLW5pZ2h0LTcwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNGFcXFwifS53aS1vd20tbmlnaHQtNzExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2MlxcXCJ9LndpLW93bS1uaWdodC03MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI2XFxcIn0ud2ktb3dtLW5pZ2h0LTczMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1vd20tbmlnaHQtNzQxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0YVxcXCJ9LndpLW93bS1uaWdodC03NjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLW5pZ2h0LTc2MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1vd20tbmlnaHQtNzgxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS1uaWdodC04MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJlXFxcIn0ud2ktb3dtLW5pZ2h0LTgwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODFcXFwifS53aS1vd20tbmlnaHQtODAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4NlxcXCJ9LndpLW93bS1uaWdodC04MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktb3dtLW5pZ2h0LTgwNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS1vd20tbmlnaHQtOTAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLW93bS1uaWdodC05MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDczXFxcIn0ud2ktb3dtLW5pZ2h0LTkwMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS1vd20tbmlnaHQtOTA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3MlxcXCJ9LndpLW93bS1uaWdodC05MDY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI0XFxcIn0ud2ktb3dtLW5pZ2h0LTk1NzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS13dS1jaGFuY2VmbHVycmllczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjRcXFwifS53aS13dS1jaGFuY2VyYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXd1LWNoYW5jZXNsZWF0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNVxcXCJ9LndpLXd1LWNoYW5jZXNub3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd3UtY2hhbmNldHN0b3JtczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS13dS1jbGVhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS13dS1jbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2ktd3UtZmx1cnJpZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY0XFxcIn0ud2ktd3UtaGF6eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjZcXFwifS53aS13dS1tb3N0bHljbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2ktd3UtbW9zdGx5c3Vubnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktd3UtcGFydGx5Y2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMlxcXCJ9LndpLXd1LXBhcnRseXN1bm55OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZFxcXCJ9LndpLXd1LXJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2ktd3Utc2xlYXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI1XFxcIn0ud2ktd3Utc25vdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13dS1zdW5ueTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS13dS10c3Rvcm1zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXd1LXVua25vd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0vKiMgc291cmNlTWFwcGluZ1VSTD13ZWF0aGVyLWljb25zLm1pbi5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3dlYXRoZXItaWNvbnMubWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkUsQ0FBQyxXQUFXLDBCQUEwQixDQUFDLDJDQUF5RCxDQUFDLHVTQUE0WSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksb0JBQW9CLENBQUMsMEJBQTBCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLGtDQUFrQyxDQUFDLGlDQUFpQyxDQUFDLE9BQU8saUJBQWlCLENBQUMsV0FBVyxDQUFDLGNBQWMsK0RBQStELENBQUMsK0JBQStCLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUMsZUFBZSwrREFBK0QsQ0FBQyxnQ0FBZ0MsQ0FBQyw0QkFBNEIsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLCtEQUErRCxDQUFDLGdDQUFnQyxDQUFDLDRCQUE0QixDQUFDLHdCQUF3QixDQUFDLG9CQUFvQix5RUFBeUUsQ0FBQyw4QkFBOEIsQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IseUVBQXlFLENBQUMsOEJBQThCLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxzQkFB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ZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsc0NBQXNDLGVBQWUsQ0FBQyxzQ0FBc0MsZUFBZSxDQUFDLHNDQUFzQyxlQUFlLENBQUMsc0NBQXNDLGVBQWUsQ0FBQyxzQ0FBc0MsZUFBZSxDQUFDLHNDQUFzQyxlQUFlLENBQUMsa0NBQWtDLGVBQWUsQ0FBQyxxQ0FBcUMsZUFBZSxDQUFDLHFDQUFxQyxlQUFlLENBQUMscUNBQXFDLGVBQWUsQ0FBQyxxQ0FBcUMsZUFBZSxDQUFDLHFDQUFxQyxlQUFlLENBQUMscUNBQXFDLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHFDQUFxQyxlQUFlLENBQUMscUNBQXFDLGVBQWUsQ0FBQyxxQ0FBcUMsZUFBZSxDQUFDLHFDQUFxQyxlQUFlLENBQUMscUNBQXFDLGVBQWUsQ0FBQyxxQ0FBcUMsZUFBZSxDQUFDLGtDQUFrQyxlQUFlLENBQUMsc0NBQXNDLGVBQWUsQ0FBQyxzQ0FBc0MsZUFBZSxDQUFDLHNDQUFzQyxlQUFlLENBQUMsc0NBQXNDLGVBQWUsQ0FBQyxzQ0FBc0MsZUFBZSxDQUFDLHNDQUFzQyxlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxrQkFBa0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsa0JBQWtCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1C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c0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMseUJBQXlCLGVBQWUsQ0FBQyw2QkFBNkIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyx5QkFBeUIsZUFBZSxDQUFDLDRCQUE0QixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxxQkFBcUIsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsMkJBQTJCLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLG1CQUFtQixlQUFlLENBQUMsb0JBQW9CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsc0JBQXNCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLGdEQUFnRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiFcXG4gKiAgV2VhdGhlciBJY29ucyAyLjAuMTBcXG4gKiAgVXBkYXRlZCBOb3ZlbWJlciAxLCAyMDIwXFxuICogIFdlYXRoZXIgdGhlbWVkIGljb25zIGZvciBCb290c3RyYXBcXG4gKiAgQXV0aG9yIC0gRXJpayBGbG93ZXJzIC0gZXJpa0BoZWxsb2VyaWsuY29tXFxuICogIEVtYWlsOiBlcmlrQGhlbGxvZXJpay5jb21cXG4gKiAgVHdpdHRlcjogaHR0cDovL3R3aXR0ZXIuY29tL0VyaWtfVVhcXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogIE1haW50YWluZWQgYXQgaHR0cDovL2VyaWtmbG93ZXJzLmdpdGh1Yi5pby93ZWF0aGVyLWljb25zXFxuICpcXG4gKiAgTGljZW5zZVxcbiAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiAgLSBGb250IGxpY2Vuc2VkIHVuZGVyIFNJTCBPRkwgMS4xIC1cXG4gKiAgICBodHRwOi8vc2NyaXB0cy5zaWwub3JnL09GTFxcbiAqICAtIENTUywgU0NTUyBhbmQgTEVTUyBhcmUgbGljZW5zZWQgdW5kZXIgTUlUIExpY2Vuc2UgLVxcbiAqICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5odG1sXFxuICogIC0gRG9jdW1lbnRhdGlvbiBsaWNlbnNlZCB1bmRlciBDQyBCWSAzLjAgLVxcbiAqICAgIGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzMuMC9cXG4gKiAgLSBJbnNwaXJlZCBieSBhbmQgd29ya3MgZ3JlYXQgYXMgYSBjb21wYW5pb24gd2l0aCBGb250IEF3ZXNvbWVcXG4gKiAgICBcXFwiRm9udCBBd2Vzb21lIGJ5IERhdmUgR2FuZHkgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW9cXFwiXFxuICovQGZvbnQtZmFjZXtmb250LWZhbWlseTond2VhdGhlcmljb25zJztzcmM6dXJsKCcuL2Fzc2V0cy9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQuZW90Jyk7c3JjOnVybCgnLi9hc3NldHMvZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksdXJsKCcuL2Fzc2V0cy9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksdXJsKCcuL2Fzc2V0cy9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpLHVybCgnLi9hc3NldHMvZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSx1cmwoJy4vYXNzZXRzL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC5zdmcjd2VhdGhlcl9pY29uc3JlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbH0ud2l7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1mYW1pbHk6J3dlYXRoZXJpY29ucyc7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2xpbmUtaGVpZ2h0OjE7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGV9LndpLWZ3e3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEuNGVtfS53aS1yb3RhdGUtOTB7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfS53aS1yb3RhdGUtMTgwe2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0ud2ktcm90YXRlLTI3MHtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Myk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9LndpLWZsaXAtaG9yaXpvbnRhbHtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC0xLCAxKTstbXMtdHJhbnNmb3JtOnNjYWxlKC0xLCAxKTt0cmFuc2Zvcm06c2NhbGUoLTEsIDEpfS53aS1mbGlwLXZlcnRpY2Fse2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwgLTEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSwgLTEpO3RyYW5zZm9ybTpzY2FsZSgxLCAtMSl9LndpLWRheS1zdW5ueTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS1kYXktY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMlxcXCJ9LndpLWRheS1jbG91ZHktZ3VzdHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAwXFxcIn0ud2ktZGF5LWNsb3VkeS13aW5keTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDFcXFwifS53aS1kYXktZm9nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwM1xcXCJ9LndpLWRheS1oYWlsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNFxcXCJ9LndpLWRheS1oYXplOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNlxcXCJ9LndpLWRheS1saWdodG5pbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA1XFxcIn0ud2ktZGF5LXJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA4XFxcIn0ud2ktZGF5LXJhaW4tbWl4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwNlxcXCJ9LndpLWRheS1yYWluLXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA3XFxcIn0ud2ktZGF5LXNob3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDA5XFxcIn0ud2ktZGF5LXNsZWV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiMlxcXCJ9LndpLWRheS1zbGVldC1zdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjhcXFwifS53aS1kYXktc25vdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGFcXFwifS53aS1kYXktc25vdy10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDZiXFxcIn0ud2ktZGF5LXNub3ctd2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjVcXFwifS53aS1kYXktc3ByaW5rbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBiXFxcIn0ud2ktZGF5LXN0b3JtLXNob3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBlXFxcIn0ud2ktZGF5LXN1bm55LW92ZXJjYXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwY1xcXCJ9LndpLWRheS10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEwXFxcIn0ud2ktZGF5LXdpbmR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4NVxcXCJ9LndpLXNvbGFyLWVjbGlwc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDZlXFxcIn0ud2ktaG90OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3MlxcXCJ9LndpLWRheS1jbG91ZHktaGlnaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwN2RcXFwifS53aS1kYXktbGlnaHQtd2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzRcXFwifS53aS1uaWdodC1jbGVhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmVcXFwifS53aS1uaWdodC1hbHQtY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4NlxcXCJ9LndpLW5pZ2h0LWFsdC1jbG91ZHktZ3VzdHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDIyXFxcIn0ud2ktbmlnaHQtYWx0LWNsb3VkeS13aW5keTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjNcXFwifS53aS1uaWdodC1hbHQtaGFpbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjRcXFwifS53aS1uaWdodC1hbHQtbGlnaHRuaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNVxcXCJ9LndpLW5pZ2h0LWFsdC1yYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW5pZ2h0LWFsdC1yYWluLW1peDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjZcXFwifS53aS1uaWdodC1hbHQtcmFpbi13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyN1xcXCJ9LndpLW5pZ2h0LWFsdC1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOVxcXCJ9LndpLW5pZ2h0LWFsdC1zbGVldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjRcXFwifS53aS1uaWdodC1hbHQtc2xlZXQtc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDZhXFxcIn0ud2ktbmlnaHQtYWx0LXNub3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJhXFxcIn0ud2ktbmlnaHQtYWx0LXNub3ctdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2ZFxcXCJ9LndpLW5pZ2h0LWFsdC1zbm93LXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDY3XFxcIn0ud2ktbmlnaHQtYWx0LXNwcmlua2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYlxcXCJ9LndpLW5pZ2h0LWFsdC1zdG9ybS1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyY1xcXCJ9LndpLW5pZ2h0LWFsdC10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJkXFxcIn0ud2ktbmlnaHQtY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzMVxcXCJ9LndpLW5pZ2h0LWNsb3VkeS1ndXN0czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmZcXFwifS53aS1uaWdodC1jbG91ZHktd2luZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDMwXFxcIn0ud2ktbmlnaHQtZm9nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0YVxcXCJ9LndpLW5pZ2h0LWhhaWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDMyXFxcIn0ud2ktbmlnaHQtbGlnaHRuaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzM1xcXCJ9LndpLW5pZ2h0LXBhcnRseS1jbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDgzXFxcIn0ud2ktbmlnaHQtcmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzZcXFwifS53aS1uaWdodC1yYWluLW1peDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzRcXFwifS53aS1uaWdodC1yYWluLXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDM1XFxcIn0ud2ktbmlnaHQtc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzdcXFwifS53aS1uaWdodC1zbGVldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjNcXFwifS53aS1uaWdodC1zbGVldC1zdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjlcXFwifS53aS1uaWdodC1zbm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzOFxcXCJ9LndpLW5pZ2h0LXNub3ctdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2Y1xcXCJ9LndpLW5pZ2h0LXNub3ctd2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjZcXFwifS53aS1uaWdodC1zcHJpbmtsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzlcXFwifS53aS1uaWdodC1zdG9ybS1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzYVxcXCJ9LndpLW5pZ2h0LXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwM2JcXFwifS53aS1sdW5hci1lY2xpcHNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3MFxcXCJ9LndpLXN0YXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3N1xcXCJ9LndpLXN0b3JtLXNob3dlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFkXFxcIn0ud2ktdGh1bmRlcnN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLW5pZ2h0LWFsdC1jbG91ZHktaGlnaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwN2VcXFwifS53aS1uaWdodC1jbG91ZHktaGlnaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODBcXFwifS53aS1uaWdodC1hbHQtcGFydGx5LWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODFcXFwifS53aS1jbG91ZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDFcXFwifS53aS1jbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktY2xvdWR5LWd1c3RzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxMVxcXCJ9LndpLWNsb3VkeS13aW5keTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTJcXFwifS53aS1mb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktaGFpbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS1yYWluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXJhaW4tbWl4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXJhaW4td2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMThcXFwifS53aS1zaG93ZXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYVxcXCJ9LndpLXNsZWV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNVxcXCJ9LndpLXNub3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktc3ByaW5rbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktc3Rvcm0tc2hvd2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWRcXFwifS53aS10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktc25vdy13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2NFxcXCJ9LndpLXNub3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktc21vZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzRcXFwifS53aS1zbW9rZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjJcXFwifS53aS1saWdodG5pbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE2XFxcIn0ud2ktcmFpbmRyb3BzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0ZVxcXCJ9LndpLXJhaW5kcm9wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3OFxcXCJ9LndpLWR1c3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktc25vd2ZsYWtlLWNvbGQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktd2luZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDIxXFxcIn0ud2ktc3Ryb25nLXdpbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUwXFxcIn0ud2ktc2FuZHN0b3JtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4MlxcXCJ9LndpLWVhcnRocXVha2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGM2XFxcIn0ud2ktZmlyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzdcXFwifS53aS1mbG9vZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwN2NcXFwifS53aS1tZXRlb3I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDcxXFxcIn0ud2ktdHN1bmFtaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzVcXFwifS53aS12b2xjYW5vOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjOFxcXCJ9LndpLWh1cnJpY2FuZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzNcXFwifS53aS10b3JuYWRvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLXNtYWxsLWNyYWZ0LWFkdmlzb3J5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjY1xcXCJ9LndpLWdhbGUtd2FybmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwY2RcXFwifS53aS1zdG9ybS13YXJuaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjZVxcXCJ9LndpLWh1cnJpY2FuZS13YXJuaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjZlxcXCJ9LndpLXdpbmQtZGlyZWN0aW9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiMVxcXCJ9LndpLWFsaWVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NVxcXCJ9LndpLWNlbHNpdXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDNjXFxcIn0ud2ktZmFocmVuaGVpdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDVcXFwifS53aS1kZWdyZWVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0MlxcXCJ9LndpLXRoZXJtb21ldGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NVxcXCJ9LndpLXRoZXJtb21ldGVyLWV4dGVyaW9yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1M1xcXCJ9LndpLXRoZXJtb21ldGVyLWludGVybmFsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NFxcXCJ9LndpLWNsb3VkLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDNkXFxcIn0ud2ktY2xvdWQtdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQwXFxcIn0ud2ktY2xvdWQtcmVmcmVzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwM2VcXFwifS53aS1ob3Jpem9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0N1xcXCJ9LndpLWhvcml6b24tYWx0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0NlxcXCJ9LndpLXN1bnJpc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUxXFxcIn0ud2ktc3Vuc2V0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MlxcXCJ9LndpLW1vb25yaXNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjOVxcXCJ9LndpLW1vb25zZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGNhXFxcIn0ud2ktcmVmcmVzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNGNcXFwifS53aS1yZWZyZXNoLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNGJcXFwifS53aS11bWJyZWxsYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODRcXFwifS53aS1iYXJvbWV0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc5XFxcIn0ud2ktaHVtaWRpdHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDdhXFxcIn0ud2ktbmE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDdiXFxcIn0ud2ktdHJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGNiXFxcIn0ud2ktbW9vbi1uZXc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk1XFxcIn0ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTZcXFwifS53aS1tb29uLXdheGluZy1jcmVzY2VudC0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5N1xcXCJ9LndpLW1vb24td2F4aW5nLWNyZXNjZW50LTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk4XFxcIn0ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTlcXFwifS53aS1tb29uLXdheGluZy1jcmVzY2VudC01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5YVxcXCJ9LndpLW1vb24td2F4aW5nLWNyZXNjZW50LTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDliXFxcIn0ud2ktbW9vbi1maXJzdC1xdWFydGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5Y1xcXCJ9LndpLW1vb24td2F4aW5nLWdpYmJvdXMtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWRcXFwifS53aS1tb29uLXdheGluZy1naWJib3VzLTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDllXFxcIn0ud2ktbW9vbi13YXhpbmctZ2liYm91cy0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5ZlxcXCJ9LndpLW1vb24td2F4aW5nLWdpYmJvdXMtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTBcXFwifS53aS1tb29uLXdheGluZy1naWJib3VzLTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGExXFxcIn0ud2ktbW9vbi13YXhpbmctZ2liYm91cy02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhMlxcXCJ9LndpLW1vb24tZnVsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTNcXFwifS53aS1tb29uLXdhbmluZy1naWJib3VzLTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE0XFxcIn0ud2ktbW9vbi13YW5pbmctZ2liYm91cy0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhNVxcXCJ9LndpLW1vb24td2FuaW5nLWdpYmJvdXMtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTZcXFwifS53aS1tb29uLXdhbmluZy1naWJib3VzLTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE3XFxcIn0ud2ktbW9vbi13YW5pbmctZ2liYm91cy01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhOFxcXCJ9LndpLW1vb24td2FuaW5nLWdpYmJvdXMtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTlcXFwifS53aS1tb29uLXRoaXJkLXF1YXJ0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFhXFxcIn0ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWJcXFwifS53aS1tb29uLXdhbmluZy1jcmVzY2VudC0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhY1xcXCJ9LndpLW1vb24td2FuaW5nLWNyZXNjZW50LTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFkXFxcIn0ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWVcXFwifS53aS1tb29uLXdhbmluZy1jcmVzY2VudC01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhZlxcXCJ9LndpLW1vb24td2FuaW5nLWNyZXNjZW50LTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGIwXFxcIn0ud2ktbW9vbi1hbHQtbmV3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlYlxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkMFxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkMVxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkMlxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkM1xcXCJ9LndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkNFxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkNVxcXCJ9LndpLW1vb24tYWx0LWZpcnN0LXF1YXJ0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGQ2XFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZDdcXFwifS53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkOFxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGQ5XFxcIn0ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZGFcXFwifS53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkYlxcXCJ9LndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGRjXFxcIn0ud2ktbW9vbi1hbHQtZnVsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZGRcXFwifS53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBkZVxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGRmXFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTBcXFwifS53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlMVxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGUyXFxcIn0ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwZTNcXFwifS53aS1tb29uLWFsdC10aGlyZC1xdWFydGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlNFxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC0xOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlNVxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlNlxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlN1xcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC00OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlOFxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlOVxcXCJ9LndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBlYVxcXCJ9LndpLW1vb24tMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTVcXFwifS53aS1tb29uLTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk2XFxcIn0ud2ktbW9vbi0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5N1xcXCJ9LndpLW1vb24tMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOThcXFwifS53aS1tb29uLTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk5XFxcIn0ud2ktbW9vbi01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5YVxcXCJ9LndpLW1vb24tNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWJcXFwifS53aS1tb29uLTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDljXFxcIn0ud2ktbW9vbi04OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5ZFxcXCJ9LndpLW1vb24tOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOWVcXFwifS53aS1tb29uLTEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5ZlxcXCJ9LndpLW1vb24tMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGEwXFxcIn0ud2ktbW9vbi0xMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTFcXFwifS53aS1tb29uLTEzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhMlxcXCJ9LndpLW1vb24tMTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGEzXFxcIn0ud2ktbW9vbi0xNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTRcXFwifS53aS1tb29uLTE2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhNVxcXCJ9LndpLW1vb24tMTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE2XFxcIn0ud2ktbW9vbi0xODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYTdcXFwifS53aS1tb29uLTE5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhOFxcXCJ9LndpLW1vb24tMjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGE5XFxcIn0ud2ktbW9vbi0yMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWFcXFwifS53aS1tb29uLTIyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhYlxcXCJ9LndpLW1vb24tMjM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFjXFxcIn0ud2ktbW9vbi0yNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYWRcXFwifS53aS1tb29uLTI1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBhZVxcXCJ9LndpLW1vb24tMjY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGFmXFxcIn0ud2ktbW9vbi0yNzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjBcXFwifS53aS10aW1lLTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDhhXFxcIn0ud2ktdGltZS0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4YlxcXCJ9LndpLXRpbWUtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOGNcXFwifS53aS10aW1lLTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDhkXFxcIn0ud2ktdGltZS01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4ZVxcXCJ9LndpLXRpbWUtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOGZcXFwifS53aS10aW1lLTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDkwXFxcIn0ud2ktdGltZS04OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5MVxcXCJ9LndpLXRpbWUtOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwOTJcXFwifS53aS10aW1lLTEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA5M1xcXCJ9LndpLXRpbWUtMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDk0XFxcIn0ud2ktdGltZS0xMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODlcXFwifS53aS1kaXJlY3Rpb24tdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU4XFxcIn0ud2ktZGlyZWN0aW9uLXVwLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1N1xcXCJ9LndpLWRpcmVjdGlvbi1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNGRcXFwifS53aS1kaXJlY3Rpb24tZG93bi1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwODhcXFwifS53aS1kaXJlY3Rpb24tZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNDRcXFwifS53aS1kaXJlY3Rpb24tZG93bi1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0M1xcXCJ9LndpLWRpcmVjdGlvbi1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0OFxcXCJ9LndpLWRpcmVjdGlvbi11cC1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4N1xcXCJ9LndpLXdpbmQtYmVhdWZvcnQtMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjdcXFwifS53aS13aW5kLWJlYXVmb3J0LTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI4XFxcIn0ud2ktd2luZC1iZWF1Zm9ydC0yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiOVxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYmFcXFwifS53aS13aW5kLWJlYXVmb3J0LTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGJiXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC01OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiY1xcXCJ9LndpLXdpbmQtYmVhdWZvcnQtNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYmRcXFwifS53aS13aW5kLWJlYXVmb3J0LTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGJlXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC04OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiZlxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzBcXFwifS53aS13aW5kLWJlYXVmb3J0LTEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBjMVxcXCJ9LndpLXdpbmQtYmVhdWZvcnQtMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGMyXFxcIn0ud2ktd2luZC1iZWF1Zm9ydC0xMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYzNcXFwifS53aS15YWhvby0wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLXlhaG9vLTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBlXFxcIn0ud2kteWFob28tMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzNcXFwifS53aS15YWhvby0zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXlhaG9vLTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2kteWFob28tNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS15YWhvby02OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXlhaG9vLTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2kteWFob28tODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS15YWhvby05OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYVxcXCJ9LndpLXlhaG9vLTEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXlhaG9vLTExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYVxcXCJ9LndpLXlhaG9vLTEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYVxcXCJ9LndpLXlhaG9vLTEzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXlhaG9vLTE0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwYVxcXCJ9LndpLXlhaG9vLTE1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2NFxcXCJ9LndpLXlhaG9vLTE2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXlhaG9vLTE3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXlhaG9vLTE4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXlhaG9vLTE5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLXlhaG9vLTIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXlhaG9vLTIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyMVxcXCJ9LndpLXlhaG9vLTIyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2MlxcXCJ9LndpLXlhaG9vLTIzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MFxcXCJ9LndpLXlhaG9vLTI0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MFxcXCJ9LndpLXlhaG9vLTI1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXlhaG9vLTI2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLXlhaG9vLTI3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzMVxcXCJ9LndpLXlhaG9vLTI4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMlxcXCJ9LndpLXlhaG9vLTI5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAzMVxcXCJ9LndpLXlhaG9vLTMwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwMlxcXCJ9LndpLXlhaG9vLTMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZVxcXCJ9LndpLXlhaG9vLTMyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZFxcXCJ9LndpLXlhaG9vLTMzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4M1xcXCJ9LndpLXlhaG9vLTM0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwY1xcXCJ9LndpLXlhaG9vLTM1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXlhaG9vLTM2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3MlxcXCJ9LndpLXlhaG9vLTM3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZVxcXCJ9LndpLXlhaG9vLTM4OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZVxcXCJ9LndpLXlhaG9vLTM5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZVxcXCJ9LndpLXlhaG9vLTQwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYVxcXCJ9LndpLXlhaG9vLTQxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2NFxcXCJ9LndpLXlhaG9vLTQyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXlhaG9vLTQzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2NFxcXCJ9LndpLXlhaG9vLTQ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwY1xcXCJ9LndpLXlhaG9vLTQ1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZVxcXCJ9LndpLXlhaG9vLTQ2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXlhaG9vLTQ3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZVxcXCJ9LndpLXlhaG9vLTMyMDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc3XFxcIn0ud2ktZm9yZWNhc3QtaW8tY2xlYXItZGF5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZFxcXCJ9LndpLWZvcmVjYXN0LWlvLWNsZWFyLW5pZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZVxcXCJ9LndpLWZvcmVjYXN0LWlvLXJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktZm9yZWNhc3QtaW8tc25vdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS1mb3JlY2FzdC1pby1zbGVldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjVcXFwifS53aS1mb3JlY2FzdC1pby13aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MFxcXCJ9LndpLWZvcmVjYXN0LWlvLWZvZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS1mb3JlY2FzdC1pby1jbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktZm9yZWNhc3QtaW8tcGFydGx5LWNsb3VkeS1kYXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2ktZm9yZWNhc3QtaW8tcGFydGx5LWNsb3VkeS1uaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMzFcXFwifS53aS1mb3JlY2FzdC1pby1oYWlsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLWZvcmVjYXN0LWlvLXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1mb3JlY2FzdC1pby10b3JuYWRvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NlxcXCJ9LndpLXdtbzQ2ODAtMDpiZWZvcmUsLndpLXdtbzQ2ODAtMDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU1XFxcIn0ud2ktd21vNDY4MC0xOmJlZm9yZSwud2ktd21vNDY4MC0wMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS13bW80NjgwLTI6YmVmb3JlLC53aS13bW80NjgwLTAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1NVxcXCJ9LndpLXdtbzQ2ODAtMzpiZWZvcmUsLndpLXdtbzQ2ODAtMDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDEzXFxcIn0ud2ktd21vNDY4MC00OmJlZm9yZSwud2ktd21vNDY4MC0wNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTU6YmVmb3JlLC53aS13bW80NjgwLTA1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0xMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNlxcXCJ9LndpLXdtbzQ2ODAtMTg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDUwXFxcIn0ud2ktd21vNDY4MC0yMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXdtbzQ2ODAtMjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktd21vNDY4MC0yMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTI0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXdtbzQ2ODAtMjU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktd21vNDY4MC0yNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS13bW80NjgwLTI3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLXdtbzQ2ODAtMjg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktd21vNDY4MC0yOTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS13bW80NjgwLTMwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0zMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTMzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLXdtbzQ2ODAtMzQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE0XFxcIn0ud2ktd21vNDY4MC0zNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS13bW80NjgwLTQwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXdtbzQ2ODAtNDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktd21vNDY4MC00MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTQzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtNDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd21vNDY4MC00NTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS13bW80NjgwLTQ2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXdtbzQ2ODAtNDc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd21vNDY4MC00ODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13bW80NjgwLTUwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtNTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktd21vNDY4MC01MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTUzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtNTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktd21vNDY4MC01NTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS13bW80NjgwLTU2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXdtbzQ2ODAtNTc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktd21vNDY4MC01ODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTYwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLXdtbzQ2ODAtNjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktd21vNDY4MC02MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTYzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtNjQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktd21vNDY4MC02NTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS13bW80NjgwLTY2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNVxcXCJ9LndpLXdtbzQ2ODAtNjc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktd21vNDY4MC02ODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS13bW80NjgwLTcwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXdtbzQ2ODAtNzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd21vNDY4MC03MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13bW80NjgwLTczOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXdtbzQ2ODAtNzQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktd21vNDY4MC03NTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS13bW80NjgwLTc2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLXdtbzQ2ODAtNzc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktd21vNDY4MC03ODpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS13bW80NjgwLTgwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtODE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktd21vNDY4MC04MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS13bW80NjgwLTgzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLXdtbzQ2ODAtODQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFkXFxcIn0ud2ktd21vNDY4MC04NTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS13bW80NjgwLTg2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLXdtbzQ2ODAtODc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktd21vNDY4MC04OTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTVcXFwifS53aS13bW80NjgwLTkwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNlxcXCJ9LndpLXdtbzQ2ODAtOTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFkXFxcIn0ud2ktd21vNDY4MC05MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS13bW80NjgwLTkzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXdtbzQ2ODAtOTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE2XFxcIn0ud2ktd21vNDY4MC05NTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS13bW80NjgwLTk2OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXdtbzQ2ODAtOTk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2ktb3dtLTIwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1vd20tMjAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLW93bS0yMDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktb3dtLTIxMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTZcXFwifS53aS1vd20tMjExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNlxcXCJ9LndpLW93bS0yMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE2XFxcIn0ud2ktb3dtLTIyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTZcXFwifS53aS1vd20tMjMwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLW93bS0yMzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktb3dtLTIzMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWVcXFwifS53aS1vd20tMzAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLW93bS0zMDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFjXFxcIn0ud2ktb3dtLTMwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1vd20tMzEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLW93bS0zMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktb3dtLTMxMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1vd20tMzEzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYVxcXCJ9LndpLW93bS0zMTQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktb3dtLTMyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWNcXFwifS53aS1vd20tNTAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxY1xcXCJ9LndpLW93bS01MDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktb3dtLTUwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTlcXFwifS53aS1vd20tNTAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxOVxcXCJ9LndpLW93bS01MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktb3dtLTUxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS1vd20tNTIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYVxcXCJ9LndpLW93bS01MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFhXFxcIn0ud2ktb3dtLTUyMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS1vd20tNTMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZFxcXCJ9LndpLW93bS02MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktb3dtLTYwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS1vd20tNjAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNVxcXCJ9LndpLW93bS02MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktb3dtLTYxMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS1vd20tNjE1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxN1xcXCJ9LndpLW93bS02MTY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE3XFxcIn0ud2ktb3dtLTYyMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTdcXFwifS53aS1vd20tNjIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLW93bS02MjI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFiXFxcIn0ud2ktb3dtLTcwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTRcXFwifS53aS1vd20tNzExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2MlxcXCJ9LndpLW93bS03MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI2XFxcIn0ud2ktb3dtLTczMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1vd20tNzQxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxNFxcXCJ9LndpLW93bS03NjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYzXFxcIn0ud2ktb3dtLTc2MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1vd20tNzcxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxMVxcXCJ9LndpLW93bS03ODE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2ktb3dtLTgwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS1vd20tODAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0MVxcXCJ9LndpLW93bS04MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDQxXFxcIn0ud2ktb3dtLTgwMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS1vd20tODA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLW93bS05MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2ktb3dtLTkwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWRcXFwifS53aS1vd20tOTAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3M1xcXCJ9LndpLW93bS05MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDc2XFxcIn0ud2ktb3dtLTkwNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzJcXFwifS53aS1vd20tOTA1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyMVxcXCJ9LndpLW93bS05MDY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE1XFxcIn0ud2ktb3dtLTk1NzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS1vd20tZGF5LTIwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTBcXFwifS53aS1vd20tZGF5LTIwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTBcXFwifS53aS1vd20tZGF5LTIwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTBcXFwifS53aS1vd20tZGF5LTIxMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDVcXFwifS53aS1vd20tZGF5LTIxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDVcXFwifS53aS1vd20tZGF5LTIxMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDVcXFwifS53aS1vd20tZGF5LTIyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDVcXFwifS53aS1vd20tZGF5LTIzMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTBcXFwifS53aS1vd20tZGF5LTIzMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTBcXFwifS53aS1vd20tZGF5LTIzMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTBcXFwifS53aS1vd20tZGF5LTMwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGJcXFwifS53aS1vd20tZGF5LTMwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGJcXFwifS53aS1vd20tZGF5LTMwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDhcXFwifS53aS1vd20tZGF5LTMxMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDhcXFwifS53aS1vd20tZGF5LTMxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDhcXFwifS53aS1vd20tZGF5LTMxMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDhcXFwifS53aS1vd20tZGF5LTMxMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDhcXFwifS53aS1vd20tZGF5LTMxNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDhcXFwifS53aS1vd20tZGF5LTMyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGJcXFwifS53aS1vd20tZGF5LTUwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGJcXFwifS53aS1vd20tZGF5LTUwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDhcXFwifS53aS1vd20tZGF5LTUwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDhcXFwifS53aS1vd20tZGF5LTUwMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDhcXFwifS53aS1vd20tZGF5LTUwNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDhcXFwifS53aS1vd20tZGF5LTUxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDZcXFwifS53aS1vd20tZGF5LTUyMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDlcXFwifS53aS1vd20tZGF5LTUyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDlcXFwifS53aS1vd20tZGF5LTUyMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDlcXFwifS53aS1vd20tZGF5LTUzMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGVcXFwifS53aS1vd20tZGF5LTYwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGFcXFwifS53aS1vd20tZGF5LTYwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjJcXFwifS53aS1vd20tZGF5LTYwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGFcXFwifS53aS1vd20tZGF5LTYxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDZcXFwifS53aS1vd20tZGF5LTYxMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDZcXFwifS53aS1vd20tZGF5LTYxNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDZcXFwifS53aS1vd20tZGF5LTYxNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDZcXFwifS53aS1vd20tZGF5LTYyMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDZcXFwifS53aS1vd20tZGF5LTYyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGFcXFwifS53aS1vd20tZGF5LTYyMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGFcXFwifS53aS1vd20tZGF5LTcwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDNcXFwifS53aS1vd20tZGF5LTcxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjJcXFwifS53aS1vd20tZGF5LTcyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjZcXFwifS53aS1vd20tZGF5LTczMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1vd20tZGF5LTc0MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDNcXFwifS53aS1vd20tZGF5LTc2MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1vd20tZGF5LTc2MjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1vd20tZGF5LTc4MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS1vd20tZGF5LTgwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS1vd20tZGF5LTgwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS1vd20tZGF5LTgwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS1vd20tZGF5LTgwMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS1vd20tZGF5LTgwNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS1vd20tZGF5LTkwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTZcXFwifS53aS1vd20tZGF5LTkwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzNcXFwifS53aS1vd20tZGF5LTkwMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzZcXFwifS53aS1vd20tZGF5LTkwNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzJcXFwifS53aS1vd20tZGF5LTkwNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDRcXFwifS53aS1vd20tZGF5LTk1NzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNTBcXFwifS53aS1vd20tbmlnaHQtMjAwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZFxcXCJ9LndpLW93bS1uaWdodC0yMDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJkXFxcIn0ud2ktb3dtLW5pZ2h0LTIwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmRcXFwifS53aS1vd20tbmlnaHQtMjEwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNVxcXCJ9LndpLW93bS1uaWdodC0yMTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI1XFxcIn0ud2ktb3dtLW5pZ2h0LTIxMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjVcXFwifS53aS1vd20tbmlnaHQtMjIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNVxcXCJ9LndpLW93bS1uaWdodC0yMzA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJkXFxcIn0ud2ktb3dtLW5pZ2h0LTIzMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmRcXFwifS53aS1vd20tbmlnaHQtMjMyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyZFxcXCJ9LndpLW93bS1uaWdodC0zMDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJiXFxcIn0ud2ktb3dtLW5pZ2h0LTMwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmJcXFwifS53aS1vd20tbmlnaHQtMzAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC0zMTA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTMxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtMzEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC0zMTM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTMxNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtMzIxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyYlxcXCJ9LndpLW93bS1uaWdodC01MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJiXFxcIn0ud2ktb3dtLW5pZ2h0LTUwMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtNTAyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOFxcXCJ9LndpLW93bS1uaWdodC01MDM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI4XFxcIn0ud2ktb3dtLW5pZ2h0LTUwNDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjhcXFwifS53aS1vd20tbmlnaHQtNTExOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNlxcXCJ9LndpLW93bS1uaWdodC01MjA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI5XFxcIn0ud2ktb3dtLW5pZ2h0LTUyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjlcXFwifS53aS1vd20tbmlnaHQtNTIyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyOVxcXCJ9LndpLW93bS1uaWdodC01MzE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJjXFxcIn0ud2ktb3dtLW5pZ2h0LTYwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmFcXFwifS53aS1vd20tbmlnaHQtNjAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNFxcXCJ9LndpLW93bS1uaWdodC02MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJhXFxcIn0ud2ktb3dtLW5pZ2h0LTYxMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjZcXFwifS53aS1vd20tbmlnaHQtNjEyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNlxcXCJ9LndpLW93bS1uaWdodC02MTU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDI2XFxcIn0ud2ktb3dtLW5pZ2h0LTYxNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjZcXFwifS53aS1vd20tbmlnaHQtNjIwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAyNlxcXCJ9LndpLW93bS1uaWdodC02MjE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDJhXFxcIn0ud2ktb3dtLW5pZ2h0LTYyMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmFcXFwifS53aS1vd20tbmlnaHQtNzAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA0YVxcXCJ9LndpLW93bS1uaWdodC03MTE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDYyXFxcIn0ud2ktb3dtLW5pZ2h0LTcyMTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjZcXFwifS53aS1vd20tbmlnaHQtNzMxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLW93bS1uaWdodC03NDE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDRhXFxcIn0ud2ktb3dtLW5pZ2h0LTc2MTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjNcXFwifS53aS1vd20tbmlnaHQtNzYyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2M1xcXCJ9LndpLW93bS1uaWdodC03ODE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2ktb3dtLW5pZ2h0LTgwMDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMmVcXFwifS53aS1vd20tbmlnaHQtODAxOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA4MVxcXCJ9LndpLW93bS1uaWdodC04MDI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDg2XFxcIn0ud2ktb3dtLW5pZ2h0LTgwMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMTNcXFwifS53aS1vd20tbmlnaHQtODA0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxM1xcXCJ9LndpLW93bS1uaWdodC05MDA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDU2XFxcIn0ud2ktb3dtLW5pZ2h0LTkwMjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNzNcXFwifS53aS1vd20tbmlnaHQtOTAzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA3NlxcXCJ9LndpLW93bS1uaWdodC05MDQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDcyXFxcIn0ud2ktb3dtLW5pZ2h0LTkwNjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMjRcXFwifS53aS1vd20tbmlnaHQtOTU3OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA1MFxcXCJ9LndpLXd1LWNoYW5jZWZsdXJyaWVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjA2NFxcXCJ9LndpLXd1LWNoYW5jZXJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDE5XFxcIn0ud2ktd3UtY2hhbmNlc2xlYXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMGI1XFxcIn0ud2ktd3UtY2hhbmNlc25vdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWJcXFwifS53aS13dS1jaGFuY2V0c3Rvcm1zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxZVxcXCJ9LndpLXd1LWNsZWFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZFxcXCJ9LndpLXd1LWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS13dS1mbHVycmllczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwNjRcXFwifS53aS13dS1oYXp5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjBiNlxcXCJ9LndpLXd1LW1vc3RseWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMDJcXFwifS53aS13dS1tb3N0bHlzdW5ueTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS53aS13dS1wYXJ0bHljbG91ZHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDAyXFxcIn0ud2ktd3UtcGFydGx5c3Vubnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDBkXFxcIn0ud2ktd3UtcmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMWFcXFwifS53aS13dS1zbGVhdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwYjVcXFwifS53aS13dS1zbm93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAxYlxcXCJ9LndpLXd1LXN1bm55OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjAwZFxcXCJ9LndpLXd1LXRzdG9ybXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMDFlXFxcIn0ud2ktd3UtdW5rbm93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYwMGRcXFwifS8qIyBzb3VyY2VNYXBwaW5nVVJMPXdlYXRoZXItaWNvbnMubWluLmNzcy5tYXAgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn1cblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZyb21Vbml4VGltZVxuICogQGNhdGVnb3J5IFRpbWVzdGFtcCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKS4gRGVjaW1hbCB2YWx1ZXMgd2lsbCBiZSBkaXNjYXJkZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdW5peFRpbWUgLSB0aGUgZ2l2ZW4gVW5peCB0aW1lc3RhbXAgKGluIHNlY29uZHMpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGUgdGhlIGRhdGUgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowNTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb21Vbml4VGltZSgxMzMwNTE1OTA1KVxuICogLy89PiBXZWQgRmViIDI5IDIwMTIgMTE6NDU6MDVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmcm9tVW5peFRpbWUoZGlydHlVbml4VGltZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHVuaXhUaW1lID0gdG9JbnRlZ2VyKGRpcnR5VW5peFRpbWUpO1xuICByZXR1cm4gdG9EYXRlKHVuaXhUaW1lICogMTAwMCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gTm93IGBpc1ZhbGlkYCBkb2Vzbid0IHRocm93IGFuIGV4Y2VwdGlvblxuICogICBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiAgIEluc3RlYWQsIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCBiZWZvcmVoYW5kIHVzaW5nIGB0b0RhdGVgLlxuICpcbiAqICAgRXhhbXBsZXM6XG4gKlxuICogICB8IGBpc1ZhbGlkYCBhcmd1bWVudCAgICAgICAgfCBCZWZvcmUgdjIuMC4wIHwgdjIuMC4wIG9ud2FyZCB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBgbmV3IERhdGUoKWAgICAgICAgICAgICAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnMjAxNi0wMS0wMScpYCAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcnKWAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoMTQ4ODM3MDgzNTA4MSlgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZShOYU4pYCAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcyMDE2LTAxLTAxJ2AgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJydgICAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAxNDg4MzcwODM1MDgxYCAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYE5hTmAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiAgIFdlIGludHJvZHVjZSB0aGlzIGNoYW5nZSB0byBtYWtlICpkYXRlLWZucyogY29uc2lzdGVudCB3aXRoIEVDTUFTY3JpcHQgYmVoYXZpb3JcbiAqICAgdGhhdCB0cnkgdG8gY29lcmNlIGFyZ3VtZW50cyB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICogICAod2hpY2ggaXMgYWxzbyB0aGUgY2FzZSB3aXRoIG90aGVyICpkYXRlLWZucyogZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWF0aGVyLWljb25zLm1pbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXItaWNvbnMubWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgaGFuZGxlRXJyb3IgPVxuICAoZm4pID0+XG4gICguLi5wYXJhbXMpID0+XG4gICAgZm4oLi4ucGFyYW1zKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlZ3JlZSA9ICfCsCc7XG5cbmV4cG9ydCBjb25zdCBhZGRDaGlsZHJlbiA9IChjb250YWluZXIsIGNoaWxkRWxBcnIpID0+IHtcbiAgaWYgKGNoaWxkRWxBcnIgJiYgY2hpbGRFbEFyci5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChjb25zdCBlbCBvZiBjaGlsZEVsQXJyKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICh0eXBlID0gJ2RpdicsIGNsYXNzTmFtZSwgY2hpbGRFbEFycikgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBpZiAoY2xhc3NOYW1lKSBkaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBhZGRDaGlsZHJlbihkaXYsIGNoaWxkRWxBcnIpO1xuICByZXR1cm4gZGl2O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoaWxkcmVuID0gKHBhcmVudEVsKSA9PiB7XG4gIHdoaWxlIChwYXJlbnRFbC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50RWwucmVtb3ZlQ2hpbGQocGFyZW50RWwuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcmV2aW91c0RheURUID0gKCkgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbn07XG4iLCJpbXBvcnQge3JlbW92ZUNoaWxkcmVuLCBjcmVhdGVDb250YWluZXIsIGRlZ3JlZX0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXInO1xuaW1wb3J0IHtmcm9tVW5peFRpbWUsIGZvcm1hdH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBEYWlseVVJID0gKFdlYXRoZXIpID0+IHtcbiAgY29uc3QgJGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiAuZGFpbHknKTtcbiAgY29uc3QgX2NyZWF0ZURhaWx5ID0gKGRhdGEpID0+IHtcbiAgICByZW1vdmVDaGlsZHJlbigkZGFpbHkpO1xuXG4gICAgZm9yIChjb25zdCB7ZHQsIHdlYXRoZXIsIHRlbXAsIHBvcH0gb2YgZGF0YSkge1xuICAgICAgLy8ge2R0LCB3ZWF0aGVyLCB0ZW1wLCBwb3B9XG4gICAgICBjb25zdCBkYXlTcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJyk7XG4gICAgICBjb25zdCBpY29uID0gY3JlYXRlQ29udGFpbmVyKCdpJywgYHdpIHdpLW93bS0ke3dlYXRoZXJbMF0uaWR9YCk7XG4gICAgICBjb25zdCBjb25kaXRpb25TcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJyk7XG4gICAgICBjb25zdCBwb3BTcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJyk7XG4gICAgICBjb25zdCB0ZW1wU3BhbiA9IGNyZWF0ZUNvbnRhaW5lcignc3BhbicpO1xuXG4gICAgICBkYXlTcGFuLnRleHRDb250ZW50ID0gZHQgPT09ICdZZXN0ZXJkYXknID8gJ1llc3RlcmRheScgOiBmb3JtYXQoZnJvbVVuaXhUaW1lKGR0KSwgJ0VFRUUnKTtcbiAgICAgIGNvbmRpdGlvblNwYW4udGV4dENvbnRlbnQgPSB3ZWF0aGVyWzBdLm1haW47XG4gICAgICBwb3BTcGFuLnRleHRDb250ZW50ID0gcG9wID8gYCR7TWF0aC5mbG9vcihwb3AgKiAxMDApfSVgIDogJyAnO1xuICAgICAgdGVtcFNwYW4udGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKHRlbXAubWF4ID8gdGVtcC5tYXggOiB0ZW1wKX0ke2RlZ3JlZX1gO1xuXG4gICAgICBjb25zdCBkaXYgPSBjcmVhdGVDb250YWluZXIoJ2RpdicsICdjYXJkJywgW2RheVNwYW4sIGljb24sIGNvbmRpdGlvblNwYW4sIHRlbXBTcGFuXSk7XG4gICAgICAkZGFpbHkuYXBwZW5kKGRpdik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IF9yZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IFdlYXRoZXIuZGF0YS5kYWlseTtcbiAgICBjb25zdCB5ZXN0ZXJkYXkgPSBXZWF0aGVyLmRhdGEucHJldmlvdXMuY3VycmVudDtcbiAgICB5ZXN0ZXJkYXkuZHQgPSAnWWVzdGVyZGF5JztcbiAgICBkYXRhLnVuc2hpZnQoeWVzdGVyZGF5KTtcbiAgICBfY3JlYXRlRGFpbHkoZGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfTtcblxuICBjb25zdCBzZXRXZWF0aGVyID0gKG5ld1dlYXRoZXIpID0+IHtcbiAgICBXZWF0aGVyID0gbmV3V2VhdGhlcjtcbiAgICBfcmVuZGVyKCk7XG4gIH07XG5cbiAgX3JlbmRlcigpO1xuICByZXR1cm4ge1xuICAgIHNldFdlYXRoZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYWlseVVJO1xuIiwiaW1wb3J0IHtmb3JtYXQsIGZyb21Vbml4VGltZX0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHtyZW1vdmVDaGlsZHJlbiwgY3JlYXRlQ29udGFpbmVyLCBhZGRDaGlsZHJlbiwgZGVncmVlfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcic7XG5cbmNvbnN0IEZvcmVjYXN0VUkgPSAoV2VhdGhlcikgPT4ge1xuICBjb25zdCAkbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QgLmxvY2F0aW9uJyk7XG4gIGNvbnN0ICRzbWFsbERldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCAuc21hbGwtZGV0YWlscycpO1xuICBjb25zdCAkY3VycldlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QgLndlYXRoZXInKTtcbiAgY29uc3QgJGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCAuaG91cmx5Jyk7XG4gIGNvbnN0ICRkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiAuZGV0YWlscycpO1xuXG4gIGNvbnN0IF9jcmVhdGVMb2NhdGlvbiA9IChjaXR5LCBkYXRlKSA9PiB7XG4gICAgcmVtb3ZlQ2hpbGRyZW4oJGxvY2F0aW9uKTtcbiAgICBjb25zdCBjaXR5U3BhbiA9IGNyZWF0ZUNvbnRhaW5lcignc3BhbicsICdjaXR5Jyk7XG4gICAgY29uc3QgZGF0ZVNwYW4gPSBjcmVhdGVDb250YWluZXIoJ3NwYW4nLCAnZGF0ZScpO1xuXG4gICAgY2l0eVNwYW4udGV4dENvbnRlbnQgPSBjaXR5O1xuICAgIGRhdGVTcGFuLnRleHRDb250ZW50ID0gZm9ybWF0KGRhdGUsICdkIE1NTU0geXl5eScpO1xuICAgIGFkZENoaWxkcmVuKCRsb2NhdGlvbiwgW2NpdHlTcGFuLCBkYXRlU3Bhbl0pO1xuICB9O1xuXG4gIGNvbnN0IF9jcmVhdGVTbWFsbERldGFpbCA9IChkYXRlLCB0ZW1wLCBsb3dUZW1wLCBoaWdoVGVtcCwgZmVlbCkgPT4ge1xuICAgIHJlbW92ZUNoaWxkcmVuKCRzbWFsbERldGFpbCk7XG4gICAgdGVtcCA9IE1hdGguZmxvb3IodGVtcCk7XG4gICAgbG93VGVtcCA9IE1hdGguZmxvb3IobG93VGVtcCk7XG4gICAgaGlnaFRlbXAgPSBNYXRoLmZsb29yKGhpZ2hUZW1wKTtcbiAgICBmZWVsID0gTWF0aC5mbG9vcihmZWVsKTtcbiAgICBjb25zdCBkYXlTcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJywgJ2RheScpO1xuICAgIGNvbnN0IHRpbWVTcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJywgJ3RpbWUnKTtcbiAgICBjb25zdCBsaFNwYW4gPSBjcmVhdGVDb250YWluZXIoJ3NwYW4nLCAnbG93LWhpZ2gnKTtcbiAgICBjb25zdCB0ZW1wU3BhbiA9IGNyZWF0ZUNvbnRhaW5lcignc3BhbicsICd0ZW1wJyk7XG4gICAgY29uc3QgZmVlbFNwYW4gPSBjcmVhdGVDb250YWluZXIoJ3NwYW4nLCAnZmVlbCcpO1xuXG4gICAgZGF5U3Bhbi50ZXh0Q29udGVudCA9IGZvcm1hdChkYXRlLCAnRUVFRScpO1xuICAgIHRpbWVTcGFuLnRleHRDb250ZW50ID0gZm9ybWF0KGRhdGUsICdoOm1tYWFhJyk7XG4gICAgbGhTcGFuLnRleHRDb250ZW50ID0gYEg6JHtoaWdoVGVtcH0ke2RlZ3JlZX0gTDoke2xvd1RlbXB9JHtkZWdyZWV9YDtcbiAgICB0ZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke3RlbXB9JHtkZWdyZWV9YDtcbiAgICBmZWVsU3Bhbi50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2ZlZWx9JHtkZWdyZWV9YDtcblxuICAgIGFkZENoaWxkcmVuKCRzbWFsbERldGFpbCwgW2RheVNwYW4sIHRpbWVTcGFuLCBsaFNwYW4sIHRlbXBTcGFuLCBmZWVsU3Bhbl0pO1xuICB9O1xuXG4gIGNvbnN0IF9jcmVhdGVDdXJyV2VhdGhlciA9IChjb25kaXRpb25JRCwgY29uZGl0aW9uKSA9PiB7XG4gICAgcmVtb3ZlQ2hpbGRyZW4oJGN1cnJXZWF0aGVyKTtcbiAgICBjb25zdCBpY29uID0gY3JlYXRlQ29udGFpbmVyKCdpJywgYHdpIHdpLW93bS0ke2NvbmRpdGlvbklEfWApO1xuICAgIGNvbnN0IGNvbmRpdGlvblNwYW4gPSBjcmVhdGVDb250YWluZXIoJ3NwYW4nLCAnY29uZGl0aW9uJyk7XG4gICAgY29uZGl0aW9uU3Bhbi50ZXh0Q29udGVudCA9IGNvbmRpdGlvbjtcbiAgICBhZGRDaGlsZHJlbigkY3VycldlYXRoZXIsIFtpY29uLCBjb25kaXRpb25TcGFuXSk7XG4gIH07XG5cbiAgY29uc3QgX2NyZWF0ZUhvdXJseUZvcmVjYXN0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBUT1RBTF9DQVJEUyA9IDExO1xuICAgIHJlbW92ZUNoaWxkcmVuKCRob3VybHkpO1xuICAgIGNvbnN0IGNyZWF0ZUNhcmQgPSAoe2RhdGUsIGljb25JRCwgY29uZGl0aW9uLCB0ZW1wLCBwcmVjaXBpdGF0aW9uQ2hhbmNlfSkgPT4ge1xuICAgICAgY29uc3QgdGltZVNwYW4gPSBjcmVhdGVDb250YWluZXIoJ3NwYW4nKTtcbiAgICAgIGNvbnN0IGljb24gPSBjcmVhdGVDb250YWluZXIoJ2knLCBgd2kgd2ktb3dtLSR7aWNvbklEfWApO1xuICAgICAgY29uc3QgY29uZGl0aW9uU3BhbiA9IGNyZWF0ZUNvbnRhaW5lcignc3BhbicsICdjb25kaXRpb24nKTtcbiAgICAgIGNvbnN0IHRlbXBTcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJywgJ3RlbXAnKTtcbiAgICAgIGNvbnN0IHJhaW5TcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJywgJ3JhaW4nKTtcblxuICAgICAgdGltZVNwYW4udGV4dENvbnRlbnQgPSBmb3JtYXQoZGF0ZSwgJ2g6bW1hYWEnKTtcbiAgICAgIGNvbmRpdGlvblNwYW4udGV4dENvbnRlbnQgPSBjb25kaXRpb247XG4gICAgICB0ZW1wU3Bhbi50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IodGVtcCl9JHtkZWdyZWV9YDtcblxuICAgICAgaWYgKHByZWNpcGl0YXRpb25DaGFuY2UpIHtcbiAgICAgICAgY29uc3QgY2hhbmNlID0gTWF0aC5mbG9vcihwcmVjaXBpdGF0aW9uQ2hhbmNlICogMTAwKTtcbiAgICAgICAgY29uc3QgcmFpbmRyb3BJY29uID0gY3JlYXRlQ29udGFpbmVyKCdpJywgJ3dpIHdpLXJhaW5kcm9wJyk7XG4gICAgICAgIHJhaW5TcGFuLnRleHRDb250ZW50ID0gYCR7Y2hhbmNlfSVgO1xuICAgICAgICByYWluU3Bhbi5wcmVwZW5kKHJhaW5kcm9wSWNvbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlYXRlQ29udGFpbmVyKCdkaXYnLCAnY2FyZCcsIFt0aW1lU3BhbiwgaWNvbiwgY29uZGl0aW9uU3BhbiwgdGVtcFNwYW4sIHJhaW5TcGFuXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhcmRBcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBUT1RBTF9DQVJEUzsgaSsrKSB7XG4gICAgICBjb25zdCB7ZHQsIHRlbXAsIHdlYXRoZXIsIHBvcH0gPSBkYXRhW2ldO1xuICAgICAgY29uc3QgZGF0ZSA9IGZyb21Vbml4VGltZShkdCk7XG4gICAgICBjb25zdCBpY29uSUQgPSB3ZWF0aGVyWzBdPy5pZDtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IHdlYXRoZXJbMF0/LmRlc2NyaXB0aW9uO1xuICAgICAgY2FyZEFyci5wdXNoKGNyZWF0ZUNhcmQoe2RhdGUsIHRlbXAsIGljb25JRCwgY29uZGl0aW9uLCBwcmVjaXBpdGF0aW9uQ2hhbmNlOiBwb3B9KSk7XG4gICAgfVxuXG4gICAgYWRkQ2hpbGRyZW4oJGhvdXJseSwgY2FyZEFycik7XG4gIH07XG5cbiAgY29uc3QgX2NyZWF0ZURldGFpbHMgPSAoZGF0YSwgcG9wKSA9PiB7XG4gICAgcmVtb3ZlQ2hpbGRyZW4oJGRldGFpbHMpO1xuICAgIGNvbnN0IGFkZENhcmQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgdGl0bGVTcGFuID0gY3JlYXRlQ29udGFpbmVyKCdzcGFuJyk7XG4gICAgICBjb25zdCBpbmZvU3BhbiA9IGNyZWF0ZUNvbnRhaW5lcignc3BhbicpO1xuICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0ga2V5O1xuICAgICAgaW5mb1NwYW4udGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcignZGl2JywgJ2luZm8nLCBbdGl0bGVTcGFuLCBpbmZvU3Bhbl0pO1xuICAgICAgJGRldGFpbHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgY29uc3Qge3N1bnJpc2UsIHN1bnNldCwgaHVtaWRpdHksIHByZXNzdXJlLCB2aXNpYmlsaXR5LCB3aW5kX3NwZWVkLCB3aW5kX2RlZywgcmFpbiwgc25vdywgdXZpfSA9IGRhdGE7XG4gICAgbGV0IHByZWNpcGl0YXRpb24gPSAnMG1tJztcbiAgICBsZXQgY2hhbmNlID0gJzAlJztcbiAgICBpZiAocmFpbikge1xuICAgICAgcHJlY2lwaXRhdGlvbiA9IGAke3JhaW5bJzFoJ119bW1gO1xuICAgICAgY2hhbmNlID0gYCAke3BvcCAqIDEwMH0lYDtcbiAgICB9IGVsc2UgaWYgKHNub3cpIHtcbiAgICAgIHByZWNpcGl0YXRpb24gPSBgJHtzbm93WycxaCddfW1tYDtcbiAgICAgIGNoYW5jZSA9IGAke3BvcCAqIDEwMH0lYDtcbiAgICB9XG4gICAgY29uc3QgZGV0YWlsT2JqID0ge1xuICAgICAgc3VucmlzZTogZm9ybWF0KGZyb21Vbml4VGltZShzdW5yaXNlKSwgJ2g6bW1hYWEnKSxcbiAgICAgIHN1bnNldDogZm9ybWF0KGZyb21Vbml4VGltZShzdW5zZXQpLCAnaDptbWFhYScpLFxuICAgICAgWydQcmVjaXBpdGF0aW9uIGNoYW5jZSddOiBjaGFuY2UsXG4gICAgICBbJ1ByZWNpcGl0YXRpb24nXTogcHJlY2lwaXRhdGlvbixcbiAgICAgIGh1bWlkaXR5OiBgJHtodW1pZGl0eX0lYCxcbiAgICAgIHZpc2liaWxpdHk6IGAke01hdGguZmxvb3IodmlzaWJpbGl0eSAvIDEwMDApfSBrbWAsXG4gICAgICBwcmVzc3VyZTogYCR7cHJlc3N1cmV9IGhQYWAsXG4gICAgICBbJ3dpbmQnXTogYCR7d2luZF9zcGVlZH1tL3MgJHt3aW5kX2RlZ30ke2RlZ3JlZX1gLFxuICAgICAgWydVViBJbmRleCddOiB1dmksXG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhkZXRhaWxPYmopKSB7XG4gICAgICBhZGRDYXJkKGtleSwgdmFsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgX3JlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyV2VhdGhlciA9IFdlYXRoZXIuZGF0YS5jdXJyZW50O1xuICAgIGNvbnN0IGRhdGUgPSBmcm9tVW5peFRpbWUoY3VycldlYXRoZXIuZHQpO1xuICAgIGNvbnN0IGRhaWx5ID0gV2VhdGhlci5kYXRhLmRhaWx5O1xuICAgIGNvbnN0IHRvZGF5TWluVGVtcCA9IGRhaWx5WzBdLnRlbXAubWluO1xuICAgIGNvbnN0IHRvZGF5TWF4VGVtcCA9IGRhaWx5WzBdLnRlbXAubWF4O1xuICAgIGNvbnN0IGljb25JRCA9IGN1cnJXZWF0aGVyLndlYXRoZXJbMF0uaWQ7XG4gICAgY29uc3QgY29uZGl0aW9uID0gY3VycldlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBjaGFuY2VPZlByZWNpcGl0YXRpb24gPSBXZWF0aGVyLmRhdGEuaG91cmx5WzBdLnBvcDtcblxuICAgIF9jcmVhdGVMb2NhdGlvbihXZWF0aGVyLm5hbWUsIGRhdGUpO1xuICAgIF9jcmVhdGVTbWFsbERldGFpbChkYXRlLCBjdXJyV2VhdGhlci50ZW1wLCB0b2RheU1pblRlbXAsIHRvZGF5TWF4VGVtcCwgY3VycldlYXRoZXIuZmVlbHNfbGlrZSk7XG4gICAgX2NyZWF0ZUN1cnJXZWF0aGVyKGljb25JRCwgY29uZGl0aW9uKTtcbiAgICBfY3JlYXRlSG91cmx5Rm9yZWNhc3QoV2VhdGhlci5kYXRhLmhvdXJseSk7XG4gICAgX2NyZWF0ZURldGFpbHMoY3VycldlYXRoZXIsIGNoYW5jZU9mUHJlY2lwaXRhdGlvbik7XG4gIH07XG5cbiAgY29uc3Qgc2V0RGF0YSA9IChuZXdXZWF0aGVyKSA9PiB7XG4gICAgV2VhdGhlciA9IG5ld1dlYXRoZXI7XG4gICAgX3JlbmRlcigpO1xuICB9O1xuXG4gIF9yZW5kZXIoKTtcblxuICByZXR1cm4ge1xuICAgIHNldERhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JlY2FzdFVJO1xuIiwiaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi93ZWF0aGVyJztcbmltcG9ydCBXZWF0aGVyQ29udHJvbGxlciBmcm9tICcuL3dlYXRoZXJDb250cm9sbGVyJztcbmltcG9ydCBGb3JlY2FzdFVJIGZyb20gJy4vRm9yZWNhc3RVSSc7XG5pbXBvcnQgRGFpbHlVSSBmcm9tICcuL0RhaWx5VUknO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBkZWdyZWUgPSAnwrAnO1xuICBjb25zdCBsYXQgPSA0MC43MzA2MTtcbiAgY29uc3QgbG9uID0gLTczLjkzNTI0MjtcblxuICAvLyBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckNvbnRyb2xsZXIuZ2V0RGF0YShsYXQsIGxvbilcbiAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dlYXRoZXInLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dlYXRoZXInKSk7XG5cbiAgY29uc3Qgd2VhdGhlciA9IFdlYXRoZXIoJ05ldyBZb3JrIENpdHknLCAnVW5pdGVkIFN0YXRlcycsIGRhdGEpO1xuXG4gIGNvbnN0IGZvcmVjYXN0ID0gRm9yZWNhc3RVSSh3ZWF0aGVyKTtcbiAgY29uc3QgZGFpbHkgPSBEYWlseVVJKHdlYXRoZXIpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbjtcbiIsImNvbnN0IFdlYXRoZXIgPSAobmFtZSwgY291bnRyeSwgZGF0YSkgPT57XG4gIHJldHVybiB7bmFtZSwgY291bnRyeSwgZGF0YX07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7IiwiaW1wb3J0IHtnZXRQcmV2aW91c0RheURULCBoYW5kbGVFcnJvcn0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXInO1xuXG5jb25zdCBGUkVFID0gJzE3YzA3NzUwNzU1MDhlYzQ5ZjI5MTNjYTdmMDJiZjQ0JztcbmNvbnN0IEdFT0NPRElOR19VUkwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/YXBwaWQ9JHtGUkVFfWA7XG5jb25zdCBPTkVfQ0FMTF9VUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/YXBwaWQ9JHtGUkVFfSZ1bml0cz1tZXRyaWNgO1xuY29uc3QgT05FX0NBTExfSElTVF9VUkwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGwvdGltZW1hY2hpbmU/YXBwaWQ9JHtGUkVFfSZ1bml0cz1tZXRyaWNgO1xuXG5jb25zdCBXZWF0aGVyQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGdlb2NvZGVVbnNhZmUgPSBhc3luYyAocSwgbGltaXQgPSA1KSA9PiB7XG4gICAgaWYgKCFxKSByZXR1cm47XG4gICAgbGV0IHVybCA9IEdFT0NPRElOR19VUkw7XG4gICAgdXJsICs9IGAmbGltaXQ9JHtsaW1pdH1gO1xuICAgIHVybCArPSBgJnE9JHtxfWA7XG5cbiAgICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCB7bmFtZSwgY291bnRyeSwgc3RhdGV9ID0gYXdhaXQgZGF0YVJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7bmFtZSwgY291bnRyeSwgc3RhdGUsIGxhdCwgbG9ufTtcbiAgfTtcblxuICBjb25zdCBnZXREYXRhVW5zYWZlID0gYXN5bmMgKGxhdCwgbG9uLCB1bml0cyA9ICdtZXRyaWMnLCBleGNsdWRlID0gJ21pbnV0ZWx5LGFsZXJ0cycpID0+IHtcbiAgICBpZiAoIWxhdCB8fCAhbG9uKSByZXR1cm47XG4gICAgY29uc3QgdXJsID0gYCR7T05FX0NBTExfVVJMfSZsYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9JHt1bml0c30mZXhjbHVkZT0ke2V4Y2x1ZGV9YDtcbiAgICBsZXQgZGF0YVJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgY3VyckRhdGEgPSBhd2FpdCBkYXRhUmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgaGlzdFVSTCA9IGAke09ORV9DQUxMX0hJU1RfVVJMfSZsYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9JHt1bml0c30mZHQ9JHtnZXRQcmV2aW91c0RheURUKCl9YDtcbiAgICBkYXRhUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChoaXN0VVJMLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgaGlzdERhdGEgPSBhd2FpdCBkYXRhUmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGN1cnJEYXRhLCB7cHJldmlvdXM6IGhpc3REYXRhfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZW9jb2RlOiBoYW5kbGVFcnJvcihnZW9jb2RlVW5zYWZlKSxcbiAgICBnZXREYXRhOiBoYW5kbGVFcnJvcihnZXREYXRhVW5zYWZlKSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJDb250cm9sbGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgbWFpbiBmcm9tICcuL21vZHVsZXMvVUknO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vd2VhdGhlci1pY29ucy5taW4uY3NzJztcblxubWFpbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9