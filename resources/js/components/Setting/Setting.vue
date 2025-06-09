<template>
  <div class="site-settings-container">
    <div class="max-w-4xl mx-auto p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">Site Settings</h1>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Success Message -->
      <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
        {{ successMessage }}
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
        {{ errorMessage }}
      </div>

      <div v-if="!loading" class="space-y-8">
        <!-- Privacy Policy Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Privacy Policy</h2>
          <div id="privacy-policy-editor" class="min-h-[300px] border rounded"></div>
          <button
            @click="updatePrivacyPolicy"
            :disabled="updating"
            class="mt-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 px-6 py-2 rounded transition-colors"
          >
            {{ updating ? 'Updating...' : 'Update Privacy Policy' }}
          </button>
        </div>

        <!-- Terms and Conditions Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Terms and Conditions</h2>
          <div id="terms-conditions-editor" class="min-h-[300px] border rounded"></div>
          <button
            @click="updateTermsConditions"
            :disabled="updating"
            class="mt-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 px-6 py-2 rounded transition-colors"
          >
            {{ updating ? 'Updating...' : 'Update Terms & Conditions' }}
          </button>
        </div>

        <!-- Footer Address Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Footer Address</h2>
          <textarea
            v-model="footerAddress"
            class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            rows="4"
            placeholder="Enter footer address..."
          ></textarea>
          <button
            @click="updateFooterAddress"
            :disabled="updating"
            class="mt-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 px-6 py-2 rounded transition-colors"
          >
            {{ updating ? 'Updating...' : 'Update Footer Address' }}
          </button>
        </div>

        <!-- Update All Button -->
        <div class="text-center">
          <button
            @click="updateAllSettings"
            :disabled="updating"
            class="bg-gray-800 hover:bg-gray-900 disabled:bg-gray-500 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            {{ updating ? 'Updating All...' : 'Update All Settings' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SiteSettings',
  data() {
    return {
      loading: true,
      updating: false,
      successMessage: '',
      errorMessage: '',
      footerAddress: '',
      privacyPolicyEditor: null,
      termsConditionsEditor: null,
      settings: {}
    }
  },
  async mounted() {
    await this.loadQuillEditor()
    await this.fetchSettings()
    this.initializeEditors()
  },
  methods: {
    async loadQuillEditor() {
      // Load Quill CSS
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.snow.min.css'
      document.head.appendChild(link)

      // Load Quill JS
      return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.min.js'
        script.onload = resolve
        document.head.appendChild(script)
      })
    },

    initializeEditors() {
      // Initialize Privacy Policy Editor
      this.privacyPolicyEditor = new Quill('#privacy-policy-editor', {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            ['link', 'blockquote'],
            [{ 'align': [] }],
            ['clean']
          ]
        }
      })

      // Initialize Terms & Conditions Editor
      this.termsConditionsEditor = new Quill('#terms-conditions-editor', {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            ['link', 'blockquote'],
            [{ 'align': [] }],
            ['clean']
          ]
        }
      })

      // Set initial content
      if (this.settings.privacy_policy) {
        this.privacyPolicyEditor.root.innerHTML = this.settings.privacy_policy
      }
      if (this.settings.terms_conditions) {
        this.termsConditionsEditor.root.innerHTML = this.settings.terms_conditions
      }
    },

    async fetchSettings() {
      try {
        const response = await axios.get('/site-settings')
        this.settings = response.data.data
        this.footerAddress = this.settings.footer_address || ''
        this.loading = false
      } catch (error) {
        this.errorMessage = 'Failed to load settings'
        this.loading = false
        console.error('Error fetching settings:', error)
      }
    },

    async updatePrivacyPolicy() {
      try {
        this.updating = true
        this.clearMessages()

        const content = this.privacyPolicyEditor.root.innerHTML
        await axios.put('/site-settings/privacy-policy', {
          privacy_policy: content
        })

        this.successMessage = 'Privacy policy updated successfully!'
        setTimeout(() => this.clearMessages(), 3000)
      } catch (error) {
        this.errorMessage = 'Failed to update privacy policy'
        console.error('Error updating privacy policy:', error)
      } finally {
        this.updating = false
      }
    },

    async updateTermsConditions() {
      try {
        this.updating = true
        this.clearMessages()

        const content = this.termsConditionsEditor.root.innerHTML
        await axios.put('/site-settings/terms-conditions', {
          terms_conditions: content
        })

        this.successMessage = 'Terms and conditions updated successfully!'
        setTimeout(() => this.clearMessages(), 3000)
      } catch (error) {
        this.errorMessage = 'Failed to update terms and conditions'
        console.error('Error updating terms and conditions:', error)
      } finally {
        this.updating = false
      }
    },

    async updateFooterAddress() {
      try {
        this.updating = true
        this.clearMessages()

        await axios.put('/site-settings/footer-address', {
          footer_address: this.footerAddress
        })

        this.successMessage = 'Footer address updated successfully!'
        setTimeout(() => this.clearMessages(), 3000)
      } catch (error) {
        this.errorMessage = 'Failed to update footer address'
        console.error('Error updating footer address:', error)
      } finally {
        this.updating = false
      }
    },

    async updateAllSettings() {
      try {
        this.updating = true
        this.clearMessages()

        const privacyPolicy = this.privacyPolicyEditor.root.innerHTML
        const termsConditions = this.termsConditionsEditor.root.innerHTML

        await axios.put('/site-settings/all', {
          privacy_policy: privacyPolicy,
          terms_conditions: termsConditions,
          footer_address: this.footerAddress
        })

        this.successMessage = 'All settings updated successfully!'
        setTimeout(() => this.clearMessages(), 3000)
      } catch (error) {
        this.errorMessage = 'Failed to update settings'
        console.error('Error updating all settings:', error)
      } finally {
        this.updating = false
      }
    },

    clearMessages() {
      this.successMessage = ''
      this.errorMessage = ''
    }
  }
}
</script>

<style scoped>
.site-settings-container {
  background-color: #f7fafc;
  min-height: 100vh;
}

/* Custom Quill editor styles */
:deep(.ql-editor) {
  min-height: 200px;
}

:deep(.ql-toolbar) {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-radius: 8px 8px 0 0;
}

:deep(.ql-container) {
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-radius: 0 0 8px 8px;
}
</style>
