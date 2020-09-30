webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Description.js":
/*!***********************************!*\
  !*** ./components/Description.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NickNameLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NickNameLink */ \"./components/NickNameLink.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/Insta-Clone/components/Description.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar DescContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Description__DescContainer\",\n  componentId: \"sc-1u5xzje-0\"\n})([\"padding:0 15px;position:relative;\"]);\n_c = DescContainer;\nvar Name = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Description__Name\",\n  componentId: \"sc-1u5xzje-1\"\n})([\"position:absolute;top:0;left:15px;\"]);\n_c2 = Name;\n\nvar Description = function Description(_ref) {\n  var userId = _ref.userId,\n      nickname = _ref.nickname,\n      desc = _ref.desc;\n  return __jsx(DescContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(Name, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(_NickNameLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    userId: userId,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, nickname)), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, Array(parseInt(nickname.length * 1.5)).fill().map(function (v) {\n    return __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 71\n      }\n    }, \"\\xA0\");\n  }), desc));\n};\n\n_c3 = Description;\nDescContainer.propTypes = {\n  userId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  nickname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  desc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"DescContainer\");\n$RefreshReg$(_c2, \"Name\");\n$RefreshReg$(_c3, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNjcmlwdGlvbi5qcz85MzM4Il0sIm5hbWVzIjpbIkRlc2NDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJOYW1lIiwiRGVzY3JpcHRpb24iLCJ1c2VySWQiLCJuaWNrbmFtZSIsImRlc2MiLCJBcnJheSIsInBhcnNlSW50IiwibGVuZ3RoIiwiZmlsbCIsIm1hcCIsInYiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUNBQW5CO0tBQU1GLGE7QUFLTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMENBQVY7TUFBTUMsSTs7QUFNTixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFnQztBQUFBLE1BQTdCQyxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2hELFNBQ0ksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQ7QUFBYyxVQUFNLEVBQUVGLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JDLFFBQS9CLENBREosQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0UsS0FBSyxDQUFDQyxRQUFRLENBQUNILFFBQVEsQ0FBQ0ksTUFBVCxHQUFnQixHQUFqQixDQUFULENBQUwsQ0FBcUNDLElBQXJDLEdBQTRDQyxHQUE1QyxDQUFnRCxVQUFBQyxDQUFDO0FBQUEsV0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUo7QUFBQSxHQUFqRCxDQURMLEVBRUtOLElBRkwsQ0FKSixDQURKO0FBV0gsQ0FaRDs7TUFBTUgsVztBQWNOSixhQUFhLENBQUNjLFNBQWQsR0FBMEI7QUFDdEJULFFBQU0sRUFBRVUsaURBQVMsQ0FBQ0MsTUFESTtBQUV0QlYsVUFBUSxFQUFFUyxpREFBUyxDQUFDQyxNQUZFO0FBR3RCVCxNQUFJLEVBQUVRLGlEQUFTLENBQUNDO0FBSE0sQ0FBMUI7QUFNZVosMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rlc2NyaXB0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmlja05hbWVMaW5rIGZyb20gJy4vTmlja05hbWVMaW5rJztcblxuY29uc3QgRGVzY0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzowIDE1cHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG5gO1xuXG5jb25zdCBOYW1lID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjE1cHg7XG5gO1xuXG5jb25zdCBEZXNjcmlwdGlvbiA9ICh7IHVzZXJJZCwgbmlja25hbWUsIGRlc2MgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxEZXNjQ29udGFpbmVyPlxuICAgICAgICAgICAgPE5hbWU+XG4gICAgICAgICAgICAgICAgPE5pY2tOYW1lTGluayB1c2VySWQ9e3VzZXJJZH0+e25pY2tuYW1lfTwvTmlja05hbWVMaW5rPlxuICAgICAgICAgICAgPC9OYW1lPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7QXJyYXkocGFyc2VJbnQobmlja25hbWUubGVuZ3RoKjEuNSkpLmZpbGwoKS5tYXAodiA9PiA8c3Bhbj4mbmJzcDs8L3NwYW4+KX1cbiAgICAgICAgICAgICAgICB7ZGVzY31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Rlc2NDb250YWluZXI+XG4gICAgKTtcbn07XG5cbkRlc2NDb250YWluZXIucHJvcFR5cGVzID0ge1xuICAgIHVzZXJJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuaWNrbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXNjOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Description.js\n");

/***/ })

})