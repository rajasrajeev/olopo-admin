<template>
  <section class="">
    <!-- Header -->
    <div class="header d-flex align-items-center">
      <h5 class="m-0">Olopo Privacy Policy</h5>
    </div>

    <!-- Content -->
    <div class="container mt-4">
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <p class="mt-2 text-muted">Loading privacy policy...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="alert alert-danger" role="alert">
        <h6 class="alert-heading">Error Loading Privacy Policy</h6>
        <p class="mb-0">{{ error }}</p>
        <hr>
        <button class="btn btn-outline-danger btn-sm" @click="fetchPrivacyPolicy">
          <i class="fas fa-sync-alt"></i> Try Again
        </button>
      </div>

      <!-- Dynamic Content -->
      <div v-else-if="privacyContent" class="privacy-content" v-html="privacyContent"></div>

      <!-- Fallback Content (if no content in database) -->
      <div v-else class="fallback-content">
        <div class="alert alert-info" role="alert">
          <i class="fas fa-info-circle"></i>
          Privacy policy content is not available at the moment. Please check back later.
        </div>

        <!-- You can keep your original content as fallback -->
        <h6 class="section-title">Introduction</h6>
        <p>This Privacy Policy explains our policies and procedures regarding the collection, use, and disclosure of your information when you use our Service. It informs you about your privacy rights and how the law protects you. By using the Service, you agree to the collection and use of information as described in this Privacy Policy.</p>

        <h6 class="section-title">Contact Us</h6>
        <p>If you have any questions about this Privacy Policy, you can contact us:</p>
        <ul>
          <li>By visiting this page on our website: <a href="https://aspiromtechnologies.com" target="_blank">aspiromtechnologies.com</a></li>
          <li>By sending us an email: <a href="mailto:info@olopo.app">info@olopo.app</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: "Privacy",
  data() {
    return {
      loading: true,
      error: null,
      privacyContent: null
    }
  },
  async mounted() {
    await this.fetchPrivacyPolicy()
  },
  methods: {
    async fetchPrivacyPolicy() {
      try {
        this.loading = true
        this.error = null
        this.axios.get("site-settings")
            .then(response => {
                if (response.data.success && response.data.data.privacy_policy) {
                    this.privacyContent = response.data.data.privacy_policy
                } else {
                    this.privacyContent = null
                }
            })
            .catch(error => {
                console.log(error.response?.data);
            });
      } catch (error) {
        console.error('Error fetching privacy policy:', error)
        this.error = 'Failed to load privacy policy. Please try again later.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.privacy-content {
  line-height: 1.8;
}

.privacy-content h1,
.privacy-content h2,
.privacy-content h3,
.privacy-content h4,
.privacy-content h5,
.privacy-content h6 {
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.privacy-content h1 {
  font-size: 2rem;
}

.privacy-content h2 {
  font-size: 1.75rem;
}

.privacy-content h3 {
  font-size: 1.5rem;
}

.privacy-content h4 {
  font-size: 1.25rem;
}

.privacy-content h5 {
  font-size: 1.1rem;
}

.privacy-content h6 {
  font-size: 1rem;
}

.privacy-content p {
  margin-bottom: 1rem;
  color: #555;
}

.privacy-content ul,
.privacy-content ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.privacy-content li {
  margin-bottom: 0.5rem;
  color: #555;
}

.privacy-content strong {
  color: #2c3e50;
  font-weight: 600;
}

.privacy-content a {
  color: #007bff;
  text-decoration: none;
}

.privacy-content a:hover {
  text-decoration: underline;
}

.privacy-content blockquote {
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
