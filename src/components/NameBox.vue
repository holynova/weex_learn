<template>
  <div class="nameBox">
    <text class="name">{{name}}</text>
    <text class="book">
      {{`出自
      <${book}>`}} {{title}}
    </text>
    <text>{{sentence}}</text>
  </div>
</template>

<style scoped>
.nameBox {
  width: 750px;
  background-color: #f60;
}

.name {
  font-size: 75px;
}

.book {
  font-size: 30px;
}
</style>

<script>
export default {
  name: 'name-box',
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  data: function() {
    return {
      name: this.data.name || 'hello',
      book: this.data.book || 'default book',
      title: this.data.title,
      sentence: this.data.sentence,
    }
  }
}
</script>
