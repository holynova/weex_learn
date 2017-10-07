<template>
  <div class="nameBox">
    <text class="name"> {{name}} </text>
    <text>{{book}}</text>
    <text>{{title}}</text>
    <text>{{sentence}}</text>
  </div>
</template>

<style scoped>
.nameBox {
  /* position: fixed; */
  width: 650px;
  background-color: #eee;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  /* margin-left: 50px; */
  /* margin-right: 50px; */
  padding: 50px;
  border-radius: 20px;
  /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .05), 0 1px 4px 0 rgba(0, 0, 0, .08), 0 3px 1px -2px rgba(0, 0, 0, .2); */
}

.name {
  font-size: 40px;
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
