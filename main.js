/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  --text: rgb(220, 220, 220);
  --gray-dark: rgb(44, 44, 44);
  --gray-light: rgb(56, 56, 56);
  --blue-dark: rgb(56, 56, 175);
  --blue-light: rgb(82, 82, 251);
  --yellow-dark: rgb(204, 160, 0);
  --yellow-light: rgb(255, 200, 0);
  --red-dark: rgb(134, 43, 43);
  --red-light: rgb(198, 64, 64);
  --box-shadow: 0px 8px 5px -5px #171717;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: var(--gray-dark);
  font-family: "Lato", sans-serif;
  color: var(--text);
  height: 100vh;
}

header {
  background-image: linear-gradient(180deg, hsl(240, 52%, 45%) 0%, hsl(240, 51%, 47%) 9%, hsl(240, 51%, 50%) 18%, hsl(240, 54%, 52%) 27%, hsl(240, 59%, 53%) 36%, hsl(240, 63%, 55%) 45%, hsl(240, 68%, 57%) 55%, hsl(240, 73%, 59%) 64%, hsl(240, 78%, 60%) 73%, hsl(240, 83%, 62%) 82%, hsl(240, 89%, 64%) 91%, hsl(240, 95%, 65%) 100%);
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: var(--box-shadow);
}`, "",{"version":3,"sources":["webpack://./src/ui/colors.scss","webpack://./src/main.scss"],"names":[],"mappings":"AAAA;EACE,0BAAA;EACA,4BAAA;EACA,6BAAA;EACA,6BAAA;EACA,8BAAA;EACA,+BAAA;EACA,gCAAA;EACA,4BAAA;EACA,6BAAA;EACA,sCAAA;ACEF;;AATA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AAYF;;AATA;EACE,4BAAA;EACA,+BAAA;EACA,kBAAA;EACA,aAAA;AAYF;;AATA;EACE,wUAAA;EAeA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,iBAAA;EACA,6BAAA;AAFF","sourcesContent":["* {\n  --text: rgb(220, 220, 220);\n  --gray-dark: rgb(44, 44, 44);\n  --gray-light: rgb(56, 56, 56);\n  --blue-dark: rgb(56, 56, 175);\n  --blue-light: rgb(82, 82, 251);\n  --yellow-dark: rgb(204, 160, 0);\n  --yellow-light: rgb(255, 200, 0);\n  --red-dark: rgb(134, 43, 43);\n  --red-light: rgb(198, 64, 64);\n  --box-shadow: 0px 8px 5px -5px #171717;\n}\n","@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\n@import './ui/colors.scss';\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: var(--gray-dark);\n  font-family: 'Lato', sans-serif;\n  color: var(--text);\n  height: 100vh;\n}\n\nheader {\n  background-image: linear-gradient(\n    180deg,\n    hsl(240deg 52% 45%) 0%,\n    hsl(240deg 51% 47%) 9%,\n    hsl(240deg 51% 50%) 18%,\n    hsl(240deg 54% 52%) 27%,\n    hsl(240deg 59% 53%) 36%,\n    hsl(240deg 63% 55%) 45%,\n    hsl(240deg 68% 57%) 55%,\n    hsl(240deg 73% 59%) 64%,\n    hsl(240deg 78% 60%) 73%,\n    hsl(240deg 83% 62%) 82%,\n    hsl(240deg 89% 64%) 91%,\n    hsl(240deg 95% 65%) 100%\n  );\n  padding: 1.5rem;\n  display: flex;\n  justify-content: center;\n  font-size: 2.5rem;\n  box-shadow: var(--box-shadow);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/play-game.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/play-game.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  --text: rgb(220, 220, 220);
  --gray-dark: rgb(44, 44, 44);
  --gray-light: rgb(56, 56, 56);
  --blue-dark: rgb(56, 56, 175);
  --blue-light: rgb(82, 82, 251);
  --yellow-dark: rgb(204, 160, 0);
  --yellow-light: rgb(255, 200, 0);
  --red-dark: rgb(134, 43, 43);
  --red-light: rgb(198, 64, 64);
  --box-shadow: 0px 8px 5px -5px #171717;
}

.game {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.game h2 {
  margin-top: 3rem;
  font-size: 3rem;
}
.game h2.player-turn {
  color: var(--blue-light);
}
.game h2.computer-turn {
  color: var(--red-light);
}
.game h2.game-over {
  color: var(--yellow-dark);
}
.game .game-boards {
  display: flex;
  gap: 8rem;
  margin-top: 4rem;
}
.game .game-boards h3 {
  font-size: 1.6rem;
  text-align: center;
  background: var(--gray-light);
  padding: 0.4rem;
}
.game .game-boards .player h3 {
  color: var(--blue-light);
  border: 1px solid var(--blue-dark);
}
.game .game-boards .computer h3 {
  color: var(--red-light);
  border: 1px solid var(--red-dark);
}
.game .game-boards .game-board {
  margin-top: 1rem;
  padding: 1rem;
  background: var(--yellow-dark);
  box-shadow: var(--box-shadow);
}
.game .game-boards .game-board .board-grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  border-left: 1px solid black;
  border-top: 1px solid black;
}
.game .game-boards .game-board .board-grid .grid-square {
  width: 40px;
  height: 40px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
}
.game .game-boards .game-board .board-grid .grid-square.ship {
  background-color: var(--blue-dark);
}
.game .game-boards .game-board .board-grid .grid-square.shot-hit {
  background-color: var(--red-dark);
}
.game .game-boards .game-board .board-grid .grid-square.shot-miss {
  background-color: var(--gray-light);
}
.game .game-boards .game-board .board-grid .grid-square.not-your-turn {
  cursor: not-allowed;
}
.game .game-boards .player .game-board,
.game .game-boards .player .game-board .grid-square {
  cursor: not-allowed;
}
.game .game-over-button {
  margin-top: 4rem;
  color: var(--text);
  background: var(--blue-dark);
  font-size: 2rem;
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  cursor: pointer;
}
.game .game-over-button:active {
  transform: translateY(1px);
}`, "",{"version":3,"sources":["webpack://./src/ui/colors.scss","webpack://./src/ui/play-game.scss"],"names":[],"mappings":"AAAA;EACE,0BAAA;EACA,4BAAA;EACA,6BAAA;EACA,6BAAA;EACA,8BAAA;EACA,+BAAA;EACA,gCAAA;EACA,4BAAA;EACA,6BAAA;EACA,sCAAA;ACCF;;AATA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAYF;AAVE;EACE,gBAAA;EACA,eAAA;AAYJ;AAVI;EACE,wBAAA;AAYN;AATI;EACE,uBAAA;AAWN;AARI;EACE,yBAAA;AAUN;AANE;EACE,aAAA;EACA,SAAA;EACA,gBAAA;AAQJ;AANI;EACE,iBAAA;EACA,kBAAA;EACA,6BAAA;EACA,eAAA;AAQN;AALI;EACE,wBAAA;EACA,kCAAA;AAON;AAJI;EACE,uBAAA;EACA,iCAAA;AAMN;AAHI;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,6BAAA;AAKN;AAHM;EACE,aAAA;EACA,qCAAA;EACA,4BAAA;EACA,2BAAA;AAKR;AAHQ;EACE,WAAA;EACA,YAAA;EACA,6BAAA;EACA,8BAAA;EACA,eAAA;AAKV;AAHU;EACE,kCAAA;AAKZ;AAFU;EACE,iCAAA;AAIZ;AADU;EACE,mCAAA;AAGZ;AAAU;EACE,mBAAA;AAEZ;AAII;;EAEE,mBAAA;AAFN;AAME;EACE,gBAAA;EACA,kBAAA;EACA,4BAAA;EACA,eAAA;EACA,aAAA;EACA,SAAA;EACA,qBAAA;EACA,6BAAA;EACA,eAAA;AAJJ;AAMI;EACE,0BAAA;AAJN","sourcesContent":["* {\n  --text: rgb(220, 220, 220);\n  --gray-dark: rgb(44, 44, 44);\n  --gray-light: rgb(56, 56, 56);\n  --blue-dark: rgb(56, 56, 175);\n  --blue-light: rgb(82, 82, 251);\n  --yellow-dark: rgb(204, 160, 0);\n  --yellow-light: rgb(255, 200, 0);\n  --red-dark: rgb(134, 43, 43);\n  --red-light: rgb(198, 64, 64);\n  --box-shadow: 0px 8px 5px -5px #171717;\n}\n","@import './colors.scss';\n\n.game {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h2 {\n    margin-top: 3rem;\n    font-size: 3rem;\n\n    &.player-turn {\n      color: var(--blue-light);\n    }\n\n    &.computer-turn {\n      color: var(--red-light);\n    }\n\n    &.game-over {\n      color: var(--yellow-dark);\n    }\n  }\n\n  .game-boards {\n    display: flex;\n    gap: 8rem;\n    margin-top: 4rem;\n\n    h3 {\n      font-size: 1.6rem;\n      text-align: center;\n      background: var(--gray-light);\n      padding: 0.4rem;\n    }\n\n    .player h3 {\n      color: var(--blue-light);\n      border: 1px solid var(--blue-dark);\n    }\n\n    .computer h3 {\n      color: var(--red-light);\n      border: 1px solid var(--red-dark);\n    }\n\n    .game-board {\n      margin-top: 1rem;\n      padding: 1rem;\n      background: var(--yellow-dark);\n      box-shadow: var(--box-shadow);\n\n      .board-grid {\n        display: grid;\n        grid-template-columns: repeat(9, 1fr);\n        border-left: 1px solid black;\n        border-top: 1px solid black;\n\n        .grid-square {\n          width: 40px;\n          height: 40px;\n          border-right: 1px solid black;\n          border-bottom: 1px solid black;\n          cursor: pointer;\n\n          &.ship {\n            background-color: var(--blue-dark);\n          }\n\n          &.shot-hit {\n            background-color: var(--red-dark);\n          }\n\n          &.shot-miss {\n            background-color: var(--gray-light);\n          }\n\n          &.not-your-turn {\n            cursor: not-allowed;\n          }\n        }\n      }\n    }\n\n    .player .game-board,\n    .player .game-board .grid-square {\n      cursor: not-allowed;\n    }\n  }\n\n  .game-over-button {\n    margin-top: 4rem;\n    color: var(--text);\n    background: var(--blue-dark);\n    font-size: 2rem;\n    padding: 1rem;\n    border: 0;\n    border-radius: 0.5rem;\n    box-shadow: var(--box-shadow);\n    cursor: pointer;\n\n    &:active {\n      transform: translateY(1px);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/ship-placement.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/ship-placement.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  --text: rgb(220, 220, 220);
  --gray-dark: rgb(44, 44, 44);
  --gray-light: rgb(56, 56, 56);
  --blue-dark: rgb(56, 56, 175);
  --blue-light: rgb(82, 82, 251);
  --yellow-dark: rgb(204, 160, 0);
  --yellow-light: rgb(255, 200, 0);
  --red-dark: rgb(134, 43, 43);
  --red-light: rgb(198, 64, 64);
  --box-shadow: 0px 8px 5px -5px #171717;
}

.ship-placement {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ship-placement h2 {
  margin-top: 3rem;
  font-size: 2rem;
}
.ship-placement p {
  margin-top: 0.25rem;
  letter-spacing: 0.05rem;
}
.ship-placement p code {
  background-color: black;
  color: var(--yellow-dark);
  padding: 0.1rem 0.3rem;
  margin: 0 0.2rem;
  border-radius: 8px;
}
.ship-placement .placement-board {
  margin-top: 3rem;
  padding: 1rem;
  background: var(--yellow-dark);
  box-shadow: var(--box-shadow);
}
.ship-placement .placement-board .placement-grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  border-left: 1px solid black;
  border-top: 1px solid black;
}
.ship-placement .placement-board .placement-square {
  width: 40px;
  height: 40px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
}
.ship-placement .placement-board .placement-hover {
  background-color: var(--blue-light);
}
.ship-placement .placement-board .placement-ship {
  background-color: var(--blue-dark);
  cursor: not-allowed;
}
.ship-placement .placement-board .placement-invalid {
  cursor: not-allowed;
}`, "",{"version":3,"sources":["webpack://./src/ui/colors.scss","webpack://./src/ui/ship-placement.scss"],"names":[],"mappings":"AAAA;EACE,0BAAA;EACA,4BAAA;EACA,6BAAA;EACA,6BAAA;EACA,8BAAA;EACA,+BAAA;EACA,gCAAA;EACA,4BAAA;EACA,6BAAA;EACA,sCAAA;ACCF;;AATA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAYF;AAVE;EACE,gBAAA;EACA,eAAA;AAYJ;AATE;EACE,mBAAA;EACA,uBAAA;AAWJ;AATI;EACE,uBAAA;EACA,yBAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;AAWN;AAPE;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,6BAAA;AASJ;AAPI;EACE,aAAA;EACA,qCAAA;EACA,4BAAA;EACA,2BAAA;AASN;AANI;EACE,WAAA;EACA,YAAA;EACA,6BAAA;EACA,8BAAA;EACA,eAAA;AAQN;AALI;EACE,mCAAA;AAON;AAJI;EACE,kCAAA;EACA,mBAAA;AAMN;AAHI;EACE,mBAAA;AAKN","sourcesContent":["* {\n  --text: rgb(220, 220, 220);\n  --gray-dark: rgb(44, 44, 44);\n  --gray-light: rgb(56, 56, 56);\n  --blue-dark: rgb(56, 56, 175);\n  --blue-light: rgb(82, 82, 251);\n  --yellow-dark: rgb(204, 160, 0);\n  --yellow-light: rgb(255, 200, 0);\n  --red-dark: rgb(134, 43, 43);\n  --red-light: rgb(198, 64, 64);\n  --box-shadow: 0px 8px 5px -5px #171717;\n}\n","@import './colors.scss';\n\n.ship-placement {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h2 {\n    margin-top: 3rem;\n    font-size: 2rem;\n  }\n\n  p {\n    margin-top: 0.25rem;\n    letter-spacing: 0.05rem;\n\n    code {\n      background-color: black;\n      color: var(--yellow-dark);\n      padding: 0.1rem 0.3rem;\n      margin: 0 0.2rem;\n      border-radius: 8px;\n    }\n  }\n\n  .placement-board {\n    margin-top: 3rem;\n    padding: 1rem;\n    background: var(--yellow-dark);\n    box-shadow: var(--box-shadow);\n\n    .placement-grid {\n      display: grid;\n      grid-template-columns: repeat(9, 1fr);\n      border-left: 1px solid black;\n      border-top: 1px solid black;\n    }\n\n    .placement-square {\n      width: 40px;\n      height: 40px;\n      border-right: 1px solid black;\n      border-bottom: 1px solid black;\n      cursor: pointer;\n    }\n\n    .placement-hover {\n      background-color: var(--blue-light);\n    }\n\n    .placement-ship {\n      background-color: var(--blue-dark);\n      cursor: not-allowed;\n    }\n\n    .placement-invalid {\n      cursor: not-allowed;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/play-game.scss":
/*!*******************************!*\
  !*** ./src/ui/play-game.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_play_game_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./play-game.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/play-game.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_play_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_play_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_play_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_play_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/ship-placement.scss":
/*!************************************!*\
  !*** ./src/ui/ship-placement.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ship_placement_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./ship-placement.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/ship-placement.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ship_placement_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ship_placement_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ship_placement_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ship_placement_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/data/game.js":
/*!**************************!*\
  !*** ./src/data/game.js ***!
  \**************************/
/***/ ((module) => {

class Ship {
  constructor(length, orientation, coordinates) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.orientation = orientation;
    this.coordinates = coordinates;
  }

  hit() {
    if (!this.sunk) {
      this.hits++;
      if (this.hits === this.length) {
        this.sunk = true;
      }
    }
  }
}

class Gameboard {
  // 9 X X X X X X X X X X
  // 8 X X X X X X X X X X
  // 7 X X X X X X X X X X
  // 6 X X X X X X X X X X
  // 5 X X X X X X X X X X
  // 4 X X X X X X X X X X
  // 3 X X X X X X X X X X
  // 2 X X X X X X X X X X
  // 1 X X X X X X X X X X
  // O 1 2 3 4 5 6 7 7 8 9

  constructor() {
    this.board = {};
    this.ships = [];
    for (let x = 1; x < 10; x++) {
      for (let y = 1; y < 10; y++) {
        this.board[`x${x}-y${y}`] = { ship: null, hit: false };
      }
    }
  }

  checkGameEnd() {
    return this.ships.every((ship) => ship.sunk);
  }

  placeShip(ship) {
    const { x, y } = ship.coordinates;
    const isHorizontal = ship.orientation === 'horizontal';
    const mainCoord = isHorizontal ? x : y;
    this.ships.push(ship);
    for (let i = mainCoord; i < mainCoord + ship.length; i++) {
      this.board[`x${isHorizontal ? i : x}-y${isHorizontal ? y : i}`].ship =
        ship;
    }
  }

  receiveAttack(x, y) {
    const location = this.board[`x${x}-y${y}`];
    if (!location.hit) {
      location.hit = true;
      if (location.ship) {
        location.ship.hit();
      }
    }
  }
}

module.exports = { Gameboard, Ship };


/***/ }),

/***/ "./src/ui/play-game.js":
/*!*****************************!*\
  !*** ./src/ui/play-game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playGame: () => (/* binding */ playGame)
/* harmony export */ });
/* harmony import */ var _play_game_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-game.scss */ "./src/ui/play-game.scss");
/* harmony import */ var _data_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/game */ "./src/data/game.js");
/* harmony import */ var _data_game__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_game__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ship_placement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship-placement */ "./src/ui/ship-placement.js");




let playerGameboard = new _data_game__WEBPACK_IMPORTED_MODULE_1__.Gameboard();
let computerGameboard = new _data_game__WEBPACK_IMPORTED_MODULE_1__.Gameboard();

function playGame(shipsPlaced) {
  // clean state for new game if Player replays
  playerGameboard = new _data_game__WEBPACK_IMPORTED_MODULE_1__.Gameboard();
  computerGameboard = new _data_game__WEBPACK_IMPORTED_MODULE_1__.Gameboard();

  shipsPlaced.forEach((ship) => {
    const newShip = new _data_game__WEBPACK_IMPORTED_MODULE_1__.Ship(ship.length, ship.orientation, ship.coordinates);
    playerGameboard.placeShip(newShip);
  });

  initPageElements();
  initComputerBoard();
  placeShipsOnPage('player', playerGameboard);
  playerTurn();
}

function computerTurn() {
  const title = document.querySelector('.game h2');
  title.innerHTML = `Computer's turn`;
  title.classList.remove('player-turn');
  title.classList.add('computer-turn');

  const boardSquares = document.querySelectorAll('.computer .grid-square');
  boardSquares.forEach((sq) => {
    sq.classList.add('not-your-turn');
    sq.removeEventListener('click', playerClickHandler);
  });

  setTimeout(() => {
    let x = ((Math.random().toFixed(1) * 10) % 9) + 1;
    let y = ((Math.random().toFixed(1) * 10) % 9) + 1;

    while (playerGameboard.board[`x${x}-y${y}`].hit) {
      x = ((Math.random().toFixed(1) * 10) % 9) + 1;
      y = ((Math.random().toFixed(1) * 10) % 9) + 1;
    }

    playerGameboard.receiveAttack(x, y);
    const squareHit = document.querySelector(
      `.player .grid-square[data-x="${x}"][data-y="${y}"]`
    );

    if (playerGameboard.board[`x${x}-y${y}`].ship) {
      squareHit.classList.add('shot-hit');
    } else {
      squareHit.classList.add('shot-miss');
    }

    if (playerGameboard.checkGameEnd()) {
      gameOver('Computer');
    } else {
      playerTurn();
    }
  }, 1000);
}

