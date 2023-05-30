<template>
  <section id="not-found">
    <NavbarComp />
    <div class="container">
      <div class="d-flex flex-column flex-md-row align-items-center">
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center gap-4 order-1 order-md-0">
          <div class="col-7">
            <h4>Ooops!</h4>
            <h4>Page Not Found</h4>
            <span>This page doesn`t exist or was removed</span><br/>
            <span>We suggest you back to home</span>
          </div>
          <div class="col-7">
            <button class="btnPrimary">Learn More</button>
          </div>
        </div>
        <div class="col-10 col-md-6 py-5 order-0 order-md-1">
          <img src="../assets/page-not-found.svg" alt="not-found" class="w-100"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavbarComp from '../components/Navbar.vue'
export default {
  name: 'NotFoundPage',
  components: {
    NavbarComp
  }
}
</script>

<style>

</style>