const log = console.log
class Namer {
  constructor(data) {
    this.data = data
  }
  static new(data) {
    return new this(data)
  }
  randChoose(arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
  }
  randInt(max) {

  }

  //前开后闭区间
  randBetween(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  getName() {
    //获取一首诗
    const poem = this.randPoem()
    //获取这首诗中的一句
    const sentence = this.randSentence(poem)
    this.name = this.randName(sentence)
    log('name = ', name)
    // return this.name
    //从一句中取出两个字
    // 返回完整姓名和来源
    return {
      name: this.name,
      sentence,
      ...poem,
    }
  }
  randPoem() {
    let poem = null;
    do {
      poem = this.randChoose(this.data)
    } while (!poem.content)
    return poem;
  }
  randName(str, num = 2) {
    let indexArr = []
    for (let i = 0; i < num; i++) {
      indexArr.push(this.randBetween(0, str.length))
    }
    log(indexArr)
    indexArr = indexArr.sort((a, b) => (a - b))
    let charArr = indexArr.map(i => str.charAt(i))
    return charArr.join('')
  }

  randSentence(poem) {
    log('poem = ', poem)
    let { content } = poem
    let notEndMark = /[，,、：:“”‘'（）()《》〈〉【】『』「」﹃﹄〔〕—～﹏￥]/g
    let endMark = /[。.？?！!；;…]/g
    // 文言文虚词
    // let virtualCharsHigh = /[而乎乃其且所也以因于与则者之]/g
    let virtualChars = /[而何乎乃其且若所为焉也以因于与则者之]/g
    // 含义好的词
    let badChars = ``

    let sentences = content.replace(/[<>a-zA-Z0-9/]/g, '')
      .replace(/\s/g, '')
      .replace(notEndMark, '')
      .replace(virtualChars, '')
      .split(endMark)
      .filter(s => (s.length > 0))
    log(sentences)
    return this.randChoose(sentences)
  }

}

export default Namer