<template>
  <div class="page">
    <router-view class="main"></router-view>
    <NavBar class="navbar"></NavBar>
  </div>
</template>
<script>
import NavBar from './navbar'
export default {
  components: {
    NavBar
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.page {
  flex: 1;
  width: 750px;
  background-color: #f5f5f5;
}
.main {
  flex: 1;
}
.navbar {
  flex-basis: 120px;
  background-color: #fff;
}
</style>
