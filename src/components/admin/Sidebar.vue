<template>
  <div id="sidebar" class="h-100">
    <div class="col px-0 py-4 px-lg-4 d-flex flex-column align-items-center align-items-lg-start">
      <img src="../../assets/logo-blue-white.svg" alt="logo" class="d-none d-lg-block"/>
      <img src="../../assets/logo-icon.svg" alt="logo" class="d-lg-none" />
      <div class="mt-4">
        <ul class="navbar-nav">
          <li class="nav-item py-2">
            <RouterLink to="/admin" class="nav-link d-flex align-items-center"><Icon icon="icon-park-outline:cd" width="20" height="20" class="me-2"/><div class="d-none d-lg-inline">Dashboard</div></RouterLink>
          </li>
        </ul>
        <div class="my-2">
          <span class="d-none d-lg-inline" style="font-size: 12px;">DATA</span>
          <span class="d-lg-none"><hr></span>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item py-1">
            <RouterLink to="/admin/vs" class="nav-link d-flex align-items-center"><Icon icon="ph:flower" width="20" height="20" class="me-2"/><div class="d-none d-lg-inline">Visualization</div></RouterLink>
          </li>
          <li class="nav-item py-1">
            <RouterLink to="/admin/cs" class="nav-link d-flex align-items-center"><Icon icon="mdi:jewel-case-outline" width="20" height="20" class="me-2"/><div class="d-none d-lg-inline">Case</div></RouterLink>
          </li>
          <li class="nav-item py-1">
            <RouterLink to="/admin/ds" class="nav-link d-flex align-items-center"><Icon icon="fluent:data-pie-24-regular" width="20" height="20" class="me-2"/><div class="d-none d-lg-inline">Data Set</div></RouterLink>
          </li>
          <li class="nav-item py-1">
            <RouterLink to="/admin/user-management" class="nav-link d-flex align-items-center"><Icon icon="icon-park-outline:data" width="20" height="20" class="me-2"/><div class="d-none d-lg-inline">Data Source</div></RouterLink>
          </li>
          <li class="nav-item py-1">
            <RouterLink to="/admin/cn" class="nav-link d-flex align-items-center"><Icon icon="ic:round-wifi" width="20" height="20" class="me-2"/><div class="d-none d-lg-inline">Connection</div></RouterLink>
          </li>
        </ul>
        <div class="my-2">
          <span class="d-none d-lg-inline" style="font-size: 12px;">ASSETS</span>
          <span class="d-lg-none"><hr></span>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item py-1">
            <RouterLink to="/admin/ic" class="nav-link d-flex align-items-center"><Icon icon="solar:figma-linear" width="20" height="20" class="me-2"/><div class="d-none d-lg-inline">Icon</div></RouterLink>
          </li>
          <li class="nav-item py-1">
            <RouterLink to="/admin/im" class="nav-link d-flex align-items-center"><Icon icon="ic:outline-image" width="20" height="20" class="me-2"/><div class="d-none d-lg-inline">Image</div></RouterLink>
          </li>
        </ul>
        <div class="my-2">
          <span class="d-none d-lg-inline" style="font-size: 12px;">AUTHORIZATION</span>
          <span class="d-lg-none"><hr></span>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item py-1">
            <RouterLink to="/admin/ac" class="nav-link d-flex align-items-center"><Icon icon="codicon:account" width="20" height="20" class="me-2"/><div class="d-none d-lg-inline">Account</div></RouterLink>
          </li>
          <li class="nav-item py-1">
            <RouterLink to="/admin/ro" class="nav-link d-flex align-items-center"><Icon icon="mingcute:shield-line" width="20" height="20" class="me-2"/><div class="d-none d-lg-inline">Role</div></RouterLink>
          </li>
          <li class="nav-item py-1">
            <RouterLink to="/admin/wo" class="nav-link d-flex align-items-center"><Icon icon="carbon:workspace" width="20" height="20" class="me-2"/><div class="d-none d-lg-inline">Workspace</div></RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  name: "SidebarComp",
  components: {
    Icon
  }
}
</script>