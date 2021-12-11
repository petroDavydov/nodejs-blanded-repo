let div = (newArrNumber, operator) => {
  if (operator === "div") {
    let result = newArrNumber.reduce((acc, elem) => {
      return acc / elem;
    });
    console.log(result);
  }
};


// let div = () => {
//  console.log(`div`) 
// };

module.exports=div