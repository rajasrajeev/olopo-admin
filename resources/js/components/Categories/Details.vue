<template>
    <div>
        <div class="header bg-primary pb-6">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-center py-4">
                        <div class="col-lg-6 col-7">
                            <h6 class="h2 text-white d-inline-block mb-0">Category Details</h6>
                        </div>
                        <div class="col-lg-6 col-5 text-right">
                            <button class="btn btn-sm btn-neutral mr-2" @click="$router.go(-1)">
                                <i class="fas fa-arrow-left"></i> Back
                            </button>
                            <button class="btn btn-sm btn-neutral" @click="addDetailModel = !addDetailModel">
                                New Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid mt--6">
            <div class="row">
                <div class="col">
                    <div class="card" id="deleteLoading">
                        <!-- Card header -->
                        <div class="card-header border-0">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h3 class="mb-0">Category Details</h3>
                                </div>
                            </div>
                        </div>

                        <!-- Light table -->
                        <div class="table-responsive" id="categoryDetailLoading">
                            <table class="table align-items-center table-flush">
                                <thead class="thead-light">
                                <tr>
                                    <th scope="col" class="sort">Title</th>
                                    <th scope="col" class="sort">Banner</th>
                                    <th scope="col" class="sort">Status</th>
                                    <th scope="col" class="sort">Accordions</th>
                                    <th scope="col" class="sort">Videos</th>
                                    <th scope="col" class="sort">Images</th>
                                    <th scope="col" class="sort">Action</th>
                                </tr>
                                </thead>
                                <tbody class="list" v-for="item in items" :key="item.id">
                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div class="media-body">
                                                <span class="name mb-0 text-sm">{{ item.title }}</span>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="budget">
                                        <img v-if="item.banner_image" :src="getImageUrl(item.banner_image)"
                                             class="img-fluid" style="max-width: 80px; max-height: 50px;" />
                                        <span v-else>No Banner</span>
                                    </td>
                                    <td>
                                        <span class="badge badge-dot mr-4">
                                            <i class="bg-success" v-if="item.status"></i>
                                            <i class="bg-danger" v-else></i>
                                            <span class="status">{{ item.status ? 'Active' : 'Inactive' }}</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="badge badge-primary">{{ item.accordions ? item.accordions.length : 0 }}</span>
                                    </td>
                                    <td>
                                        <span class="badge badge-info">{{ item.videos ? item.videos.length : 0 }}</span>
                                    </td>
                                    <td>
                                        <span class="badge badge-warning">{{ item.images ? item.images.length : 0 }}</span>
                                    </td>
                                    <td>
                                        <div style="display: inline-flex">
                                            <button class="btn btn-success btn-sm mr-2" @click="manageContent(item)">
                                                <i class="fas fa-cogs"></i>
                                                <span><strong>Manage</strong></span>
                                            </button>
                                            <button class="btn btn-primary btn-sm mr-2" @click="editBtn(item.id)">
                                                <i class="far fa-edit"></i>
                                                <span><strong>Edit</strong></span>
                                            </button>
                                            <button class="btn btn-danger btn-sm" @click="deleteBtn(item.id)">
                                                <i class="fas fa-trash-alt"></i>
                                                <span><strong>Delete</strong></span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                                <tbody v-if="dataNotFound">
                                <tr class="text-center">
                                    <td colspan="7">No Data Display</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Category Detail Modal -->
        <vs-dialog v-model="addDetailModel" prevent-close blur width="800px">
            <template #header>
                <h4 class="not-margin">
                    Add New <b>Category Detail</b>
                </h4>
            </template>
            <form v-on:submit.prevent="addCategoryDetail()" id="addDetailForm">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Category</label>
                            <select class="form-control" v-model="addPostData.category_id" required>
                                <option value="">Select Category</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">
                                    {{ category.title }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Title</label>
                            <input class="form-control" placeholder="Title" v-model="addPostData.title" required/>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-control-label">Banner Image</label>
                    <input class="form-control" type="file" @change="handleBannerUpload($event, 'add')" accept="image/*"/>
                </div>

                <div class="form-group">
                    <label class="form-control-label">Description</label>
                    <textarea class="form-control" rows="4" v-model="addPostData.description" placeholder="Description"></textarea>
                </div>

                <!-- Accordions Section -->
                <div class="form-group">
                    <label class="form-control-label">Accordions</label>
                    <button type="button" class="btn btn-sm btn-info mb-3" @click="addAccordion('add')">
                        <i class="fas fa-plus"></i> Add Accordion
                    </button>
                    <div v-for="(accordion, index) in addPostData.accordions" :key="index" class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="form-control-label">Question</label>
                                        <input type="text" class="form-control" v-model="accordion.question" placeholder="Question"/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="form-control-label">Answer</label>
                                        <div :id="'add-editor-' + index" class="editor-container"></div>
                                    </div>
                                </div>
                                <div class="col-md-12 text-right">
                                    <button type="button" class="btn btn-sm btn-danger" @click="removeAccordion('add', index)">
                                        <i class="fas fa-trash"></i> Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Status</label>
                            <select class="form-control" v-model="addPostData.status">
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="footer-dialog text-center">
                    <button class="btn btn-primary" type="submit">Add Category Detail</button>
                </div>
            </form>
        </vs-dialog>

        <!-- Edit Category Detail Modal -->
        <vs-dialog v-model="editDetailModel" prevent-close blur width="800px">
            <template #header>
                <h4 class="not-margin">
                    Edit <b>Category Detail</b>
                </h4>
            </template>
            <form v-on:submit.prevent="updateCategoryDetail()" id="editDetailForm">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Category</label>
                            <select class="form-control" v-model="editPostData.category_id" required>
                                <option value="">Select Category</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">
                                    {{ category.title }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Title</label>
                            <input class="form-control" placeholder="Title" v-model="editPostData.title" required/>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-control-label">Current Banner</label>
                    <div v-if="editPostData.banner_image">
                        <img :src="getImageUrl(editPostData.banner_image)" class="img-fluid mb-2" style="max-width: 200px; max-height: 100px;" />
                    </div>
                    <input class="form-control" type="file" @change="handleBannerUpload($event, 'edit')" accept="image/*"/>
                </div>

                <div class="form-group">
                    <label class="form-control-label">Description</label>
                    <textarea class="form-control" rows="4" v-model="editPostData.description" placeholder="Description"></textarea>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Status</label>
                            <select class="form-control" v-model="editPostData.status">
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="footer-dialog text-center">
                    <button class="btn btn-primary" type="submit">Update Category Detail</button>
                </div>
            </form>
        </vs-dialog>

        <!-- Content Management Modal -->
        <vs-dialog v-model="manageContentModel" prevent-close blur fullscreen>
            <template #header>
                <h4 class="not-margin">
                    Manage Content for <b>{{ selectedDetail.title }}</b>
                </h4>
            </template>
            <div class="container-fluid">
                <!-- Navigation Tabs -->
                <ul class="nav nav-tabs" id="contentTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="accordions-tab" data-toggle="tab" href="#accordions" role="tab">
                            <i class="fas fa-list"></i> Accordions
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="videos-tab" data-toggle="tab" href="#videos" role="tab">
                            <i class="fas fa-video"></i> Videos
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="images-tab" data-toggle="tab" href="#images" role="tab">
                            <i class="fas fa-images"></i> Images
                        </a>
                    </li>
                </ul>

                <!-- Tab Content -->
                <div class="tab-content" id="contentTabsContent">
                    <!-- Accordions Tab -->
                    <div class="tab-pane fade show active" id="accordions" role="tabpanel">
                        <div class="card mt-3">
                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h3 class="mb-0">Accordions</h3>
                                    </div>
                                    <div class="col-auto">
                                        <button class="btn btn-primary btn-sm" @click="addAccordionToDetail()">
                                            <i class="fas fa-plus"></i> Add Accordion
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div v-for="(accordion, index) in selectedDetail.accordions" :key="accordion.id" class="card mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <h5>{{ accordion.question }}</h5>
                                                <div v-html="accordion.answer" class="mb-3"></div>
                                                <button class="btn btn-sm btn-primary mr-2" @click="editAccordion(accordion, index)">
                                                    <i class="fas fa-edit"></i> Edit
                                                </button>
                                                <button class="btn btn-sm btn-danger" @click="deleteAccordion(accordion.id)">
                                                    <i class="fas fa-trash"></i> Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="!selectedDetail.accordions || selectedDetail.accordions.length === 0" class="text-center">
                                    <p>No accordions available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Videos Tab -->
                    <div class="tab-pane fade" id="videos" role="tabpanel">
                        <div class="card mt-3">
                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h3 class="mb-0">Videos</h3>
                                    </div>
                                    <div class="col-auto">
                                        <button class="btn btn-primary btn-sm" @click="addVideoToDetail()">
                                            <i class="fas fa-plus"></i> Add Video
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div v-for="video in selectedDetail.videos" :key="video.id" class="col-md-4 mb-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h6>{{ video.title }}</h6>
                                                <div v-if="video.thumbnail">
                                                    <img :src="getImageUrl(video.thumbnail)" class="img-fluid mb-2" style="max-height: 100px;"/>
                                                </div>
                                                <p class="text-sm">{{ video.description }}</p>
                                                <button class="btn btn-sm btn-primary mr-2" @click="editVideo(video)">
                                                    <i class="fas fa-edit"></i> Edit
                                                </button>
                                                <button class="btn btn-sm btn-danger" @click="deleteVideo(video.id)">
                                                    <i class="fas fa-trash"></i> Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="!selectedDetail.videos || selectedDetail.videos.length === 0" class="text-center">
                                    <p>No videos available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Images Tab -->
                    <div class="tab-pane fade" id="images" role="tabpanel">
                        <div class="card mt-3">
                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h3 class="mb-0">Images</h3>
                                    </div>
                                    <div class="col-auto">
                                        <button class="btn btn-primary btn-sm" @click="addImageToDetail()">
                                            <i class="fas fa-plus"></i> Add Image
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div v-for="image in selectedDetail.images" :key="image.id" class="col-md-3 mb-4">
                                        <div class="card">
                                            <img :src="getImageUrl(image.gallery.image_path)" class="card-img-top" style="height: 150px; object-fit: cover;"/>
                                            <div class="card-body">
                                                <h6>{{ image.gallery.title }}</h6>
                                                <button class="btn btn-sm btn-danger" @click="removeImage(image.id)">
                                                    <i class="fas fa-trash"></i> Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="!selectedDetail.images || selectedDetail.images.length === 0" class="text-center">
                                    <p>No images available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <template #footer>
                <div class="con-footer">
                    <button class="btn btn-light" @click="manageContentModel = false">
                        Close
                    </button>
                </div>
            </template>
        </vs-dialog>

        <!-- Add Accordion Modal -->
        <vs-dialog v-model="addAccordionModel" prevent-close blur width="700px">
            <template #header>
                <h4 class="not-margin">Add <b>Accordion</b></h4>
            </template>
            <form @submit.prevent="saveAccordion()" id="addAccordionForm">
                <div class="form-group">
                    <label class="form-control-label">Question</label>
                    <input type="text" class="form-control" v-model="accordionData.question" placeholder="Question" required/>
                </div>
                <div class="form-group">
                    <label class="form-control-label">Answer</label>
                    <div id="accordion-editor" class="editor-container"></div>
                </div>
                <div class="footer-dialog text-center">
                    <button class="btn btn-primary" type="submit">Save Accordion</button>
                </div>
            </form>
        </vs-dialog>

        <!-- Add Video Modal -->
        <vs-dialog v-model="addVideoModel" prevent-close blur width="600px">
            <template #header>
                <h4 class="not-margin">Add <b>Video</b></h4>
            </template>
            <form @submit.prevent="saveVideo()" id="addVideoForm">
                <div class="form-group">
                    <label class="form-control-label">Title</label>
                    <input type="text" class="form-control" v-model="videoData.title" placeholder="Video Title" required/>
                </div>
                <div class="form-group">
                    <label class="form-control-label">Video File</label>
                    <input type="file" class="form-control" @change="handleVideoUpload" accept="video/*" required/>
                </div>
                <div class="form-group">
                    <label class="form-control-label">Thumbnail</label>
                    <input type="file" class="form-control" @change="handleVideoThumbnailUpload" accept="image/*"/>
                </div>
                <div class="form-group">
                    <label class="form-control-label">Description</label>
                    <textarea class="form-control" v-model="videoData.description" placeholder="Video Description"></textarea>
                </div>
                <div class="footer-dialog text-center">
                    <button class="btn btn-primary" type="submit">Save Video</button>
                </div>
            </form>
        </vs-dialog>

        <!-- Add Image Modal -->
        <vs-dialog v-model="addImageModel" prevent-close blur width="600px">
            <template #header>
                <h4 class="not-margin">Add <b>Image</b></h4>
            </template>
            <div class="form-group">
                <label class="form-control-label">Select from Gallery</label>
                <div class="row">
                    <div v-for="galleryItem in galleryItems" :key="galleryItem.id" class="col-md-4 mb-3">
                        <div class="card cursor-pointer" @click="selectGalleryImage(galleryItem.id)"
                             :class="{ 'border-primary': selectedGalleryImage === galleryItem.id }">
                            <img :src="getImageUrl(galleryItem.image_path)" class="card-img-top" style="height: 100px; object-fit: cover;"/>
                            <div class="card-body p-2">
                                <p class="text-sm mb-0">{{ galleryItem.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-dialog text-center">
                <button class="btn btn-primary" @click="saveImage()" :disabled="!selectedGalleryImage">
                    Add Selected Image
                </button>
            </div>
        </vs-dialog>

        <!-- Delete Confirmation Modal -->
        <vs-dialog width="550px" not-center v-model="deleteDialog">
            <template #header>
                <h4 class="not-margin"><b>Are you sure?</b></h4>
            </template>
            <div class="con-content">
                <p>Are you sure you want to delete this item?</p>
            </div>
            <template #footer>
                <div class="con-footer">
                    <button class="btn btn-primary" @click="confirmDelete()">Ok</button>
                    <button class="btn btn-light" @click="deleteDialog = false">Cancel</button>
                </div>
            </template>
        </vs-dialog>
    </div>
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default {
    name: "CategoryDetails",
    data() {
        return {
            categoryId: this.$route.params.categoryId || null,
            items: [],
            categories: [],
            galleryItems: [],
            selectedDetail: {},
            dataNotFound: false,

            // Modal states
            addDetailModel: false,
            editDetailModel: false,
            manageContentModel: false,
            addAccordionModel: false,
            addVideoModel: false,
            addImageModel: false,
            deleteDialog: false,

            // Form data
            addPostData: {
                category_id: null,
                title: null,
                banner_image: null,
                description: null,
                accordions: [],
                status: 1
            },
            editPostData: {
                id: null,
                category_id: null,
                title: null,
                banner_image: null,
                description: null,
                status: 1
            },
            accordionData: {
                question: '',
                answer: ''
            },
            videoData: {
                title: '',
                video_path: null,
                thumbnail: null,
                description: ''
            },

            // Editor instances
            editors: {},
            currentAccordionEditor: null,

            // Selection states
            selectedGalleryImage: null,
            deleteType: null,
            deleteId: null,

            // Loading states
            isEditing: false,
            editingAccordionIndex: null
        }
    },

    methods: {
        playVideo(thumbnail) {
            const video = thumbnail.querySelector('video');
            const overlay = thumbnail.querySelector('.play-button-overlay');

            if (video.paused) {
                // Play the video
                video.play();
                thumbnail.classList.add('playing');
                video.controls = true;
            } else {
                // Pause the video
                video.pause();
                thumbnail.classList.remove('playing');
                video.controls = false;
            }
        },
        // Data fetching methods
        getCategoryDetails() {
            let loading = this.block("categoryDetailLoading");
            const url = this.categoryId
                ? `/api/v1/category-details/${this.categoryId}`
                : '/api/v1/category-details';

            this.axios.get(url)
                .then(response => {
                    this.items = response.data.data;
                    loading.close();
                    this.dataNotFound = this.items.length === 0;
                })
                .catch(error => {
                    this.items = [];
                    console.log(error.response?.data);
                    this.dataNotFound = true;
                    loading.close();
                });
        },

        getCategories() {
            this.axios.get("/api/v1/categories")
                .then(response => {
                    this.categories = response.data.data;
                    if (this.categoryId && this.categories.length > 0) {
                        this.addPostData.category_id = parseInt(this.categoryId);
                    }
                })
                .catch(error => {
                    console.log(error.response?.data);
                });
        },

        getGalleryItems() {
            this.axios.get("/api/v1/gallery")
                .then(response => {
                    this.galleryItems = response.data.data;
                })
                .catch(error => {
                    console.log(error.response?.data);
                });
        },

        // CRUD operations
        addCategoryDetail() {
            // First, sync all editor contents with the accordion data
            this.syncEditorContents();

            let loading = this.block("addDetailForm");
            const formData = new FormData();

            // Basic fields
            formData.append('category_id', this.addPostData.category_id);
            formData.append('title', this.addPostData.title);
            formData.append('description', this.addPostData.description || '');
            formData.append('status', this.addPostData.status);

            // Banner image
            if (this.addPostData.bannerFile) {
                formData.append('banner_image', this.addPostData.bannerFile);
            }

            // Accordions
            if (this.addPostData.accordions.length > 0) {
                this.addPostData.accordions.forEach((accordion, index) => {
                    formData.append(`accordions[${index}][question]`, accordion.question);
                    formData.append(`accordions[${index}][answer]`, accordion.answer || '');
                });
            }

            this.axios.post('/api/v1/add/category-detail', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
                .then(response => {
                    if (response.data.status === true) {
                        this.resetAddForm();
                        loading.close();
                        this.addDetailModel = false;
                        this.getCategoryDetails();
                        this.successNotification(response.data.message);
                    } else {
                        this.errorNotification(response.data.message);
                        loading.close();
                    }
                })
                .catch(error => {
                    this.errorNotification(error.response?.data?.message || 'Error occurred');
                    loading.close();
                });
        },

        // Add this new method to sync editor contents
        syncEditorContents() {
            this.addPostData.accordions.forEach((accordion, index) => {
                const editorId = `add-editor-${index}`;
                if (this.editors[editorId]) {
                    accordion.answer = this.editors[editorId].root.innerHTML;
                }
            });
        },

        updateCategoryDetail() {
            let loading = this.block("editDetailForm");
            const formData = new FormData();

            formData.append('_method', 'PUT');
            formData.append('category_id', this.editPostData.category_id);
            formData.append('title', this.editPostData.title);
            formData.append('description', this.editPostData.description || '');
            formData.append('status', this.editPostData.status);

            if (this.editPostData.bannerFile) {
                formData.append('banner_image', this.editPostData.bannerFile);
            }

            this.axios.post(`/api/v1/update/category-detail/${this.editPostData.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
                .then(response => {
                    this.editDetailModel = false;
                    this.successNotification(response.data.message);
                    loading.close();
                    this.getCategoryDetails();
                })
                .catch(error => {
                    this.editDetailModel = false;
                    this.errorNotification(error.response?.data?.message || 'Error occurred');
                    loading.close();
                });
        },

        // Content management
        manageContent(item) {
            this.selectedDetail = { ...item };
            this.manageContentModel = true;
        },

        // Update the addAccordion method to ensure proper editor initialization
        addAccordion(formType) {
            if (formType === 'add') {
                const newIndex = this.addPostData.accordions.length;
                this.addPostData.accordions.push({
                    question: '',
                    answer: ''
                });

                this.$nextTick(() => {
                    // Small delay to ensure DOM is fully rendered
                    setTimeout(() => {
                        this.initializeEditor(`add-editor-${newIndex}`, '', newIndex, 'add');
                    }, 100);
                });
            }
        },

        // Update the removeAccordion method to clean up editors
        removeAccordion(formType, index) {
            if (formType === 'add') {
                // Clean up the editor first
                const editorId = `add-editor-${index}`;
                if (this.editors[editorId]) {
                    delete this.editors[editorId];
                }

                // Remove the accordion
                this.addPostData.accordions.splice(index, 1);

                // Re-initialize remaining editors with correct indices
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.addPostData.accordions.forEach((accordion, newIndex) => {
                            const newEditorId = `add-editor-${newIndex}`;
                            if (document.getElementById(newEditorId)) {
                                this.initializeEditor(newEditorId, accordion.answer, newIndex, 'add');
                            }
                        });
                    }, 100);
                });
            }
        },

        addAccordionToDetail() {
            this.accordionData = {
                question: '',
                answer: ''
            };
            this.isEditing = false;
            this.addAccordionModel = true;
            this.$nextTick(() => {
                this.initializeEditor('accordion-editor');
            });
        },

        editAccordion(accordion, index) {
            this.accordionData = { ...accordion };
            this.isEditing = true;
            this.editingAccordionIndex = index;
            this.addAccordionModel = true;
            this.$nextTick(() => {
                this.initializeEditor('accordion-editor', accordion.answer);
            });
        },

        saveAccordion() {
            if (this.currentAccordionEditor) {
                this.accordionData.answer = this.currentAccordionEditor.root.innerHTML;
            }

            const formData = new FormData();
            formData.append('category_detail_id', this.selectedDetail.id);
            formData.append('question', this.accordionData.question);
            formData.append('answer', this.accordionData.answer);

            if (this.isEditing) {
                formData.append('_method', 'PUT');
                this.axios.put(`/api/v1/category-detail/${this.selectedDetail.id}/accordion/${this.accordionData.id}`, formData)
                    .then(response => {
                        this.addAccordionModel = false;
                        this.successNotification(response.data.message);
                        this.refreshDetailContent();
                    })
                    .catch(error => {
                        this.errorNotification(error.response?.data?.message || 'Error occurred');
                    });
            } else {
                this.axios.post('/api/v1/category-detail/'+this.selectedDetail.id+'/accordion', formData)
                    .then(response => {
                        this.addAccordionModel = false;
                        this.successNotification(response.data.message);
                        this.refreshDetailContent();
                    })
                    .catch(error => {
                        this.errorNotification(error.response?.data?.message || 'Error occurred');
                    });
            }
        },

        deleteAccordion(accordionId) {
            this.deleteType = 'accordion';
            this.deleteId = accordionId;
            this.deleteDialog = true;
        },

        // Video management
        addVideoToDetail() {
            this.videoData = {
                title: '',
                video_path: null,
                thumbnail: null,
                description: ''
            };
            this.addVideoModel = true;
        },

        editVideo(video) {
            this.videoData = { ...video };
            this.addVideoModel = true;
        },

        handleVideoUpload(event) {
            this.videoData.videoFile = event.target.files[0];
        },

        handleVideoThumbnailUpload(event) {
            this.videoData.thumbnailFile = event.target.files[0];
        },

        saveVideo() {
            const formData = new FormData();
            formData.append('category_detail_id', this.selectedDetail.id);
            formData.append('title', this.videoData.title);
            formData.append('description', this.videoData.description || '');

            if (this.videoData.videoFile) {
                formData.append('video_path', this.videoData.videoFile);
            }

            if (this.videoData.thumbnailFile) {
                formData.append('thumbnail', this.videoData.thumbnailFile);
            }

            this.axios.post('/api/v1/category-detail/'+this.selectedDetail.id+'/video', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
                .then(response => {
                    this.addVideoModel = false;
                    this.successNotification(response.data.message);
                    this.refreshDetailContent();
                })
                .catch(error => {
                    this.errorNotification(error.response?.data?.message || 'Error occurred');
                });
        },

        deleteVideo(videoId) {
            this.deleteType = 'video';
            this.deleteId = videoId;
            this.deleteDialog = true;
        },

        // Image management
        addImageToDetail() {
            this.selectedGalleryImage = null;
            this.addImageModel = true;
        },

        selectGalleryImage(galleryId) {
            this.selectedGalleryImage = galleryId;
        },

        saveImage() {
            if (!this.selectedGalleryImage) {
                this.errorNotification('Please select an image');
                return;
            }

            const formData = new FormData();
            formData.append('category_detail_id', this.selectedDetail.id);
            formData.append('gallery_id', this.selectedGalleryImage);

            this.axios.post('/api/v1/category-detail/'+this.selectedDetail.id+'/image', formData)
                .then(response => {
                    this.addImageModel = false;
                    this.successNotification(response.data.message);
                    this.refreshDetailContent();
                })
                .catch(error => {
                    this.errorNotification(error.response?.data?.message || 'Error occurred');
                });
        },

        removeImage(imageId) {
            this.deleteType = 'image';
            this.deleteId = imageId;
            this.deleteDialog = true;
        },

        // Utility methods
        editBtn(id) {
            const item = this.items.find(item => item.id === id);
            if (item) {
                this.editPostData = {
                    id: item.id,
                    category_id: item.category_id,
                    title: item.title,
                    banner_image: item.banner_image,
                    description: item.description,
                    status: item.status ? 1 : 0
                };
                this.editDetailModel = true;
            }
        },

        deleteBtn(id) {
            this.deleteType = 'detail';
            this.deleteId = id;
            this.deleteDialog = true;
        },

        confirmDelete() {
            let deleteUrl = '';

            switch (this.deleteType) {
                case 'detail':
                    deleteUrl = `/api/v1/delete/category-detail/${this.deleteId}`;
                    break;
                case 'accordion':
                    deleteUrl = `/api/v1/category-detail/${this.selectedDetail.id}/accordion/${this.deleteId}`;
                    break;
                case 'video':
                    deleteUrl = `/api/v1/category-detail/${this.selectedDetail.id}/video/${this.deleteId}`;
                    break;
                case 'image':
                    deleteUrl = `/api/v1/category-detail/${this.selectedDetail.id}/image/${this.deleteId}`;
                    break;
            }

            this.axios.delete(deleteUrl)
                .then(response => {
                    this.deleteDialog = false;
                    this.successNotification(response.data.message);

                    if (this.deleteType === 'detail') {
                        this.getCategoryDetails();
                    } else {
                        this.refreshDetailContent();
                    }
                })
                .catch(error => {
                    this.deleteDialog = false;
                    this.errorNotification(error.response?.data?.message || 'Error occurred');
                });
        },

        handleBannerUpload(event, formType) {
            const file = event.target.files[0];
            if (file) {
                if (formType === 'add') {
                    this.addPostData.bannerFile = file;
                } else if (formType === 'edit') {
                    this.editPostData.bannerFile = file;
                }
            }
        },

        getImageUrl(imagePath) {
            return `/public/storage/${imagePath}`;
        },

        refreshDetailContent() {
            // Refresh the selected detail with updated content
            this.axios.get(`/api/v1/get/category-detail/${this.selectedDetail.id}`)
                .then(response => {
                    this.selectedDetail = response.data.data;
                    this.getCategoryDetails(); // Also refresh the main list
                })
                .catch(error => {
                    console.log(error.response?.data);
                });
        },

        resetAddForm() {
            this.addPostData = {
                category_id: this.categoryId ? parseInt(this.categoryId) : null,
                title: null,
                banner_image: null,
                description: null,
                accordions: [],
                status: 1
            };
            // Destroy all editors
            for (let editorId in this.editors) {
                if (this.editors[editorId]) {
                    delete this.editors[editorId];
                }
            }
        },

        initializeEditor(containerId, content = '', index = null, formType = null) {
            this.$nextTick(() => {
                const container = document.getElementById(containerId);
                if (container) {
                    // Clear any existing editor
                    if (this.editors[containerId]) {
                        delete this.editors[containerId];
                        container.innerHTML = '';
                    }

                    const quill = new Quill(`#${containerId}`, {
                        theme: 'snow',
                        modules: {
                            toolbar: [
                                ['bold', 'italic', 'underline', 'strike'],
                                ['blockquote', 'code-block'],
                                [{ 'header': 1 }, { 'header': 2 }],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                [{ 'script': 'sub'}, { 'script': 'super' }],
                                [{ 'indent': '-1'}, { 'indent': '+1' }],
                                [{ 'direction': 'rtl' }],
                                [{ 'size': ['small', false, 'large', 'huge'] }],
                                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                [{ 'color': [] }, { 'background': [] }],
                                [{ 'font': [] }],
                                [{ 'align': [] }],
                                ['clean'],
                                ['link', 'image']
                            ]
                        }
                    });

                    if (content) {
                        quill.root.innerHTML = content;
                    }

                    // Store editor reference
                    this.editors[containerId] = quill;

                    // Set up proper event handlers
                    if (containerId === 'accordion-editor') {
                        this.currentAccordionEditor = quill;
                    } else if (formType === 'add' && index !== null) {
                        // Real-time sync for add form accordions
                        quill.on('text-change', () => {
                            if (this.addPostData.accordions[index]) {
                                this.addPostData.accordions[index].answer = quill.root.innerHTML;
                            }
                        });

                        // Also sync on blur to ensure content is captured
                        quill.on('selection-change', (range) => {
                            if (!range && this.addPostData.accordions[index]) {
                                this.addPostData.accordions[index].answer = quill.root.innerHTML;
                            }
                        });
                    }
                }
            });
        },

        // Notification methods (assuming these are mixed in)
        successNotification(message) {
            this.$vs.notification({
                color: 'success',
                title: 'Success',
                text: message
            });
        },

        errorNotification(message) {
            this.$vs.notification({
                color: 'danger',
                title: 'Error',
                text: message
            });
        },

        // Block loading method (assuming this is mixed in)
        block(elementId) {
            return {
                close: () => {
                    // Loading close logic
                }
            };
        }
    },

    mounted() {
        this.getCategoryDetails();
        this.getCategories();
        this.getGalleryItems();
    },

    beforeDestroy() {
        // Clean up editors
        for (let editorId in this.editors) {
            if (this.editors[editorId]) {
                delete this.editors[editorId];
            }
        }
    }
}
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}

.editor-container {
    min-height: 150px;
}

.nav-tabs .nav-link {
    color: #525f7f;
}

.nav-tabs .nav-link.active {
    color: #5e72e4;
    border-color: #5e72e4;
}

.card {
    box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
}

.badge {
    font-size: 0.75rem;
}

.table th {
    border-top: none;
    font-weight: 600;
    color: #8898aa;
}

.footer-dialog {
    padding: 1rem 0;
}

@media (max-width: 768px) {
    .col-md-4 {
        margin-bottom: 1rem;
    }

    .btn-sm {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
    }
}
</style>
