<template>
  <div ref="app">
    <router-view />
  </div>
</template>

<script>
const animation = weex.requireModule('animation')
export default {
  name: 'App',
  watch: {
    $route () {
      const app = this.$refs.app
      if (this.$route.path === '/home') {
        animation.transition(app, {
          styles: {
            transform: 'translateX(-750px)'
          },
          duration: 800, // ms
          timingFunction: 'ease',
          delay: 0 // ms
        }, function () {
          console.log('111')
        })
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
