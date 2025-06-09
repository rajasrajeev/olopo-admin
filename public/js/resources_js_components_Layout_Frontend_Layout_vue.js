"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Layout_Frontend_Layout_vue"],{

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
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
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
  }), _vm._v("\n                Your browser does not support the video tag.\n            ")])])])])]), _vm._v(" "), _c("footer", {
    staticClass: "footer"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-6 mb-4"
  }, [_c("img", {
    staticClass: "footer-logo",
    attrs: {
      src: "/theme/frontend/assets/images/footer/1.png",
      alt: "9lopo"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "app-download-badges"
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/footer/2.png",
      alt: "Google Play"
    }
  }), _vm._v(" "), _c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/footer/3.png",
      alt: "App Store"
    }
  })]), _vm._v(" "), _c("div", {
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
  })])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Gallery")])])])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Franchisee")])])])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("AKGSMA")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "footer-section"
  }, [_c("h5", [_vm._v("Contacts us")]), _vm._v(" "), _c("div", {
    staticClass: "contact-info"
  }, [_c("div", {
    staticClass: "mb-2"
  }, [_c("i", {
    staticClass: "bi bi-telephone"
  }), _vm._v(" "), _c("span", [_vm._v("+91 6380 963 702")])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("i", {
    staticClass: "bi bi-geo-alt"
  }), _vm._v(" "), _c("span", [_vm._v("Syama Dynamics, 6th Floor, Vytila, Eranakulam, Kerala, India")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "footer-bottom"
  }, [_c("div", {
    staticClass: "row align-items-center"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("span", [_vm._v("Copyright © 2024 AspiromTechnologies Pvt Ltd.")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 text-md-end mt-2 mt-md-0"
  }, [_c("span", [_vm._v("All Rights Reserved | ")]), _vm._v(" "), _c("a", {
    attrs: {
      href: "/terms-and-conditions"
    }
  }, [_vm._v("Terms and Conditions")]), _vm._v(" |\n                "), _c("a", {
    attrs: {
      href: "/privacy-policy"
    }
  }, [_vm._v("Privacy Policy")])])])])])])]);
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
      src: "theme/frontend/assets/images/downloadButton/download_button.png",
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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
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