function gameOver(winner) {
  const title = document.querySelector('.game h2');
  title.innerHTML = `${winner} wins!`;
  title.classList.remove('player-turn');
  title.classList.remove('computer-turn');
  title.classList.add('game-over');

  const boardSquares = document.querySelectorAll('.computer .grid-square');
  boardSquares.forEach((sq) => {
    sq.classList.add('not-your-turn');
    sq.removeEventListener('click', playerClickHandler);
  });

  const restartButton = document.createElement('button');
  restartButton.classList.add('game-over-button');
  restartButton.type = 'button';
  restartButton.innerHTML = 'Play another game';
  restartButton.addEventListener('click', _ship_placement__WEBPACK_IMPORTED_MODULE_2__.shipPlacement);
  document.querySelector('.game').appendChild(restartButton);
}

function initPageElements() {
  const main = document.querySelector('main');
  main.innerHTML = /* html */ `
  <div class="game">
    <h2 class="player-turn">Player's turn</h2>
    <div class="game-boards">
      <div class="player">
        <h3>Player</h3>
        <div class="game-board">
          <div class="board-grid"></div>
        </div>
      </div>
      <div class="computer">
        <h3>Computer</h3>
        <div class="game-board">
          <div class="board-grid"></div>
        </div>
      </div>
    </div>
  </div>
`;

  for (let y = 9; y > 0; y--) {
    for (let x = 1; x < 10; x++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      square.dataset.x = x;
      square.dataset.y = y;
      document.querySelector('.player .board-grid').appendChild(square);
      document
        .querySelector('.computer .board-grid')
        .appendChild(square.cloneNode());
    }
  }
}

