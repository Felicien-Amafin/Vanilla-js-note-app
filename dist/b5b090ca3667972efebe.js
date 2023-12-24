/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Manrope", sans-serif;
}

html {
  font-size: 100%;
}

body {
  min-height: 100vh;
  background-color: rgb(5, 110, 114);
  position: relative;
}
body main {
  min-height: 100vh;
  padding: 1.875rem;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  font-family: "Quicksand", sans-serif;
}
@media (min-width: 48rem) {
  h1 {
    font-size: 2.25rem;
  }
}
@media (min-width: 62rem) {
  h1 {
    font-size: 2.5rem;
  }
}
@media (min-width: 87.5rem) {
  h1 {
    font-size: 3rem;
  }
}

button {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: rgb(5, 110, 114);
  border: none;
}

button:hover {
  background-color: rgba(5, 110, 114, 0.616);
  cursor: pointer;
}

@keyframes fade-slide-in {
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0);
  }
}
.flex-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flex-col__gap15 {
  gap: 0.9375rem;
}
.flex-col__gap20 {
  gap: 1.25rem;
}
.flex-col__gap50 {
  gap: 5.625rem;
}
.flex-col__gap70 {
  gap: 4.375rem;
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.flex-row__gap10 {
  gap: 10px;
}

.commands-container {
  width: 100%;
  padding: 1rem;
}

.widgets-list {
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1.25rem;
  padding: 0.625rem;
}
@media (min-width: 36rem) {
  .widgets-list {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 48rem) {
  .widgets-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 62rem) {
  .widgets-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

.window-overlay {
  min-height: 100%;
  width: 100%;
  padding: 1.25rem;
  position: absolute;
  top: 0;
  z-index: 2000;
  background-color: rgba(5, 110, 114, 0.616);
}

.alert-box-overlay {
  min-height: 100%;
  width: 100%;
  padding: 1.25rem;
  position: absolute;
  top: 0;
  z-index: 4000;
  background-color: rgba(85, 85, 85, 0.459);
}

.alert-box {
  width: 75%;
  height: 25%;
  padding: 1.5625rem;
  text-align: center;
  line-height: 1.25rem;
  border-radius: 1.25rem;
  background-color: white;
  z-index: 100000;
  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);
  animation: fade-slide-in 0.3s ease-out forwards;
}
@media (min-width: 36rem) {
  .alert-box {
    width: 60%;
    height: 30%;
  }
}
@media (min-width: 48rem) {
  .alert-box {
    width: 40%;
  }
}
@media (min-width: 62rem) {
  .alert-box {
    width: 30%;
  }
}
.alert-box__message {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5625rem;
}
.alert-box__message--green-mess {
  color: rgb(10, 167, 10);
}
.alert-box__message--blue-grey {
  color: rgb(5, 110, 114);
}
.alert-box__button {
  width: 3.75rem;
  height: 2.8125rem;
  border-radius: 3.125rem;
  background-color: rgb(5, 110, 114);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
}

.view-note-btn {
  width: 6.25rem;
  height: 3.125rem;
  border-radius: 1.625rem;
  background-color: white;
  color: rgb(5, 110, 114);
  font-size: 0.875rem;
}
@media (min-width: 48rem) {
  .view-note-btn {
    width: 6.5625rem;
    height: 3.4375rem;
    border-radius: 1.75rem;
  }
}
.view-note-btn:hover {
  background-color: rgba(255, 255, 255, 0.747);
}

.search {
  display: flex;
  width: min(100%, 400px);
  background-color: white;
  border-radius: 1.875rem;
  justify-content: space-around;
  align-items: center;
  height: 2.5rem;
}
@media (min-width: 36rem) {
  .search {
    height: 2.8125rem;
  }
}
@media (min-width: 48rem) {
  .search {
    height: 3.125rem;
  }
}
.search__field {
  border-radius: 1.875rem;
  width: 80%;
  height: 100%;
  background-color: white;
  outline: none;
  padding: 0.875rem;
  border: none;
}
.search__btn {
  font-size: 1.125rem;
  height: 1.875rem;
  width: 1.875rem;
  border-radius: 100%;
  color: white;
  background-color: rgb(5, 110, 114);
}
@media (min-width: 36rem) {
  .search__btn {
    height: 2.1875rem;
    width: 2.1875rem;
  }
}
@media (min-width: 48rem) {
  .search__btn {
    height: 2.5rem;
    width: 2.5rem;
  }
}

.writing-area {
  min-height: 90%;
  min-width: 85%;
  margin-top: 1.375rem;
}
.writing-area__title {
  width: 100%;
  border-radius: 0.625rem;
  border: 0.0625rem solid rgba(146, 144, 144, 0.603);
  outline: none;
  padding: 0.625rem;
  height: 10%;
  margin-bottom: 0.9375rem;
  font-weight: 600;
}
.writing-area__title:focus {
  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);
}
.writing-area__text {
  width: 100%;
  border-radius: 0.625rem;
  border: 0.0625rem solid rgba(146, 144, 144, 0.603);
  outline: none;
  padding: 0.625rem;
  height: 100%;
  font-weight: 500;
  margin-bottom: 0.9375rem;
}
.writing-area__text:focus {
  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);
}
.writing-area__btn {
  height: 3.125rem;
  width: 5rem;
  border-radius: 1.125rem;
  font-size: 0.875rem;
  outline: none;
}
@media (min-width: 48rem) {
  .writing-area__btn {
    height: 3.4375rem;
    width: 5.3125rem;
    border-radius: 1.25rem;
  }
}

