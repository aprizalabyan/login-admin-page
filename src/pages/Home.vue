<template>
  <div id="home">
    <NavbarComp />
    <div class="container">
      <HeaderComp />
      <ProvideComp />
    </div>
    <OverviewComp />
    <div class="container">>
      <HowItWorksComp />
      <PricingComp />
      <FaqComp />
      <SubscribeComp />
    </div>
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from '../components/Navbar.vue'
import HeaderComp from '../components/Header.vue'
import ProvideComp from '../components/Provide.vue'
import OverviewComp from '../components/Overview.vue'
import HowItWorksComp from '../components/HowItWorks.vue'
import PricingComp from '../components/Pricing.vue'
import FaqComp from '../components/Faq.vue'
import SubscribeComp from '../components/Subscribe.vue'
import FooterComp from '../components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    NavbarComp,
    HeaderComp,
    ProvideComp,
    OverviewComp,
    HowItWorksComp,
    PricingComp,
    FaqComp,
    SubscribeComp,
    FooterComp
  }
}
</script>
