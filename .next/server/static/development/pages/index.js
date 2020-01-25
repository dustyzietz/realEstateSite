module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Filter.js":
/*!*************************!*\
  !*** ./pages/Filter.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\dusty\\OneDrive\\Desktop\\realEstateSite\\pages\\Filter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Filter() {
  return __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    id: "s__filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("path", {
    d: "M26.755 11.883a3.327 3.327 0 0 1 0 6.1v8.034h-2.66v-8.035a3.327 3.327 0 0 1 0-6.1V5.997h2.66v5.887zm-9.31 5.36a3.327 3.327 0 0 1 0 6.1v2.674h-2.66v-2.674a3.327 3.327 0 0 1 0-6.1V5.996h2.66v11.247zm-9.31-7.98a3.327 3.327 0 0 1 0 6.1v10.654h-2.66V15.363a3.327 3.327 0 0 1 0-6.1V5.996h2.66v3.267z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Filter")), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Any Price"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("path", {
    d: "M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })))))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "All Beds"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("path", {
    d: "M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })))))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "All Home Types"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("path", {
    d: "M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })))))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "More"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("path", {
    d: "M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })))))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("path", {
    d: "M22.083 17.453a2.66 2.66 0 0 1-.304-1.235V12.92c0-3.281-2.668-5.605-5.82-5.605-3.15 0-5.813 2.322-5.813 5.606l-.002 3.3c0 .43-.104.853-.304 1.234l-.785 1.496 13.813.001-.785-1.5zm2.356-4.533v3.298l2.826 5.395-22.61-.003 2.83-5.39v-3.3c0-5.278 4.434-8.265 8.474-8.265 4.042 0 8.48 2.988 8.48 8.265zm-8.5 14.345a3.768 3.768 0 0 1-3.769-3.768h7.537a3.768 3.768 0 0 1-3.768 3.768z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Save Search")))))), __jsx("div", {
    id: "s__sort",
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("path", {
    d: "M11.97 22.654l3.221-2.518 1.638 2.096-6.188 4.837-6.19-4.837 1.637-2.096 3.222 2.518V5.985h2.66v16.669zm4.655-12.729v-2.66h11.257v2.66H16.625zm2.66 7.032v-2.66h8.597v2.66h-8.597zm2.66 7.7v-2.66h5.937v2.66h-5.937z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }))), __jsx("select", {
    name: "sort-list",
    id: "sort-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("option", {
    value: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Assessed Ratio")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("path", {
    d: "M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./pages/List.js":
/*!***********************!*\
  !*** ./pages/List.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\dusty\\OneDrive\\Desktop\\realEstateSite\\pages\\List.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function List() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    id: "s__listings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("article", {
    id: "listing-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    className: "listing listing-re",
    title: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("img", {
    src: "https://placekitten.com/300/200",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "$1,000,000"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("path", {
    d: "M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, `$99,000 < assessed`)), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("path", {
    d: "M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "4bd")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("path", {
    d: "M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "2ba")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("path", {
    d: "M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "1,230sf"))), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "1234 Kuliana Pl, #300"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Kipo, HI")))), __jsx("article", {
    id: "listing-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    className: "listing listing-re",
    title: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("img", {
    src: "https://placekitten.com/300/200",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "$1,000,000"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("path", {
    d: "M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "$99,000 > assessed")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("path", {
    d: "M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "4bd")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("path", {
    d: "M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "2ba")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("path", {
    d: "M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "1,230sf"))), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "1234 Kuliana Pl, #300"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Kipo, HI")))), __jsx("article", {
    id: "listing-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("a", {
    className: "listing listing-re",
    title: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("img", {
    src: "https://placekitten.com/300/200",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "$1,000,000"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("path", {
    d: "M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "$99,000 > assessed")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("path", {
    d: "M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "4bd")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("path", {
    d: "M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "2ba")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("path", {
    d: "M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "1,230sf"))), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "1234 Kuliana Pl, #300"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Kipo, HI")))), __jsx("article", {
    id: "listing-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("a", {
    className: "listing listing-re",
    title: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("img", {
    src: "https://placekitten.com/300/200",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "$1,000,000"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("path", {
    d: "M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "$99,000 > assessed")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("path", {
    d: "M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "4bd")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("path", {
    d: "M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "2ba")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx("path", {
    d: "M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "1,230sf"))), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "1234 Kuliana Pl, #300"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Kipo, HI")))), __jsx("article", {
    id: "listing-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("a", {
    className: "listing listing-re",
    title: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("img", {
    src: "https://placekitten.com/300/200",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  })), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "$1,000,000"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("path", {
    d: "M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "$99,000 > assessed")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("path", {
    d: "M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "4bd")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx("path", {
    d: "M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "2ba")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("path", {
    d: "M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "1,230sf"))), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "1234 Kuliana Pl, #300"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "Kipo, HI")))), __jsx("article", {
    id: "listing-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, __jsx("a", {
    className: "listing listing-re",
    title: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx("img", {
    src: "https://placekitten.com/300/200",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  })), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "$1,000,000"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx("path", {
    d: "M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, "$99,000 > assessed")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, __jsx("path", {
    d: "M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "4bd")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, __jsx("path", {
    d: "M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, "2ba")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx("path", {
    d: "M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "1,230sf"))), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "1234 Kuliana Pl, #300"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "Kipo, HI")))), __jsx("article", {
    id: "listing-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, __jsx("a", {
    className: "listing listing-re",
    title: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, __jsx("img", {
    src: "https://placekitten.com/300/200",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  })), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, "$1,000,000"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, __jsx("path", {
    d: "M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "$99,000 > assessed")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, __jsx("path", {
    d: "M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, "4bd")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, __jsx("path", {
    d: "M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, "2ba")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx("path", {
    d: "M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "1,230sf"))), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "1234 Kuliana Pl, #300"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "Kipo, HI")))), __jsx("article", {
    id: "listing-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, __jsx("a", {
    className: "listing listing-re",
    title: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, __jsx("img", {
    src: "https://placekitten.com/300/200",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  })), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "$1,000,000"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, __jsx("path", {
    d: "M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, "$99,000 > assessed")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, __jsx("path", {
    d: "M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, "4bd")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, __jsx("path", {
    d: "M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, "2ba")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, __jsx("path", {
    d: "M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, "1,230sf"))), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, "1234 Kuliana Pl, #300"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, "Kipo, HI")))), __jsx("article", {
    id: "listing-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, __jsx("a", {
    className: "listing listing-re",
    title: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, __jsx("img", {
    src: "https://placekitten.com/300/200",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  })), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, "$1,000,000"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, __jsx("path", {
    d: "M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, "$99,000 > assessed")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, __jsx("path", {
    d: "M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, "4bd")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, __jsx("path", {
    d: "M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, "2ba")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, __jsx("path", {
    d: "M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }, "1,230sf"))), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, "1234 Kuliana Pl, #300"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, "Kipo, HI")))), __jsx("article", {
    id: "listing-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, __jsx("a", {
    className: "listing listing-re",
    title: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }, __jsx("img", {
    src: "https://placekitten.com/300/200",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  })), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, "$1,000,000"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, __jsx("path", {
    d: "M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, "$99,000 > assessed")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, __jsx("path", {
    d: "M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, "4bd")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, __jsx("path", {
    d: "M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, "2ba")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, __jsx("svg", {
    className: "icon icon-svg",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  }, __jsx("path", {
    d: "M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z",
    fill: "#869099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, "1,230sf"))), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }, "1234 Kuliana Pl, #300"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, "Kipo, HI"))))));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter */ "./pages/Filter.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List */ "./pages/List.js");
