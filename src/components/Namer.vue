<template>
  <div class="wrapper">
    <text class='h1'>
      你的名字:古诗文起名
    </text>

    <div class="btn" @click="pickBook">选择书籍 </div>
    <text class="book">{{book}}</text>
    <div class="btn" @click="genName">生成姓名</div>
    <!-- <text>姓名:{{name}}</text> -->
    <div class="names">
      <!-- <text repeat={{name in names}}>{{JSON.stringify(name,false,2)}}</text> -->
      <div v-for="name in names" :key='name.name'>

        <!-- <text v-for="name in names" :key='name.name'>{{name.name}}</text> -->
        <!-- <text>{{name.name}}</text> -->
        <name-box v-bind:data='name'></name-box>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background: #ccc;
}

.h1 {
  font-size: 30px;
}

.btn {
  width: 375px;
  background-color: cyan;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  /* display: inline; */
  padding-top: 30px;
  padding-bottom: 30px;
}

.book {
  width: 375px;
  /* display: inline; */
}
</style>

<script>
import shijing from '../data/shijing'
import tengwanggexu from '../data/tengwanggexu'
import utils from '../utils'
import Namer from '../Namer.js'
import NameBox from './NameBox.vue'

const picker = weex.requireModule('picker')
const log = () => { }


export default {
  name: 'namer',
  data: function() {
    return {
      books: '诗经,宋词,唐诗,楚辞'.split(','),
      book: 1,
      value: 1,
      name: '',
      names: [],
    }
  },
  components: { NameBox },
  methods: {
    pickBook: function() {
      let books = {
        index: 0,
        items: this.books
      }
      picker.pick(books, event => {
        if (event.result === 'success') {
          let index = event.data
          this.book = this.books[index]
        }
      })
    },
    //----------------------
    genName: function(event, num = 5) {
      log(num)
      // let poem = utils.rand.choose(shijing)
      // let sentences = poem.content.split(/<p>|<br>/g)
      // log(poem)
      // this.name = JSON.stringify(poem, false, 2)
      let book = shijing
      let names = []
      let n = new Namer(book)
      for (let i = 0; i < num; i++) {
        let nameObj = n.getName()
        // log('nameObj', nameObj)
        // let nameObj = JSON.stringify(sentences, false, 2)
        names.push(nameObj)
      }
      this.names = names
      // log(JSON.stringify(names, false, 2))
      return names
    },
    //----------------------


  }
}
</script>
