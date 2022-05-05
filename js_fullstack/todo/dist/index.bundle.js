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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Ubuntu-Regular.ttf */ "./src/assets/fonts/Ubuntu-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets//chevron-right.svg */ "./src/assets/chevron-right.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Ubuntu';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --color-primary: white;\n  --color-secondary: #01497c;\n  --color-tertiary: #a9d6e5;\n\n  --color-sidebar-indicator: #2a6f97;\n  --color-sidebar-hover: #89c2d9;\n  --color-todo-low: green;\n  --color-todo-med: orange;\n  --color-todo-high: red;\n  --color-red-filter: invert(28%) sepia(99%) saturate(7399%) hue-rotate(357deg) brightness(106%) contrast(115%);\n\n  --font-fc-main: black;\n  --font-fc-secondary: white;\n\n  --font-fz-nav: 1.4rem;\n  --font-fz-projects: 1rem;\n  --font-fz-projects-indicator: 0.75rem;\n}\n\nbody {\n  font-family: Ubuntu;\n}\n\n#container {\n  height: 100vh;\n  display: grid;\n  background-color: var(--color-primary);\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 0.3fr 3fr;\n  grid-template-areas: 'header header' 'nav todo';\n}\n\nheader {\n  grid-area: header;\n  background-color: var(--color-secondary);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 1.5rem;\n  color: var(--font-fc-secondary);\n  padding: 1rem;\n}\n\nheader .sidebar-btn {\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n}\n\nheader .sidebar-btn img {\n  cursor: pointer;\n  width: 2.3rem;\n  filter: invert(1);\n}\n\nnav {\n  grid-area: nav;\n  background-color: var(--color-tertiary);\n  position: relative;\n  right: 100%;\n  transition: right 0.5s ease;\n  padding: 1rem 0.7rem;\n  font-size: var(--font-fz-nav);\n  overflow: auto;\n}\n\nnav.active {\n  display: block;\n  right: 0%;\n  z-index: 1;\n}\n\nnav ul {\n  cursor: pointer;\n  list-style: none;\n}\n\nnav ul li {\n  padding: 0.5rem;\n  border-radius: 5px;\n}\n\nnav ul li:not(.projects) {\n  display: flex;\n  align-items: center;\n}\n\nnav ul li:not(.projects).active::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  display: inline-block;\n  vertical-align: middle;\n  height: 1.5rem;\n}\n\nnav ul li:not(.projects) span:first-of-type {\n  margin-right: auto;\n}\n\nnav ul li:not(.projects) span:last-of-type {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.5rem;\n  border-radius: 50%;\n  min-width: 1.3rem;\n  min-height: 1.3rem;\n  padding: 0.2rem;\n  font-size: var(--font-fz-projects-indicator);\n  background-color: var(--color-sidebar-indicator);\n  color: var(--font-fc-secondary);\n}\n\nnav ul li:not(.projects) span.notodo:last-of-type {\n  visibility: hidden;\n}\n\nnav ul li.projects {\n  cursor: default;\n}\n\nnav ul li.projects ul li:first-of-type {\n  margin-top: 0.5rem;\n}\n\nnav li ul.projects-container li {\n  padding: 0.2rem;\n  margin-left: 1rem;\n  font-size: var(--font-fz-projects);\n  overflow-wrap: anywhere;\n}\n\nnav ul .projects-container .add-project {\n  justify-content: center;\n  margin-left: 0rem;\n}\n\n.todo-container {\n  grid-area: todo;\n  background-color: var(--color-primary);\n  grid-column: 1 / 3;\n  padding: 1rem;\n}\n\n.todo-container .projTitle h3 {\n  font-size: 2rem;\n  margin-bottom: 1.5rem;\n}\n\n.todo-container .item {\n  display: flex;\n  align-items: center;\n  min-height: 1.8rem;\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  border: 1px solid;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 0px;\n  transition: transform 250ms cubic-bezier(0.250, 0.460, 0.450, 0.940); /* easeOutQuad */\n}\n\n.todo-container .item.low {\n  box-shadow: 3px 0px 0px var(--color-todo-low) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.med {\n  box-shadow: 3px 0px 0px var(--color-todo-med) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.high {\n  box-shadow: 3px 0px 0px var(--color-todo-high) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.done {\n  opacity: 0.3;\n  text-decoration: line-through;\n}\n\n.todo-container .item .check {\n  display: flex;\n  align-items: center;\n  margin-inline: 0rem 0.5rem;\n}\n\n.todo-container .item .check input[type='checkbox'] {\n  width: 1rem;\n  height: 1rem;\n}\n\n.todo-container .item .title {\n  margin-right: auto;\n  overflow-wrap: anywhere;\n}\n\n.todo-container .item .date {\n  flex-shrink: 0;\n  margin-right: 0.25rem;\n  margin-left: 0.5rem;\n}\n\n.todo-container .item .btn-container {\n  cursor: pointer;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n\n.todo-container .item .btn-container img {\n  height: 1.5rem;\n  filter: var(--color-red-filter);\n}\n\n.todo-container .item.add-todo {\n  justify-content: center;\n  border: none;\n  box-shadow: none;\n  height: 2rem;\n}\n\n.modal {\n  margin: auto;\n  border: 2px solid var(--color-secondary);\n  border-radius: 5px;\n  box-shadow: 0 0 0 100vw rgb(0 0 0 / 0.5);\n  min-width: 30ch;\n  z-index: 1;\n}\n\n.modal::backdrop {\n  opacity: 0;\n}\n\n.modal[open] {\n  animation: slide-up 500ms forwards, fade-in 500ms forwards;\n}\n\n.modal[closing] {\n  display: block;\n  pointer-events: none;\n  inset: 0;\n  animation: fade-out 500ms forwards;\n}\n\n.modal .modal-container {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n.modal .modal-container div:first-of-type {\n  cursor: pointer;\n  margin-left: auto;\n}\n\n.modal form .form-control {\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.modal form .form-control input {\n  width: 100%;\n  min-height: 1.6rem;\n  border: none;\n  outline: none;\n}\n\n.modal form .form-control #project {\n  padding-inline: 0.5rem;\n  border: 2px solid var(--color-tertiary);\n  border-radius: 5px;\n}\n\n.modal form input[name='title'] {\n  font-weight: bold;\n  font-size: 1.4rem;\n}\n\n.modal form textarea {\n  height: auto;\n  resize: none;\n  outline: none;\n  border: none;\n  width: 100%;\n  line-height: 1.5;\n}\n\n.modal form input[type='date'] {\n  padding-inline: 0.5rem;\n  border: 2px solid var(--color-tertiary);\n  border-radius: 5px;\n}\n\n.modal form .priority-container {\n  justify-content: center;\n  gap: 1rem;\n  margin: 1rem 0;\n}\n\n.modal form .priority-container input[type=\"radio\"] {\n  display: none;\n}\n\n.modal form .priority-container span {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  font-size: 0.8rem;\n  border-radius: 5px;\n  text-transform: uppercase;\n}\n\n.modal form .priority-container input[value=\"1\"] + span {\n  border: 2px solid var(--color-todo-low);\n  color: var(--color-todo-low);\n}\n\n.modal form .priority-container input[value=\"1\"]:checked + span,\n.modal form .priority-container input[value=\"1\"] + span:hover {\n  background-color: var(--color-todo-low);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .priority-container input[value=\"2\"] + span {\n  border: 2px solid var(--color-todo-med);\n  color: var(--color-todo-med);\n}\n\n.modal form .priority-container input[value=\"2\"]:checked + span,\n.modal form .priority-container input[value=\"2\"] + span:hover {\n  background-color: var(--color-todo-med);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .priority-container input[value=\"3\"] + span {\n  border: 2px solid var(--color-todo-high);\n  color: var(--color-todo-high);\n}\n\n.modal form .priority-container input[value=\"3\"]:checked + span,\n.modal form .priority-container input[value=\"3\"] + span:hover {\n  background-color: var(--color-todo-high);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .form-control:last-of-type {\n  justify-content: center;\n  gap: 1rem;\n}\n\n.modal form .form-control:last-of-type > button {\n  padding: 0.4rem 1rem;\n  width: min(100px, 35%);\n  height: 2.6rem;\n  border-radius: 5px;\n  outline: none;\n}\n\n.modal form .form-control:last-of-type > button[type='submit'] {\n  background-color: var(--color-secondary);\n  color: var(--font-fc-secondary);\n}\n\n@media only screen and (min-width: 750px) {\n  #container {\n    grid-template-columns: 32ch 3fr;\n    grid-template-rows: 0.3fr 3fr;\n    grid-template-areas: 'header header' 'nav todo';\n  }\n\n  header {\n    padding-left: 3rem;\n  }\n\n  header .sidebar-btn {\n    display: none;\n  }\n\n  nav {\n    right: 0%;\n    padding: 1rem;\n    z-index: 0;\n  }\n\n  nav.active {\n    right: 100%;\n  }\n\n  nav ul li:not(.projects):hover {\n    background-color: var(--color-sidebar-hover);\n  }\n\n  .todo-container {\n    grid-column: 2 / 3;\n    padding: 2.5rem;\n  }\n\n  .todo-container .item .btn-container {\n    display: none;\n    animation: slide-left 350ms forwards, fade-in 350ms forwards;\n  }\n\n  .todo-container .item:hover > .btn-container {\n    display: block;\n  }\n\n  .todo-container .item.add-todo:hover {\n    background-color: var(--color-sidebar-hover);\n  }\n\n  .todo-container .item:not(.done):hover {\n    transform: scale(1.01);\n  }\n\n  .modal {\n    min-width: 60ch;\n  }\n\n  .modal .modal-container {\n    padding: 2rem;\n  }\n\n  .modal form .form-control:last-of-type > button {\n    margin-top: 1rem;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n@keyframes slide-left {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Ubuntu';\n  src: url('./assets/fonts/Ubuntu-Regular.ttf') format('ttf');\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  --color-primary: white;\n  --color-secondary: #01497c;\n  --color-tertiary: #a9d6e5;\n\n  --color-sidebar-indicator: #2a6f97;\n  --color-sidebar-hover: #89c2d9;\n  --color-todo-low: green;\n  --color-todo-med: orange;\n  --color-todo-high: red;\n  --color-red-filter: invert(28%) sepia(99%) saturate(7399%) hue-rotate(357deg) brightness(106%) contrast(115%);\n\n  --font-fc-main: black;\n  --font-fc-secondary: white;\n\n  --font-fz-nav: 1.4rem;\n  --font-fz-projects: 1rem;\n  --font-fz-projects-indicator: 0.75rem;\n}\n\nbody {\n  font-family: Ubuntu;\n}\n\n#container {\n  height: 100vh;\n  display: grid;\n  background-color: var(--color-primary);\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 0.3fr 3fr;\n  grid-template-areas: 'header header' 'nav todo';\n}\n\nheader {\n  grid-area: header;\n  background-color: var(--color-secondary);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 1.5rem;\n  color: var(--font-fc-secondary);\n  padding: 1rem;\n}\n\nheader .sidebar-btn {\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n}\n\nheader .sidebar-btn img {\n  cursor: pointer;\n  width: 2.3rem;\n  filter: invert(1);\n}\n\nnav {\n  grid-area: nav;\n  background-color: var(--color-tertiary);\n  position: relative;\n  right: 100%;\n  transition: right 0.5s ease;\n  padding: 1rem 0.7rem;\n  font-size: var(--font-fz-nav);\n  overflow: auto;\n}\n\nnav.active {\n  display: block;\n  right: 0%;\n  z-index: 1;\n}\n\nnav ul {\n  cursor: pointer;\n  list-style: none;\n}\n\nnav ul li {\n  padding: 0.5rem;\n  border-radius: 5px;\n}\n\nnav ul li:not(.projects) {\n  display: flex;\n  align-items: center;\n}\n\nnav ul li:not(.projects).active::before {\n  content: url('./assets//chevron-right.svg');\n  display: inline-block;\n  vertical-align: middle;\n  height: 1.5rem;\n}\n\nnav ul li:not(.projects) span:first-of-type {\n  margin-right: auto;\n}\n\nnav ul li:not(.projects) span:last-of-type {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.5rem;\n  border-radius: 50%;\n  min-width: 1.3rem;\n  min-height: 1.3rem;\n  padding: 0.2rem;\n  font-size: var(--font-fz-projects-indicator);\n  background-color: var(--color-sidebar-indicator);\n  color: var(--font-fc-secondary);\n}\n\nnav ul li:not(.projects) span.notodo:last-of-type {\n  visibility: hidden;\n}\n\nnav ul li.projects {\n  cursor: default;\n}\n\nnav ul li.projects ul li:first-of-type {\n  margin-top: 0.5rem;\n}\n\nnav li ul.projects-container li {\n  padding: 0.2rem;\n  margin-left: 1rem;\n  font-size: var(--font-fz-projects);\n  overflow-wrap: anywhere;\n}\n\nnav ul .projects-container .add-project {\n  justify-content: center;\n  margin-left: 0rem;\n}\n\n.todo-container {\n  grid-area: todo;\n  background-color: var(--color-primary);\n  grid-column: 1 / 3;\n  padding: 1rem;\n}\n\n.todo-container .projTitle h3 {\n  font-size: 2rem;\n  margin-bottom: 1.5rem;\n}\n\n.todo-container .item {\n  display: flex;\n  align-items: center;\n  min-height: 1.8rem;\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  border: 1px solid;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 0px;\n  transition: transform 250ms cubic-bezier(0.250, 0.460, 0.450, 0.940); /* easeOutQuad */\n}\n\n.todo-container .item.low {\n  box-shadow: 3px 0px 0px var(--color-todo-low) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.med {\n  box-shadow: 3px 0px 0px var(--color-todo-med) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.high {\n  box-shadow: 3px 0px 0px var(--color-todo-high) inset, 2px 2px 2px 0px;\n}\n\n.todo-container .item.done {\n  opacity: 0.3;\n  text-decoration: line-through;\n}\n\n.todo-container .item .check {\n  display: flex;\n  align-items: center;\n  margin-inline: 0rem 0.5rem;\n}\n\n.todo-container .item .check input[type='checkbox'] {\n  width: 1rem;\n  height: 1rem;\n}\n\n.todo-container .item .title {\n  margin-right: auto;\n  overflow-wrap: anywhere;\n}\n\n.todo-container .item .date {\n  flex-shrink: 0;\n  margin-right: 0.25rem;\n  margin-left: 0.5rem;\n}\n\n.todo-container .item .btn-container {\n  cursor: pointer;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n\n.todo-container .item .btn-container img {\n  height: 1.5rem;\n  filter: var(--color-red-filter);\n}\n\n.todo-container .item.add-todo {\n  justify-content: center;\n  border: none;\n  box-shadow: none;\n  height: 2rem;\n}\n\n.modal {\n  margin: auto;\n  border: 2px solid var(--color-secondary);\n  border-radius: 5px;\n  box-shadow: 0 0 0 100vw rgb(0 0 0 / 0.5);\n  min-width: 30ch;\n  z-index: 1;\n}\n\n.modal::backdrop {\n  opacity: 0;\n}\n\n.modal[open] {\n  animation: slide-up 500ms forwards, fade-in 500ms forwards;\n}\n\n.modal[closing] {\n  display: block;\n  pointer-events: none;\n  inset: 0;\n  animation: fade-out 500ms forwards;\n}\n\n.modal .modal-container {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n.modal .modal-container div:first-of-type {\n  cursor: pointer;\n  margin-left: auto;\n}\n\n.modal form .form-control {\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.modal form .form-control input {\n  width: 100%;\n  min-height: 1.6rem;\n  border: none;\n  outline: none;\n}\n\n.modal form .form-control #project {\n  padding-inline: 0.5rem;\n  border: 2px solid var(--color-tertiary);\n  border-radius: 5px;\n}\n\n.modal form input[name='title'] {\n  font-weight: bold;\n  font-size: 1.4rem;\n}\n\n.modal form textarea {\n  height: auto;\n  resize: none;\n  outline: none;\n  border: none;\n  width: 100%;\n  line-height: 1.5;\n}\n\n.modal form input[type='date'] {\n  padding-inline: 0.5rem;\n  border: 2px solid var(--color-tertiary);\n  border-radius: 5px;\n}\n\n.modal form .priority-container {\n  justify-content: center;\n  gap: 1rem;\n  margin: 1rem 0;\n}\n\n.modal form .priority-container input[type=\"radio\"] {\n  display: none;\n}\n\n.modal form .priority-container span {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  font-size: 0.8rem;\n  border-radius: 5px;\n  text-transform: uppercase;\n}\n\n.modal form .priority-container input[value=\"1\"] + span {\n  border: 2px solid var(--color-todo-low);\n  color: var(--color-todo-low);\n}\n\n.modal form .priority-container input[value=\"1\"]:checked + span,\n.modal form .priority-container input[value=\"1\"] + span:hover {\n  background-color: var(--color-todo-low);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .priority-container input[value=\"2\"] + span {\n  border: 2px solid var(--color-todo-med);\n  color: var(--color-todo-med);\n}\n\n.modal form .priority-container input[value=\"2\"]:checked + span,\n.modal form .priority-container input[value=\"2\"] + span:hover {\n  background-color: var(--color-todo-med);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .priority-container input[value=\"3\"] + span {\n  border: 2px solid var(--color-todo-high);\n  color: var(--color-todo-high);\n}\n\n.modal form .priority-container input[value=\"3\"]:checked + span,\n.modal form .priority-container input[value=\"3\"] + span:hover {\n  background-color: var(--color-todo-high);\n  color: var(--font-fc-secondary);\n}\n\n.modal form .form-control:last-of-type {\n  justify-content: center;\n  gap: 1rem;\n}\n\n.modal form .form-control:last-of-type > button {\n  padding: 0.4rem 1rem;\n  width: min(100px, 35%);\n  height: 2.6rem;\n  border-radius: 5px;\n  outline: none;\n}\n\n.modal form .form-control:last-of-type > button[type='submit'] {\n  background-color: var(--color-secondary);\n  color: var(--font-fc-secondary);\n}\n\n@media only screen and (min-width: 750px) {\n  #container {\n    grid-template-columns: 32ch 3fr;\n    grid-template-rows: 0.3fr 3fr;\n    grid-template-areas: 'header header' 'nav todo';\n  }\n\n  header {\n    padding-left: 3rem;\n  }\n\n  header .sidebar-btn {\n    display: none;\n  }\n\n  nav {\n    right: 0%;\n    padding: 1rem;\n    z-index: 0;\n  }\n\n  nav.active {\n    right: 100%;\n  }\n\n  nav ul li:not(.projects):hover {\n    background-color: var(--color-sidebar-hover);\n  }\n\n  .todo-container {\n    grid-column: 2 / 3;\n    padding: 2.5rem;\n  }\n\n  .todo-container .item .btn-container {\n    display: none;\n    animation: slide-left 350ms forwards, fade-in 350ms forwards;\n  }\n\n  .todo-container .item:hover > .btn-container {\n    display: block;\n  }\n\n  .todo-container .item.add-todo:hover {\n    background-color: var(--color-sidebar-hover);\n  }\n\n  .todo-container .item:not(.done):hover {\n    transform: scale(1.01);\n  }\n\n  .modal {\n    min-width: 60ch;\n  }\n\n  .modal .modal-container {\n    padding: 2rem;\n  }\n\n  .modal form .form-control:last-of-type > button {\n    margin-top: 1rem;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n@keyframes slide-left {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/helper/helper.js":
/*!******************************!*\
  !*** ./src/helper/helper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createImgButton": () => (/* binding */ createImgButton),
