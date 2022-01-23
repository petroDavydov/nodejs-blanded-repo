// const operations=require('./operations')
// console.log(operations)
// operations.sum()
// operations.sub()
// operations.mult()
// operations.div()


// const { sum, mult, div, sub } = require('./operations')

const actionHandler = require('./action-handler')
let [operator, ...numbers] = process.argv.slice(2);
let newArrNumber = numbers.map((number) => Number(number));
actionHandler(newArrNumber, operator)
