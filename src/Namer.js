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

  //前开后闭区间
  randBetween(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  getName(familyName = '') {
    //获取一首诗
    const poem = this.randPoem()
    //获取这首诗中的一句
    let name = ''
    let sentence = ""
    do {
      sentence = this.randSentence(poem)
      name = this.randName(sentence)
    } while (!name)

    // if (name[0] === name[1]) {
    log(`name = ${name}  sentence = ${sentence}`)
    // }
    // log('name = ', name)

    return {
      name: familyName + name,
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
  formatStr(str) {
    let notEndMark = /[，,、：:；;“”‘'（）()《》〈〉【】『』「」﹃﹄〔〕—～﹏￥]/g
    // 文言文虚词
    // let virtualCharsHigh = /[而乎乃其且所也以因于与则者之]/g
    let virtualChars = /[而何乎乃其且若所为焉也以因于与则者之矣]/g
    let badChars = /[鸡狗猪鬼舅鸟死亡卒匪羔羊母尸愁旧饥饿瓜氓]/g
    let otherChars = /[不女兮我狂]/g

    str = str.replace(notEndMark, '')
      .replace(virtualChars, '')
      .replace(badChars, '')
      .replace(otherChars, '')
    return str.length > 2 ? str : false
  }

  randName(str, num = 2) {
    str = this.formatStr(str)
    if (str) {
      let numArr = []
      for (let i = 0; i < str.length; i++) {
        numArr.push(i)
      }

      let indexArr = []

      for (let i = 0; i < num; i++) {
        let index = numArr.splice(this.randBetween(0, numArr.length), 1)
        indexArr.push(index)
        // indexArr.push(this.randBetween(0, str.length))
      }
      // log(indexArr)
      indexArr = indexArr.sort((a, b) => (a - b))
      let charArr = indexArr.map(i => str.charAt(i))
      return charArr.join('')
    }
  }

  randSentence(poem) {
    // log('poem = ', poem)
    let { content } = poem
    // let notEndMark = /[，,、：:；;“”‘'（）()《》〈〉【】『』「」﹃﹄〔〕—～﹏￥]/g
    let endMark = /[。.？?！!…]/g
    let sentences = content.replace(/[<>a-zA-Z0-9/]/g, '')
      .replace(/\s/g, '')
      .split(endMark)
      .filter(s => (s.length > 0))
    // log(sentences)
    return this.randChoose(sentences)
  }

}

export default Namer