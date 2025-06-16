"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Layout_Frontend_Layout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Footer.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Footer.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Footer",
  data: function data() {
    return {
      loading: true,
      footerAddress: null,
      currentYear: new Date().getFullYear()
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.fetchFooterAddress();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    fetchFooterAddress: function fetchFooterAddress() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              try {
                _this2.loading = true;
                _this2.axios.get("/site-settings").then(function (response) {
                  if (response.data.success && response.data.data.footer_address) {
                    _this2.footerAddress = response.data.data.footer_address;
                  } else {
                    _this2.footerAddress = null;
                  }
                })["catch"](function (error) {
                  var _error$response;
                  console.log((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
                });
              } catch (error) {
                console.error('Error fetching footer address:', error);
                // Silently fail and show fallback content
              } finally {
                _this2.loading = false;
              }
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    formatAddress: function formatAddress(address) {
      if (!address) return '';

      // Convert line breaks to <br> tags for display
      return address.replace(/\n/g, '<br>');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./resources/js/components/Layout/Frontend/Header.vue");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./resources/js/components/Layout/Frontend/Footer.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Layout",
  components: {
    Footer: _Footer__WEBPACK_IMPORTED_MODULE_1__["default"],
    Header: _Header__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isVerify: false,
      preloader: false,
      isActive: false,
      name: '',
      email: '',
      MBox: false
    };
  },
  methods: {
    sendMail: function sendMail() {
      var _this = this;
      this.preloader = true;
      this.isActive = true;
      this.axios.get('api/v1/sendVerifyMail').then(function (response) {
        if (response.data.status === true) {
          _this.successNotification(response.data.message);
          _this.preloader = false;
          _this.isActive = false;
        }
      })["catch"](function (error) {
        _this.errorNotification(error.response.data.message);
        _this.preloader = false;
      });
    },
    getUserInfo: function getUserInfo() {
      var _this2 = this;
      this.axios.get("api/v1/get/user/info").then(function (response) {
        var item = response.data.data.original.data;
        _this2.name = item.name;
        _this2.isVerify = false;
        _this2.email = item.email;
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    }
  },
  beforeMount: function beforeMount() {
    this.axios.get('api/v1/auth/check').then(function (response) {})["catch"](function (error) {
      /* if (error.response.data.status === false){
          window.location.href = '/';
      } */
    });
  },
  mounted: function mounted() {
    this.getUserInfo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Footer.vue?vue&type=template&id=350d7dfe":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Footer.vue?vue&type=template&id=350d7dfe ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._m(0), _vm._v(" "), _c("footer", {
    staticClass: "footer"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "footer-section"
  }, [_c("h5", [_vm._v("Contacts us")]), _vm._v(" "), _c("div", {
    staticClass: "contact-info"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("i", {
    staticClass: "bi bi-geo-alt"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.footerAddress))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "footer-bottom"
  }, [_c("div", {
    staticClass: "row align-items-center"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("span", [_vm._v("Copyright © " + _vm._s(_vm.currentYear) + " AspiromTechnologies Pvt Ltd.")])]), _vm._v(" "), _vm._m(6)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal fade popup-modal",
    attrs: {
      id: "popupAdModal",
      tabindex: "-1",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "close-btn",
    attrs: {
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("video", {
    attrs: {
      id: "modalVideo",
      controls: "",
      width: "100%"
    }
  }, [_c("source", {
    attrs: {
      src: "https://olopo.rajasrajeev.com/video2.mp4",
      type: "video/mp4"
    }
  }), _vm._v("\n                Your browser does not support the video tag.\n            ")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-3 col-md-6 mb-4"
  }, [_c("img", {
    staticClass: "footer-logo",
    attrs: {
      src: "/theme/frontend/assets/images/footer/1.png",
      alt: "9lopo"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "app-download-badges"
  }, [_c("a", {
    staticClass: "download-btn",
    attrs: {
      href: "https://mpos-dev.olopo.app/qr",
      target: "_blank"
    }
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/downloadButton/download_button.png",
      alt: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "social-icons"
  }, [_c("a", {
    attrs: {
      href: "https://www.facebook.com/share/16Xivmd1za/"
    }
  }, [_c("i", {
    staticClass: "bi bi-facebook"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "https://www.instagram.com/olopoapp?igsh=MTJ5MDY3N3N0Yml2Zw=="
    }
  }, [_c("i", {
    staticClass: "bi bi-instagram"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "bi bi-twitter"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "bi bi-linkedin"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "https://youtube.com/@olopo-app?feature=shared"
    }
  }, [_c("i", {
    staticClass: "bi bi-youtube"
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "bi bi-whatsapp"
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-2 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "footer-section"
  }, [_c("h5", [_vm._v("Olopo")]), _vm._v(" "), _c("ul", [_c("li", [_c("a", {
    attrs: {
      href: "/"
    }
  }, [_vm._v("Home Page")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("About Us")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "/contact"
    }
  }, [_vm._v("Contact Us")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Blogs")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "/gallery"
    }
  }, [_vm._v("Gallery")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-2 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "footer-section"
  }, [_c("h5", [_vm._v("Product")]), _vm._v(" "), _c("ul", [_c("li", [_c("a", {
    attrs: {
      href: "/"
    }
  }, [_vm._v("User App")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Merchants")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Franchisee")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-2 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "footer-section"
  }, [_c("h5", [_vm._v("Partners")]), _vm._v(" "), _c("ul", [_c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("HDFC Bank")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("PineLabs")])])]), _vm._v(" "), _c("h5", {
    staticClass: "mt-3"
  }, [_vm._v("Trusted By")]), _vm._v(" "), _c("ul", [_c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("AKGSMA")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-2"
  }, [_c("i", {
    staticClass: "bi bi-telephone"
  }), _vm._v(" "), _c("span", [_vm._v("+91 6380 963 702")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6 text-md-end mt-2 mt-md-0"
  }, [_c("span", [_vm._v("All Rights Reserved | ")]), _vm._v(" "), _c("a", {
    attrs: {
      href: "/terms-and-conditions"
    }
  }, [_vm._v("Terms and Conditions")]), _vm._v(" |\n                "), _c("a", {
    attrs: {
      href: "/privacy-policy"
    }
  }, [_vm._v("Privacy Policy")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Header.vue?vue&type=template&id=563fe1f0":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Header.vue?vue&type=template&id=563fe1f0 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("header", [_c("nav", {
    staticClass: "navbar navbar-expand-lg"
  }, [_c("div", {
    staticClass: "container-fluid px-4"
  }, [_c("a", {
    staticClass: "navbar-brand",
    attrs: {
      href: "/"
    }
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/header/header.png",
      alt: "olopo"
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "navbar-toggler",
    attrs: {
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#navbarContent",
      "aria-controls": "navbarContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }
  }, [_c("span", {
    staticClass: "navbar-toggler-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "collapse navbar-collapse",
    attrs: {
      id: "navbarContent"
    }
  }, [_c("div", {
    staticClass: "nav-links mx-auto"
  }, [_c("a", {
    staticClass: "active",
    attrs: {
      href: "/"
    }
  }, [_vm._v("User")]), _vm._v(" "), _c("a", {
    staticClass: "disabled",
    attrs: {
      href: "#merchants",
      onclick: "return false;"
    }
  }, [_vm._v("Merchants")]), _vm._v(" "), _c("a", {
    staticClass: "disabled",
    attrs: {
      href: "#franchisees",
      onclick: "return false;"
    }
  }, [_vm._v("Franchisees")])]), _vm._v(" "), _c("div", {
    staticClass: "ms-auto"
  }, [_c("a", {
    staticClass: "download-btn",
    attrs: {
      href: "https://mpos-dev.olopo.app/qr",
      target: "_blank"
    }
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/downloadButton/download_button.png",
      alt: ""
    }
  })])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=template&id=168337e6&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=template&id=168337e6&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("Header"), _vm._v(" "), _c("div", {
    staticClass: "main-content",
    attrs: {
      id: "panel"
    }
  }, [_c("router-view")], 1), _vm._v(" "), _c("Footer")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade[data-v-168337e6] {\n     transition: opacity .15s linear;\n}\n.alert-dismissible[data-v-168337e6] {\n    padding-right: 3.85rem;\n}\n.alert[data-v-168337e6] {\n    position: relative;\n    padding: 0.75rem 1.25rem;\n    margin-bottom: unset;\n    border: unset;\n    border-radius: unset;\n    margin-left: 250px !important;\n}\n@media (max-width: 1199.98px){\n.alert[data-v-168337e6] {\n         margin-left: 0px !important;\n}\n}\n.spinner-border[data-v-168337e6] {\n     width: 1rem;\n     height: 1rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_168337e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_168337e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_168337e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Layout/Frontend/Footer.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Layout/Frontend/Footer.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_350d7dfe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=350d7dfe */ "./resources/js/components/Layout/Frontend/Footer.vue?vue&type=template&id=350d7dfe");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js */ "./resources/js/components/Layout/Frontend/Footer.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_350d7dfe__WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_350d7dfe__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Layout/Frontend/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/Frontend/Footer.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Layout/Frontend/Footer.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Footer.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/Frontend/Footer.vue?vue&type=template&id=350d7dfe":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Layout/Frontend/Footer.vue?vue&type=template&id=350d7dfe ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_350d7dfe__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_350d7dfe__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_350d7dfe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=350d7dfe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Footer.vue?vue&type=template&id=350d7dfe");


/***/ }),

/***/ "./resources/js/components/Layout/Frontend/Header.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Layout/Frontend/Header.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_563fe1f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=563fe1f0 */ "./resources/js/components/Layout/Frontend/Header.vue?vue&type=template&id=563fe1f0");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Header_vue_vue_type_template_id_563fe1f0__WEBPACK_IMPORTED_MODULE_0__.render,
  _Header_vue_vue_type_template_id_563fe1f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Layout/Frontend/Header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/Frontend/Header.vue?vue&type=template&id=563fe1f0":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Layout/Frontend/Header.vue?vue&type=template&id=563fe1f0 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_563fe1f0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_563fe1f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_563fe1f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=template&id=563fe1f0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Header.vue?vue&type=template&id=563fe1f0");


/***/ }),

/***/ "./resources/js/components/Layout/Frontend/Layout.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Layout/Frontend/Layout.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_168337e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=168337e6&scoped=true */ "./resources/js/components/Layout/Frontend/Layout.vue?vue&type=template&id=168337e6&scoped=true");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js */ "./resources/js/components/Layout/Frontend/Layout.vue?vue&type=script&lang=js");
/* harmony import */ var _Layout_vue_vue_type_style_index_0_id_168337e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css */ "./resources/js/components/Layout/Frontend/Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_168337e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Layout_vue_vue_type_template_id_168337e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "168337e6",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Layout/Frontend/Layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/Frontend/Layout.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Layout/Frontend/Layout.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/Frontend/Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Layout/Frontend/Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_168337e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=style&index=0&id=168337e6&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Layout/Frontend/Layout.vue?vue&type=template&id=168337e6&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Layout/Frontend/Layout.vue?vue&type=template&id=168337e6&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_168337e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_168337e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_168337e6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=template&id=168337e6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layout/Frontend/Layout.vue?vue&type=template&id=168337e6&scoped=true");


/***/ })

}]);