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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]);
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
  background-color: rgb(30, 46, 77);
  position: relative;
}
body main {
  min-height: 100vh;
  padding: 1.875rem;
}

h1 {
  font-size: 2rem;
  color: white;
  font-family: "Pacifico", cursive;
  text-shadow: 0.0625rem 0.156rem 0.156rem rgb(88, 85, 85);
}

button {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: rgb(30, 46, 77);
  border: none;
}

button:hover {
  background-color: rgba(30, 46, 77, 0.589);
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

.white-patch {
  width: 100%;
  max-width: 31.25rem;
  border-radius: 1.875rem;
  background-color: white;
  padding: 1.875rem;
}
.white-patch .search-field {
  border: 0.0625rem solid rgba(146, 144, 144, 0.603);
  outline: none;
  padding: 0.875rem;
  height: 3.125rem;
  border-radius: 1.875rem;
  margin-right: 0.3125rem;
}
.white-patch .search-field:focus {
  border: 0.0625rem solid rgb(95, 93, 93);
}
.white-patch .arrow-button {
  font-size: 1.125rem;
  width: 4.375rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 6.25rem;
  color: white;
}
.white-patch .create-icon-label {
  text-align: center;
  font-size: 1rem;
  color: rgb(30, 46, 77);
  font-weight: 500;
}
.white-patch .create-icon {
  width: 5.3125rem;
  height: 5.3125rem;
  border: 0.156rem dashed rgb(30, 46, 77);
  border-radius: 6.25rem;
  cursor: pointer;
}
.white-patch .create-icon:hover {
  border: 0.156rem dashed rgba(30, 46, 77, 0.589);
}
.white-patch .create-icon__cross {
  font-size: 2.125rem;
  font-weight: 500;
  color: rgb(30, 46, 77);
}
.white-patch .view-button {
  width: 7.5rem;
  height: 3.125rem;
  border-radius: 1.625rem;
}

.overlay-home-page {
  min-height: 100%;
  width: 100%;
  padding: 1.25rem;
  position: absolute;
  top: 0;
  z-index: 2000;
  background-color: rgb(47, 69, 114);
}

.overlay-alert-box {
  min-height: 100%;
  width: 100%;
  padding: 1.25rem;
  position: absolute;
  top: 0;
  z-index: 4000;
  background-color: rgba(85, 85, 85, 0.459);
}

.window {
  height: 80vh;
  width: 100%;
  background-color: white;
  border-radius: 0.625rem;
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
}

.close-cross {
  font-size: 22px;
  top: 0.3125rem;
  right: 0.75rem;
  padding: 0.3125rem;
  font-family: monospace;
  color: rgb(95, 93, 93);
  position: absolute;
}
.close-cross:hover {
  color: rgba(105, 103, 103, 0.473);
  cursor: pointer;
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

.note-widget {
  width: 100%;
  height: 12.5rem;
  padding: 1.875rem;
  background-color: rgb(234, 240, 253);
  margin: auto;
  max-width: 21.875rem;
  border-radius: 1.875rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  text-align: center;
}
.note-widget:hover {
  background-color: rgb(214, 224, 245);
}
.note-widget__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(37, 35, 35);
}
.note-widget__text {
  font-size: 1rem;
  color: rgb(59, 56, 56);
  font-weight: 500;
}
.note-widget__date {
  font-size: 0.875rem;
  color: rgb(30, 46, 77);
  font-weight: 500;
}

.save-button {
  height: 3.125rem;
  width: 5rem;
  border-radius: 1.125rem;
  font-size: 0.875rem;
  outline: none;
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
.alert-box__message--green {
  color: rgb(10, 167, 10);
}
.alert-box__message--red {
  color: rgba(247, 58, 58, 0.911);
}
.alert-box__button {
  width: 3.75rem;
  height: 2.8125rem;
  border-radius: 3.125rem;
  background-color: rgb(30, 46, 77);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
}`, "",{"version":3,"sources":["webpack://./src/sass/_base.scss","webpack://./src/sass/main.scss","webpack://./src/sass/_layout.scss","webpack://./src/sass/_components.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');\r\n\r\n//Colors\r\n$purple: rgb(30, 46, 77);\r\n$purple-transparent: rgba(30, 46, 77, 0.589);\r\n$white: white;\r\n$box-shadow-grey: rgb(88, 85, 85);\r\n$box-shadow-light-grey: rgba(146, 144, 144, 0.603);\r\n$dark-grey: rgb(95, 93, 93);\r\n$home-page-overlay: rgb(47, 69, 114);\r\n$alert-box-red: rgba(247, 58, 58, 0.911);\r\n$alert-box-green: rgb(10, 167, 10);\r\n$overlay-alert-box:  rgba(85, 85, 85, 0.459);\r\n$note-widget-title: rgb(37, 35, 35);\r\n$note-widget-text: rgb(59, 56, 56);\r\n$note-widget: rgb(234, 240, 253);\r\n$note-widget-hover: rgb(214, 224, 245);\r\n$close-cross-hover: rgba(105, 103, 103, 0.473);\r\n\r\n//Reset\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Manrope', sans-serif;\r\n}\r\n\r\nhtml {\r\n    font-size: 100%;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    background-color: $purple;\r\n    position: relative;\r\n\r\n    main {\r\n        min-height: 100vh;\r\n        padding: 1.875rem;\r\n    }\r\n}\r\n\r\n//Typography\r\nh1 {\r\n    font-size: 2rem;\r\n    color: $white;\r\n    font-family: 'Pacifico', cursive;\r\n    text-shadow: 0.0625rem 0.156rem 0.156rem $box-shadow-grey;\r\n}\r\n\r\nbutton {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: $white;\r\n    background-color: $purple;\r\n    border: none;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: $purple-transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n//mixins \r\n@mixin input-field {\r\n    width: 100%;\r\n    border-radius: 0.625rem;\r\n    border: 0.0625rem solid $box-shadow-light-grey;\r\n    outline: none;\r\n    padding: 0.625rem;\r\n    &:focus {\r\n        box-shadow: 0.09375rem 0.09375rem 0.1875rem $box-shadow-light-grey;\r\n    }\r\n}\r\n\r\n@mixin overlay {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    padding: 1.25rem;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n\r\n$breakpoints: (\r\n    'small': '36rem', // ≥576px\r\n    'medium': '48rem', // ≥768px\r\n    'large': '62rem', // ≥992p\r\n    'x-large': '75rem', // ≥1200px\r\n    'xx-large': '87.5rem', // ≥1400px\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n//animations\r\n@keyframes fade-slide-in {\r\n    from {\r\n      transform: translateY(-5rem);\r\n    }\r\n    to {\r\n      transform: translateY(0);\r\n    }\r\n  }","@import url(\"https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Manrope\", sans-serif;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: rgb(30, 46, 77);\n  position: relative;\n}\nbody main {\n  min-height: 100vh;\n  padding: 1.875rem;\n}\n\nh1 {\n  font-size: 2rem;\n  color: white;\n  font-family: \"Pacifico\", cursive;\n  text-shadow: 0.0625rem 0.156rem 0.156rem rgb(88, 85, 85);\n}\n\nbutton {\n  font-size: 1rem;\n  font-weight: 600;\n  color: white;\n  background-color: rgb(30, 46, 77);\n  border: none;\n}\n\nbutton:hover {\n  background-color: rgba(30, 46, 77, 0.589);\n  cursor: pointer;\n}\n\n@keyframes fade-slide-in {\n  from {\n    transform: translateY(-5rem);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.flex-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.flex-col__gap15 {\n  gap: 0.9375rem;\n}\n.flex-col__gap20 {\n  gap: 1.25rem;\n}\n.flex-col__gap50 {\n  gap: 5.625rem;\n}\n.flex-col__gap70 {\n  gap: 4.375rem;\n}\n\n.white-patch {\n  width: 100%;\n  max-width: 31.25rem;\n  border-radius: 1.875rem;\n  background-color: white;\n  padding: 1.875rem;\n}\n.white-patch .search-field {\n  border: 0.0625rem solid rgba(146, 144, 144, 0.603);\n  outline: none;\n  padding: 0.875rem;\n  height: 3.125rem;\n  border-radius: 1.875rem;\n  margin-right: 0.3125rem;\n}\n.white-patch .search-field:focus {\n  border: 0.0625rem solid rgb(95, 93, 93);\n}\n.white-patch .arrow-button {\n  font-size: 1.125rem;\n  width: 4.375rem;\n  height: 2.5rem;\n  width: 2.5rem;\n  border-radius: 6.25rem;\n  color: white;\n}\n.white-patch .create-icon-label {\n  text-align: center;\n  font-size: 1rem;\n  color: rgb(30, 46, 77);\n  font-weight: 500;\n}\n.white-patch .create-icon {\n  width: 5.3125rem;\n  height: 5.3125rem;\n  border: 0.156rem dashed rgb(30, 46, 77);\n  border-radius: 6.25rem;\n  cursor: pointer;\n}\n.white-patch .create-icon:hover {\n  border: 0.156rem dashed rgba(30, 46, 77, 0.589);\n}\n.white-patch .create-icon__cross {\n  font-size: 2.125rem;\n  font-weight: 500;\n  color: rgb(30, 46, 77);\n}\n.white-patch .view-button {\n  width: 7.5rem;\n  height: 3.125rem;\n  border-radius: 1.625rem;\n}\n\n.overlay-home-page {\n  min-height: 100%;\n  width: 100%;\n  padding: 1.25rem;\n  position: absolute;\n  top: 0;\n  z-index: 2000;\n  background-color: rgb(47, 69, 114);\n}\n\n.overlay-alert-box {\n  min-height: 100%;\n  width: 100%;\n  padding: 1.25rem;\n  position: absolute;\n  top: 0;\n  z-index: 4000;\n  background-color: rgba(85, 85, 85, 0.459);\n}\n\n.window {\n  height: 80vh;\n  width: 100%;\n  background-color: white;\n  border-radius: 0.625rem;\n  animation: fade-slide-in 0.6s ease-out forwards;\n}\n@media (min-width: 36rem) {\n  .window {\n    height: 85vh;\n  }\n}\n.window--writing {\n  max-width: 31.25rem;\n}\n.window--note-viewing {\n  padding: 2.8125rem;\n}\n@media (min-width: 62rem) {\n  .window--note-viewing {\n    width: 90%;\n  }\n}\n\n.close-cross {\n  font-size: 22px;\n  top: 0.3125rem;\n  right: 0.75rem;\n  padding: 0.3125rem;\n  font-family: monospace;\n  color: rgb(95, 93, 93);\n  position: absolute;\n}\n.close-cross:hover {\n  color: rgba(105, 103, 103, 0.473);\n  cursor: pointer;\n}\n\n.widgets-list {\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  gap: 1.25rem;\n  padding: 0.625rem;\n}\n@media (min-width: 36rem) {\n  .widgets-list {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 48rem) {\n  .widgets-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 62rem) {\n  .widgets-list {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.note-widget {\n  width: 100%;\n  height: 12.5rem;\n  padding: 1.875rem;\n  background-color: rgb(234, 240, 253);\n  margin: auto;\n  max-width: 21.875rem;\n  border-radius: 1.875rem;\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n  text-align: center;\n}\n.note-widget:hover {\n  background-color: rgb(214, 224, 245);\n}\n.note-widget__title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: rgb(37, 35, 35);\n}\n.note-widget__text {\n  font-size: 1rem;\n  color: rgb(59, 56, 56);\n  font-weight: 500;\n}\n.note-widget__date {\n  font-size: 0.875rem;\n  color: rgb(30, 46, 77);\n  font-weight: 500;\n}\n\n.save-button {\n  height: 3.125rem;\n  width: 5rem;\n  border-radius: 1.125rem;\n  font-size: 0.875rem;\n  outline: none;\n}\n\n.writing-area {\n  min-height: 90%;\n  min-width: 85%;\n  margin-top: 1.375rem;\n}\n.writing-area__title {\n  width: 100%;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(146, 144, 144, 0.603);\n  outline: none;\n  padding: 0.625rem;\n  height: 10%;\n  margin-bottom: 0.9375rem;\n  font-weight: 600;\n}\n.writing-area__title:focus {\n  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);\n}\n.writing-area__text {\n  width: 100%;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(146, 144, 144, 0.603);\n  outline: none;\n  padding: 0.625rem;\n  height: 100%;\n  font-weight: 500;\n  margin-bottom: 0.9375rem;\n}\n.writing-area__text:focus {\n  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);\n}\n\n.alert-box {\n  width: 75%;\n  height: 25%;\n  padding: 1.5625rem;\n  text-align: center;\n  line-height: 1.25rem;\n  border-radius: 1.25rem;\n  background-color: white;\n  z-index: 100000;\n  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);\n  animation: fade-slide-in 0.3s ease-out forwards;\n}\n@media (min-width: 36rem) {\n  .alert-box {\n    width: 60%;\n    height: 30%;\n  }\n}\n@media (min-width: 48rem) {\n  .alert-box {\n    width: 40%;\n  }\n}\n@media (min-width: 62rem) {\n  .alert-box {\n    width: 30%;\n  }\n}\n.alert-box__message {\n  font-size: 0.875rem;\n  font-weight: 600;\n  line-height: 1.5625rem;\n}\n.alert-box__message--green {\n  color: rgb(10, 167, 10);\n}\n.alert-box__message--red {\n  color: rgba(247, 58, 58, 0.911);\n}\n.alert-box__button {\n  width: 3.75rem;\n  height: 2.8125rem;\n  border-radius: 3.125rem;\n  background-color: rgb(30, 46, 77);\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n}",".flex-col{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n    &__gap15 {\r\n        gap: 0.9375rem;\r\n    }\r\n\r\n    &__gap20 {\r\n        gap: 1.25rem;\r\n    }\r\n\r\n    &__gap50 {\r\n        gap: 5.625rem;\r\n    }\r\n\r\n    &__gap70 {\r\n        gap: 4.375rem;\r\n    }\r\n}",".white-patch {\r\n    width: 100%;\r\n    max-width: 31.25rem;\r\n    border-radius: 1.875rem;\r\n    background-color: $white;\r\n    padding: 1.875rem;\r\n\r\n    .search-field {\r\n        border: 0.0625rem solid $box-shadow-light-grey;\r\n        outline: none;\r\n        padding: 0.875rem;\r\n        height: 3.125rem;\r\n        border-radius: 1.875rem;\r\n        margin-right: 0.3125rem;\r\n        &:focus {\r\n            border: 0.0625rem solid $dark-grey;\r\n        }\r\n    }\r\n    \r\n    .arrow-button {\r\n        font-size: 1.125rem;\r\n        width: 4.375rem;\r\n        height: 2.5rem;\r\n        width: 2.5rem;\r\n        border-radius: 6.25rem;\r\n        color: $white;\r\n    }\r\n    \r\n    .create-icon-label {\r\n        text-align: center;\r\n        font-size: 1rem;\r\n        color: $purple;\r\n        font-weight: 500;\r\n    }\r\n    \r\n    .create-icon {\r\n        width: 5.3125rem;\r\n        height: 5.3125rem;\r\n        border: 0.156rem dashed $purple;\r\n        border-radius: 6.25rem;\r\n        cursor: pointer;\r\n\r\n        &:hover{\r\n            border: 0.156rem dashed $purple-transparent;\r\n        }\r\n\r\n        &__cross {\r\n            font-size: 2.125rem;\r\n            font-weight: 500;\r\n            color: $purple;\r\n        }\r\n    }\r\n\r\n    .view-button {\r\n        width: 7.5rem;\r\n        height: 3.125rem;\r\n        border-radius: 1.625rem;\r\n    }\r\n}\r\n\r\n.overlay-home-page {\r\n    @include overlay;\r\n    z-index: 2000;\r\n    background-color: $home-page-overlay;\r\n}\r\n\r\n.overlay-alert-box {\r\n    @include overlay;\r\n    z-index: 4000;\r\n    background-color: $overlay-alert-box;\r\n}\r\n\r\n.window {\r\n    height: 80vh;\r\n    width: 100%;\r\n    background-color: $white;\r\n    border-radius: 0.625rem;\r\n    animation: fade-slide-in 0.6s ease-out forwards;\r\n    @include breakpoint(small) {\r\n        height: 85vh;\r\n    }\r\n\r\n    &--writing {\r\n        max-width: 31.25rem;\r\n    }\r\n\r\n    &--note-viewing {\r\n        padding: 2.8125rem;\r\n        @include breakpoint(large) {\r\n            width:90%;\r\n        }\r\n    }\r\n}\r\n\r\n.close-cross {\r\n    font-size: 22px;\r\n    top: 0.3125rem;\r\n    right: 0.75rem;\r\n    padding: 0.3125rem;\r\n    font-family: monospace;\r\n    color: $dark-grey;\r\n    position: absolute;\r\n    &:hover {\r\n        color: $close-cross-hover;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.widgets-list{\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: auto;\r\n    gap: 1.25rem;\r\n    padding: 0.625rem;\r\n    @include breakpoint(small) {\r\n     grid-template-columns: 1fr 1fr;\r\n    }\r\n    @include breakpoint(medium) {\r\n     grid-template-columns: repeat(3, 1fr);\r\n    }\r\n    @include breakpoint(large) {\r\n     grid-template-columns: repeat(4, 1fr);\r\n    }\r\n}\r\n\r\n.note-widget {\r\n    width: 100%;\r\n    height: 12.5rem;\r\n    padding: 1.875rem;\r\n    background-color: $note-widget;\r\n    margin: auto;\r\n    max-width: 21.875rem;\r\n    border-radius: 1.875rem;\r\n    position: relative;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    text-align: center;\r\n    &:hover {\r\n        background-color: $note-widget-hover;\r\n    }\r\n\r\n    &__title {\r\n        font-size: 1.25rem;\r\n        font-weight: 600;\r\n        color: $note-widget-title;\r\n    }\r\n\r\n    &__text {\r\n        font-size: 1rem;\r\n        color: $note-widget-text;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__date {\r\n        font-size: 0.875rem;\r\n        color: $purple;\r\n        font-weight: 500;\r\n    }\r\n}\r\n\r\n.save-button {\r\n    height: 3.125rem;\r\n    width: 5rem;\r\n    border-radius: 1.125rem;\r\n    font-size: 0.875rem;\r\n    outline: none;\r\n}\r\n\r\n.writing-area {\r\n    min-height: 90%;\r\n    min-width: 85%;\r\n    margin-top: 1.375rem;\r\n\r\n    &__title {\r\n        @include input-field;\r\n        height: 10%;\r\n        margin-bottom: 0.9375rem;\r\n        font-weight: 600;\r\n    }\r\n\r\n    &__text {\r\n        @include input-field;\r\n        height: 100%;\r\n        font-weight: 500;\r\n        margin-bottom: 0.9375rem;\r\n    }\r\n}\r\n\r\n.alert-box {\r\n    width: 75%;\r\n    height: 25%;\r\n    padding: 1.5625rem;\r\n    text-align: center;\r\n    line-height: 1.25rem;\r\n    border-radius: 1.25rem;\r\n    background-color: $white;\r\n    z-index: 100000;\r\n    box-shadow: 0.09375rem 0.09375rem 0.1875rem $box-shadow-light-grey;\r\n    animation: fade-slide-in 0.3s ease-out forwards;\r\n    @include breakpoint(small) {\r\n        width: 60%;\r\n        height: 30%;\r\n    }\r\n    @include breakpoint(medium) {\r\n        width: 40%;\r\n       \r\n    }\r\n    @include breakpoint(large) {\r\n        width: 30%;\r\n       \r\n    }\r\n\r\n    &__message {\r\n        font-size: 0.875rem;\r\n        font-weight: 600;\r\n        line-height: 1.5625rem;\r\n    }\r\n\r\n    &__message--green {\r\n        color: $alert-box-green;\r\n    }\r\n\r\n    &__message--red {\r\n        color: $alert-box-red;\r\n    }\r\n\r\n    &__button {\r\n        width: 3.75rem;\r\n        height: 2.8125rem;\r\n        border-radius: 3.125rem;\r\n        background-color: $purple;\r\n        color: $white;\r\n        font-size: 0.875rem;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _writing_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writing-window */ "./src/js/writing-window.js");


class AlertBox {
    static showAlertBox(message, messageColor, elementToRemove) {
        const rootElement = document.getElementById('page-container');
        const alertTemplate = document.getElementById('alert-template');
        const alertBox = alertTemplate.content.cloneNode(true);
        rootElement.appendChild(alertBox);
        const messagEl = rootElement.querySelector('.alert-box__message');
        messagEl.textContent = `${message}`;
        messagEl.classList.add(`${messageColor}`);
        rootElement.querySelector('.alert-box__button').addEventListener('click', ()=> {
            if(elementToRemove === 'overlay-home-page') {
                _writing_window__WEBPACK_IMPORTED_MODULE_0__.WritingWindow.removeWindow();
            }
            document.getElementById('overlay-alert-box').remove();
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
class LocalStorage {
    static getNotes() {
        const notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
        return notes;
    }

    static saveNote(note) {
        const notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
        notes.push(note);
        localStorage.setItem('all-notes', JSON.stringify(notes));
    }

    static deleteNote(noteId) {
        let notes = this.getNotes();
        console.log(notes)
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
            const message = 'No note(s) in storage yet. Click "Create note" to start adding notes.'
            _alert_box__WEBPACK_IMPORTED_MODULE_1__.AlertBox.showAlertBox(message, 'alert-box__message--red', 'overlay-alert-box');
            return;
        } 
        const rootElement = document.getElementById('page-container');
        rootElement.insertAdjacentHTML('beforeend', 
        `<div id="overlay-home-page" class="overlay-home-page flex-col">
            <div id="note-viewing-window" class="window window--note-viewing flex-col">
                <span id="close-window-cross" class="close-cross">x</span>
                <ul id="widgets-list" class="widgets-list"></ul>
            </div>
        </div>
        `);
        document.getElementById('close-window-cross').addEventListener('click', this.removeWindow.bind(this));
        _note_widget__WEBPACK_IMPORTED_MODULE_0__.NoteWidget.addNoteWidgets(notes);
    }

    static removeWindow() {
        document.getElementById('overlay-home-page').remove();
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




class NoteWidget {
    static addNoteWidgets(notes) {
        notes.forEach((note) => {
            const widget = document.createElement('li');
            widget.id = "note-widget";
            widget.classList.add('note-widget', 'flex-col', 'flex-col__gap15');
            widget.innerHTML = `
                <span id="note-widget__close-cross" class="close-cross">x</span>
                <h2 id="note-widget-title" class="note-widget__title">${note.title}</h2>
                <p id="note-widget-text" class="note-widget__text">${note.text}</p>
                <p id="note-widget-date" class="note-widget__date">${note.date}</p>         
            `
            widget.addEventListener('click', ()=> {
                _note_viewing_window__WEBPACK_IMPORTED_MODULE_0__.NoteViewingWindow.removeWindow();
                _writing_window__WEBPACK_IMPORTED_MODULE_1__.WritingWindow.displayWindow(note);
            })
            widget.querySelector('span').addEventListener('click', (event)=> {
                event.stopPropagation();
                this.removeNoteWidgets(widget, note.id);
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
        this.id = Math.floor((Math.random() * 10000)*100)
        this.date = new Date().toISOString();
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
        `<div id="overlay-home-page" class="overlay-home-page flex-col">
            <div id="writing-window" class="window window--writing flex-col">
                <span id="close-window-cross" class="close-cross">x</span>
                <form id="writing-area" class="writing-area flex-col">
                    <input id="writing-area-title" class="writing-area__title" type="text" autocomplete="off" placeholder="Enter title ...">
                    <textarea id="writing-area-text" class="writing-area__text" name="writing-area-text" placeholder="Enter text..." ></textarea>
                    <button id="save-button" class="save-button" type="button">Save</button>
                </form>
            </div>
        </div>
        `);
        if(noteToUpdate) {
            this.noteToUpdate = noteToUpdate;
            document.getElementById('writing-area-title').value = this.noteToUpdate.title;
            document.getElementById('writing-area-text').value = this.noteToUpdate.text;
        }
        document.getElementById('close-window-cross').addEventListener('click', ()=> {
            this.removeWindow();
        });
        document.getElementById('save-button').addEventListener('click', (event)=> {
            event.preventDefault();
            this.checkUserInput();
        });
    }

    static storeUserInput(titleValue, textValue){
        if(this.noteToUpdate) {
            this.noteToUpdate.title = titleValue;
            this.noteToUpdate.text = textValue; 
            _alert_box__WEBPACK_IMPORTED_MODULE_2__.AlertBox.showAlertBox('Your note has been updated and saved.', 'alert-box__message--green', 'overlay-home-page');
            return this.noteToUpdate;
        } else {
            const title = titleValue;
            const text = textValue;
            const newNote = new _note__WEBPACK_IMPORTED_MODULE_1__.Note(title, text);
            _alert_box__WEBPACK_IMPORTED_MODULE_2__.AlertBox.showAlertBox('Note has been saved.', 'alert-box__message--green', 'overlay-home-page');
            return newNote;
        }
    }

    static checkUserInput() {
        const titleValue = document.getElementById('writing-area-title').value.trim();
        const textValue = document.getElementById('writing-area-text').value.trim();
        if(titleValue && textValue) {
            if(this.noteToUpdate) {
                if(this.noteToUpdate.title === titleValue && this.noteToUpdate.text === textValue) {
                    _alert_box__WEBPACK_IMPORTED_MODULE_2__.AlertBox.showAlertBox('Note must be updated before saving!', 'alert-box__message--red', 'overlay-alert-box');
                    return;
                }
            }
            const note = this.storeUserInput(titleValue, textValue);
            _local_storage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.saveNote(note);
        } else {
            _alert_box__WEBPACK_IMPORTED_MODULE_2__.AlertBox.showAlertBox('Fill empty field(s) before saving!',  'alert-box__message--red', 'overlay-alert-box');
            return;
        }
    }
    static removeWindow() {
        document.getElementById('overlay-home-page').remove();
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





class App {
    init() {
        document.getElementById('create-icon').addEventListener('click', ()=> {
            _js_writing_window__WEBPACK_IMPORTED_MODULE_1__.WritingWindow.displayWindow();
        })
        document.getElementById('view-button').addEventListener('click', ()=> {
            _js_note_viewing_window__WEBPACK_IMPORTED_MODULE_2__.NoteViewingWindow.displayWindow(_js_local_storage__WEBPACK_IMPORTED_MODULE_3__.LocalStorage.getNotes());
        })
    }
}
const app = new App();
app.init();



})();

/******/ })()
;
//# sourceMappingURL=2ac1e0e2705619559e8f.js.map