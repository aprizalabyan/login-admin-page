<template>
  <section id="header-about" class="pb-5 mb-5">
    <NavbarComp aboutPage/>
    <div class="d-flex flex-column align-items-center justify-content-center py-5">
      <div class="col-9 col-md-7 col-lg-5 text-center py-5">
        <h2 class="mb-4">About Us</h2>
        <p>A small company offering data-driven solutions for campaign effectiveness using spatial data and detailed analysis of target audience (voters). Use technology that unites spatial data science and political science.</p>
        <div class="my-5">
          <button class="btnSecondary">Contact Us</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavbarComp from '../components/Navbar.vue'
export default {
  name: "HeaderAboutComp",
  components: {
    NavbarComp,
  }
}
</script>