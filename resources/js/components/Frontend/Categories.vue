<template>
<div>
    <section class="bg-white pb-5 position-relative container mt-4 shoping-section">
        <div class="row ">
            <div class="col-12 text-center">
                <!-- <h1 class="mt-5"></h1> -->
                <h2 class="mt-3" v-if="categoryDetails && categoryDetails.title">
                    {{ categoryDetails.title }}</h2>
            </div>
            <div class="col-12 text-center my-4" v-if="categoryDetails && categoryDetails.banner_image">
                <img :src="`/public/storage/${categoryDetails.banner_image}`" alt="Shopping" class="img-fluid" />
            </div>
        </div>
        <p v-if="categoryDetails && categoryDetails.description">{{ categoryDetails.description }}</p>
    </section>


    <section class="" v-if="categoryDetails && categoryDetails.accordions && categoryDetails.accordions.length > 0">
        <div class="container mt-5">
            <div class="accordion-item" v-for="(item, index) in categoryDetails.accordions" :key="item.id">
                <h2 class="accordion-header" :id="'heading' + item.id">
                    <button class="accordion-button collapsed faq-button" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#collapse' + item.id" aria-expanded="false" :aria-controls="'collapse' + item.id">
                        <span class="faq-question">{{ item.question }}</span>
                        <span class="faq-toggle">Show more
                            <i class="bi bi-chevron-down arrow-icon"></i>
                        </span>
                    </button>
                </h2>
                <div :id="'collapse' + item.id" class="accordion-collapse collapse" :aria-labelledby="'heading' + item.id"
                    data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        <div v-html="item.answer"></div>
                    </div>
                </div>
            </div>
        </div>

    </section>


    <section class="" v-if="categoryDetails && categoryDetails.videos && categoryDetails.videos.length > 0">
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="(video, index) in categoryDetails.videos" :key="video.id">
                    <div class="video-card">
                        <div class="video-thumbnail" @click="playVideo($event)">
                            <video preload="metadata" height="100%" muted>
                                <source :src="`/public/storage/${video.video_path}`" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="play-button-overlay">
                                <div class="play-icon"></div>
                            </div>
                        </div>
                        <div class="video-info">
                            <h5 class="video-heading">{{ video.title }}</h5>
                            <p class="video-duration">Duration: {{ video.duration || '0.39min' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="" v-if="categoryDetails && categoryDetails.images && categoryDetails.images.length > 0">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-4 col-lg-3 mb-4" v-for="(image, index) in categoryDetails.images" :key="image.id">
                    <a href="/gallery">
                        <div class="image-card">
                            <img
                                :src="`/public/storage/${image.gallery.image_path}`"
                                :alt="image.title"
                                class="img-fluid category-image"
                            />
                            <div class="image-title mt-2 text-center">{{ image.title }}</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
export default {
    name: "Categories",
    data() {
        return {
            categoryId: this.$route.params.id,
            categoryDetails: null
        };
    },
    mounted() {
        console.log("Category ID:", this.categoryId);
        this.getCategoryDetails();
        // Now you can use the id variable as needed
    },
    methods: {
        getCategoryDetails() {
            this.axios.get(`/api/v1/category-details/${this.categoryId}`)
                .then(response => {
                    // Handle the response data
                    // Check if response.data.data is an array and get the first item
                    if (Array.isArray(response.data.data) && response.data.data.length > 0) {
                        this.categoryDetails = response.data.data[0];
                    } else {
                        this.categoryDetails = response.data.data;
                    }
                    console.log("Category Details:", this.categoryDetails);
                })
                .catch(error => {
                    console.error("Error fetching category details:", error.response?.data);
                });
        },
        playVideo(event) {
            // Add your video play logic here
            const video = event.currentTarget.querySelector('video');
            if (video) {
                video.play();
            }
        }
    }
}
</script>
