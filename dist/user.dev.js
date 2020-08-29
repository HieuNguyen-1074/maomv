"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);

    this.name = "s";
  }

  _createClass(User, [{
    key: "getUsers",
    value: function getUsers() {
      var user, users;
      return regeneratorRuntime.async(function getUsers$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch('./db.json'));

            case 2:
              user = _context.sent;
              users = user.json();
              return _context.abrupt("return", users);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return User;
}();

var _default = User;
exports["default"] = _default;