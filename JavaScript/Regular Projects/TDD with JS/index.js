const Calculate = {
  factorial(inputNumber) {
      for (let i = inputNumber -1; i>= 1; i--) {
          inputNumber *= i
      }
      return inputNumber;
  }
}

module.exports = Calculate;


