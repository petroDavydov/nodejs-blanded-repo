class Calculator {
  static div = (newArrNumber, operator) => {
    if (operator === "div") {
      let result = newArrNumber.reduce((acc, elem) => {
        return acc / elem;
      });
      console.log(result);
    }
  };

  static mult = (newArrNumber, operator) => {
    if (operator === "mult") {
      let result = newArrNumber.reduce((acc, elem) => {
        return acc * elem;
      });
      console.log(result);
    }
  };

  static sub = (newArrNumber, operator) => {
    if (operator === "sub") {
      let result = newArrNumber.reduce((acc, elem) => {
        return acc - elem;
      });
      console.log(result);
    }
  };

  static sum = (newArrNumber, operator) => {
    if (operator === "sum") {
      let result = newArrNumber.reduce((acc, elem) => {
        return acc + elem;
      }, 0);
      console.log(result);
    }
  };

  static actionHandler = (newArrNumber, operator) => {
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

  static init = (newArrNumber, operator) => {
    this.actionHandler(newArrNumber, operator);
  };
}

let [operator, ...numbers] = process.argv.slice(2);
let newArrNumber = numbers.map((number) => Number(number));

module.exports = Calculator.init(newArrNumber, operator);

//
