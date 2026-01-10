<template>
<section class="mt-9 mb-7 contact-us-section" id="contact-us">
    <!-- Contact Section -->
    <div class="container mt-5 mb-5">
       <p class="text-muted">Get Started</p>
      <h1>Get in touch with us.<br><span>We're here to assist you.</span></h1>

      <form class="mt-5" @submit.prevent="submitForm">
        <div class="row g-4">
          <div class="col-md-4">
            <input type="text" class="form-control" placeholder="Your Name" required>
          </div>
          <div class="col-md-4">
            <input type="email" class="form-control" placeholder="Email Address" required>
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" placeholder="Phone Number (optional)">
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12">
            <textarea class="form-control" rows="2" placeholder="Message" required></textarea>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="consent" id="consentCheckbox">
              <label class="form-check-label" for="consentCheckbox">
                By submitting I give my consent to receive messages/RCS/Email/Calls from the brand regarding their updates
              </label>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-auto">
            <button type="submit" class="btn btn-orange">
              Leave us a Message →
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- Social Media Bar -->
    <div class="social-bar">
      <a href="#"><img src="/theme/frontend/assets/images/contact-us/fb.png" /></a>
      <a href="#"><img src="/theme/frontend/assets/images/contact-us/insta.png" /></a>
      <a href="#"><img src="/theme/frontend/assets/images/contact-us/whatsapp.png" /></a>
      <a href="#"><img src="/theme/frontend/assets/images/contact-us/linkedin.png" /></a>
      <a href="#"><img src="/theme/frontend/assets/images/contact-us/twitter.png" /></a>
      <a href="#"><img src="/theme/frontend/assets/images/contact-us/youtube.png" /></a>
    </div>


  </section>
</template>
<script>
export default {
    name: "Contact",
    data() {
        return {
            consent: false
        }
    },
    methods: {
        submitForm() {
            if (!this.consent) {
                alert('Please check the consent box to proceed.');
                return;
            }
            // Proceed with form submission logic here
            alert('Form submitted successfully!');
        }
    },
    mounted() {
    }
}
</script>
