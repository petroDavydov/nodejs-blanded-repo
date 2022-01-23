// sum +
// sub -
// mult *
// div /

// console.log(process.argv.slice(2))

let [operator, ...numbers] = process.argv.slice(2);
let newArrNumber = numbers.map((number) => Number(number));

// console.log(operator)
// console.log(parsInt(number))
// console.log(newArrNumber);
// =============
//  сложение
// if (operator === "sum") {
//   let result = newArrNumber.reduce((acc, elem) => {
//     return acc + elem;
//   }, 0);
//   console.log(result);
// }
//

//  умножение
// if (operator === "mult") {
//   let result = newArrNumber.reduce((acc, elem) => {
//     return acc * elem;
//   });
//   console.log(result);
// }
// минус
// if (operator === "sub") {
//   let result = newArrNumber.reduce((acc, elem) => {
//     return acc - elem;
//   });
//   console.log(result);
// }
// деление
// if (operator === "div") {
//   let result = newArrNumber.reduce((acc, elem) => {
//     return acc / elem;
//   });
//   console.log(result);
// }
// =========
let sum = (newArrNumber, operator) => {
  if (operator === "sum") {
    let result = newArrNumber.reduce((acc, elem) => {
      return acc + elem;
    }, 0);
    console.log(result);
  }
};

// ==
let mult = (newArrNumber, operator) => {
  if (operator === "mult") {
    let result = newArrNumber.reduce((acc, elem) => {
      return acc * elem;
    });
    console.log(result);
  }
};
// ==

let sub = (newArrNumber, operator) => {
  if (operator === "sub") {
    let result = newArrNumber.reduce((acc, elem) => {
      return acc - elem;
    });
    console.log(result);
  }
};
// =======

let div = (newArrNumber, operator) => {
  if (operator === "div") {
    let result = newArrNumber.reduce((acc, elem) => {
      return acc / elem;
    });
    console.log(result);
  }
};

// =============3

switch (operator) {
  case "sum":
    sum(newArrNumber, operator);
    break;

  case "sub":
    sub(newArrNumber, operator);
    break;

  case "mult":
    mult(newArrNumber, operator);
    break;

  case "div":
    div(newArrNumber, operator);
    break;

  default:
    console.log(`Error format of operation`);
}
