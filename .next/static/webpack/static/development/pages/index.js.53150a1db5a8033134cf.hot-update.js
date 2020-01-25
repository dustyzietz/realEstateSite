webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store.js");
var _jsxFileName = "C:\\Users\\dusty\\OneDrive\\Desktop\\realEstateSite\\components\\List.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function List() {
  return __jsx("div", {
    id: "s__listings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _store__WEBPACK_IMPORTED_MODULE_2__["listingResults"].map(function (listing) {
    var id = listing.id,
        img = listing.img,
        firstPrice = listing.firstPrice,
        secondPrice = listing.secondPrice,
        bd = listing.bd,
        ba = listing.ba,
        sf = listing.sf,
        addressLine1 = listing.addressLine1,
        addressLine2 = listing.addressLine2;
    return __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: id,
      img: img,
      firstPrice: firstPrice,
      secondPrice: secondPrice,
      bd: bd,
      ba: ba,
      sf: sf,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    });
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.53150a1db5a8033134cf.hot-update.js.map