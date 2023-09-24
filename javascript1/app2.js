function checkNumberSign(number) {
    if (number > 0) {
      return "Positive";
    } else if (number < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  

  const num1 = 5;
  const num2 = -2;
  const num3 = 0;
  
  console.log(`Number ${num1} is ${checkNumberSign(num1)}`);
  console.log(`Number ${num2} is ${checkNumberSign(num2)}`);
  console.log(`Number ${num3} is ${checkNumberSign(num3)}`);
  