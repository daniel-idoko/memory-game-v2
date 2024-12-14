/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body{
    font-family: "Roboto", sans-serif;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
button{
    font-family: "Roboto", sans-serif;
}
button#homeBtn {
  background-color: #F4F4F4; /* Light gray for a subtle contrast */
  color: #333333; /* Dark gray text */
  border: 1px solid #DDDDDD; /* Light gray border */
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button#homeBtn:hover {
  background-color: #E0E0E0; /* Darker gray for hover effect */
  color: #000000; /* Slightly darker text */
}

button#homeBtn:disabled {
  background-color: #F9F9F9; /* Very light gray */
  color: #AAAAAA; /* Muted gray for text */
  border: 1px solid #EEEEEE; /* Very light gray border */
  cursor: not-allowed;
  opacity: 0.6;
}


section{
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    text-align: center;
}

.game-info{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.title-header h1{
    margin: 1rem 0;
}

.byfours{
    margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 7.5px;
      width: 100%;
      height: auto;
      justify-items: center;
      align-items: center;
}
.bythrees{
   margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 7.5px;
      width: 100%;
      height: auto;
      justify-items: center;
      align-items: center;
}
.bytwos{
    margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 7.5px;
      width: 100%;
      height: auto;
      justify-items: center;
      align-items: center;
}

.item{
    width: 100% !important;
    aspect-ratio: 1 / 1 !important;
    justify-items: center;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hide:hover{
    background-color: rgb(122, 252, 252);
}

.hide{
    background-color: rgba(0, 0, 0, 0.795);
    cursor: pointer;
}
.hide > img{
    visibility: hidden;
}



/* game-option */

#game-option{
    width: 95%;
    max-width: 350px;
    margin: 0 auto;
    padding: 1rem 1rem;
    background-color: #121212;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}
#game-option h3{
    color: #E0E0E0;
}

#game-option > button{
    padding: 5px 10px;
    margin-top: 1rem;
    font-weight: 700;
}

#game-option > button, #hostAFriendBtn, #game-ended > button {
  background-color: #1F1F1F; /* Slightly lighter black */
  color: #E0E0E0; /* Light gray */
  border: 2px solid #E0E0E0; /* Light gray border */
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

#game-option > button:hover, #hostAFriendBtn:hover, #game-ended > button:hover {
  background-color: #E0E0E0; /* Light gray on hover */
  color: #121212; /* Dark text on hover */
  border-color: #E0E0E0;
}

#game-option > button:disabled, #hostAFriendBtn:disabled, #game-ended > button:hover {
  background-color: #555555; /* Muted gray */
  color: #9E9E9E; /* Lighter gray for text */
  cursor: not-allowed; /* Indicates the button is not interactive */
  opacity: 0.6; /* Slight transparency */
}


#game-ended{
    width: 95%;
    max-width: 350px;
    margin: 0 auto;
    padding: 1rem 1rem;
    background-color: #121212;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: #E0E0E0;
}

.grid-container {
     margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 7.5px;
      width: 100%;
      height: auto;
      justify-items: center;
      align-items: center;
}

.link-holder{
    width: 95%;
    max-width: 350px;
    margin: 0 auto;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.link-holder a{
    text-align: center; 
    text-decoration: underline;
}


.display-none{
    display: none !important;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbody{\n    font-family: \"Roboto\", sans-serif;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\nbutton{\n    font-family: \"Roboto\", sans-serif;\n}\nbutton#homeBtn {\n  background-color: #F4F4F4; /* Light gray for a subtle contrast */\n  color: #333333; /* Dark gray text */\n  border: 1px solid #DDDDDD; /* Light gray border */\n  padding: 10px 20px;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n\nbutton#homeBtn:hover {\n  background-color: #E0E0E0; /* Darker gray for hover effect */\n  color: #000000; /* Slightly darker text */\n}\n\nbutton#homeBtn:disabled {\n  background-color: #F9F9F9; /* Very light gray */\n  color: #AAAAAA; /* Muted gray for text */\n  border: 1px solid #EEEEEE; /* Very light gray border */\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n\n\nsection{\n    width: 100%;\n    max-width: 350px;\n    margin: 0 auto;\n    text-align: center;\n}\n\n.game-info{\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n.title-header h1{\n    margin: 1rem 0;\n}\n\n.byfours{\n    margin-top: 1rem;\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 7.5px;\n      width: 100%;\n      height: auto;\n      justify-items: center;\n      align-items: center;\n}\n.bythrees{\n   margin-top: 1rem;\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      gap: 7.5px;\n      width: 100%;\n      height: auto;\n      justify-items: center;\n      align-items: center;\n}\n.bytwos{\n    margin-top: 1rem;\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      gap: 7.5px;\n      width: 100%;\n      height: auto;\n      justify-items: center;\n      align-items: center;\n}\n\n.item{\n    width: 100% !important;\n    aspect-ratio: 1 / 1 !important;\n    justify-items: center;\n    border: 1px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hide:hover{\n    background-color: rgb(122, 252, 252);\n}\n\n.hide{\n    background-color: rgba(0, 0, 0, 0.795);\n    cursor: pointer;\n}\n.hide > img{\n    visibility: hidden;\n}\n\n\n\n/* game-option */\n\n#game-option{\n    width: 95%;\n    max-width: 350px;\n    margin: 0 auto;\n    padding: 1rem 1rem;\n    background-color: #121212;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10px;\n}\n#game-option h3{\n    color: #E0E0E0;\n}\n\n#game-option > button{\n    padding: 5px 10px;\n    margin-top: 1rem;\n    font-weight: 700;\n}\n\n#game-option > button, #hostAFriendBtn, #game-ended > button {\n  background-color: #1F1F1F; /* Slightly lighter black */\n  color: #E0E0E0; /* Light gray */\n  border: 2px solid #E0E0E0; /* Light gray border */\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n#game-option > button:hover, #hostAFriendBtn:hover, #game-ended > button:hover {\n  background-color: #E0E0E0; /* Light gray on hover */\n  color: #121212; /* Dark text on hover */\n  border-color: #E0E0E0;\n}\n\n#game-option > button:disabled, #hostAFriendBtn:disabled, #game-ended > button:hover {\n  background-color: #555555; /* Muted gray */\n  color: #9E9E9E; /* Lighter gray for text */\n  cursor: not-allowed; /* Indicates the button is not interactive */\n  opacity: 0.6; /* Slight transparency */\n}\n\n\n#game-ended{\n    width: 95%;\n    max-width: 350px;\n    margin: 0 auto;\n    padding: 1rem 1rem;\n    background-color: #121212;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10px;\n    color: #E0E0E0;\n}\n\n.grid-container {\n     margin-top: 1rem;\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      gap: 7.5px;\n      width: 100%;\n      height: auto;\n      justify-items: center;\n      align-items: center;\n}\n\n.link-holder{\n    width: 95%;\n    max-width: 350px;\n    margin: 0 auto;\n    padding: 1rem 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.link-holder a{\n    text-align: center; \n    text-decoration: underline;\n}\n\n\n.display-none{\n    display: none !important;\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Ae.png": "./src/assets/images/Ae.png",
	"./Ai.png": "./src/assets/images/Ai.png",
	"./An.png": "./src/assets/images/An.png",
	"./Cartoon/carte-0.gif": "./src/assets/images/Cartoon/carte-0.gif",
	"./Cartoon/carte-1.gif": "./src/assets/images/Cartoon/carte-1.gif",
	"./Cartoon/carte-10.gif": "./src/assets/images/Cartoon/carte-10.gif",
	"./Cartoon/carte-11.gif": "./src/assets/images/Cartoon/carte-11.gif",
	"./Cartoon/carte-12.gif": "./src/assets/images/Cartoon/carte-12.gif",
	"./Cartoon/carte-13.gif": "./src/assets/images/Cartoon/carte-13.gif",
	"./Cartoon/carte-14.gif": "./src/assets/images/Cartoon/carte-14.gif",
	"./Cartoon/carte-15.gif": "./src/assets/images/Cartoon/carte-15.gif",
	"./Cartoon/carte-16.gif": "./src/assets/images/Cartoon/carte-16.gif",
	"./Cartoon/carte-17.gif": "./src/assets/images/Cartoon/carte-17.gif",
	"./Cartoon/carte-18.gif": "./src/assets/images/Cartoon/carte-18.gif",
	"./Cartoon/carte-19.gif": "./src/assets/images/Cartoon/carte-19.gif",
	"./Cartoon/carte-2.gif": "./src/assets/images/Cartoon/carte-2.gif",
	"./Cartoon/carte-20.gif": "./src/assets/images/Cartoon/carte-20.gif",
	"./Cartoon/carte-3.gif": "./src/assets/images/Cartoon/carte-3.gif",
	"./Cartoon/carte-4.gif": "./src/assets/images/Cartoon/carte-4.gif",
	"./Cartoon/carte-5.gif": "./src/assets/images/Cartoon/carte-5.gif",
	"./Cartoon/carte-6.gif": "./src/assets/images/Cartoon/carte-6.gif",
	"./Cartoon/carte-7.gif": "./src/assets/images/Cartoon/carte-7.gif",
	"./Cartoon/carte-8.gif": "./src/assets/images/Cartoon/carte-8.gif",
	"./Cartoon/carte-9.gif": "./src/assets/images/Cartoon/carte-9.gif",
	"./Id.png": "./src/assets/images/Id.png",
	"./Lr.png": "./src/assets/images/Lr.png",
	"./Pr.png": "./src/assets/images/Pr.png",
	"./Ps.png": "./src/assets/images/Ps.png",
	"./Xd.png": "./src/assets/images/Xd.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/Ae.png":
/*!**********************************!*\
  !*** ./src/assets/images/Ae.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Ae.png";

/***/ }),

/***/ "./src/assets/images/Ai.png":
/*!**********************************!*\
  !*** ./src/assets/images/Ai.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Ai.png";

/***/ }),

