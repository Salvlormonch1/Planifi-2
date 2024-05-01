<script>
export default {
  name: 'app',
  title: 'Planifi',
  data() {
    return {
      drawer: false,
      items: []
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<template>
  <router-view/>
</template>

<style>
</style>
