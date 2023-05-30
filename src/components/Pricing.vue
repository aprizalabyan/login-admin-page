<template>
  <section id="pricing" class="row align-items-center justify-content-center py-5 mb-5">
    <div class="col-8 col-lg-5 d-flex flex-column gap-3 text-center pb-5">
      <h3>Plans and Pricing</h3>
      <span>We provide to you the best choiches for you. The leading political campaign intelligence platform</span>
    </div>
    <div class="d-flex justify-content-center mb-4 gap-2 gap-lg-4">
      <div class="col col-lg-3">
        <div class="card h-100 px-3 py-5 gap-2 gap-lg-4">
          <div class="ratio ratio-16x9">
            <img src="../assets/pricing-box.svg" class="card-img-top" alt="img">
          </div>
          <div class="card-body text-center">
            <h6 class="card-title">Individual Plan</h6>
            <div class="d-flex gap-2 gap-lg-3 text-start mt-4">
              <span><Icon icon="jam:check" color="#2fab73" width="20" height="20" /></span><p>1 User</p>
            </div>
            <div class="d-flex gap-2 gap-lg-3 text-start">
              <span><Icon icon="jam:check" color="#2fab73" width="20" height="20" /></span><p>1 Basic Analysis</p>
            </div>
            <div class="d-flex gap-2 gap-lg-3 text-start">
              <span><Icon icon="jam:check" color="#2fab73" width="20" height="20" /></span><p>Unlimited Select Services</p>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div class="d-flex justify-content-center gap-1">
              <h5>$99</h5><span>/ mo</span>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btnSecondary">Select</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-lg-3">
        <div class="card h-100 px-3 py-5 gap-2 gap-lg-4">
          <div class="ratio ratio-16x9">
            <img src="../assets/pricing-box.svg" class="card-img-top" alt="img">
          </div>
          <div class="card-body text-center">
            <h6 class="card-title">Parties Plan</h6>
            <div class="d-flex gap-2 gap-lg-3 text-start mt-4">
              <span><Icon icon="jam:check" color="#2fab73" width="20" height="20" /></span><p>Unlimited User</p>
            </div>
            <div class="d-flex gap-2 gap-lg-3 text-start">
              <span><Icon icon="jam:check" color="#2fab73" width="20" height="20" /></span><p>Basic Analysis</p>
            </div>
            <div class="d-flex gap-2 gap-lg-3 text-start">
              <span><Icon icon="jam:check" color="#2fab73" width="20" height="20" /></span><p>Unlimited Select Services</p>
            </div>
            <div class="d-flex gap-2 gap-lg-3 text-start">
              <span><Icon icon="jam:check" color="#2fab73" width="20" height="20" /></span><p>Free Extend 1 Month</p>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div class="d-flex justify-content-center gap-1">
              <h5>$500</h5><span>/ mo</span>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btnSecondary">Select</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  name: 'PricingComp',
  components: {
		Icon,
	}
}
</script>