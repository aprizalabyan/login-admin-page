<template>
  <section id="quotes" class="d-flex justify-content-center py-3 mb-5">
    <div class="col-8 col-md-6 d-flex flex-column gap-4 text-center py-4">
      <h3><Icon icon="fa:quote-left" /></h3>
      <p>In just small steps you'll connected directly to our technology. Knowledge about your own-power, your rivals, your voters, and your region in Election.</p>
    </div>
  </section>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  name: "QuotesComp",
  components: {
    Icon
  }
}
</script>
