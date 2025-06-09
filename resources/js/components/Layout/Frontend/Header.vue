<template>
    <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid px-4">
        <!-- Logo -->
        <a class="navbar-brand" href="/">
          <img src="/theme/frontend/assets/images/header/header.png" alt="olopo" />
        </a>

        <!-- Mobile toggle button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
          aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="navbarContent">
          <!-- Navigation links - centered -->
          <div class="nav-links mx-auto">
            <a class="active" href="/">User</a>
            <a href="#merchants" class="disabled" onclick="return false;">Merchants</a>
            <a href="#franchisees" class="disabled" onclick="return false;">Franchisees</a>
          </div>

          <!-- Download button - right aligned -->
          <div class="ms-auto">
            <a href="https://mpos-dev.olopo.app/qr" target="_blank" class="download-btn">
              <img src="theme/frontend/assets/images/downloadButton/download_button.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
