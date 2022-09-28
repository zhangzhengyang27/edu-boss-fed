<template>
  <div v-if="menu.shown" class="menu-item">
    <el-submenu v-if="menu.subMenuList&&menu.subMenuList.some(item => item.shown)" :index="menu.href">
      <template slot="title">
        <i :class="`el-icon-${menu.icon}`"></i>
        <span>{{ menu.name }}</span>
      </template>
      <menu-item v-for="subMenu in menu.subMenuList" :menu="subMenu" :key="subMenu.id"></menu-item>
    </el-submenu>
    <el-menu-item v-else :index="'/'+menu.href" >
      <i :class="`el-icon-${menu.icon}`"></i>
      <span slot="title">{{ menu.name }}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MenuItem',
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
