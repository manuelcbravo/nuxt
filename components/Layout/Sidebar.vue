<script setup>
    import {HSSideNav} from '@/Theme/HSSideNav.js';
</script>
<style>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
  color: #132144;
  background-color: rgba(189,197,209,.2) !important;
}

</style>

<template>
    <aside id="js-navbar-aside" class="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white  ">
    <div class="navbar-vertical-container">
      <div class="navbar-vertical-footer-offset">
        <!-- Logo -->

        <a class="navbar-brand" href="index.html" aria-label="Front">
          <img class="navbar-brand-logo" src="/../assets/svg/logos/logo.svg" alt="Logo" data-hs-theme-appearance="default">
          <img class="navbar-brand-logo" src="/../assets/svg/logos-light/logo.svg" alt="Logo" data-hs-theme-appearance="dark">
          <img class="navbar-brand-logo-mini" src="/../assets/svg/logos/logo-short.svg" alt="Logo" data-hs-theme-appearance="default">
          <img class="navbar-brand-logo-mini" src="/../assets/svg/logos-light/logo-short.svg" alt="Logo" data-hs-theme-appearance="dark">
        </a>

        <!-- End Logo -->

        <!-- Navbar Vertical Toggle -->
        <button type="button" class="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
          <i class="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
          <i class="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
        </button>

        <!-- End Navbar Vertical Toggle -->

        <!-- Content -->
        <div class="navbar-vertical-content">
          <div id="navbarVerticalMenu" class="nav nav-pills nav-vertical card-navbar-nav">
            <!-- Collapse -->
            <div class="nav-item">
              <a class="nav-link dropdown-toggle" href="#navbarVerticalMenuDashboards" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuDashboards" aria-expanded="true" aria-controls="navbarVerticalMenuDashboards">
                <i class="bi-house-door nav-icon"></i>
                <span class="nav-link-title">Dashboards</span>
              </a>

              <div id="navbarVerticalMenuDashboards" class="nav-collapse collapse" data-bs-parent="#navbarVerticalMenu">
                <NuxtLink class="nav-link" to="/dashboards/main">Default</NuxtLink>
                <a class="nav-link" href="dashboard-alternative.html">Alternative</a>
              </div>
            </div>
            <!-- End Collapse -->

            <!-- Collapse -->
            <div class="navbar-nav nav-compact">

            </div>
            <div id="navbarVerticalMenuPagesMenu">
              <!-- Collapse -->
              <div class="nav-item">
                <a :class="isUrl('/config/users') ? 'nav-link dropdown-toggle collapsed' : 'nav-link dropdown-toggle'" :aria-expanded="isUrl('/config/users') ? 'true' : 'false'" href="#navbarVerticalMenuPagesUsersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUsersMenu" aria-controls="navbarVerticalMenuPagesUsersMenu">
                  <i class="bi-people nav-icon"></i>
                  <span class="nav-link-title">Configuración</span>
                </a>

                <div id="navbarVerticalMenuPagesUsersMenu" :class="isUrl('/config/users') ? 'nav-collapse collapse show' : 'nav-collapse collapse'"  data-bs-parent="#navbarVerticalMenuPagesMenu">
                  <NuxtLink class="nav-link" to="/config/users">Users</NuxtLink>
                </div>
              </div>
              <!-- End Collapse -->

            </div>
            <!-- End Collapse -->
          </div>
        </div>
        <!-- End Content -->
       
      </div>
    </div>
  </aside>
</template>
<script>
  export default {
    data() {
      return {
        url:''
      }
    },
    components: {
        HSSideNav
    },
    ///THEME
    mounted() {
        var el = document.getElementById("js-navbar-aside");
        new HSSideNav(el).init();
        this.url = $nuxt.$route.path;
    },
    methods: {
      isUrl(...urls) {
      if (urls[0] === '') {
        return false
      }
      return urls.filter((url) => this.url.startsWith(url)).length
      },
    },
    }
</script>
