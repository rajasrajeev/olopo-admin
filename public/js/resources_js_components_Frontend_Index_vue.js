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
    staticClass: "mt-1 mb-5 mx-6"
  }, [_c("div", {
    staticClass: "info-buttons"
  }, [_c("a", {
    attrs: {
      href: "/leaderboard"
    }
  }, [_c("button", {
    staticClass: "info-button"
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/category/user-leaderboard.png",
      alt: "User Leaderboard"
    }
  })])]), _vm._v(" "), _c("a", {
    attrs: {
      href: "/movies"
    }
  }, [_c("button", {
    staticClass: "info-button"
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/category/movie-updates.png",
      alt: "Movie updates"
    }
  })])]), _vm._v(" "), _c("a", {
    attrs: {
      href: "/events"
    }
  }, [_c("button", {
    staticClass: "info-button"
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/category/event-updates.png",
      alt: "Event updates"
    }
  })])])])]);
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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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