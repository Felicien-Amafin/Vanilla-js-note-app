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
  min-height: inherit;
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
.white-patch .search-button {
  font-size: 0.875rem;
  width: 4.375rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 6.25rem;
}
.white-patch .create-icon-label {
  text-align: center;
  font-size: 1rem;
  color: rgb(30, 46, 77);
  font-weight: 500;
}
.white-patch .create-icon {
  width: 6.25rem;
  height: 6.25rem;
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

.overlay {
  min-height: inherit;
  width: 100%;
  padding: 1.25rem;
  position: absolute;
  top: 0;
  z-index: 2000;
  background-color: rgb(47, 69, 114);
}

.window {
  height: 80vh;
  width: 100%;
  max-width: 31.25rem;
  background-color: white;
  border-radius: 0.625rem;
  position: relative;
  animation: fade-slide-in 0.6s ease-out forwards;
}
@media (min-width: 36rem) {
  .window {
    height: 95vh;
  }
}
.window__close-cross {
  color: rgb(95, 93, 93);
  font-size: 1.25rem;
  position: absolute;
  top: 0.3125rem;
  right: 0.75rem;
  font-family: monospace;
  color: rgb(95, 93, 93);
}
.window__close-cross:hover {
  color: rgba(30, 46, 77, 0.589);
  cursor: pointer;
}
.window .save-button {
  height: 3.125rem;
  width: 5rem;
  border-radius: 1.125rem;
  font-size: 0.875rem;
  outline: none;
}

.writing-area {
  height: 90%;
  width: 85%;
  margin-top: 0.625rem;
}
.writing-area_title {
  width: 100%;
  border-radius: 0.625rem;
  border: 0.0625rem solid rgba(146, 144, 144, 0.603);
  outline: none;
  padding: 0.625rem;
  height: 10%;
  margin-bottom: 0.9375rem;
  font-weight: 600;
}
.writing-area_title:focus {
  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);
}
.writing-area_text {
  width: 100%;
  border-radius: 0.625rem;
  border: 0.0625rem solid rgba(146, 144, 144, 0.603);
  outline: none;
  padding: 0.625rem;
  height: 100%;
  font-weight: 500;
  margin-bottom: 0.9375rem;
}
.writing-area_text:focus {
  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);
}`, "",{"version":3,"sources":["webpack://./src/sass/_base.scss","webpack://./src/sass/main.scss","webpack://./src/sass/_layout.scss","webpack://./src/sass/_components.scss"],"names":[],"mappings":"AAaA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,kCAAA;ACVJ;;ADaA;EACI,eAAA;ACVJ;;ADaA;EACI,iBAAA;EACA,iCAtBK;EAuBL,kBAAA;ACVJ;ADYI;EACI,mBAAA;EACA,iBAAA;ACVR;;ADeA;EACI,eAAA;EACA,YAhCI;EAiCJ,gCAAA;EACA,wDAAA;ACZJ;;ADeA;EACI,eAAA;EACA,gBAAA;EACA,YAxCI;EAyCJ,iCA3CK;EA4CL,YAAA;ACZJ;;ADeA;EACI,yCA/CiB;EAgDjB,eAAA;ACZJ;;AD0CA;EACI;IACE,4BAAA;ECvCJ;EDyCE;IACE,wBAAA;ECvCJ;AACF;AClDA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;ADoDJ;AClDI;EACI,YAAA;ADoDR;ACjDI;EACI,aAAA;ADmDR;AChDI;EACI,aAAA;ADkDR;;AEjEA;EACI,WAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBHEI;EGDJ,iBAAA;AFoEJ;AElEI;EACI,kDAAA;EACA,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,uBAAA;EACA,uBAAA;AFoER;AEnEQ;EACI,uCAAA;AFqEZ;AEjEI;EACI,mBAAA;EACA,eAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;AFmER;AEhEI;EACI,kBAAA;EACA,eAAA;EACA,sBH1BC;EG2BD,gBAAA;AFkER;AE/DI;EACI,cAAA;EACA,eAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;AFiER;AE/DQ;EACI,+CAAA;AFiEZ;AE9DQ;EACI,mBAAA;EACA,gBAAA;EACA,sBH5CH;AC4GT;AE5DI;EACI,aAAA;EACA,gBAAA;EACA,uBAAA;AF8DR;;AE1DA;EACI,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,MAAA;EACA,aAAA;EACA,kCHxDW;ACqHf;;AE1DA;EACI,YAAA;EACA,WAAA;EACA,mBAAA;EACA,uBHnEI;EGoEJ,uBAAA;EACA,kBAAA;EACA,+CAAA;AF6DJ;AD5DC;EGRD;IAUQ,YAAA;EF8DN;AACF;AE5DI;EACI,sBH1EI;EG2EJ,kBAAA;EACA,kBAAA;EACA,cAAA;EACA,cAAA;EACA,sBAAA;EACA,sBHhFI;AC8IZ;AE7DQ;EACI,8BHtFS;EGuFT,eAAA;AF+DZ;AE3DI;EACI,gBAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AF6DR;;AEzDA;EACI,WAAA;EACA,UAAA;EACA,oBAAA;AF4DJ;AE1DI;EHpDA,WAAA;EACA,uBAAA;EACA,kDAAA;EACA,aAAA;EACA,iBAAA;EGkDI,WAAA;EACA,wBAAA;EACA,gBAAA;AFgER;ADnHI;EACI,sEAAA;ACqHR;AEhEI;EH3DA,WAAA;EACA,uBAAA;EACA,kDAAA;EACA,aAAA;EACA,iBAAA;EGyDI,YAAA;EACA,gBAAA;EACA,wBAAA;AFsER;ADhII;EACI,sEAAA;ACkIR","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');\r\n\r\n//Colors\r\n$purple: rgb(30, 46, 77);\r\n$purple-transparent: rgba(30, 46, 77, 0.589);\r\n$white: white;\r\n$box-shadow-grey: rgb(88, 85, 85);\r\n$box-shadow-light-grey: rgba(146, 144, 144, 0.603);\r\n$dark-grey: rgb(95, 93, 93);\r\n$light-purple: rgb(47, 69, 114);\r\n\r\n//Reset\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Manrope', sans-serif;\r\n}\r\n\r\nhtml {\r\n    font-size: 100%;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    background-color: $purple;\r\n    position: relative;\r\n\r\n    main {\r\n        min-height: inherit;\r\n        padding: 1.875rem;\r\n    }\r\n}\r\n\r\n//Typography\r\nh1 {\r\n    font-size: 2rem;\r\n    color: $white;\r\n    font-family: 'Pacifico', cursive;\r\n    text-shadow: 0.0625rem 0.156rem 0.156rem $box-shadow-grey;\r\n}\r\n\r\nbutton {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: $white;\r\n    background-color: $purple;\r\n    border: none;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: $purple-transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n//mixins \r\n@mixin input-field {\r\n    width: 100%;\r\n    border-radius: 0.625rem;\r\n    border: 0.0625rem solid $box-shadow-light-grey;\r\n    outline: none;\r\n    padding: 0.625rem;\r\n    &:focus {\r\n        box-shadow: 0.09375rem 0.09375rem 0.1875rem $box-shadow-light-grey;\r\n    }\r\n}\r\n\r\n$breakpoints: (\r\n    'small': '36rem', // ≥576px\r\n    'medium': '48rem', // ≥768px\r\n    'large': '62rem', // ≥992p\r\n    'x-large': '75rem', // ≥1200px\r\n    'xx-large': '87.5rem', // ≥1400px\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n//animations\r\n@keyframes fade-slide-in {\r\n    from {\r\n      transform: translateY(-5rem);\r\n    }\r\n    to {\r\n      transform: translateY(0);\r\n    }\r\n  }","@import url(\"https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Manrope\", sans-serif;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: rgb(30, 46, 77);\n  position: relative;\n}\nbody main {\n  min-height: inherit;\n  padding: 1.875rem;\n}\n\nh1 {\n  font-size: 2rem;\n  color: white;\n  font-family: \"Pacifico\", cursive;\n  text-shadow: 0.0625rem 0.156rem 0.156rem rgb(88, 85, 85);\n}\n\nbutton {\n  font-size: 1rem;\n  font-weight: 600;\n  color: white;\n  background-color: rgb(30, 46, 77);\n  border: none;\n}\n\nbutton:hover {\n  background-color: rgba(30, 46, 77, 0.589);\n  cursor: pointer;\n}\n\n@keyframes fade-slide-in {\n  from {\n    transform: translateY(-5rem);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.flex-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.flex-col__gap20 {\n  gap: 1.25rem;\n}\n.flex-col__gap50 {\n  gap: 5.625rem;\n}\n.flex-col__gap70 {\n  gap: 4.375rem;\n}\n\n.white-patch {\n  width: 100%;\n  max-width: 31.25rem;\n  border-radius: 1.875rem;\n  background-color: white;\n  padding: 1.875rem;\n}\n.white-patch .search-field {\n  border: 0.0625rem solid rgba(146, 144, 144, 0.603);\n  outline: none;\n  padding: 0.875rem;\n  height: 3.125rem;\n  border-radius: 1.875rem;\n  margin-right: 0.3125rem;\n}\n.white-patch .search-field:focus {\n  border: 0.0625rem solid rgb(95, 93, 93);\n}\n.white-patch .search-button {\n  font-size: 0.875rem;\n  width: 4.375rem;\n  height: 2.5rem;\n  width: 2.5rem;\n  border-radius: 6.25rem;\n}\n.white-patch .create-icon-label {\n  text-align: center;\n  font-size: 1rem;\n  color: rgb(30, 46, 77);\n  font-weight: 500;\n}\n.white-patch .create-icon {\n  width: 6.25rem;\n  height: 6.25rem;\n  border: 0.156rem dashed rgb(30, 46, 77);\n  border-radius: 6.25rem;\n  cursor: pointer;\n}\n.white-patch .create-icon:hover {\n  border: 0.156rem dashed rgba(30, 46, 77, 0.589);\n}\n.white-patch .create-icon__cross {\n  font-size: 2.125rem;\n  font-weight: 500;\n  color: rgb(30, 46, 77);\n}\n.white-patch .view-button {\n  width: 7.5rem;\n  height: 3.125rem;\n  border-radius: 1.625rem;\n}\n\n.overlay {\n  min-height: inherit;\n  width: 100%;\n  padding: 1.25rem;\n  position: absolute;\n  top: 0;\n  z-index: 2000;\n  background-color: rgb(47, 69, 114);\n}\n\n.window {\n  height: 80vh;\n  width: 100%;\n  max-width: 31.25rem;\n  background-color: white;\n  border-radius: 0.625rem;\n  position: relative;\n  animation: fade-slide-in 0.6s ease-out forwards;\n}\n@media (min-width: 36rem) {\n  .window {\n    height: 95vh;\n  }\n}\n.window__close-cross {\n  color: rgb(95, 93, 93);\n  font-size: 1.25rem;\n  position: absolute;\n  top: 0.3125rem;\n  right: 0.75rem;\n  font-family: monospace;\n  color: rgb(95, 93, 93);\n}\n.window__close-cross:hover {\n  color: rgba(30, 46, 77, 0.589);\n  cursor: pointer;\n}\n.window .save-button {\n  height: 3.125rem;\n  width: 5rem;\n  border-radius: 1.125rem;\n  font-size: 0.875rem;\n  outline: none;\n}\n\n.writing-area {\n  height: 90%;\n  width: 85%;\n  margin-top: 0.625rem;\n}\n.writing-area_title {\n  width: 100%;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(146, 144, 144, 0.603);\n  outline: none;\n  padding: 0.625rem;\n  height: 10%;\n  margin-bottom: 0.9375rem;\n  font-weight: 600;\n}\n.writing-area_title:focus {\n  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);\n}\n.writing-area_text {\n  width: 100%;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(146, 144, 144, 0.603);\n  outline: none;\n  padding: 0.625rem;\n  height: 100%;\n  font-weight: 500;\n  margin-bottom: 0.9375rem;\n}\n.writing-area_text:focus {\n  box-shadow: 0.09375rem 0.09375rem 0.1875rem rgba(146, 144, 144, 0.603);\n}",".flex-col{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n    &__gap20 {\r\n        gap: 1.25rem;\r\n    }\r\n\r\n    &__gap50 {\r\n        gap: 5.625rem;\r\n    }\r\n\r\n    &__gap70 {\r\n        gap: 4.375rem;\r\n    }\r\n}",".white-patch {\r\n    width: 100%;\r\n    max-width: 31.25rem;\r\n    border-radius: 1.875rem;\r\n    background-color: $white;\r\n    padding: 1.875rem;\r\n\r\n    .search-field {\r\n        border: 0.0625rem solid $box-shadow-light-grey;\r\n        outline: none;\r\n        padding: 0.875rem;\r\n        height: 3.125rem;\r\n        border-radius: 1.875rem;\r\n        margin-right: 0.3125rem;\r\n        &:focus {\r\n            border: 0.0625rem solid $dark-grey;\r\n        }\r\n    }\r\n    \r\n    .search-button {\r\n        font-size: 0.875rem;\r\n        width: 4.375rem;\r\n        height: 2.5rem;\r\n        width: 2.5rem;\r\n        border-radius: 6.25rem;\r\n    }\r\n\r\n    .create-icon-label {\r\n        text-align: center;\r\n        font-size: 1rem;\r\n        color: $purple;\r\n        font-weight: 500;\r\n    }\r\n    \r\n    .create-icon {\r\n        width: 6.25rem;\r\n        height: 6.25rem;\r\n        border: 0.156rem dashed $purple;\r\n        border-radius: 6.25rem;\r\n        cursor: pointer;\r\n\r\n        &:hover{\r\n            border: 0.156rem dashed $purple-transparent;\r\n        }\r\n\r\n        &__cross {\r\n            font-size: 2.125rem;\r\n            font-weight: 500;\r\n            color: $purple;\r\n        }\r\n    }\r\n\r\n    .view-button {\r\n        width: 7.5rem;\r\n        height: 3.125rem;\r\n        border-radius: 1.625rem;\r\n    }\r\n}\r\n\r\n.overlay {\r\n    min-height: inherit;\r\n    width: 100%;\r\n    padding: 1.25rem;\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 2000;\r\n    background-color: $light-purple;\r\n}\r\n\r\n.window {\r\n    height: 80vh;\r\n    width: 100%;\r\n    max-width: 31.25rem;\r\n    background-color: $white;\r\n    border-radius: 0.625rem;\r\n    position: relative;\r\n    animation: fade-slide-in 0.6s ease-out forwards;\r\n \r\n    @include breakpoint(small) {\r\n        height: 95vh;\r\n    }\r\n    \r\n    &__close-cross {\r\n        color: $dark-grey;\r\n        font-size: 1.25rem;\r\n        position: absolute;\r\n        top: 0.3125rem;\r\n        right: 0.75rem;\r\n        font-family: monospace;\r\n        color: $dark-grey;\r\n        &:hover {\r\n            color: $purple-transparent;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n\r\n    .save-button {\r\n        height: 3.125rem;\r\n        width: 5rem;\r\n        border-radius: 1.125rem;\r\n        font-size: 0.875rem;\r\n        outline: none;\r\n    }\r\n}\r\n\r\n.writing-area {\r\n    height: 90%;\r\n    width: 85%;\r\n    margin-top: 0.625rem;\r\n\r\n    &_title {\r\n        @include input-field;\r\n        height: 10%;\r\n        margin-bottom: 0.9375rem;\r\n        font-weight: 600;\r\n    }\r\n\r\n    &_text {\r\n        @include input-field;\r\n        height: 100%;\r\n        font-weight: 500;\r\n        margin-bottom: 0.9375rem;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
        /* const notes = JSON.parse(localStorage.getItem('all-notes') || '[]') ;
        if(note.id) {

        } else {
            
        }
        notes.push(note);
        localStorage.setItem('all-notes', JSON.stringify(notes)); */
    }

    static saveNote(note) {
        console.log(note)
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
        this.id = Math.floor(Math.random() * 10000)
        this.date = new Date();
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



class WritingWindow {
    static data;
    static displayWindow(data) {
        const rootElement = document.getElementById('page-container');
        rootElement.insertAdjacentHTML('beforeend', 
        `<div id="overlay" class="overlay flex-col">
            <div id="writing-window" class="window flex-col">
                <span id="close-window-cross" class="window__close-cross">x</span>
                <form id="writing-area" class="writing-area flex-col">
                    <input id="writing-area-title" class="writing-area_title" type="text" autocomplete="off" placeholder="Enter title ...">
                    <textarea id="writing-area-text" class="writing-area_text" name="writing-area_text" placeholder="Enter text..." ></textarea>
                    <button id="save-button" class="save-button" type="button">Save</button>
                </form>
            </div>
        </div>
        `);
        if(data) {
            this.data = data;
            document.getElementById('writing-area-title').value = this.data.title;
            document.getElementById('writing-area-text').value = this.data.text;
        }
        document.getElementById('save-button').addEventListener('click', (event)=> {
            event.preventDefault();
            this.checkUserInput();
        });
    }

    static storeUserInput(titleValue, textValue){
        document.getElementById('save-button').disabled = true;
        if(this.data) {
            this.data.title = titleValue;
            this.data.text = textValue; 
            alert('Note has been updated');
            return this.data;
        } else {
            const title = titleValue;
            const text = textValue;
            const newNote = new _note__WEBPACK_IMPORTED_MODULE_1__.Note(title, text);
            alert('New note has been saved');
            return newNote;
        }
    }

    static checkUserInput() {
        const titleValue = document.getElementById('writing-area-title').value.trim();
        const textValue = document.getElementById('writing-area-text').value.trim();
        if(titleValue && textValue) {
            if(this.data) {
                if(this.data.title === titleValue && this.data.text === textValue) {
                    alert('Not saving because file still unchanged!');
                    return;
                }
            }
            const note = this.storeUserInput(titleValue, textValue);
            _local_storage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.saveNote(note);
        } else {
            alert('Fill empty field(s) before saving!');
            return;
        }
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
/* harmony import */ var _js_writing_window_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/writing-window.js */ "./src/js/writing-window.js");




class App {
    init() {
        document.getElementById('create-icon').addEventListener('click', ()=> {
            _js_writing_window_js__WEBPACK_IMPORTED_MODULE_1__.WritingWindow.displayWindow();
        })
    }
}

const app = new App();
app.init();



})();

/******/ })()
;
//# sourceMappingURL=8a6a7f8cd56a23bf8120.js.map