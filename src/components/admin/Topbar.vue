<template>
  <div id="topbar" class="d-flex justify-content-between px-3 py-2">
    <button class="btn"><Icon icon="solar:list-broken" width="24" height="24" /></button>
    <div class="d-flex">
      <button class="btn"><Icon icon="ph:moon-bold" width="24" height="24" /></button>
      <div class="dropdown">
        <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img :src="dataUser.image" alt="" class="me-2 h-100"/>
          <span style="letter-spacing: 1px;">{{ dataUser.username }}</span>
          <Icon icon="ep:arrow-down" class="ms-2"/>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li class="dropdown-item p-0 mb-2"><button type="button" class="btnUser">
            <span><Icon icon="codicon:account" width="18" height="18" class="me-2"/>Profile</span>
          </button></li>
          <li class="dropdown-item p-0"><button type="button" class="btnUser" @click="logout">
            <span><Icon icon="solar:logout-2-outline" width="18" height="18" class="me-2"/>Sign Out</span>
          </button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
  name: "TopbarComp",
  components: {
    Icon
  },
  props: {
    dataUser: {
      type: Object,
      required: true
    }
  },
  methods: {
    logout() {
      setTimeout(() => {
        localStorage.removeItem('user')
        this.$router.push({name: 'Login'})
      }, 1000)
    }
  }
}
</script>