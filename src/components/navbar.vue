<template>
  <div class="navBar">
    <div @click='click("/xuenai")'
         :class="['nav',$route.path === '/xuenai'?'active':'']">
      <image class="img"
             resize='cover'
             :src='xuenai'></image><text class="word">雪乃</text>
    </div>
    <div @click='click("/yise")'
         :class="['nav',$route.path === '/yise'?'active':'']">
      <image class="img"
             resize='cover'
             :src='yise'></image><text class="word">一色</text>
    </div>
    <div @click='click("/tuanzi")'
         :class="['nav',$route.path === '/tuanzi'?'active':'']">
      <image class="img"
             resize='cover'
             :src='tuanzi'></image><text class="word">团子</text>
    </div>
    <div :class="['nav',$route.path === '/chidanta'?'active':'']"
         @click="click('chidanta')">
      <image class="img"
             resize='cover'
             :src='qidanta'></image><text class="word">吃蛋挞</text>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      xuenai: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2088617899,235284897&fm=26&gp=0.jpg',
      tuanzi: 'https://i04picsos.sogoucdn.com/99fe82e809997b49',
      yise: 'https://i02piccdn.sogoucdn.com/3bdd3415ef16c6c5',
      qidanta: 'https://i03picsos.sogoucdn.com/9f4d932b0100fb8b'
    }
  },
  methods: {
    click (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style scoped>
.navBar {
  height: 120px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.nav {
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
}
.active {
  background-color: #ff0;
}
.img {
  width: 60px;
  height: 60px;
}
</style>
