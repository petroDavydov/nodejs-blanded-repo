let sum = (newArrNumber, operator) => {
  if (operator === "sum") {
    let result = newArrNumber.reduce((acc, elem) => {
      return acc + elem;
    }, 0);
    console.log(result);
  }
};


// let sum = () => {
// console.log(`sum`)
// };


module.exports = sum;