.create-note__label {
  text-align: center;
  font-size: 1rem;
  color: white;
  font-weight: 500;
}
@media (min-width: 87.5rem) {
  .create-note__label {
    font-size: 1.125rem;
  }
}
.create-note__icon {
  width: 5rem;
  height: 5rem;
  border: 2.5px dashed white;
  border-radius: 6.25rem;
  cursor: pointer;
}
@media (min-width: 48rem) {
  .create-note__icon {
    width: 85px;
    height: 85px;
  }
}
.create-note__icon:hover {
  border: 2.5px dashed rgba(255, 255, 255, 0.747);
}
.create-note__cross {
  font-size: 1.75rem;
  font-weight: 500;
  color: white;
}

.closing-cross {
  font-size: 22px;
  top: 0.3125rem;
  right: 0.75rem;
  padding: 0.3125rem;
  font-family: monospace;
  position: absolute;
  cursor: pointer;
}
.closing-cross--dark-grey {
  color: rgb(95, 93, 93);
  font-weight: 500;
}
.closing-cross--dark-grey:hover {
  color: rgba(95, 93, 93, 0.514);
}
.closing-cross--orange {
  color: orange;
  font-weight: 600;
}
.closing-cross--orange:hover {
  color: rgba(255, 166, 0, 0.719);
}

.note-widget {
  width: 100%;
  height: 12.5rem;
  padding: 1.875rem;
  background-color: rgb(129, 240, 206);
  margin: auto;
  max-width: 21.875rem;
  border-radius: 1.875rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  text-align: center;
}
.note-widget:hover {
  background-color: rgba(129, 240, 207, 0.644);
}
.note-widget__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
}
.note-widget__text {
  font-size: 1rem;
  color: yellow;
  font-weight: 500;
}
.note-widget__date {
  font-size: 0.875rem;
  color: white;
  font-weight: 500;
}

