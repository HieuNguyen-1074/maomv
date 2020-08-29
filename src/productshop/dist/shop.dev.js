"use strict";

var _product = _interopRequireDefault(require("../../product.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cart = JSON.parse(localStorage.getItem('cart'));
var products = new _product["default"]();

function changeWidthElementToNumber(element) {
  var width;
  var styleElement = window.getComputedStyle(element);
  width = parseFloat(styleElement.width.slice(0, styleElement.width.length - 2));
  return width;
}

;

function productStyle(products) {
  var elementNewsProductsMain = document.querySelector('.news-products-main');
  var elementKinhdiProductMainContainerMain = document.querySelector('.kinhdi-products-main');
  var elementNewsProduct = '';
  var elementProductMain = ''; // display Product

  products.forEach(function (product) {
    if (product.infor.year === "2020") {
      elementNewsProduct += " <div class=\"product\">\n            <img src=\"".concat(product.src, "\" alt=\"\" class=\"product-img\">\n            <div class=\"product-content df\">\n                <h1>").concat(product.name, "</h1>\n                <button class=\"product-content-addcart\" data-id =\"").concat(product.id, "\">add to cart\n             </button>\n             <button class=\"product-content-readmore\" data-id=\"").concat(product.id, "\">\n                read more\n            </button>\n            </div>\n\n        </div> ");
    }

    if (product.infor.kinds.indexOf("Phim kinh dị") > -1) {
      elementProductMain += " <div class=\"product\">\n             <img src=\"".concat(product.src, "\" alt=\"\" class=\"product-img\">\n             <div class=\"product-content df\">\n             <p> $").concat(product.price, "/1</p>\n                 <button class=\"product-content-addcart\" data-id =\"").concat(product.id, "\">add to cart\n              </button>\n              <button class=\"product-content-readmore\" data-id=\"").concat(product.id, "\">\n                 read more\n         \n             </button>\n             </div>\n             <h1>").concat(product.name, "</h1>\n            \n         </div> ");
    }
  });
  elementNewsProductsMain.innerHTML = elementNewsProduct; // console.log(elementProductMain)

  elementKinhdiProductMainContainerMain.innerHTML = elementProductMain;
}

function numberPageNewsProductDsiplay(number, elementContainer, product, productMain) {
  // const elementProducts = document.querySelector('.news-products');
  // const elementProductsMain = document.querySelector('.news-products-main'); 
  var widthElementNewsProducts = changeWidthElementToNumber(product);
  var allElementNewsProductImg = productMain.querySelectorAll('.product-img');
  var elementNewProductBtnRight = elementContainer.querySelector(".fa-arrow-right");
  var elementNewProductBtnLeft = elementContainer.querySelector(".fa-arrow-left");
  var count = 1;
  allElementNewsProductImg.forEach(function (img) {
    img.style.width = " ".concat(widthElementNewsProducts / number, "px");
  });
  elementNewProductBtnRight.addEventListener('click', function () {
    var styleTransform = Math.abs(parseFloat(window.getComputedStyle(productMain).transform.split("(")[1].split(',')[4]));
    var x = Math.ceil(allElementNewsProductImg.length / number);

    if (count === x - 1) {
      productMain.style.transform = "translateX(-".concat(styleTransform + (changeWidthElementToNumber(productMain) - widthElementNewsProducts * count), "px)");
      count++;
    } else if (count === x) {
      console.log('ss');
    } //  else if(allElementNewsProductImg.length===8){
    //     console.log('s')
    //  }
    else {
        productMain.style.transform = "translateX(-".concat(styleTransform + widthElementNewsProducts, "px)");
        count++;
      }

    console.log(count);
  });
  elementNewProductBtnLeft.addEventListener('click', function () {
    var styleTransform = Math.abs(parseFloat(window.getComputedStyle(productMain).transform.split("(")[1].split(',')[4]));

    if (count === 1) {} else if (count > 2) {
      productMain.style.transform = "translateX(".concat(widthElementNewsProducts - styleTransform, "px)");
      count--;
    } else {
      console.log('s');
      productMain.style.transform = "translateX(".concat(0, "px)");
    }
  });
}

function pageNewsProductDsiplay() {
  var elementNewsContainer = document.querySelector('.news-container');
  var elementNewsProducts = elementNewsContainer.querySelector('.news-products');
  var elementNewsProductsMain = elementNewsContainer.querySelector('.news-products-main');
  var elementKinhDiContainer = document.querySelector('.kinhdi-container');
  var elementKinhDiProducts = elementKinhDiContainer.querySelector('.kinhdi-products');
  var elementKinhDiProductsMain = elementKinhDiContainer.querySelector('.kinhdi-products-main');
  var widthScreen = document.body.clientWidth;

  if (widthScreen <= 1153 && widthScreen > 870) {
    numberPageNewsProductDsiplay(6, elementNewsContainer, elementNewsProducts, elementNewsProductsMain);
    numberPageNewsProductDsiplay(6, elementKinhDiContainer, elementKinhDiProducts, elementKinhDiProductsMain);
  } else if (widthScreen <= 870 && widthScreen > 723) {
    numberPageNewsProductDsiplay(5, elementNewsContainer, elementNewsProducts, elementNewsProductsMain);
    numberPageNewsProductDsiplay(5, elementKinhDiContainer, elementKinhDiProducts, elementKinhDiProductsMain);
  } else if (widthScreen <= 723 && widthScreen > 584) {
    numberPageNewsProductDsiplay(4, elementNewsContainer, elementNewsProducts, elementNewsProductsMain);
    numberPageNewsProductDsiplay(4, elementKinhDiContainer, elementKinhDiProducts, elementKinhDiProductsMain);
  } else if (widthScreen <= 584 && widthScreen > 438) {
    numberPageNewsProductDsiplay(3, elementNewsContainer, elementNewsProducts, elementNewsProductsMain);
    numberPageNewsProductDsiplay(3, elementKinhDiContainer, elementKinhDiProducts, elementKinhDiProductsMain);
  } else if (widthScreen <= 438 && widthScreen > 305) {
    numberPageNewsProductDsiplay(2, elementNewsContainer, elementNewsProducts, elementNewsProductsMain);
    numberPageNewsProductDsiplay(2, elementKinhDiContainer, elementKinhDiProducts, elementKinhDiProductsMain);
  } else if (widthScreen <= 305) {
    numberPageNewsProductDsiplay(1, elementNewsContainer, elementNewsProducts, elementNewsProductsMain);
    numberPageNewsProductDsiplay(1, elementKinhDiContainer, elementKinhDiProducts, elementKinhDiProductsMain);
  } else {
    numberPageNewsProductDsiplay(8, elementNewsContainer, elementNewsProducts, elementNewsProductsMain);
    numberPageNewsProductDsiplay(8, elementKinhDiContainer, elementKinhDiProducts, elementKinhDiProductsMain);
  }
}

function displayCarts() {
  var carts = JSON.parse(localStorage.getItem('cart'));
  var elementCartsProduct = document.querySelector('.cart-products');
  var elementCartsSum = document.querySelector('.sum');
  var elementSupQuanlityCart = document.getElementById('top-nav-quanlity-cart');
  var sumMoney = 0;
  var quanlity = 0;
  var elementCart = '';
  carts.forEach(function (cart) {
    // quanlity+= cart.quanlity;
    sumMoney += cart.price * cart.quanlity;
    elementCart += "\n                      <div class=\"cart-product df\">\n                        <img src=\"".concat(cart.src, "\" alt=\"\">\n                        <div class=\"cart-product-main\">\n                            <h1>").concat(cart.name, "</h1>\n                            <p>$").concat(cart.price, "</p>\n                            <button data-id=\"").concat(cart.id, "\" class=\"cart-product-btn\"> remove </button>\n                        </div>\n                        <div class=\"cart-product-quanlity\">\n                            <i class=\"fas fa-sort-up\"  title=\"cart-up\" data-id=\"").concat(cart.id, "\"></i>\n                            <p>").concat(cart.quanlity, "</p>\n                            <i class=\"fas fa-sort-down\" title=\"cart-down\" data-id=\"").concat(cart.id, "\"></i>\n                        </div>\n                    </div> ");
  });
  elementCartsProduct.innerHTML = elementCart;

  if (sumMoney === 0) {
    elementCartsSum.innerHTML = "nothing here";
  } else {
    elementCartsSum.innerHTML = "$".concat(sumMoney);
  }

  elementSupQuanlityCart.innerHTML = carts.length;
}

function removeCart(btns) {
  var allBtns = document.querySelector('.cart-products');
  allBtns.addEventListener('click', function (e) {
    var carts = JSON.parse(localStorage.getItem('cart'));
    console.log(e);
    var valueType = e.target.localName;
    var dataId = e.target.dataset.id;

    if (valueType === 'button') {
      carts = carts.filter(function (cart) {
        return cart.id != dataId;
      });
      localStorage.setItem('cart', JSON.stringify(carts));
      displayCarts();
    } // button quanlity


    if (valueType === 'i') {
      var valueTitle = e.target.title;

      if (valueTitle === 'cart-up') {
        carts = carts.map(function (cart) {
          if (cart.id === dataId) {
            var quanlity = cart.quanlity;
            return _objectSpread({}, cart, {
              quanlity: ++quanlity
            });
          } else {
            return cart;
          }
        });
      } else if (valueTitle === 'cart-down') {
        carts = carts.map(function (cart) {
          if (cart.id === dataId) {
            var quanlity = cart.quanlity;
            return _objectSpread({}, cart, {
              quanlity: --quanlity
            });
          } else {
            return cart;
          }
        });
        carts = carts.filter(function (cart) {
          return cart.quanlity != 0;
        });
      }
    }

    localStorage.setItem("cart", JSON.stringify(carts));
    displayCarts();
  });
}

function displayReadMore() {
  var elementInforMoreBtnClose = document.getElementById('close-infor-more');
  var elementInforMore = document.querySelector('.infor-movie-more');
  console.log(elementInforMoreBtnClose);

  elementInforMoreBtnClose.onclick = function () {
    elementInforMore.classList.remove('infor-movie-more-act');
  };
}

function readMore(products) {
  var allReadMoreBtn = document.querySelectorAll('.product-content-readmore');
  var elementInforMoreMain = document.querySelector('.infor-movie-more-main');
  var displayElementInforMore = '';
  allReadMoreBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var dataId = e.target.dataset.id;
      products.forEach(function (product) {
        console.log(product);

        if (product.id === dataId) {
          var elementInforMoreContainer = document.querySelector('.infor-movie-more-container');
          displayElementInforMore = "\n               \n               <h1>".concat(product.name, "</h1>\n               <p class=\"infor-movie-more-main-director\">director : ").concat(product.infor.director, "</p>\n               <p class=\"infor-movie-more-main-year\">years : ").concat(product.infor.year, "</p>\n               <p class=\"infor-movie-more-main-company\">company : ").concat(product.infor.company, "</p>\n               <p class=\"infor-movie-more-main-content\">\n               ").concat(product.infor.content, "\n               </p>");
          elementInforMoreContainer.style.backgoundImage = "url(".concat(product.src, ")");
        }
      });
      elementInforMoreMain.innerHTML = displayElementInforMore;
      var elementInforMore = document.querySelector('.infor-movie-more');
      elementInforMore.classList.add('infor-movie-more-act');
    });
  });
}

