<template>
  <div>
    <scroller class="scroller"
              show-scrollbar='false'>
      <header class="header">
        <text class="word">雪之下雪乃</text>
      </header>
      <refresh class="refresh"
               @refresh="onrefresh"
               @pullingdown="onpullingdown"
               :display="refreshing ? 'show' : 'hide'">
        <text class="refreshword">刷新中 ...</text>
        <loading-indicator class="icon"></loading-indicator>
      </refresh>
      <div class="row"
           v-for="row in rows"
           :key="row.id">
        <image :src='row.value'
               @click="godetail"
               placeholder='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4113273826,3287323223&fm=26&gp=0.jpg'
               class="img"
               resize='cover'></image>
      </div>
      <loading @loading="onloading"
               :display="loadinging ? 'show' : 'hide'"
               class="loading">
        <text class="loadword">Loading ...</text>
        <loading-indicator class="icon"></loading-indicator>
      </loading>
    </scroller>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rows: [
        { id: 0, value: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2088617899,235284897&fm=26&gp=0.jpg' },
        { id: 1, value: 'https://i02piccdn.sogoucdn.com/442ecbfbb7b37908' },
        { id: 2, value: 'https://i02piccdn.sogoucdn.com/ee6572c519b99e56' },
        { id: 3, value: 'https://i03piccdn.sogoucdn.com/f41546758e7f7fc5' },
        { id: 4, value: 'https://i04piccdn.sogoucdn.com/eb3a630ffc4d2ff8' }
      ],
      loadinging: false,
      refreshing: false
    }
  },
  methods: {
    onloading () {
      this.loadinging = true
      setTimeout(() => {
        this.loadinging = false
      }, 1000)
    },
    onrefresh () {
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
      }, 1000)
    },
    godetail () {
      this.$router.push('/detail')
    }
  }
}
</script>
<style scoped>
.header {
  height: 120px;
  background-color: rgb(61, 245, 147);
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.word {
  color: #fff;
  font-size: 50px;
}
.row {
  height: 300px;
}
.img {
  width: 750px;
  height: 300px;
}
.loading {
  width: 750px;
  height: 100px;
  align-items: center;
  justify-content: center;
}
.loadword {
  color: blue;
}
.icon {
  margin-top: 16px;
  height: 40px;
  width: 40px;
  color: blue;
}
.refresh {
  width: 750px;
  align-items: center;
  justify-content: center;
  height: 100px;
}
.refreshword {
  color: blue;
}
</style>
