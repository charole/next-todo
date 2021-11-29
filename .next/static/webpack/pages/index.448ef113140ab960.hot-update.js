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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/igeonhui/Documents/React/next-todo/components/TodoList.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1t8agvw-0\"\n})([\"width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-yellow{background-color:\", \";}.bg-green{background-color:\", \";}.bg-red{background-color:\", \";}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].red);\n_c = Container;\nvar getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n  var red = 0;\n  var orange = 0;\n  var yellow = 0;\n  var green = 0;\n  var blue = 0;\n  var navy = 0;\n  todos.forEach(function (todo) {\n    switch (todo.color) {\n      case 'red':\n        red += 1;\n        break;\n\n      case 'orange':\n        orange += 1;\n        break;\n\n      case 'yellow':\n        yellow += 1;\n        break;\n\n      case 'green':\n        green += 1;\n        break;\n\n      case 'blue':\n        blue += 1;\n        break;\n\n      case 'navy':\n        navy += 1;\n        break;\n\n      default:\n        break;\n    }\n  });\n  return {\n    red: red,\n    orange: orange,\n    yellow: yellow,\n    green: green,\n    blue: blue,\n    navy: navy\n  };\n}, [todos]);\nvar todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(getTodoColorNums, [todos]);\nvar todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n  var colors = {};\n  todos.forEach(function (todo) {\n    var value = colors[todo.color];\n\n    if (!value) {\n      // 존재하지 않던 key 일 경우\n      colors[\"\".concat(todo.color)] = 1;\n    } else {\n      // 존재하는 key 일 경우\n      colors[\"\".concat(todo.color)] = value + 1;\n    }\n  });\n  return colors;\n}, [todos]);\nconsole.log(todoColorNums2);\n\nvar TodoList = function TodoList(_ref) {\n  var todos = _ref.todos;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 18\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 137,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBLGlCQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQVhEOztNQUFNRDtBQWFOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4PzFjOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9zdHlsZXMvcGFsZXR0ZSc7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL3RvZG8nO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcblxuICAudG9kby1udW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9XG5cbiAgLnRvZG8tbGlzdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG5cbiAgICAudG9kby1saXN0LWxhc3QtdG9kbyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3JzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIHtcbiAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5iZy1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYmx1ZX07XG4gIH1cbiAgLmJnLW5hdnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5uYXZ5fTtcbiAgfVxuICAuYmctb3JhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcbiAgfVxuICAuYmcteWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcbiAgfVxuICAuYmctZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmVlbn07XG4gIH1cbiAgLmJnLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0b2RvczogVG9kb1R5cGVbXTtcbn1cblxuY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgbGV0IHJlZCA9IDA7XG4gIGxldCBvcmFuZ2UgPSAwO1xuICBsZXQgeWVsbG93ID0gMDtcbiAgbGV0IGdyZWVuID0gMDtcbiAgbGV0IGJsdWUgPSAwO1xuICBsZXQgbmF2eSA9IDA7XG4gIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBzd2l0Y2ggKHRvZG8uY29sb3IpIHtcbiAgICAgIGNhc2UgJ3JlZCc6XG4gICAgICAgIHJlZCArPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29yYW5nZSc6XG4gICAgICAgIG9yYW5nZSArPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3llbGxvdyc6XG4gICAgICAgIHllbGxvdyArPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2dyZWVuJzpcbiAgICAgICAgZ3JlZW4gKz0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdibHVlJzpcbiAgICAgICAgYmx1ZSArPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25hdnknOlxuICAgICAgICBuYXZ5ICs9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICByZWQsXG4gICAgb3JhbmdlLFxuICAgIHllbGxvdyxcbiAgICBncmVlbixcbiAgICBibHVlLFxuICAgIG5hdnksXG4gIH07XG59LCBbdG9kb3NdKTtcblxuY29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oZ2V0VG9kb0NvbG9yTnVtcywgW3RvZG9zXSk7XG5cbnR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xuICBba2V5OiBzdHJpbmddOiBudW1iZXIgfCB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCB0b2RvQ29sb3JOdW1zMiA9IHVzZU1lbW8oKCkgPT4ge1xuICBjb25zdCBjb2xvcnM6IE9iamVjdEluZGV4VHlwZSA9IHt9O1xuICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBjb2xvcnNbdG9kby5jb2xvcl07XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgLy8g7KG07J6s7ZWY7KeAIOyViuuNmCBrZXkg7J28IOqyveyasFxuICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDsobTsnqztlZjripQga2V5IOydvCDqsr3smrBcbiAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gdmFsdWUgKyAxO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbG9ycztcbn0sIFt0b2Rvc10pO1xuXG5jb25zb2xlLmxvZyh0b2RvQ29sb3JOdW1zMik7XG5cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9kb3MgfSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtbGFzdC10b2RvXCI+XG4gICAgICAgICAg64Ko7J2AIFRPRE88c3Bhbj57dG9kb3MubGVuZ3RofeqwnDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInN0eWxlZCIsInBhbGV0dGUiLCJDb250YWluZXIiLCJkaXYiLCJncmF5IiwiYmx1ZSIsIm5hdnkiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsInJlZCIsImdldFRvZG9Db2xvck51bXMiLCJ0b2RvcyIsImZvckVhY2giLCJ0b2RvIiwiY29sb3IiLCJ0b2RvQ29sb3JOdW1zIiwidG9kb0NvbG9yTnVtczIiLCJjb2xvcnMiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJUb2RvTGlzdCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});