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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets//chevron-right.svg */ "./src/assets/chevron-right.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --color-primary: white;\n  --color-secondary: #01497c;\n  --color-tertiary: #a9d6e5;\n\n  --color-sidebar-indicator: #2a6f97;\n  --color-sidebar-hover: #89c2d9;\n  --color-todo-low: green;\n  --color-todo-med: orange;\n  --color-todo-high: red;\n  --color-red-filter: invert(28%) sepia(99%) saturate(7399%) hue-rotate(357deg) brightness(106%) contrast(115%);\n\n  --font-fc-main: black;\n  --font-fc-secondary: white;\n\n  --font-fz-nav: 1.4rem;\n  --font-fz-projects: 1rem;\n  --font-fz-projects-indicator: 0.75rem;\n}\n\n#container {\n  height: 100vh;\n  display: grid;\n  background-color: var(--color-primary);\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 0.3fr 3fr;\n  grid-template-areas: 'header header' 'nav todo';\n}\n\nheader {\n  grid-area: header;\n  background-color: var(--color-secondary);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 1.5rem;\n  color: var(--font-fc-secondary);\n  padding: 1rem;\n}\n\nheader .sidebar-btn {\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n}\n\nheader .sidebar-btn img {\n  cursor: pointer;\n  width: 2.3rem;\n  filter: invert(1);\n}\n\nnav {\n  grid-area: nav;\n  background-color: var(--color-tertiary);\n  position: relative;\n  right: 100%;\n  transition: right 0.5s ease;\n  padding: 0.3rem;\n  font-size: var(--font-fz-nav);\n  overflow: auto;\n}\n\nnav.active {\n  display: block;\n  right: 0%;\n  z-index: 1;\n}\n\nnav ul {\n  cursor: pointer;\n  list-style: none;\n}\n\nnav ul li {\n  padding: 0.5rem;\n  border-radius: 5px;\n}\n\nnav ul li:not(.projects) {\n  display: flex;\n  align-items: center;\n}\n\nnav ul li:not(.projects):hover {\n  background-color: var(--color-sidebar-hover);\n}\n\nnav ul li:not(.projects).active::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  display: inline-block;\n  vertical-align: middle;\n  height: 1.5rem;\n}\n\nnav ul li:not(.projects) span:first-of-type {\n  margin-right: 0.5rem;\n}\n\nnav ul li:not(.projects) span:last-of-type {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  border-radius: 50%;\n  min-width: 1.2rem;\n  min-height: 1.2rem;\n  padding: 0.2rem;\n  font-size: var(--font-fz-projects-indicator);\n  background-color: var(--color-sidebar-indicator);\n  color: var(--font-fc-secondary);\n}\n\nnav ul li.projects {\n  cursor: default;\n}\n\nnav li ul.projects-container li {\n  padding: 0.2rem;\n  margin-left: 1rem;\n  font-size: var(--font-fz-projects);\n  overflow-wrap: anywhere;\n}\n\nnav ul .projects-container .add-project {\n  justify-content: center;\n  margin-left: 0rem;\n}\n\n.todo-container {\n  grid-area: todo;\n  background-color: var(--color-primary);\n  grid-column: 1 / 3;\n  padding: 1rem;\n}\n\n.todo-container .item {\n  display: flex;\n  align-items: center;\n  min-height: 1.8rem;\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  border: 1px solid;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 0px;\n  transition: transform 250ms cubic-bezier(0.250, 0.460, 0.450, 0.940); /* easeOutQuad */\n}\n\n/* box-shadow: 3px 0px 0px green inset; */\n.todo-container .item.low {\n  box-shadow: 3px 0px 0px var(--color-todo-low) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.med {\n  box-shadow: 3px 0px 0px var(--color-todo-med) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.high {\n  box-shadow: 3px 0px 0px var(--color-todo-high) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.done {\n  opacity: 0.3;\n  text-decoration: line-through;\n}\n\n.todo-container .item .check {\n  margin-right: 0.5rem;\n}\n\n.todo-container .item:not(.done):hover {\n  transform: scale(1.01);\n}\n\n.todo-container .item .title {\n  margin-right: auto;\n  overflow-wrap: anywhere;\n}\n\n.todo-container .item .date {\n  margin-right: 0.5rem;\n}\n\n.todo-container .item .btn-container {\n  cursor: pointer;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n\n.todo-container .item .btn-container img {\n  height: 1.5rem;\n  filter: var(--color-red-filter);\n}\n\n.todo-container .item.add-todo {\n  justify-content: center;\n  border: none;\n  box-shadow: none;\n  height: 2rem;\n}\n\n.todo-container .item.add-todo:hover {\n  background-color: var(--color-sidebar-hover);\n}\n\n.modal {\n  margin: auto;\n  border: 2px solid var(--color-secondary);\n  border-radius: 5px;\n  box-shadow: 0 0 0 100vw rgb(0 0 0 / 0.5);\n  min-width: 30ch;\n}\n\n.modal::backdrop {\n  opacity: 0;\n}\n\n.modal[open] {\n  animation: slide-up 500ms forwards, fade-in 500ms forwards;\n}\n\n.modal[closing] {\n  display: block;\n  pointer-events: none;\n  inset: 0;\n  animation: fade-out 500ms forwards;\n}\n\n.modal .modal-container {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n.modal .modal-container div:first-of-type {\n  cursor: pointer;\n  margin-left: auto;\n}\n\n.modal form .form-control {\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.modal form .form-control input,\nselect {\n  width: 100%;\n  min-height: 1.6rem;\n  border: none;\n  outline: none;\n}\n\n.modal form .form-control #project {\n  padding-inline: 0.5rem;\n  border: 2px solid var(--color-tertiary);\n  border-radius: 5px;\n}\n\n.modal form textarea {\n  height: auto;\n  resize: none;\n  outline: none;\n  border: none;\n}\n\n.modal form input[type='date'] {\n  padding-inline: 0.5rem;\n  border: 2px solid var(--color-tertiary);\n  border-radius: 5px;\n}\n\n.modal form .priority-container {\n  justify-content: center;\n  gap: 1rem;\n  margin: 1rem 0;\n}\n\n.modal form .priority-container input[type=\"radio\"] {\n  display: none;\n}\n\n.modal form .priority-container span {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  font-size: 0.8rem;\n  border-radius: 5px;\n  text-transform: uppercase;\n}\n\n.modal form .priority-container input[value=\"1\"] + span {\n  border: 2px solid var(--color-todo-low);\n  color: var(--color-todo-low);\n}\n\n.modal form .priority-container input[value=\"1\"]:checked + span,\n.modal form .priority-container input[value=\"1\"] + span:hover {\n  background-color: var(--color-todo-low);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .priority-container input[value=\"2\"] + span {\n  border: 2px solid var(--color-todo-med);\n  color: var(--color-todo-med);\n}\n\n.modal form .priority-container input[value=\"2\"]:checked + span,\n.modal form .priority-container input[value=\"2\"] + span:hover {\n  background-color: var(--color-todo-med);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .priority-container input[value=\"3\"] + span {\n  border: 2px solid var(--color-todo-high);\n  color: var(--color-todo-high);\n}\n\n.modal form .priority-container input[value=\"3\"]:checked + span,\n.modal form .priority-container input[value=\"3\"] + span:hover {\n  background-color: var(--color-todo-high);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .form-control:last-of-type {\n  justify-content: center;\n  gap: 1rem;\n}\n\n.modal form .form-control:last-of-type > button {\n  padding: 0.4rem 1rem;\n  min-width: 35%;\n  border-radius: 5px;\n  outline: none;\n}\n\n.modal form .form-control:last-of-type > button[type='submit'] {\n  background-color: var(--color-secondary);\n  color: var(--font-fc-secondary);\n}\n\n@media only screen and (min-width: 750px) {\n  #container {\n    grid-template-columns: 32ch 3fr;\n    grid-template-rows: 0.3fr 3fr;\n    grid-template-areas: 'header header' 'nav todo';\n  }\n\n  nav {\n    right: 0%;\n    padding: 1rem;\n  }\n\n  nav.active {\n    right: 100%;\n  }\n\n  header {\n    padding-left: 3rem;\n  }\n\n  header .sidebar-btn {\n    display: none;\n  }\n\n  .todo-container {\n    grid-column: 2 / 3;\n    padding: 2.5rem;\n  }\n\n  .todo-container .title h3 {\n    font-size: 2.5rem;\n    margin-bottom: 1.5rem;\n  }\n\n  .todo-container .item .btn-container {\n    display: none;\n    animation: slide-left 350ms forwards, fade-in 350ms forwards;\n  }\n\n  .todo-container .item:hover > .btn-container {\n    display: block;\n  }\n\n  .modal {\n    min-width: 50ch;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n@keyframes slide-left {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --color-primary: white;\n  --color-secondary: #01497c;\n  --color-tertiary: #a9d6e5;\n\n  --color-sidebar-indicator: #2a6f97;\n  --color-sidebar-hover: #89c2d9;\n  --color-todo-low: green;\n  --color-todo-med: orange;\n  --color-todo-high: red;\n  --color-red-filter: invert(28%) sepia(99%) saturate(7399%) hue-rotate(357deg) brightness(106%) contrast(115%);\n\n  --font-fc-main: black;\n  --font-fc-secondary: white;\n\n  --font-fz-nav: 1.4rem;\n  --font-fz-projects: 1rem;\n  --font-fz-projects-indicator: 0.75rem;\n}\n\n#container {\n  height: 100vh;\n  display: grid;\n  background-color: var(--color-primary);\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 0.3fr 3fr;\n  grid-template-areas: 'header header' 'nav todo';\n}\n\nheader {\n  grid-area: header;\n  background-color: var(--color-secondary);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 1.5rem;\n  color: var(--font-fc-secondary);\n  padding: 1rem;\n}\n\nheader .sidebar-btn {\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n}\n\nheader .sidebar-btn img {\n  cursor: pointer;\n  width: 2.3rem;\n  filter: invert(1);\n}\n\nnav {\n  grid-area: nav;\n  background-color: var(--color-tertiary);\n  position: relative;\n  right: 100%;\n  transition: right 0.5s ease;\n  padding: 0.3rem;\n  font-size: var(--font-fz-nav);\n  overflow: auto;\n}\n\nnav.active {\n  display: block;\n  right: 0%;\n  z-index: 1;\n}\n\nnav ul {\n  cursor: pointer;\n  list-style: none;\n}\n\nnav ul li {\n  padding: 0.5rem;\n  border-radius: 5px;\n}\n\nnav ul li:not(.projects) {\n  display: flex;\n  align-items: center;\n}\n\nnav ul li:not(.projects):hover {\n  background-color: var(--color-sidebar-hover);\n}\n\nnav ul li:not(.projects).active::before {\n  content: url('./assets//chevron-right.svg');\n  display: inline-block;\n  vertical-align: middle;\n  height: 1.5rem;\n}\n\nnav ul li:not(.projects) span:first-of-type {\n  margin-right: 0.5rem;\n}\n\nnav ul li:not(.projects) span:last-of-type {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  border-radius: 50%;\n  min-width: 1.2rem;\n  min-height: 1.2rem;\n  padding: 0.2rem;\n  font-size: var(--font-fz-projects-indicator);\n  background-color: var(--color-sidebar-indicator);\n  color: var(--font-fc-secondary);\n}\n\nnav ul li.projects {\n  cursor: default;\n}\n\nnav li ul.projects-container li {\n  padding: 0.2rem;\n  margin-left: 1rem;\n  font-size: var(--font-fz-projects);\n  overflow-wrap: anywhere;\n}\n\nnav ul .projects-container .add-project {\n  justify-content: center;\n  margin-left: 0rem;\n}\n\n.todo-container {\n  grid-area: todo;\n  background-color: var(--color-primary);\n  grid-column: 1 / 3;\n  padding: 1rem;\n}\n\n.todo-container .item {\n  display: flex;\n  align-items: center;\n  min-height: 1.8rem;\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  border: 1px solid;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 0px;\n  transition: transform 250ms cubic-bezier(0.250, 0.460, 0.450, 0.940); /* easeOutQuad */\n}\n\n/* box-shadow: 3px 0px 0px green inset; */\n.todo-container .item.low {\n  box-shadow: 3px 0px 0px var(--color-todo-low) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.med {\n  box-shadow: 3px 0px 0px var(--color-todo-med) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.high {\n  box-shadow: 3px 0px 0px var(--color-todo-high) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.done {\n  opacity: 0.3;\n  text-decoration: line-through;\n}\n\n.todo-container .item .check {\n  margin-right: 0.5rem;\n}\n\n.todo-container .item:not(.done):hover {\n  transform: scale(1.01);\n}\n\n.todo-container .item .title {\n  margin-right: auto;\n  overflow-wrap: anywhere;\n}\n\n.todo-container .item .date {\n  margin-right: 0.5rem;\n}\n\n.todo-container .item .btn-container {\n  cursor: pointer;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n\n.todo-container .item .btn-container img {\n  height: 1.5rem;\n  filter: var(--color-red-filter);\n}\n\n.todo-container .item.add-todo {\n  justify-content: center;\n  border: none;\n  box-shadow: none;\n  height: 2rem;\n}\n\n.todo-container .item.add-todo:hover {\n  background-color: var(--color-sidebar-hover);\n}\n\n.modal {\n  margin: auto;\n  border: 2px solid var(--color-secondary);\n  border-radius: 5px;\n  box-shadow: 0 0 0 100vw rgb(0 0 0 / 0.5);\n  min-width: 30ch;\n}\n\n.modal::backdrop {\n  opacity: 0;\n}\n\n.modal[open] {\n  animation: slide-up 500ms forwards, fade-in 500ms forwards;\n}\n\n.modal[closing] {\n  display: block;\n  pointer-events: none;\n  inset: 0;\n  animation: fade-out 500ms forwards;\n}\n\n.modal .modal-container {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n.modal .modal-container div:first-of-type {\n  cursor: pointer;\n  margin-left: auto;\n}\n\n.modal form .form-control {\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.modal form .form-control input,\nselect {\n  width: 100%;\n  min-height: 1.6rem;\n  border: none;\n  outline: none;\n}\n\n.modal form .form-control #project {\n  padding-inline: 0.5rem;\n  border: 2px solid var(--color-tertiary);\n  border-radius: 5px;\n}\n\n.modal form textarea {\n  height: auto;\n  resize: none;\n  outline: none;\n  border: none;\n}\n\n.modal form input[type='date'] {\n  padding-inline: 0.5rem;\n  border: 2px solid var(--color-tertiary);\n  border-radius: 5px;\n}\n\n.modal form .priority-container {\n  justify-content: center;\n  gap: 1rem;\n  margin: 1rem 0;\n}\n\n.modal form .priority-container input[type=\"radio\"] {\n  display: none;\n}\n\n.modal form .priority-container span {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  font-size: 0.8rem;\n  border-radius: 5px;\n  text-transform: uppercase;\n}\n\n.modal form .priority-container input[value=\"1\"] + span {\n  border: 2px solid var(--color-todo-low);\n  color: var(--color-todo-low);\n}\n\n.modal form .priority-container input[value=\"1\"]:checked + span,\n.modal form .priority-container input[value=\"1\"] + span:hover {\n  background-color: var(--color-todo-low);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .priority-container input[value=\"2\"] + span {\n  border: 2px solid var(--color-todo-med);\n  color: var(--color-todo-med);\n}\n\n.modal form .priority-container input[value=\"2\"]:checked + span,\n.modal form .priority-container input[value=\"2\"] + span:hover {\n  background-color: var(--color-todo-med);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .priority-container input[value=\"3\"] + span {\n  border: 2px solid var(--color-todo-high);\n  color: var(--color-todo-high);\n}\n\n.modal form .priority-container input[value=\"3\"]:checked + span,\n.modal form .priority-container input[value=\"3\"] + span:hover {\n  background-color: var(--color-todo-high);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .form-control:last-of-type {\n  justify-content: center;\n  gap: 1rem;\n}\n\n.modal form .form-control:last-of-type > button {\n  padding: 0.4rem 1rem;\n  min-width: 35%;\n  border-radius: 5px;\n  outline: none;\n}\n\n.modal form .form-control:last-of-type > button[type='submit'] {\n  background-color: var(--color-secondary);\n  color: var(--font-fc-secondary);\n}\n\n@media only screen and (min-width: 750px) {\n  #container {\n    grid-template-columns: 32ch 3fr;\n    grid-template-rows: 0.3fr 3fr;\n    grid-template-areas: 'header header' 'nav todo';\n  }\n\n  nav {\n    right: 0%;\n    padding: 1rem;\n  }\n\n  nav.active {\n    right: 100%;\n  }\n\n  header {\n    padding-left: 3rem;\n  }\n\n  header .sidebar-btn {\n    display: none;\n  }\n\n  .todo-container {\n    grid-column: 2 / 3;\n    padding: 2.5rem;\n  }\n\n  .todo-container .title h3 {\n    font-size: 2.5rem;\n    margin-bottom: 1.5rem;\n  }\n\n  .todo-container .item .btn-container {\n    display: none;\n    animation: slide-left 350ms forwards, fade-in 350ms forwards;\n  }\n\n  .todo-container .item:hover > .btn-container {\n    display: block;\n  }\n\n  .modal {\n    min-width: 50ch;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n@keyframes slide-left {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/helper/pubsub.js":
/*!******************************!*\
  !*** ./src/helper/pubsub.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PubSub = (() => {
  const eventObj = {};

  const publish = (eventName, data) => {
    if (!eventObj[eventName]) return;
    eventObj[eventName].forEach((fn) => {
      fn(data);
    });
  };

  const subscribe = (eventName, fn) => {
    if (!eventObj[eventName]) {
      eventObj[eventName] = [];
    }
    eventObj[eventName].push(fn);
  };

  const unsubscribe = (eventName, fn) => {
    if (!eventObj[eventName]) return;
    eventObj[eventName].filter((eventFn) => eventFn !== fn);
  };

  return {publish, subscribe, unsubscribe};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PubSub);


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
/* harmony import */ var _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/pubsub */ "./src/helper/pubsub.js");

