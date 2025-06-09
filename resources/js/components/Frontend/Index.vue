<template>
    <div>
          <section class="bg-white pb-5 position-relative">
    <div id="olopoCarousel" class="carousel slide" data-bs-ride="carousel">

      <!-- Carousel indicators -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#olopoCarousel" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#olopoCarousel" data-bs-slide-to="1" class="active" aria-current="true"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#olopoCarousel" data-bs-slide-to="2" class="active" aria-current="true"
          aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#olopoCarousel" data-bs-slide-to="3" class="active" aria-current="true"
          aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#olopoCarousel" data-bs-slide-to="4" class="active" aria-current="true"
          aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#olopoCarousel" data-bs-slide-to="5" class="active" aria-current="true"
          aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#olopoCarousel" data-bs-slide-to="6" class="active" aria-current="true"
          aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#olopoCarousel" data-bs-slide-to="7" class="active" aria-current="true"
          aria-label="Slide 8"></button>
        <!-- Add more buttons as needed -->
      </div>

      <!--  Carousel images -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/theme/frontend/assets/images/banner/1.jpg" class="d-block w-100" alt="Olopo Banner">
        </div>
        <div class="carousel-item ">
          <img src="/theme/frontend/assets/images/banner/2.jpg" class="d-block w-100" alt="Olopo Banner">
        </div>
        <div class="carousel-item ">
          <img src="/theme/frontend/assets/images/banner/3.jpg" class="d-block w-100" alt="Olopo Banner">
        </div>
        <div class="carousel-item ">
          <img src="/theme/frontend/assets/images/banner/4.jpg" class="d-block w-100" alt="Olopo Banner">
        </div>
        <div class="carousel-item ">
          <img src="/theme/frontend/assets/images/banner/5.jpg" class="d-block w-100" alt="Olopo Banner">
        </div>
        <div class="carousel-item ">
          <img src="/theme/frontend/assets/images/banner/6.jpg" class="d-block w-100" alt="Olopo Banner">
        </div>
        <div class="carousel-item ">
          <img src="/theme/frontend/assets/images/banner/7.jpg" class="d-block w-100" alt="Olopo Banner">
        </div>
        <div class="carousel-item ">
          <img src="/theme/frontend/assets/images/banner/8.jpg" class="d-block w-100" alt="Olopo Banner">
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#olopoCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#olopoCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>


  <!-- <section class="usersection-buttons">
    <button class="button selected">OLOPO USER APP</button>
    <button class="button border-top-only" disabled>MERCHANT APP</button>
    <button class="button border-top-only" disabled>FRANCHISE</button>
  </section> -->

  <section class="category-section">
    <div class="container-fluid">
      <!-- First row of categories -->
      <div class="category-row">

        <div class="category-item" v-for="category in categories" :key="category.id">
            <a :href="`/categories/${category.id}`" class="category-link">
                <img :src="`/storage/${category.icon}`" :alt="category.title" class="category-icon">
                <button class="category-button filled">{{ category.title }}</button>
            </a>
        </div>
      </div>

      <!-- Second row of categories -->
      <!-- <div class="category-row">
        <div class="category-item">
          <a href="/categories/1" class="category-link">
            <img src="/theme/frontend/assets/images/gif/6.gif" alt="Coupons Icon" class="category-icon">
            <button class="category-button">Coupons</button>
          </a>
        </div>

        <div class="category-item">
          <a href="/categories/1" class="category-link">
            <img src="/theme/frontend/assets/images/gif/7.gif" alt="Movies Icon" class="category-icon">
            <button class="category-button">Movies</button>
          </a>
        </div>

        <div class="category-item">
          <a href="/categories/1" class="category-link">
            <img src="/theme/frontend/assets/images/gif/8.gif" alt="Scratch Card Icon" class="category-icon">
            <button class="category-button">Scratch Card</button>
          </a>
        </div>

        <div class="category-item">
          <a href="/categories/1" class="category-link">
            <img src="/theme/frontend/assets/images/gif/9.gif" alt="Events Icon" class="category-icon">
            <button class="category-button">Events</button>
          </a>
        </div>
      </div> -->
    </div>
  </section>

  <section class="mt-1 mb-5 mx-6">

    <div class="info-buttons">
      <a href="/leaderboard">
        <button class="info-button">
          <img src="/theme/frontend/assets/images/category/user-leaderboard.png" alt="User Leaderboard" />
          <!-- <span>User Leaderboard</span> -->
        </button>
      </a>
      <a href="/movies">
        <button class="info-button">
          <img src="/theme/frontend/assets/images/category/movie-updates.png" alt="Movie updates" />
          <!-- <span>Movie updates</span> -->
        </button>
      </a>
      <a href="/events">
        <button class="info-button">
          <img src="/theme/frontend/assets/images/category/event-updates.png" alt="Event updates" />
          <!-- <span>Event updates</span> -->
        </button>
      </a>
    </div>
  </section>


  <section class="brand-section mx-5">
    <h2>Explore the Brands<br>and Offers</h2>
    <p class="subtitle">you can access all brands and customized offers near you</p>

  </section>

  <div class="section ">
    <div class="section-header">
      <h2 class="section-title">Gift Vouchers</h2>
      <a href="/gift-vouchers" class="view-all-btn">View All</a>
    </div>

    <div class="card-grid card-grid-gift">
    </div>
  </div>

  <!-- Merchant Vouchers Section -->
  <div class="section">
    <div class="section-header">
      <h2 class="section-title">Merchant Vouchers</h2>
      <!-- <a href="/merchant-vouchers" class="view-all-btn">View All</a> -->
    </div>

    <div class="card-grid justify-center">
      <h6>No Vouchers Found</h6>
    </div>
  </div>
    </div>
</template>
<script>
export default {
    name: "FrontendIndex",
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        this.getCategories();
    },
    methods: {
        getCategories() {
            this.axios.get("/api/v1/categories")
                .then(response => {
                    this.categories = response.data.data;
                })
                .catch(error => {
                    console.log(error.response?.data);
                });
        }
    }
}
</script>
