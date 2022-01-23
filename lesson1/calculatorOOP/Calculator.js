class Calculator {
  constructor(newArrNumber, operator) {
    this.newArrNumber = newArrNumber;
    this.operator = operator;
  }

  div = (newArrNumber, operator) => {
    if (operator === "div") {
      let result = newArrNumber.reduce((acc, elem) => {
        return acc / elem;
      });
      console.log(result);
    }
  };

  mult = (newArrNumber, operator) => {
    if (operator === "mult") {
      let result = newArrNumber.reduce((acc, elem) => {
        return acc * elem;
      });
      console.log(result);
    }
  };

  sub = (newArrNumber, operator) => {
    if (operator === "sub") {
      let result = newArrNumber.reduce((acc, elem) => {
        return acc - elem;
      });
      console.log(result);
    }
  };

  sum = (newArrNumber, operator) => {
    if (operator === "sum") {
      let result = newArrNumber.reduce((acc, elem) => {
        return acc + elem;
      }, 0);
      console.log(result);
    }
  };

  actionHandler = (newArrNumber, operator) => {
    switch (operator) {
      case "sum":
        this.sum(newArrNumber, operator);
        break;

      case "sub":
        this.sub(newArrNumber, operator);
        break;

      case "mult":
        this.mult(newArrNumber, operator);
        break;

      case "div":
        this.div(newArrNumber, operator);
        break;

      default:
        console.log(`Error format of operation`);
    }
  };

  init = () => {
    this.actionHandler(this.newArrNumber, this.operator);
  };
}

let [operator, ...numbers] = process.argv.slice(2);
let newArrNumber = numbers.map((number) => Number(number));

module.exports = new Calculator(newArrNumber, operator).init();
