"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
/**
 * Esta funcion es para mandar la información de los cortes en la reserva
 * @param {number|string} servicioId
 * @returns {void} - No retorna ningún valor.
 */

var rutaCorte = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(servicioId) {
    var btn_servicio, endpoint, respuesta, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          btn_servicio = "".concat(servicioId);
          endpoint = sessionStorage.getItem('urlsupra') + "/api/corte?id=" + btn_servicio;
          _context.prev = 2;
          _context.next = 5;
          return fetch(endpoint);
        case 5:
          respuesta = _context.sent;
          _context.next = 8;
          return respuesta.json();
        case 8:
          data = _context.sent;
          if (data.body && data.body.length > 0) {
            sessionStorage.setItem('corteData', JSON.stringify(data.body));
            sessionStorage.setItem('id_servicio', JSON.stringify(data.body[0].id_servicio));
            window.location.href = "./reserva-corte";
          } else {
            console.log("No se encontraron los datos");
          }
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          console.log("Tenemos un problema", _context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 12]]);
  }));
  return function rutaCorte(_x) {
    return _ref.apply(this, arguments);
  };
}();