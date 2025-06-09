<template>
    <div>
        <div class="header bg-primary pb-6">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-center py-4">
                        <div class="col-lg-6 col-7">
                            <h6 class="h2 text-white d-inline-block mb-0">Categories</h6>
                        </div>
                        <div class="col-lg-6 col-5 text-right">
                            <a href="#" class="btn btn-sm btn-neutral" @click="addCategoryModel=!addCategoryModel">New Category</a>
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
                                    <h3 class="mb-0">Categories</h3>
                                </div>
                            </div>
                        </div>

                        <!-- Light table -->
                        <div class="table-responsive" id="categoryLoading">
                            <table class="table align-items-center table-flush">
                                <thead class="thead-light">
                                <tr>
                                    <th scope="col" class="sort">Title</th>
                                    <th scope="col" class="sort">Icon</th>
                                    <th scope="col" class="sort">Status</th>
                                    <th scope="col" class="sort">Details Count</th>
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
                                        <img v-if="item.icon" :src="getImageUrl(item.icon)" class="img-fluid" style="max-width: 50px; max-height: 50px;" />
                                        <span v-else>No Icon</span>
                                    </td>
                                    <td>
                                        <span class="badge badge-dot mr-4">
                                            <i class="bg-success" v-if="item.status"></i>
                                            <i class="bg-danger" v-else></i>
                                            <span class="status">{{ item.status ? 'Active' : 'Inactive' }}</span>
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <span class="completion mr-2">{{ item.category_details ? item.category_details.length : 0 }}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div style="display: inline-flex">
                                            <div>
                                                <button class="btn btn-info btn-sm mr-2" @click="viewDetails(item.id)">
                                                    <i class="fas fa-eye"></i>
                                                    <span><strong>Details</strong></span>
                                                </button>
                                                <button class="btn btn-primary btn-sm mr-2" @click="editBtn(item.id)">
                                                    <i class="far fa-edit"></i>
                                                    <span><strong>Edit</strong></span>
                                                </button>
                                                <button href="#" class="btn btn-danger btn-sm"
                                                        @click="deleteBtn(item.id)">
                                                    <i class="fas fa-trash-alt"></i>
                                                    <span><strong>Delete</strong></span>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                                <tbody v-if="dataNotFound">
                                <tr class="text-center">
                                    <td colspan="5">No Data Display</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Category Modal -->
        <vs-dialog v-model="addCategoryModel" prevent-close blur>
            <template #header>
                <h4 class="not-margin">
                    Add New <b>Category</b>
                </h4>
            </template>
            <form v-on:submit.prevent="addCategory()" id="addCategoryForm">
                <div class="form-group">
                    <label class="form-control-label">Category Title</label>
                    <input class="form-control" placeholder="Title" v-model="addPostData.title"/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Icon</label>
                    <input class="form-control" type="file" @change="handleIconUpload($event, 'add')" accept="image/*"/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Status</label>
                    <select class="form-control" v-model="addPostData.status">
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select>
                </div>
                <div class="footer-dialog text-center">
                    <button class="btn btn-primary" type="submit">Add Category</button>
                </div>
            </form>
        </vs-dialog>

        <!-- Edit Category Modal -->
        <vs-dialog v-model="editCategoryModel" prevent-close blur>
            <template #header>
                <h4 class="not-margin">
                    Edit <b>Category</b>
                </h4>
            </template>
            <form v-on:submit.prevent="updateCategory()" id="editCategoryForm">
                <div class="form-group">
                    <label class="form-control-label">Category Title</label>
                    <input class="form-control" placeholder="Title" v-model="editPostData.title"/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Current Icon</label>
                    <div v-if="editPostData.icon">
                        <img :src="getImageUrl(editPostData.icon)" class="img-fluid mb-2" style="max-width: 100px; max-height: 100px;" />
                    </div>
                    <input class="form-control" type="file" @change="handleIconUpload($event, 'edit')" accept="image/*"/>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Status</label>
                    <select class="form-control" v-model="editPostData.status">
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select>
                </div>
                <div class="footer-dialog text-center">
                    <button class="btn btn-primary" type="submit">Update Category</button>
                </div>
            </form>
        </vs-dialog>

        <!-- Delete Confirmation Modal -->
        <vs-dialog width="550px" not-center v-model="deleteDialog">
            <template #header>
                <h4 class="not-margin">
                    <b>Are you sure?</b>
                </h4>
            </template>
            <div class="con-content">
                <p>Are you sure you want to Delete this category?</p>
            </div>
            <template #footer>
                <div class="con-footer">
                    <button class="btn btn-primary" @click="deleteCategory()">
                        Ok
                    </button>
                    <button class="btn btn-light" @click="deleteDialog=false">
                        Cancel
                    </button>
                </div>
            </template>
        </vs-dialog>
    </div>
