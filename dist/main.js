/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n      padding: 0;\\n      border: 0;\\n      font-size: 100%;\\n      font: inherit;\\n      vertical-align: baseline;\\n  }\\n\\nbody { \\n\\n    background-color: teal;\\n\\n}\\n\\n#container {\\n    width: 100vw;\\n    height: 90vh;\\n    display: flex;\\n    flex-direction: column;\\n}\\nh1 {\\n\\n    font-size: xx-large;\\n    font-weight: bolder;\\n}\\n\\n#top-board {\\n    height: 35vh;\\n    width: 35vh;\\n    display: grid;\\n    border: 4px solid goldenrod;\\n    grid-template-columns: repeat(10, 1fr) ;\\n    grid-template-rows: repeat(10, 1fr);\\n}\\n.top-square {\\n    border: 1px solid sienna;\\n    background-color: tomato;\\n    width: 100%;\\n    height: 100%;\\n}\\n\\n.top-square:hover {\\n\\n    background-color: rgb(145, 59, 43);\\n\\n}\\n\\n#bottom-board {\\n    height: 35vh;\\n    width: 35vh;\\n    display: grid;\\n    border: 4px solid goldenrod;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n}\\n.bottom-square {\\n    border: 1px solid sienna;\\n    background-color: rgb(44, 80, 23);\\n    width: 100%;\\n    height: 100%;\\n}\\n\\n.bottom-square:hover {\\n\\n    background-color: rgb(145, 59, 43);\\n\\n}\\n\\n.struck-empty-square {\\n\\n    background-color: black;\\n}\\n\\n.struck-ship {\\n\\n    background-color: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((module) => {

eval("\n\nlet gameboardFactory = () => {\n    let topsideSquaresArray = []\n    let bottomsideSquaresArray = []\n\n    let i = 0\n    while (i < 100) {\n        let topSquare = {\n            isHit: false,\n            ship: undefined,\n            shipPart: undefined\n        }\n        topsideSquaresArray.push(topSquare)\n        \n        let bottomSquare = {\n            isHit: false,\n            ship: undefined,\n            shipPart: undefined\n\n        }\n        bottomsideSquaresArray.push(bottomSquare)\n        i++\n    }\n    \n    function addShip(ship, position, side, vertical = false) {\n\n        position = parseInt(position)\n        if (side == 'top') {\n\n            let i = 0;\n            while (i<ship.size){\n                console.log(`adding ship to square ${position+i}`)\n                topsideSquaresArray[position + i].ship = ship\n                topsideSquaresArray[position +i].shipPart = i\n                i++\n            }\n        }\n\n        else {\n            let i = 0;\n\n            while (i<positions.size){\n                this.bottomsideSquaresArray[positions[i]].ship = ship\n                this.bottomsideSquaresArray[positions[i]].shipPart = i\n                i++\n            }\n        }\n    }\n\n    function receiveAttack(square, side) {\n\n        if (side == 'top') {\n\n            if (topsideSquaresArray[square].ship){\n\n                topsideSquaresArray[square].ship.hit(topsideSquaresArray[square].shipPart)\n                topsideSquaresArray[square].isHit = true\n\n            }\n\n            else {\n                topsideSquaresArray[square].isHit = true\n            }\n        }\n\n        else {\n            if (bottomsideSquaresArray[square].ship){\n\n                bottomsideSquaresArray[square].ship.hit(bottomsideSquaresArray[square].shipPart)\n                bottomsideSquaresArray[square].isHit = true\n\n            }\n\n            else {\n                bottomsideSquaresArray[square].isHit = true\n            }\n\n\n        }\n\n        \n    }\n\n    function onlyUnique(value, index, self) {\n        return self.indexOf(value) === index;\n      }\n\n\n    function checkRemainingShips(side) {\n\n        let shipsArray = []\n        if (side == 'top') {\n            let i = 0;\n            while (i<topsideSquaresArray.length){\n\n                if (typeof topsideSquaresArray[i].ship !== 'undefined' && !topsideSquaresArray[i].ship.isSunk){\n\n                    shipsArray.push(topsideSquaresArray[i].ship)\n                }\n\n                i++\n            }\n\n        }\n\n\n        else {\n            let i = 0;\n            while (i<bottomsideSquaresArray.length){\n\n                if (!bottomsideSquaresArray[i].ship.isSunk){\n\n                    shipsArray.push(bottomsideSquaresArray[i].ship)\n                }\n\n                i++\n            }\n\n      \n\n\n        }\n\n        if (shipsArray.length > 0) {        \n            shipsArray = shipsArray.filter(onlyUnique)\n            return shipsArray.length\n        }\n\n    }\n\n    return {topsideSquaresArray, bottomsideSquaresArray, addShip, receiveAttack, checkRemainingShips}\n\n}\n\nmodule.exports = gameboardFactory\n\n//# sourceURL=webpack://battleship/./src/gameboardFactory.js?");

/***/ }),

/***/ "./src/getSquareData.js":
/*!******************************!*\
  !*** ./src/getSquareData.js ***!
  \******************************/
