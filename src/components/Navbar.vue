<template>
  <nav class="navbar navbar-expand-lg py-4" id="navbar">
    <div class="container">
      <a v-if="aboutPage" class="navbar-brand" href="/home"><img src="../assets/logo-white.svg" /></a>
      <a v-else class="navbar-brand" href="/home"><img src="../assets/logo.svg" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav align-items-center gap-3">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/product" class="nav-link">Product</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/blog" class="nav-link">Blog</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/pricing" class="nav-link">Pricing</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About Us</RouterLink>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse mt-4 mt-lg-0" id="navbarNav">
        <ul class="navbar-nav gap-4 align-items-center">
          <li class="nav-item">
            <RouterLink to="/login"><button class="btnLink">Sign in</button></RouterLink>
          </li>
          <li class="nav-item">
            <button class="btnSecondary">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComp',
  props: {
    aboutPage: Boolean
  }
}
</script>
