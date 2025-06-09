<template>
    <div>
        <div class="header bg-primary pb-6">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-center py-4">
                        <div class="col-lg-6 col-7">
                            <h6 class="h2 text-white d-inline-block mb-0">Gallery</h6>
                        </div>
                        <div class="col-lg-6 col-5 text-right">
                            <a href="#" class="btn btn-sm btn-neutral" @click="addGalleryModel=!addGalleryModel">Upload Image</a>
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
                                    <h3 class="mb-0">Gallery Images</h3>
                                </div>
                            </div>
                        </div>

                        <!-- Gallery Grid -->
                        <div class="card-body" id="galleryLoading">
                            <div class="row" v-if="!dataNotFound">
                                <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="item in items" :key="item.id">
                                    <div class="card shadow">
                                        <div class="position-relative">
                                            <img :src="getImageUrl(item.image_path)" class="card-img-top" style="height: 200px; object-fit: cover;" :alt="item.alt_text" />
                                            <div class="position-absolute" style="top: 10px; right: 10px;">
                                                <span class="badge" :class="item.status ? 'badge-success' : 'badge-danger'">
                                                    {{ item.status ? 'Active' : 'Inactive' }}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="card-body p-3">
                                            <h6 class="card-title mb-2">{{ item.title }}</h6>
                                            <p class="card-text text-sm text-muted" v-if="item.description">
                                                {{ item.description.substring(0, 80) }}{{ item.description.length > 80 ? '...' : '' }}
                                            </p>
                                            <div class="btn-group btn-group-sm w-100">
                                                <button class="btn btn-primary" @click="editBtn(item.id)">
                                                    <i class="far fa-edit"></i> Edit
                                                </button>
                                                <button class="btn btn-danger" @click="deleteBtn(item.id)">
                                                    <i class="fas fa-trash-alt"></i> Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="dataNotFound" class="text-center py-5">
                                <h5>No Images Found</h5>
                                <p>Upload some images to get started.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Gallery Modal -->
        <vs-dialog v-model="addGalleryModel" prevent-close blur>
            <template #header>
                <h4 class="not-margin">
                    Upload New <b>Image</b>
                </h4>
            </template>
            <form v-on:submit.prevent="addGallery()" id="addGalleryForm">
                <div class="form-group">
                    <label class="form-control-label">Title</label>
                    <input class="form-control" placeholder="Image Title" v-model="addPostData.title" required/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Image</label>
                    <input class="form-control" type="file" @change="handleImageUpload($event, 'add')" accept="image/*" required/>
                    <div v-if="addImagePreview" class="mt-2">
                        <img :src="addImagePreview" class="img-fluid" style="max-width: 200px; max-height: 200px;" />
                    </div>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Alt Text</label>
                    <input class="form-control" placeholder="Alt Text for SEO" v-model="addPostData.alt_text"/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Description</label>
                    <textarea class="form-control" rows="3" placeholder="Image Description" v-model="addPostData.description"></textarea>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Status</label>
                    <select class="form-control" v-model="addPostData.status">
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select>
                </div>
                <div class="footer-dialog text-center">
                    <button class="btn btn-primary" type="submit">Upload Image</button>
                </div>
            </form>
        </vs-dialog>

        <!-- Edit Gallery Modal -->
        <vs-dialog v-model="editGalleryModel" prevent-close blur>
            <template #header>
                <h4 class="not-margin">
                    Edit <b>Image</b>
                </h4>
            </template>
            <form v-on:submit.prevent="updateGallery()" id="editGalleryForm">
                <div class="form-group">
                    <label class="form-control-label">Title</label>
                    <input class="form-control" placeholder="Image Title" v-model="editPostData.title" required/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Current Image</label>
                    <div v-if="editPostData.image_path">
                        <img :src="getImageUrl(editPostData.image_path)" class="img-fluid mb-2" style="max-width: 200px; max-height: 200px;" />
                    </div>
                    <input class="form-control" type="file" @change="handleImageUpload($event, 'edit')" accept="image/*"/>
                    <div v-if="editImagePreview" class="mt-2">
                        <img :src="editImagePreview" class="img-fluid" style="max-width: 200px; max-height: 200px;" />
                    </div>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Alt Text</label>
                    <input class="form-control" placeholder="Alt Text for SEO" v-model="editPostData.alt_text"/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Description</label>
                    <textarea class="form-control" rows="3" placeholder="Image Description" v-model="editPostData.description"></textarea>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Status</label>
                    <select class="form-control" v-model="editPostData.status">
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select>
                </div>
                <div class="footer-dialog text-center">
                    <button class="btn btn-primary" type="submit">Update Image</button>
                </div>
            </form>
        </vs-dialog>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    data() {
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
        }
    },
    mounted() {
        this.fetchGalleryData();
    },
    methods: {
        fetchGalleryData() {
            // API call to fetch gallery items
            this.axios.get('/api/v1/gallery').then(response => {
                if (response.data.status) {
                    this.items = response.data.data;
                    this.dataNotFound = this.items.length === 0;
                } else {
                    this.dataNotFound = true;
                }
            }).catch(error => {
                console.error('Error fetching gallery data:', error);
                this.dataNotFound = true;
            });
        },

        getImageUrl(imagePath) {
            return imagePath ? `/storage/${imagePath}` : '/images/placeholder.jpg';
        },

        handleImageUpload(event, type) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (type === 'add') {
                        this.addImagePreview = e.target.result;
                        this.addPostData.image = file;
                    } else if (type === 'edit') {
                        this.editImagePreview = e.target.result;
                        this.editPostData.image = file;
                    }
                };
                reader.readAsDataURL(file);
            }
        },

        addGallery() {
            const formData = new FormData();
            formData.append('title', this.addPostData.title);
            formData.append('image_path', this.addPostData.image);
            formData.append('alt_text', this.addPostData.alt_text);
            formData.append('description', this.addPostData.description);
            formData.append('status', this.addPostData.status);

            this.axios.post('/api/v1/add/gallery', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.success) {
                    this.$vs.notification({
                        title: 'Success',
                        text: 'Image uploaded successfully!',
                        color: 'success'
                    });
                    this.addGalleryModel = false;
                    this.resetAddForm();
                    this.fetchGalleryData();
                } else {
                    this.$vs.notification({
                        title: 'Error',
                        text: response.data.message || 'Failed to upload image',
                        color: 'danger'
                    });
                }
            }).catch(error => {
                console.error('Error uploading image:', error);
                this.$vs.notification({
                    title: 'Error',
                    text: 'Failed to upload image',
                    color: 'danger'
                });
            });
        },

        editBtn(id) {
            const item = this.items.find(item => item.id === id);
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

        updateGallery() {
            const formData = new FormData();
            formData.append('_method', 'PUT');
            formData.append('title', this.editPostData.title);
            if (this.editPostData.image) {
                formData.append('image_path', this.editPostData.image);
            }
            formData.append('alt_text', this.editPostData.alt_text);
            formData.append('description', this.editPostData.description);
            formData.append('status', this.editPostData.status);

            this.axios.post(`/api/v1/update/gallery/${this.editPostData.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.success) {
                    this.$vs.notification({
                        title: 'Success',
                        text: 'Image updated successfully!',
                        color: 'success'
                    });
                    this.editGalleryModel = false;
                    this.resetEditForm();
                    this.fetchGalleryData();
                } else {
                    this.$vs.notification({
                        title: 'Error',
                        text: response.data.message || 'Failed to update image',
                        color: 'danger'
                    });
                }
            }).catch(error => {
                console.error('Error updating image:', error);
                this.$vs.notification({
                    title: 'Error',
                    text: 'Failed to update image',
                    color: 'danger'
                });
            });
        },

        deleteBtn(id) {
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: 'Delete Confirmation',
                text: 'Are you sure you want to delete this image?',
                accept: () => this.deleteGalleryItem(id),
                acceptText: 'Delete'
            });
        },

        deleteGalleryItem(id) {
            this.axios.delete(`/api/v1/delete/gallery/${id}`).then(response => {
                if (response.data.success) {
                    this.$vs.notification({
                        title: 'Success',
                        text: 'Image deleted successfully!',
                        color: 'success'
                    });
                    this.fetchGalleryData();
                } else {
                    this.$vs.notification({
                        title: 'Error',
                        text: response.data.message || 'Failed to delete image',
                        color: 'danger'
                    });
                }
            }).catch(error => {
                console.error('Error deleting image:', error);
                this.$vs.notification({
                    title: 'Error',
                    text: 'Failed to delete image',
                    color: 'danger'
                });
            });
        },

        resetAddForm() {
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

        resetEditForm() {
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
}
</script>

<style scoped>
.card {
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-2px);
}

.badge {
    font-size: 0.75rem;
}

.btn-group-sm .btn {
    font-size: 0.8rem;
}

.footer-dialog {
    padding: 1rem 0;
}

.mt--3 {
    margin-top: -0.5rem;
}

.mt--6 {
    margin-top: -6rem;
}

.not-margin {
    margin: 0;
}
</style>
