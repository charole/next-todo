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
exports.id = "pages/api/todos/[id]";
exports.ids = ["pages/api/todos/[id]"];
exports.modules = {

/***/ "./pages/api/todos/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/todos/[id].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === 'PATCH') {\n    try {\n      console.log(req.query);\n      res.statusCode = 200;\n      return res.end();\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      return res.send(e);\n    }\n  }\n\n  res.statusCode = 405;\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsaUVBQWUsT0FBT0EsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDbEUsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsT0FBbkIsRUFBNEI7QUFDMUIsUUFBSTtBQUNGQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBRyxDQUFDSyxLQUFoQjtBQUNBSixNQUFBQSxHQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7QUFDQSxhQUFPTCxHQUFHLENBQUNNLEdBQUosRUFBUDtBQUNELEtBSkQsQ0FJRSxPQUFPQyxDQUFQLEVBQVU7QUFDVkwsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLENBQVo7QUFDQVAsTUFBQUEsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsYUFBT0wsR0FBRyxDQUFDUSxJQUFKLENBQVNELENBQVQsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0RQLEVBQUFBLEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUFqQjtBQUNBLFNBQU9MLEdBQUcsQ0FBQ00sR0FBSixFQUFQO0FBQ0QsQ0FkRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3BhZ2VzL2FwaS90b2Rvcy9baWRdLnRzPzdiOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQQVRDSCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5KTtcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgICAgcmV0dXJuIHJlcy5lbmQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgcmV0dXJuIHJlcy5zZW5kKGUpO1xuICAgIH1cbiAgfVxuICByZXMuc3RhdHVzQ29kZSA9IDQwNTtcbiAgcmV0dXJuIHJlcy5lbmQoKTtcbn07XG4iXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Iiwic3RhdHVzQ29kZSIsImVuZCIsImUiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/todos/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos/[id].ts"));
module.exports = __webpack_exports__;

})();