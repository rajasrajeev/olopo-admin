<template>
  <div class="section">
    <div class="section-header">
      <h2 class="section-title">Gift Vouchers</h2>
    </div>

    <!-- Products Grid -->
    <div class="card-grid card-grid-gift-">
      <div
        v-for="product in products"
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

    <!-- Pagination (ONLY on /gift-vouchers) -->
    <div
      v-if="isGiftVoucherPage"
      class="pagination-controls text-center mt-4"
    >
      <button
        class="btn btn-outline-primary"
        :disabled="currentPage === 1 || loading"
        @click="prevPage"
      >
        Previous
      </button>

      <span class="mx-3">
        Page {{ currentPage }}
      </span>

      <button
        class="btn btn-outline-primary"
        :disabled="!hasMoreProducts || loading"
        @click="nextPage"
      >
        Next
      </button>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center mt-3">
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  name: "Gift",

  data() {
    return {
      // API Config from your JS
      baseUrl: "https://gifts.dev.olopo.app",
      authToken: null,
      categoryId: null,

      products: [],
      currentPage: 1,
      productsPerPage: 20,
      hasMoreProducts: true,

      loading: false,
      fallbackImage:
        "assets/images/brands/new-smartphones-stand-row-showcase-store 1.png",
    };
  },

  computed: {
    isGiftVoucherPage() {
      return this.$route.path.replace(/\/$/, "") === "/gift-vouchers";
    },
  },

  methods: {
    // Authenticate with Gifts API
    async authenticate() {
      const response = await fetch(`${this.baseUrl}/admin-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: "info@olopo.app",
          password: "olopo@123",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.token) {
        throw new Error("Failed to authenticate with gifts API");
      }

      this.authToken = data.token;
    },

    // Fetch Categories
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

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      this.categoryId = data.data[0]?.id;
    },

    // Fetch Products (Server-side Pagination)
    async fetchProducts() {
      if (!this.categoryId) return;

      this.loading = true;

      try {
        const response = await fetch(
          `${this.baseUrl}/mobile-get/categories/${this.categoryId}/products?page=${this.currentPage}&limit=${this.productsPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${this.authToken}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        let fetchedProducts = data.data.products || [];

        // If home page → limit to 4 only
        if (!this.isGiftVoucherPage) {
          fetchedProducts = fetchedProducts.slice(0, 4);
        }

        this.products = fetchedProducts;

        this.hasMoreProducts =
          fetchedProducts.length === this.productsPerPage;

      } catch (error) {
        console.error("Product fetch error:", error);
      }

      this.loading = false;
    },

    async nextPage() {
      if (!this.hasMoreProducts) return;
      this.currentPage++;
      await this.fetchProducts();
    },

    async prevPage() {
      if (this.currentPage === 1) return;
      this.currentPage--;
      await this.fetchProducts();
    },

    async initialize() {
      try {
        await this.authenticate();
        await this.fetchCategory();
        await this.fetchProducts();
      } catch (error) {
        console.error("Initialization error:", error);
      }
    },
  },

  watch: {
    "$route.path"() {
      this.currentPage = 1;
      this.fetchProducts();
    },
  },

  mounted() {
    this.initialize();
  },
};
</script>
