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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/igeonhui/Documents/React/next-todo/components/TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1t8agvw-0\"\n})([\"width:100%;.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray);\n_c = Container;\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n  var getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    var red = 0;\n    var orange = 0;\n    var yellow = 0;\n    var green = 0;\n    var blue = 0;\n    var navy = 0;\n    todos.forEach(function (todo) {\n      switch (todo.color) {\n        case 'red':\n          red += 1;\n          break;\n\n        case 'orange':\n          orange += 1;\n          break;\n\n        case 'yellow':\n          yellow += 1;\n          break;\n\n        case 'green':\n          green += 1;\n          break;\n\n        case 'blue':\n          blue += 1;\n          break;\n\n        case 'navy':\n          navy += 1;\n          break;\n\n        default:\n          break;\n      }\n    });\n    return {\n      red: red,\n      orange: orange,\n      yellow: yellow,\n      green: green,\n      blue: blue,\n      navy: navy\n    };\n  }, [todos]);\n  var todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(getTodoColorNums, [todos]);\n  var todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    var colors = {};\n    todos.forEach(function (todo) {\n      var value = colors[todo.color];\n\n      if (!value) {\n        colors[\"\".concat(todo.color)] = 1;\n      } else {}\n    });\n  }, [todos]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 18\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"iqnEAzGAatX6Zg4mYTxeWiVv+fc=\");\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9zdHlsZXMvcGFsZXR0ZSc7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL3RvZG8nO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcblxuICAudG9kby1saXN0LWhlYWRlciB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xuXG4gICAgLnRvZG8tbGlzdC1sYXN0LXRvZG8ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdG9kb3M6IFRvZG9UeXBlW107XG59XG5cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9kb3MgfSkgPT4ge1xuICBjb25zdCBnZXRUb2RvQ29sb3JOdW1zID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGxldCByZWQgPSAwO1xuICAgIGxldCBvcmFuZ2UgPSAwO1xuICAgIGxldCB5ZWxsb3cgPSAwO1xuICAgIGxldCBncmVlbiA9IDA7XG4gICAgbGV0IGJsdWUgPSAwO1xuICAgIGxldCBuYXZ5ID0gMDtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBzd2l0Y2ggKHRvZG8uY29sb3IpIHtcbiAgICAgICAgY2FzZSAncmVkJzpcbiAgICAgICAgICByZWQgKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb3JhbmdlJzpcbiAgICAgICAgICBvcmFuZ2UgKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneWVsbG93JzpcbiAgICAgICAgICB5ZWxsb3cgKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgICAgIGdyZWVuICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2JsdWUnOlxuICAgICAgICAgIGJsdWUgKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbmF2eSc6XG4gICAgICAgICAgbmF2eSArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICByZWQsXG4gICAgICBvcmFuZ2UsXG4gICAgICB5ZWxsb3csXG4gICAgICBncmVlbixcbiAgICAgIGJsdWUsXG4gICAgICBuYXZ5LFxuICAgIH07XG4gIH0sIFt0b2Rvc10pO1xuXG4gIGNvbnN0IHRvZG9Db2xvck51bXMgPSB1c2VNZW1vKGdldFRvZG9Db2xvck51bXMsIFt0b2Rvc10pO1xuXG4gIHR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xuICAgIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgfTtcblxuICBjb25zdCB0b2RvQ29sb3JOdW1zMiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNvbG9yczogT2JqZWN0SW5kZXhUeXBlID0ge307XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBjb2xvcnNbdG9kby5jb2xvcl07XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFt0b2Rvc10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtbGFzdC10b2RvXCI+XG4gICAgICAgICAg64Ko7J2AIFRPRE88c3Bhbj57dG9kb3MubGVuZ3RofeqwnDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInN0eWxlZCIsInBhbGV0dGUiLCJDb250YWluZXIiLCJkaXYiLCJncmF5IiwiVG9kb0xpc3QiLCJ0b2RvcyIsImdldFRvZG9Db2xvck51bXMiLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZm9yRWFjaCIsInRvZG8iLCJjb2xvciIsInRvZG9Db2xvck51bXMiLCJ0b2RvQ29sb3JOdW1zMiIsImNvbG9ycyIsInZhbHVlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});