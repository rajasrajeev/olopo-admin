<template>
  <div class="section">
    <div class="section-header">
      <h2 class="section-title">Gift Vouchers</h2>
    </div>

    <!-- Products Grid -->
    <div class="card-grid card-grid-gift">
      <div
        v-for="product in paginatedProducts"
        :key="product._id"
        class="brand-card"
      >
        <div class="image-wrapper">
          <img
            :src="product.images?.mobile || fallbackImage"
            :alt="product.name"
          />
        </div>

        <div class="brand-info">
          <h4>{{ product.name }}</h4>
          <p>SKU: {{ product.sku }}</p>
        </div>
      </div>
    </div>

    <!-- Pagination (Only on /gift-vouchers) -->
    <div
      v-if="isGiftVoucherPage && totalPages > 1"
      class="pagination-controls text-center mt-4"
    >
      <button
        class="btn btn-outline-primary"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        Previous
      </button>

      <span class="mx-3">
        Page {{ currentPage }} of {{ totalPages }}
      </span>

      <button
        class="btn btn-outline-primary"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gift",

  data() {
    return {
      baseUrl: "https://gifts.dev.olopo.app",
      authToken: null,
      categoryId: null,

      allProducts: [], // 👈 store full dataset here
      currentPage: 1,
      productsPerPage: 20,

      fallbackImage:
        "assets/images/brands/new-smartphones-stand-row-showcase-store 1.png",
    };
  },

  computed: {
    isGiftVoucherPage() {
      return this.$route.path.replace(/\/$/, "") === "/gift-vouchers";
    },

    totalPages() {
      return Math.ceil(this.allProducts.length / this.productsPerPage);
    },

    paginatedProducts() {
      // 🏠 Home → only first 4
      if (!this.isGiftVoucherPage) {
        return this.allProducts.slice(0, 4);
      }

      // 🎁 Gift vouchers → paginate
      const start = (this.currentPage - 1) * this.productsPerPage;
      const end = start + this.productsPerPage;

      return this.allProducts.slice(start, end);
    },
  },

  methods: {
    async authenticate() {
      const response = await fetch(`${this.baseUrl}/admin-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: "info@olopo.app",
          password: "olopo@123",
        }),
      });

      const data = await response.json();
      this.authToken = data.token;
    },

    async fetchCategory() {
      const response = await fetch(
        `${this.baseUrl}/mobile-get/categories`,
        {
          headers: {
            Authorization: `Bearer ${this.authToken}`,
          },
        }
      );

      const data = await response.json();
      this.categoryId = data.data[0]?.id;
    },

    async fetchProducts() {
      const response = await fetch(
        `${this.baseUrl}/mobile-get/categories/${this.categoryId}/products`,
        {
          headers: {
            Authorization: `Bearer ${this.authToken}`,
          },
        }
      );

      const data = await response.json();

      // 👇 Store ALL products
      this.allProducts = data.data.products || [];
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    async initialize() {
      await this.authenticate();
      await this.fetchCategory();
      await this.fetchProducts();
    },
  },

  watch: {
    "$route.path"() {
      this.currentPage = 1; // reset page when route changes
    },
  },

  mounted() {
    this.initialize();
  },
};
</script>
