<template>
  <section class="">
    <!-- Header -->
    <div class="header d-flex align-items-center">
      <h5 class="m-0">Olopo Terms & Conditions</h5>
    </div>

    <!-- Content -->
    <div class="container mt-4">
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <p class="mt-2 text-muted">Loading terms and conditions...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="alert alert-danger" role="alert">
        <h6 class="alert-heading">Error Loading Terms & Conditions</h6>
        <p class="mb-0">{{ error }}</p>
        <hr>
        <button class="btn btn-outline-danger btn-sm" @click="fetchTermsConditions">
          <i class="fas fa-sync-alt"></i> Try Again
        </button>
      </div>

      <!-- Dynamic Content -->
      <div v-else-if="termsContent" class="terms-content" v-html="termsContent"></div>

      <!-- Fallback Content (if no content in database) -->
      <div v-else class="fallback-content">
        <div class="alert alert-info" role="alert">
          <i class="fas fa-info-circle"></i>
          Terms and conditions content is not available at the moment. Please check back later.
        </div>

        <!-- You can keep your original content as fallback -->
        <p class="text-muted">Last Updated: May 2, 2025</p>

        <h6 class="section-title">1. Acceptance of Terms</h6>
        <p>By using Olopo, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any applicable laws and regulations.</p>

        <h6 class="section-title">2. Use of Service</h6>
        <p>You agree to use the app solely for personal, non-commercial purposes. You may not reproduce, distribute, or modify content from Olopo without explicit permission.</p>

        <h6 class="section-title">3. User Accounts</h6>
        <p>When creating an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your login credentials.</p>

        <h6 class="section-title">4. Prohibited Activities</h6>
        <ul>
          <li>Sharing pirated or unauthorized content</li>
          <li>Attempting to breach security or access unauthorized areas</li>
          <li>Posting harmful, abusive, or illegal content</li>
        </ul>

        <h6 class="section-title">5. Intellectual Property</h6>
        <p>All content, trademarks, and branding on Olopo are the property of their respective owners. Unauthorized use may violate copyright laws.</p>

        <h6 class="section-title">6. Modifications</h6>
        <p>We reserve the right to update or modify these Terms at any time. Continued use of the app after changes implies your acceptance of the revised terms.</p>

        <h6 class="section-title">7. Termination</h6>
        <p>We may suspend or terminate your account if we believe you've violated any part of these Terms. Termination may result in loss of access to your profile or watchlist.</p>

        <h6 class="section-title">8. Limitation of Liability</h6>
        <p>Olopo is provided "as is." We are not liable for any damages arising from your use of the service, including data loss or downtime.</p>

        <h6 class="section-title">9. Governing Law</h6>
        <p>These Terms are governed by the laws of your country or region, and any disputes shall be handled in the appropriate jurisdiction.</p>

        <h6 class="section-title">10. Contact Us</h6>
        <p>If you have any questions regarding these Terms, please contact us at <a href="mailto:support@olopo.app">support@olopo.app</a>.</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: "Terms",
  data() {
    return {
      loading: true,
      error: null,
      termsContent: null
    }
  },
  async mounted() {
    await this.fetchTermsConditions()
  },
  methods: {
    async fetchTermsConditions() {
      try {
        this.loading = true
        this.error = null
        this.axios.get("/site-settings")
            .then(response => {
                if (response.data.success && response.data.data.terms_conditions) {
                    this.termsContent = response.data.data.terms_conditions
                } else {
                    this.termsContent = null
                }
            })
            .catch(error => {
                console.log(error.response?.data);
            });

      } catch (error) {
        console.error('Error fetching terms and conditions:', error)
        this.error = 'Failed to load terms and conditions. Please try again later.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.terms-content {
  line-height: 1.8;
}

.terms-content h1,
.terms-content h2,
.terms-content h3,
.terms-content h4,
.terms-content h5,
.terms-content h6 {
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.terms-content h1 {
  font-size: 2rem;
}

.terms-content h2 {
  font-size: 1.75rem;
}

.terms-content h3 {
  font-size: 1.5rem;
}

.terms-content h4 {
  font-size: 1.25rem;
}

.terms-content h5 {
  font-size: 1.1rem;
}

.terms-content h6 {
  font-size: 1rem;
}

.terms-content p {
  margin-bottom: 1rem;
  color: #555;
}

.terms-content ul,
.terms-content ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.terms-content li {
  margin-bottom: 0.5rem;
  color: #555;
}

.terms-content strong {
  color: #2c3e50;
  font-weight: 600;
}

.terms-content a {
  color: #007bff;
  text-decoration: none;
}

.terms-content a:hover {
  text-decoration: underline;
}

.terms-content blockquote {
  border-left: 4px solid #007bff;
  padding-left: 1rem;
  margin: 1rem 0;
  font-style: italic;
  background-color: #f8f9fa;
  padding: 1rem;
}

.section-title {
  color: #2c3e50;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}

.fallback-content {
  color: #6c757d;
}
</style>
