let sub = (newArrNumber, operator) => {
  if (operator === "sub") {
    let result = newArrNumber.reduce((acc, elem) => {
      return acc - elem;
    });
    console.log(result);
  }
};

// let sub = () => {
//  console.log(`sub`) 
// };

module.exports=sub