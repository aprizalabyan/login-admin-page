<template>
  <div id="admin" class="d-flex">
    <div class="col-2 col-md-1 col-lg-2">
      <SidebarComp />
    </div>
    <div class="col-10 col-md-11 col-lg-10">
      <div class="col-12">
        <TopbarComp />
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script>
import SidebarComp from '../../components/admin/Sidebar.vue'
import TopbarComp from '../../components/admin/Topbar.vue'
export default {
  name: "AdminParent",
  components: {
    SidebarComp,
    TopbarComp,
  }
}
</script>