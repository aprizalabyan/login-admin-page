<template>
  <div id="about">
    <HeaderAboutComp />
    <QuotesComp />
    <div class="container">
      <AdvisorComp />
      <FigureSayComp />
      <SubscribeComp />
    </div>
    <FooterComp />
  </div>
</template>

<script>
import HeaderAboutComp from '../components/HeaderAbout.vue'
import QuotesComp from '../components/Quotes.vue'
import AdvisorComp from '../components/Advisor.vue'
import FigureSayComp from '../components/FigureSay.vue'
import SubscribeComp from '../components/Subscribe.vue'
import FooterComp from '../components/Footer.vue'

export default {
  name: 'AboutPage',
  components: {
    HeaderAboutComp,
    QuotesComp,
    AdvisorComp,
    FigureSayComp,
    SubscribeComp,
    FooterComp
  }
}
</script>

<style>

</style>