/***/ "./src/assets/images/An.png":
/*!**********************************!*\
  !*** ./src/assets/images/An.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/An.png";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-0.gif":
/*!***********************************************!*\
  !*** ./src/assets/images/Cartoon/carte-0.gif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-0.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-1.gif":
/*!***********************************************!*\
  !*** ./src/assets/images/Cartoon/carte-1.gif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-1.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-10.gif":
/*!************************************************!*\
  !*** ./src/assets/images/Cartoon/carte-10.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-10.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-11.gif":
/*!************************************************!*\
  !*** ./src/assets/images/Cartoon/carte-11.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-11.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-12.gif":
/*!************************************************!*\
  !*** ./src/assets/images/Cartoon/carte-12.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-12.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-13.gif":
/*!************************************************!*\
  !*** ./src/assets/images/Cartoon/carte-13.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-13.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-14.gif":
/*!************************************************!*\
  !*** ./src/assets/images/Cartoon/carte-14.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-14.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-15.gif":
/*!************************************************!*\
  !*** ./src/assets/images/Cartoon/carte-15.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-15.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-16.gif":
/*!************************************************!*\
  !*** ./src/assets/images/Cartoon/carte-16.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-16.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-17.gif":
/*!************************************************!*\
  !*** ./src/assets/images/Cartoon/carte-17.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-17.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-18.gif":
/*!************************************************!*\
  !*** ./src/assets/images/Cartoon/carte-18.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-18.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-19.gif":
/*!************************************************!*\
  !*** ./src/assets/images/Cartoon/carte-19.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-19.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-2.gif":
/*!***********************************************!*\
  !*** ./src/assets/images/Cartoon/carte-2.gif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-2.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-20.gif":
/*!************************************************!*\
  !*** ./src/assets/images/Cartoon/carte-20.gif ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-20.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-3.gif":
/*!***********************************************!*\
  !*** ./src/assets/images/Cartoon/carte-3.gif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-3.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-4.gif":
/*!***********************************************!*\
  !*** ./src/assets/images/Cartoon/carte-4.gif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-4.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-5.gif":
/*!***********************************************!*\
  !*** ./src/assets/images/Cartoon/carte-5.gif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-5.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-6.gif":
/*!***********************************************!*\
  !*** ./src/assets/images/Cartoon/carte-6.gif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-6.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-7.gif":
/*!***********************************************!*\
  !*** ./src/assets/images/Cartoon/carte-7.gif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-7.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-8.gif":
/*!***********************************************!*\
  !*** ./src/assets/images/Cartoon/carte-8.gif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-8.gif";

/***/ }),

/***/ "./src/assets/images/Cartoon/carte-9.gif":
/*!***********************************************!*\
  !*** ./src/assets/images/Cartoon/carte-9.gif ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carte-9.gif";

/***/ }),

/***/ "./src/assets/images/Id.png":
/*!**********************************!*\
  !*** ./src/assets/images/Id.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Id.png";

/***/ }),

/***/ "./src/assets/images/Lr.png":
/*!**********************************!*\
  !*** ./src/assets/images/Lr.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Lr.png";

/***/ }),

/***/ "./src/assets/images/Pr.png":
/*!**********************************!*\
  !*** ./src/assets/images/Pr.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Pr.png";

/***/ }),

/***/ "./src/assets/images/Ps.png":
/*!**********************************!*\
  !*** ./src/assets/images/Ps.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Ps.png";

/***/ }),