/* harmony export */   "createInput": () => (/* binding */ createInput),
/* harmony export */   "createWrappingDiv": () => (/* binding */ createWrappingDiv),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "removeChildren": () => (/* binding */ removeChildren)
/* harmony export */ });
const removeChildren = (parentEl) => {
  while (parentEl.firstChild) {
    parentEl.removeChild(parentEl.firstChild);
  }
};

const createWrappingDiv = (className, childElArr) => {
  const div = document.createElement('div');
  div.classList.add(className);
  if (childElArr && childElArr.length > 0) {
    for (const el of childElArr) {
      div.appendChild(el);
    }
  }
  return div;
};

const createInput = ({label = '', id, type, siblingEl, ...attributes}) => {
  const returnArr = [];
  const labelEl = document.createElement('label');
  if (label) {
    labelEl.setAttribute('for', id);
    labelEl.textContent = label;
    returnArr.push(labelEl);
  }

  const input = document.createElement('input');
  input.setAttribute('type', type);
  if (id) input.setAttribute('id', id);
  for (const [key, value] of Object.entries(attributes)) {
    input.setAttribute(key, value);
  }

  if (type === 'radio') {
    labelEl.appendChild(input);
    if (siblingEl) labelEl.appendChild(siblingEl);
    if (!label) returnArr.push(labelEl);
  } else returnArr.push(input);

  return returnArr;
};

const createButton = (type, content, className) => {
  const btn = document.createElement('button');
  btn.setAttribute('type', type);
  btn.textContent = content;
  if (className) btn.classList.add(className);
  return btn;
};

const createImgButton = ({url, className, clickEvent, parentType = 'div', parentClass}) => {
  const container = document.createElement(parentType);
  container.classList.add(parentClass);

  const img = document.createElement('img');
  img.setAttribute('src', url);
  if (className) img.classList.add(className);

  container.appendChild(img);
  container.addEventListener('click', clickEvent);
  return container;
};

const formatDate = (date) => {
  return date;
};


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

/***/ "./src/modules/Modal.js":
/*!******************************!*\
  !*** ./src/modules/Modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/pubsub */ "./src/helper/pubsub.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper */ "./src/helper/helper.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");