.window {
  height: 80vh;
  width: 95%;
  background-color: white;
  border-radius: 15px;
  animation: fade-slide-in 0.6s ease-out forwards;
}
@media (min-width: 36rem) {
  .window {
    height: 85vh;
  }
}
.window--writing {
  max-width: 31.25rem;
}
.window--note-viewing {
  padding: 2.8125rem;
}
@media (min-width: 62rem) {
  .window--note-viewing {
    width: 90%;
  }
}`, "",{"version":3,"sources":["webpack://./src/sass/_base.scss","webpack://./src/sass/main.scss","webpack://./src/sass/_mixins.scss","webpack://./src/sass/_layout.scss","webpack://./src/sass/_containers.scss","webpack://./src/sass/components/_alert-box.scss","webpack://./src/sass/components/_button.scss","webpack://./src/sass/components/_forms.scss","webpack://./src/sass/components/_icons.scss","webpack://./src/sass/components/_note-widget.scss","webpack://./src/sass/components/_windows.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@600;700&display=swap');\r\n//Colors\r\n$blue-grey: rgb(5, 110, 114);\r\n$blue-grey-transparent: rgba(5, 110, 114, 0.616);\r\n$white: white;\r\n$transparent-white: rgba(255, 255, 255, 0.747);\r\n$box-shadow-grey: rgb(88, 85, 85);\r\n$box-shadow-light-grey: rgba(146, 144, 144, 0.603);\r\n$dark-grey: rgb(95, 93, 93);\r\n$transparent-grey: rgba(95, 93, 93, 0.514);\r\n$overlay-window: rgba(5, 110, 114, 0.616);\r\n$alert-box-green-mess: rgb(10, 167, 10);\r\n$overlay-alert-box:  rgba(85, 85, 85, 0.459);\r\n$note-widget-title: white;\r\n$note-widget-text:yellow;\r\n$note-widget: rgb(129, 240, 206);\r\n$note-widget-hover:  rgba(129, 240, 207, 0.644);\r\n$transparent-orange: rgba(255, 166, 0, 0.719);\r\n$orange: orange;\r\n\r\n//Reset\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Manrope', sans-serif;\r\n}\r\n\r\nhtml {\r\n    font-size: 100%;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    background-color: $blue-grey;\r\n    position: relative;\r\n\r\n    main {\r\n        min-height: 100vh;\r\n        padding: 1.875rem;\r\n    }\r\n}\r\n\r\n//Typography\r\nh1 {\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n    color: $white;\r\n    font-family: 'Quicksand', sans-serif;\r\n    @include breakpoint(medium) {\r\n        font-size: 2.25rem;\r\n    }\r\n    @include breakpoint(large) {\r\n        font-size: 2.5rem;\r\n    }\r\n    @include breakpoint(xx-large) {\r\n        font-size: 3rem;\r\n    }\r\n}\r\n\r\nbutton {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: $white;\r\n    background-color: $blue-grey;\r\n    border: none;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: $blue-grey-transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n//animations\r\n@keyframes fade-slide-in {\r\n    from {\r\n      transform: translateY(-5rem);\r\n    }\r\n    to {\r\n      transform: translateY(0);\r\n    }\r\n  }\r\n  ","@import url(\"https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@600;700&display=swap\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Manrope\", sans-serif;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: rgb(5, 110, 114);\n  position: relative;\n}\nbody main {\n  min-height: 100vh;\n  padding: 1.875rem;\n}\n\nh1 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n  font-family: \"Quicksand\", sans-serif;\n}\n@media (min-width: 48rem) {\n  h1 {\n    font-size: 2.25rem;\n  }\n}\n@media (min-width: 62rem) {\n  h1 {\n    font-size: 2.5rem;\n  }\n}\n@media (min-width: 87.5rem) {\n  h1 {\n    font-size: 3rem;\n  }\n}\n\nbutton {\n  font-size: 1rem;\n  font-weight: 600;\n  color: white;\n  background-color: rgb(5, 110, 114);\n  border: none;\n}\n\nbutton:hover {\n  background-color: rgba(5, 110, 114, 0.616);\n  cursor: pointer;\n}\n\n@keyframes fade-slide-in {\n  from {\n    transform: translateY(-5rem);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.flex-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.flex-col__gap15 {\n  gap: 0.9375rem;\n}\n.flex-col__gap20 {\n  gap: 1.25rem;\n}\n.flex-col__gap50 {\n  gap: 5.625rem;\n}\n.flex-col__gap70 {\n  gap: 4.375rem;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.flex-row__gap10 {\n  gap: 10px;\n}\n\n.commands-container {\n  width: 100%;\n  padding: 1rem;\n}\n\n.widgets-list {\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  gap: 1.25rem;\n  padding: 0.625rem;\n}\n@media (min-width: 36rem) {\n  .widgets-list {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 48rem) {\n  .widgets-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 62rem) {\n  .widgets-list {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.window-overlay {\n  min-height: 100%;\n  width: 100%;\n  padding: 1.25rem;\n  position: absolute;\n  top: 0;\n  z-index: 2000;\n  background-color: rgba(5, 110, 114, 0.616);\n}\n\n.alert-box-overlay {\n  min-height: 100%;\n  width: 100%;\n  padding: 1.25rem;\n  position: absolute;\n  top: 0;\n  z-index: 4000;\n  background-color: rgba(85, 85, 85, 0.459);\n}\n\n.alert-box {\n  width: 75%;\n  height: 25%;\n  padding: 1.5625rem;\n  text-align: center;\n  line-height: 1.25rem;\n  border-radius: 1.25rem;\n  background-color: white;\n  z-index: 100000;\n  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);\n  animation: fade-slide-in 0.3s ease-out forwards;\n}\n@media (min-width: 36rem) {\n  .alert-box {\n    width: 60%;\n    height: 30%;\n  }\n}\n@media (min-width: 48rem) {\n  .alert-box {\n    width: 40%;\n  }\n}\n@media (min-width: 62rem) {\n  .alert-box {\n    width: 30%;\n  }\n}\n.alert-box__message {\n  font-size: 0.875rem;\n  font-weight: 600;\n  line-height: 1.5625rem;\n}\n.alert-box__message--green-mess {\n  color: rgb(10, 167, 10);\n}\n.alert-box__message--blue-grey {\n  color: rgb(5, 110, 114);\n}\n.alert-box__button {\n  width: 3.75rem;\n  height: 2.8125rem;\n  border-radius: 3.125rem;\n  background-color: rgb(5, 110, 114);\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n\n.view-note-btn {\n  width: 6.25rem;\n  height: 3.125rem;\n  border-radius: 1.625rem;\n  background-color: white;\n  color: rgb(5, 110, 114);\n  font-size: 0.875rem;\n}\n@media (min-width: 48rem) {\n  .view-note-btn {\n    width: 6.5625rem;\n    height: 3.4375rem;\n    border-radius: 1.75rem;\n  }\n}\n.view-note-btn:hover {\n  background-color: rgba(255, 255, 255, 0.747);\n}\n\n.search {\n  display: flex;\n  width: min(100%, 400px);\n  background-color: white;\n  border-radius: 1.875rem;\n  justify-content: space-around;\n  align-items: center;\n  height: 2.5rem;\n}\n@media (min-width: 36rem) {\n  .search {\n    height: 2.8125rem;\n  }\n}\n@media (min-width: 48rem) {\n  .search {\n    height: 3.125rem;\n  }\n}\n.search__field {\n  border-radius: 1.875rem;\n  width: 80%;\n  height: 100%;\n  background-color: white;\n  outline: none;\n  padding: 0.875rem;\n  border: none;\n}\n.search__btn {\n  font-size: 1.125rem;\n  height: 1.875rem;\n  width: 1.875rem;\n  border-radius: 100%;\n  color: white;\n  background-color: rgb(5, 110, 114);\n}\n@media (min-width: 36rem) {\n  .search__btn {\n    height: 2.1875rem;\n    width: 2.1875rem;\n  }\n}\n@media (min-width: 48rem) {\n  .search__btn {\n    height: 2.5rem;\n    width: 2.5rem;\n  }\n}\n\n.writing-area {\n  min-height: 90%;\n  min-width: 85%;\n  margin-top: 1.375rem;\n}\n.writing-area__title {\n  width: 100%;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(146, 144, 144, 0.603);\n  outline: none;\n  padding: 0.625rem;\n  height: 10%;\n  margin-bottom: 0.9375rem;\n  font-weight: 600;\n}\n.writing-area__title:focus {\n  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);\n}\n.writing-area__text {\n  width: 100%;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(146, 144, 144, 0.603);\n  outline: none;\n  padding: 0.625rem;\n  height: 100%;\n  font-weight: 500;\n  margin-bottom: 0.9375rem;\n}\n.writing-area__text:focus {\n  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);\n}\n.writing-area__btn {\n  height: 3.125rem;\n  width: 5rem;\n  border-radius: 1.125rem;\n  font-size: 0.875rem;\n  outline: none;\n}\n@media (min-width: 48rem) {\n  .writing-area__btn {\n    height: 3.4375rem;\n    width: 5.3125rem;\n    border-radius: 1.25rem;\n  }\n}\n\n.create-note__label {\n  text-align: center;\n  font-size: 1rem;\n  color: white;\n  font-weight: 500;\n}\n@media (min-width: 87.5rem) {\n  .create-note__label {\n    font-size: 1.125rem;\n  }\n}\n.create-note__icon {\n  width: 5rem;\n  height: 5rem;\n  border: 2.5px dashed white;\n  border-radius: 6.25rem;\n  cursor: pointer;\n}\n@media (min-width: 48rem) {\n  .create-note__icon {\n    width: 85px;\n    height: 85px;\n  }\n}\n.create-note__icon:hover {\n  border: 2.5px dashed rgba(255, 255, 255, 0.747);\n}\n.create-note__cross {\n  font-size: 1.75rem;\n  font-weight: 500;\n  color: white;\n}\n\n.closing-cross {\n  font-size: 22px;\n  top: 0.3125rem;\n  right: 0.75rem;\n  padding: 0.3125rem;\n  font-family: monospace;\n  position: absolute;\n  cursor: pointer;\n}\n.closing-cross--dark-grey {\n  color: rgb(95, 93, 93);\n  font-weight: 500;\n}\n.closing-cross--dark-grey:hover {\n  color: rgba(95, 93, 93, 0.514);\n}\n.closing-cross--orange {\n  color: orange;\n  font-weight: 600;\n}\n.closing-cross--orange:hover {\n  color: rgba(255, 166, 0, 0.719);\n}\n\n.note-widget {\n  width: 100%;\n  height: 12.5rem;\n  padding: 1.875rem;\n  background-color: rgb(129, 240, 206);\n  margin: auto;\n  max-width: 21.875rem;\n  border-radius: 1.875rem;\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n  text-align: center;\n}\n.note-widget:hover {\n  background-color: rgba(129, 240, 207, 0.644);\n}\n.note-widget__title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: white;\n}\n.note-widget__text {\n  font-size: 1rem;\n  color: yellow;\n  font-weight: 500;\n}\n.note-widget__date {\n  font-size: 0.875rem;\n  color: white;\n  font-weight: 500;\n}\n\n.window {\n  height: 80vh;\n  width: 95%;\n  background-color: white;\n  border-radius: 15px;\n  animation: fade-slide-in 0.6s ease-out forwards;\n}\n@media (min-width: 36rem) {\n  .window {\n    height: 85vh;\n  }\n}\n.window--writing {\n  max-width: 31.25rem;\n}\n.window--note-viewing {\n  padding: 2.8125rem;\n}\n@media (min-width: 62rem) {\n  .window--note-viewing {\n    width: 90%;\n  }\n}","@mixin input-field {\r\n    width: 100%;\r\n    border-radius: 0.625rem;\r\n    border: 0.0625rem solid $box-shadow-light-grey;\r\n    outline: none;\r\n    padding: 0.625rem;\r\n    &:focus {\r\n        box-shadow: 0.09375rem 0.09375rem 0.1875rem $box-shadow-light-grey;\r\n    }\r\n}\r\n\r\n$breakpoints: (\r\n    'small': '36rem', // ≥576px\r\n    'medium': '48rem', // ≥768px\r\n    'large': '62rem', // ≥992p\r\n    'x-large': '75rem', // ≥1200px\r\n    'xx-large': '87.5rem', // ≥1400px\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin overlay {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    padding: 1.25rem;\r\n    position: absolute;\r\n    top: 0;\r\n}",".flex-col{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n    &__gap15 {\r\n        gap: 0.9375rem;\r\n    }\r\n\r\n    &__gap20 {\r\n        gap: 1.25rem;\r\n    }\r\n\r\n    &__gap50 {\r\n        gap: 5.625rem;\r\n    }\r\n\r\n    &__gap70 {\r\n        gap: 4.375rem;\r\n    }\r\n}\r\n\r\n.flex-row {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    &__gap10 {\r\n        gap: 10px;\r\n    }\r\n}\r\n\r\n",".commands-container {\r\n    width: 100%;\r\n    padding: 1rem;\r\n}\r\n\r\n.widgets-list {\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: auto;\r\n    gap: 1.25rem;\r\n    padding: 0.625rem;\r\n    @include breakpoint(small) {\r\n     grid-template-columns: 1fr 1fr;\r\n    }\r\n    @include breakpoint(medium) {\r\n     grid-template-columns: repeat(3, 1fr);\r\n    }\r\n    @include breakpoint(large) {\r\n     grid-template-columns: repeat(4, 1fr);\r\n    }\r\n}\r\n\r\n.window-overlay {\r\n    @include overlay;\r\n    z-index: 2000;\r\n    background-color: $overlay-window;\r\n}\r\n\r\n.alert-box-overlay {\r\n    @include overlay;\r\n    z-index: 4000;\r\n    background-color: $overlay-alert-box;\r\n}",".alert-box {\r\n    width: 75%;\r\n    height: 25%;\r\n    padding: 1.5625rem;\r\n    text-align: center;\r\n    line-height: 1.25rem;\r\n    border-radius: 1.25rem;\r\n    background-color: $white;\r\n    z-index: 100000;\r\n    box-shadow: 0.09375rem 0.09375rem 0.1875rem $box-shadow-light-grey;\r\n    animation: fade-slide-in 0.3s ease-out forwards;\r\n    @include breakpoint(small) {\r\n        width: 60%;\r\n        height: 30%;\r\n    }\r\n    @include breakpoint(medium) {\r\n        width: 40%;\r\n    }\r\n    @include breakpoint(large) {\r\n        width: 30%;\r\n    }\r\n\r\n    &__message {\r\n        font-size: 0.875rem;\r\n        font-weight: 600;\r\n        line-height: 1.5625rem;\r\n    }\r\n\r\n    &__message--green-mess {\r\n        color: $alert-box-green-mess;\r\n    }\r\n\r\n    &__message--blue-grey {\r\n        color: $blue-grey;\r\n    }\r\n\r\n    &__button {\r\n        width: 3.75rem;\r\n        height: 2.8125rem;\r\n        border-radius: 3.125rem;\r\n        background-color: $blue-grey;\r\n        color: $white;\r\n        font-size: 0.875rem;\r\n        font-weight: 600;\r\n    }\r\n}",".view-note-btn {\r\n    width: 6.25rem;\r\n    height: 3.125rem;\r\n    border-radius: 1.625rem;\r\n    background-color: $white;\r\n    color: $blue-grey;\r\n    font-size: 0.875rem;\r\n    @include breakpoint(medium) {\r\n        width: 6.5625rem;\r\n        height: 3.4375rem;\r\n        border-radius: 1.75rem;\r\n    }\r\n    &:hover {\r\n        background-color: $transparent-white;\r\n    }\r\n}\r\n\r\n",".search {\r\n    display: flex;\r\n    width: min(100%, 400px);\r\n    background-color: $white;\r\n    border-radius: 1.875rem;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 2.5rem;\r\n    @include breakpoint(small) {\r\n        height: 2.8125rem;\r\n    }\r\n    @include breakpoint(medium) {\r\n        height: 3.125rem;\r\n    }\r\n\r\n    &__field {\r\n        border-radius: 1.875rem;\r\n        width: 80%;\r\n        height: 100%;\r\n        background-color: $white;\r\n        outline: none;\r\n        padding: 0.875rem;\r\n        border: none;\r\n    }\r\n\r\n    &__btn {\r\n        font-size: 1.125rem;\r\n        height: 1.875rem;\r\n        width: 1.875rem;\r\n        border-radius: 100%;\r\n        color: $white;\r\n        background-color: $blue-grey;\r\n        @include breakpoint(small) {\r\n            height: 2.1875rem;\r\n            width: 2.1875rem;\r\n        }\r\n        @include breakpoint(medium) {\r\n            height: 2.5rem;\r\n            width: 2.5rem;\r\n        }\r\n    }\r\n}\r\n\r\n.writing-area {\r\n    min-height: 90%;\r\n    min-width: 85%;\r\n    margin-top: 1.375rem;\r\n\r\n    &__title {\r\n        @include input-field;\r\n        height: 10%;\r\n        margin-bottom: 0.9375rem;\r\n        font-weight: 600;\r\n    }\r\n\r\n    &__text {\r\n        @include input-field;\r\n        height: 100%;\r\n        font-weight: 500;\r\n        margin-bottom: 0.9375rem;\r\n    }\r\n\r\n    &__btn {\r\n        height: 3.125rem;\r\n        width: 5rem;\r\n        border-radius: 1.125rem;\r\n        font-size: 0.875rem;\r\n        outline: none;\r\n        @include breakpoint(medium) {\r\n            height: 3.4375rem;\r\n            width: 5.3125rem;\r\n            border-radius: 1.25rem;\r\n        } \r\n    }\r\n}\r\n",".create-note {\r\n    &__label {\r\n        text-align: center;\r\n        font-size: 1rem;\r\n        color: $white;\r\n        font-weight: 500;\r\n       \r\n        @include breakpoint(xx-large) {\r\n            font-size: 1.125rem;\r\n        }\r\n    }\r\n\r\n    &__icon {\r\n        width: 5rem;\r\n        height: 5rem;\r\n        border: 2.5px dashed $white;\r\n        border-radius: 6.25rem;\r\n        cursor: pointer;\r\n        @include breakpoint(medium) {\r\n            width: 85px;\r\n            height: 85px;\r\n        }\r\n       \r\n        &:hover{\r\n            border: 2.5px dashed $transparent-white;\r\n        }\r\n    }\r\n\r\n    &__cross {\r\n        font-size: 1.75rem;\r\n        font-weight: 500;\r\n        color: $white;\r\n    }\r\n}\r\n\r\n.closing-cross {\r\n    font-size: 22px;\r\n    top: 0.3125rem;\r\n    right: 0.75rem;\r\n    padding: 0.3125rem;\r\n    font-family: monospace;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    \r\n    &--dark-grey {\r\n        color: $dark-grey;\r\n        font-weight: 500;\r\n        &:hover {\r\n            color: $transparent-grey;\r\n        }\r\n    }\r\n\r\n    &--orange {\r\n        color: $orange;\r\n        font-weight: 600;\r\n        &:hover {\r\n            color: $transparent-orange;\r\n        }\r\n    }\r\n}\r\n    \r\n\r\n\r\n\r\n\r\n",".note-widget {\r\n    width: 100%;\r\n    height: 12.5rem;\r\n    padding: 1.875rem;\r\n    background-color: $note-widget;\r\n    margin: auto;\r\n    max-width: 21.875rem;\r\n    border-radius: 1.875rem;\r\n    position: relative;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    text-align: center;\r\n    &:hover {\r\n        background-color: $note-widget-hover;\r\n    }\r\n\r\n    &__title {\r\n        font-size: 1.125rem;\r\n        font-weight: 600;\r\n        color: $note-widget-title;\r\n    }\r\n\r\n    &__text {\r\n        font-size: 1rem;\r\n        color: $note-widget-text;\r\n        font-weight: 500;\r\n\r\n    }\r\n\r\n    &__date {\r\n        font-size: 0.875rem;\r\n        color: $white;\r\n        font-weight: 500;\r\n    }\r\n}\r\n",".window {\r\n    height: 80vh;\r\n    width: 95%;\r\n    background-color: $white;\r\n    border-radius: 15px;\r\n    animation: fade-slide-in 0.6s ease-out forwards;\r\n    @include breakpoint(small) {\r\n        height: 85vh;\r\n    }\r\n\r\n    &--writing {\r\n        max-width: 31.25rem;\r\n    }\r\n\r\n    &--note-viewing {\r\n        padding: 2.8125rem;\r\n        @include breakpoint(large) {\r\n            width:90%;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/js/alert-box.js":
/*!*****************************!*\
  !*** ./src/js/alert-box.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertBox: () => (/* binding */ AlertBox)
/* harmony export */ });
/* harmony import */ var _note_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-widget */ "./src/js/note-widget.js");
/* harmony import */ var _writing_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writing-window */ "./src/js/writing-window.js");



class AlertBox {
    static showGenericAlertBox(message, messageColor, elementToRemove) {
        const rootElement = document.getElementById('page-container');
        const alertTemplate = document.getElementById('g-alert-template');
        const alertBox = alertTemplate.content.cloneNode(true);
        rootElement.appendChild(alertBox);
        const messagEl = rootElement.querySelector('.alert-box__message');
        messagEl.textContent = `${message}`;
        messagEl.classList.add(`${messageColor}`);
        rootElement.querySelector('.alert-box__button').addEventListener('click', ()=> {
            if(elementToRemove === 'window-overlay') {
                _writing_window__WEBPACK_IMPORTED_MODULE_1__.WritingWindow.removeWindow();
            }
            document.getElementById('alert-box-overlay').remove();
        } )
    }

    static async showWidgetAlertBox(widget, noteId) {
        const rootElement = document.getElementById('page-container');
        const alertTemplate = document.getElementById('w-alert-template');
        const alertBox = alertTemplate.content.cloneNode(true);
        rootElement.appendChild(alertBox);
        
        rootElement.querySelector('#alert-box-button-yes').addEventListener('click', ()=> {
           _note_widget__WEBPACK_IMPORTED_MODULE_0__.NoteWidget.removeNoteWidgets(widget, noteId);
           document.getElementById('alert-box-overlay').remove();
        } )
        rootElement.querySelector('#alert-box-button-no').addEventListener('click', ()=> {
            document.getElementById('alert-box-overlay').remove();
        } )
    }
}

/***/ }),

/***/ "./src/js/local-storage.js":
/*!*********************************!*\
  !*** ./src/js/local-storage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorage: () => (/* binding */ LocalStorage)
/* harmony export */ });
/* harmony import */ var _writing_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writing-window */ "./src/js/writing-window.js");


class LocalStorage {
    static getNotes() {
        const notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
        return notes;
    }

    static saveNote(noteToSave) {
        let notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
        if(_writing_window__WEBPACK_IMPORTED_MODULE_0__.WritingWindow.noteToUpdate) {
            notes.find((noteObj)=> {
                if(noteToSave.id === noteObj.id) {
                    noteObj.title = noteToSave.title;
                    noteObj.text = noteToSave.text;
                    _writing_window__WEBPACK_IMPORTED_MODULE_0__.WritingWindow.noteToUpdate = null;
                }
            }) 
        } else {
            notes.push(noteToSave);
        }
        localStorage.setItem('all-notes', JSON.stringify(notes));
    }

    static deleteNote(noteId) {
        let notes = this.getNotes();
        notes = notes.filter((note)=> {return note.id !== noteId});
        localStorage.setItem('all-notes', JSON.stringify(notes));
        return notes;
    }
}

/***/ }),

/***/ "./src/js/note-viewing-window.js":
/*!***************************************!*\
  !*** ./src/js/note-viewing-window.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteViewingWindow: () => (/* binding */ NoteViewingWindow)
/* harmony export */ });
/* harmony import */ var _note_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-widget */ "./src/js/note-widget.js");
/* harmony import */ var _alert_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-box */ "./src/js/alert-box.js");



class NoteViewingWindow {
    static displayWindow(notes) {
        if(notes.length === 0) {
            const message = 'No note(s) in storage yet. Click on "Create a note" to start adding notes.';
            _alert_box__WEBPACK_IMPORTED_MODULE_1__.AlertBox.showGenericAlertBox(message, 'alert-box__message--blue-grey', 'overlay-alert-box');
            return;
        } else if(!notes) {
            const message = 'No corresponding note(s) to your search';
            _alert_box__WEBPACK_IMPORTED_MODULE_1__.AlertBox.showGenericAlertBox(message, 'alert-box__message--blue-grey', 'overlay-alert-box');
            return;
        }
        const rootElement = document.getElementById('page-container');
        rootElement.insertAdjacentHTML('beforeend', 
        `<div id="window-overlay" class="window-overlay flex-col">
            <div id="note-viewing-window" class="window window--note-viewing flex-col">
                <span id="close-windw-cross" class="closing-cross closing-cross--dark-grey">x</span>
                <ul id="widgets-list" class="widgets-list"></ul>
            </div>
        </div>
        `);
        document.getElementById('close-windw-cross').addEventListener('click', this.removeWindow.bind(this));
        _note_widget__WEBPACK_IMPORTED_MODULE_0__.NoteWidget.addNoteWidgets(notes.reverse()); // Reverse notes to get the more recent added notes
    }

    static removeWindow() {
        document.getElementById('window-overlay').remove();
    }
}

/***/ }),

/***/ "./src/js/note-widget.js":
/*!*******************************!*\
  !*** ./src/js/note-widget.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteWidget: () => (/* binding */ NoteWidget)
/* harmony export */ });
/* harmony import */ var _note_viewing_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note-viewing-window */ "./src/js/note-viewing-window.js");
/* harmony import */ var _writing_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writing-window */ "./src/js/writing-window.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/js/local-storage.js");
/* harmony import */ var _alert_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-box */ "./src/js/alert-box.js");





class NoteWidget {
    static addNoteWidgets(notes) {
        const NOTE_TITLE_MAX_LENGTH = 25;
        const NOTE_TEXT_MAX_LENGTH  = 30;
        notes.forEach((note) => {
            const widget = document.createElement('li');
            widget.id = "note-widget";
            widget.classList.add('note-widget', 'flex-col', 'flex-col__gap15');
            widget.innerHTML = `
                <span id="note-widget-cross" class="closing-cross closing-cross--orange">x</span>
                <h2 id="note-widget-title" class="note-widget__title">
                    ${note.title.substring(0, NOTE_TITLE_MAX_LENGTH )}
                    ${note.title.length > NOTE_TITLE_MAX_LENGTH ? "..." : ""}
                </h2>
                <p id="note-widget-text" class="note-widget__text">
                    ${note.text.substring(0, NOTE_TEXT_MAX_LENGTH )}
                    ${note.text.length > NOTE_TEXT_MAX_LENGTH ? "..." : ""}
                </p>
                <p id="note-widget-date" class="note-widget__date">${note.date}</p>         
            `
            widget.addEventListener('click', ()=> {
                _note_viewing_window__WEBPACK_IMPORTED_MODULE_0__.NoteViewingWindow.removeWindow();
                _writing_window__WEBPACK_IMPORTED_MODULE_1__.WritingWindow.displayWindow(note);
            })
            widget.querySelector('.closing-cross').addEventListener('click', (event)=> {
                event.stopPropagation();
                _alert_box__WEBPACK_IMPORTED_MODULE_3__.AlertBox.showWidgetAlertBox(widget, note.id);
            })
            document.getElementById('widgets-list').insertAdjacentElement('beforeend', widget);
        });
    }

    static removeNoteWidgets(widget, noteId) {
        widget.remove();
        const notes = _local_storage__WEBPACK_IMPORTED_MODULE_2__.LocalStorage.deleteNote(noteId);
        if(notes.length === 0) {
            _note_viewing_window__WEBPACK_IMPORTED_MODULE_0__.NoteViewingWindow.removeWindow();
        }
    }
}

/***/ }),

/***/ "./src/js/note.js":
/*!************************!*\
  !*** ./src/js/note.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Note: () => (/* binding */ Note)
/* harmony export */ });
class Note {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.id = Math.floor((Math.random() * 10000)*100);
        this.date = new Intl.DateTimeFormat('en-US').format(new Date());
    }
}


/***/ }),

/***/ "./src/js/search-form.js":
/*!*******************************!*\
  !*** ./src/js/search-form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchForm: () => (/* binding */ SearchForm)
/* harmony export */ });
/* harmony import */ var _alert_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-box */ "./src/js/alert-box.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ "./src/js/local-storage.js");
/* harmony import */ var _note_viewing_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-viewing-window */ "./src/js/note-viewing-window.js");




class SearchForm {
    static searchHandler() {
        if(!document.getElementById('search-field').value.trim()) {
            const message = 'Enter a search keyword in input field';
            _alert_box__WEBPACK_IMPORTED_MODULE_0__.AlertBox.showGenericAlertBox(message, 'alert-box__message--blue-grey', 'overlay-alert-box');
            return;
        }
        const allNotes = _local_storage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getNotes();
        _note_viewing_window__WEBPACK_IMPORTED_MODULE_2__.NoteViewingWindow.displayWindow(this.loadSearch(allNotes));
        
    }

    static loadSearch(allNotes) {
        const searchField = document.getElementById('search-field');
        const searchTerm = searchField.value.trim();
        searchField.value = '';
        const searchResult = allNotes.filter((note)=> {
            let noteTitle = note.title.toLowerCase();
            return noteTitle.includes(searchTerm.toLowerCase());
        })
        return searchResult.length === 0 ? false : searchResult;
    }
}

/***/ }),

/***/ "./src/js/writing-window.js":
/*!**********************************!*\
  !*** ./src/js/writing-window.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WritingWindow: () => (/* binding */ WritingWindow)
/* harmony export */ });
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/js/local-storage.js");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ "./src/js/note.js");
/* harmony import */ var _alert_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-box */ "./src/js/alert-box.js");




class WritingWindow {
    static noteToUpdate;

    static displayWindow(noteToUpdate) {
        const rootElement = document.getElementById('page-container');
        rootElement.insertAdjacentHTML('beforeend', 
        `<div id="window-overlay" class="window-overlay flex-col">
            <div id="writing-window" class="window window--writing flex-col">
                <span id="close-windw-cross" class="closing-cross closing-cross--dark-grey">x</span>
                <form id="writing-area" class="writing-area flex-col">
                    <input id="writing-area-title" class="writing-area__title" type="text" autocomplete="off" maxlength="40" placeholder="Enter title ...">
                    <textarea id="writing-area-text" class="writing-area__text" name="writing-area-text" placeholder="Enter text..." ></textarea>
                    <button id="writing-area-btn" class="writing-area__btn" type="button">Save</button>
                </form>
            </div>
        </div>
        `);
        if(noteToUpdate) {
            this.noteToUpdate = noteToUpdate;
            document.getElementById('writing-area-title').value = this.noteToUpdate.title;
            document.getElementById('writing-area-text').value = this.noteToUpdate.text;
        }
        document.getElementById('close-windw-cross').addEventListener('click', ()=> {
            this.removeWindow();
            if(WritingWindow.noteToUpdate){ WritingWindow.noteToUpdate = null; };
        });
        document.getElementById('writing-area-btn').addEventListener('click', (event)=> {
            event.preventDefault();
            this.checkUserInput();
        });
    }

    static storeUserInput(titleValue, textValue){
        if(this.noteToUpdate) {
            this.noteToUpdate.title = titleValue;
            this.noteToUpdate.text = textValue; 
            _alert_box__WEBPACK_IMPORTED_MODULE_2__.AlertBox.showGenericAlertBox('Your note has been updated and saved.', 'alert-box__message--green-mess', 'window-overlay');
            return this.noteToUpdate;
        } else {
            const title = titleValue;
            const text = textValue;
            const newNote = new _note__WEBPACK_IMPORTED_MODULE_1__.Note(title, text);
            _alert_box__WEBPACK_IMPORTED_MODULE_2__.AlertBox.showGenericAlertBox('Note has been saved.', 'alert-box__message--green-mess', 'window-overlay');
            return newNote;
        }
    }

    static checkUserInput() {
        const titleValue = document.getElementById('writing-area-title').value.trim();
        const textValue = document.getElementById('writing-area-text').value.trim();
        if(titleValue && textValue) {
            if(this.noteToUpdate) {
                if(this.noteToUpdate.title === titleValue && this.noteToUpdate.text === textValue) {
                    _alert_box__WEBPACK_IMPORTED_MODULE_2__.AlertBox.showGenericAlertBox('Note must be updated before saving!', 'alert-box__message--blue-grey', 'alert-box-overlay');
                    return;
                }
            }
            const note = this.storeUserInput(titleValue, textValue);
            _local_storage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.saveNote(note);
        } else {
            _alert_box__WEBPACK_IMPORTED_MODULE_2__.AlertBox.showGenericAlertBox('Fill empty field(s) before saving!',  'alert-box__message--blue-grey', 'alert-box-overlay');
            return;
        }
    }

    static removeWindow() {
        document.getElementById('window-overlay').remove();
    }
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _js_writing_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/writing-window */ "./src/js/writing-window.js");
/* harmony import */ var _js_note_viewing_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/note-viewing-window */ "./src/js/note-viewing-window.js");
/* harmony import */ var _js_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/local-storage */ "./src/js/local-storage.js");
/* harmony import */ var _js_search_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/search-form */ "./src/js/search-form.js");






class App {
    init() {
        document.getElementById('create-note-icon').addEventListener('click', ()=>{
            _js_writing_window__WEBPACK_IMPORTED_MODULE_1__.WritingWindow.displayWindow();
        }
       )
        document.getElementById('view-note-btn').addEventListener('click', ()=> {
            _js_note_viewing_window__WEBPACK_IMPORTED_MODULE_2__.NoteViewingWindow.displayWindow(_js_local_storage__WEBPACK_IMPORTED_MODULE_3__.LocalStorage.getNotes());
        })
        document.getElementById('search-btn').addEventListener('click', _js_search_form__WEBPACK_IMPORTED_MODULE_4__.SearchForm.searchHandler.bind(_js_search_form__WEBPACK_IMPORTED_MODULE_4__.SearchForm))
    }
}
const app = new App();
app.init();



})();

/******/ })()
;
//# sourceMappingURL=b5b090ca3667972efebe.js.map