/***/ "./src/assets/images/Xd.png":
/*!**********************************!*\
  !*** ./src/assets/images/Xd.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Xd.png";

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");


// Game Data  
var gameData = [{
  id: 1,
  name: 'Ae',
  src: 'Ae.png'
}, {
  id: 2,
  name: 'Ai',
  src: 'Ai.png'
}, {
  id: 3,
  name: 'An',
  src: 'An.png'
}, {
  id: 4,
  name: 'Id',
  src: 'Id.png'
}, {
  id: 5,
  name: 'Lr',
  src: 'Lr.png'
}, {
  id: 6,
  name: 'Pr',
  src: 'Pr.png'
}, {
  id: 7,
  name: 'Ps',
  src: 'Ps.png'
}, {
  id: 8,
  name: 'Xd',
  src: 'Xd.png'
}, {
  id: 9,
  name: 'Ae',
  src: 'Ae.png'
}, {
  id: 10,
  name: 'Ai',
  src: 'Ai.png'
}, {
  id: 11,
  name: 'An',
  src: 'An.png'
}, {
  id: 12,
  name: 'Id',
  src: 'Id.png'
}, {
  id: 13,
  name: 'Lr',
  src: 'Lr.png'
}, {
  id: 14,
  name: 'Pr',
  src: 'Pr.png'
}, {
  id: 15,
  name: 'Ps',
  src: 'Ps.png'
}, {
  id: 16,
  name: 'Xd',
  src: 'Xd.png'
}].sort(function (a, b) {
  return 0.5 - Math.random();
});
var gameData2 = [{
  id: 2,
  name: 'An',
  src: 'An.png'
}, {
  id: 3,
  name: 'Ps',
  src: 'Ps.png'
}, {
  id: 4,
  name: 'Xd',
  src: 'Xd.png'
}, {
  id: 6,
  name: 'An',
  src: 'An.png'
}, {
  id: 7,
  name: 'Ps',
  src: 'Ps.png'
}, {
  id: 8,
  name: 'Xd',
  src: 'Xd.png'
}].sort(function (a, b) {
  return 0.5 - Math.random();
});
var gameData3 = [{
  id: 1,
  name: 'Ae',
  src: 'Ae.png'
}, {
  id: 2,
  name: 'Ps',
  src: 'Ps.png'
}, {
  id: 3,
  name: 'Ae',
  src: 'Ae.png'
}, {
  id: 4,
  name: 'Ps',
  src: 'Ps.png'
}].sort(function (a, b) {
  return 0.5 - Math.random();
});
var linkHolderEl = document.getElementById('linkHolderEl');
var gridContainerEl = document.getElementById('game-grid-container');
var gameInfo = document.getElementById('game-info');
var gameOption = document.getElementById('game-option');
var gameGameEl = document.getElementById('game-game');
var gameEndedEl = document.getElementById('game-ended');
var startBtns = document.querySelectorAll('.btns');
var secondEl = document.getElementById('sec');
var secOptionalEl = document.getElementById('sec-optional');
var minEl = document.getElementById('min');
var timeEl = document.getElementById('time');
var timeTakenEl = document.getElementById('item-taken');
var cardFilpsEl = document.getElementById('card-flips');
var gameStarted = false;
var gameEnded = false;
var userChoise = null;
var timeStarted = false;
var itemEl;
var numItemsOpen = new Set();
var cardFlips = 0;
var timeSec = 0;
var timeMin = 1;
var myInterval;

//Choose Grid handle
startBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (e.target.classList.contains('byfour')) {
      userChoise = gameData;
      gridContainerEl.classList.remove('bytwos');
      gridContainerEl.classList.remove('bythrees');
      gridContainerEl.classList.add('byfours');
    } else if (e.target.classList.contains('bythree')) {
      userChoise = gameData2;
      gridContainerEl.classList.remove('bytwos');
      gridContainerEl.classList.remove('byfours');
      gridContainerEl.classList.add('bythrees');
    } else {
      userChoise = gameData3;
      gridContainerEl.classList.remove('byfours');
      gridContainerEl.classList.add('bytwos');
    }
    gameStarted = true;
    changePage();
    startGame();
  });
});

//Start Game Function
function startGame() {
  // Dynamiclly reder the photo-card el
  var gameLayOut = userChoise.map(function (item) {
    return "\n        <div  class=\"item hide\" id=\"".concat(item.name, "\" onclick=\"setCardFlips(event)\" lang=\"").concat(item.id, "\">\n            <img src=\"").concat(__webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")("./".concat(item.src)), "\"  id=\"").concat(item.id, "\"/>\n        </div>\n    ");
  }).join('');
  gridContainerEl.innerHTML = gameLayOut;
  itemEl = document.querySelectorAll('.item');
  itemEl.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (!timeStarted) {
        timer();
        timeStarted = true;
      }
      openCard(e);
      checker();
      closeCards();
    });
  });
}
window.setCardFlips = function (e) {
  if (numItemsOpen.size < 2) {
    itemEl.forEach(function (item) {
      if (!item.classList.contains('active') && item.lang === e.target.lang) {
        cardFlips++;
      }
      document.querySelector(".count").innerHTML = cardFlips;
    });
  }
};
var timer = function timer() {
  myInterval = setInterval(function () {
    timeSec++;
    secondEl.innerHTML = timeSec;
    if (timeSec >= 10) {
      secOptionalEl.innerHTML = '';
    } else {
      secOptionalEl.innerHTML = '0';
    }
    if (timeSec >= 59) {
      minEl.innerHTML = timeMin++;
      timeSec = 0;
    }
  }, 1000);
};
var calcultateScore = function calcultateScore() {
  timeTakenEl.innerHTML = timeEl.innerHTML;
  cardFilpsEl.innerHTML = cardFlips;
};
var openCard = function openCard(e) {
  if (numItemsOpen.size < 2) {
    e.target.classList.remove('hide');
    itemEl.forEach(function (item) {
      !item.classList.contains('hide') && !item.classList.contains('active') ? numItemsOpen.add(item) : null;
    });
  }
};
var checker = function checker() {
  var openedCardsArr = [];
  var activeCard = new Set();
  itemEl.forEach(function (item) {
    return !item.classList.contains('hide') && !item.classList.contains('active') ? openedCardsArr.push(item) : null;
  });
  if (openedCardsArr.length >= 2) {
    if (openedCardsArr[0].id === openedCardsArr[1].id) {
      openedCardsArr.map(function (item) {
        return item.classList.add('active');
      });
      itemEl.forEach(function (item) {
        return item.classList.contains('active') ? activeCard.add(item) : null;
      });
      activeCard.size === userChoise.length && endGame();
      openedCardsArr.length = 0;
    } else {
      openedCardsArr.length = 0;
    }
  }
};
var closeCards = function closeCards() {
  if (numItemsOpen.size > 1) {
    setTimeout(function () {
      itemEl.forEach(function (item) {
        if (!item.classList.contains('active')) {
          item.classList.add('hide');
          numItemsOpen.clear();
        }
      });
    }, 600);
  }
};
function changePage() {
  if (gameStarted) {
    gameOption.classList.add('display-none');
    gameGameEl.classList.remove('display-none');
    linkHolderEl.classList.add('display-none');
  }
}
function endGame() {
  gameStarted = false;
  gameEnded = true;
  timeStarted = false;
  numItemsOpen.clear();
  gameGameEl.classList.add('display-none');
  gameEndedEl.classList.remove('display-none');
  gameInfo.classList.add('display-none');
  calcultateScore();
  clearInterval(myInterval);
  cardFlips = 0;
  timeSec = 0;
  timeMin = 1;
}

// Play again functionality
var playAgainBtn = document.getElementById('play-again-btn');
var playAgain = function playAgain() {
  gameEndedEl.classList.add('display-none');
  gameInfo.classList.remove('display-none');
  gameOption.classList.remove('display-none');
  linkHolderEl.classList.remove('display-none');
  document.querySelector('.count').innerHTML = 0;
  secOptionalEl.innerHTML = 0;
  secondEl.innerHTML = 0;
  minEl = 0;
};
playAgainBtn.addEventListener('click', function () {
  playAgain();
});

// End game functionality
var homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', function () {
  gameInfo.classList.remove('display-none');
  gameOption.classList.remove('display-none');
  gameGameEl.classList.add('display-none');
  linkHolderEl.classList.remove('display-none');
  clearInterval(myInterval);
  cardFlips = 0;
  timeSec = 0;
  timeMin = 1;
  document.querySelector('.count').innerHTML = 0;
  secOptionalEl.innerHTML = 0;
  secondEl.innerHTML = 0;
  minEl = 0;
  gameStarted = false;
  gameEnded = true;
  timeStarted = false;
  numItemsOpen.clear();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixzSEFBc0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDdE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsZ0JBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLHdCQUF3Qix1QkFBdUIseUJBQXlCLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssd0JBQXdCLHVCQUF1QixPQUFPLEtBQUssd0JBQXdCLHVCQUF1Qix5QkFBeUIsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksU0FBUyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLHdCQUF3QixxQkFBcUIseUJBQXlCLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyx3QkFBd0IsdUJBQXVCLGFBQWEsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIseUJBQXlCLHVCQUF1QixRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLHVHQUF1RyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixNQUFNLDZCQUE2QixpQkFBaUIsZ0JBQWdCLEdBQUcsU0FBUywwQ0FBMEMsa0JBQWtCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDZCQUE2QixHQUFHLFNBQVMsMENBQTBDLEdBQUcsa0JBQWtCLCtCQUErQiwwREFBMEQsbURBQW1ELDhDQUE4Qyx1QkFBdUIsb0JBQW9CLG9CQUFvQiw0REFBNEQsR0FBRywwQkFBMEIsK0JBQStCLHNEQUFzRCw2QkFBNkIsNkJBQTZCLCtCQUErQix5Q0FBeUMsd0RBQXdELG9EQUFvRCxpQkFBaUIsR0FBRyxjQUFjLGtCQUFrQix1QkFBdUIscUJBQXFCLHlCQUF5QixHQUFHLGVBQWUsa0JBQWtCLG9CQUFvQixxQ0FBcUMsc0JBQXNCLEdBQUcsbUJBQW1CLHFCQUFxQixHQUFHLGFBQWEsdUJBQXVCLHNCQUFzQiw4Q0FBOEMsbUJBQW1CLG9CQUFvQixxQkFBcUIsOEJBQThCLDRCQUE0QixHQUFHLFlBQVksc0JBQXNCLHNCQUFzQiw4Q0FBOEMsbUJBQW1CLG9CQUFvQixxQkFBcUIsOEJBQThCLDRCQUE0QixHQUFHLFVBQVUsdUJBQXVCLHNCQUFzQiw4Q0FBOEMsbUJBQW1CLG9CQUFvQixxQkFBcUIsOEJBQThCLDRCQUE0QixHQUFHLFVBQVUsNkJBQTZCLHFDQUFxQyw0QkFBNEIsOEJBQThCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsZ0JBQWdCLDJDQUEyQyxHQUFHLFVBQVUsNkNBQTZDLHNCQUFzQixHQUFHLGNBQWMseUJBQXlCLEdBQUcsMENBQTBDLGlCQUFpQix1QkFBdUIscUJBQXFCLHlCQUF5QixnQ0FBZ0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLDBCQUEwQixHQUFHLGtCQUFrQixxQkFBcUIsR0FBRywwQkFBMEIsd0JBQXdCLHVCQUF1Qix1QkFBdUIsR0FBRyxrRUFBa0UsK0JBQStCLGdEQUFnRCwrQ0FBK0MsOENBQThDLHVCQUF1QixvQkFBb0Isc0JBQXNCLG9CQUFvQiw4QkFBOEIsR0FBRyxvRkFBb0YsK0JBQStCLDZDQUE2QyxrREFBa0QsR0FBRywwRkFBMEYsK0JBQStCLG9DQUFvQyxvREFBb0QsK0RBQStELDRCQUE0QixrQkFBa0IsaUJBQWlCLHVCQUF1QixxQkFBcUIseUJBQXlCLGdDQUFnQyxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsMEJBQTBCLHFCQUFxQixHQUFHLHFCQUFxQix3QkFBd0Isc0JBQXNCLDhDQUE4QyxtQkFBbUIsb0JBQW9CLHFCQUFxQiw4QkFBOEIsNEJBQTRCLEdBQUcsaUJBQWlCLGlCQUFpQix1QkFBdUIscUJBQXFCLHlCQUF5QixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsR0FBRyxpQkFBaUIsMEJBQTBCLGlDQUFpQyxHQUFHLG9CQUFvQiwrQkFBK0IsR0FBRyxtQkFBbUI7QUFDMXFOO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ3ZOMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQTBCOztBQUUxQjtBQUNBLElBQUlBLFFBQVEsR0FBRyxDQUNYO0VBQ0lDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxJQUFJO0VBQ1ZDLEdBQUcsRUFBRTtBQUNULENBQUMsRUFDRDtFQUNJRixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxHQUFHLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDSUYsRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFLElBQUk7RUFDVkMsR0FBRyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0lGLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxJQUFJO0VBQ1ZDLEdBQUcsRUFBRTtBQUNULENBQUMsRUFDRDtFQUNJRixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxHQUFHLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDSUYsRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFLElBQUk7RUFDVkMsR0FBRyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0lGLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxJQUFJO0VBQ1ZDLEdBQUcsRUFBRTtBQUNULENBQUMsRUFDRDtFQUNJRixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxHQUFHLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDSUYsRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFLElBQUk7RUFDVkMsR0FBRyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0lGLEVBQUUsRUFBRSxFQUFFO0VBQ05DLElBQUksRUFBRSxJQUFJO0VBQ1ZDLEdBQUcsRUFBRTtBQUNULENBQUMsRUFDRDtFQUNJRixFQUFFLEVBQUUsRUFBRTtFQUNOQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxHQUFHLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDSUYsRUFBRSxFQUFFLEVBQUU7RUFDTkMsSUFBSSxFQUFFLElBQUk7RUFDVkMsR0FBRyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0lGLEVBQUUsRUFBRSxFQUFFO0VBQ05DLElBQUksRUFBRSxJQUFJO0VBQ1ZDLEdBQUcsRUFBRTtBQUNULENBQUMsRUFDRDtFQUNJRixFQUFFLEVBQUUsRUFBRTtFQUNOQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxHQUFHLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDSUYsRUFBRSxFQUFFLEVBQUU7RUFDTkMsSUFBSSxFQUFFLElBQUk7RUFDVkMsR0FBRyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0lGLEVBQUUsRUFBRSxFQUFFO0VBQ05DLElBQUksRUFBRSxJQUFJO0VBQ1ZDLEdBQUcsRUFBRTtBQUNULENBQUMsQ0FDSixDQUFDQyxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDO0VBQUEsT0FBSyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7QUFBQSxFQUFDO0FBQ3JDLElBQUlDLFNBQVMsR0FBRyxDQUVaO0VBQ0lSLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxJQUFJO0VBQ1ZDLEdBQUcsRUFBRTtBQUNULENBQUMsRUFDRDtFQUNJRixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxHQUFHLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDSUYsRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFLElBQUk7RUFDVkMsR0FBRyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0lGLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxJQUFJO0VBQ1ZDLEdBQUcsRUFBRTtBQUNULENBQUMsRUFDRDtFQUNJRixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxHQUFHLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDSUYsRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFLElBQUk7RUFDVkMsR0FBRyxFQUFFO0FBQ1QsQ0FBQyxDQUNKLENBQUNDLElBQUksQ0FBQyxVQUFDQyxDQUFDLEVBQUVDLENBQUM7RUFBQSxPQUFLLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztBQUFBLEVBQUM7QUFDckMsSUFBSUUsU0FBUyxHQUFHLENBQ1o7RUFDSVQsRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFLElBQUk7RUFDVkMsR0FBRyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0lGLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxJQUFJO0VBQ1ZDLEdBQUcsRUFBRTtBQUNULENBQUMsRUFDRDtFQUNJRixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxHQUFHLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDSUYsRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFLElBQUk7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T0FBTyxFQUFFLFlBQUk7RUFDdkNvQyxTQUFTLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQzs7QUFFRjtBQUNBLElBQU1DLE9BQU8sR0FBR2pFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUNsRGdFLE9BQU8sQ0FBQ3JDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFJO0VBQ2xDekIsUUFBUSxDQUFDNEIsU0FBUyxDQUFDRSxNQUFNLENBQUMsY0FBYyxDQUFDO0VBQ3pDN0IsVUFBVSxDQUFDMkIsU0FBUyxDQUFDRSxNQUFNLENBQUMsY0FBYyxDQUFDO0VBQzNDNUIsVUFBVSxDQUFDMEIsU0FBUyxDQUFDRyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBQ3hDbkMsWUFBWSxDQUFDZ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsY0FBYyxDQUFDO0VBRTdDNkIsYUFBYSxDQUFDckMsVUFBVSxDQUFDO0VBQ3pCSCxTQUFTLEdBQUcsQ0FBQztFQUNiQyxPQUFPLEdBQUcsQ0FBQztFQUNYQyxPQUFPLEdBQUcsQ0FBQztFQUVYeEIsUUFBUSxDQUFDb0QsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDVCxTQUFTLEdBQUcsQ0FBQztFQUM5Q2pDLGFBQWEsQ0FBQ2lDLFNBQVMsR0FBRyxDQUFDO0VBQzNCbEMsUUFBUSxDQUFDa0MsU0FBUyxHQUFHLENBQUM7RUFDdEJoQyxLQUFLLEdBQUcsQ0FBQztFQUVUSSxXQUFXLEdBQUcsS0FBSztFQUNuQkMsU0FBUyxHQUFHLElBQUk7RUFDaEJFLFdBQVcsR0FBRyxLQUFLO0VBQ25CRSxZQUFZLENBQUN5QyxLQUFLLENBQUMsQ0FBQztBQUd4QixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1YmxpYy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3B1YmxpYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHVibGljLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9wdWJsaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHVibGljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wdWJsaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHVibGljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3B1YmxpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3B1YmxpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3B1YmxpYy8uL3NyYy9hc3NldHMvaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vcHVibGljL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3B1YmxpYy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wdWJsaWMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3B1YmxpYy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3B1YmxpYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3B1YmxpYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3B1YmxpYy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wdWJsaWMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3B1YmxpYy8uL3NyYy9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYnV0dG9ue1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuYnV0dG9uI2hvbWVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyAvKiBMaWdodCBncmF5IGZvciBhIHN1YnRsZSBjb250cmFzdCAqL1xuICBjb2xvcjogIzMzMzMzMzsgLyogRGFyayBncmF5IHRleHQgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI0RERERERDsgLyogTGlnaHQgZ3JheSBib3JkZXIgKi9cbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xufVxuXG5idXR0b24jaG9tZUJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7IC8qIERhcmtlciBncmF5IGZvciBob3ZlciBlZmZlY3QgKi9cbiAgY29sb3I6ICMwMDAwMDA7IC8qIFNsaWdodGx5IGRhcmtlciB0ZXh0ICovXG59XG5cbmJ1dHRvbiNob21lQnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTsgLyogVmVyeSBsaWdodCBncmF5ICovXG4gIGNvbG9yOiAjQUFBQUFBOyAvKiBNdXRlZCBncmF5IGZvciB0ZXh0ICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFRUVFRUU7IC8qIFZlcnkgbGlnaHQgZ3JheSBib3JkZXIgKi9cbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgb3BhY2l0eTogMC42O1xufVxuXG5cbnNlY3Rpb257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nYW1lLWluZm97XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRpdGxlLWhlYWRlciBoMXtcbiAgICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmJ5Zm91cnN7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgZ2FwOiA3LjVweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ieXRocmVlc3tcbiAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgIGdhcDogNy41cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYnl0d29ze1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgIGdhcDogNy41cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pdGVte1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMSAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oaWRlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDI1MiwgMjUyKTtcbn1cblxuLmhpZGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5NSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhpZGUgPiBpbWd7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5cblxuLyogZ2FtZS1vcHRpb24gKi9cblxuI2dhbWUtb3B0aW9ue1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuI2dhbWUtb3B0aW9uIGgze1xuICAgIGNvbG9yOiAjRTBFMEUwO1xufVxuXG4jZ2FtZS1vcHRpb24gPiBidXR0b257XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jZ2FtZS1vcHRpb24gPiBidXR0b24sICNob3N0QUZyaWVuZEJ0biwgI2dhbWUtZW5kZWQgPiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYxRjFGOyAvKiBTbGlnaHRseSBsaWdodGVyIGJsYWNrICovXG4gIGNvbG9yOiAjRTBFMEUwOyAvKiBMaWdodCBncmF5ICovXG4gIGJvcmRlcjogMnB4IHNvbGlkICNFMEUwRTA7IC8qIExpZ2h0IGdyYXkgYm9yZGVyICovXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbiNnYW1lLW9wdGlvbiA+IGJ1dHRvbjpob3ZlciwgI2hvc3RBRnJpZW5kQnRuOmhvdmVyLCAjZ2FtZS1lbmRlZCA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7IC8qIExpZ2h0IGdyYXkgb24gaG92ZXIgKi9cbiAgY29sb3I6ICMxMjEyMTI7IC8qIERhcmsgdGV4dCBvbiBob3ZlciAqL1xuICBib3JkZXItY29sb3I6ICNFMEUwRTA7XG59XG5cbiNnYW1lLW9wdGlvbiA+IGJ1dHRvbjpkaXNhYmxlZCwgI2hvc3RBRnJpZW5kQnRuOmRpc2FibGVkLCAjZ2FtZS1lbmRlZCA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7IC8qIE11dGVkIGdyYXkgKi9cbiAgY29sb3I6ICM5RTlFOUU7IC8qIExpZ2h0ZXIgZ3JheSBmb3IgdGV4dCAqL1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyAvKiBJbmRpY2F0ZXMgdGhlIGJ1dHRvbiBpcyBub3QgaW50ZXJhY3RpdmUgKi9cbiAgb3BhY2l0eTogMC42OyAvKiBTbGlnaHQgdHJhbnNwYXJlbmN5ICovXG59XG5cblxuI2dhbWUtZW5kZWR7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6ICNFMEUwRTA7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICAgIGdhcDogNy41cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5saW5rLWhvbGRlcntcbiAgICB3aWR0aDogOTUlO1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpbmstaG9sZGVyIGF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuXG4uZGlzcGxheS1ub25le1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FB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cUJBQXFCO01BQ3JCLG1CQUFtQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7OztBQUdBO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuYnV0dG9ue1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmJ1dHRvbiNob21lQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7IC8qIExpZ2h0IGdyYXkgZm9yIGEgc3VidGxlIGNvbnRyYXN0ICovXFxuICBjb2xvcjogIzMzMzMzMzsgLyogRGFyayBncmF5IHRleHQgKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7IC8qIExpZ2h0IGdyYXkgYm9yZGVyICovXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG5idXR0b24jaG9tZUJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwOyAvKiBEYXJrZXIgZ3JheSBmb3IgaG92ZXIgZWZmZWN0ICovXFxuICBjb2xvcjogIzAwMDAwMDsgLyogU2xpZ2h0bHkgZGFya2VyIHRleHQgKi9cXG59XFxuXFxuYnV0dG9uI2hvbWVCdG46ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTsgLyogVmVyeSBsaWdodCBncmF5ICovXFxuICBjb2xvcjogI0FBQUFBQTsgLyogTXV0ZWQgZ3JheSBmb3IgdGV4dCAqL1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0VFRUVFRTsgLyogVmVyeSBsaWdodCBncmF5IGJvcmRlciAqL1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuXFxuc2VjdGlvbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWluZm97XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnRpdGxlLWhlYWRlciBoMXtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5ieWZvdXJze1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgICBnYXA6IDcuNXB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJ5dGhyZWVze1xcbiAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICAgIGdhcDogNy41cHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYnl0d29ze1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICBnYXA6IDcuNXB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW17XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDEgIWltcG9ydGFudDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWRlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAyNTIsIDI1Mik7XFxufVxcblxcbi5oaWRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGlkZSA+IGltZ3tcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5cXG5cXG4vKiBnYW1lLW9wdGlvbiAqL1xcblxcbiNnYW1lLW9wdGlvbntcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiNnYW1lLW9wdGlvbiBoM3tcXG4gICAgY29sb3I6ICNFMEUwRTA7XFxufVxcblxcbiNnYW1lLW9wdGlvbiA+IGJ1dHRvbntcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNnYW1lLW9wdGlvbiA+IGJ1dHRvbiwgI2hvc3RBRnJpZW5kQnRuLCAjZ2FtZS1lbmRlZCA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYxRjFGOyAvKiBTbGlnaHRseSBsaWdodGVyIGJsYWNrICovXFxuICBjb2xvcjogI0UwRTBFMDsgLyogTGlnaHQgZ3JheSAqL1xcbiAgYm9yZGVyOiAycHggc29saWQgI0UwRTBFMDsgLyogTGlnaHQgZ3JheSBib3JkZXIgKi9cXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuI2dhbWUtb3B0aW9uID4gYnV0dG9uOmhvdmVyLCAjaG9zdEFGcmllbmRCdG46aG92ZXIsICNnYW1lLWVuZGVkID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7IC8qIExpZ2h0IGdyYXkgb24gaG92ZXIgKi9cXG4gIGNvbG9yOiAjMTIxMjEyOyAvKiBEYXJrIHRleHQgb24gaG92ZXIgKi9cXG4gIGJvcmRlci1jb2xvcjogI0UwRTBFMDtcXG59XFxuXFxuI2dhbWUtb3B0aW9uID4gYnV0dG9uOmRpc2FibGVkLCAjaG9zdEFGcmllbmRCdG46ZGlzYWJsZWQsICNnYW1lLWVuZGVkID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7IC8qIE11dGVkIGdyYXkgKi9cXG4gIGNvbG9yOiAjOUU5RTlFOyAvKiBMaWdodGVyIGdyYXkgZm9yIHRleHQgKi9cXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7IC8qIEluZGljYXRlcyB0aGUgYnV0dG9uIGlzIG5vdCBpbnRlcmFjdGl2ZSAqL1xcbiAgb3BhY2l0eTogMC42OyAvKiBTbGlnaHQgdHJhbnNwYXJlbmN5ICovXFxufVxcblxcblxcbiNnYW1lLWVuZGVke1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6ICNFMEUwRTA7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgICBnYXA6IDcuNXB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpbmstaG9sZGVye1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmxpbmstaG9sZGVyIGF7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5cXG4uZGlzcGxheS1ub25le1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL0FlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQWUucG5nXCIsXG5cdFwiLi9BaS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0FpLnBuZ1wiLFxuXHRcIi4vQW4ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Bbi5wbmdcIixcblx0XCIuL0NhcnRvb24vY2FydGUtMC5naWZcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NhcnRvb24vY2FydGUtMC5naWZcIixcblx0XCIuL0NhcnRvb24vY2FydGUtMS5naWZcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NhcnRvb24vY2FydGUtMS5naWZcIixcblx0XCIuL0NhcnRvb24vY2FydGUtMTAuZ2lmXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DYXJ0b29uL2NhcnRlLTEwLmdpZlwiLFxuXHRcIi4vQ2FydG9vbi9jYXJ0ZS0xMS5naWZcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NhcnRvb24vY2FydGUtMTEuZ2lmXCIsXG5cdFwiLi9DYXJ0b29uL2NhcnRlLTEyLmdpZlwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ2FydG9vbi9jYXJ0ZS0xMi5naWZcIixcblx0XCIuL0NhcnRvb24vY2FydGUtMTMuZ2lmXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DYXJ0b29uL2NhcnRlLTEzLmdpZlwiLFxuXHRcIi4vQ2FydG9vbi9jYXJ0ZS0xNC5naWZcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NhcnRvb24vY2FydGUtMTQuZ2lmXCIsXG5cdFwiLi9DYXJ0b29uL2NhcnRlLTE1LmdpZlwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ2FydG9vbi9jYXJ0ZS0xNS5naWZcIixcblx0XCIuL0NhcnRvb24vY2FydGUtMTYuZ2lmXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DYXJ0b29uL2NhcnRlLTE2LmdpZlwiLFxuXHRcIi4vQ2FydG9vbi9jYXJ0ZS0xNy5naWZcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NhcnRvb24vY2FydGUtMTcuZ2lmXCIsXG5cdFwiLi9DYXJ0b29uL2NhcnRlLTE4LmdpZlwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ2FydG9vbi9jYXJ0ZS0xOC5naWZcIixcblx0XCIuL0NhcnRvb24vY2FydGUtMTkuZ2lmXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DYXJ0b29uL2NhcnRlLTE5LmdpZlwiLFxuXHRcIi4vQ2FydG9vbi9jYXJ0ZS0yLmdpZlwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ2FydG9vbi9jYXJ0ZS0yLmdpZlwiLFxuXHRcIi4vQ2FydG9vbi9jYXJ0ZS0yMC5naWZcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NhcnRvb24vY2FydGUtMjAuZ2lmXCIsXG5cdFwiLi9DYXJ0b29uL2NhcnRlLTMuZ2lmXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DYXJ0b29uL2NhcnRlLTMuZ2lmXCIsXG5cdFwiLi9DYXJ0b29uL2NhcnRlLTQuZ2lmXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DYXJ0b29uL2NhcnRlLTQuZ2lmXCIsXG5cdFwiLi9DYXJ0b29uL2NhcnRlLTUuZ2lmXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DYXJ0b29uL2NhcnRlLTUuZ2lmXCIsXG5cdFwiLi9DYXJ0b29uL2NhcnRlLTYuZ2lmXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DYXJ0b29uL2NhcnRlLTYuZ2lmXCIsXG5cdFwiLi9DYXJ0b29uL2NhcnRlLTcuZ2lmXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DYXJ0b29uL2NhcnRlLTcuZ2lmXCIsXG5cdFwiLi9DYXJ0b29uL2NhcnRlLTguZ2lmXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DYXJ0b29uL2NhcnRlLTguZ2lmXCIsXG5cdFwiLi9DYXJ0b29uL2NhcnRlLTkuZ2lmXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9DYXJ0b29uL2NhcnRlLTkuZ2lmXCIsXG5cdFwiLi9JZC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0lkLnBuZ1wiLFxuXHRcIi4vTHIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Mci5wbmdcIixcblx0XCIuL1ByLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvUHIucG5nXCIsXG5cdFwiLi9Qcy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1BzLnBuZ1wiLFxuXHRcIi4vWGQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9YZC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcblxuLy8gR2FtZSBEYXRhICBcbmxldCBnYW1lRGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnQWUnLFxuICAgICAgICBzcmM6ICdBZS5wbmcnIFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ0FpJyxcbiAgICAgICAgc3JjOiAnQWkucG5nJyBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdBbicsXG4gICAgICAgIHNyYzogJ0FuLnBuZycgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiAnSWQnLFxuICAgICAgICBzcmM6ICdJZC5wbmcnIFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ0xyJyxcbiAgICAgICAgc3JjOiAnTHIucG5nJyBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIG5hbWU6ICdQcicsXG4gICAgICAgIHNyYzogJ1ByLnBuZycgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBuYW1lOiAnUHMnLFxuICAgICAgICBzcmM6ICdQcy5wbmcnIFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOCxcbiAgICAgICAgbmFtZTogJ1hkJyxcbiAgICAgICAgc3JjOiAnWGQucG5nJyBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIG5hbWU6ICdBZScsXG4gICAgICAgIHNyYzogJ0FlLnBuZycgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgbmFtZTogJ0FpJyxcbiAgICAgICAgc3JjOiAnQWkucG5nJyBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICBuYW1lOiAnQW4nLFxuICAgICAgICBzcmM6ICdBbi5wbmcnIFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTIsXG4gICAgICAgIG5hbWU6ICdJZCcsXG4gICAgICAgIHNyYzogJ0lkLnBuZycgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgbmFtZTogJ0xyJyxcbiAgICAgICAgc3JjOiAnTHIucG5nJyBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE0LFxuICAgICAgICBuYW1lOiAnUHInLFxuICAgICAgICBzcmM6ICdQci5wbmcnIFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTUsXG4gICAgICAgIG5hbWU6ICdQcycsXG4gICAgICAgIHNyYzogJ1BzLnBuZycgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxNixcbiAgICAgICAgbmFtZTogJ1hkJyxcbiAgICAgICAgc3JjOiAnWGQucG5nJyBcbiAgICB9XG5dLnNvcnQoKGEsIGIpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpXG5sZXQgZ2FtZURhdGEyID0gW1xuXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ0FuJyxcbiAgICAgICAgc3JjOiAnQW4ucG5nJyBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdQcycsXG4gICAgICAgIHNyYzogJ1BzLnBuZycgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiAnWGQnLFxuICAgICAgICBzcmM6ICdYZC5wbmcnIFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgbmFtZTogJ0FuJyxcbiAgICAgICAgc3JjOiAnQW4ucG5nJyBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIG5hbWU6ICdQcycsXG4gICAgICAgIHNyYzogJ1BzLnBuZycgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBuYW1lOiAnWGQnLFxuICAgICAgICBzcmM6ICdYZC5wbmcnIFxuICAgIH1cbl0uc29ydCgoYSwgYikgPT4gMC41IC0gTWF0aC5yYW5kb20oKSlcbmxldCBnYW1lRGF0YTMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ0FlJyxcbiAgICAgICAgc3JjOiAnQWUucG5nJyBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdQcycsXG4gICAgICAgIHNyYzogJ1BzLnBuZycgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAnQWUnLFxuICAgICAgICBzcmM6ICdBZS5wbmcnIFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogJ1BzJyxcbiAgICAgICAgc3JjOiAnUHMucG5nJyBcbiAgICB9LFxuXS5zb3J0KChhLCBiKSA9PiAwLjUgLSBNYXRoLnJhbmRvbSgpKVxuXG5jb25zdCBsaW5rSG9sZGVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlua0hvbGRlckVsJylcbmNvbnN0IGdyaWRDb250YWluZXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWdyaWQtY29udGFpbmVyJylcbmNvbnN0IGdhbWVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtaW5mbycpXG5jb25zdCBnYW1lT3B0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtb3B0aW9uJylcbmNvbnN0IGdhbWVHYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1nYW1lJylcbmNvbnN0IGdhbWVFbmRlZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZW5kZWQnKVxuY29uc3Qgc3RhcnRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bnMnKVxuXG5cbmxldCBzZWNvbmRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWMnKVxubGV0IHNlY09wdGlvbmFsRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjLW9wdGlvbmFsJylcbmxldCBtaW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW4nKVxuY29uc3QgdGltZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKVxuXG5jb25zdCB0aW1lVGFrZW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtLXRha2VuJylcbmNvbnN0IGNhcmRGaWxwc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtZmxpcHMnKVxubGV0IGdhbWVTdGFydGVkID0gZmFsc2VcbmxldCBnYW1lRW5kZWQgPSBmYWxzZVxubGV0IHVzZXJDaG9pc2UgPSBudWxsXG5sZXQgdGltZVN0YXJ0ZWQgPSBmYWxzZVxuXG5sZXQgaXRlbUVsO1xuXG5sZXQgbnVtSXRlbXNPcGVuID0gbmV3IFNldFxubGV0IGNhcmRGbGlwcyA9IDBcbmxldCB0aW1lU2VjID0gMFxubGV0IHRpbWVNaW4gPSAxXG5sZXQgbXlJbnRlcnZhbDtcblxuLy9DaG9vc2UgR3JpZCBoYW5kbGVcbnN0YXJ0QnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdieWZvdXInKSl7XG4gICAgICAgICAgICB1c2VyQ2hvaXNlID0gZ2FtZURhdGFcbiAgICAgICAgICAgIGdyaWRDb250YWluZXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdieXR3b3MnKVxuICAgICAgICAgICAgZ3JpZENvbnRhaW5lckVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J5dGhyZWVzJylcbiAgICAgICAgICAgIGdyaWRDb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKCdieWZvdXJzJylcbiAgICAgICAgfWVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnl0aHJlZScpKXtcbiAgICAgICAgICAgIHVzZXJDaG9pc2UgPSBnYW1lRGF0YTJcbiAgICAgICAgICAgIGdyaWRDb250YWluZXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdieXR3b3MnKVxuICAgICAgICAgICAgZ3JpZENvbnRhaW5lckVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J5Zm91cnMnKVxuICAgICAgICAgICAgZ3JpZENvbnRhaW5lckVsLmNsYXNzTGlzdC5hZGQoJ2J5dGhyZWVzJylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB1c2VyQ2hvaXNlID0gZ2FtZURhdGEzXG4gICAgICAgICAgICBncmlkQ29udGFpbmVyRWwuY2xhc3NMaXN0LnJlbW92ZSgnYnlmb3VycycpXG4gICAgICAgICAgICBncmlkQ29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnYnl0d29zJylcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWVTdGFydGVkID0gdHJ1ZVxuICAgICAgICBjaGFuZ2VQYWdlKClcbiAgICAgICAgc3RhcnRHYW1lKClcbiAgICB9KVxufSlcblxuXG5cbi8vU3RhcnQgR2FtZSBGdW5jdGlvblxuZnVuY3Rpb24gc3RhcnRHYW1lKCl7XG4gICAgLy8gRHluYW1pY2xseSByZWRlciB0aGUgcGhvdG8tY2FyZCBlbFxuICAgIGNvbnN0IGdhbWVMYXlPdXQgPSB1c2VyQ2hvaXNlLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgIGNsYXNzPVwiaXRlbSBoaWRlXCIgaWQ9XCIke2l0ZW0ubmFtZX1cIiBvbmNsaWNrPVwic2V0Q2FyZEZsaXBzKGV2ZW50KVwiIGxhbmc9XCIke2l0ZW0uaWR9XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy8ke2l0ZW0uc3JjfWApfVwiICBpZD1cIiR7aXRlbS5pZH1cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbiAgICB9KS5qb2luKCcnKVxuICAgIGdyaWRDb250YWluZXJFbC5pbm5lckhUTUwgPSBnYW1lTGF5T3V0XG4gICAgaXRlbUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKVxuICAgIGl0ZW1FbC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICBpZighdGltZVN0YXJ0ZWQpe1xuICAgICAgICAgICAgICAgIHRpbWVyKClcbiAgICAgICAgICAgICAgICB0aW1lU3RhcnRlZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wZW5DYXJkKGUpXG4gICAgICAgICAgICBjaGVja2VyKClcbiAgICAgICAgICAgIGNsb3NlQ2FyZHMoKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuXG53aW5kb3cuc2V0Q2FyZEZsaXBzID0gKGUpID0+IHsgIFxuICAgIGlmIChudW1JdGVtc09wZW4uc2l6ZSA8IDIpIHtcbiAgICAgICAgaXRlbUVsLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiBpdGVtLmxhbmcgPT09IGUudGFyZ2V0LmxhbmcpIHtcbiAgICAgICAgICAgICAgICBjYXJkRmxpcHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRcIikuaW5uZXJIVE1MID0gY2FyZEZsaXBzO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgdGltZXIgPSAoKSA9PiB7XG4gICAgICAgbXlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICB0aW1lU2VjKytcbiAgICAgICAgICAgIHNlY29uZEVsLmlubmVySFRNTCA9IHRpbWVTZWNcblxuICAgICAgICAgICAgaWYodGltZVNlYyA+PSAxMCl7XG4gICAgICAgICAgICAgICAgc2VjT3B0aW9uYWxFbC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgc2VjT3B0aW9uYWxFbC5pbm5lckhUTUwgPSAnMCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRpbWVTZWMgPj0gNTkpe1xuICAgICAgICAgICAgICAgIG1pbkVsLmlubmVySFRNTCA9IHRpbWVNaW4rK1xuICAgICAgICAgICAgICAgIHRpbWVTZWMgPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sMTAwMClcbn1cblxuY29uc3QgY2FsY3VsdGF0ZVNjb3JlID0gKCkgPT57XG4gICAgdGltZVRha2VuRWwuaW5uZXJIVE1MID0gdGltZUVsLmlubmVySFRNTFxuICAgIGNhcmRGaWxwc0VsLmlubmVySFRNTCA9IGNhcmRGbGlwc1xufVxuXG5jb25zdCBvcGVuQ2FyZCA9IChlKSA9PntcbiAgICBpZihudW1JdGVtc09wZW4uc2l6ZSA8IDIpe1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcblxuICAgICAgICBpdGVtRWwuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpICYmICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPyAgbnVtSXRlbXNPcGVuLmFkZChpdGVtKSA6IG51bGxcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IGNoZWNrZXIgPSAoKSA9PntcbiAgICBsZXQgb3BlbmVkQ2FyZHNBcnIgPSBbXVxuICAgIGxldCBhY3RpdmVDYXJkID0gbmV3IFNldFxuICAgIGl0ZW1FbC5mb3JFYWNoKGl0ZW0gPT4gIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykgJiYgIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSA/IG9wZW5lZENhcmRzQXJyLnB1c2goaXRlbSkgOiBudWxsKVxuXG4gICAgaWYob3BlbmVkQ2FyZHNBcnIubGVuZ3RoID49IDIpe1xuICAgICAgICBpZihvcGVuZWRDYXJkc0FyclswXS5pZCA9PT0gb3BlbmVkQ2FyZHNBcnJbMV0uaWQpe1xuICAgICAgICAgICAgb3BlbmVkQ2FyZHNBcnIubWFwKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSlcbiAgICAgICAgICAgIGl0ZW1FbC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICA/IGFjdGl2ZUNhcmQuYWRkKGl0ZW0pIDogbnVsbClcbiAgICAgICAgICAgIGFjdGl2ZUNhcmQuc2l6ZSA9PT0gdXNlckNob2lzZS5sZW5ndGggJiYgZW5kR2FtZSgpXG4gICAgICAgICAgICBvcGVuZWRDYXJkc0Fyci5sZW5ndGggPSAwXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgb3BlbmVkQ2FyZHNBcnIubGVuZ3RoID0gMFxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjbG9zZUNhcmRzID0gKCkgPT57XG4gICAgaWYobnVtSXRlbXNPcGVuLnNpemUgPiAxKXtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaXRlbUVsLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICBpZighaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgICAgICAgICAgICAgbnVtSXRlbXNPcGVuLmNsZWFyKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LDYwMClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBhZ2UoKXtcbiAgICBpZihnYW1lU3RhcnRlZCl7XG4gICAgICAgIGdhbWVPcHRpb24uY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJylcbiAgICAgICAgZ2FtZUdhbWVFbC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKVxuICAgICAgICBsaW5rSG9sZGVyRWwuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUoKXtcbiAgICBnYW1lU3RhcnRlZCA9IGZhbHNlXG4gICAgZ2FtZUVuZGVkID0gdHJ1ZVxuICAgIHRpbWVTdGFydGVkID0gZmFsc2VcbiAgICBudW1JdGVtc09wZW4uY2xlYXIoKVxuXG4gICAgZ2FtZUdhbWVFbC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKVxuICAgIGdhbWVFbmRlZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpXG4gICAgZ2FtZUluZm8uY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJylcblxuICAgIGNhbGN1bHRhdGVTY29yZSgpXG4gICAgY2xlYXJJbnRlcnZhbChteUludGVydmFsKVxuICAgIGNhcmRGbGlwcyA9IDBcbiAgICB0aW1lU2VjID0gMFxuICAgIHRpbWVNaW4gPSAxXG5cbn1cblxuLy8gUGxheSBhZ2FpbiBmdW5jdGlvbmFsaXR5XG5jb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1hZ2Fpbi1idG4nKVxuY29uc3QgcGxheUFnYWluID0gKCkgPT57XG4gICAgZ2FtZUVuZGVkRWwuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJylcbiAgICBnYW1lSW5mby5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKVxuICAgIGdhbWVPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJylcbiAgICBsaW5rSG9sZGVyRWwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJylcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudCcpLmlubmVySFRNTCA9IDBcbiAgICBzZWNPcHRpb25hbEVsLmlubmVySFRNTCA9IDBcbiAgICBzZWNvbmRFbC5pbm5lckhUTUwgPSAwXG4gICAgbWluRWwgPSAwXG4gICAgXG59XG5wbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHBsYXlBZ2FpbigpXG59KVxuXG4vLyBFbmQgZ2FtZSBmdW5jdGlvbmFsaXR5XG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdG4nKVxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgZ2FtZUluZm8uY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJylcbiAgICBnYW1lT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpXG4gICAgZ2FtZUdhbWVFbC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKVxuICAgIGxpbmtIb2xkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKVxuXG4gICAgY2xlYXJJbnRlcnZhbChteUludGVydmFsKVxuICAgIGNhcmRGbGlwcyA9IDBcbiAgICB0aW1lU2VjID0gMFxuICAgIHRpbWVNaW4gPSAxXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQnKS5pbm5lckhUTUwgPSAwXG4gICAgc2VjT3B0aW9uYWxFbC5pbm5lckhUTUwgPSAwXG4gICAgc2Vjb25kRWwuaW5uZXJIVE1MID0gMFxuICAgIG1pbkVsID0gMFxuXG4gICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZVxuICAgIGdhbWVFbmRlZCA9IHRydWVcbiAgICB0aW1lU3RhcnRlZCA9IGZhbHNlXG4gICAgbnVtSXRlbXNPcGVuLmNsZWFyKClcblxuICAgIFxufSkiXSwibmFtZXMiOlsiZ2FtZURhdGEiLCJpZCIsIm5hbWUiLCJzcmMiLCJzb3J0IiwiYSIsImIiLCJNYXRoIiwicmFuZG9tIiwiZ2FtZURhdGEyIiwiZ2FtZURhdGEzIiwibGlua0hvbGRlckVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdyaWRDb250YWluZXJFbCIsImdhbWVJbmZvIiwiZ2FtZU9wdGlvbiIsImdhbWVHYW1lRWwiLCJnYW1lRW5kZWRFbCIsInN0YXJ0QnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWNvbmRFbCIsInNlY09wdGlvbmFsRWwiLCJtaW5FbCIsInRpbWVFbCIsInRpbWVUYWtlbkVsIiwiY2FyZEZpbHBzRWwiLCJnYW1lU3RhcnRlZCIsImdhbWVFbmRlZCIsInVzZXJDaG9pc2UiLCJ0aW1lU3RhcnRlZCIsIml0ZW1FbCIsIm51bUl0ZW1zT3BlbiIsIlNldCIsImNhcmRGbGlwcyIsInRpbWVTZWMiLCJ0aW1lTWluIiwibXlJbnRlcnZhbCIsImZvckVhY2giLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiY2hhbmdlUGFnZSIsInN0YXJ0R2FtZSIsImdhbWVMYXlPdXQiLCJtYXAiLCJpdGVtIiwiY29uY2F0IiwicmVxdWlyZSIsImpvaW4iLCJpbm5lckhUTUwiLCJ0aW1lciIsIm9wZW5DYXJkIiwiY2hlY2tlciIsImNsb3NlQ2FyZHMiLCJ3aW5kb3ciLCJzZXRDYXJkRmxpcHMiLCJzaXplIiwibGFuZyIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRJbnRlcnZhbCIsImNhbGN1bHRhdGVTY29yZSIsIm9wZW5lZENhcmRzQXJyIiwiYWN0aXZlQ2FyZCIsInB1c2giLCJsZW5ndGgiLCJlbmRHYW1lIiwic2V0VGltZW91dCIsImNsZWFyIiwiY2xlYXJJbnRlcnZhbCIsInBsYXlBZ2FpbkJ0biIsInBsYXlBZ2FpbiIsImhvbWVCdG4iXSwic291cmNlUm9vdCI6IiJ9