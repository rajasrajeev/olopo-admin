<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Olopo Homepage</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

  <!-- Global CSS files that are needed on all pages -->
  <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/style.css') }}" />
  <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/offer-card.css') }}" />
  <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/popup-modal.css') }}" />

  <!-- Route-specific CSS files -->
  @if(Route::currentRouteName() == 'contact')
    <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/contact-us.css') }}" />
  @endif

  @if(Route::currentRouteName() == 'events')
    <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/event.css') }}" />
  @endif

  @if(Route::currentRouteName() == 'gallery')
    <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/gallery.css') }}" />
  @endif

  @if(Route::currentRouteName() == 'leaderboard')
    <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/leaderboard.css') }}" />
  @endif

  @if(Route::currentRouteName() == 'movies')
    <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/movie.css') }}" />
  @endif

  @if(Route::currentRouteName() == 'privacy-policy')
    <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/privacy-policy.css') }}" />
  @endif

  @if(Route::currentRouteName() == 'categories')
    <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/shoping.css') }}" />
  @endif

  @if(Route::currentRouteName() == 'terms-conditions')
    <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/terms-condition.css') }}" />
  @endif

  <!-- Alternative approach using switch statement for better organization -->
  <!--
  @switch(Route::currentRouteName())
    @case('contact')
      <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/contact-us.css') }}" />
      @break
    @case('events')
      <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/event.css') }}" />
      @break
    @case('gallery')
      <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/gallery.css') }}" />
      @break
    @case('leaderboard')
      <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/leaderboard.css') }}" />
      @break
    @case('movies')
      <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/movie.css') }}" />
      @break
    @case('privacy-policy')
      <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/privacy-policy.css') }}" />
      @break
    @case('shopping')
      <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/shopping.css') }}" />
      @break
    @case('terms-conditions')
      <link rel="stylesheet" href="{{ asset('theme/frontend/assets/css/terms-condition.css') }}" />
      @break
  @endswitch
  -->

</head>

<body>
    <div id="app"></div>
    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
  <script src="{{ asset('theme/frontend/assets/js/script.js') }}"></script>
  <script src="{{ asset('theme/frontend/assets/js/google-search.js') }}"></script>
  <script src="{{ asset('theme/frontend/assets/js/event.js') }}"></script>
  <script src="{{ asset('theme/frontend/assets/js/gift.js') }}"></script>
  <script src="{{ asset('theme/frontend/assets/js/leaderboard.js') }}"></script>

  <!-- Route-specific JavaScript files -->
  @if(Route::currentRouteName() == 'events')
    <script src="{{ asset('theme/frontend/assets/js/event.js') }}"></script>
  @endif

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
    crossorigin="anonymous"></script>
  <script>
    // Modal Show Once Script
    // This script ensures the modal shows only once per user using localStorage

    document.addEventListener('DOMContentLoaded', function () {
      // Check if modal has been shown before
      const modalShown = localStorage.getItem('olopoModalShown');

      // If modal hasn't been shown before, show it
      if (!modalShown) {
        var popupModal = new bootstrap.Modal(document.getElementById('popupAdModal'));
        popupModal.show();

        // Mark modal as shown in localStorage
        localStorage.setItem('olopoModalShown', 'true');
      }
    });

    // Stop video when modal is closed
    document.getElementById('popupAdModal').addEventListener('hidden.bs.modal', function () {
      const video = document.getElementById('modalVideo');
      if (video) {
        video.pause();
        video.currentTime = 0; // Rewind to beginning
      }
    });

    // Optional: Function to reset modal flag (for testing purposes)
    function resetModalFlag() {
      localStorage.removeItem('olopoModalShown');
      console.log('Modal flag reset. Modal will show on next page load.');
    }

    // Optional: Function to check if modal has been shown
    function hasModalBeenShown() {
      return localStorage.getItem('olopoModalShown') === 'true';
    }
  </script>
</body>

</html>
