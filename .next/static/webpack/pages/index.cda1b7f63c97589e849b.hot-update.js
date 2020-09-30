webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Description.js":
/*!***********************************!*\
  !*** ./components/Description.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NickNameLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NickNameLink */ \"./components/NickNameLink.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/Insta-Clone/components/Description.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar DescContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Description__DescContainer\",\n  componentId: \"sc-1u5xzje-0\"\n})([\"padding:0 15px;position:relative;\"]);\n_c = DescContainer;\nvar Name = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Description__Name\",\n  componentId: \"sc-1u5xzje-1\"\n})([\"position:absolute;top:0;left:15px;\"]);\n_c2 = Name;\nvar Desc = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Description__Desc\",\n  componentId: \"sc-1u5xzje-2\"\n})([\"text-overflow:ellipsis;white-space:pre-wrap;\"]);\n_c3 = Desc;\n\nvar Description = function Description(_ref) {\n  var userId = _ref.userId,\n      nickname = _ref.nickname,\n      desc = _ref.desc;\n  return __jsx(DescContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(Name, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(_NickNameLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    userId: userId,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, nickname)), __jsx(Desc, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, Array(nickname.length * 2).fill().map(function (v) {\n    return __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 59\n      }\n    }, \"\\xA0\");\n  }), desc), __jsx(\"input\", {\n    type: \"textarea\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }));\n};\n\n_c4 = Description;\nDescContainer.propTypes = {\n  userId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  nickname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  desc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"DescContainer\");\n$RefreshReg$(_c2, \"Name\");\n$RefreshReg$(_c3, \"Desc\");\n$RefreshReg$(_c4, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNjcmlwdGlvbi5qcz85MzM4Il0sIm5hbWVzIjpbIkRlc2NDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJOYW1lIiwiRGVzYyIsIkRlc2NyaXB0aW9uIiwidXNlcklkIiwibmlja25hbWUiLCJkZXNjIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwibWFwIiwidiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5Q0FBbkI7S0FBTUYsYTtBQUtOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwQ0FBVjtNQUFNQyxJO0FBTU4sSUFBTUMsSUFBSSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9EQUFWO01BQU1FLEk7O0FBS04sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBZ0M7QUFBQSxNQUE3QkMsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNoRCxTQUNJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFEO0FBQWMsVUFBTSxFQUFFRixNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCQyxRQUEvQixDQURKLENBREosRUFJSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRSxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csTUFBVCxHQUFnQixDQUFqQixDQUFMLENBQXlCQyxJQUF6QixHQUFnQ0MsR0FBaEMsQ0FBb0MsVUFBQUMsQ0FBQztBQUFBLFdBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFKO0FBQUEsR0FBckMsQ0FETCxFQUVLTCxJQUZMLENBSkosRUFRSTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQURKO0FBWUgsQ0FiRDs7TUFBTUgsVztBQWVOTCxhQUFhLENBQUNjLFNBQWQsR0FBMEI7QUFDdEJSLFFBQU0sRUFBRVMsaURBQVMsQ0FBQ0MsTUFESTtBQUV0QlQsVUFBUSxFQUFFUSxpREFBUyxDQUFDQyxNQUZFO0FBR3RCUixNQUFJLEVBQUVPLGlEQUFTLENBQUNDO0FBSE0sQ0FBMUI7QUFNZVgsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rlc2NyaXB0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmlja05hbWVMaW5rIGZyb20gJy4vTmlja05hbWVMaW5rJztcblxuY29uc3QgRGVzY0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzowIDE1cHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG5gO1xuXG5jb25zdCBOYW1lID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjE1cHg7XG5gO1xuXG5jb25zdCBEZXNjID0gc3R5bGVkLmRpdmBcbiAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOnByZS13cmFwO1xuYDtcblxuY29uc3QgRGVzY3JpcHRpb24gPSAoeyB1c2VySWQsIG5pY2tuYW1lLCBkZXNjIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RGVzY0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxOYW1lPlxuICAgICAgICAgICAgICAgIDxOaWNrTmFtZUxpbmsgdXNlcklkPXt1c2VySWR9PntuaWNrbmFtZX08L05pY2tOYW1lTGluaz5cbiAgICAgICAgICAgIDwvTmFtZT5cbiAgICAgICAgICAgIDxEZXNjPlxuICAgICAgICAgICAgICAgIHtBcnJheShuaWNrbmFtZS5sZW5ndGgqMikuZmlsbCgpLm1hcCh2ID0+IDxzcGFuPiZuYnNwOzwvc3Bhbj4pfVxuICAgICAgICAgICAgICAgIHtkZXNjfVxuICAgICAgICAgICAgPC9EZXNjPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIC8+XG4gICAgICAgIDwvRGVzY0NvbnRhaW5lcj5cbiAgICApO1xufTtcblxuRGVzY0NvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgdXNlcklkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5pY2tuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlc2M6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Description.js\n");

/***/ })

})