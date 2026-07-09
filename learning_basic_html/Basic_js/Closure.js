function makeAddingFunction(firstNumber) {
  // firstNumber is scoped anywhere within makeAddingFunction,
  // including returnedFunction
  // any variables declared here will also be accessible within returnedFunction

  // we don't need to name the returned function
  // this is just to reference more easily in explanation
  return function returnedFunction(secondNumber) {
    // secondNumber is scoped only within returnedFunction
    return firstNumber + secondNumber;
  };
}

const add5 = makeAddingFunction(5);
console.log(add5(2)); // 7

const add8 = makeAddingFunction(8);
console.log(add8(2)); // 10

const add79100105110 = makeAddingFunction(79100105110);
console.log(add79100105110(111687378)); // 79211792488