function addToCart(products) {
  var carts = JSON.parse(localStorage.getItem('cart'));
  var newCart;
  var allAddToCartBtn = document.querySelectorAll('.product-content-addcart');
  allAddToCartBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var dataIdBtn = e.target.dataset.id;
      newCart = products.filter(function (product) {
        return product.id === dataIdBtn;
      });
      newCart = newCart[0];
      newCart = {
        name: newCart.name,
        id: newCart.id,
        price: parseFloat(newCart.price),
        src: newCart.src,
        quanlity: 1
      };
      var checkIndex = 1;
      carts.forEach(function (cart) {
        if (cart.id === newCart.id) {
          checkIndex++;
        } else {}
      });

      if (checkIndex === 1) {
        carts.push(newCart);
        localStorage.setItem('cart', JSON.stringify(carts));
        displayCarts();
      } else {}
    });
  });
}

function displayElementCart() {
  var elementCartBtnClose = document.getElementById('close-cart');
  var elementCartsBtn = document.querySelector('.fa-shopping-cart');
  var elementCartsContainer = document.querySelector('.cart-container');
  var elementCarts = document.querySelector('.cart');
  elementCartsBtn.addEventListener('click', function () {
    elementCarts.classList.add('cart-act');
  });
  elementCartBtnClose.addEventListener('click', function () {
    elementCarts.classList.remove('cart-act');
  });
}

function displayNavbar() {
  var elementTopNavCenter = document.querySelector('.top-nav-center');
  var elementTopNavCenterBtn = elementTopNavCenter.querySelector('.fa-bars');

  elementTopNavCenterBtn.onclick = function () {
    elementTopNavCenterBtn.classList.toggle('fa-times');
    elementTopNavCenter.classList.toggle('top-nav-center-act');
  };
}

function logOut() {
  var elementBtnLogOut = document.querySelector('.fa-sign-out-alt');

  elementBtnLogOut.onclick = function () {
    Cookies.remove('name');
    window.location.replace("../../src/home/home.html");
  };
}

function main() {
  if (!Cookies.get('name')) {
    window.location.replace("../../src/home/home.html");
  } else {
    products.getProducts().then(function (data) {
      var products = data.products;
      productStyle(products);
      pageNewsProductDsiplay();
      localStorage.setItem('cart', '[]');
      addToCart(products);
      displayCarts();
      displayElementCart();
      removeCart();
      readMore(products);

      window.onresize = function () {
        pageNewsProductDsiplay();
      };
    });
    displayReadMore();
    displayNavbar();
    logOut();
  }
}

main();