var _jsxFileName = "C:\\Users\\dusty\\OneDrive\\Desktop\\realEstateSite\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("meta", {
    name: "author",
    content: "Nalula",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover, minimal-ui",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("nav", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "NALULA")), __jsx("div", {
    id: "search-location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Kipo, HI")), __jsx("ul", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Buy")))), __jsx("main", {
    id: "s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    id: "s__map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    id: "s__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Kipo Real Estate"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "22 Homes for sale in Kipo, HI")), __jsx(_Filter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("div", {
    id: "s__pag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), __jsx("main", {
    id: "d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("style", {
    globaljsx: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, `

*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}
address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}
ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}
ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}
dt {
  font-weight: 700;
}
dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
blockquote {
  margin: 0 0 1rem;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #0056b3;
  text-decoration: underline;
}
a:not([href]) {
  color: inherit;
  text-decoration: none;
}
a:not([href]):hover {
  color: inherit;
  text-decoration: none;
}
pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 1em;
}
pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
}
figure {
  margin: 0 0 1rem;
}
img {
  vertical-align: middle;
  border-style: none;
}
svg {
  overflow: hidden;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
}
caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}
th {
  text-align: inherit;
}
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
button {
  border-radius: 0;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
select {
  word-wrap: normal;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}
textarea {
  overflow: auto;
  resize: vertical;
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}
output {
  display: inline-block;
}
summary {
  display: list-item;
  cursor: pointer;
}
template {
  display: none;
}
[hidden] {
  display: none !important;
}

.flex {
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
}
.icon {
  height: 20px;
  width: 20px;
}


`));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dusty\OneDrive\Desktop\realEstateSite\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map