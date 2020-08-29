"use strict";

var _user = _interopRequireDefault(require("../../user.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function displayLogin() {
  var elementBtnLogin = document.querySelector('.btn-login');
  var elementClose = document.querySelector('.fa-times');
  var elementContainerLogin = document.querySelector('.login-container');
  var elementTitleH1 = document.querySelector('.title-h1');
  var elementTitleP = document.querySelector('.title-p');
  elementBtnLogin.addEventListener('click', function () {
    elementContainerLogin.classList.add('login-container-act');
    elementTitleH1.classList.add('title-h1-act');
    elementTitleP.classList.add('title-p-act');
    elementBtnLogin.classList.add('btn-login-act');
  });
  elementClose.addEventListener('click', function () {
    elementContainerLogin.classList.remove('login-container-act');
    elementTitleH1.classList.remove('title-h1-act');
    elementTitleP.classList.remove('title-p-act');
    elementBtnLogin.classList.remove('btn-login-act');
  });
}

function checkUsers(users) {
  var elementInputUserName = document.getElementById('login-form-username');
  var elementInputUserPassword = document.getElementById('login-form-password');
  var elementUserAlert = document.querySelector('.login-alert-user');
  var elementPasswordAlert = document.querySelector('.login-alert-password');
  var elementLoginForm = document.querySelector('.login-form');
  elementLoginForm.addEventListener('submit', function (e) {
    var valueUserName = elementInputUserName.value;
    var valueUserPassword = elementInputUserPassword.value;
    var s = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var user = _step.value;
        console.log(user);

        if (user.userName === valueUserName && user.password === valueUserPassword) {
          s.name = user.userName;
          s.password = user.password;
          break;
        } else if (user.userName === valueUserName) {
          s.name = user.userName;
          break;
        } else if (user.password === valueUserPassword) {
          s.password = user.password;
          break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    console.log(s);

    if (!s.password && !s.name) {
      console.log(s);
      elementUserAlert.innerHTML = 'pleass import right';
      elementPasswordAlert.innerHTML = 'pleass import right';
      e.preventDefault();
    } else if (!s.password) {
      elementPasswordAlert.innerHTML = 'pleass import right';
      elementUserAlert.innerHTML = '';
      e.preventDefault();
    } else if (!s.name) {
      elementPasswordAlert.innerHTML = '';
      elementUserAlert.innerHTML = 'pleass import right';
      e.preventDefault();
    } else {
      elementPasswordAlert.innerHTML = '';
      elementUserAlert.innerHTML = '';
      Cookies.set('name', "".concat(s.name));
      elementLoginForm.setAttribute("action", "../productshop/shop.html");
    }
  });
}

function main() {
  var users = new _user["default"]();
  users.getUsers().then(function (data) {
    var users = data.user;
    checkUsers(users);
  });
  displayLogin();
}

main();