<template>
  <div class="aside">
    <router-link class="logo" to="/" title="Back to Home">
      <img src="./logo.png" alt="LagouEdu">
      <h1>Edu Boss</h1>
    </router-link>
    <AppMenu/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppMenu from '@/components/AppMenu/index.vue'

export default Vue.extend({
  name: 'AppAside',
  components: { AppMenu }

})
</script>

<style lang="scss" scoped>
.aside {
  .logo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #545c64;
    color: #fff;
    text-decoration: none;

    img {
      width: 40px;
    }
  }

  .el-menu {
    &:not(.el-menu--collapse) {
      width: 200px;
    }
  }
}
</style>
