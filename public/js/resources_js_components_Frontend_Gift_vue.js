"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Frontend_Gift_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gift.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gift.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
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
  name: "Gift",
  data: function data() {
    return {
      // API Config from your JS
      baseUrl: "https://gifts.dev.olopo.app",
      authToken: null,
      categoryId: null,
      products: [],
      currentPage: 1,
      productsPerPage: 20,
      hasMoreProducts: true,
      loading: false,
      fallbackImage: "assets/images/brands/new-smartphones-stand-row-showcase-store 1.png"
    };
  },
  computed: {
    isGiftVoucherPage: function isGiftVoucherPage() {
      return this.$route.path.replace(/\/$/, "") === "/gift-vouchers";
    }
  },
  methods: {
    // Authenticate with Gifts API
    authenticate: function authenticate() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return fetch("".concat(_this.baseUrl, "/admin-login"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  userName: "info@olopo.app",
                  password: "olopo@123"
                })
              });
            case 1:
              response = _context.v;
              _context.n = 2;
              return response.json();
            case 2:
              data = _context.v;
              if (!(!response.ok || !data.token)) {
                _context.n = 3;
                break;
              }
              throw new Error("Failed to authenticate with gifts API");
            case 3:
              _this.authToken = data.token;
            case 4:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // Fetch Categories
    fetchCategory: function fetchCategory() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _data$data$;
        var response, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return fetch("".concat(_this2.baseUrl, "/mobile-get/categories"), {
                headers: {
                  Authorization: "Bearer ".concat(_this2.authToken)
                }
              });
            case 1:
              response = _context2.v;
              _context2.n = 2;
              return response.json();
            case 2:
              data = _context2.v;
              if (response.ok) {
                _context2.n = 3;
                break;
              }
              throw new Error("Failed to fetch categories");
            case 3:
              _this2.categoryId = (_data$data$ = data.data[0]) === null || _data$data$ === void 0 ? void 0 : _data$data$.id;
            case 4:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // Fetch Products (Server-side Pagination)
    fetchProducts: function fetchProducts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, data, fetchedProducts, _t;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (_this3.categoryId) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              _this3.loading = true;
              _context3.p = 2;
              _context3.n = 3;
              return fetch("".concat(_this3.baseUrl, "/mobile-get/categories/").concat(_this3.categoryId, "/products?page=").concat(_this3.currentPage, "&limit=").concat(_this3.productsPerPage), {
                headers: {
                  Authorization: "Bearer ".concat(_this3.authToken)
                }
              });
            case 3:
              response = _context3.v;
              _context3.n = 4;
              return response.json();
            case 4:
              data = _context3.v;
              if (response.ok) {
                _context3.n = 5;
                break;
              }
              throw new Error("Failed to fetch products");
            case 5:
              fetchedProducts = data.data.products || []; // If home page → limit to 4 only
              if (!_this3.isGiftVoucherPage) {
                fetchedProducts = fetchedProducts.slice(0, 4);
              }
              _this3.products = fetchedProducts;
              _this3.hasMoreProducts = fetchedProducts.length === _this3.productsPerPage;
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t = _context3.v;
              console.error("Product fetch error:", _t);
            case 7:
              _this3.loading = false;
            case 8:
              return _context3.a(2);
          }
        }, _callee3, null, [[2, 6]]);
      }))();
    },
    nextPage: function nextPage() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (_this4.hasMoreProducts) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _this4.currentPage++;
              _context4.n = 2;
              return _this4.fetchProducts();
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    prevPage: function prevPage() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              if (!(_this5.currentPage === 1)) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              _this5.currentPage--;
              _context5.n = 2;
              return _this5.fetchProducts();
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    initialize: function initialize() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _t2;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return _this6.authenticate();
            case 1:
              _context6.n = 2;
              return _this6.fetchCategory();
            case 2:
              _context6.n = 3;
              return _this6.fetchProducts();
            case 3:
              _context6.n = 5;
              break;
            case 4:
              _context6.p = 4;
              _t2 = _context6.v;
              console.error("Initialization error:", _t2);
            case 5:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 4]]);
      }))();
    }
  },
  watch: {
    "$route.path": function $routePath() {
      this.currentPage = 1;
      this.fetchProducts();
    }
  },
  mounted: function mounted() {
    this.initialize();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gift.vue?vue&type=template&id=7d325852":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gift.vue?vue&type=template&id=7d325852 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-grid card-grid-gift-"
  }, _vm._l(_vm.products, function (product) {
    var _product$images;
    return _c("div", {
      key: product._id,
      staticClass: "brand-card"
    }, [_c("div", {
      staticClass: "image-wrapper"
    }, [_c("img", {
      attrs: {
        src: ((_product$images = product.images) === null || _product$images === void 0 ? void 0 : _product$images.mobile) || _vm.fallbackImage,
        alt: product.name
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "brand-info"
    }, [_c("h4", [_vm._v(_vm._s(product.name))]), _vm._v(" "), _c("p", [_vm._v("SKU: " + _vm._s(product.sku))])])]);
  }), 0), _vm._v(" "), _vm.isGiftVoucherPage ? _c("div", {
    staticClass: "pagination-controls text-center mt-4"
  }, [_c("button", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      disabled: _vm.currentPage === 1 || _vm.loading
    },
    on: {
      click: _vm.prevPage
    }
  }, [_vm._v("\n      Previous\n    ")]), _vm._v(" "), _c("span", {
    staticClass: "mx-3"
  }, [_vm._v("\n      Page " + _vm._s(_vm.currentPage) + "\n    ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      disabled: !_vm.hasMoreProducts || _vm.loading
    },
    on: {
      click: _vm.nextPage
    }
  }, [_vm._v("\n      Next\n    ")])]) : _vm._e(), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "text-center mt-3"
  }, [_vm._v("\n    Loading...\n  ")]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section-header"
  }, [_c("h2", {
    staticClass: "section-title"
  }, [_vm._v("Gift Vouchers")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Frontend/Gift.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Frontend/Gift.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gift_vue_vue_type_template_id_7d325852__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gift.vue?vue&type=template&id=7d325852 */ "./resources/js/components/Frontend/Gift.vue?vue&type=template&id=7d325852");
/* harmony import */ var _Gift_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gift.vue?vue&type=script&lang=js */ "./resources/js/components/Frontend/Gift.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Gift_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gift_vue_vue_type_template_id_7d325852__WEBPACK_IMPORTED_MODULE_0__.render,
  _Gift_vue_vue_type_template_id_7d325852__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Frontend/Gift.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/Gift.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Frontend/Gift.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gift.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gift.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/Gift.vue?vue&type=template&id=7d325852":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Frontend/Gift.vue?vue&type=template&id=7d325852 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_template_id_7d325852__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_template_id_7d325852__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_template_id_7d325852__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gift.vue?vue&type=template&id=7d325852 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gift.vue?vue&type=template&id=7d325852");


/***/ })

}]);