</template>

<script>
export default {
    name: "Categories",
    data() {
        return {
            addPostData: {
                title: null,
                icon: null,
                status: 1
            },
            editPostData: {
                id: null,
                title: null,
                icon: null,
                status: 1
            },
            deletePostData: {
                id: null
            },
            items: [],
            addCategoryModel: false,
            editCategoryModel: false,
            deleteDialog: false,
            dataNotFound: false
        }
    },
    methods: {
        getCategories() {
            let loading = this.block("categoryLoading");
            this.axios.get("/api/v1/categories")
                .then(response => {
                    this.items = response.data.data;
                    loading.close();
                    this.dataNotFound = false;
                })
                .catch(error => {
                    this.items = [];
                    console.log(error.response.data);
                    this.dataNotFound = true;
                    loading.close();
                });
        },

        addCategory() {
            let Loading = this.block("addCategoryForm");
            const formData = new FormData();
            formData.append('title', this.addPostData.title);
            formData.append('status', this.addPostData.status);
            if (this.addPostData.icon) {
                formData.append('icon', this.addPostData.icon);
            }

            this.axios.post('/api/v1/add/category', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    if (response.data.status === true) {
                        this.resetAddForm();
                        Loading.close();
                        this.addCategoryModel = false;
                        this.getCategories();
                        this.successNotification(response.data.message);
                    } else {
                        this.errorNotification(response.data.message);
                        Loading.close();
                    }
                })
                .catch(error => {
                    this.errorNotification(error.response.data.message);
                    Loading.close();
                });
        },

        updateCategory() {
            let Loading = this.block("editCategoryForm");
            const formData = new FormData();
            formData.append('_method', 'PUT');
            formData.append('title', this.editPostData.title);
            formData.append('status', this.editPostData.status);
            if (this.editPostData.iconFile) {
                formData.append('icon', this.editPostData.iconFile);
            }

            this.axios.post(`/api/v1/update/category/${this.editPostData.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    this.editCategoryModel = false;
                    this.successNotification(response.data.message);
                    Loading.close();
                    this.getCategories();
                })
                .catch(error => {
                    this.editCategoryModel = false;
                    this.errorNotification(error.response.data.message);
                    Loading.close();
                });
        },

        deleteBtn(id) {
            if (id == '') {
                this.errorNotification("Something went wrong..");
            }
            this.deleteDialog = true;
            this.deletePostData.id = id;
        },

        deleteCategory() {
            let Loading = this.block("deleteLoading");
            this.axios.delete("/api/v1/delete/category/" + this.deletePostData.id)
                .then(response => {
                    if (response.data.status === true) {
                        this.deleteDialog = false;
                        this.successNotification(response.data.message);
                        this.getCategories();
                        Loading.close();
                    } else {
                        this.deleteDialog = false;
                        this.errorNotification(response.data.message);
                        Loading.close();
                    }
                })
                .catch(error => {
                    this.deleteDialog = false;
                    Loading.close();
                    this.errorNotification(error.response.data.message);
                });
        },

        editBtn(id) {
            this.editPostData.id = id;
            this.editCategoryModel = true;
            this.axios.get("/api/v1/get/category/" + id)
                .then(response => {
                    let item = response.data.data;
                    this.editPostData.title = item.title;
                    this.editPostData.icon = item.icon;
                    this.editPostData.status = item.status ? 1 : 0;
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },

        viewDetails(categoryId) {
            this.$router.push({ name: 'category-details', params: { categoryId: categoryId } });
        },

        handleIconUpload(event, type) {
            const file = event.target.files[0];
            if (file) {
                if (type === 'add') {
                    this.addPostData.icon = file;
                } else {
                    this.editPostData.iconFile = file;
                }
            }
        },

        resetAddForm() {
            this.addPostData = {
                title: null,
                icon: null,
                status: 1
            };
            document.getElementById("addCategoryForm").reset();
        },

        getImageUrl(path) {
            return `/storage/${path}`;
        }
    },

    mounted() {
        this.getCategories();
    }
}
</script>

<style>
.btn i:not(:last-child), .btn svg:not(:last-child) {
    margin-right: unset;
}
</style>
