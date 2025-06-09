"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Frontend_Gallery_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Gallery",
  data: function data() {
    return {
      galleryImages: null,
      selectedImage: null,
      currentImageIndex: 0
    };
  },
  mounted: function mounted() {
    this.getGalleryImages();
  },
  methods: {
    getGalleryImages: function getGalleryImages() {
      var _this = this;
      this.axios.get('/api/v1/gallery').then(function (response) {
        // Handle the response data
        if (Array.isArray(response.data.data) && response.data.data.length > 0) {
          _this.galleryImages = response.data.data;
        } else {
          _this.galleryImages = response.data.data;
        }
        console.log("Gallery Images:", _this.galleryImages);
      })["catch"](function (error) {
        var _error$response;
        console.error("Error fetching gallery images:", (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
      });
    },
    openImageModal: function openImageModal(image, index) {
      this.selectedImage = image;
      this.currentImageIndex = index;

      // Bootstrap 5 modal
      var modal = new bootstrap.Modal(this.$refs.imageModal);
      modal.show();
    },
    nextImage: function nextImage() {
      if (this.currentImageIndex < this.galleryImages.length - 1) {
        this.currentImageIndex++;
        this.selectedImage = this.galleryImages[this.currentImageIndex];
      }
    },
    previousImage: function previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
        this.selectedImage = this.galleryImages[this.currentImageIndex];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=template&id=34be1820&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=template&id=34be1820&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$selectedImage;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._m(0), _vm._v(" "), _vm.galleryImages && _vm.galleryImages.length > 0 ? _c("section", {
    staticClass: "container mt-5"
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, _vm._l(_vm.galleryImages, function (image, index) {
    return _c("div", {
      key: image.id,
      staticClass: "col-md-4 col-lg-3 mb-4"
    }, [_c("div", {
      staticClass: "image-card",
      on: {
        click: function click($event) {
          return _vm.openImageModal(image, index);
        }
      }
    }, [_c("img", {
      staticClass: "img-fluid category-image",
      attrs: {
        src: "/public/storage/".concat(image.image_path),
        alt: image.title
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "image-title mt-2 text-center"
    }, [_vm._v(_vm._s(image.title))])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _c("div", {
    ref: "imageModal",
    staticClass: "modal fade",
    attrs: {
      id: "imageModal",
      tabindex: "-1",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-lg modal-dialog-centered"
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(((_vm$selectedImage = _vm.selectedImage) === null || _vm$selectedImage === void 0 ? void 0 : _vm$selectedImage.title) || "Image"))]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "modal-body text-center p-0"
  }, [_vm.selectedImage ? _c("img", {
    staticClass: "img-fluid w-100",
    attrs: {
      src: "/public/storage/".concat(_vm.selectedImage.image_path),
      alt: _vm.selectedImage.title
    }
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer justify-content-between"
  }, [_c("div", [_c("button", {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      disabled: _vm.currentImageIndex <= 0
    },
    on: {
      click: _vm.previousImage
    }
  }, [_vm._v("\n                            Previous\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-secondary ms-2",
    attrs: {
      disabled: _vm.currentImageIndex >= _vm.galleryImages.length - 1
    },
    on: {
      click: _vm.nextImage
    }
  }, [_vm._v("\n                            Next\n                        ")])]), _vm._v(" "), _c("div", [_c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.currentImageIndex + 1) + " of " + _vm._s(_vm.galleryImages.length))])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "bg-white pb-5 position-relative container mt-4 shoping-section"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_c("h2", {
    staticClass: "mt-3"
  }, [_vm._v("Gallery")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.image-card[data-v-34be1820] {\n    cursor: pointer;\n    transition: transform 0.3s ease;\n    border-radius: 8px;\n    overflow: hidden;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n.image-card[data-v-34be1820]:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 4px 15px rgba(0,0,0,0.2);\n}\n.category-image[data-v-34be1820] {\n    width: 100%;\n    height: 200px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.image-title[data-v-34be1820] {\n    padding: 10px;\n    font-weight: 500;\n    color: #333;\n}\n.modal-body img[data-v-34be1820] {\n    max-height: 70vh;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_34be1820_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_34be1820_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_34be1820_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Frontend/Gallery.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Frontend/Gallery.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gallery_vue_vue_type_template_id_34be1820_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery.vue?vue&type=template&id=34be1820&scoped=true */ "./resources/js/components/Frontend/Gallery.vue?vue&type=template&id=34be1820&scoped=true");
/* harmony import */ var _Gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.vue?vue&type=script&lang=js */ "./resources/js/components/Frontend/Gallery.vue?vue&type=script&lang=js");
/* harmony import */ var _Gallery_vue_vue_type_style_index_0_id_34be1820_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css */ "./resources/js/components/Frontend/Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gallery_vue_vue_type_template_id_34be1820_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Gallery_vue_vue_type_template_id_34be1820_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "34be1820",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Frontend/Gallery.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/Gallery.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Frontend/Gallery.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_style_index_0_id_34be1820_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=style&index=0&id=34be1820&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Frontend/Gallery.vue?vue&type=template&id=34be1820&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Gallery.vue?vue&type=template&id=34be1820&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_34be1820_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_34be1820_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_34be1820_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gallery.vue?vue&type=template&id=34be1820&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Gallery.vue?vue&type=template&id=34be1820&scoped=true");


/***/ })

}]);