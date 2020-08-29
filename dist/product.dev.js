"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Product =
/*#__PURE__*/
function () {
  function Product() {
    _classCallCheck(this, Product);

    this.name = "s";
  }

  _createClass(Product, [{
    key: "getProducts",
    value: function getProducts() {
      var product, products;
      return regeneratorRuntime.async(function getProducts$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("../maomv/db.json"));

            case 2:
              product = _context.sent;
              products = product.json();
              return _context.abrupt("return", products);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return Product;
}();

var _default = Product;
exports["default"] = _default;