<template>
<div>
    <section class="bg-white pb-5 position-relative container mt-4 shoping-section">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="mt-3">Gallery</h2>
            </div>
        </div>
    </section>

    <section class="container mt-5" v-if="galleryImages && galleryImages.length > 0">
        <div class="row justify-content-center">
            <div class="col-md-4 col-lg-3 mb-4" v-for="(image, index) in galleryImages" :key="image.id">
                <div class="image-card" @click="openImageModal(image, index)">
                    <img
                        :src="`/public/storage/${image.image_path}`"
                        :alt="image.title"
                        class="img-fluid category-image"
                    />
                    <div class="image-title mt-2 text-center">{{ image.title }}</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Image Modal -->
    <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true" ref="imageModal">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ selectedImage?.title || 'Image' }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center p-0">
                    <img
                        v-if="selectedImage"
                        :src="`/public/storage/${selectedImage.image_path}`"
                        :alt="selectedImage.title"
                        class="img-fluid w-100"
                    />
                </div>
                <div class="modal-footer justify-content-between">
                    <div>
                        <button class="btn btn-outline-secondary" @click="previousImage" :disabled="currentImageIndex <= 0">
                            Previous
                        </button>
                        <button class="btn btn-outline-secondary ms-2" @click="nextImage" :disabled="currentImageIndex >= galleryImages.length - 1">
                            Next
                        </button>
                    </div>
                    <div>
                        <small class="text-muted">{{ currentImageIndex + 1 }} of {{ galleryImages.length }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Gallery",
    data() {
        return {
            galleryImages: null,
            selectedImage: null,
            currentImageIndex: 0
        };
    },
    mounted() {
        this.getGalleryImages();
    },
    methods: {
        getGalleryImages() {
            this.axios.get('/api/v1/gallery')
                .then(response => {
                    // Handle the response data
                    if (Array.isArray(response.data.data) && response.data.data.length > 0) {
                        this.galleryImages = response.data.data;
                    } else {
                        this.galleryImages = response.data.data;
                    }
                    console.log("Gallery Images:", this.galleryImages);
                })
                .catch(error => {
                    console.error("Error fetching gallery images:", error.response?.data);
                });
        },
        openImageModal(image, index) {
            this.selectedImage = image;
            this.currentImageIndex = index;

            // Bootstrap 5 modal
            const modal = new bootstrap.Modal(this.$refs.imageModal);
            modal.show();
        },
        nextImage() {
            if (this.currentImageIndex < this.galleryImages.length - 1) {
                this.currentImageIndex++;
                this.selectedImage = this.galleryImages[this.currentImageIndex];
            }
        },
        previousImage() {
            if (this.currentImageIndex > 0) {
                this.currentImageIndex--;
                this.selectedImage = this.galleryImages[this.currentImageIndex];
            }
        }
    }
}
</script>

<style scoped>
.image-card {
    cursor: pointer;
    transition: transform 0.3s ease;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.image-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.category-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.image-title {
    padding: 10px;
    font-weight: 500;
    color: #333;
}

.modal-body img {
    max-height: 70vh;
    object-fit: contain;
}
</style>
