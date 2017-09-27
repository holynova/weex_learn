
<template>
  <div class="wrapper">
    <text class="h1">hello world</text>
    <text class="h2">learn 组件</text>
    <text>{{title}}</text>
    <text>{{now}}</text>
    <text class="cnt" @click="onClick" @longpress="onLongpress">{{cnt}}</text>

  </div>
</template>

<script>
import moment from 'moment'
const log = console.log
export default {
  name: 'learn',
  data: () => {
    return {
      title: 'the quick brown fox jumps over a lazy dog',
      cnt: 0,
    }
  },
  computed: {
    now: () => {
      return moment().format('YYYY-MM-DD HH:mm:ss')
    }
  },
  methods: {
    onClick: () => {
      log('click')
      // log($this)
      // this.data.cnt += 1
    },
    onLongpress: () => {
      this.cnt += 10
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 750px;
  /* text-align: center; */
  /* align-items: center; */
  background-color: #eee;
}

.h1 {
  font-size: 20px;
  font-weight: bold;
}

.h2 {
  font-size: 16px;
  font-weight: bold;
}

.cnt {
  width: 300px;
  height: 300px;
  background-color: #f60;
  font-size: 150px;
}
</style>
