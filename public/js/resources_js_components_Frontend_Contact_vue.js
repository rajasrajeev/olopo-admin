"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Frontend_Contact_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Contact",
  data: function data() {
    return {
      consent: false
    };
  },
  methods: {
    submitForm: function submitForm() {
      if (!this.consent) {
        alert('Please check the consent box to proceed.');
        return;
      }
      // Proceed with form submission logic here
      alert('Form submitted successfully!');
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "mt-9 mb-7 contact-us-section",
    attrs: {
      id: "contact-us"
    }
  }, [_c("div", {
    staticClass: "container mt-5 mb-5"
  }, [_c("p", {
    staticClass: "text-muted"
  }, [_vm._v("Get Started")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("form", {
    staticClass: "mt-5",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "row mt-4"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.consent,
      expression: "consent"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "consentCheckbox"
    },
    domProps: {
      checked: Array.isArray(_vm.consent) ? _vm._i(_vm.consent, null) > -1 : _vm.consent
    },
    on: {
      change: function change($event) {
        var $$a = _vm.consent,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.consent = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.consent = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.consent = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "consentCheckbox"
    }
  }, [_vm._v("\n                By submitting I give my consent to receive messages/RCS/Email/Calls from the brand regarding their updates\n              ")])])])]), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _vm._m(4)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h1", [_vm._v("Get in touch with us."), _c("br"), _c("span", [_vm._v("We're here to assist you.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row g-4"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Your Name",
      required: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "email",
      placeholder: "Email Address",
      required: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Phone Number (optional)"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row mt-4"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("textarea", {
    staticClass: "form-control",
    attrs: {
      rows: "2",
      placeholder: "Message",
      required: ""
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row mt-4"
  }, [_c("div", {
    staticClass: "col-auto"
  }, [_c("button", {
    staticClass: "btn btn-orange",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n              Leave us a Message →\n            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "social-bar"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/contact-us/fb.png"
    }
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/contact-us/insta.png"
    }
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/contact-us/whatsapp.png"
    }
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/contact-us/linkedin.png"
    }
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/contact-us/twitter.png"
    }
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("img", {
    attrs: {
      src: "/theme/frontend/assets/images/contact-us/youtube.png"
    }
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Frontend/Contact.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Frontend/Contact.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contact_vue_vue_type_template_id_916ca424__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=916ca424 */ "./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js */ "./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_916ca424__WEBPACK_IMPORTED_MODULE_0__.render,
  _Contact_vue_vue_type_template_id_916ca424__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Frontend/Contact.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Contact.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_916ca424__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_916ca424__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_916ca424__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=template&id=916ca424 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Frontend/Contact.vue?vue&type=template&id=916ca424");


/***/ })

}]);