"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Setting_Setting_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SiteSettings',
  data: function data() {
    return {
      loading: true,
      updating: false,
      successMessage: '',
      errorMessage: '',
      footerAddress: '',
      privacyPolicyEditor: null,
      termsConditionsEditor: null,
      settings: {}
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.loadQuillEditor();
          case 1:
            _context.n = 2;
            return _this.fetchSettings();
          case 2:
            _this.initializeEditors();
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    loadQuillEditor: function loadQuillEditor() {
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var link;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              // Load Quill CSS
              link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.snow.min.css';
              document.head.appendChild(link);

              // Load Quill JS
              return _context2.a(2, new Promise(function (resolve) {
                var script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.min.js';
                script.onload = resolve;
                document.head.appendChild(script);
              }));
          }
        }, _callee2);
      }))();
    },
    initializeEditors: function initializeEditors() {
      // Initialize Privacy Policy Editor
      this.privacyPolicyEditor = new Quill('#privacy-policy-editor', {
        theme: 'snow',
        modules: {
          toolbar: [[{
            'header': [1, 2, 3, 4, 5, 6, false]
          }], ['bold', 'italic', 'underline', 'strike'], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }], [{
            'indent': '-1'
          }, {
            'indent': '+1'
          }], ['link', 'blockquote'], [{
            'align': []
          }], ['clean']]
        }
      });

      // Initialize Terms & Conditions Editor
      this.termsConditionsEditor = new Quill('#terms-conditions-editor', {
        theme: 'snow',
        modules: {
          toolbar: [[{
            'header': [1, 2, 3, 4, 5, 6, false]
          }], ['bold', 'italic', 'underline', 'strike'], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }], [{
            'indent': '-1'
          }, {
            'indent': '+1'
          }], ['link', 'blockquote'], [{
            'align': []
          }], ['clean']]
        }
      });

      // Set initial content
      if (this.settings.privacy_policy) {
        this.privacyPolicyEditor.root.innerHTML = this.settings.privacy_policy;
      }
      if (this.settings.terms_conditions) {
        this.termsConditionsEditor.root.innerHTML = this.settings.terms_conditions;
      }
    },
    fetchSettings: function fetchSettings() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _t;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/site-settings');
            case 1:
              response = _context3.v;
              _this2.settings = response.data.data;
              _this2.footerAddress = _this2.settings.footer_address || '';
              _this2.loading = false;
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t = _context3.v;
              _this2.errorMessage = 'Failed to load settings';
              _this2.loading = false;
              console.error('Error fetching settings:', _t);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    updatePrivacyPolicy: function updatePrivacyPolicy() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var content, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.p = 0;
              _this3.updating = true;
              _this3.clearMessages();
              content = _this3.privacyPolicyEditor.root.innerHTML;
              _context4.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().put('/site-settings/privacy-policy', {
                privacy_policy: content
              });
            case 1:
              _this3.successMessage = 'Privacy policy updated successfully!';
              setTimeout(function () {
                return _this3.clearMessages();
              }, 3000);
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t2 = _context4.v;
              _this3.errorMessage = 'Failed to update privacy policy';
              console.error('Error updating privacy policy:', _t2);
            case 3:
              _context4.p = 3;
              _this3.updating = false;
              return _context4.f(3);
            case 4:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2, 3, 4]]);
      }))();
    },
    updateTermsConditions: function updateTermsConditions() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var content, _t3;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.p = 0;
              _this4.updating = true;
              _this4.clearMessages();
              content = _this4.termsConditionsEditor.root.innerHTML;
              _context5.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().put('/site-settings/terms-conditions', {
                terms_conditions: content
              });
            case 1:
              _this4.successMessage = 'Terms and conditions updated successfully!';
              setTimeout(function () {
                return _this4.clearMessages();
              }, 3000);
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t3 = _context5.v;
              _this4.errorMessage = 'Failed to update terms and conditions';
              console.error('Error updating terms and conditions:', _t3);
            case 3:
              _context5.p = 3;
              _this4.updating = false;
              return _context5.f(3);
            case 4:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2, 3, 4]]);
      }))();
    },
    updateFooterAddress: function updateFooterAddress() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _t4;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.p = 0;
              _this5.updating = true;
              _this5.clearMessages();
              _context6.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().put('/site-settings/footer-address', {
                footer_address: _this5.footerAddress
              });
            case 1:
              _this5.successMessage = 'Footer address updated successfully!';
              setTimeout(function () {
                return _this5.clearMessages();
              }, 3000);
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t4 = _context6.v;
              _this5.errorMessage = 'Failed to update footer address';
              console.error('Error updating footer address:', _t4);
            case 3:
              _context6.p = 3;
              _this5.updating = false;
              return _context6.f(3);
            case 4:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2, 3, 4]]);
      }))();
    },
    updateAllSettings: function updateAllSettings() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var privacyPolicy, termsConditions, _t5;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.p = 0;
              _this6.updating = true;
              _this6.clearMessages();
              privacyPolicy = _this6.privacyPolicyEditor.root.innerHTML;
              termsConditions = _this6.termsConditionsEditor.root.innerHTML;
              _context7.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().put('/site-settings/all', {
                privacy_policy: privacyPolicy,
                terms_conditions: termsConditions,
                footer_address: _this6.footerAddress
              });
            case 1:
              _this6.successMessage = 'All settings updated successfully!';
              setTimeout(function () {
                return _this6.clearMessages();
              }, 3000);
              _context7.n = 3;
              break;
            case 2:
              _context7.p = 2;
              _t5 = _context7.v;
              _this6.errorMessage = 'Failed to update settings';
              console.error('Error updating all settings:', _t5);
            case 3:
              _context7.p = 3;
              _this6.updating = false;
              return _context7.f(3);
            case 4:
              return _context7.a(2);
          }
        }, _callee7, null, [[0, 2, 3, 4]]);
      }))();
    },
    clearMessages: function clearMessages() {
      this.successMessage = '';
      this.errorMessage = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "site-settings-container"
  }, [_c("div", {
    staticClass: "max-w-4xl mx-auto p-6"
  }, [_c("h1", {
    staticClass: "text-3xl font-bold text-gray-800 mb-8"
  }, [_vm._v("Site Settings")]), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "flex justify-center items-center py-12"
  }, [_c("div", {
    staticClass: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
  })]) : _vm._e(), _vm._v(" "), _vm.successMessage ? _c("div", {
    staticClass: "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
  }, [_vm._v("\n      " + _vm._s(_vm.successMessage) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm.errorMessage ? _c("div", {
    staticClass: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
  }, [_vm._v("\n      " + _vm._s(_vm.errorMessage) + "\n    ")]) : _vm._e(), _vm._v(" "), !_vm.loading ? _c("div", {
    staticClass: "space-y-8"
  }, [_c("div", {
    staticClass: "bg-white rounded-lg shadow-md p-6"
  }, [_c("h2", {
    staticClass: "text-2xl font-semibold text-gray-700 mb-4"
  }, [_vm._v("Privacy Policy")]), _vm._v(" "), _c("div", {
    staticClass: "min-h-[300px] border rounded",
    attrs: {
      id: "privacy-policy-editor"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "mt-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded transition-colors",
    attrs: {
      disabled: _vm.updating
    },
    on: {
      click: _vm.updatePrivacyPolicy
    }
  }, [_vm._v("\n          " + _vm._s(_vm.updating ? "Updating..." : "Update Privacy Policy") + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "bg-white rounded-lg shadow-md p-6"
  }, [_c("h2", {
    staticClass: "text-2xl font-semibold text-gray-700 mb-4"
  }, [_vm._v("Terms and Conditions")]), _vm._v(" "), _c("div", {
    staticClass: "min-h-[300px] border rounded",
    attrs: {
      id: "terms-conditions-editor"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "mt-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-2 rounded transition-colors",
    attrs: {
      disabled: _vm.updating
    },
    on: {
      click: _vm.updateTermsConditions
    }
  }, [_vm._v("\n          " + _vm._s(_vm.updating ? "Updating..." : "Update Terms & Conditions") + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "bg-white rounded-lg shadow-md p-6"
  }, [_c("h2", {
    staticClass: "text-2xl font-semibold text-gray-700 mb-4"
  }, [_vm._v("Footer Address")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.footerAddress,
      expression: "footerAddress"
    }],
    staticClass: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent",
    attrs: {
      rows: "4",
      placeholder: "Enter footer address..."
    },
    domProps: {
      value: _vm.footerAddress
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.footerAddress = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "mt-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-6 py-2 rounded transition-colors",
    attrs: {
      disabled: _vm.updating
    },
    on: {
      click: _vm.updateFooterAddress
    }
  }, [_vm._v("\n          " + _vm._s(_vm.updating ? "Updating..." : "Update Footer Address") + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "bg-gray-800 hover:bg-gray-900 disabled:bg-gray-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors",
    attrs: {
      disabled: _vm.updating
    },
    on: {
      click: _vm.updateAllSettings
    }
  }, [_vm._v("\n          " + _vm._s(_vm.updating ? "Updating All..." : "Update All Settings") + "\n        ")])])]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.site-settings-container[data-v-085e8d56] {\n  background-color: #f7fafc;\n  min-height: 100vh;\n}\n\n/* Custom Quill editor styles */\n[data-v-085e8d56] .ql-editor {\n  min-height: 200px;\n}\n[data-v-085e8d56] .ql-toolbar {\n  border-top: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  border-radius: 8px 8px 0 0;\n}\n[data-v-085e8d56] .ql-container {\n  border-bottom: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  border-radius: 0 0 8px 8px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_style_index_0_id_085e8d56_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_style_index_0_id_085e8d56_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_style_index_0_id_085e8d56_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Setting/Setting.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Setting/Setting.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Setting_vue_vue_type_template_id_085e8d56_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setting.vue?vue&type=template&id=085e8d56&scoped=true */ "./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56&scoped=true");
/* harmony import */ var _Setting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setting.vue?vue&type=script&lang=js */ "./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js");
/* harmony import */ var _Setting_vue_vue_type_style_index_0_id_085e8d56_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css */ "./resources/js/components/Setting/Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Setting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Setting_vue_vue_type_template_id_085e8d56_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Setting_vue_vue_type_template_id_085e8d56_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "085e8d56",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Setting/Setting.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Setting.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Setting/Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Setting/Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_style_index_0_id_085e8d56_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=style&index=0&id=085e8d56&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_085e8d56_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_085e8d56_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_085e8d56_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Setting.vue?vue&type=template&id=085e8d56&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Setting/Setting.vue?vue&type=template&id=085e8d56&scoped=true");


/***/ })

}]);