<template>
  <el-menu
    class="el-menu"
    default-active="1"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    :collapse="false"
    :unique-opened="true"
  >
    <menu-item v-for="menu in menuList" :key="menu.id" :menu="menu"></menu-item>
  </el-menu>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import menuItem from '@/components/AppMenu/MenuItem.vue'

export default {
  name: 'AppMenu',
  computed: {
    ...mapState(['menuList'])
  },
  components: {
    menuItem
  },
  methods: {
    handleOpen (key: string, keyPath: string): void {
      console.log(key, keyPath)
    },
    handleClose (key: string, keyPath: string): void {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