function initComputerBoard() {
  for (let i = 5; i > 0; i--) {
    const length = i;
    const orientation =
      (Math.random().toFixed(1) * 10) % 2 ? 'horizontal' : 'vertical';
    const coordinates = {
      x: ((Math.random().toFixed(1) * 10) % 9) + 1,
      y: ((Math.random().toFixed(1) * 10) % 9) + 1,
    };
    const ship = new _data_game__WEBPACK_IMPORTED_MODULE_1__.Ship(length, orientation, coordinates);

    while (hasCollisonsOrOutOfBounds(ship)) {
      ship.coordinates.x = ((Math.random().toFixed(1) * 10) % 9) + 1;
      ship.coordinates.y = ((Math.random().toFixed(1) * 10) % 9) + 1;
    }

    computerGameboard.placeShip(ship);
  }

  function hasCollisonsOrOutOfBounds(ship) {
    const [mainAxis, mainAxisCoord] =
      ship.orientation === 'horizontal'
        ? ['x', ship.coordinates.x]
        : ['y', ship.coordinates.y];
    const [secondaryAxis, secondaryAxisCoord] =
      ship.orientation === 'horizontal'
        ? ['y', ship.coordinates.y]
        : ['x', ship.coordinates.x];
    const shipLength = ship.length;

    if (mainAxisCoord > 9 - (shipLength - 1)) {
      return true;
    }

    for (let i = mainAxisCoord; i < mainAxisCoord + shipLength; i++) {
      const x = ship.orientation === 'horizontal' ? i : secondaryAxisCoord;
      const y = ship.orientation === 'horizontal' ? secondaryAxisCoord : i;
      const sq = computerGameboard.board[`x${x}-y${y}`];
      if (sq.ship) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function placeShipsOnPage(player, board) {
  board.ships.forEach((ship) => {
    const { x, y } = ship.coordinates;
    const length = ship.length;
    const orientation = ship.orientation;
    const [mainAxis, mainAxisCoord] =
      orientation === 'horizontal' ? ['x', x] : ['y', y];
    const [secondaryAxis, secondaryAxisCoord] =
      orientation === 'horizontal' ? ['y', y] : ['x', x];

    for (let i = mainAxisCoord; i < mainAxisCoord + length; i++) {
      const sq = document.querySelector(
        `.${player} .game-board div[data-${mainAxis}="${i}"][data-${secondaryAxis}="${secondaryAxisCoord}"]`
      );
      sq.classList.add('ship');
    }
  });
}

function playerClickHandler(e) {
  const square = e.target;
  const x = square.dataset.x;
  const y = square.dataset.y;
  const coordinateInfo = computerGameboard.board[`x${x}-y${y}`];
  if (!coordinateInfo.hit) {
    computerGameboard.receiveAttack(x, y);
    if (coordinateInfo.ship) {
      square.classList.add('shot-hit');
    } else {
      square.classList.add('shot-miss');
    }

    if (computerGameboard.checkGameEnd()) {
      gameOver('Player');
    } else {
      computerTurn();
    }
  }
}

function playerTurn() {
  const title = document.querySelector('.game h2');
  title.innerHTML = `Player's turn`;
  title.classList.remove('computer-turn');
  title.classList.add('player-turn');

  const boardSquares = document.querySelectorAll('.computer .grid-square');
  boardSquares.forEach((sq) => {
    sq.classList.remove('not-your-turn');
    sq.addEventListener('click', playerClickHandler);
  });
}


/***/ }),

/***/ "./src/ui/ship-placement.js":
/*!**********************************!*\
  !*** ./src/ui/ship-placement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shipPlacement: () => (/* binding */ shipPlacement)
/* harmony export */ });
/* harmony import */ var _play_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-game */ "./src/ui/play-game.js");
/* harmony import */ var _ship_placement_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-placement.scss */ "./src/ui/ship-placement.scss");



const placementState = {
  orientation: 'horizontal',
  shipsLeft: [5, 4, 3, 2, 1],
  shipsPlaced: [],
};

function shipPlacement() {
  // clean state for new game if Player replays
  placementState.shipsLeft = [5, 4, 3, 2, 1];
  placementState.shipsPlaced = [];

  createGrid();
  document.addEventListener('keydown', handleSpacebar);

  const squares = document.querySelectorAll('.placement-square');
  squares.forEach((square) => {
    square.addEventListener('mouseenter', handleMouseEnter);
    square.addEventListener('mouseleave', handleMouseLeave);
    square.addEventListener('click', handleClick);
  });
}

function createGrid() {
  const main = document.querySelector('main');
  main.innerHTML = /* html */ `
    <div class="ship-placement">
      <h2>Place your ships</h2>
      <p>(press <code>spacebar</code> to rotate orientation)</p>
      <div class="placement-board">
        <div class="placement-grid"></div>        
      </div>
    </div>
  `;

  for (let y = 9; y > 0; y--) {
    for (let x = 1; x < 10; x++) {
      const square = document.createElement('div');
      square.classList.add('placement-square');
      square.dataset.x = x;
      square.dataset.y = y;
      document.querySelector('.placement-grid').appendChild(square);
    }
  }
}

