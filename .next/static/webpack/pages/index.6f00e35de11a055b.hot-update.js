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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/igeonhui/Documents/React/next-todo/components/TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1t8agvw-0\"\n})([\"width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray);\n_c = Container;\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n  var getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    var red = 0;\n    var orange = 0;\n    var yellow = 0;\n    var green = 0;\n    var blue = 0;\n    var navy = 0;\n    todos.forEach(function (todo) {\n      switch (todo.color) {\n        case 'red':\n          red += 1;\n          break;\n\n        case 'orange':\n          orange += 1;\n          break;\n\n        case 'yellow':\n          yellow += 1;\n          break;\n\n        case 'green':\n          green += 1;\n          break;\n\n        case 'blue':\n          blue += 1;\n          break;\n\n        case 'navy':\n          navy += 1;\n          break;\n\n        default:\n          break;\n      }\n    });\n    return {\n      red: red,\n      orange: orange,\n      yellow: yellow,\n      green: green,\n      blue: blue,\n      navy: navy\n    };\n  }, [todos]);\n  var todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(getTodoColorNums, [todos]);\n  var todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    var colors = {};\n    todos.forEach(function (todo) {\n      var value = colors[todo.color];\n\n      if (!value) {\n        // 존재하지 않던 key 일 경우\n        colors[\"\".concat(todo.color)] = 1;\n      } else {\n        // 존재하는 key 일 경우\n        colors[\"\".concat(todo.color)] = value + 1;\n      }\n    });\n    return colors;\n  }, [todos]);\n  console.log(todoColorNums2);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 18\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 118,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"iqnEAzGAatX6Zg4mYTxeWiVv+fc=\");\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0EzRUQ7O0dBQU1sQjs7TUFBQUE7QUE2RU4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/MWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL3N0eWxlcy9wYWxldHRlJztcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSAnLi4vdHlwZXMvdG9kbyc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50b2RvLW51bSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIH1cblxuICAudG9kby1saXN0LWhlYWRlciB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcblxuICAgIC50b2RvLWxpc3QtbGFzdC10b2RvIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudG9kby1saXN0LWhlYWRlci1jb2xvcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3Ige1xuICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0b2RvczogVG9kb1R5cGVbXTtcbn1cblxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyB0b2RvcyB9KSA9PiB7XG4gIGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbGV0IHJlZCA9IDA7XG4gICAgbGV0IG9yYW5nZSA9IDA7XG4gICAgbGV0IHllbGxvdyA9IDA7XG4gICAgbGV0IGdyZWVuID0gMDtcbiAgICBsZXQgYmx1ZSA9IDA7XG4gICAgbGV0IG5hdnkgPSAwO1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHN3aXRjaCAodG9kby5jb2xvcikge1xuICAgICAgICBjYXNlICdyZWQnOlxuICAgICAgICAgIHJlZCArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvcmFuZ2UnOlxuICAgICAgICAgIG9yYW5nZSArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd5ZWxsb3cnOlxuICAgICAgICAgIHllbGxvdyArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdncmVlbic6XG4gICAgICAgICAgZ3JlZW4gKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYmx1ZSc6XG4gICAgICAgICAgYmx1ZSArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduYXZ5JzpcbiAgICAgICAgICBuYXZ5ICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZCxcbiAgICAgIG9yYW5nZSxcbiAgICAgIHllbGxvdyxcbiAgICAgIGdyZWVuLFxuICAgICAgYmx1ZSxcbiAgICAgIG5hdnksXG4gICAgfTtcbiAgfSwgW3RvZG9zXSk7XG5cbiAgY29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oZ2V0VG9kb0NvbG9yTnVtcywgW3RvZG9zXSk7XG5cbiAgdHlwZSBPYmplY3RJbmRleFR5cGUgPSB7XG4gICAgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICB9O1xuXG4gIGNvbnN0IHRvZG9Db2xvck51bXMyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgY29sb3JzOiBPYmplY3RJbmRleFR5cGUgPSB7fTtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbG9yc1t0b2RvLmNvbG9yXTtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgLy8g7KG07J6s7ZWY7KeAIOyViuuNmCBrZXkg7J28IOqyveyasFxuICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDsobTsnqztlZjripQga2V5IOydvCDqsr3smrBcbiAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSB2YWx1ZSArIDE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29sb3JzO1xuICB9LCBbdG9kb3NdKTtcblxuICBjb25zb2xlLmxvZyh0b2RvQ29sb3JOdW1zMik7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRvZG8tbGlzdC1sYXN0LXRvZG9cIj5cbiAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwic3R5bGVkIiwicGFsZXR0ZSIsIkNvbnRhaW5lciIsImRpdiIsImdyYXkiLCJUb2RvTGlzdCIsInRvZG9zIiwiZ2V0VG9kb0NvbG9yTnVtcyIsInJlZCIsIm9yYW5nZSIsInllbGxvdyIsImdyZWVuIiwiYmx1ZSIsIm5hdnkiLCJmb3JFYWNoIiwidG9kbyIsImNvbG9yIiwidG9kb0NvbG9yTnVtcyIsInRvZG9Db2xvck51bXMyIiwiY29sb3JzIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});