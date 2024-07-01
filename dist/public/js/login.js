"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
/**
 * Es funcion para loguear a los usuarios
 */
function loguin() {
  return _loguin.apply(this, arguments);
}
function _loguin() {
  _loguin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var correo, contra, url, urlsupra, options;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          correo = document.getElementById('email').value;
          contra = document.getElementById('contrasena').value;
          url = document.getElementById('url').value;
          sessionStorage.setItem("urlsupra", url);
          urlsupra = sessionStorage.getItem('urlsupra') + "/api/login";
          options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              // se deben poner lo campos tal cual estan en thunder client 
              correo: correo,
              contrasena: contra
            })
          };
          console.log(urlsupra);
          _context.next = 9;
          return fetch(urlsupra, options).then(function (res) {
            return res.json();
          }).then(function (data) {
            if (data.error == true) {
              alertify.error('Algo está errado');
            } else {
              console.log(data.body);
              sessionStorage.setItem("token", data.body.token);
              sessionStorage.setItem("id", data.body.id);
              window.location.href = "./splash";
            }
          })["catch"](function (err) {
            console.log("Tenemos un problema", err);
          });
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _loguin.apply(this, arguments);
}