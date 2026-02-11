"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Frontend_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FrontendIndex",
  data: function data() {
    return {
      categories: []
    };
  },
  mounted: function mounted() {
    this.getCategories();
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;
      this.axios.get("/api/v1/categories").then(function (response) {
        _this.categories = response.data.data;
      })["catch"](function (error) {
        var _error$response;
        console.log((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=template&id=4cd741c0":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=template&id=4cd741c0 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._m(0), _vm._v(" "), _c("section", {
    staticClass: "category-section"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "category-row"
  }, _vm._l(_vm.categories, function (category) {
    return _c("div", {
      key: category.id,
      staticClass: "category-item"
    }, [_c("a", {
      staticClass: "category-link",
      attrs: {
        href: "/categories/".concat(category.id)
      }
    }, [_c("img", {
      staticClass: "category-icon",
      attrs: {
        src: "/storage/".concat(category.icon),
        alt: category.title
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "category-button filled"
    }, [_vm._v(_vm._s(category.title))])])]);
  }), 0)])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "bg-white pb-5 position-relative"
  }, [_c("div", {
    staticClass: "carousel slide",
    attrs: {
      id: "olopoCarousel",
      "data-bs-ride": "carousel"
    }
  }, [_c("div", {
    staticClass: "carousel-indicators"
  }, [_c("button", {
    staticClass: "active",
    attrs: {
      type: "button",
      "data-bs-target": "#olopoCarousel",
      "data-bs-slide-to": "0",
      "aria-current": "true",
      "aria-label": "Slide 1"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "active",
    attrs: {
      type: "button",
      "data-bs-target": "#olopoCarousel",
      "data-bs-slide-to": "1",
      "aria-current": "true",
      "aria-label": "Slide 2"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "active",
    attrs: {
      type: "button",
      "data-bs-target": "#olopoCarousel",
      "data-bs-slide-to": "2",
      "aria-current": "true",
      "aria-label": "Slide 3"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "active",
    attrs: {
      type: "button",
      "data-bs-target": "#olopoCarousel",
      "data-bs-slide-to": "3",
      "aria-current": "true",
      "aria-label": "Slide 4"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "active",
    attrs: {
      type: "button",
      "data-bs-target": "#olopoCarousel",
      "data-bs-slide-to": "4",
      "aria-current": "true",
      "aria-label": "Slide 5"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "active",
    attrs: {
      type: "button",
      "data-bs-target": "#olopoCarousel",
      "data-bs-slide-to": "5",
      "aria-current": "true",
      "aria-label": "Slide 6"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "active",
    attrs: {
      type: "button",
      "data-bs-target": "#olopoCarousel",
      "data-bs-slide-to": "6",
      "aria-current": "true",
      "aria-label": "Slide 7"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "active",
    attrs: {
      type: "button",
      "data-bs-target": "#olopoCarousel",
      "data-bs-slide-to": "7",
      "aria-current": "true",
      "aria-label": "Slide 8"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-inner"
  }, [_c("div", {
    staticClass: "carousel-item active"
  }, [_c("img", {
    staticClass: "d-block w-100",
    attrs: {
      src: "/theme/frontend/assets/images/banner/1.jpg",
      alt: "Olopo Banner"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("img", {
    staticClass: "d-block w-100",
    attrs: {
      src: "/theme/frontend/assets/images/banner/2.jpg",
      alt: "Olopo Banner"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("img", {
    staticClass: "d-block w-100",
    attrs: {
      src: "/theme/frontend/assets/images/banner/3.jpg",
      alt: "Olopo Banner"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("img", {
    staticClass: "d-block w-100",
    attrs: {
      src: "/theme/frontend/assets/images/banner/4.jpg",
      alt: "Olopo Banner"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("img", {
    staticClass: "d-block w-100",
    attrs: {
      src: "/theme/frontend/assets/images/banner/5.jpg",
      alt: "Olopo Banner"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("img", {
    staticClass: "d-block w-100",
    attrs: {
      src: "/theme/frontend/assets/images/banner/6.jpg",
      alt: "Olopo Banner"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("img", {
    staticClass: "d-block w-100",
    attrs: {
      src: "/theme/frontend/assets/images/banner/7.jpg",
      alt: "Olopo Banner"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "carousel-item"
  }, [_c("img", {
    staticClass: "d-block w-100",
    attrs: {
      src: "/theme/frontend/assets/images/banner/8.jpg",
      alt: "Olopo Banner"
    }
  })])]), _vm._v(" "), _c("button", {
    staticClass: "carousel-control-prev",
    attrs: {
      type: "button",
      "data-bs-target": "#olopoCarousel",
      "data-bs-slide": "prev"
    }
  }, [_c("span", {
    staticClass: "carousel-control-prev-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Previous")])]), _vm._v(" "), _c("button", {
    staticClass: "carousel-control-next",
    attrs: {
      type: "button",
      "data-bs-target": "#olopoCarousel",
      "data-bs-slide": "next"
    }
  }, [_c("span", {
    staticClass: "carousel-control-next-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Next")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "olopo-app-section mt-3 mb-5 mx-6"
  }, [_c("div", {
    staticClass: "olopo-box"
  }, [_c("h2", [_vm._v("Why juggle so many apps when one app can do it all?")]), _vm._v(" "), _c("p", {
    staticClass: "lead"
  }, [_vm._v("\n      With the "), _c("strong", [_vm._v("OLOPO App")]), _vm._v(", you can handle online & offline shopping,\n      events, movies, travel, and more — all from one trusted platform.\n    ")]), _vm._v(" "), _c("p", [_vm._v("\n      I personally use "), _c("strong", [_vm._v("OLOPO")]), _vm._v(". It has helped me save more money\n      and even earn a second income. That’s why I genuinely believe this can help you too.\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "offer-box"
  }, [_c("p", {
    staticClass: "offer-title"
  }, [_vm._v("🎯 Limited-Time Opportunity")]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("⏳ Refer 10 people within 7 days to enter the OLOPO Customer Club")]), _vm._v(" "), _c("li", [_vm._v("🎁 Get ₹5,000 cashback rewards for shopping")]), _vm._v(" "), _c("li", [_vm._v("💰 Chance to win ₹25 Lakhs in cash")])])]), _vm._v(" "), _c("div", {
    staticClass: "store-buttons"
  }, [_c("a", {
    staticClass: "store-btn android",
    attrs: {
      href: "https://play.google.com/store/apps/details?id=com.wac.olopouser",
      target: "_blank"
    }
  }, [_vm._v("\n        Get it on Google Play\n      ")]), _vm._v(" "), _c("a", {
    staticClass: "store-btn ios",
    attrs: {
      href: "https://apps.apple.com/app/id6651817861",
      target: "_blank"
    }
  }, [_vm._v("\n        Download on App Store\n      ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "brand-section mx-5"
  }, [_c("h2", [_vm._v("Explore the Brands"), _c("br"), _vm._v("and Offers")]), _vm._v(" "), _c("p", {
    staticClass: "subtitle"
  }, [_vm._v("you can access all brands and customized offers near you")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "section-header"
  }, [_c("h2", {
    staticClass: "section-title"
  }, [_vm._v("Gift Vouchers")]), _vm._v(" "), _c("a", {
    staticClass: "view-all-btn",
    attrs: {
      href: "/gift-vouchers"
    }
  }, [_vm._v("View All")])]), _vm._v(" "), _c("div", {
    staticClass: "card-grid card-grid-gift"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "section-header"
  }, [_c("h2", {
    staticClass: "section-title"
  }, [_vm._v("Merchant Vouchers")])]), _vm._v(" "), _c("div", {
    staticClass: "card-grid justify-center"
  }, [_c("h6", [_vm._v("No Vouchers Found")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.olopo-app-section {\n  background: #f8f9fb;\n  border-radius: 20px;\n}\n.olopo-box {\n  max-width: 900px;\n  margin: auto;\n  padding: 40px 20px;\n  text-align: center;\n}\n.olopo-box h2 {\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n.olopo-box .lead {\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n.olopo-box p {\n  font-size: 16px;\n  color: #555;\n}\n.offer-box {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 20px;\n  margin: 25px 0;\n  box-shadow: 0 10px 25px rgba(0,0,0,0.05);\n  text-align: left;\n}\n.offer-title {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.offer-box ul {\n  padding-left: 18px;\n  margin: 10px 0;\n}\n.offer-box li {\n  margin-bottom: 8px;\n}\n.ref-code {\n  margin-top: 12px;\n  font-size: 17px;\n}\n.store-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 25px;\n  flex-wrap: wrap;\n}\n.store-btn {\n  padding: 14px 22px;\n  border-radius: 30px;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #fff;\n  transition: all 0.25s ease;\n  box-shadow: 0 8px 18px rgba(0,0,0,0.15);\n}\n.store-btn.android {\n  background: linear-gradient(135deg, #34a853, #0f9d58);\n}\n.store-btn.ios {\n  background: linear-gradient(135deg, #000000, #444444);\n}\n.store-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(0,0,0,0.25);\n}\n.more-link {\n  margin-top: 20px;\n  font-size: 15px;\n}\n\n/* Mobile */\n@media (max-width: 768px) {\n.olopo-box h2 {\n    font-size: 22px;\n}\n.olopo-box .lead {\n    font-size: 16px;\n}\n.store-btn {\n    width: 100%;\n    justify-content: center;\n}\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4cd741c0_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4cd741c0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4cd741c0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Frontend/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Frontend/Index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_4cd741c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4cd741c0 */ "./resources/js/components/Frontend/Index.vue?vue&type=template&id=4cd741c0");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/components/Frontend/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_4cd741c0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css */ "./resources/js/components/Frontend/Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4cd741c0__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_4cd741c0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Frontend/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/Index.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Frontend/Index.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4cd741c0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=style&index=0&id=4cd741c0&lang=css");


/***/ }),

/***/ "./resources/js/components/Frontend/Index.vue?vue&type=template&id=4cd741c0":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Frontend/Index.vue?vue&type=template&id=4cd741c0 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4cd741c0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4cd741c0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4cd741c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=4cd741c0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Index.vue?vue&type=template&id=4cd741c0");


/***/ })

}]);