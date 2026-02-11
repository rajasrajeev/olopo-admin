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

<section class="olopo-app-section mt-3 mb-5 mx-6">
  <div class="olopo-box">
    <h2>Why juggle so many apps when one app can do it all?</h2>

    <p class="lead">
      With the <strong>OLOPO App</strong>, you can handle online & offline shopping,
      events, movies, travel, and more — all from one trusted platform.
    </p>

    <p>
      I personally use <strong>OLOPO</strong>. It has helped me save more money
      and even earn a second income. That’s why I genuinely believe this can help you too.
    </p>

    <div class="offer-box">
      <p class="offer-title">🎯 Limited-Time Opportunity</p>
      <ul>
        <li>⏳ Refer 10 people within 7 days to enter the OLOPO Customer Club</li>
        <li>🎁 Get ₹5,000 cashback rewards for shopping</li>
        <li>💰 Chance to win ₹25 Lakhs in cash</li>
      </ul>

      <!-- <p class="ref-code">
        👉 Use my referral code: <strong>SEB7594</strong>
      </p> -->
    </div>

    <div class="store-buttons">
      <a href="https://play.google.com/store/apps/details?id=com.wac.olopouser"
         target="_blank"
         class="store-btn android">
        Get it on Google Play
      </a>

      <a href="https://apps.apple.com/app/id6651817861"
         target="_blank"
         class="store-btn ios">
        Download on App Store
      </a>
    </div>
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
<style>
.olopo-app-section {
  background: #f8f9fb;
  border-radius: 20px;
}

.olopo-box {
  max-width: 900px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;
}

.olopo-box h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
}

.olopo-box .lead {
  font-size: 18px;
  margin-bottom: 15px;
}

.olopo-box p {
  font-size: 16px;
  color: #555;
}

.offer-box {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  margin: 25px 0;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  text-align: left;
}

.offer-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.offer-box ul {
  padding-left: 18px;
  margin: 10px 0;
}

.offer-box li {
  margin-bottom: 8px;
}

.ref-code {
  margin-top: 12px;
  font-size: 17px;
}

.store-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
  flex-wrap: wrap;
}

.store-btn {
  padding: 14px 22px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  transition: all 0.25s ease;
  box-shadow: 0 8px 18px rgba(0,0,0,0.15);
}

.store-btn.android {
  background: linear-gradient(135deg, #34a853, #0f9d58);
}

.store-btn.ios {
  background: linear-gradient(135deg, #000000, #444444);
}

.store-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.25);
}

.more-link {
  margin-top: 20px;
  font-size: 15px;
}

/* Mobile */
@media (max-width: 768px) {
  .olopo-box h2 {
    font-size: 22px;
  }

  .olopo-box .lead {
    font-size: 16px;
  }

  .store-btn {
    width: 100%;
    justify-content: center;
  }
}


</style>