const Modal = ($modal) => {
  const $closeBtn = $modal.querySelector('.close-btn img:last-of-type');
  const $deleteBtn = $modal.querySelector('.close-btn img:first-of-type');

  const $form = $modal.querySelector('form');
  const $title = $modal.querySelector('h3');

  const createForm = (type, {projectName, title, desc, priority = 1, due} = {}) => {
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.removeChildren)($form);
    if (type === 'project') {
      $deleteBtn.style.visibility = 'hidden';
      $title.textContent = 'New Project';

      const project = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createInput)({
        label: 'Project:',
        id: 'project',
        type: 'text',
        name: 'project',
        required: '',
      });
      const projectDiv = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createWrappingDiv)('form-control');
      for (const el of project) projectDiv.appendChild(el);
      $form.appendChild(projectDiv);
    } else {
      $deleteBtn.style.visibility = type === 'viewTask' ? 'visible' : 'hidden';
      // $title.textContent = type === 'viewTask' ? 'View Task' : 'Add New Task';
      $title.textContent = ``;

      const project = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createInput)({
        label: 'Project:',
        id: 'project',
        type: 'hidden',
        name: 'project',
        value: projectName,
        readonly: '',
        required: '',
      });
      const projectDiv = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createWrappingDiv)('form-control');
      projectDiv.appendChild(project[1]);

      const titleInput = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createInput)({
        id: 'title',
        type: 'text',
        name: 'title',
        placeholder: 'Name',
        parentClass: 'form-control',
        required: '',
      });
      const titleDiv = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createWrappingDiv)('form-control', [titleInput[0]]);

      const descArea = document.createElement('textarea');
      descArea.setAttribute('rows', 10);
      descArea.setAttribute('id', 'desc');
      descArea.setAttribute('name', 'desc');
      descArea.setAttribute('placeholder', 'Description');
      descArea.setAttribute('required', '');
      const descDiv = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createWrappingDiv)('form-control', [descArea]);

      const dueInput = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createInput)({
        label: 'Due:',
        id: 'due',
        type: 'date',
        name: 'due',
        parentClass: 'form-control',
        required: '',
      });
      const dueDiv = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createWrappingDiv)('form-control');
      for (const el of dueInput) dueDiv.appendChild(el);

      // Priority Radio buttons
      const optSpanLow = document.createElement('span');
      optSpanLow.textContent = 'Low';
      const optLow = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createInput)({
        siblingEl: optSpanLow,
        id: 'low',
        type: 'radio',
        name: 'priority',
        value: 1,
        checked: '',
      });
      const optSpanMed = document.createElement('span');
      optSpanMed.textContent = 'Medium';
      const optMed = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createInput)({siblingEl: optSpanMed, id: 'medium', type: 'radio', name: 'priority', value: 2});
      const optSpanHigh = document.createElement('span');
      optSpanHigh.textContent = 'High';
      const optHigh = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createInput)({siblingEl: optSpanHigh, id: 'high', type: 'radio', name: 'priority', value: 3});
      const priorityDiv = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createWrappingDiv)('form-control', [optLow[0], optMed[0], optHigh[0]]);
      priorityDiv.classList.add('priority-container');

      if (type === 'viewTask') {
        titleInput[0].setAttribute('value', title);
        descArea.textContent = desc;
        dueInput[1].setAttribute('value', due);
        switch (priority) {
          case 1: {
            // optLow[0].firstChild.setAttribute('checked', '');
            optLow[0].click();
            break;
          }
          case 2: {
            // optMed[0].firstChild.setAttribute('checked', '');
            optMed[0].click();
            break;
          }
          default:
            // optHigh[0].firstChild.setAttribute('checked', '');
            optHigh[0].click();
        }
      }

      $form.appendChild(titleDiv);
      $form.appendChild(descDiv);
      $form.appendChild(projectDiv);
      $form.appendChild(dueDiv);
      $form.appendChild(priorityDiv);
    }
    // Modal Buttons
    const saveBtn = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createButton)('submit', 'Save');
    const closeBtn = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'Cancel');
    closeBtn.addEventListener('click', closeModal, {once: true});
    const btnContainer = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__.createWrappingDiv)('form-control', [saveBtn, closeBtn]);
    $form.appendChild(btnContainer);
  };

  const closeModal = () => {
    $modal.setAttribute('closing', '');
    $modal.addEventListener(
      'animationend',
      () => {
        $modal.removeAttribute('closing');
        $modal.close();
      },
      {once: true}
    );
    $modal.close();
  };

  $closeBtn.addEventListener('click', closeModal);

  const handleProjectSubmit = (e) => {
    const formData = Object.fromEntries(new FormData(e.target).entries());
    _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('newProject', (0,_Project__WEBPACK_IMPORTED_MODULE_2__["default"])(formData.project));
  };

  const handleTaskSubmit = (e) => {
    const {title, desc, priority, due} = Object.fromEntries(new FormData(e.target).entries());
    const newTodo = (0,_Todo__WEBPACK_IMPORTED_MODULE_3__["default"])({title, desc, priority, due})
    _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('newTaskSubmit', newTodo);
  };

  const addTaskModal = ({projectName}) => {
    if (!projectName) return console.error('No projectName');
    createForm('addTask', {projectName});
    $modal.close();
    $modal.showModal();
    $form.addEventListener('submit', handleTaskSubmit, {once: true});
    console.log('ADD OPENED FOR PROJECT:', projectName)
  };

  const addProjectModal = () => {
    createForm('project');
    $modal.close();
    $modal.showModal();
    $form.addEventListener('submit', handleProjectSubmit, {once: true});
  };

  const viewTaskModal = ({projectName, title, desc, priority, due}) => {
    if (!projectName) return console.error('No projectName');
    createForm('viewTask', {projectName, title, desc, priority, due});
    $modal.close();
    $modal.showModal();
    $form.addEventListener('submit', handleTaskSubmit, {once: true});
  };

  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('openAddProjectModal', addProjectModal);
  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('openAddTaskModal', addTaskModal);
  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('openViewTaskModal', viewTaskModal);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Project = (title, completedCount = 0) => {
  let todoArr = [];

  const addTodo = (todo) => {
    const found = todoArr.find((el) => el === todo);
    if (found) return alert('Repeated task name');
    todoArr.push(todo);
  };

  const getTodo = (title) => {
    return todoArr.find((el) => el.getTodo().title === title);
  };

  const deleteTodo = (todo) => {
    const len = todoArr.length;
    const filteredArr = todoArr.filter((el) => el !== todo);

    if (len !== 0 && filteredArr.length === len) return false;

    if (todo.getCompleted()) completedCount -= 1;
    todoArr = filteredArr;
    return true;
  };

  const getTitle = () => title;
  const getTodoArr = () => todoArr;
  
  const toggleCompleteTask = (todo) => {
    const completed = todo.toggleCompleted();
    completedCount = completed ? completedCount + 1 : completedCount - 1;
    return completed;
  };
  
  const getSize = () => todoArr.length;
  const getCompletedCount = () => {
    return completedCount;
  };

  return {
    addTodo,
    deleteTodo,
    getTitle,
    getTodoArr,
    getSize,
    toggleCompleteTask,
    getTodo,
    getCompletedCount,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

// const test = Project('testProject');

// test.addTodo({title:'test'})
// test.addTodo({title:'test2'})
// test.addTodo({title:'test3'})
// const arr = test.getTodoArr();

// console.log(test.getTodoArr())
// console.log(test.getSize())
// console.log(test.getTitle())

// arr[1].title = 'this is changed';

// console.log(test.getTodoArr())


/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Todo = ({title, desc, due, priority = 1}) => {
  let completed = false;
  const setTitle = (newTitle) => (title = newTitle);
  const setDesc = (newDesc) => (desc = newDesc);
  const setDue = (newDue) => (due = newDue);
  const setPriority = (newPriority) => (priority = newPriority);
  const getCompleted = () => completed;
  const toggleCompleted = () => {
    completed = !completed;
    return completed;
  };
  const getTodo = () => {
    return {title, desc, due, priority, completed};
  };

  return {
    setTitle,
    setDesc,
    setDue,
    setPriority,
    getTodo,
    getCompleted,
    toggleCompleted,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

// const test = Todo('testtitle', 'testDesc', new Date(02 / 13 / 20));
// const test2 = Todo('testtitle2', 'testDesc2', new Date(02 / 13 / 21), 2);

// console.log(test.getTodo());
// console.log(test2.getTodo());

// test2.setDesc('testDesc3');
// console.log(test2.getTodo());


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
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "./src/modules/Modal.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/helper */ "./src/helper/helper.js");






const handleTabClick = (e) => {
  const li = e.target.closest('li');
  if (li.classList.contains('active')) return;

  const currSelected = document.querySelector('nav ul li:not(.projects):not(.add-project).active');
  currSelected.classList.remove('active');
  li.classList.add('active');
  const title = e.target.firstChild.textContent;
  const project = ProjectsUI.getProject(title);
  if (project) _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('changeCurrProject', project);
};

const ProjectsUI = (() => {
  const projects = new Map();
  let currProject = null;

  const $projectsContainer = document.querySelector('ul .projects-container');

  const updateTodoCount = (project, el) => {
    const count = project.getSize() - project.getCompletedCount();
    if (count === 0) el.classList.add('notodo');
    else {
      el.textContent = count;
      el.classList.remove('notodo');
    }
  };

  const createProjectElement = (title) => {
    const li = document.createElement('li');

    const spanTitle = document.createElement('span');
    const spanTodo = document.createElement('span');

    spanTitle.textContent = title;

    const project = projects.get(title);
    if (project) updateTodoCount(project, spanTodo);

    li.appendChild(spanTitle);
    li.appendChild(spanTodo);
    li.addEventListener('click', handleTabClick);

    if (currProject) {
      const currTitle = currProject.getTitle();
      if (currTitle === title) li.classList.add('active');
    }

    return li;
  };

  const addProject = (project) => {
    const title = project.getTitle();
    if (projects.has(title)) return alert('Repeated Project Name');
    projects.set(title, project);
    _render();
    return true;
  };

  const deleteProject = (title) => {
    const deleted = projects.delete(title);
    if (deleted) _render();
  };

  const getProjects = () => {
    return projects;
  };

  const getProject = (title) => {
    return projects.get(title);
  };

  const handleAddProject = () => {
    _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('openAddProjectModal');
  };

  const _render = () => {
    console.dir([...projects.entries()]);
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.removeChildren)($projectsContainer);
    projects.forEach((_, title) => {
      if (title !== 'Home' && title !== 'Today' && title !== 'Week') {
        const li = createProjectElement(title);
        $projectsContainer.append(li);
      }
    });

    const btn = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.createImgButton)({
      url: '../src/assets/plus.svg',
      clickEvent: handleAddProject,
      parentType: 'li',
      parentClass: 'add-project',
    });
    $projectsContainer.append(btn);
  };

  const setCurrProject = (project) => {
    currProject = project;
  };

  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('newProject', addProject);
  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('changeCurrProject', setCurrProject);
  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectDeleted', deleteProject);
  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('todoAdded', () => _render());
  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('todoDeleted', () => _render());
  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('todoCompletedToggle', () => _render());

  // _render();
  return {
    addProject,
    deleteProject,
    getProject,
    getProjects,
  };
})();

const todosUI = (() => {
  let currProject = null;

  const $todoContainer = document.querySelector('.todo-container');

  const priorityMap = {
    '1': 'low',
    '2': 'med',
    '3': 'high',
  };

  const handleDeleteTodo = (e) => {
    e.preventDefault();
    const itemEl = e.target.closest('.item');
    const todoTitle = itemEl.querySelector('.title').textContent;
    console.log('delete todo', todoTitle);

    const todo = currProject.getTodo(todoTitle);
    if (todo) {
      const deleted = currProject.deleteTodo(todo);
      if (deleted) {
        _render();
        _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('todoDeleted', todo);
      }
    }
  };

  const handleCompleteTodo = (e) => {
    e.preventDefault();
    const itemEl = e.target.closest('.item');
    const todoTitle = itemEl.querySelector('.title').textContent;
    console.log('complete todo', todoTitle);

    const todo = currProject.getTodo(todoTitle);
    if (todo) {
      const completed = currProject.toggleCompleteTask(todo);
      completed ? itemEl.classList.add('done') : itemEl.classList.remove('done');
      _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('todoCompletedToggle', todo);
      console.log(currProject.getCompletedCount());
    }
  };

  const openModal = (e) => {
    if (e.target.type === 'checkbox' || e.target.nodeName === 'IMG') return;
    const item = e.target.closest('.item');

    if (item && !item.classList.contains('add-todo')) {
      const title = item.querySelector('.title').textContent;

      const selectedTodo = currProject.getTodo(title);
      if (!selectedTodo) return console.error('TODO not found.');

      const {due, priority, desc} = selectedTodo.getTodo();
      _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('openViewTaskModal', {
        projectName: currProject.getTitle(),
        title,
        due,
        priority,
        desc,
      });
    } else if (item.classList.contains('add-todo')) {
      _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('openAddTaskModal', {
        projectName: currProject.getTitle(),
      });
    }
  };

  const createTodoElement = ({title, due, priority, completed}) => {
    const checkbox = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.createInput)({type: 'checkbox'})[0];
    const checkboxDiv = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.createWrappingDiv)('check', [checkbox]);
    checkbox.addEventListener('change', handleCompleteTodo);

    const titleDiv = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.createWrappingDiv)('title');
    titleDiv.textContent = title;

    const dateDiv = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.createWrappingDiv)('date');
    dateDiv.textContent = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.formatDate)(due);

    const deleteBtn = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.createImgButton)({
      url: '../src/assets/trash-can-outline.svg',
      clickEvent: handleDeleteTodo,
      parentClass: 'btn-container',
    });

    const item = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.createWrappingDiv)('item', [checkboxDiv, titleDiv, dateDiv, deleteBtn]);
    item.addEventListener('click', openModal);
    item.classList.add(`${priorityMap[priority]}`);
    if (completed) {
      checkbox.setAttribute('checked', '');
      item.classList.add('done');
    }

    return item;
  };

  const _render = () => {
    (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.removeChildren)($todoContainer);
    const projectTitle = currProject.getTitle();
    const h3 = document.createElement('h3');
    h3.textContent = projectTitle;
    const title = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.createWrappingDiv)('projTitle', [h3]);
    $todoContainer.appendChild(title);

    const todos = currProject.getTodoArr();
    todos.forEach((todo) => {
      const el = createTodoElement(todo.getTodo());
      $todoContainer.appendChild(el);
    });

    if (projectTitle !== 'Week' && projectTitle !== 'Today') {
      const addTodoBtn = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_4__.createImgButton)({
        url: '../src/assets/plus.svg',
        parentClass: 'item',
      });
      addTodoBtn.classList.add('add-todo');
      addTodoBtn.addEventListener('click', openModal);
      $todoContainer.appendChild(addTodoBtn);
    }
  };

  const setCurrProject = (project) => {
    currProject = project;
    _render();
  };

  const handleNewTask = (todo) => {
    currProject.addTodo(todo);
    _render();
    _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('todoAdded', todo);
  };

  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('changeCurrProject', setCurrProject);
  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('newTaskSubmit', handleNewTask);
})();

