"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Frontend_Categories_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Categories.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Categories.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Categories",
  data: function data() {
    return {
      categoryId: this.$route.params.id,
      categoryDetails: null
    };
  },
  mounted: function mounted() {
    console.log("Category ID:", this.categoryId);
    this.getCategoryDetails();
    // Now you can use the id variable as needed
  },
  methods: {
    getCategoryDetails: function getCategoryDetails() {
      var _this = this;
      this.axios.get("/api/v1/category-details/".concat(this.categoryId)).then(function (response) {
        // Handle the response data
        // Check if response.data.data is an array and get the first item
        if (Array.isArray(response.data.data) && response.data.data.length > 0) {
          _this.categoryDetails = response.data.data[0];
        } else {
          _this.categoryDetails = response.data.data;
        }
        console.log("Category Details:", _this.categoryDetails);
      })["catch"](function (error) {
        var _error$response;
        console.error("Error fetching category details:", (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
      });
    },
    playVideo: function playVideo(event) {
      // Add your video play logic here
      var video = event.currentTarget.querySelector('video');
      if (video) {
        video.play();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Categories.vue?vue&type=template&id=7c746084":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Categories.vue?vue&type=template&id=7c746084 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("section", {
    staticClass: "bg-white pb-5 position-relative container mt-4 shoping-section"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_vm.categoryDetails && _vm.categoryDetails.title ? _c("h2", {
    staticClass: "mt-3"
  }, [_vm._v("\n                    " + _vm._s(_vm.categoryDetails.title))]) : _vm._e()]), _vm._v(" "), _vm.categoryDetails && _vm.categoryDetails.banner_image ? _c("div", {
    staticClass: "col-12 text-center my-4"
  }, [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: "/public/storage/".concat(_vm.categoryDetails.banner_image),
      alt: "Shopping"
    }
  })]) : _vm._e()]), _vm._v(" "), _vm.categoryDetails && _vm.categoryDetails.description ? _c("p", [_vm._v(_vm._s(_vm.categoryDetails.description))]) : _vm._e()]), _vm._v(" "), _vm.categoryDetails && _vm.categoryDetails.accordions && _vm.categoryDetails.accordions.length > 0 ? _c("section", {}, [_c("div", {
    staticClass: "container mt-5"
  }, _vm._l(_vm.categoryDetails.accordions, function (item, index) {
    return _c("div", {
      key: item.id,
      staticClass: "accordion-item"
    }, [_c("h2", {
      staticClass: "accordion-header",
      attrs: {
        id: "heading" + item.id
      }
    }, [_c("button", {
      staticClass: "accordion-button collapsed faq-button",
      attrs: {
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#collapse" + item.id,
        "aria-expanded": "false",
        "aria-controls": "collapse" + item.id
      }
    }, [_c("span", {
      staticClass: "faq-question"
    }, [_vm._v(_vm._s(item.question))]), _vm._v(" "), _vm._m(0, true)])]), _vm._v(" "), _c("div", {
      staticClass: "accordion-collapse collapse",
      attrs: {
        id: "collapse" + item.id,
        "aria-labelledby": "heading" + item.id,
        "data-bs-parent": "#faqAccordion"
      }
    }, [_c("div", {
      staticClass: "accordion-body"
    }, [_c("div", {
      domProps: {
        innerHTML: _vm._s(item.answer)
      }
    })])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.categoryDetails && _vm.categoryDetails.videos && _vm.categoryDetails.videos.length > 0 ? _c("section", {}, [_c("div", {
    staticClass: "container mt-5"
  }, [_c("div", {
    staticClass: "row"
  }, _vm._l(_vm.categoryDetails.videos, function (video, index) {
    return _c("div", {
      key: video.id,
      staticClass: "col-12 col-md-6 col-lg-4 mb-4"
    }, [_c("div", {
      staticClass: "video-card"
    }, [_c("div", {
      staticClass: "video-thumbnail",
      on: {
        click: function click($event) {
          return _vm.playVideo($event);
        }
      }
    }, [_c("video", {
      attrs: {
        preload: "metadata",
        height: "100%",
        muted: ""
      },
      domProps: {
        muted: true
      }
    }, [_c("source", {
      attrs: {
        src: "/public/storage/".concat(video.video_path),
        type: "video/mp4"
      }
    }), _vm._v("\n                                Your browser does not support the video tag.\n                            ")]), _vm._v(" "), _vm._m(1, true)]), _vm._v(" "), _c("div", {
      staticClass: "video-info"
    }, [_c("h5", {
      staticClass: "video-heading"
    }, [_vm._v(_vm._s(video.title))]), _vm._v(" "), _c("p", {
      staticClass: "video-duration"
    }, [_vm._v("Duration: " + _vm._s(video.duration || "0.39min"))])])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.categoryDetails && _vm.categoryDetails.images && _vm.categoryDetails.images.length > 0 ? _c("section", {}, [_c("div", {
    staticClass: "container mt-5"
  }, [_c("div", {
    staticClass: "row"
  }, _vm._l(_vm.categoryDetails.images, function (image, index) {
    return _c("div", {
      key: image.id,
      staticClass: "col-md-4 col-lg-3 mb-4"
    }, [_c("a", {
      attrs: {
        href: "/gallery"
      }
    }, [_c("div", {
      staticClass: "image-card"
    }, [_c("img", {
      staticClass: "img-fluid category-image",
      attrs: {
        src: "/public/storage/".concat(image.gallery.image_path),
        alt: image.title
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "image-title mt-2 text-center"
    }, [_vm._v(_vm._s(image.title))])])])]);
  }), 0)])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "faq-toggle"
  }, [_vm._v("Show more\n                            "), _c("i", {
    staticClass: "bi bi-chevron-down arrow-icon"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "play-button-overlay"
  }, [_c("div", {
    staticClass: "play-icon"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Frontend/Categories.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Frontend/Categories.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Categories_vue_vue_type_template_id_7c746084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=7c746084 */ "./resources/js/components/Frontend/Categories.vue?vue&type=template&id=7c746084");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js */ "./resources/js/components/Frontend/Categories.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_7c746084__WEBPACK_IMPORTED_MODULE_0__.render,
  _Categories_vue_vue_type_template_id_7c746084__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Frontend/Categories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/Categories.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Frontend/Categories.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Categories.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/Categories.vue?vue&type=template&id=7c746084":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Categories.vue?vue&type=template&id=7c746084 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_7c746084__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_7c746084__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_7c746084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=template&id=7c746084 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Categories.vue?vue&type=template&id=7c746084");


/***/ })

}]);