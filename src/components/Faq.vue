<template>
  <section id="faq" class="d-flex flex-column align-items-center py-5 mb-5">
    <div class="col-10 col-lg-8">
      <div class="text-center mb-5">
        <h3>Frequenly Asked Questions</h3>
      </div>
      <div class="accordion d-flex flex-column gap-4" id="accordionFaq">
        <div class="accordion-item px-3 py-2">
          <div class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#accordionItem1" aria-expanded="false"
              aria-controls="accordionItem1">
              What do you mean by public-facing usage?
            </button>
          </div>
          <div id="accordionItem1" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
            <div class="accordion-body">
              We define public-facing usage as leveraging CARTO to power enterprise-scale applications that are made available to external parties such as clients or the public, as opposed to internal demonstration-only applications.
            </div>
          </div>
        </div>
        <div class="accordion-item px-3 py-2">
          <div class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#accordionItem2" aria-expanded="false"
              aria-controls="accordionItem2">
              Can i  buy more storage for my individual plan?
            </button>
          </div>
          <div id="accordionItem2" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
            <div class="accordion-body">
              We define public-facing usage as leveraging CARTO to power enterprise-scale applications that are made available to external parties such as clients or the public, as opposed to internal demonstration-only applications.
            </div>
          </div>
        </div>
        <div class="accordion-item px-3 py-2">
          <div class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#accordionItem3" aria-expanded="false"
              aria-controls="accordionItem3">
              What happens to my data after the trial or if i cancel my subscription?
            </button>
          </div>
          <div id="accordionItem3" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
            <div class="accordion-body">
              We define public-facing usage as leveraging CARTO to power enterprise-scale applications that are made available to external parties such as clients or the public, as opposed to internal demonstration-only applications.
            </div>
          </div>
        </div>
        <div class="accordion-item px-3 py-2">
          <div class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#accordionItem4" aria-expanded="false"
              aria-controls="accordionItem4">
              Can i cancel my monthly or annual subscription?
            </button>
          </div>
          <div id="accordionItem4" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
            <div class="accordion-body">
              We define public-facing usage as leveraging CARTO to power enterprise-scale applications that are made available to external parties such as clients or the public, as opposed to internal demonstration-only applications.
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <button class="btnSecondary">Add Question</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqComp'
}
</script>