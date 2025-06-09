<template>
    <div>
        <div class="modal fade popup-modal" id="popupAdModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-btn" data-bs-dismiss="modal">&times;</div>
                <div class="modal-body">
                <video id="modalVideo" controls width="100%">
                    <source src="https://olopo.rajasrajeev.com/video2.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
            </div>
        </div>


        <footer class="footer">
            <div class="container">
            <!-- Main Footer Content -->
            <div class="row">
                <!-- Logo and App Downloads -->
                <div class="col-lg-3 col-md-6 mb-4">
                <img src="/theme/frontend/assets/images/footer/1.png" alt="9lopo" class="footer-logo">

                <div class="app-download-badges">
                    <img src="/theme/frontend/assets/images/footer/2.png" alt="Google Play">
                    <img src="/theme/frontend/assets/images/footer/3.png" alt="App Store">
                </div>

                <div class="social-icons">
                    <a href="https://www.facebook.com/share/16Xivmd1za/"><i class="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/olopoapp?igsh=MTJ5MDY3N3N0Yml2Zw=="><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-linkedin"></i></a>
                    <a href="https://youtube.com/@olopo-app?feature=shared"><i class="bi bi-youtube"></i></a>
                    <a href="#"><i class="bi bi-whatsapp"></i></a>
                </div>
                </div>

                <!-- Olopo Section -->
                <div class="col-lg-2 col-md-6 mb-4">
                <div class="footer-section">
                    <h5>Olopo</h5>
                    <ul>
                    <li><a href="/">Home Page</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    </ul>
                </div>
                </div>

                <!-- Product Section -->
                <div class="col-lg-2 col-md-6 mb-4">
                <div class="footer-section">
                    <h5>Product</h5>
                    <ul>
                    <li><a href="/">User App</a></li>
                    <li><a href="#">Merchants</a></li>
                    <li><a href="#">Franchisee</a></li>
                    </ul>
                </div>
                </div>

                <!-- Partners Section -->
                <div class="col-lg-2 col-md-6 mb-4">
                <div class="footer-section">
                    <h5>Partners</h5>
                    <ul>
                    <li><a href="#">HDFC Bank</a></li>
                    <li><a href="#">PineLabs</a></li>
                    </ul>

                    <h5 class="mt-3">Trusted By</h5>
                    <ul>
                    <li><a href="#">AKGSMA</a></li>
                    </ul>
                </div>
                </div>

                <!-- Contact Section -->
                <div class="col-lg-3 col-md-6 mb-4">
                <div class="footer-section">
                    <h5>Contacts us</h5>
                    <div class="contact-info">
                    <div class="mb-2">
                        <i class="bi bi-telephone"></i>
                        <span>+91 6380 963 702</span>
                    </div>
                    <div class="mb-3">
                        <i class="bi bi-geo-alt"></i>
                        <span>{{ footerAddress }}</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="row align-items-center">
                <div class="col-md-6">
                    <span>Copyright © {{ currentYear }} AspiromTechnologies Pvt Ltd.</span>
                </div>
                <div class="col-md-6 text-md-end mt-2 mt-md-0">
                    <span>All Rights Reserved | </span>
                    <a href="/terms-and-conditions">Terms and Conditions</a> |
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
                </div>
            </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      loading: true,
      footerAddress: null,
      currentYear: new Date().getFullYear()
    }
  },
  async mounted() {
    await this.fetchFooterAddress()
  },
  methods: {
    async fetchFooterAddress() {
      try {
        this.loading = true

        this.axios.get("/site-settings")
            .then(response => {
                if (response.data.success && response.data.data.footer_address) {
                    this.footerAddress = response.data.data.footer_address
                } else {
                    this.footerAddress = null
                }
            })
            .catch(error => {
                console.log(error.response?.data);
            });

      } catch (error) {
        console.error('Error fetching footer address:', error)
        // Silently fail and show fallback content
      } finally {
        this.loading = false
      }
    },

    formatAddress(address) {
      if (!address) return ''

      // Convert line breaks to <br> tags for display
      return address.replace(/\n/g, '<br>')
    }
  }
}
</script>
