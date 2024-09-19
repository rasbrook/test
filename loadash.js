const _ =require('lodash')

const items=[1, [2,[3,[4, 9,0,2,[5]]]]]

const newitem=_.flattenDeep(items)

console.log(newitem)