function handleClick(e) {
  const square = e.target;
  const [mainAxis, mainAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['x', Number(square.dataset.x)]
      : ['y', Number(square.dataset.y)];
  const [secondaryAxis, secondaryAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['y', Number(square.dataset.y)]
      : ['x', Number(square.dataset.x)];
  const shipLength = placementState.shipsLeft[0];

  const validSquare = ![...square.classList].some(
    (className) =>
      className === 'placement-invalid' || className === 'placement-ship'
  );
  if (validSquare) {
    for (let i = mainAxisCoord; i < mainAxisCoord + shipLength; i++) {
      const sq = document.querySelector(
        `.placement-grid div[data-${mainAxis}="${i}"][data-${secondaryAxis}="${secondaryAxisCoord}"]`
      );
      sq.classList.add('placement-ship');
    }
    placementState.shipsPlaced.push({
      coordinates: {
        x: Number(square.dataset.x),
        y: Number(square.dataset.y),
      },
      length: placementState.shipsLeft[0],
      orientation: placementState.orientation,
    });
    placementState.shipsLeft.shift();
    if (placementState.shipsLeft.length === 0) {
      (0,_play_game__WEBPACK_IMPORTED_MODULE_0__.playGame)(placementState.shipsPlaced);
    }
  }
}

function handleMouseEnter(e) {
  const square = e.target;
  const [mainAxis, mainAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['x', Number(square.dataset.x)]
      : ['y', Number(square.dataset.y)];
  const [secondaryAxis, secondaryAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['y', Number(square.dataset.y)]
      : ['x', Number(square.dataset.x)];
  const shipLength = placementState.shipsLeft[0];

  if (
    mainAxisCoord > 9 - (shipLength - 1) ||
    square.classList.contains('placement-ship')
  ) {
    square.classList.add('placement-invalid');
    return;
  } else {
    // validity check loop
    for (let i = mainAxisCoord; i < mainAxisCoord + shipLength; i++) {
      const sq = document.querySelector(
        `.placement-grid div[data-${mainAxis}="${i}"][data-${secondaryAxis}="${secondaryAxisCoord}"]`
      );
      if (sq.classList.contains('placement-ship')) {
        square.classList.add('placement-invalid');
        return;
      }
    }
    // applying styling if valid
    for (let i = mainAxisCoord; i < mainAxisCoord + shipLength; i++) {
      const sq = document.querySelector(
        `.placement-grid div[data-${mainAxis}="${i}"][data-${secondaryAxis}="${secondaryAxisCoord}"]`
      );
      sq.classList.add('placement-hover');
    }
  }
}

function handleMouseLeave(e) {
  const square = e.target;
  const [mainAxis, mainAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['x', Number(square.dataset.x)]
      : ['y', Number(square.dataset.y)];
  const [secondaryAxis, secondaryAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['y', Number(square.dataset.y)]
      : ['x', Number(square.dataset.x)];
  const shipLength = placementState.shipsLeft[0];

  square.classList.remove('placement-invalid');
  if (mainAxisCoord <= 9 - (shipLength - 1)) {
    for (let i = mainAxisCoord; i < mainAxisCoord + shipLength; i++) {
      const sq = document.querySelector(
        `.placement-grid div[data-${mainAxis}="${i}"][data-${secondaryAxis}="${secondaryAxisCoord}"]`
      );
      sq.classList.remove('placement-hover');
    }
  }
}

function handleSpacebar(e) {
  if (e.code === 'Space') {
    placementState.orientation =
      placementState.orientation === 'horizontal' ? 'vertical' : 'horizontal';
  }
  const squares = document.querySelectorAll('.placement-square');
  squares.forEach((square) => square.classList.remove('placement-hover'));
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _ui_ship_placement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/ship-placement */ "./src/ui/ship-placement.js");



(0,_ui_ship_placement__WEBPACK_IMPORTED_MODULE_1__.shipPlacement)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdDQUFnQyxnQ0FBZ0M7QUFDaEU7QUFDQSxvQ0FBb0MsU0FBUyxJQUFJLEVBQUUsVUFBVSxjQUFjLElBQUksbUJBQW1CO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRTtBQUNBLG9DQUFvQyxTQUFTLElBQUksRUFBRSxVQUFVLGNBQWMsSUFBSSxtQkFBbUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0Esb0NBQW9DLFNBQVMsSUFBSSxFQUFFLFVBQVUsY0FBYyxJQUFJLG1CQUFtQjtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMzSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQytCOztBQUVwRCxpRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvcGxheS1nYW1lLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9zaGlwLXBsYWNlbWVudC5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uc2Nzcz80ZTUzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvcGxheS1nYW1lLnNjc3M/MDQzOCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3NoaXAtcGxhY2VtZW50LnNjc3M/NGJmYyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGF0YS9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvcGxheS1nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvc2hpcC1wbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgLS10ZXh0OiByZ2IoMjIwLCAyMjAsIDIyMCk7XG4gIC0tZ3JheS1kYXJrOiByZ2IoNDQsIDQ0LCA0NCk7XG4gIC0tZ3JheS1saWdodDogcmdiKDU2LCA1NiwgNTYpO1xuICAtLWJsdWUtZGFyazogcmdiKDU2LCA1NiwgMTc1KTtcbiAgLS1ibHVlLWxpZ2h0OiByZ2IoODIsIDgyLCAyNTEpO1xuICAtLXllbGxvdy1kYXJrOiByZ2IoMjA0LCAxNjAsIDApO1xuICAtLXllbGxvdy1saWdodDogcmdiKDI1NSwgMjAwLCAwKTtcbiAgLS1yZWQtZGFyazogcmdiKDEzNCwgNDMsIDQzKTtcbiAgLS1yZWQtbGlnaHQ6IHJnYigxOTgsIDY0LCA2NCk7XG4gIC0tYm94LXNoYWRvdzogMHB4IDhweCA1cHggLTVweCAjMTcxNzE3O1xufVxuXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS1kYXJrKTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIGhzbCgyNDAsIDUyJSwgNDUlKSAwJSwgaHNsKDI0MCwgNTElLCA0NyUpIDklLCBoc2woMjQwLCA1MSUsIDUwJSkgMTglLCBoc2woMjQwLCA1NCUsIDUyJSkgMjclLCBoc2woMjQwLCA1OSUsIDUzJSkgMzYlLCBoc2woMjQwLCA2MyUsIDU1JSkgNDUlLCBoc2woMjQwLCA2OCUsIDU3JSkgNTUlLCBoc2woMjQwLCA3MyUsIDU5JSkgNjQlLCBoc2woMjQwLCA3OCUsIDYwJSkgNzMlLCBoc2woMjQwLCA4MyUsIDYyJSkgODIlLCBoc2woMjQwLCA4OSUsIDY0JSkgOTElLCBoc2woMjQwLCA5NSUsIDY1JSkgMTAwJSk7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHNDQUFBO0FDRUY7O0FBVEE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBWUY7O0FBVEE7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBWUY7O0FBVEE7RUFDRSx3VUFBQTtFQWVBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBRkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAtLXRleHQ6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gIC0tZ3JheS1kYXJrOiByZ2IoNDQsIDQ0LCA0NCk7XFxuICAtLWdyYXktbGlnaHQ6IHJnYig1NiwgNTYsIDU2KTtcXG4gIC0tYmx1ZS1kYXJrOiByZ2IoNTYsIDU2LCAxNzUpO1xcbiAgLS1ibHVlLWxpZ2h0OiByZ2IoODIsIDgyLCAyNTEpO1xcbiAgLS15ZWxsb3ctZGFyazogcmdiKDIwNCwgMTYwLCAwKTtcXG4gIC0teWVsbG93LWxpZ2h0OiByZ2IoMjU1LCAyMDAsIDApO1xcbiAgLS1yZWQtZGFyazogcmdiKDEzNCwgNDMsIDQzKTtcXG4gIC0tcmVkLWxpZ2h0OiByZ2IoMTk4LCA2NCwgNjQpO1xcbiAgLS1ib3gtc2hhZG93OiAwcHggOHB4IDVweCAtNXB4ICMxNzE3MTc7XFxufVxcblwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0ICcuL3VpL2NvbG9ycy5zY3NzJztcXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktZGFyayk7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMTgwZGVnLFxcbiAgICBoc2woMjQwZGVnIDUyJSA0NSUpIDAlLFxcbiAgICBoc2woMjQwZGVnIDUxJSA0NyUpIDklLFxcbiAgICBoc2woMjQwZGVnIDUxJSA1MCUpIDE4JSxcXG4gICAgaHNsKDI0MGRlZyA1NCUgNTIlKSAyNyUsXFxuICAgIGhzbCgyNDBkZWcgNTklIDUzJSkgMzYlLFxcbiAgICBoc2woMjQwZGVnIDYzJSA1NSUpIDQ1JSxcXG4gICAgaHNsKDI0MGRlZyA2OCUgNTclKSA1NSUsXFxuICAgIGhzbCgyNDBkZWcgNzMlIDU5JSkgNjQlLFxcbiAgICBoc2woMjQwZGVnIDc4JSA2MCUpIDczJSxcXG4gICAgaHNsKDI0MGRlZyA4MyUgNjIlKSA4MiUsXFxuICAgIGhzbCgyNDBkZWcgODklIDY0JSkgOTElLFxcbiAgICBoc2woMjQwZGVnIDk1JSA2NSUpIDEwMCVcXG4gICk7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAtLXRleHQ6IHJnYigyMjAsIDIyMCwgMjIwKTtcbiAgLS1ncmF5LWRhcms6IHJnYig0NCwgNDQsIDQ0KTtcbiAgLS1ncmF5LWxpZ2h0OiByZ2IoNTYsIDU2LCA1Nik7XG4gIC0tYmx1ZS1kYXJrOiByZ2IoNTYsIDU2LCAxNzUpO1xuICAtLWJsdWUtbGlnaHQ6IHJnYig4MiwgODIsIDI1MSk7XG4gIC0teWVsbG93LWRhcms6IHJnYigyMDQsIDE2MCwgMCk7XG4gIC0teWVsbG93LWxpZ2h0OiByZ2IoMjU1LCAyMDAsIDApO1xuICAtLXJlZC1kYXJrOiByZ2IoMTM0LCA0MywgNDMpO1xuICAtLXJlZC1saWdodDogcmdiKDE5OCwgNjQsIDY0KTtcbiAgLS1ib3gtc2hhZG93OiAwcHggOHB4IDVweCAtNXB4ICMxNzE3MTc7XG59XG5cbi5nYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nYW1lIGgyIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuLmdhbWUgaDIucGxheWVyLXR1cm4ge1xuICBjb2xvcjogdmFyKC0tYmx1ZS1saWdodCk7XG59XG4uZ2FtZSBoMi5jb21wdXRlci10dXJuIHtcbiAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XG59XG4uZ2FtZSBoMi5nYW1lLW92ZXIge1xuICBjb2xvcjogdmFyKC0teWVsbG93LWRhcmspO1xufVxuLmdhbWUgLmdhbWUtYm9hcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cmVtO1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuLmdhbWUgLmdhbWUtYm9hcmRzIGgzIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS1saWdodCk7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn1cbi5nYW1lIC5nYW1lLWJvYXJkcyAucGxheWVyIGgzIHtcbiAgY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlLWRhcmspO1xufVxuLmdhbWUgLmdhbWUtYm9hcmRzIC5jb21wdXRlciBoMyB7XG4gIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQtZGFyayk7XG59XG4uZ2FtZSAuZ2FtZS1ib2FyZHMgLmdhbWUtYm9hcmQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3ctZGFyayk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuLmdhbWUgLmdhbWUtYm9hcmRzIC5nYW1lLWJvYXJkIC5ib2FyZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSwgMWZyKTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xufVxuLmdhbWUgLmdhbWUtYm9hcmRzIC5nYW1lLWJvYXJkIC5ib2FyZC1ncmlkIC5ncmlkLXNxdWFyZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nYW1lIC5nYW1lLWJvYXJkcyAuZ2FtZS1ib2FyZCAuYm9hcmQtZ3JpZCAuZ3JpZC1zcXVhcmUuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtZGFyayk7XG59XG4uZ2FtZSAuZ2FtZS1ib2FyZHMgLmdhbWUtYm9hcmQgLmJvYXJkLWdyaWQgLmdyaWQtc3F1YXJlLnNob3QtaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWRhcmspO1xufVxuLmdhbWUgLmdhbWUtYm9hcmRzIC5nYW1lLWJvYXJkIC5ib2FyZC1ncmlkIC5ncmlkLXNxdWFyZS5zaG90LW1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWxpZ2h0KTtcbn1cbi5nYW1lIC5nYW1lLWJvYXJkcyAuZ2FtZS1ib2FyZCAuYm9hcmQtZ3JpZCAuZ3JpZC1zcXVhcmUubm90LXlvdXItdHVybiB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uZ2FtZSAuZ2FtZS1ib2FyZHMgLnBsYXllciAuZ2FtZS1ib2FyZCxcbi5nYW1lIC5nYW1lLWJvYXJkcyAucGxheWVyIC5nYW1lLWJvYXJkIC5ncmlkLXNxdWFyZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uZ2FtZSAuZ2FtZS1vdmVyLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1kYXJrKTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nYW1lIC5nYW1lLW92ZXItYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvcGxheS1nYW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtBQ0NGOztBQVRBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFZRjtBQVZFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBWUo7QUFWSTtFQUNFLHdCQUFBO0FBWU47QUFUSTtFQUNFLHVCQUFBO0FBV047QUFSSTtFQUNFLHlCQUFBO0FBVU47QUFORTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFRSjtBQU5JO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQVFOO0FBTEk7RUFDRSx3QkFBQTtFQUNBLGtDQUFBO0FBT047QUFKSTtFQUNFLHVCQUFBO0VBQ0EsaUNBQUE7QUFNTjtBQUhJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQUtOO0FBSE07RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBS1I7QUFIUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFLVjtBQUhVO0VBQ0Usa0NBQUE7QUFLWjtBQUZVO0VBQ0UsaUNBQUE7QUFJWjtBQURVO0VBQ0UsbUNBQUE7QUFHWjtBQUFVO0VBQ0UsbUJBQUE7QUFFWjtBQUlJOztFQUVFLG1CQUFBO0FBRk47QUFNRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBSko7QUFNSTtFQUNFLDBCQUFBO0FBSk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAtLXRleHQ6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gIC0tZ3JheS1kYXJrOiByZ2IoNDQsIDQ0LCA0NCk7XFxuICAtLWdyYXktbGlnaHQ6IHJnYig1NiwgNTYsIDU2KTtcXG4gIC0tYmx1ZS1kYXJrOiByZ2IoNTYsIDU2LCAxNzUpO1xcbiAgLS1ibHVlLWxpZ2h0OiByZ2IoODIsIDgyLCAyNTEpO1xcbiAgLS15ZWxsb3ctZGFyazogcmdiKDIwNCwgMTYwLCAwKTtcXG4gIC0teWVsbG93LWxpZ2h0OiByZ2IoMjU1LCAyMDAsIDApO1xcbiAgLS1yZWQtZGFyazogcmdiKDEzNCwgNDMsIDQzKTtcXG4gIC0tcmVkLWxpZ2h0OiByZ2IoMTk4LCA2NCwgNjQpO1xcbiAgLS1ib3gtc2hhZG93OiAwcHggOHB4IDVweCAtNXB4ICMxNzE3MTc7XFxufVxcblwiLFwiQGltcG9ydCAnLi9jb2xvcnMuc2Nzcyc7XFxuXFxuLmdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaDIge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuXFxuICAgICYucGxheWVyLXR1cm4ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG4gICAgfVxcblxcbiAgICAmLmNvbXB1dGVyLXR1cm4ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xcbiAgICB9XFxuXFxuICAgICYuZ2FtZS1vdmVyIHtcXG4gICAgICBjb2xvcjogdmFyKC0teWVsbG93LWRhcmspO1xcbiAgICB9XFxuICB9XFxuXFxuICAuZ2FtZS1ib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhyZW07XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuXFxuICAgIGgzIHtcXG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS1saWdodCk7XFxuICAgICAgcGFkZGluZzogMC40cmVtO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXIgaDMge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1ibHVlLWxpZ2h0KTtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIC5jb21wdXRlciBoMyB7XFxuICAgICAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmVkLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lLWJvYXJkIHtcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LWRhcmspO1xcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcblxcbiAgICAgIC5ib2FyZC1ncmlkIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LCAxZnIpO1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgICAgIC5ncmlkLXNxdWFyZSB7XFxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICAgJi5zaGlwIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWRhcmspO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICYuc2hvdC1oaXQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1kYXJrKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAmLnNob3QtbWlzcyB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1saWdodCk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgJi5ub3QteW91ci10dXJuIHtcXG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXIgLmdhbWUtYm9hcmQsXFxuICAgIC5wbGF5ZXIgLmdhbWUtYm9hcmQgLmdyaWQtc3F1YXJlIHtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICB9XFxuICB9XFxuXFxuICAuZ2FtZS1vdmVyLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1kYXJrKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJjphY3RpdmUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIC0tdGV4dDogcmdiKDIyMCwgMjIwLCAyMjApO1xuICAtLWdyYXktZGFyazogcmdiKDQ0LCA0NCwgNDQpO1xuICAtLWdyYXktbGlnaHQ6IHJnYig1NiwgNTYsIDU2KTtcbiAgLS1ibHVlLWRhcms6IHJnYig1NiwgNTYsIDE3NSk7XG4gIC0tYmx1ZS1saWdodDogcmdiKDgyLCA4MiwgMjUxKTtcbiAgLS15ZWxsb3ctZGFyazogcmdiKDIwNCwgMTYwLCAwKTtcbiAgLS15ZWxsb3ctbGlnaHQ6IHJnYigyNTUsIDIwMCwgMCk7XG4gIC0tcmVkLWRhcms6IHJnYigxMzQsIDQzLCA0Myk7XG4gIC0tcmVkLWxpZ2h0OiByZ2IoMTk4LCA2NCwgNjQpO1xuICAtLWJveC1zaGFkb3c6IDBweCA4cHggNXB4IC01cHggIzE3MTcxNztcbn1cblxuLnNoaXAtcGxhY2VtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaGlwLXBsYWNlbWVudCBoMiB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5zaGlwLXBsYWNlbWVudCBwIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG59XG4uc2hpcC1wbGFjZW1lbnQgcCBjb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB2YXIoLS15ZWxsb3ctZGFyayk7XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjNyZW07XG4gIG1hcmdpbjogMCAwLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5zaGlwLXBsYWNlbWVudCAucGxhY2VtZW50LWJvYXJkIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LWRhcmspO1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbn1cbi5zaGlwLXBsYWNlbWVudCAucGxhY2VtZW50LWJvYXJkIC5wbGFjZW1lbnQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDFmcik7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbn1cbi5zaGlwLXBsYWNlbWVudCAucGxhY2VtZW50LWJvYXJkIC5wbGFjZW1lbnQtc3F1YXJlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNoaXAtcGxhY2VtZW50IC5wbGFjZW1lbnQtYm9hcmQgLnBsYWNlbWVudC1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xufVxuLnNoaXAtcGxhY2VtZW50IC5wbGFjZW1lbnQtYm9hcmQgLnBsYWNlbWVudC1zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5zaGlwLXBsYWNlbWVudCAucGxhY2VtZW50LWJvYXJkIC5wbGFjZW1lbnQtaW52YWxpZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zaGlwLXBsYWNlbWVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7QUNDRjs7QUFUQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBWUY7QUFWRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQVlKO0FBVEU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBV0o7QUFUSTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFXTjtBQVBFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQVNKO0FBUEk7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBU047QUFOSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFRTjtBQUxJO0VBQ0UsbUNBQUE7QUFPTjtBQUpJO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtBQU1OO0FBSEk7RUFDRSxtQkFBQTtBQUtOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgLS10ZXh0OiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAtLWdyYXktZGFyazogcmdiKDQ0LCA0NCwgNDQpO1xcbiAgLS1ncmF5LWxpZ2h0OiByZ2IoNTYsIDU2LCA1Nik7XFxuICAtLWJsdWUtZGFyazogcmdiKDU2LCA1NiwgMTc1KTtcXG4gIC0tYmx1ZS1saWdodDogcmdiKDgyLCA4MiwgMjUxKTtcXG4gIC0teWVsbG93LWRhcms6IHJnYigyMDQsIDE2MCwgMCk7XFxuICAtLXllbGxvdy1saWdodDogcmdiKDI1NSwgMjAwLCAwKTtcXG4gIC0tcmVkLWRhcms6IHJnYigxMzQsIDQzLCA0Myk7XFxuICAtLXJlZC1saWdodDogcmdiKDE5OCwgNjQsIDY0KTtcXG4gIC0tYm94LXNoYWRvdzogMHB4IDhweCA1cHggLTVweCAjMTcxNzE3O1xcbn1cXG5cIixcIkBpbXBvcnQgJy4vY29sb3JzLnNjc3MnO1xcblxcbi5zaGlwLXBsYWNlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIHAge1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG5cXG4gICAgY29kZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgY29sb3I6IHZhcigtLXllbGxvdy1kYXJrKTtcXG4gICAgICBwYWRkaW5nOiAwLjFyZW0gMC4zcmVtO1xcbiAgICAgIG1hcmdpbjogMCAwLjJyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAucGxhY2VtZW50LWJvYXJkIHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LWRhcmspO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG5cXG4gICAgLnBsYWNlbWVudC1ncmlkIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDFmcik7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICAgIH1cXG5cXG4gICAgLnBsYWNlbWVudC1zcXVhcmUge1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5wbGFjZW1lbnQtaG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbGlnaHQpO1xcbiAgICB9XFxuXFxuICAgIC5wbGFjZW1lbnQtc2hpcCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1kYXJrKTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICB9XFxuXFxuICAgIC5wbGFjZW1lbnQtaW52YWxpZCB7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGF5LWdhbWUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BsYXktZ2FtZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwLXBsYWNlbWVudC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcC1wbGFjZW1lbnQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgb3JpZW50YXRpb24sIGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIGlmICghdGhpcy5zdW5rKSB7XG4gICAgICB0aGlzLmhpdHMrKztcbiAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIC8vIDkgWCBYIFggWCBYIFggWCBYIFggWFxuICAvLyA4IFggWCBYIFggWCBYIFggWCBYIFhcbiAgLy8gNyBYIFggWCBYIFggWCBYIFggWCBYXG4gIC8vIDYgWCBYIFggWCBYIFggWCBYIFggWFxuICAvLyA1IFggWCBYIFggWCBYIFggWCBYIFhcbiAgLy8gNCBYIFggWCBYIFggWCBYIFggWCBYXG4gIC8vIDMgWCBYIFggWCBYIFggWCBYIFggWFxuICAvLyAyIFggWCBYIFggWCBYIFggWCBYIFhcbiAgLy8gMSBYIFggWCBYIFggWCBYIFggWCBYXG4gIC8vIE8gMSAyIDMgNCA1IDYgNyA3IDggOVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB7fTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPCAxMDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMTsgeSA8IDEwOyB5KyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtgeCR7eH0teSR7eX1gXSA9IHsgc2hpcDogbnVsbCwgaGl0OiBmYWxzZSB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrR2FtZUVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zdW5rKTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBzaGlwLmNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJztcbiAgICBjb25zdCBtYWluQ29vcmQgPSBpc0hvcml6b250YWwgPyB4IDogeTtcbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgZm9yIChsZXQgaSA9IG1haW5Db29yZDsgaSA8IG1haW5Db29yZCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYm9hcmRbYHgke2lzSG9yaXpvbnRhbCA/IGkgOiB4fS15JHtpc0hvcml6b250YWwgPyB5IDogaX1gXS5zaGlwID1cbiAgICAgICAgc2hpcDtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMuYm9hcmRbYHgke3h9LXkke3l9YF07XG4gICAgaWYgKCFsb2NhdGlvbi5oaXQpIHtcbiAgICAgIGxvY2F0aW9uLmhpdCA9IHRydWU7XG4gICAgICBpZiAobG9jYXRpb24uc2hpcCkge1xuICAgICAgICBsb2NhdGlvbi5zaGlwLmhpdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgR2FtZWJvYXJkLCBTaGlwIH07XG4iLCJpbXBvcnQgJy4vcGxheS1nYW1lLnNjc3MnO1xuaW1wb3J0IHsgR2FtZWJvYXJkLCBTaGlwIH0gZnJvbSAnLi4vZGF0YS9nYW1lJztcbmltcG9ydCB7IHNoaXBQbGFjZW1lbnQgfSBmcm9tICcuL3NoaXAtcGxhY2VtZW50JztcblxubGV0IHBsYXllckdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmxldCBjb21wdXRlckdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlHYW1lKHNoaXBzUGxhY2VkKSB7XG4gIC8vIGNsZWFuIHN0YXRlIGZvciBuZXcgZ2FtZSBpZiBQbGF5ZXIgcmVwbGF5c1xuICBwbGF5ZXJHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGNvbXB1dGVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIHNoaXBzUGxhY2VkLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAoc2hpcC5sZW5ndGgsIHNoaXAub3JpZW50YXRpb24sIHNoaXAuY29vcmRpbmF0ZXMpO1xuICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAobmV3U2hpcCk7XG4gIH0pO1xuXG4gIGluaXRQYWdlRWxlbWVudHMoKTtcbiAgaW5pdENvbXB1dGVyQm9hcmQoKTtcbiAgcGxhY2VTaGlwc09uUGFnZSgncGxheWVyJywgcGxheWVyR2FtZWJvYXJkKTtcbiAgcGxheWVyVHVybigpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlclR1cm4oKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUgaDInKTtcbiAgdGl0bGUuaW5uZXJIVE1MID0gYENvbXB1dGVyJ3MgdHVybmA7XG4gIHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci10dXJuJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXR1cm4nKTtcblxuICBjb25zdCBib2FyZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXIgLmdyaWQtc3F1YXJlJyk7XG4gIGJvYXJkU3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuICAgIHNxLmNsYXNzTGlzdC5hZGQoJ25vdC15b3VyLXR1cm4nKTtcbiAgICBzcS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckNsaWNrSGFuZGxlcik7XG4gIH0pO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGxldCB4ID0gKChNYXRoLnJhbmRvbSgpLnRvRml4ZWQoMSkgKiAxMCkgJSA5KSArIDE7XG4gICAgbGV0IHkgPSAoKE1hdGgucmFuZG9tKCkudG9GaXhlZCgxKSAqIDEwKSAlIDkpICsgMTtcblxuICAgIHdoaWxlIChwbGF5ZXJHYW1lYm9hcmQuYm9hcmRbYHgke3h9LXkke3l9YF0uaGl0KSB7XG4gICAgICB4ID0gKChNYXRoLnJhbmRvbSgpLnRvRml4ZWQoMSkgKiAxMCkgJSA5KSArIDE7XG4gICAgICB5ID0gKChNYXRoLnJhbmRvbSgpLnRvRml4ZWQoMSkgKiAxMCkgJSA5KSArIDE7XG4gICAgfVxuXG4gICAgcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgY29uc3Qgc3F1YXJlSGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAucGxheWVyIC5ncmlkLXNxdWFyZVtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gXG4gICAgKTtcblxuICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQuYm9hcmRbYHgke3h9LXkke3l9YF0uc2hpcCkge1xuICAgICAgc3F1YXJlSGl0LmNsYXNzTGlzdC5hZGQoJ3Nob3QtaGl0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNxdWFyZUhpdC5jbGFzc0xpc3QuYWRkKCdzaG90LW1pc3MnKTtcbiAgICB9XG5cbiAgICBpZiAocGxheWVyR2FtZWJvYXJkLmNoZWNrR2FtZUVuZCgpKSB7XG4gICAgICBnYW1lT3ZlcignQ29tcHV0ZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyVHVybigpO1xuICAgIH1cbiAgfSwgMTAwMCk7XG59XG5cbmZ1bmN0aW9uIGdhbWVPdmVyKHdpbm5lcikge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lIGgyJyk7XG4gIHRpdGxlLmlubmVySFRNTCA9IGAke3dpbm5lcn0gd2lucyFgO1xuICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXItdHVybicpO1xuICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wdXRlci10dXJuJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2dhbWUtb3ZlcicpO1xuXG4gIGNvbnN0IGJvYXJkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlciAuZ3JpZC1zcXVhcmUnKTtcbiAgYm9hcmRTcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4gICAgc3EuY2xhc3NMaXN0LmFkZCgnbm90LXlvdXItdHVybicpO1xuICAgIHNxLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQ2xpY2tIYW5kbGVyKTtcbiAgfSk7XG5cbiAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dhbWUtb3Zlci1idXR0b24nKTtcbiAgcmVzdGFydEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gIHJlc3RhcnRCdXR0b24uaW5uZXJIVE1MID0gJ1BsYXkgYW5vdGhlciBnYW1lJztcbiAgcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNoaXBQbGFjZW1lbnQpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpLmFwcGVuZENoaWxkKHJlc3RhcnRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBpbml0UGFnZUVsZW1lbnRzKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBtYWluLmlubmVySFRNTCA9IC8qIGh0bWwgKi8gYFxuICA8ZGl2IGNsYXNzPVwiZ2FtZVwiPlxuICAgIDxoMiBjbGFzcz1cInBsYXllci10dXJuXCI+UGxheWVyJ3MgdHVybjwvaDI+XG4gICAgPGRpdiBjbGFzcz1cImdhbWUtYm9hcmRzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGxheWVyXCI+XG4gICAgICAgIDxoMz5QbGF5ZXI8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1ib2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZC1ncmlkXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXJcIj5cbiAgICAgICAgPGgzPkNvbXB1dGVyPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtYm9hcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtZ3JpZFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG5cbiAgZm9yIChsZXQgeSA9IDk7IHkgPiAwOyB5LS0pIHtcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8IDEwOyB4KyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2dyaWQtc3F1YXJlJyk7XG4gICAgICBzcXVhcmUuZGF0YXNldC54ID0geDtcbiAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSB5O1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllciAuYm9hcmQtZ3JpZCcpLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyIC5ib2FyZC1ncmlkJylcbiAgICAgICAgLmFwcGVuZENoaWxkKHNxdWFyZS5jbG9uZU5vZGUoKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlckJvYXJkKCkge1xuICBmb3IgKGxldCBpID0gNTsgaSA+IDA7IGktLSkge1xuICAgIGNvbnN0IGxlbmd0aCA9IGk7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPVxuICAgICAgKE1hdGgucmFuZG9tKCkudG9GaXhlZCgxKSAqIDEwKSAlIDIgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xuICAgICAgeDogKChNYXRoLnJhbmRvbSgpLnRvRml4ZWQoMSkgKiAxMCkgJSA5KSArIDEsXG4gICAgICB5OiAoKE1hdGgucmFuZG9tKCkudG9GaXhlZCgxKSAqIDEwKSAlIDkpICsgMSxcbiAgICB9O1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgsIG9yaWVudGF0aW9uLCBjb29yZGluYXRlcyk7XG5cbiAgICB3aGlsZSAoaGFzQ29sbGlzb25zT3JPdXRPZkJvdW5kcyhzaGlwKSkge1xuICAgICAgc2hpcC5jb29yZGluYXRlcy54ID0gKChNYXRoLnJhbmRvbSgpLnRvRml4ZWQoMSkgKiAxMCkgJSA5KSArIDE7XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzLnkgPSAoKE1hdGgucmFuZG9tKCkudG9GaXhlZCgxKSAqIDEwKSAlIDkpICsgMTtcbiAgICB9XG5cbiAgICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNDb2xsaXNvbnNPck91dE9mQm91bmRzKHNoaXApIHtcbiAgICBjb25zdCBbbWFpbkF4aXMsIG1haW5BeGlzQ29vcmRdID1cbiAgICAgIHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgICA/IFsneCcsIHNoaXAuY29vcmRpbmF0ZXMueF1cbiAgICAgICAgOiBbJ3knLCBzaGlwLmNvb3JkaW5hdGVzLnldO1xuICAgIGNvbnN0IFtzZWNvbmRhcnlBeGlzLCBzZWNvbmRhcnlBeGlzQ29vcmRdID1cbiAgICAgIHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgICA/IFsneScsIHNoaXAuY29vcmRpbmF0ZXMueV1cbiAgICAgICAgOiBbJ3gnLCBzaGlwLmNvb3JkaW5hdGVzLnhdO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcblxuICAgIGlmIChtYWluQXhpc0Nvb3JkID4gOSAtIChzaGlwTGVuZ3RoIC0gMSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBtYWluQXhpc0Nvb3JkOyBpIDwgbWFpbkF4aXNDb29yZCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IGkgOiBzZWNvbmRhcnlBeGlzQ29vcmQ7XG4gICAgICBjb25zdCB5ID0gc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gc2Vjb25kYXJ5QXhpc0Nvb3JkIDogaTtcbiAgICAgIGNvbnN0IHNxID0gY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmRbYHgke3h9LXkke3l9YF07XG4gICAgICBpZiAoc3Euc2hpcCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwc09uUGFnZShwbGF5ZXIsIGJvYXJkKSB7XG4gIGJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHNoaXAuY29vcmRpbmF0ZXM7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwLm9yaWVudGF0aW9uO1xuICAgIGNvbnN0IFttYWluQXhpcywgbWFpbkF4aXNDb29yZF0gPVxuICAgICAgb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IFsneCcsIHhdIDogWyd5JywgeV07XG4gICAgY29uc3QgW3NlY29uZGFyeUF4aXMsIHNlY29uZGFyeUF4aXNDb29yZF0gPVxuICAgICAgb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IFsneScsIHldIDogWyd4JywgeF07XG5cbiAgICBmb3IgKGxldCBpID0gbWFpbkF4aXNDb29yZDsgaSA8IG1haW5BeGlzQ29vcmQgKyBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLiR7cGxheWVyfSAuZ2FtZS1ib2FyZCBkaXZbZGF0YS0ke21haW5BeGlzfT1cIiR7aX1cIl1bZGF0YS0ke3NlY29uZGFyeUF4aXN9PVwiJHtzZWNvbmRhcnlBeGlzQ29vcmR9XCJdYFxuICAgICAgKTtcbiAgICAgIHNxLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwbGF5ZXJDbGlja0hhbmRsZXIoZSkge1xuICBjb25zdCBzcXVhcmUgPSBlLnRhcmdldDtcbiAgY29uc3QgeCA9IHNxdWFyZS5kYXRhc2V0Lng7XG4gIGNvbnN0IHkgPSBzcXVhcmUuZGF0YXNldC55O1xuICBjb25zdCBjb29yZGluYXRlSW5mbyA9IGNvbXB1dGVyR2FtZWJvYXJkLmJvYXJkW2B4JHt4fS15JHt5fWBdO1xuICBpZiAoIWNvb3JkaW5hdGVJbmZvLmhpdCkge1xuICAgIGNvbXB1dGVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgaWYgKGNvb3JkaW5hdGVJbmZvLnNoaXApIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaG90LWhpdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hvdC1taXNzJyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXB1dGVyR2FtZWJvYXJkLmNoZWNrR2FtZUVuZCgpKSB7XG4gICAgICBnYW1lT3ZlcignUGxheWVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXB1dGVyVHVybigpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwbGF5ZXJUdXJuKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lIGgyJyk7XG4gIHRpdGxlLmlubmVySFRNTCA9IGBQbGF5ZXIncyB0dXJuYDtcbiAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcHV0ZXItdHVybicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHVybicpO1xuXG4gIGNvbnN0IGJvYXJkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlciAuZ3JpZC1zcXVhcmUnKTtcbiAgYm9hcmRTcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4gICAgc3EuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXlvdXItdHVybicpO1xuICAgIHNxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQ2xpY2tIYW5kbGVyKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBwbGF5R2FtZSB9IGZyb20gJy4vcGxheS1nYW1lJztcbmltcG9ydCAnLi9zaGlwLXBsYWNlbWVudC5zY3NzJztcblxuY29uc3QgcGxhY2VtZW50U3RhdGUgPSB7XG4gIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIHNoaXBzTGVmdDogWzUsIDQsIDMsIDIsIDFdLFxuICBzaGlwc1BsYWNlZDogW10sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hpcFBsYWNlbWVudCgpIHtcbiAgLy8gY2xlYW4gc3RhdGUgZm9yIG5ldyBnYW1lIGlmIFBsYXllciByZXBsYXlzXG4gIHBsYWNlbWVudFN0YXRlLnNoaXBzTGVmdCA9IFs1LCA0LCAzLCAyLCAxXTtcbiAgcGxhY2VtZW50U3RhdGUuc2hpcHNQbGFjZWQgPSBbXTtcblxuICBjcmVhdGVHcmlkKCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVTcGFjZWJhcik7XG5cbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQtc3F1YXJlJyk7XG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoYW5kbGVNb3VzZUVudGVyKTtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZU1vdXNlTGVhdmUpO1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIG1haW4uaW5uZXJIVE1MID0gLyogaHRtbCAqLyBgXG4gICAgPGRpdiBjbGFzcz1cInNoaXAtcGxhY2VtZW50XCI+XG4gICAgICA8aDI+UGxhY2UgeW91ciBzaGlwczwvaDI+XG4gICAgICA8cD4ocHJlc3MgPGNvZGU+c3BhY2ViYXI8L2NvZGU+IHRvIHJvdGF0ZSBvcmllbnRhdGlvbik8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwicGxhY2VtZW50LWJvYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZW1lbnQtZ3JpZFwiPjwvZGl2PiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBmb3IgKGxldCB5ID0gOTsgeSA+IDA7IHktLSkge1xuICAgIGZvciAobGV0IHggPSAxOyB4IDwgMTA7IHgrKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LXNxdWFyZScpO1xuICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IHg7XG4gICAgICBzcXVhcmUuZGF0YXNldC55ID0geTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZW1lbnQtZ3JpZCcpLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgY29uc3Qgc3F1YXJlID0gZS50YXJnZXQ7XG4gIGNvbnN0IFttYWluQXhpcywgbWFpbkF4aXNDb29yZF0gPVxuICAgIHBsYWNlbWVudFN0YXRlLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgID8gWyd4JywgTnVtYmVyKHNxdWFyZS5kYXRhc2V0LngpXVxuICAgICAgOiBbJ3knLCBOdW1iZXIoc3F1YXJlLmRhdGFzZXQueSldO1xuICBjb25zdCBbc2Vjb25kYXJ5QXhpcywgc2Vjb25kYXJ5QXhpc0Nvb3JkXSA9XG4gICAgcGxhY2VtZW50U3RhdGUub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgPyBbJ3knLCBOdW1iZXIoc3F1YXJlLmRhdGFzZXQueSldXG4gICAgICA6IFsneCcsIE51bWJlcihzcXVhcmUuZGF0YXNldC54KV07XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBwbGFjZW1lbnRTdGF0ZS5zaGlwc0xlZnRbMF07XG5cbiAgY29uc3QgdmFsaWRTcXVhcmUgPSAhWy4uLnNxdWFyZS5jbGFzc0xpc3RdLnNvbWUoXG4gICAgKGNsYXNzTmFtZSkgPT5cbiAgICAgIGNsYXNzTmFtZSA9PT0gJ3BsYWNlbWVudC1pbnZhbGlkJyB8fCBjbGFzc05hbWUgPT09ICdwbGFjZW1lbnQtc2hpcCdcbiAgKTtcbiAgaWYgKHZhbGlkU3F1YXJlKSB7XG4gICAgZm9yIChsZXQgaSA9IG1haW5BeGlzQ29vcmQ7IGkgPCBtYWluQXhpc0Nvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAucGxhY2VtZW50LWdyaWQgZGl2W2RhdGEtJHttYWluQXhpc309XCIke2l9XCJdW2RhdGEtJHtzZWNvbmRhcnlBeGlzfT1cIiR7c2Vjb25kYXJ5QXhpc0Nvb3JkfVwiXWBcbiAgICAgICk7XG4gICAgICBzcS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQtc2hpcCcpO1xuICAgIH1cbiAgICBwbGFjZW1lbnRTdGF0ZS5zaGlwc1BsYWNlZC5wdXNoKHtcbiAgICAgIGNvb3JkaW5hdGVzOiB7XG4gICAgICAgIHg6IE51bWJlcihzcXVhcmUuZGF0YXNldC54KSxcbiAgICAgICAgeTogTnVtYmVyKHNxdWFyZS5kYXRhc2V0LnkpLFxuICAgICAgfSxcbiAgICAgIGxlbmd0aDogcGxhY2VtZW50U3RhdGUuc2hpcHNMZWZ0WzBdLFxuICAgICAgb3JpZW50YXRpb246IHBsYWNlbWVudFN0YXRlLm9yaWVudGF0aW9uLFxuICAgIH0pO1xuICAgIHBsYWNlbWVudFN0YXRlLnNoaXBzTGVmdC5zaGlmdCgpO1xuICAgIGlmIChwbGFjZW1lbnRTdGF0ZS5zaGlwc0xlZnQubGVuZ3RoID09PSAwKSB7XG4gICAgICBwbGF5R2FtZShwbGFjZW1lbnRTdGF0ZS5zaGlwc1BsYWNlZCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoZSkge1xuICBjb25zdCBzcXVhcmUgPSBlLnRhcmdldDtcbiAgY29uc3QgW21haW5BeGlzLCBtYWluQXhpc0Nvb3JkXSA9XG4gICAgcGxhY2VtZW50U3RhdGUub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgPyBbJ3gnLCBOdW1iZXIoc3F1YXJlLmRhdGFzZXQueCldXG4gICAgICA6IFsneScsIE51bWJlcihzcXVhcmUuZGF0YXNldC55KV07XG4gIGNvbnN0IFtzZWNvbmRhcnlBeGlzLCBzZWNvbmRhcnlBeGlzQ29vcmRdID1cbiAgICBwbGFjZW1lbnRTdGF0ZS5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnXG4gICAgICA/IFsneScsIE51bWJlcihzcXVhcmUuZGF0YXNldC55KV1cbiAgICAgIDogWyd4JywgTnVtYmVyKHNxdWFyZS5kYXRhc2V0LngpXTtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IHBsYWNlbWVudFN0YXRlLnNoaXBzTGVmdFswXTtcblxuICBpZiAoXG4gICAgbWFpbkF4aXNDb29yZCA+IDkgLSAoc2hpcExlbmd0aCAtIDEpIHx8XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucygncGxhY2VtZW50LXNoaXAnKVxuICApIHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LWludmFsaWQnKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgLy8gdmFsaWRpdHkgY2hlY2sgbG9vcFxuICAgIGZvciAobGV0IGkgPSBtYWluQXhpc0Nvb3JkOyBpIDwgbWFpbkF4aXNDb29yZCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnBsYWNlbWVudC1ncmlkIGRpdltkYXRhLSR7bWFpbkF4aXN9PVwiJHtpfVwiXVtkYXRhLSR7c2Vjb25kYXJ5QXhpc309XCIke3NlY29uZGFyeUF4aXNDb29yZH1cIl1gXG4gICAgICApO1xuICAgICAgaWYgKHNxLmNsYXNzTGlzdC5jb250YWlucygncGxhY2VtZW50LXNoaXAnKSkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LWludmFsaWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhcHBseWluZyBzdHlsaW5nIGlmIHZhbGlkXG4gICAgZm9yIChsZXQgaSA9IG1haW5BeGlzQ29vcmQ7IGkgPCBtYWluQXhpc0Nvb3JkICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAucGxhY2VtZW50LWdyaWQgZGl2W2RhdGEtJHttYWluQXhpc309XCIke2l9XCJdW2RhdGEtJHtzZWNvbmRhcnlBeGlzfT1cIiR7c2Vjb25kYXJ5QXhpc0Nvb3JkfVwiXWBcbiAgICAgICk7XG4gICAgICBzcS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQtaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZShlKSB7XG4gIGNvbnN0IHNxdWFyZSA9IGUudGFyZ2V0O1xuICBjb25zdCBbbWFpbkF4aXMsIG1haW5BeGlzQ29vcmRdID1cbiAgICBwbGFjZW1lbnRTdGF0ZS5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnXG4gICAgICA/IFsneCcsIE51bWJlcihzcXVhcmUuZGF0YXNldC54KV1cbiAgICAgIDogWyd5JywgTnVtYmVyKHNxdWFyZS5kYXRhc2V0LnkpXTtcbiAgY29uc3QgW3NlY29uZGFyeUF4aXMsIHNlY29uZGFyeUF4aXNDb29yZF0gPVxuICAgIHBsYWNlbWVudFN0YXRlLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgID8gWyd5JywgTnVtYmVyKHNxdWFyZS5kYXRhc2V0LnkpXVxuICAgICAgOiBbJ3gnLCBOdW1iZXIoc3F1YXJlLmRhdGFzZXQueCldO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gcGxhY2VtZW50U3RhdGUuc2hpcHNMZWZ0WzBdO1xuXG4gIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZW1lbnQtaW52YWxpZCcpO1xuICBpZiAobWFpbkF4aXNDb29yZCA8PSA5IC0gKHNoaXBMZW5ndGggLSAxKSkge1xuICAgIGZvciAobGV0IGkgPSBtYWluQXhpc0Nvb3JkOyBpIDwgbWFpbkF4aXNDb29yZCArIHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnBsYWNlbWVudC1ncmlkIGRpdltkYXRhLSR7bWFpbkF4aXN9PVwiJHtpfVwiXVtkYXRhLSR7c2Vjb25kYXJ5QXhpc309XCIke3NlY29uZGFyeUF4aXNDb29yZH1cIl1gXG4gICAgICApO1xuICAgICAgc3EuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2VtZW50LWhvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNwYWNlYmFyKGUpIHtcbiAgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJykge1xuICAgIHBsYWNlbWVudFN0YXRlLm9yaWVudGF0aW9uID1cbiAgICAgIHBsYWNlbWVudFN0YXRlLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICB9XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LXNxdWFyZScpO1xuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4gc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlbWVudC1ob3ZlcicpKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuaW1wb3J0IHsgc2hpcFBsYWNlbWVudCB9IGZyb20gJy4vdWkvc2hpcC1wbGFjZW1lbnQnO1xuXG5zaGlwUGxhY2VtZW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=