// Only Home, Wekk, Projects tabs
const tabs = document.querySelectorAll('nav ul li:not(.projects):not(.add-project)');
for (let i = 0; i < 3; i++) {
  tabs[i].addEventListener('click', handleTabClick);
}

// Debugging
_helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('changeCurrProject', (project) => {
  console.log('CURRENT PROJECT is:', project.getTitle());
});

_helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('todoDeleted', (test) => {
  console.log('DELETED TODO:', test);
});

const main = () => {
  (0,_Modal__WEBPACK_IMPORTED_MODULE_3__["default"])(document.querySelector('.modal'));
  const home = (0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])('Home');
  const today = (0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])('Today');
  const week = (0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])('Week');

  ProjectsUI.addProject(home);
  ProjectsUI.addProject(today);
  ProjectsUI.addProject(week);

  // Init with Home
  _helper_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('changeCurrProject', home);

  // Testing
  const testProj = (0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])('testingProj');
  const test = (0,_Todo__WEBPACK_IMPORTED_MODULE_2__["default"])({title: 'testTodo', desc: 'testDesc', priority: 1, due: '2022-12-25'});
  testProj.addTodo(test);

  const test2 = (0,_Todo__WEBPACK_IMPORTED_MODULE_2__["default"])({title: 'testTodo2', desc: 'testDesc', priority: 3, due: '2022-12-25'});
  testProj.addTodo(test2);

  const test3 = (0,_Todo__WEBPACK_IMPORTED_MODULE_2__["default"])({title: 'testTodo3', desc: 'testDesc', priority: 2, due: '2022-12-26'});
  testProj.addTodo(test3);

  const test4 = (0,_Todo__WEBPACK_IMPORTED_MODULE_2__["default"])({title: 'testTodo444 4444 44444', desc: 'testDesc', priority: 2, due: '2022-12-26'});
  testProj.addTodo(test4);

  ProjectsUI.addProject(testProj);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);


/***/ }),

/***/ "./src/assets/chevron-right.svg":
/*!**************************************!*\
  !*** ./src/assets/chevron-right.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aba1647cebad5a62f905.svg";

/***/ }),

/***/ "./src/assets/fonts/Ubuntu-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Ubuntu-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cbb1b79a23478cc89ad.ttf";

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
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();

// Testing sidebar
const toggleSidebar = () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
};

