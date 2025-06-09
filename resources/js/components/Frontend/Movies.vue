<template>
<section class="movie-section">
      <div class=" d-flex justify-content-evenly mx-2">
        <div class="">
          <h1 class="mt-4">RedCarpet</h1>
        </div>
        <div class="coin-badge d-flex align-items-center">
          <span>2000</span>
          <i class="bi bi-award-fill ms-1 text-warning"></i>
        </div>
      </div>

      <!-- Movie Grid -->
      <div class="container py-4">
        <div class="row g-3">
          <!-- Movie 1 -->
          <div class="col-md-3">
            <div class="card movie-card">
              <img src="/theme/frontend/assets/images/movie/poster1.webp" alt="Movie 1" />
              <div class="p-2">
                <h6 class="mb-1">Officer On Duty</h6>
                <div class="d-flex justify-content-between small">
                  <span class="rating">★ 8.9</span>
                  <span>31.7k Votes</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Movie 2 -->
          <div class="col-md-3">
            <div class="card movie-card">
              <img src="/theme/frontend/assets/images/movie/poster2.webp" alt="Movie 2" />
              <div class="p-2">
                <h6 class="mb-1">L2: Empuraan</h6>
                <div class="d-flex justify-content-between small">
                  <span class="rating">★ 9.2</span>
                  <span>52.7k Votes</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Movie 3 -->
          <div class="col-md-3">
            <div class="card movie-card">
              <img src="/theme/frontend/assets/images/movie/poster3.webp" alt="Movie 3" />
              <div class="p-2">
                <h6 class="mb-1">PonMan</h6>
                <div class="d-flex justify-content-between small">
                  <span class="rating">★ 8.1</span>
                  <span>21.7k Votes</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Movie 4 -->
          <div class="col-md-3">
            <div class="card movie-card">
              <img src="/theme/frontend/assets/images/movie/poster2.webp" alt="Movie 2" />
              <div class="p-2">
                <h6 class="mb-1">L2: Empuraan</h6>
                <div class="d-flex justify-content-between small">
                  <span class="rating">★ 9.2</span>
                  <span>52.7k Votes</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Movie 5 -->
          <div class="col-md-3">
            <div class="card movie-card">
              <img src="/theme/frontend/assets/images/movie/poster2.webp" alt="Movie 2" />
              <div class="p-2">
                <h6 class="mb-1">L2: Empuraan</h6>
                <div class="d-flex justify-content-between small">
                  <span class="rating">★ 9.2</span>
                  <span>52.7k Votes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
</template>
<script>
export default {
    name: "Movies",
    mounted() {
    }
}
</script>