/***/ ((module) => {

eval("function getSquareData(square) {\n    \n    squareSide = square.id.slice(0,3)\n    squareNumber = square.id.slice(-2)\n        if (squareNumber[0] === '-') { squareNumber = squareNumber[1]} \n    console.log(`square ${squareSide} ${squareNumber} clicked`)\n\n    return {squareSide, squareNumber}\n}\n\nmodule.exports = getSquareData\n\n\n//# sourceURL=webpack://battleship/./src/getSquareData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nlet getSquareData = __webpack_require__(/*! ./getSquareData.js */ \"./src/getSquareData.js\")\nlet shipFactory = __webpack_require__(/*! ./shipFactory.js */ \"./src/shipFactory.js\")\nlet playerFactory = __webpack_require__(/*! ./playerFactory.js */ \"./src/playerFactory.js\")\nlet gameboardFactory = __webpack_require__(/*! ./gameboardFactory.js */ \"./src/gameboardFactory.js\")\n\nconsole.log(`source index loaded`)\n\n\nlet container = document.getElementById('container')\n\nlet newGameButton = document.createElement('button')\nnewGameButton.innerHTML = 'New Game'\nnewGameButton.addEventListener('click', function () {\n\n    newGame()\n})\n\ncontainer.appendChild(newGameButton)\nlet gameboard = gameboardFactory()\nlet shipsArray = undefined\n\nlet topBoard = document.createElement('div')\ntopBoard.setAttribute('id','top-board')\n  \n    let i = 0;\n    while  (i <gameboard.topsideSquaresArray.length) {\n\n        let topSquareElement = document.createElement('div');\n        topSquareElement.setAttribute('class','top-square')\n        topSquareElement.setAttribute('id',`top-square-${i}`)\n        topSquareElement.addEventListener('click', function () {\n            \n            if (placingShips) {\n                if (shipsArray == undefined) {\n                    let i = 5;\n                    console.log('generating ships')\n                    shipsArray = []\n                    while (i > 0) {\n                        \n                        shipsArray.push(shipFactory(i))\n                        i--\n                        console.log(`ship pushed: ${shipsArray[0]}`)\n                    }\n                    console.log('ships:' + shipsArray.length)\n                    gameboard.addShip(shipsArray[0],getSquareData(topSquareElement).squareNumber,'top')\n\n                }\n                else if (shipsArray !== undefined && shipsArray.length > 0) {\n\n\n                gameboard.addShip(shipsArray[0],getSquareData(topSquareElement).squareNumber,'top')\n                shipsArray.shift()\n                console.log('ship added. ships to add: '+shipsArray.length )\n\n                }\n                \n                else {\n                    placingShips = false\n                    console.log('placingShips ' +placingShips)\n                }\n\n                \n            }\n            else {\n            gameboard.receiveAttack(getSquareData(topSquareElement).squareNumber,getSquareData(topSquareElement).squareSide)\n            updateGrid()\n            }\n            \n\n        });\n        topBoard.appendChild(topSquareElement)\n        i++\n    }\n\nlet bottomBoard = document.createElement('div')\nbottomBoard.setAttribute('id','bottom-board')\n\n    i = 0;\n    while  (i <gameboard.bottomsideSquaresArray.length) {\n\n        let bottomSquareElement = document.createElement('div');\n        bottomSquareElement.setAttribute('class','bottom-square')\n        bottomSquareElement.setAttribute('id',`bottom-square-${i}`)\n        bottomSquareElement.addEventListener('click', function () {\n\n            gameboard.receiveAttack(getSquareData(bottomSquareElement).squareNumber,getSquareData(bottomSquareElement).squareSide)\n            updateGrid()\n\n\n        });\n        bottomBoard.appendChild(bottomSquareElement)\n        i++\n    }\n\ncontainer.appendChild(topBoard)\ncontainer.appendChild(bottomBoard)\n\n\nlet placingShips = true\n\n\nfunction newGame() {\n    let topPlayer = playerFactory('CPU')\n    let bottomPlayer = playerFactory('Human')\n}\n\nfunction updateGrid() {\n\n    let i = 0;\n    while (i<gameboard.topsideSquaresArray.length) {\n\n        if (gameboard.topsideSquaresArray[i].ship !== undefined && gameboard.topsideSquaresArray[i].isHit) {\n            document.getElementById(`top-square-${i}`).classList.add('struck-ship')\n\n        }\n        else if ((gameboard.topsideSquaresArray[i].ship == undefined && gameboard.topsideSquaresArray[i].isHit)) {\n            document.getElementById(`top-square-${i}`).classList.add('struck-empty-square')\n\n        }\n        i++\n    }\n\n    i = 0;\n    while (i<gameboard.bottomsideSquaresArray.length) {\n\n        if (gameboard.bottomsideSquaresArray[i].ship !== undefined && gameboard.bottomsideSquaresArray[i].isHit) {\n            document.getElementById(`bottom-square-${i}`).classList.add('struck-ship')\n\n        }\n        else if ((gameboard.bottomsideSquaresArray[i].ship == undefined && gameboard.bottomsideSquaresArray[i].isHit)) {\n            document.getElementById(`bottom-square-${i}`).classList.add('struck-empty-square')\n\n        }\n        i++\n    }\n\n\n}\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/***/ (function(module) {

eval("let playerFactory = (name) => {\n\n    this.name = name;\n    isCurrentPlayer = false;\n   \n    \n\n\n    return {name, isCurrentPlayer}\n}\n\nmodule.exports = playerFactory\n\n\n//# sourceURL=webpack://battleship/./src/playerFactory.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((module) => {

eval("\n\nlet shipFactory = (size) => {\n \n    let segments = []\n    let i = 0;\n\n      while (i < size) {\n        segments.push('intact')\n        i++\n      }\n    let isHit = false;\n    let isSunk = false;\n\n    function hit(position){\n        segments[position] = 'hit';\n        this.isHit = true\n        if (segments.every(e => e == 'hit')){\n            this.isSunk = true;\n        }\n    }\n\n  \n       \n        \n    \n    return { segments, size, isHit, isSunk, hit };\n  };\n  \n\n  module.exports = shipFactory\n\n\n\n//# sourceURL=webpack://battleship/./src/shipFactory.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;