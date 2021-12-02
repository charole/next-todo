"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "./pages/api/todos.ts":
/*!****************************!*\
  !*** ./pages/api/todos.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  if (req.method === 'GET') {\n    try {\n      /* readFile, Promise 사용 시\n      const todos = new Promise<TodoType[]>((resolve, reject) => {\n        fs.readFile('data/todos.json', (err, data) => {\n          if (err) {\n            return reject(err.message);\n          }\n          const todoData = data.toString();\n          if (!todoData) {\n            return resolve([]);\n          }\n          const todos = JSON.parse(data.toString());\n          return resolve(todos);\n        });\n      });\n      */\n      const todoBuffer = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync('data/todos.json');\n      const todoString = todoBuffer.toString();\n\n      if (!todoString) {\n        res.statusCode = 200;\n        return res.send([]);\n      }\n\n      const todos = JSON.parse(todoString);\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      return res.send(e);\n    }\n  }\n\n  res.statusCode = 405;\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFHQSxpRUFBZSxDQUFDQyxHQUFELEVBQXNCQyxHQUF0QixLQUErQztBQUM1RCxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUN4QixRQUFJO0FBQ0Y7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ00sWUFBTUMsVUFBVSxHQUFHSixzREFBQSxDQUFnQixpQkFBaEIsQ0FBbkI7QUFDQSxZQUFNTSxVQUFVLEdBQUdGLFVBQVUsQ0FBQ0csUUFBWCxFQUFuQjs7QUFDQSxVQUFJLENBQUNELFVBQUwsRUFBaUI7QUFDZkosUUFBQUEsR0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsZUFBT04sR0FBRyxDQUFDTyxJQUFKLENBQVMsRUFBVCxDQUFQO0FBQ0Q7O0FBQ0QsWUFBTUMsS0FBaUIsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLFVBQVgsQ0FBMUI7QUFDQUosTUFBQUEsR0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsYUFBT04sR0FBRyxDQUFDTyxJQUFKLENBQVNDLEtBQVQsQ0FBUDtBQUNELEtBekJELENBeUJFLE9BQU9HLENBQVAsRUFBVTtBQUNWQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBWCxNQUFBQSxHQUFHLENBQUNNLFVBQUosR0FBaUIsR0FBakI7QUFDQSxhQUFPTixHQUFHLENBQUNPLElBQUosQ0FBU0ksQ0FBVCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRFgsRUFBQUEsR0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsU0FBT04sR0FBRyxDQUFDYyxHQUFKLEVBQVA7QUFDRCxDQXBDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3BhZ2VzL2FwaS90b2Rvcy50cz9kYjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXNwb25zZSwgTmV4dEFwaVJlcXVlc3QgfSBmcm9tICduZXh0JztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3RvZG8nO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8qIHJlYWRGaWxlLCBQcm9taXNlIOyCrOyaqSDsi5xcbiAgICAgIGNvbnN0IHRvZG9zID0gbmV3IFByb21pc2U8VG9kb1R5cGVbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmcy5yZWFkRmlsZSgnZGF0YS90b2Rvcy5qc29uJywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB0b2RvRGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICBpZiAoIXRvZG9EYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShkYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRvZG9zKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgICovXG4gICAgICBjb25zdCB0b2RvQnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKCdkYXRhL3RvZG9zLmpzb24nKTtcbiAgICAgIGNvbnN0IHRvZG9TdHJpbmcgPSB0b2RvQnVmZmVyLnRvU3RyaW5nKCk7XG4gICAgICBpZiAoIXRvZG9TdHJpbmcpIHtcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICAgIHJldHVybiByZXMuc2VuZChbXSk7XG4gICAgICB9XG4gICAgICBjb25zdCB0b2RvczogVG9kb1R5cGVbXSA9IEpTT04ucGFyc2UodG9kb1N0cmluZyk7XG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgIHJldHVybiByZXMuc2VuZCh0b2Rvcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgIHJldHVybiByZXMuc2VuZChlKTtcbiAgICB9XG4gIH1cblxuICByZXMuc3RhdHVzQ29kZSA9IDQwNTtcbiAgcmV0dXJuIHJlcy5lbmQoKTtcbn07XG4iXSwibmFtZXMiOlsiZnMiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2RvQnVmZmVyIiwicmVhZEZpbGVTeW5jIiwidG9kb1N0cmluZyIsInRvU3RyaW5nIiwic3RhdHVzQ29kZSIsInNlbmQiLCJ0b2RvcyIsIkpTT04iLCJwYXJzZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/todos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos.ts"));
module.exports = __webpack_exports__;

})();