"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Gallery_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Gallery',
  data: function data() {
    return {
      items: [],
      dataNotFound: false,
      addGalleryModel: false,
      editGalleryModel: false,
      addImagePreview: null,
      editImagePreview: null,
      addPostData: {
        title: '',
        image: null,
        alt_text: '',
        description: '',
        status: 1
      },
      editPostData: {
        id: null,
        title: '',
        image: null,
        image_path: '',
        alt_text: '',
        description: '',
        status: 1
      }
    };
  },
  mounted: function mounted() {
    this.fetchGalleryData();
  },
  methods: {
    fetchGalleryData: function fetchGalleryData() {
      var _this = this;
      // API call to fetch gallery items
      this.axios.get('/api/v1/gallery').then(function (response) {
        if (response.data.status) {
          _this.items = response.data.data;
          _this.dataNotFound = _this.items.length === 0;
        } else {
          _this.dataNotFound = true;
        }
      })["catch"](function (error) {
        console.error('Error fetching gallery data:', error);
        _this.dataNotFound = true;
      });
    },
    getImageUrl: function getImageUrl(imagePath) {
      return imagePath ? "/storage/".concat(imagePath) : '/images/placeholder.jpg';
    },
    handleImageUpload: function handleImageUpload(event, type) {
      var _this2 = this;
      var file = event.target.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          if (type === 'add') {
            _this2.addImagePreview = e.target.result;
            _this2.addPostData.image = file;
          } else if (type === 'edit') {
            _this2.editImagePreview = e.target.result;
            _this2.editPostData.image = file;
          }
        };
        reader.readAsDataURL(file);
      }
    },
    addGallery: function addGallery() {
      var _this3 = this;
      var formData = new FormData();
      formData.append('title', this.addPostData.title);
      formData.append('image_path', this.addPostData.image);
      formData.append('alt_text', this.addPostData.alt_text);
      formData.append('description', this.addPostData.description);
      formData.append('status', this.addPostData.status);
      this.axios.post('/api/v1/add/gallery', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        if (response.data.success) {
          _this3.$vs.notification({
            title: 'Success',
            text: 'Image uploaded successfully!',
            color: 'success'
          });
          _this3.addGalleryModel = false;
          _this3.resetAddForm();
          _this3.fetchGalleryData();
        } else {
          _this3.$vs.notification({
            title: 'Error',
            text: response.data.message || 'Failed to upload image',
            color: 'danger'
          });
        }
      })["catch"](function (error) {
        console.error('Error uploading image:', error);
        _this3.$vs.notification({
          title: 'Error',
          text: 'Failed to upload image',
          color: 'danger'
        });
      });
    },
    editBtn: function editBtn(id) {
      var item = this.items.find(function (item) {
        return item.id === id;
      });
      if (item) {
        this.editPostData = {
          id: item.id,
          title: item.title,
          image: null,
          image_path: item.image_path,
          alt_text: item.alt_text || '',
          description: item.description || '',
          status: item.status
        };
        this.editImagePreview = null;
        this.editGalleryModel = true;
      }
    },
    updateGallery: function updateGallery() {
      var _this4 = this;
      var formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('title', this.editPostData.title);
      if (this.editPostData.image) {
        formData.append('image_path', this.editPostData.image);
      }
      formData.append('alt_text', this.editPostData.alt_text);
      formData.append('description', this.editPostData.description);
      formData.append('status', this.editPostData.status);
      this.axios.post("/api/v1/update/gallery/".concat(this.editPostData.id), formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        if (response.data.success) {
          _this4.$vs.notification({
            title: 'Success',
            text: 'Image updated successfully!',
            color: 'success'
          });
          _this4.editGalleryModel = false;
          _this4.resetEditForm();
          _this4.fetchGalleryData();
        } else {
          _this4.$vs.notification({
            title: 'Error',
            text: response.data.message || 'Failed to update image',
            color: 'danger'
          });
        }
      })["catch"](function (error) {
        console.error('Error updating image:', error);
        _this4.$vs.notification({
          title: 'Error',
          text: 'Failed to update image',
          color: 'danger'
        });
      });
    },
    deleteBtn: function deleteBtn(id) {
      var _this5 = this;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Confirmation',
        text: 'Are you sure you want to delete this image?',
        accept: function accept() {
          return _this5.deleteGalleryItem(id);
        },
        acceptText: 'Delete'
      });
    },
    deleteGalleryItem: function deleteGalleryItem(id) {
      var _this6 = this;
      this.axios["delete"]("/api/v1/delete/gallery/".concat(id)).then(function (response) {
        if (response.data.success) {
          _this6.$vs.notification({
            title: 'Success',
            text: 'Image deleted successfully!',
            color: 'success'
          });
          _this6.fetchGalleryData();
        } else {
          _this6.$vs.notification({
            title: 'Error',
            text: response.data.message || 'Failed to delete image',
            color: 'danger'
          });
        }
      })["catch"](function (error) {
        console.error('Error deleting image:', error);
        _this6.$vs.notification({
          title: 'Error',
          text: 'Failed to delete image',
          color: 'danger'
        });
      });
    },
    resetAddForm: function resetAddForm() {
      this.addPostData = {
        title: '',
        image: null,
        alt_text: '',
        description: '',
        status: 1
      };
      this.addImagePreview = null;
      document.getElementById('addGalleryForm').reset();
    },
    resetEditForm: function resetEditForm() {
      this.editPostData = {
        id: null,
        title: '',
        image: null,
        image_path: '',
        alt_text: '',
        description: '',
        status: 1
      };
      this.editImagePreview = null;
      document.getElementById('editGalleryForm').reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=template&id=171b68da&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=template&id=171b68da&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "header bg-primary pb-6"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "header-body"
  }, [_c("div", {
    staticClass: "row align-items-center py-4"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-5 text-right"
  }, [_c("a", {
    staticClass: "btn btn-sm btn-neutral",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        _vm.addGalleryModel = !_vm.addGalleryModel;
      }
    }
  }, [_vm._v("Upload Image")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container-fluid mt--6"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "card",
    attrs: {
      id: "deleteLoading"
    }
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "card-body",
    attrs: {
      id: "galleryLoading"
    }
  }, [!_vm.dataNotFound ? _c("div", {
    staticClass: "row"
  }, _vm._l(_vm.items, function (item) {
    return _c("div", {
      key: item.id,
      staticClass: "col-lg-3 col-md-4 col-sm-6 mb-4"
    }, [_c("div", {
      staticClass: "card shadow"
    }, [_c("div", {
      staticClass: "position-relative"
    }, [_c("img", {
      staticClass: "card-img-top",
      staticStyle: {
        height: "200px",
        "object-fit": "cover"
      },
      attrs: {
        src: _vm.getImageUrl(item.image_path),
        alt: item.alt_text
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "position-absolute",
      staticStyle: {
        top: "10px",
        right: "10px"
      }
    }, [_c("span", {
      staticClass: "badge",
      "class": item.status ? "badge-success" : "badge-danger"
    }, [_vm._v("\n                                                " + _vm._s(item.status ? "Active" : "Inactive") + "\n                                            ")])])]), _vm._v(" "), _c("div", {
      staticClass: "card-body p-3"
    }, [_c("h6", {
      staticClass: "card-title mb-2"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), item.description ? _c("p", {
      staticClass: "card-text text-sm text-muted"
    }, [_vm._v("\n                                            " + _vm._s(item.description.substring(0, 80)) + _vm._s(item.description.length > 80 ? "..." : "") + "\n                                        ")]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "btn-group btn-group-sm w-100"
    }, [_c("button", {
      staticClass: "btn btn-primary",
      on: {
        click: function click($event) {
          return _vm.editBtn(item.id);
        }
      }
    }, [_c("i", {
      staticClass: "far fa-edit"
    }), _vm._v(" Edit\n                                            ")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-danger",
      on: {
        click: function click($event) {
          return _vm.deleteBtn(item.id);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-trash-alt"
    }), _vm._v(" Delete\n                                            ")])])])])]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.dataNotFound ? _c("div", {
    staticClass: "text-center py-5"
  }, [_c("h5", [_vm._v("No Images Found")]), _vm._v(" "), _c("p", [_vm._v("Upload some images to get started.")])]) : _vm._e()])])])])]), _vm._v(" "), _c("vs-dialog", {
    attrs: {
      "prevent-close": "",
      blur: ""
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("h4", {
          staticClass: "not-margin"
        }, [_vm._v("\n                Upload New "), _c("b", [_vm._v("Image")])])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.addGalleryModel,
      callback: function callback($$v) {
        _vm.addGalleryModel = $$v;
      },
      expression: "addGalleryModel"
    }
  }, [_vm._v(" "), _c("form", {
    attrs: {
      id: "addGalleryForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.addGallery();
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Title")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.addPostData.title,
      expression: "addPostData.title"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "Image Title",
      required: ""
    },
    domProps: {
      value: _vm.addPostData.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.addPostData, "title", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mt--3"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Image")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      accept: "image/*",
      required: ""
    },
    on: {
      change: function change($event) {
        return _vm.handleImageUpload($event, "add");
      }
    }
  }), _vm._v(" "), _vm.addImagePreview ? _c("div", {
    staticClass: "mt-2"
  }, [_c("img", {
    staticClass: "img-fluid",
    staticStyle: {
      "max-width": "200px",
      "max-height": "200px"
    },
    attrs: {
      src: _vm.addImagePreview
    }
  })]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group mt--3"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Alt Text")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.addPostData.alt_text,
      expression: "addPostData.alt_text"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "Alt Text for SEO"
    },
    domProps: {
      value: _vm.addPostData.alt_text
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.addPostData, "alt_text", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mt--3"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Description")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.addPostData.description,
      expression: "addPostData.description"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "3",
      placeholder: "Image Description"
    },
    domProps: {
      value: _vm.addPostData.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.addPostData, "description", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mt--3"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Status")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.addPostData.status,
      expression: "addPostData.status"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.addPostData, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Inactive")])])]), _vm._v(" "), _c("div", {
    staticClass: "footer-dialog text-center"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Upload Image")])])])]), _vm._v(" "), _c("vs-dialog", {
    attrs: {
      "prevent-close": "",
      blur: ""
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("h4", {
          staticClass: "not-margin"
        }, [_vm._v("\n                Edit "), _c("b", [_vm._v("Image")])])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.editGalleryModel,
      callback: function callback($$v) {
        _vm.editGalleryModel = $$v;
      },
      expression: "editGalleryModel"
    }
  }, [_vm._v(" "), _c("form", {
    attrs: {
      id: "editGalleryForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateGallery();
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Title")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editPostData.title,
      expression: "editPostData.title"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "Image Title",
      required: ""
    },
    domProps: {
      value: _vm.editPostData.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.editPostData, "title", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mt--3"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Current Image")]), _vm._v(" "), _vm.editPostData.image_path ? _c("div", [_c("img", {
    staticClass: "img-fluid mb-2",
    staticStyle: {
      "max-width": "200px",
      "max-height": "200px"
    },
    attrs: {
      src: _vm.getImageUrl(_vm.editPostData.image_path)
    }
  })]) : _vm._e(), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      accept: "image/*"
    },
    on: {
      change: function change($event) {
        return _vm.handleImageUpload($event, "edit");
      }
    }
  }), _vm._v(" "), _vm.editImagePreview ? _c("div", {
    staticClass: "mt-2"
  }, [_c("img", {
    staticClass: "img-fluid",
    staticStyle: {
      "max-width": "200px",
      "max-height": "200px"
    },
    attrs: {
      src: _vm.editImagePreview
    }
  })]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group mt--3"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Alt Text")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editPostData.alt_text,
      expression: "editPostData.alt_text"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "Alt Text for SEO"
    },
    domProps: {
      value: _vm.editPostData.alt_text
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.editPostData, "alt_text", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mt--3"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Description")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editPostData.description,
      expression: "editPostData.description"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "3",
      placeholder: "Image Description"
    },
    domProps: {
      value: _vm.editPostData.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.editPostData, "description", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mt--3"
  }, [_c("label", {
    staticClass: "form-control-label"
  }, [_vm._v("Status")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editPostData.status,
      expression: "editPostData.status"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.editPostData, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Inactive")])])]), _vm._v(" "), _c("div", {
    staticClass: "footer-dialog text-center"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Update Image")])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-6 col-7"
  }, [_c("h6", {
    staticClass: "h2 text-white d-inline-block mb-0"
  }, [_vm._v("Gallery")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header border-0"
  }, [_c("div", {
    staticClass: "row align-items-center"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("h3", {
    staticClass: "mb-0"
  }, [_vm._v("Gallery Images")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.card[data-v-171b68da] {\n    transition: transform 0.2s;\n}\n.card[data-v-171b68da]:hover {\n    transform: translateY(-2px);\n}\n.badge[data-v-171b68da] {\n    font-size: 0.75rem;\n}\n.btn-group-sm .btn[data-v-171b68da] {\n    font-size: 0.8rem;\n}\n.footer-dialog[data-v-171b68da] {\n    padding: 1rem 0;\n}\n.mt--3[data-v-171b68da] {\n    margin-top: -0.5rem;\n}\n.mt--6[data-v-171b68da] {\n    margin-top: -6rem;\n}\n.not-margin[data-v-171b68da] {\n    margin: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_171b68da_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_171b68da_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_171b68da_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Gallery/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Gallery/Index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_171b68da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=171b68da&scoped=true */ "./resources/js/components/Gallery/Index.vue?vue&type=template&id=171b68da&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/components/Gallery/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_171b68da_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css */ "./resources/js/components/Gallery/Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_171b68da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_171b68da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "171b68da",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Gallery/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Gallery/Index.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Gallery/Index.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Gallery/Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Gallery/Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_171b68da_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=style&index=0&id=171b68da&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Gallery/Index.vue?vue&type=template&id=171b68da&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Gallery/Index.vue?vue&type=template&id=171b68da&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_171b68da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_171b68da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_171b68da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=171b68da&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Gallery/Index.vue?vue&type=template&id=171b68da&scoped=true");


/***/ })

}]);