const dummyFn = () => {
  const handleSub = (data) => {
    console.log('Hello from UI', data);
  };

  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('test', handleSub);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dummyFn);

/***/ }),

/***/ "./src/assets/chevron-right.svg":
/*!**************************************!*\
  !*** ./src/assets/chevron-right.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aba1647cebad5a62f905.svg";

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
/******/ 			"index": 0
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
/* harmony import */ var _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/pubsub */ "./src/helper/pubsub.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const handleSub = (data) => {
  console.log('Hello from index.js', data);
};

(0,_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"])();

const container = document.querySelector('#container');

const handleClick = () => {
  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('test', 1234);
};

const btn = document.createElement('button');
btn.textContent = 'Click Me! and look at your console!';
btn.addEventListener('click', handleClick);

// container.appendChild(btn);

_helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('test', handleSub);

// Testing modal
const openModal = ()=>{
  const modal = document.querySelector('.modal');
  modal.showModal();
}

const addTodo = document.querySelector('.add-todo');
addTodo.addEventListener('click', openModal);


// Testing sidebar
const toggleSidebar  = ()=>{
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active')
}

const sidebarBtn = document.querySelector('.sidebar-btn');
sidebarBtn.addEventListener('click', toggleSidebar)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLHlCQUF5QixPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0s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Z0VBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWxwZXIvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzLy9jaGV2cm9uLXJpZ2h0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1wcmltYXJ5OiB3aGl0ZTtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjMDE0OTdjO1xcbiAgLS1jb2xvci10ZXJ0aWFyeTogI2E5ZDZlNTtcXG5cXG4gIC0tY29sb3Itc2lkZWJhci1pbmRpY2F0b3I6ICMyYTZmOTc7XFxuICAtLWNvbG9yLXNpZGViYXItaG92ZXI6ICM4OWMyZDk7XFxuICAtLWNvbG9yLXRvZG8tbG93OiBncmVlbjtcXG4gIC0tY29sb3ItdG9kby1tZWQ6IG9yYW5nZTtcXG4gIC0tY29sb3ItdG9kby1oaWdoOiByZWQ7XFxuICAtLWNvbG9yLXJlZC1maWx0ZXI6IGludmVydCgyOCUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoNzM5OSUpIGh1ZS1yb3RhdGUoMzU3ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDExNSUpO1xcblxcbiAgLS1mb250LWZjLW1haW46IGJsYWNrO1xcbiAgLS1mb250LWZjLXNlY29uZGFyeTogd2hpdGU7XFxuXFxuICAtLWZvbnQtZnotbmF2OiAxLjRyZW07XFxuICAtLWZvbnQtZnotcHJvamVjdHM6IDFyZW07XFxuICAtLWZvbnQtZnotcHJvamVjdHMtaW5kaWNhdG9yOiAwLjc1cmVtO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXIgaGVhZGVyJyAnbmF2IHRvZG8nO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWZjLXNlY29uZGFyeSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgLnNpZGViYXItYnRuIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgLnNpZGViYXItYnRuIGltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMi4zcmVtO1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbm5hdiB7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHJpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC41cyBlYXNlO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LWZ6LW5hdik7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxubmF2LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHJpZ2h0OiAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbm5hdiB1bCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5uYXYgdWwgbGk6bm90KC5wcm9qZWN0cykge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiB1bCBsaTpub3QoLnByb2plY3RzKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaWRlYmFyLWhvdmVyKTtcXG59XFxuXFxubmF2IHVsIGxpOm5vdCgucHJvamVjdHMpLmFjdGl2ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbm5hdiB1bCBsaTpub3QoLnByb2plY3RzKSBzcGFuOmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbm5hdiB1bCBsaTpub3QoLnByb2plY3RzKSBzcGFuOmxhc3Qtb2YtdHlwZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtaW4td2lkdGg6IDEuMnJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1mei1wcm9qZWN0cy1pbmRpY2F0b3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2lkZWJhci1pbmRpY2F0b3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtZmMtc2Vjb25kYXJ5KTtcXG59XFxuXFxubmF2IHVsIGxpLnByb2plY3RzIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxubmF2IGxpIHVsLnByb2plY3RzLWNvbnRhaW5lciBsaSB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1mei1wcm9qZWN0cyk7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxubmF2IHVsIC5wcm9qZWN0cy1jb250YWluZXIgLmFkZC1wcm9qZWN0IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDByZW07XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHRvZG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEuOHJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCk7IC8qIGVhc2VPdXRRdWFkICovXFxufVxcblxcbi8qIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IGdyZWVuIGluc2V0OyAqL1xcbi50b2RvLWNvbnRhaW5lciAuaXRlbS5sb3cge1xcbiAgYm94LXNoYWRvdzogM3B4IDBweCAwcHggdmFyKC0tY29sb3ItdG9kby1sb3cpIGluc2V0LCAycHggMnB4IDJweCAwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbS5tZWQge1xcbiAgYm94LXNoYWRvdzogM3B4IDBweCAwcHggdmFyKC0tY29sb3ItdG9kby1tZWQpIGluc2V0LCAycHggMnB4IDJweCAwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbS5oaWdoIHtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IHZhcigtLWNvbG9yLXRvZG8taGlnaCkgaW5zZXQsIDJweCAycHggMnB4IDBweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5pdGVtLmRvbmUge1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbSAuY2hlY2sge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbTpub3QoLmRvbmUpOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbSAudGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbSAuZGF0ZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5pdGVtIC5idG4tY29udGFpbmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbSAuYnRuLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBmaWx0ZXI6IHZhcigtLWNvbG9yLXJlZC1maWx0ZXIpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0uYWRkLXRvZG8ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0uYWRkLXRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2lkZWJhci1ob3Zlcik7XFxufVxcblxcbi5tb2RhbCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwdncgcmdiKDAgMCAwIC8gMC41KTtcXG4gIG1pbi13aWR0aDogMzBjaDtcXG59XFxuXFxuLm1vZGFsOjpiYWNrZHJvcCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubW9kYWxbb3Blbl0ge1xcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCA1MDBtcyBmb3J3YXJkcywgZmFkZS1pbiA1MDBtcyBmb3J3YXJkcztcXG59XFxuXFxuLm1vZGFsW2Nsb3NpbmddIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBpbnNldDogMDtcXG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgNTAwbXMgZm9yd2FyZHM7XFxufVxcblxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5tb2RhbCBmb3JtIC5mb3JtLWNvbnRyb2wge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLmZvcm0tY29udHJvbCBpbnB1dCxcXG5zZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxLjZyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAuZm9ybS1jb250cm9sICNwcm9qZWN0IHtcXG4gIHBhZGRpbmctaW5saW5lOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tb2RhbCBmb3JtIHRleHRhcmVhIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5tb2RhbCBmb3JtIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGVydGlhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4ycmVtIDAuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiMVxcXCJdICsgc3BhbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10b2RvLWxvdyk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdG9kby1sb3cpO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIxXFxcIl06Y2hlY2tlZCArIHNwYW4sXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiMVxcXCJdICsgc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWxvdyk7XFxuICBjb2xvcjogdmFyKC0tZm9udC1mYy1zZWNvbmRhcnkpO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIyXFxcIl0gKyBzcGFuIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRvZG8tbWVkKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10b2RvLW1lZCk7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdmFsdWU9XFxcIjJcXFwiXTpjaGVja2VkICsgc3BhbixcXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIyXFxcIl0gKyBzcGFuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tbWVkKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWZjLXNlY29uZGFyeSk7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdmFsdWU9XFxcIjNcXFwiXSArIHNwYW4ge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdG9kby1oaWdoKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWhpZ2gpO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIzXFxcIl06Y2hlY2tlZCArIHNwYW4sXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiM1xcXCJdICsgc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWhpZ2gpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtZmMtc2Vjb25kYXJ5KTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLmZvcm0tY29udHJvbDpsYXN0LW9mLXR5cGUge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5tb2RhbCBmb3JtIC5mb3JtLWNvbnRyb2w6bGFzdC1vZi10eXBlID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgbWluLXdpZHRoOiAzNSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAuZm9ybS1jb250cm9sOmxhc3Qtb2YtdHlwZSA+IGJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtZmMtc2Vjb25kYXJ5KTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcbiAgI2NvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzJjaCAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaGVhZGVyIGhlYWRlcicgJ25hdiB0b2RvJztcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIHJpZ2h0OiAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG5cXG4gIG5hdi5hY3RpdmUge1xcbiAgICByaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gIH1cXG5cXG4gIGhlYWRlciAuc2lkZWJhci1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnRvZG8tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nOiAyLjVyZW07XFxuICB9XFxuXFxuICAudG9kby1jb250YWluZXIgLnRpdGxlIGgzIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC50b2RvLWNvbnRhaW5lciAuaXRlbSAuYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtbGVmdCAzNTBtcyBmb3J3YXJkcywgZmFkZS1pbiAzNTBtcyBmb3J3YXJkcztcXG4gIH1cXG5cXG4gIC50b2RvLWNvbnRhaW5lciAuaXRlbTpob3ZlciA+IC5idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAubW9kYWwge1xcbiAgICBtaW4td2lkdGg6IDUwY2g7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS11cCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLHlCQUF5Qjs7RUFFekIsa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qiw2R0FBNkc7O0VBRTdHLHFCQUFxQjtFQUNyQiwwQkFBMEI7O0VBRTFCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGlCQUFpQjtBQUNu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Q0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItcHJpbWFyeTogd2hpdGU7XFxuICAtLWNvbG9yLXNlY29uZGFyeTogIzAxNDk3YztcXG4gIC0tY29sb3ItdGVydGlhcnk6ICNhOWQ2ZTU7XFxuXFxuICAtLWNvbG9yLXNpZGViYXItaW5kaWNhdG9yOiAjMmE2Zjk3O1xcbiAgLS1jb2xvci1zaWRlYmFyLWhvdmVyOiAjODljMmQ5O1xcbiAgLS1jb2xvci10b2RvLWxvdzogZ3JlZW47XFxuICAtLWNvbG9yLXRvZG8tbWVkOiBvcmFuZ2U7XFxuICAtLWNvbG9yLXRvZG8taGlnaDogcmVkO1xcbiAgLS1jb2xvci1yZWQtZmlsdGVyOiBpbnZlcnQoMjglKSBzZXBpYSg5OSUpIHNhdHVyYXRlKDczOTklKSBodWUtcm90YXRlKDM1N2RlZykgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCgxMTUlKTtcXG5cXG4gIC0tZm9udC1mYy1tYWluOiBibGFjaztcXG4gIC0tZm9udC1mYy1zZWNvbmRhcnk6IHdoaXRlO1xcblxcbiAgLS1mb250LWZ6LW5hdjogMS40cmVtO1xcbiAgLS1mb250LWZ6LXByb2plY3RzOiAxcmVtO1xcbiAgLS1mb250LWZ6LXByb2plY3RzLWluZGljYXRvcjogMC43NXJlbTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaGVhZGVyIGhlYWRlcicgJ25hdiB0b2RvJztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1mYy1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuaGVhZGVyIC5zaWRlYmFyLWJ0biB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5zaWRlYmFyLWJ0biBpbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDIuM3JlbTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG5uYXYge1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICByaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNXMgZWFzZTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1mei1uYXYpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbm5hdi5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICByaWdodDogMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubmF2IHVsIGxpOm5vdCgucHJvamVjdHMpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYgdWwgbGk6bm90KC5wcm9qZWN0cyk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2lkZWJhci1ob3Zlcik7XFxufVxcblxcbm5hdiB1bCBsaTpub3QoLnByb2plY3RzKS5hY3RpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiB1cmwoJy4vYXNzZXRzLy9jaGV2cm9uLXJpZ2h0LnN2ZycpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5uYXYgdWwgbGk6bm90KC5wcm9qZWN0cykgc3BhbjpmaXJzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG5uYXYgdWwgbGk6bm90KC5wcm9qZWN0cykgc3BhbjpsYXN0LW9mLXR5cGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWluLXdpZHRoOiAxLjJyZW07XFxuICBtaW4taGVpZ2h0OiAxLjJyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtZnotcHJvamVjdHMtaW5kaWNhdG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNpZGViYXItaW5kaWNhdG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWZjLXNlY29uZGFyeSk7XFxufVxcblxcbm5hdiB1bCBsaS5wcm9qZWN0cyB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbm5hdiBsaSB1bC5wcm9qZWN0cy1jb250YWluZXIgbGkge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtZnotcHJvamVjdHMpO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbm5hdiB1bCAucHJvamVjdHMtY29udGFpbmVyIC5hZGQtcHJvamVjdCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAwcmVtO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiB0b2RvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxLjhyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApOyAvKiBlYXNlT3V0UXVhZCAqL1xcbn1cXG5cXG4vKiBib3gtc2hhZG93OiAzcHggMHB4IDBweCBncmVlbiBpbnNldDsgKi9cXG4udG9kby1jb250YWluZXIgLml0ZW0ubG93IHtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IHZhcigtLWNvbG9yLXRvZG8tbG93KSBpbnNldCwgMnB4IDJweCAycHggMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0ubWVkIHtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IHZhcigtLWNvbG9yLXRvZG8tbWVkKSBpbnNldCwgMnB4IDJweCAycHggMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0uaGlnaCB7XFxuICBib3gtc2hhZG93OiAzcHggMHB4IDBweCB2YXIoLS1jb2xvci10b2RvLWhpZ2gpIGluc2V0LCAycHggMnB4IDJweCAwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbS5kb25lIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0gLmNoZWNrIHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW06bm90KC5kb25lKTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0gLnRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0gLmRhdGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbSAuYnRuLWNvbnRhaW5lciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0gLmJ0bi1jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgZmlsdGVyOiB2YXIoLS1jb2xvci1yZWQtZmlsdGVyKTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5pdGVtLmFkZC10b2RvIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5pdGVtLmFkZC10b2RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNpZGViYXItaG92ZXIpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwMHZ3IHJnYigwIDAgMCAvIDAuNSk7XFxuICBtaW4td2lkdGg6IDMwY2g7XFxufVxcblxcbi5tb2RhbDo6YmFja2Ryb3Age1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsW29wZW5dIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgNTAwbXMgZm9yd2FyZHMsIGZhZGUtaW4gNTAwbXMgZm9yd2FyZHM7XFxufVxcblxcbi5tb2RhbFtjbG9zaW5nXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgaW5zZXQ6IDA7XFxuICBhbmltYXRpb246IGZhZGUtb3V0IDUwMG1zIGZvcndhcmRzO1xcbn1cXG5cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAuZm9ybS1jb250cm9sIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5tb2RhbCBmb3JtIC5mb3JtLWNvbnRyb2wgaW5wdXQsXFxuc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMS42cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLmZvcm0tY29udHJvbCAjcHJvamVjdCB7XFxuICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGVydGlhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubW9kYWwgZm9ybSB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICByZXNpemU6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgcGFkZGluZy1pbmxpbmU6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjZyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdmFsdWU9XFxcIjFcXFwiXSArIHNwYW4ge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdG9kby1sb3cpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tbG93KTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiMVxcXCJdOmNoZWNrZWQgKyBzcGFuLFxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdmFsdWU9XFxcIjFcXFwiXSArIHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1sb3cpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtZmMtc2Vjb25kYXJ5KTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiMlxcXCJdICsgc3BhbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10b2RvLW1lZCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdG9kby1tZWQpO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIyXFxcIl06Y2hlY2tlZCArIHNwYW4sXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiMlxcXCJdICsgc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLW1lZCk7XFxuICBjb2xvcjogdmFyKC0tZm9udC1mYy1zZWNvbmRhcnkpO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIzXFxcIl0gKyBzcGFuIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRvZG8taGlnaCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdG9kby1oaWdoKTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiM1xcXCJdOmNoZWNrZWQgKyBzcGFuLFxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdmFsdWU9XFxcIjNcXFwiXSArIHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1oaWdoKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWZjLXNlY29uZGFyeSk7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5mb3JtLWNvbnRyb2w6bGFzdC1vZi10eXBlIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAuZm9ybS1jb250cm9sOmxhc3Qtb2YtdHlwZSA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIG1pbi13aWR0aDogMzUlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLmZvcm0tY29udHJvbDpsYXN0LW9mLXR5cGUgPiBidXR0b25bdHlwZT0nc3VibWl0J10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWZjLXNlY29uZGFyeSk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXG4gICNjb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyY2ggM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlciBoZWFkZXInICduYXYgdG9kbyc7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICByaWdodDogMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICBuYXYuYWN0aXZlIHtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICB9XFxuXFxuICBoZWFkZXIgLnNpZGViYXItYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC50b2RvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgcGFkZGluZzogMi41cmVtO1xcbiAgfVxcblxcbiAgLnRvZG8tY29udGFpbmVyIC50aXRsZSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICB9XFxuXFxuICAudG9kby1jb250YWluZXIgLml0ZW0gLmJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQgMzUwbXMgZm9yd2FyZHMsIGZhZGUtaW4gMzUwbXMgZm9yd2FyZHM7XFxuICB9XFxuXFxuICAudG9kby1jb250YWluZXIgLml0ZW06aG92ZXIgPiAuYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLm1vZGFsIHtcXG4gICAgbWluLXdpZHRoOiA1MGNoO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBQdWJTdWIgPSAoKCkgPT4ge1xuICBjb25zdCBldmVudE9iaiA9IHt9O1xuXG4gIGNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XG4gICAgaWYgKCFldmVudE9ialtldmVudE5hbWVdKSByZXR1cm47XG4gICAgZXZlbnRPYmpbZXZlbnROYW1lXS5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgZm4oZGF0YSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGV2ZW50TmFtZSwgZm4pID0+IHtcbiAgICBpZiAoIWV2ZW50T2JqW2V2ZW50TmFtZV0pIHtcbiAgICAgIGV2ZW50T2JqW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgZXZlbnRPYmpbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChldmVudE5hbWUsIGZuKSA9PiB7XG4gICAgaWYgKCFldmVudE9ialtldmVudE5hbWVdKSByZXR1cm47XG4gICAgZXZlbnRPYmpbZXZlbnROYW1lXS5maWx0ZXIoKGV2ZW50Rm4pID0+IGV2ZW50Rm4gIT09IGZuKTtcbiAgfTtcblxuICByZXR1cm4ge3B1Ymxpc2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmV9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHViU3ViO1xuIiwiaW1wb3J0IFB1YlN1YiBmcm9tICcuLi9oZWxwZXIvcHVic3ViJztcbmNvbnN0IGR1bW15Rm4gPSAoKSA9PiB7XG4gIGNvbnN0IGhhbmRsZVN1YiA9IChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIGZyb20gVUknLCBkYXRhKTtcbiAgfTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKCd0ZXN0JywgaGFuZGxlU3ViKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGR1bW15Rm47IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFB1YlN1YiBmcm9tICcuL2hlbHBlci9wdWJzdWInO1xuaW1wb3J0IGR1bW15Rm4gZnJvbSAnLi9tb2R1bGVzL1VJJztcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGhhbmRsZVN1YiA9IChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGluZGV4LmpzJywgZGF0YSk7XG59O1xuXG5kdW1teUZuKCk7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gIFB1YlN1Yi5wdWJsaXNoKCd0ZXN0JywgMTIzNCk7XG59O1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmJ0bi50ZXh0Q29udGVudCA9ICdDbGljayBNZSEgYW5kIGxvb2sgYXQgeW91ciBjb25zb2xlISc7XG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG5cbi8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuXG5QdWJTdWIuc3Vic2NyaWJlKCd0ZXN0JywgaGFuZGxlU3ViKTtcblxuLy8gVGVzdGluZyBtb2RhbFxuY29uc3Qgb3Blbk1vZGFsID0gKCk9PntcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgbW9kYWwuc2hvd01vZGFsKCk7XG59XG5cbmNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKTtcbmFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xuXG5cbi8vIFRlc3Rpbmcgc2lkZWJhclxuY29uc3QgdG9nZ2xlU2lkZWJhciAgPSAoKT0+e1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxufVxuXG5jb25zdCBzaWRlYmFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItYnRuJyk7XG5zaWRlYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZWJhcilcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==