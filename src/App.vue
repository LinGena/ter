<script setup>
import MainPage from './components/MainPage.vue'
</script>

<template>
  <div class="container py-3">
    <header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <img src="src/components/icons/ter.jpg" width="50">
        <span class="fs-4">TER Scraper</span>
      </a>

      <!-- <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a class="me-3 py-2 text-dark text-decoration-none" href="#">Main</a>
        <a class="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
        <a class="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
        <a class="py-2 text-dark text-decoration-none" href="#">Pricing</a>
      </nav> -->
    </div>

    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">In DataBase</h1>
    </div>
  </header>
  <main>
    <MainPage />
  </main>
  </div>
    

</template>
