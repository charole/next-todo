"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/igeonhui/Documents/React/next-todo/components/TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1t8agvw-0\"\n})([\"width:100%;.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray);\n_c = Container;\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n  var getTodoColorNums = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function () {\n    var red = 0;\n    var orange = 0;\n    var yellow = 0;\n    var green = 0;\n    var blue = 0;\n    var navy = 0;\n    todos.forEach(function (todo) {\n      switch (todo.color) {\n        case 'red':\n          red += 1;\n          break;\n\n        case 'orange':\n          orange += 1;\n          break;\n\n        case 'yellow':\n          yellow += 1;\n          break;\n\n        case 'green':\n          green += 1;\n          break;\n\n        case 'blue':\n          blue += 1;\n          break;\n\n        case 'navy':\n          navy += 1;\n          break;\n\n        default:\n          break;\n      }\n    });\n    return {\n      red: red,\n      orange: orange,\n      yellow: yellow,\n      green: green,\n      blue: blue,\n      navy: navy\n    };\n  }, [todos]);\n  var todoColorNums = getTodoColorNums();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 18\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"DS2SRPZRS13+yk+OqZJFVedcwOA=\");\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUcsU0FBUyxHQUFHRix3RUFBSDtBQUFBO0FBQUE7QUFBQSw0SUFLZ0JDLDREQUxoQixDQUFmO0tBQU1DOztBQW9CTixJQUFNRyxRQUEwQixHQUFHLFNBQTdCQSxRQUE2QixPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2hELE1BQU1DLGdCQUFnQixHQUFHUix3REFBQSxDQUFrQixZQUFNO0FBQy9DLFFBQUlVLEdBQUcsR0FBRyxDQUFWO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLENBQWI7QUFDQSxRQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLFFBQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLENBQVg7QUFDQSxRQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUNBUixJQUFBQSxLQUFLLENBQUNTLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdEIsY0FBUUEsSUFBSSxDQUFDQyxLQUFiO0FBQ0UsYUFBSyxLQUFMO0FBQ0VSLFVBQUFBLEdBQUcsSUFBSSxDQUFQO0FBQ0E7O0FBQ0YsYUFBSyxRQUFMO0FBQ0VDLFVBQUFBLE1BQU0sSUFBSSxDQUFWO0FBQ0E7O0FBQ0YsYUFBSyxRQUFMO0FBQ0VDLFVBQUFBLE1BQU0sSUFBSSxDQUFWO0FBQ0E7O0FBQ0YsYUFBSyxPQUFMO0FBQ0VDLFVBQUFBLEtBQUssSUFBSSxDQUFUO0FBQ0E7O0FBQ0YsYUFBSyxNQUFMO0FBQ0VDLFVBQUFBLElBQUksSUFBSSxDQUFSO0FBQ0E7O0FBQ0YsYUFBSyxNQUFMO0FBQ0VDLFVBQUFBLElBQUksSUFBSSxDQUFSO0FBQ0E7O0FBQ0Y7QUFDRTtBQXBCSjtBQXNCRCxLQXZCRDtBQXdCQSxXQUFPO0FBQ0xMLE1BQUFBLEdBQUcsRUFBSEEsR0FESztBQUVMQyxNQUFBQSxNQUFNLEVBQU5BLE1BRks7QUFHTEMsTUFBQUEsTUFBTSxFQUFOQSxNQUhLO0FBSUxDLE1BQUFBLEtBQUssRUFBTEEsS0FKSztBQUtMQyxNQUFBQSxJQUFJLEVBQUpBLElBTEs7QUFNTEMsTUFBQUEsSUFBSSxFQUFKQTtBQU5LLEtBQVA7QUFRRCxHQXZDd0IsRUF1Q3RCLENBQUNSLEtBQUQsQ0F2Q3NCLENBQXpCO0FBeUNBLE1BQU1ZLGFBQWEsR0FBR1gsZ0JBQWdCLEVBQXRDO0FBRUEsc0JBQ0UsOERBQUMsU0FBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQUEscURBQ1M7QUFBQSxxQkFBT0QsS0FBSyxDQUFDYSxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FyREQ7O0dBQU1kOztNQUFBQTtBQXVETiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeD8xYzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL3N0eWxlcy9wYWxldHRlJztcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSAnLi4vdHlwZXMvdG9kbyc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50b2RvLWxpc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG5cbiAgICAudG9kby1saXN0LWxhc3QtdG9kbyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0b2RvczogVG9kb1R5cGVbXTtcbn1cblxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyB0b2RvcyB9KSA9PiB7XG4gIGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbGV0IHJlZCA9IDA7XG4gICAgbGV0IG9yYW5nZSA9IDA7XG4gICAgbGV0IHllbGxvdyA9IDA7XG4gICAgbGV0IGdyZWVuID0gMDtcbiAgICBsZXQgYmx1ZSA9IDA7XG4gICAgbGV0IG5hdnkgPSAwO1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHN3aXRjaCAodG9kby5jb2xvcikge1xuICAgICAgICBjYXNlICdyZWQnOlxuICAgICAgICAgIHJlZCArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvcmFuZ2UnOlxuICAgICAgICAgIG9yYW5nZSArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd5ZWxsb3cnOlxuICAgICAgICAgIHllbGxvdyArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdncmVlbic6XG4gICAgICAgICAgZ3JlZW4gKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYmx1ZSc6XG4gICAgICAgICAgYmx1ZSArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduYXZ5JzpcbiAgICAgICAgICBuYXZ5ICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZCxcbiAgICAgIG9yYW5nZSxcbiAgICAgIHllbGxvdyxcbiAgICAgIGdyZWVuLFxuICAgICAgYmx1ZSxcbiAgICAgIG5hdnksXG4gICAgfTtcbiAgfSwgW3RvZG9zXSk7XG5cbiAgY29uc3QgdG9kb0NvbG9yTnVtcyA9IGdldFRvZG9Db2xvck51bXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXJcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9kby1saXN0LWxhc3QtdG9kb1wiPlxuICAgICAgICAgIOuCqOydgCBUT0RPPHNwYW4+e3RvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJwYWxldHRlIiwiQ29udGFpbmVyIiwiZGl2IiwiZ3JheSIsIlRvZG9MaXN0IiwidG9kb3MiLCJnZXRUb2RvQ29sb3JOdW1zIiwidXNlQ2FsbGJhY2siLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZm9yRWFjaCIsInRvZG8iLCJjb2xvciIsInRvZG9Db2xvck51bXMiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});