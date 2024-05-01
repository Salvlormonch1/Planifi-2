<script>
export default {
  name: 'app',
  title: 'Planifi',
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Check Account', to: '/check-account'},
        { label: 'Login', to: '/login' },
        { label: 'Register', to: '/register'}
      ]
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
