"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
_app["default"].listen(_app["default"].get("port"), function () {
  console.log(_app["default"].get("mensajeconsola") + _app["default"].get("port"));
});