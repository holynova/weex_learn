export default {
  rand: {
    choose: function (arr) {
      let len = arr.length
      let index = Math.floor(Math.random() * len)
      return arr[index]
    }
  }
}