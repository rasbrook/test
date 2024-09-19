const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./cont/suncont/text.txt', 'utf-8')
const before = readFileSync('./cont/suncont/text1.txt', 'ucs-2')


writeFileSync('./cont/suncont/text2.txt', `i like it like that ${before}`)
const third=readFileSync('./cont/suncont/text2.txt', 'utf-8')

writeFileSync('./cont/suncont/text1.txt',`${third + before}hola como tale tale  boo \n`)