const sidebarBtn = document.querySelector('.sidebar-btn');
sidebarBtn.addEventListener('click', toggleSidebar);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxnQ0FBZ0MsS0FBSyxHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLHlCQUF5QixPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtB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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7O0FDckJnQzs7QUFFWDs7QUFFckIsdURBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlbHBlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWxwZXIvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9VYnVudHUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy8vY2hldnJvbi1yaWdodC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXByaW1hcnk6IHdoaXRlO1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICMwMTQ5N2M7XFxuICAtLWNvbG9yLXRlcnRpYXJ5OiAjYTlkNmU1O1xcblxcbiAgLS1jb2xvci1zaWRlYmFyLWluZGljYXRvcjogIzJhNmY5NztcXG4gIC0tY29sb3Itc2lkZWJhci1ob3ZlcjogIzg5YzJkOTtcXG4gIC0tY29sb3ItdG9kby1sb3c6IGdyZWVuO1xcbiAgLS1jb2xvci10b2RvLW1lZDogb3JhbmdlO1xcbiAgLS1jb2xvci10b2RvLWhpZ2g6IHJlZDtcXG4gIC0tY29sb3ItcmVkLWZpbHRlcjogaW52ZXJ0KDI4JSkgc2VwaWEoOTklKSBzYXR1cmF0ZSg3Mzk5JSkgaHVlLXJvdGF0ZSgzNTdkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTE1JSk7XFxuXFxuICAtLWZvbnQtZmMtbWFpbjogYmxhY2s7XFxuICAtLWZvbnQtZmMtc2Vjb25kYXJ5OiB3aGl0ZTtcXG5cXG4gIC0tZm9udC1mei1uYXY6IDEuNHJlbTtcXG4gIC0tZm9udC1mei1wcm9qZWN0czogMXJlbTtcXG4gIC0tZm9udC1mei1wcm9qZWN0cy1pbmRpY2F0b3I6IDAuNzVyZW07XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFVidW50dTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaGVhZGVyIGhlYWRlcicgJ25hdiB0b2RvJztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1mYy1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuaGVhZGVyIC5zaWRlYmFyLWJ0biB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5zaWRlYmFyLWJ0biBpbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDIuM3JlbTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG5uYXYge1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICByaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuNXMgZWFzZTtcXG4gIHBhZGRpbmc6IDFyZW0gMC43cmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LWZ6LW5hdik7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxubmF2LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHJpZ2h0OiAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbm5hdiB1bCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5uYXYgdWwgbGk6bm90KC5wcm9qZWN0cykge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiB1bCBsaTpub3QoLnByb2plY3RzKS5hY3RpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5uYXYgdWwgbGk6bm90KC5wcm9qZWN0cykgc3BhbjpmaXJzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxubmF2IHVsIGxpOm5vdCgucHJvamVjdHMpIHNwYW46bGFzdC1vZi10eXBlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWluLXdpZHRoOiAxLjNyZW07XFxuICBtaW4taGVpZ2h0OiAxLjNyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtZnotcHJvamVjdHMtaW5kaWNhdG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNpZGViYXItaW5kaWNhdG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWZjLXNlY29uZGFyeSk7XFxufVxcblxcbm5hdiB1bCBsaTpub3QoLnByb2plY3RzKSBzcGFuLm5vdG9kbzpsYXN0LW9mLXR5cGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5uYXYgdWwgbGkucHJvamVjdHMge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5uYXYgdWwgbGkucHJvamVjdHMgdWwgbGk6Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbm5hdiBsaSB1bC5wcm9qZWN0cy1jb250YWluZXIgbGkge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtZnotcHJvamVjdHMpO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbm5hdiB1bCAucHJvamVjdHMtY29udGFpbmVyIC5hZGQtcHJvamVjdCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAwcmVtO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiB0b2RvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLnByb2pUaXRsZSBoMyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEuOHJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCk7IC8qIGVhc2VPdXRRdWFkICovXFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbS5sb3cge1xcbiAgYm94LXNoYWRvdzogM3B4IDBweCAwcHggdmFyKC0tY29sb3ItdG9kby1sb3cpIGluc2V0LCAycHggMnB4IDJweCAwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbS5tZWQge1xcbiAgYm94LXNoYWRvdzogM3B4IDBweCAwcHggdmFyKC0tY29sb3ItdG9kby1tZWQpIGluc2V0LCAycHggMnB4IDJweCAwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbS5oaWdoIHtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IHZhcigtLWNvbG9yLXRvZG8taGlnaCkgaW5zZXQsIDJweCAycHggMnB4IDBweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5pdGVtLmRvbmUge1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbSAuY2hlY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4taW5saW5lOiAwcmVtIDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5pdGVtIC5jaGVjayBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0gLnRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0gLmRhdGUge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0gLmJ0bi1jb250YWluZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5pdGVtIC5idG4tY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGZpbHRlcjogdmFyKC0tY29sb3ItcmVkLWZpbHRlcik7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbS5hZGQtdG9kbyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5tb2RhbCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwdncgcmdiKDAgMCAwIC8gMC41KTtcXG4gIG1pbi13aWR0aDogMzBjaDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tb2RhbDo6YmFja2Ryb3Age1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsW29wZW5dIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgNTAwbXMgZm9yd2FyZHMsIGZhZGUtaW4gNTAwbXMgZm9yd2FyZHM7XFxufVxcblxcbi5tb2RhbFtjbG9zaW5nXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgaW5zZXQ6IDA7XFxuICBhbmltYXRpb246IGZhZGUtb3V0IDUwMG1zIGZvcndhcmRzO1xcbn1cXG5cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAuZm9ybS1jb250cm9sIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5tb2RhbCBmb3JtIC5mb3JtLWNvbnRyb2wgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxLjZyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAuZm9ybS1jb250cm9sICNwcm9qZWN0IHtcXG4gIHBhZGRpbmctaW5saW5lOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tb2RhbCBmb3JtIGlucHV0W25hbWU9J3RpdGxlJ10ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gIHBhZGRpbmctaW5saW5lOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJyZW0gMC42cmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIxXFxcIl0gKyBzcGFuIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRvZG8tbG93KTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWxvdyk7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdmFsdWU9XFxcIjFcXFwiXTpjaGVja2VkICsgc3BhbixcXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIxXFxcIl0gKyBzcGFuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tbG93KTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWZjLXNlY29uZGFyeSk7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdmFsdWU9XFxcIjJcXFwiXSArIHNwYW4ge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdG9kby1tZWQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tbWVkKTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiMlxcXCJdOmNoZWNrZWQgKyBzcGFuLFxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdmFsdWU9XFxcIjJcXFwiXSArIHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1tZWQpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtZmMtc2Vjb25kYXJ5KTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiM1xcXCJdICsgc3BhbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10b2RvLWhpZ2gpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRvZG8taGlnaCk7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdmFsdWU9XFxcIjNcXFwiXTpjaGVja2VkICsgc3BhbixcXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIzXFxcIl0gKyBzcGFuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8taGlnaCk7XFxuICBjb2xvcjogdmFyKC0tZm9udC1mYy1zZWNvbmRhcnkpO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAuZm9ybS1jb250cm9sOmxhc3Qtb2YtdHlwZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLmZvcm0tY29udHJvbDpsYXN0LW9mLXR5cGUgPiBidXR0b24ge1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICB3aWR0aDogbWluKDEwMHB4LCAzNSUpO1xcbiAgaGVpZ2h0OiAyLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAuZm9ybS1jb250cm9sOmxhc3Qtb2YtdHlwZSA+IGJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtZmMtc2Vjb25kYXJ5KTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcbiAgI2NvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzJjaCAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaGVhZGVyIGhlYWRlcicgJ25hdiB0b2RvJztcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gIH1cXG5cXG4gIGhlYWRlciAuc2lkZWJhci1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgcmlnaHQ6IDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgfVxcblxcbiAgbmF2LmFjdGl2ZSB7XFxuICAgIHJpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgbmF2IHVsIGxpOm5vdCgucHJvamVjdHMpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2lkZWJhci1ob3Zlcik7XFxuICB9XFxuXFxuICAudG9kby1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBhZGRpbmc6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC50b2RvLWNvbnRhaW5lciAuaXRlbSAuYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtbGVmdCAzNTBtcyBmb3J3YXJkcywgZmFkZS1pbiAzNTBtcyBmb3J3YXJkcztcXG4gIH1cXG5cXG4gIC50b2RvLWNvbnRhaW5lciAuaXRlbTpob3ZlciA+IC5idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAudG9kby1jb250YWluZXIgLml0ZW0uYWRkLXRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaWRlYmFyLWhvdmVyKTtcXG4gIH1cXG5cXG4gIC50b2RvLWNvbnRhaW5lciAuaXRlbTpub3QoLmRvbmUpOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gIH1cXG5cXG4gIC5tb2RhbCB7XFxuICAgIG1pbi13aWR0aDogNjBjaDtcXG4gIH1cXG5cXG4gIC5tb2RhbCAubW9kYWwtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gIH1cXG5cXG4gIC5tb2RhbCBmb3JtIC5mb3JtLWNvbnRyb2w6bGFzdC1vZi10eXBlID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtbGVmdCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNv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RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1VidW50dS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci1wcmltYXJ5OiB3aGl0ZTtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjMDE0OTdjO1xcbiAgLS1jb2xvci10ZXJ0aWFyeTogI2E5ZDZlNTtcXG5cXG4gIC0tY29sb3Itc2lkZWJhci1pbmRpY2F0b3I6ICMyYTZmOTc7XFxuICAtLWNvbG9yLXNpZGViYXItaG92ZXI6ICM4OWMyZDk7XFxuICAtLWNvbG9yLXRvZG8tbG93OiBncmVlbjtcXG4gIC0tY29sb3ItdG9kby1tZWQ6IG9yYW5nZTtcXG4gIC0tY29sb3ItdG9kby1oaWdoOiByZWQ7XFxuICAtLWNvbG9yLXJlZC1maWx0ZXI6IGludmVydCgyOCUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoNzM5OSUpIGh1ZS1yb3RhdGUoMzU3ZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDExNSUpO1xcblxcbiAgLS1mb250LWZjLW1haW46IGJsYWNrO1xcbiAgLS1mb250LWZjLXNlY29uZGFyeTogd2hpdGU7XFxuXFxuICAtLWZvbnQtZnotbmF2OiAxLjRyZW07XFxuICAtLWZvbnQtZnotcHJvamVjdHM6IDFyZW07XFxuICAtLWZvbnQtZnotcHJvamVjdHMtaW5kaWNhdG9yOiAwLjc1cmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBVYnVudHU7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlciBoZWFkZXInICduYXYgdG9kbyc7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtZmMtc2Vjb25kYXJ5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmhlYWRlciAuc2lkZWJhci1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAuc2lkZWJhci1idG4gaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAyLjNyZW07XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxubmF2IHtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcmlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiByaWdodCAwLjVzIGVhc2U7XFxuICBwYWRkaW5nOiAxcmVtIDAuN3JlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1mei1uYXYpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbm5hdi5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICByaWdodDogMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubmF2IHVsIGxpOm5vdCgucHJvamVjdHMpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYgdWwgbGk6bm90KC5wcm9qZWN0cykuYWN0aXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogdXJsKCcuL2Fzc2V0cy8vY2hldnJvbi1yaWdodC5zdmcnKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxubmF2IHVsIGxpOm5vdCgucHJvamVjdHMpIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbm5hdiB1bCBsaTpub3QoLnByb2plY3RzKSBzcGFuOmxhc3Qtb2YtdHlwZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1pbi13aWR0aDogMS4zcmVtO1xcbiAgbWluLWhlaWdodDogMS4zcmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LWZ6LXByb2plY3RzLWluZGljYXRvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaWRlYmFyLWluZGljYXRvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1mYy1zZWNvbmRhcnkpO1xcbn1cXG5cXG5uYXYgdWwgbGk6bm90KC5wcm9qZWN0cykgc3Bhbi5ub3RvZG86bGFzdC1vZi10eXBlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxubmF2IHVsIGxpLnByb2plY3RzIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxubmF2IHVsIGxpLnByb2plY3RzIHVsIGxpOmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG5uYXYgbGkgdWwucHJvamVjdHMtY29udGFpbmVyIGxpIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LWZ6LXByb2plY3RzKTtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG5uYXYgdWwgLnByb2plY3RzLWNvbnRhaW5lciAuYWRkLXByb2plY3Qge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMHJlbTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogdG9kbztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5wcm9qVGl0bGUgaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxLjhyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApOyAvKiBlYXNlT3V0UXVhZCAqL1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0ubG93IHtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IHZhcigtLWNvbG9yLXRvZG8tbG93KSBpbnNldCwgMnB4IDJweCAycHggMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0ubWVkIHtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IHZhcigtLWNvbG9yLXRvZG8tbWVkKSBpbnNldCwgMnB4IDJweCAycHggMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0uaGlnaCB7XFxuICBib3gtc2hhZG93OiAzcHggMHB4IDBweCB2YXIoLS1jb2xvci10b2RvLWhpZ2gpIGluc2V0LCAycHggMnB4IDJweCAwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbS5kb25lIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0gLmNoZWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWlubGluZTogMHJlbSAwLjVyZW07XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbSAuY2hlY2sgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5pdGVtIC50aXRsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5pdGVtIC5kYXRlIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5pdGVtIC5idG4tY29udGFpbmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuaXRlbSAuYnRuLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBmaWx0ZXI6IHZhcigtLWNvbG9yLXJlZC1maWx0ZXIpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLml0ZW0uYWRkLXRvZG8ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwMHZ3IHJnYigwIDAgMCAvIDAuNSk7XFxuICBtaW4td2lkdGg6IDMwY2g7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWw6OmJhY2tkcm9wIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5tb2RhbFtvcGVuXSB7XFxuICBhbmltYXRpb246IHNsaWRlLXVwIDUwMG1zIGZvcndhcmRzLCBmYWRlLWluIDUwMG1zIGZvcndhcmRzO1xcbn1cXG5cXG4ubW9kYWxbY2xvc2luZ10ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGluc2V0OiAwO1xcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCA1MDBtcyBmb3J3YXJkcztcXG59XFxuXFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm1vZGFsIGZvcm0gLmZvcm0tY29udHJvbCB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAuZm9ybS1jb250cm9sIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMS42cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLmZvcm0tY29udHJvbCAjcHJvamVjdCB7XFxuICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGVydGlhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubW9kYWwgZm9ybSBpbnB1dFtuYW1lPSd0aXRsZSddIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5tb2RhbCBmb3JtIHRleHRhcmVhIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5tb2RhbCBmb3JtIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdGVydGlhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4ycmVtIDAuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiMVxcXCJdICsgc3BhbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci10b2RvLWxvdyk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdG9kby1sb3cpO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIxXFxcIl06Y2hlY2tlZCArIHNwYW4sXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiMVxcXCJdICsgc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWxvdyk7XFxuICBjb2xvcjogdmFyKC0tZm9udC1mYy1zZWNvbmRhcnkpO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIyXFxcIl0gKyBzcGFuIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRvZG8tbWVkKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10b2RvLW1lZCk7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdmFsdWU9XFxcIjJcXFwiXTpjaGVja2VkICsgc3BhbixcXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIyXFxcIl0gKyBzcGFuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tbWVkKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWZjLXNlY29uZGFyeSk7XFxufVxcblxcbi5tb2RhbCBmb3JtIC5wcmlvcml0eS1jb250YWluZXIgaW5wdXRbdmFsdWU9XFxcIjNcXFwiXSArIHNwYW4ge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItdG9kby1oaWdoKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWhpZ2gpO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSAucHJpb3JpdHktY29udGFpbmVyIGlucHV0W3ZhbHVlPVxcXCIzXFxcIl06Y2hlY2tlZCArIHNwYW4sXFxuLm1vZGFsIGZvcm0gLnByaW9yaXR5LWNvbnRhaW5lciBpbnB1dFt2YWx1ZT1cXFwiM1xcXCJdICsgc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWhpZ2gpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtZmMtc2Vjb25kYXJ5KTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLmZvcm0tY29udHJvbDpsYXN0LW9mLXR5cGUge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5tb2RhbCBmb3JtIC5mb3JtLWNvbnRyb2w6bGFzdC1vZi10eXBlID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgd2lkdGg6IG1pbigxMDBweCwgMzUlKTtcXG4gIGhlaWdodDogMi42cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gLmZvcm0tY29udHJvbDpsYXN0LW9mLXR5cGUgPiBidXR0b25bdHlwZT0nc3VibWl0J10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWZjLXNlY29uZGFyeSk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXG4gICNjb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyY2ggM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlciBoZWFkZXInICduYXYgdG9kbyc7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICB9XFxuXFxuICBoZWFkZXIgLnNpZGViYXItYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIHJpZ2h0OiAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgei1pbmRleDogMDtcXG4gIH1cXG5cXG4gIG5hdi5hY3RpdmUge1xcbiAgICByaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIG5hdiB1bCBsaTpub3QoLnByb2plY3RzKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNpZGViYXItaG92ZXIpO1xcbiAgfVxcblxcbiAgLnRvZG8tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nOiAyLjVyZW07XFxuICB9XFxuXFxuICAudG9kby1jb250YWluZXIgLml0ZW0gLmJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbmltYXRpb246IHNsaWRlLWxlZnQgMzUwbXMgZm9yd2FyZHMsIGZhZGUtaW4gMzUwbXMgZm9yd2FyZHM7XFxuICB9XFxuXFxuICAudG9kby1jb250YWluZXIgLml0ZW06aG92ZXIgPiAuYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLnRvZG8tY29udGFpbmVyIC5pdGVtLmFkZC10b2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2lkZWJhci1ob3Zlcik7XFxuICB9XFxuXFxuICAudG9kby1jb250YWluZXIgLml0ZW06bm90KC5kb25lKTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICB9XFxuXFxuICAubW9kYWwge1xcbiAgICBtaW4td2lkdGg6IDYwY2g7XFxuICB9XFxuXFxuICAubW9kYWwgLm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICB9XFxuXFxuICAubW9kYWwgZm9ybSAuZm9ybS1jb250cm9sOmxhc3Qtb2YtdHlwZSA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS11cCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCByZW1vdmVDaGlsZHJlbiA9IChwYXJlbnRFbCkgPT4ge1xuICB3aGlsZSAocGFyZW50RWwuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKHBhcmVudEVsLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlV3JhcHBpbmdEaXYgPSAoY2xhc3NOYW1lLCBjaGlsZEVsQXJyKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBpZiAoY2hpbGRFbEFyciAmJiBjaGlsZEVsQXJyLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGNvbnN0IGVsIG9mIGNoaWxkRWxBcnIpIHtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkaXY7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSW5wdXQgPSAoe2xhYmVsID0gJycsIGlkLCB0eXBlLCBzaWJsaW5nRWwsIC4uLmF0dHJpYnV0ZXN9KSA9PiB7XG4gIGNvbnN0IHJldHVybkFyciA9IFtdO1xuICBjb25zdCBsYWJlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgaWYgKGxhYmVsKSB7XG4gICAgbGFiZWxFbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcbiAgICBsYWJlbEVsLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgcmV0dXJuQXJyLnB1c2gobGFiZWxFbCk7XG4gIH1cblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICBpZiAoaWQpIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICBsYWJlbEVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBpZiAoc2libGluZ0VsKSBsYWJlbEVsLmFwcGVuZENoaWxkKHNpYmxpbmdFbCk7XG4gICAgaWYgKCFsYWJlbCkgcmV0dXJuQXJyLnB1c2gobGFiZWxFbCk7XG4gIH0gZWxzZSByZXR1cm5BcnIucHVzaChpbnB1dCk7XG5cbiAgcmV0dXJuIHJldHVybkFycjtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b24gPSAodHlwZSwgY29udGVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gIGJ0bi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIGlmIChjbGFzc05hbWUpIGJ0bi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiBidG47XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSW1nQnV0dG9uID0gKHt1cmwsIGNsYXNzTmFtZSwgY2xpY2tFdmVudCwgcGFyZW50VHlwZSA9ICdkaXYnLCBwYXJlbnRDbGFzc30pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYXJlbnRUeXBlKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQocGFyZW50Q2xhc3MpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICBpZiAoY2xhc3NOYW1lKSBpbWcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0V2ZW50KTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcbiAgcmV0dXJuIGRhdGU7XG59O1xuIiwiY29uc3QgUHViU3ViID0gKCgpID0+IHtcbiAgY29uc3QgZXZlbnRPYmogPSB7fTtcblxuICBjb25zdCBwdWJsaXNoID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICAgIGlmICghZXZlbnRPYmpbZXZlbnROYW1lXSkgcmV0dXJuO1xuICAgIGV2ZW50T2JqW2V2ZW50TmFtZV0uZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgIGZuKGRhdGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGZuKSA9PiB7XG4gICAgaWYgKCFldmVudE9ialtldmVudE5hbWVdKSB7XG4gICAgICBldmVudE9ialtldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIGV2ZW50T2JqW2V2ZW50TmFtZV0ucHVzaChmbik7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAoZXZlbnROYW1lLCBmbikgPT4ge1xuICAgIGlmICghZXZlbnRPYmpbZXZlbnROYW1lXSkgcmV0dXJuO1xuICAgIGV2ZW50T2JqW2V2ZW50TmFtZV0uZmlsdGVyKChldmVudEZuKSA9PiBldmVudEZuICE9PSBmbik7XG4gIH07XG5cbiAgcmV0dXJuIHtwdWJsaXNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFB1YlN1YjtcbiIsImltcG9ydCBQdWJTdWIgZnJvbSAnLi4vaGVscGVyL3B1YnN1Yic7XG5pbXBvcnQge3JlbW92ZUNoaWxkcmVuLCBjcmVhdGVXcmFwcGluZ0RpdiwgY3JlYXRlSW5wdXQsIGNyZWF0ZUJ1dHRvbn0gZnJvbSAnLi4vaGVscGVyL2hlbHBlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcblxuY29uc3QgTW9kYWwgPSAoJG1vZGFsKSA9PiB7XG4gIGNvbnN0ICRjbG9zZUJ0biA9ICRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuIGltZzpsYXN0LW9mLXR5cGUnKTtcbiAgY29uc3QgJGRlbGV0ZUJ0biA9ICRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuIGltZzpmaXJzdC1vZi10eXBlJyk7XG5cbiAgY29uc3QgJGZvcm0gPSAkbW9kYWwucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICBjb25zdCAkdGl0bGUgPSAkbW9kYWwucXVlcnlTZWxlY3RvcignaDMnKTtcblxuICBjb25zdCBjcmVhdGVGb3JtID0gKHR5cGUsIHtwcm9qZWN0TmFtZSwgdGl0bGUsIGRlc2MsIHByaW9yaXR5ID0gMSwgZHVlfSA9IHt9KSA9PiB7XG4gICAgcmVtb3ZlQ2hpbGRyZW4oJGZvcm0pO1xuICAgIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICRkZWxldGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgJHRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcblxuICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZUlucHV0KHtcbiAgICAgICAgbGFiZWw6ICdQcm9qZWN0OicsXG4gICAgICAgIGlkOiAncHJvamVjdCcsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgbmFtZTogJ3Byb2plY3QnLFxuICAgICAgICByZXF1aXJlZDogJycsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHByb2plY3REaXYgPSBjcmVhdGVXcmFwcGluZ0RpdignZm9ybS1jb250cm9sJyk7XG4gICAgICBmb3IgKGNvbnN0IGVsIG9mIHByb2plY3QpIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgJGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfSBlbHNlIHtcbiAgICAgICRkZWxldGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IHR5cGUgPT09ICd2aWV3VGFzaycgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICAgIC8vICR0aXRsZS50ZXh0Q29udGVudCA9IHR5cGUgPT09ICd2aWV3VGFzaycgPyAnVmlldyBUYXNrJyA6ICdBZGQgTmV3IFRhc2snO1xuICAgICAgJHRpdGxlLnRleHRDb250ZW50ID0gYGA7XG5cbiAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVJbnB1dCh7XG4gICAgICAgIGxhYmVsOiAnUHJvamVjdDonLFxuICAgICAgICBpZDogJ3Byb2plY3QnLFxuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogJ3Byb2plY3QnLFxuICAgICAgICB2YWx1ZTogcHJvamVjdE5hbWUsXG4gICAgICAgIHJlYWRvbmx5OiAnJyxcbiAgICAgICAgcmVxdWlyZWQ6ICcnLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlV3JhcHBpbmdEaXYoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0WzFdKTtcblxuICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUlucHV0KHtcbiAgICAgICAgaWQ6ICd0aXRsZScsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgbmFtZTogJ3RpdGxlJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJyxcbiAgICAgICAgcGFyZW50Q2xhc3M6ICdmb3JtLWNvbnRyb2wnLFxuICAgICAgICByZXF1aXJlZDogJycsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHRpdGxlRGl2ID0gY3JlYXRlV3JhcHBpbmdEaXYoJ2Zvcm0tY29udHJvbCcsIFt0aXRsZUlucHV0WzBdXSk7XG5cbiAgICAgIGNvbnN0IGRlc2NBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIGRlc2NBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsIDEwKTtcbiAgICAgIGRlc2NBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzYycpO1xuICAgICAgZGVzY0FyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2MnKTtcbiAgICAgIGRlc2NBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcbiAgICAgIGRlc2NBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICBjb25zdCBkZXNjRGl2ID0gY3JlYXRlV3JhcHBpbmdEaXYoJ2Zvcm0tY29udHJvbCcsIFtkZXNjQXJlYV0pO1xuXG4gICAgICBjb25zdCBkdWVJbnB1dCA9IGNyZWF0ZUlucHV0KHtcbiAgICAgICAgbGFiZWw6ICdEdWU6JyxcbiAgICAgICAgaWQ6ICdkdWUnLFxuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIG5hbWU6ICdkdWUnLFxuICAgICAgICBwYXJlbnRDbGFzczogJ2Zvcm0tY29udHJvbCcsXG4gICAgICAgIHJlcXVpcmVkOiAnJyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZHVlRGl2ID0gY3JlYXRlV3JhcHBpbmdEaXYoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgZm9yIChjb25zdCBlbCBvZiBkdWVJbnB1dCkgZHVlRGl2LmFwcGVuZENoaWxkKGVsKTtcblxuICAgICAgLy8gUHJpb3JpdHkgUmFkaW8gYnV0dG9uc1xuICAgICAgY29uc3Qgb3B0U3BhbkxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIG9wdFNwYW5Mb3cudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgIGNvbnN0IG9wdExvdyA9IGNyZWF0ZUlucHV0KHtcbiAgICAgICAgc2libGluZ0VsOiBvcHRTcGFuTG93LFxuICAgICAgICBpZDogJ2xvdycsXG4gICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgIG5hbWU6ICdwcmlvcml0eScsXG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgICBjaGVja2VkOiAnJyxcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb3B0U3Bhbk1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIG9wdFNwYW5NZWQudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgIGNvbnN0IG9wdE1lZCA9IGNyZWF0ZUlucHV0KHtzaWJsaW5nRWw6IG9wdFNwYW5NZWQsIGlkOiAnbWVkaXVtJywgdHlwZTogJ3JhZGlvJywgbmFtZTogJ3ByaW9yaXR5JywgdmFsdWU6IDJ9KTtcbiAgICAgIGNvbnN0IG9wdFNwYW5IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgb3B0U3BhbkhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICBjb25zdCBvcHRIaWdoID0gY3JlYXRlSW5wdXQoe3NpYmxpbmdFbDogb3B0U3BhbkhpZ2gsIGlkOiAnaGlnaCcsIHR5cGU6ICdyYWRpbycsIG5hbWU6ICdwcmlvcml0eScsIHZhbHVlOiAzfSk7XG4gICAgICBjb25zdCBwcmlvcml0eURpdiA9IGNyZWF0ZVdyYXBwaW5nRGl2KCdmb3JtLWNvbnRyb2wnLCBbb3B0TG93WzBdLCBvcHRNZWRbMF0sIG9wdEhpZ2hbMF1dKTtcbiAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNvbnRhaW5lcicpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ3ZpZXdUYXNrJykge1xuICAgICAgICB0aXRsZUlucHV0WzBdLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aXRsZSk7XG4gICAgICAgIGRlc2NBcmVhLnRleHRDb250ZW50ID0gZGVzYztcbiAgICAgICAgZHVlSW5wdXRbMV0uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGR1ZSk7XG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgIC8vIG9wdExvd1swXS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICAgIG9wdExvd1swXS5jbGljaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgLy8gb3B0TWVkWzBdLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICAgICAgb3B0TWVkWzBdLmNsaWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIG9wdEhpZ2hbMF0uZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgICAgICBvcHRIaWdoWzBdLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgICAgJGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0Rpdik7XG4gICAgICAkZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAgICRmb3JtLmFwcGVuZENoaWxkKGR1ZURpdik7XG4gICAgICAkZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG4gICAgfVxuICAgIC8vIE1vZGFsIEJ1dHRvbnNcbiAgICBjb25zdCBzYXZlQnRuID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCAnU2F2ZScpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ2FuY2VsJyk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsLCB7b25jZTogdHJ1ZX0pO1xuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGNyZWF0ZVdyYXBwaW5nRGl2KCdmb3JtLWNvbnRyb2wnLCBbc2F2ZUJ0biwgY2xvc2VCdG5dKTtcbiAgICAkZm9ybS5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgJG1vZGFsLnNldEF0dHJpYnV0ZSgnY2xvc2luZycsICcnKTtcbiAgICAkbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdhbmltYXRpb25lbmQnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICAkbW9kYWwucmVtb3ZlQXR0cmlidXRlKCdjbG9zaW5nJyk7XG4gICAgICAgICRtb2RhbC5jbG9zZSgpO1xuICAgICAgfSxcbiAgICAgIHtvbmNlOiB0cnVlfVxuICAgICk7XG4gICAgJG1vZGFsLmNsb3NlKCk7XG4gIH07XG5cbiAgJGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbiAgY29uc3QgaGFuZGxlUHJvamVjdFN1Ym1pdCA9IChlKSA9PiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGUudGFyZ2V0KS5lbnRyaWVzKCkpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCduZXdQcm9qZWN0JywgUHJvamVjdChmb3JtRGF0YS5wcm9qZWN0KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGFza1N1Ym1pdCA9IChlKSA9PiB7XG4gICAgY29uc3Qge3RpdGxlLCBkZXNjLCBwcmlvcml0eSwgZHVlfSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpLmVudHJpZXMoKSk7XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvZG8oe3RpdGxlLCBkZXNjLCBwcmlvcml0eSwgZHVlfSlcbiAgICBQdWJTdWIucHVibGlzaCgnbmV3VGFza1N1Ym1pdCcsIG5ld1RvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2tNb2RhbCA9ICh7cHJvamVjdE5hbWV9KSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0TmFtZSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ05vIHByb2plY3ROYW1lJyk7XG4gICAgY3JlYXRlRm9ybSgnYWRkVGFzaycsIHtwcm9qZWN0TmFtZX0pO1xuICAgICRtb2RhbC5jbG9zZSgpO1xuICAgICRtb2RhbC5zaG93TW9kYWwoKTtcbiAgICAkZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVUYXNrU3VibWl0LCB7b25jZTogdHJ1ZX0pO1xuICAgIGNvbnNvbGUubG9nKCdBREQgT1BFTkVEIEZPUiBQUk9KRUNUOicsIHByb2plY3ROYW1lKVxuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgICBjcmVhdGVGb3JtKCdwcm9qZWN0Jyk7XG4gICAgJG1vZGFsLmNsb3NlKCk7XG4gICAgJG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVByb2plY3RTdWJtaXQsIHtvbmNlOiB0cnVlfSk7XG4gIH07XG5cbiAgY29uc3Qgdmlld1Rhc2tNb2RhbCA9ICh7cHJvamVjdE5hbWUsIHRpdGxlLCBkZXNjLCBwcmlvcml0eSwgZHVlfSkgPT4ge1xuICAgIGlmICghcHJvamVjdE5hbWUpIHJldHVybiBjb25zb2xlLmVycm9yKCdObyBwcm9qZWN0TmFtZScpO1xuICAgIGNyZWF0ZUZvcm0oJ3ZpZXdUYXNrJywge3Byb2plY3ROYW1lLCB0aXRsZSwgZGVzYywgcHJpb3JpdHksIGR1ZX0pO1xuICAgICRtb2RhbC5jbG9zZSgpO1xuICAgICRtb2RhbC5zaG93TW9kYWwoKTtcbiAgICAkZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVUYXNrU3VibWl0LCB7b25jZTogdHJ1ZX0pO1xuICB9O1xuXG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ29wZW5BZGRQcm9qZWN0TW9kYWwnLCBhZGRQcm9qZWN0TW9kYWwpO1xuICBQdWJTdWIuc3Vic2NyaWJlKCdvcGVuQWRkVGFza01vZGFsJywgYWRkVGFza01vZGFsKTtcbiAgUHViU3ViLnN1YnNjcmliZSgnb3BlblZpZXdUYXNrTW9kYWwnLCB2aWV3VGFza01vZGFsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiY29uc3QgUHJvamVjdCA9ICh0aXRsZSwgY29tcGxldGVkQ291bnQgPSAwKSA9PiB7XG4gIGxldCB0b2RvQXJyID0gW107XG5cbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgZm91bmQgPSB0b2RvQXJyLmZpbmQoKGVsKSA9PiBlbCA9PT0gdG9kbyk7XG4gICAgaWYgKGZvdW5kKSByZXR1cm4gYWxlcnQoJ1JlcGVhdGVkIHRhc2sgbmFtZScpO1xuICAgIHRvZG9BcnIucHVzaCh0b2RvKTtcbiAgfTtcblxuICBjb25zdCBnZXRUb2RvID0gKHRpdGxlKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9BcnIuZmluZCgoZWwpID0+IGVsLmdldFRvZG8oKS50aXRsZSA9PT0gdGl0bGUpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IGxlbiA9IHRvZG9BcnIubGVuZ3RoO1xuICAgIGNvbnN0IGZpbHRlcmVkQXJyID0gdG9kb0Fyci5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gdG9kbyk7XG5cbiAgICBpZiAobGVuICE9PSAwICYmIGZpbHRlcmVkQXJyLmxlbmd0aCA9PT0gbGVuKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAodG9kby5nZXRDb21wbGV0ZWQoKSkgY29tcGxldGVkQ291bnQgLT0gMTtcbiAgICB0b2RvQXJyID0gZmlsdGVyZWRBcnI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0VG9kb0FyciA9ICgpID0+IHRvZG9BcnI7XG4gIFxuICBjb25zdCB0b2dnbGVDb21wbGV0ZVRhc2sgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IHRvZG8udG9nZ2xlQ29tcGxldGVkKCk7XG4gICAgY29tcGxldGVkQ291bnQgPSBjb21wbGV0ZWQgPyBjb21wbGV0ZWRDb3VudCArIDEgOiBjb21wbGV0ZWRDb3VudCAtIDE7XG4gICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgfTtcbiAgXG4gIGNvbnN0IGdldFNpemUgPSAoKSA9PiB0b2RvQXJyLmxlbmd0aDtcbiAgY29uc3QgZ2V0Q29tcGxldGVkQ291bnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNvbXBsZXRlZENvdW50O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVG9kbyxcbiAgICBkZWxldGVUb2RvLFxuICAgIGdldFRpdGxlLFxuICAgIGdldFRvZG9BcnIsXG4gICAgZ2V0U2l6ZSxcbiAgICB0b2dnbGVDb21wbGV0ZVRhc2ssXG4gICAgZ2V0VG9kbyxcbiAgICBnZXRDb21wbGV0ZWRDb3VudCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG5cbi8vIGNvbnN0IHRlc3QgPSBQcm9qZWN0KCd0ZXN0UHJvamVjdCcpO1xuXG4vLyB0ZXN0LmFkZFRvZG8oe3RpdGxlOid0ZXN0J30pXG4vLyB0ZXN0LmFkZFRvZG8oe3RpdGxlOid0ZXN0Mid9KVxuLy8gdGVzdC5hZGRUb2RvKHt0aXRsZTondGVzdDMnfSlcbi8vIGNvbnN0IGFyciA9IHRlc3QuZ2V0VG9kb0FycigpO1xuXG4vLyBjb25zb2xlLmxvZyh0ZXN0LmdldFRvZG9BcnIoKSlcbi8vIGNvbnNvbGUubG9nKHRlc3QuZ2V0U2l6ZSgpKVxuLy8gY29uc29sZS5sb2codGVzdC5nZXRUaXRsZSgpKVxuXG4vLyBhcnJbMV0udGl0bGUgPSAndGhpcyBpcyBjaGFuZ2VkJztcblxuLy8gY29uc29sZS5sb2codGVzdC5nZXRUb2RvQXJyKCkpXG4iLCJjb25zdCBUb2RvID0gKHt0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSA9IDF9KSA9PiB7XG4gIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+ICh0aXRsZSA9IG5ld1RpdGxlKTtcbiAgY29uc3Qgc2V0RGVzYyA9IChuZXdEZXNjKSA9PiAoZGVzYyA9IG5ld0Rlc2MpO1xuICBjb25zdCBzZXREdWUgPSAobmV3RHVlKSA9PiAoZHVlID0gbmV3RHVlKTtcbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IChwcmlvcml0eSA9IG5ld1ByaW9yaXR5KTtcbiAgY29uc3QgZ2V0Q29tcGxldGVkID0gKCkgPT4gY29tcGxldGVkO1xuICBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcbiAgICByZXR1cm4gY29tcGxldGVkO1xuICB9O1xuICBjb25zdCBnZXRUb2RvID0gKCkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIGNvbXBsZXRlZH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRUaXRsZSxcbiAgICBzZXREZXNjLFxuICAgIHNldER1ZSxcbiAgICBzZXRQcmlvcml0eSxcbiAgICBnZXRUb2RvLFxuICAgIGdldENvbXBsZXRlZCxcbiAgICB0b2dnbGVDb21wbGV0ZWQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuXG4vLyBjb25zdCB0ZXN0ID0gVG9kbygndGVzdHRpdGxlJywgJ3Rlc3REZXNjJywgbmV3IERhdGUoMDIgLyAxMyAvIDIwKSk7XG4vLyBjb25zdCB0ZXN0MiA9IFRvZG8oJ3Rlc3R0aXRsZTInLCAndGVzdERlc2MyJywgbmV3IERhdGUoMDIgLyAxMyAvIDIxKSwgMik7XG5cbi8vIGNvbnNvbGUubG9nKHRlc3QuZ2V0VG9kbygpKTtcbi8vIGNvbnNvbGUubG9nKHRlc3QyLmdldFRvZG8oKSk7XG5cbi8vIHRlc3QyLnNldERlc2MoJ3Rlc3REZXNjMycpO1xuLy8gY29uc29sZS5sb2codGVzdDIuZ2V0VG9kbygpKTtcbiIsImltcG9ydCBQdWJTdWIgZnJvbSAnLi4vaGVscGVyL3B1YnN1Yic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcbmltcG9ydCB7cmVtb3ZlQ2hpbGRyZW4sIGNyZWF0ZUltZ0J1dHRvbiwgY3JlYXRlV3JhcHBpbmdEaXYsIGNyZWF0ZUlucHV0LCBmb3JtYXREYXRlfSBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcblxuY29uc3QgaGFuZGxlVGFiQ2xpY2sgPSAoZSkgPT4ge1xuICBjb25zdCBsaSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gIGlmIChsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG5cbiAgY29uc3QgY3VyclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2IHVsIGxpOm5vdCgucHJvamVjdHMpOm5vdCguYWRkLXByb2plY3QpLmFjdGl2ZScpO1xuICBjdXJyU2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGxpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0c1VJLmdldFByb2plY3QodGl0bGUpO1xuICBpZiAocHJvamVjdCkgUHViU3ViLnB1Ymxpc2goJ2NoYW5nZUN1cnJQcm9qZWN0JywgcHJvamVjdCk7XG59O1xuXG5jb25zdCBQcm9qZWN0c1VJID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBuZXcgTWFwKCk7XG4gIGxldCBjdXJyUHJvamVjdCA9IG51bGw7XG5cbiAgY29uc3QgJHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwgLnByb2plY3RzLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG9Db3VudCA9IChwcm9qZWN0LCBlbCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gcHJvamVjdC5nZXRTaXplKCkgLSBwcm9qZWN0LmdldENvbXBsZXRlZENvdW50KCk7XG4gICAgaWYgKGNvdW50ID09PSAwKSBlbC5jbGFzc0xpc3QuYWRkKCdub3RvZG8nKTtcbiAgICBlbHNlIHtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gY291bnQ7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdub3RvZG8nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdEVsZW1lbnQgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBjb25zdCBzcGFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3Qgc3BhblRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBzcGFuVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5nZXQodGl0bGUpO1xuICAgIGlmIChwcm9qZWN0KSB1cGRhdGVUb2RvQ291bnQocHJvamVjdCwgc3BhblRvZG8pO1xuXG4gICAgbGkuYXBwZW5kQ2hpbGQoc3BhblRpdGxlKTtcbiAgICBsaS5hcHBlbmRDaGlsZChzcGFuVG9kbyk7XG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUYWJDbGljayk7XG5cbiAgICBpZiAoY3VyclByb2plY3QpIHtcbiAgICAgIGNvbnN0IGN1cnJUaXRsZSA9IGN1cnJQcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgICBpZiAoY3VyclRpdGxlID09PSB0aXRsZSkgbGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgIGlmIChwcm9qZWN0cy5oYXModGl0bGUpKSByZXR1cm4gYWxlcnQoJ1JlcGVhdGVkIFByb2plY3QgTmFtZScpO1xuICAgIHByb2plY3RzLnNldCh0aXRsZSwgcHJvamVjdCk7XG4gICAgX3JlbmRlcigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBkZWxldGVkID0gcHJvamVjdHMuZGVsZXRlKHRpdGxlKTtcbiAgICBpZiAoZGVsZXRlZCkgX3JlbmRlcigpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzLmdldCh0aXRsZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBQdWJTdWIucHVibGlzaCgnb3BlbkFkZFByb2plY3RNb2RhbCcpO1xuICB9O1xuXG4gIGNvbnN0IF9yZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5kaXIoWy4uLnByb2plY3RzLmVudHJpZXMoKV0pO1xuICAgIHJlbW92ZUNoaWxkcmVuKCRwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgoXywgdGl0bGUpID0+IHtcbiAgICAgIGlmICh0aXRsZSAhPT0gJ0hvbWUnICYmIHRpdGxlICE9PSAnVG9kYXknICYmIHRpdGxlICE9PSAnV2VlaycpIHtcbiAgICAgICAgY29uc3QgbGkgPSBjcmVhdGVQcm9qZWN0RWxlbWVudCh0aXRsZSk7XG4gICAgICAgICRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQobGkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgYnRuID0gY3JlYXRlSW1nQnV0dG9uKHtcbiAgICAgIHVybDogJy4uL3NyYy9hc3NldHMvcGx1cy5zdmcnLFxuICAgICAgY2xpY2tFdmVudDogaGFuZGxlQWRkUHJvamVjdCxcbiAgICAgIHBhcmVudFR5cGU6ICdsaScsXG4gICAgICBwYXJlbnRDbGFzczogJ2FkZC1wcm9qZWN0JyxcbiAgICB9KTtcbiAgICAkcHJvamVjdHNDb250YWluZXIuYXBwZW5kKGJ0bik7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q3VyclByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGN1cnJQcm9qZWN0ID0gcHJvamVjdDtcbiAgfTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKCduZXdQcm9qZWN0JywgYWRkUHJvamVjdCk7XG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ2NoYW5nZUN1cnJQcm9qZWN0Jywgc2V0Q3VyclByb2plY3QpO1xuICBQdWJTdWIuc3Vic2NyaWJlKCdwcm9qZWN0RGVsZXRlZCcsIGRlbGV0ZVByb2plY3QpO1xuICBQdWJTdWIuc3Vic2NyaWJlKCd0b2RvQWRkZWQnLCAoKSA9PiBfcmVuZGVyKCkpO1xuICBQdWJTdWIuc3Vic2NyaWJlKCd0b2RvRGVsZXRlZCcsICgpID0+IF9yZW5kZXIoKSk7XG4gIFB1YlN1Yi5zdWJzY3JpYmUoJ3RvZG9Db21wbGV0ZWRUb2dnbGUnLCAoKSA9PiBfcmVuZGVyKCkpO1xuXG4gIC8vIF9yZW5kZXIoKTtcbiAgcmV0dXJuIHtcbiAgICBhZGRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdCxcbiAgICBnZXRQcm9qZWN0cyxcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IHRvZG9zVUkgPSAoKCkgPT4ge1xuICBsZXQgY3VyclByb2plY3QgPSBudWxsO1xuXG4gIGNvbnN0ICR0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG5cbiAgY29uc3QgcHJpb3JpdHlNYXAgPSB7XG4gICAgJzEnOiAnbG93JyxcbiAgICAnMic6ICdtZWQnLFxuICAgICczJzogJ2hpZ2gnLFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRvZG8gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpdGVtRWwgPSBlLnRhcmdldC5jbG9zZXN0KCcuaXRlbScpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGl0ZW1FbC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zb2xlLmxvZygnZGVsZXRlIHRvZG8nLCB0b2RvVGl0bGUpO1xuXG4gICAgY29uc3QgdG9kbyA9IGN1cnJQcm9qZWN0LmdldFRvZG8odG9kb1RpdGxlKTtcbiAgICBpZiAodG9kbykge1xuICAgICAgY29uc3QgZGVsZXRlZCA9IGN1cnJQcm9qZWN0LmRlbGV0ZVRvZG8odG9kbyk7XG4gICAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICBfcmVuZGVyKCk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCd0b2RvRGVsZXRlZCcsIHRvZG8pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDb21wbGV0ZVRvZG8gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpdGVtRWwgPSBlLnRhcmdldC5jbG9zZXN0KCcuaXRlbScpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGl0ZW1FbC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICBjb25zb2xlLmxvZygnY29tcGxldGUgdG9kbycsIHRvZG9UaXRsZSk7XG5cbiAgICBjb25zdCB0b2RvID0gY3VyclByb2plY3QuZ2V0VG9kbyh0b2RvVGl0bGUpO1xuICAgIGlmICh0b2RvKSB7XG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjdXJyUHJvamVjdC50b2dnbGVDb21wbGV0ZVRhc2sodG9kbyk7XG4gICAgICBjb21wbGV0ZWQgPyBpdGVtRWwuY2xhc3NMaXN0LmFkZCgnZG9uZScpIDogaXRlbUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCd0b2RvQ29tcGxldGVkVG9nZ2xlJywgdG9kbyk7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyUHJvamVjdC5nZXRDb21wbGV0ZWRDb3VudCgpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0lNRycpIHJldHVybjtcbiAgICBjb25zdCBpdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnLml0ZW0nKTtcblxuICAgIGlmIChpdGVtICYmICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWRkLXRvZG8nKSkge1xuICAgICAgY29uc3QgdGl0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50O1xuXG4gICAgICBjb25zdCBzZWxlY3RlZFRvZG8gPSBjdXJyUHJvamVjdC5nZXRUb2RvKHRpdGxlKTtcbiAgICAgIGlmICghc2VsZWN0ZWRUb2RvKSByZXR1cm4gY29uc29sZS5lcnJvcignVE9ETyBub3QgZm91bmQuJyk7XG5cbiAgICAgIGNvbnN0IHtkdWUsIHByaW9yaXR5LCBkZXNjfSA9IHNlbGVjdGVkVG9kby5nZXRUb2RvKCk7XG4gICAgICBQdWJTdWIucHVibGlzaCgnb3BlblZpZXdUYXNrTW9kYWwnLCB7XG4gICAgICAgIHByb2plY3ROYW1lOiBjdXJyUHJvamVjdC5nZXRUaXRsZSgpLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZHVlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgZGVzYyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC10b2RvJykpIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdvcGVuQWRkVGFza01vZGFsJywge1xuICAgICAgICBwcm9qZWN0TmFtZTogY3VyclByb2plY3QuZ2V0VGl0bGUoKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVUb2RvRWxlbWVudCA9ICh7dGl0bGUsIGR1ZSwgcHJpb3JpdHksIGNvbXBsZXRlZH0pID0+IHtcbiAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUlucHV0KHt0eXBlOiAnY2hlY2tib3gnfSlbMF07XG4gICAgY29uc3QgY2hlY2tib3hEaXYgPSBjcmVhdGVXcmFwcGluZ0RpdignY2hlY2snLCBbY2hlY2tib3hdKTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDb21wbGV0ZVRvZG8pO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBjcmVhdGVXcmFwcGluZ0RpdigndGl0bGUnKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgY29uc3QgZGF0ZURpdiA9IGNyZWF0ZVdyYXBwaW5nRGl2KCdkYXRlJyk7XG4gICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUoZHVlKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUltZ0J1dHRvbih7XG4gICAgICB1cmw6ICcuLi9zcmMvYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnN2ZycsXG4gICAgICBjbGlja0V2ZW50OiBoYW5kbGVEZWxldGVUb2RvLFxuICAgICAgcGFyZW50Q2xhc3M6ICdidG4tY29udGFpbmVyJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVXcmFwcGluZ0RpdignaXRlbScsIFtjaGVja2JveERpdiwgdGl0bGVEaXYsIGRhdGVEaXYsIGRlbGV0ZUJ0bl0pO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChgJHtwcmlvcml0eU1hcFtwcmlvcml0eV19YCk7XG4gICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH07XG5cbiAgY29uc3QgX3JlbmRlciA9ICgpID0+IHtcbiAgICByZW1vdmVDaGlsZHJlbigkdG9kb0NvbnRhaW5lcik7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gY3VyclByb2plY3QuZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVXcmFwcGluZ0RpdigncHJvalRpdGxlJywgW2gzXSk7XG4gICAgJHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgdG9kb3MgPSBjdXJyUHJvamVjdC5nZXRUb2RvQXJyKCk7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgZWwgPSBjcmVhdGVUb2RvRWxlbWVudCh0b2RvLmdldFRvZG8oKSk7XG4gICAgICAkdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG4gICAgfSk7XG5cbiAgICBpZiAocHJvamVjdFRpdGxlICE9PSAnV2VlaycgJiYgcHJvamVjdFRpdGxlICE9PSAnVG9kYXknKSB7XG4gICAgICBjb25zdCBhZGRUb2RvQnRuID0gY3JlYXRlSW1nQnV0dG9uKHtcbiAgICAgICAgdXJsOiAnLi4vc3JjL2Fzc2V0cy9wbHVzLnN2ZycsXG4gICAgICAgIHBhcmVudENsYXNzOiAnaXRlbScsXG4gICAgICB9KTtcbiAgICAgIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8nKTtcbiAgICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xuICAgICAgJHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldEN1cnJQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjdXJyUHJvamVjdCA9IHByb2plY3Q7XG4gICAgX3JlbmRlcigpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5ld1Rhc2sgPSAodG9kbykgPT4ge1xuICAgIGN1cnJQcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgX3JlbmRlcigpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCd0b2RvQWRkZWQnLCB0b2RvKTtcbiAgfTtcblxuICBQdWJTdWIuc3Vic2NyaWJlKCdjaGFuZ2VDdXJyUHJvamVjdCcsIHNldEN1cnJQcm9qZWN0KTtcbiAgUHViU3ViLnN1YnNjcmliZSgnbmV3VGFza1N1Ym1pdCcsIGhhbmRsZU5ld1Rhc2spO1xufSkoKTtcblxuLy8gT25seSBIb21lLCBXZWtrLCBQcm9qZWN0cyB0YWJzXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IHVsIGxpOm5vdCgucHJvamVjdHMpOm5vdCguYWRkLXByb2plY3QpJyk7XG5mb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICB0YWJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVGFiQ2xpY2spO1xufVxuXG4vLyBEZWJ1Z2dpbmdcblB1YlN1Yi5zdWJzY3JpYmUoJ2NoYW5nZUN1cnJQcm9qZWN0JywgKHByb2plY3QpID0+IHtcbiAgY29uc29sZS5sb2coJ0NVUlJFTlQgUFJPSkVDVCBpczonLCBwcm9qZWN0LmdldFRpdGxlKCkpO1xufSk7XG5cblB1YlN1Yi5zdWJzY3JpYmUoJ3RvZG9EZWxldGVkJywgKHRlc3QpID0+IHtcbiAgY29uc29sZS5sb2coJ0RFTEVURUQgVE9ETzonLCB0ZXN0KTtcbn0pO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBNb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7XG4gIGNvbnN0IGhvbWUgPSBQcm9qZWN0KCdIb21lJyk7XG4gIGNvbnN0IHRvZGF5ID0gUHJvamVjdCgnVG9kYXknKTtcbiAgY29uc3Qgd2VlayA9IFByb2plY3QoJ1dlZWsnKTtcblxuICBQcm9qZWN0c1VJLmFkZFByb2plY3QoaG9tZSk7XG4gIFByb2plY3RzVUkuYWRkUHJvamVjdCh0b2RheSk7XG4gIFByb2plY3RzVUkuYWRkUHJvamVjdCh3ZWVrKTtcblxuICAvLyBJbml0IHdpdGggSG9tZVxuICBQdWJTdWIucHVibGlzaCgnY2hhbmdlQ3VyclByb2plY3QnLCBob21lKTtcblxuICAvLyBUZXN0aW5nXG4gIGNvbnN0IHRlc3RQcm9qID0gUHJvamVjdCgndGVzdGluZ1Byb2onKTtcbiAgY29uc3QgdGVzdCA9IFRvZG8oe3RpdGxlOiAndGVzdFRvZG8nLCBkZXNjOiAndGVzdERlc2MnLCBwcmlvcml0eTogMSwgZHVlOiAnMjAyMi0xMi0yNSd9KTtcbiAgdGVzdFByb2ouYWRkVG9kbyh0ZXN0KTtcblxuICBjb25zdCB0ZXN0MiA9IFRvZG8oe3RpdGxlOiAndGVzdFRvZG8yJywgZGVzYzogJ3Rlc3REZXNjJywgcHJpb3JpdHk6IDMsIGR1ZTogJzIwMjItMTItMjUnfSk7XG4gIHRlc3RQcm9qLmFkZFRvZG8odGVzdDIpO1xuXG4gIGNvbnN0IHRlc3QzID0gVG9kbyh7dGl0bGU6ICd0ZXN0VG9kbzMnLCBkZXNjOiAndGVzdERlc2MnLCBwcmlvcml0eTogMiwgZHVlOiAnMjAyMi0xMi0yNid9KTtcbiAgdGVzdFByb2ouYWRkVG9kbyh0ZXN0Myk7XG5cbiAgY29uc3QgdGVzdDQgPSBUb2RvKHt0aXRsZTogJ3Rlc3RUb2RvNDQ0IDQ0NDQgNDQ0NDQnLCBkZXNjOiAndGVzdERlc2MnLCBwcmlvcml0eTogMiwgZHVlOiAnMjAyMi0xMi0yNid9KTtcbiAgdGVzdFByb2ouYWRkVG9kbyh0ZXN0NCk7XG5cbiAgUHJvamVjdHNVSS5hZGRQcm9qZWN0KHRlc3RQcm9qKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW47XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgbWFpbiBmcm9tICcuL21vZHVsZXMvVUknO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubWFpbigpO1xuXG4vLyBUZXN0aW5nIHNpZGViYXJcbmNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xufTtcblxuY29uc3Qgc2lkZWJhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWJ0bicpO1xuc2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNpZGViYXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9